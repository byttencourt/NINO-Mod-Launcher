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

    # Carregar lista
    try:
        with open(AUTHORIZED_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        return jsonify({"error": "authorized.json not found on server"}), 500
    except json.JSONDecodeError:
        return jsonify({"error": "Error reading authorized.json"}), 500


    # --- NOVO TRECHO DE BUSCA FLEXÍVEL (CASE-INSENSITIVE) ---
    found_key = None
    # Converte o nome recebido para minúsculas para busca
    mod_name_lower = mod_name_received.strip().lower()

    for key, mod_info in data.items():
        if key.strip().lower() == mod_name_lower:
            found_key = key # Guarda a chave EXATA como está no JSON
            break

    # Verificar se mod existe na lista
    if not found_key:
        # Se for um mod .scs, tente buscar sem a extensão como fallback
        if mod_name_lower.endswith(".scs"):
            mod_name_base_lower = mod_name_lower.rsplit('.', 1)[0]
            for key, mod_info in data.items():
                if key.strip().lower() == mod_name_base_lower:
                    found_key = key
                    break
        
        if not found_key:
            # Não encontrou o mod de forma alguma
            return jsonify({"error": "Mod not registered"}), 404
            
    # --- FIM DO TRECHO DE BUSCA FLEXÍVEL ---
    
    # Verificar HWID usando a chave EXATA encontrada (found_key)
    allowed_hwids = data[found_key].get("allowed_hwids", [])
    banned_hwids = data[found_key].get("banned_hwids", [])

    if hwid in banned_hwids:
        return jsonify({"error": "HWID BANNED"}), 403
        
    if hwid not in allowed_hwids:
        return jsonify({"error": "HWID not authorized"}), 403

    # Caminho interno do ativador
    # Usamos a chave exata do mod, que é o nome da pasta (NINOmods-ativadores)
    # Exemplo do seu repositório: NINOmods Fh6 156 ATIVADOR.scs
    activator_filename = f"{found_key} ATIVADOR.scs"
    file_path = os.path.join(ACTIVATOR_FOLDER, activator_filename)
    
    # Se o nome do arquivo no repositório não inclui a extensão .scs,
    # você deve remover o .scs de 'found_key' aqui
    # Ex: se found_key for "NINOmods Fh6 156.scs", o nome do arquivo é NINOmods Fh6 156 ATIVADOR.scs
    # se found_key for "NINOmods Fh6 156", o nome do arquivo é NINOmods Fh6 156 ATIVADOR.scs
    
    # Presumindo que o nome do mod no seu JSON é o nome do arquivo SCS (ex: NINOmods Fh6 156.scs)
    
    if not os.path.exists(file_path):
        # Tenta remover o .scs se o arquivo ativador for nomeado sem ele
        base_name, ext = os.path.splitext(activator_filename)
        if ext == ".scs":
             file_path_no_ext = os.path.join(ACTIVATOR_FOLDER, f"{base_name} ATIVADOR")
             if os.path.exists(file_path_no_ext):
                 file_path = file_path_no_ext
             else:
                 return jsonify({"error": f"Activator file missing for {found_key}"}), 500
        else:
             return jsonify({"error": f"Activator file missing for {found_key}"}), 500


    # O Render envia normalmente via send_file
    return send_file(file_path, as_attachment=True, download_name=f"{found_key} ATIVADOR.scs")
