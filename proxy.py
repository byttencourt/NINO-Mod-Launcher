import os
import json
from flask import Flask, jsonify, send_file, request, abort

app = Flask(__name__)

AUTHORIZED_FILE = "authorized.json"
ACTIVATOR_FOLDER = "activators"   # pasta local com os ativadores reais


@app.route("/")
def home():
    return jsonify({
        "status": "online",
        "service": "Mods Proxy"
    })


@app.route("/authorized")
def get_authorized():
    if not os.path.exists(AUTHORIZED_FILE):
        return jsonify({"error": "authorized.json not found"}), 404

    with open(AUTHORIZED_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    return jsonify(data)


@app.route("/get_activator")
def get_activator():
    """Entrega ativador SEM expor endereço real"""

    mod_name = request.args.get("mod")
    hwid = request.args.get("hwid")

    if not mod_name or not hwid:
        return jsonify({"error": "Missing parameters"}), 400

    # Carregar lista
    with open(AUTHORIZED_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Verificar se mod existe
    if mod_name not in data:
        return jsonify({"error": "Mod not registered"}), 404

    # Verificar HWID
    if hwid not in data[mod_name]["allowed"]:
        return jsonify({"error": "HWID not authorized"}), 403

    # Caminho interno do ativador
    file_path = os.path.join(ACTIVATOR_FOLDER, f"{mod_name} ATIVADOR.scs")

    if not os.path.exists(file_path):
        return jsonify({"error": "Activator file missing"}), 500

    # O Render envia normalmente via send_file
    return send_file(file_path, as_attachment=True)
