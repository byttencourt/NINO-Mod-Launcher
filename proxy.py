import os
import json
from flask import Flask, jsonify, send_file, request, abort

app = Flask(__name__)

AUTHORIZED_FILE = "authorized.json"
ACTIVATOR_FOLDER = "activators"    # pasta local com os ativadores reais

# ... (outras funções, incluindo /authorized)

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

    # 2. Busca flexível (Case-Insensitive) na estrutura aninhada
    mods_dict = data.get("mods", {})
    found_key = None
    # Normaliza o nome que chega do cliente para busca
    mod_name_lower = mod_name_received.strip().lower()

    for key, mod_info in mods_dict.items():
        # A chave no JSON precisa ser comparada com o nome que o cliente enviou
        if key.strip().lower() == mod_name_lower:
            found_key = key # Guarda a chave EXATA (com a capitalização correta)
            break
            
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
    # O cliente envia o nome SEM a extensão (ex: NINOmods Fh6 156), mas a chave do JSON (found_key)
    # tem a extensão (ex: NINOmods Fh6 156.scs). O ativador no repositório é NINOmods Fh6 156 ATIVADOR.scs
    
    # Remove a extensão da chave do JSON para montar o nome do arquivo do ativador
    base_name, _ = os.path.splitext(found_key) 
    
    activator_filename = f"{base_name} ATIVADOR.scs"
    file_path = os.path.join(ACTIVATOR_FOLDER, activator_filename)
    
    if not os.path.exists(file_path):
        return jsonify({"error": f"Activator file missing for {found_key}"}), 500

    # 6. Envia o arquivo
    return send_file(file_path, as_attachment=True, download_name=activator_filename)
