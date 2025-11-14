from flask import Flask, request, jsonify, Response
import requests
import os

app = Flask(__name__)

# URL do authorized.json público
AUTHORIZED_URL = "https://raw.githubusercontent.com/byttencourt/AuthProtector/main/authorized.json"

# Nome do repositório privado onde ficam os ativadores
# Ex: "byttencourt/ModActivators"
PRIVATE_REPO = os.getenv("PRIVATE_REPO")

# Token do GitHub (NUNCA colocar aqui, apenas no Render!)
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")


@app.route("/")
def home():
    return "NINOMODS ACTIVATION PROXY ONLINE"


@app.route("/get_activator", methods=["GET"])
def get_activator():
    mod = request.args.get("mod")
    hwid = request.args.get("hwid")

    if not mod or not hwid:
        return jsonify({"error": "missing mod or hwid"}), 400

    # 1 — Buscar authorized.json público
    try:
        data = requests.get(AUTHORIZED_URL).json()
    except Exception:
        return jsonify({"error": "cannot load authorized.json"}), 500

    # 2 — Procurar mod na lista
    if mod not in data:
        return jsonify({"error": "mod not found in authorization list"}), 403

    entry = data[mod]

    allowed = entry.get("allowed", [])
    banned = entry.get("banned", [])

    # 3 — Validar HWID
    if hwid in banned:
        return jsonify({"error": "HWID BANNED"}), 403

    if hwid not in allowed:
        return jsonify({"error": "HWID NOT AUTHORIZED"}), 403

    # 4 — Arquivo no GitHub privado
    # O nome do arquivo é derivado do nome do mod:
    # Ex: mod "NINOmods Truck4speed.scs" => ativador "NINOmods Truck4speed ATIVADOR.scs"
    activator_name = mod.replace(".scs", " ATIVADOR.scs")

    file_url = f"https://api.github.com/repos/{PRIVATE_REPO}/contents/{activator_name}"

    # 5 — Requisição autenticada ao GitHub
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.raw"
    }

    file_response = requests.get(file_url, headers=headers)

    if file_response.status_code != 200:
        return jsonify({"error": "activator not found in private repo"}), 404

    # 6 — Stream do arquivo diretamente
    return Response(
        file_response.content,
        mimetype="application/octet-stream",
        headers={
            "Content-Disposition": f"attachment; filename={activator_name}"
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
