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

    mod_name_received = request.args.get("mod")
    hwid = request.args.get("hwid")

    if not mod_name_received or not hwid:
        return jsonify({"error": "Missing parameters"}), 400

    # 1. Carregar lista
    try:
        with open(AUTHORIZED_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception:
        return jsonify({"error": "Error loading authorized data"}), 500

    # 2. Busca flexível e à prova de falhas (Case-Insensitive)
    mods_dict = data.get("mods", {})
    found_key = None
    # Nome recebido pelo cliente, em minúsculas
    mod_name_lower = mod_name_received.strip().lower()

    # --- Lógica de Busca Robusta ---
    
    # 2a. Tenta casar exatamente como veio (nome enviado pelo cliente, ex: "NINOmods Fh6 156")
    search_names = [mod_name_lower]
    
    # 2b. Tenta casar adicionando a extensão ".scs" (ex: "NINOmods Fh6 156.scs")
    if not mod_name_lower.endswith(".scs"):
        search_names.append(mod_name_lower + ".scs")
    
    # 2c. Tenta casar removendo a extensão (caso o cliente tenha enviado com)
    if mod_name_lower.endswith(".scs"):
        search_names.append(mod_name_lower.rsplit('.', 1)[0])

    for search_name in set(search_names): # Usa set para evitar buscas duplicadas
        for key, mod_info in mods_dict.items():
            if key.strip().lower() == search_name:
                found_key = key # Encontramos a chave EXATA do JSON (ex: "NINOmods Fh6 156.scs")
                break
        if found_key:
            break
            
    # --- Fim da Lógica de Busca Robusta ---

    # 3. Verifica se o mod existe na lista
    if not found_key:
        return jsonify({"error": "Mod not registered"}), 404

    # 4. Verifica HWID
    allowed_hwids = mods_dict[found_key].get("allowed_hwids", [])
    banned_hwids = mods_dict[found_key].get("banned_hwids", [])

    if hwid in banned_hwids:
        return jsonify({"error": "HWID BANNED"}), 403
        
    if hwid not in allowed_hwids:
        return jsonify({"error": "HWID not authorized"}), 403

    # 5. Caminho interno do ativador
    # O nome do ativador é sempre o nome base do mod (sem .scs) + " ATIVADOR.scs"
    base_name, _ = os.path.splitext(found_key) 
    
    activator_filename = f"{base_name} ATIVADOR.scs"
    file_path = os.path.join(ACTIVATOR_FOLDER, activator_filename)
    
    if not os.path.exists(file_path):
        return jsonify({"error": f"Activator file missing for {base_name}"}), 500

    # 6. Envia o arquivo
    return send_file(file_path, as_attachment=True, download_name=activator_filename)
