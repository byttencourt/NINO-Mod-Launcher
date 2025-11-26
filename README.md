# Nino Launcher Platform 🛡️🚀

> **Plataforma Desktop de Distribuição Segura de Software (DRM), Gestão de Mods e Pagamentos em Tempo Real.**

![Status](https://img.shields.io/badge/Status-Production-green)
![Security](https://img.shields.io/badge/Security-Proprietary-red)
![Stack](https://img.shields.io/badge/Stack-Electron%20%7C%20React%20%7C%20Supabase-blue)

## 🔒 Aviso de Propriedade Intelectual & Segurança

**Este é um repositório de Demonstração (Showcase).**

Devido à implementação de algoritmos proprietários de **Anti-Tamper, DRM (Digital Rights Management) e Proteção de Memória**, o código-fonte completo deste projeto é mantido em repositório privado para garantir a integridade do ecossistema e a segurança dos usuários finais.

Este documento detalha a **Arquitetura de Software, Decisões de Engenharia e Stack Tecnológica** utilizadas no desenvolvimento, demonstrando as competências técnicas aplicadas.

---

## 📋 Sobre o Projeto

O **Nino Launcher** é uma solução completa de **SaaS (Software as a Service)** para desktop, projetada para resolver o problema de pirataria e distribuição de conteúdo digital (Mods para Euro Truck Simulator 2).

Atuando como **Lead Developer e Arquiteto**, desenvolvi uma aplicação que não apenas gerencia downloads, mas cria um ambiente de execução seguro (Sandbox) para garantir que apenas usuários licenciados acessem o conteúdo premium.

---

## 🛠️ Arquitetura Técnica

### 🖥️ Frontend & Desktop (Client-Side)
*   **Electron & React (Vite):** Arquitetura híbrida focada em performance e UX responsiva.
*   **IPC Seguro:** Comunicação assíncrona e tipada entre processos Main (Node.js) e Renderer (React) para evitar vazamento de contexto.
*   **Design System:** Interface moderna com Glassmorphism e suporte a temas (Modo Imersivo/Padrão), construída com Tailwind CSS.

### ☁️ Backend & Fintech (Serverless)
*   **Supabase (BaaS):** Utilizado para Autenticação (Auth), Banco de Dados (PostgreSQL) e Realtime.
*   **Edge Functions (Deno):**
    *   O processamento de pagamentos sensíveis é isolado no Backend.
    *   As credenciais de API (Mercado Pago) nunca são expostas ao cliente.
*   **Mercado Pago Integration:** Webhooks e Polling para aprovação instantânea de transações PIX e liberação automática de licenças.

### 🛡️ Engenharia de Segurança (O Diferencial)

O sistema implementa múltiplas camadas de defesa em profundidade:

1.  **Sistema "Sentinel" (Heurística em Tempo Real):**
    *   Monitoramento de integridade de processos em execução.
    *   Detecção de ferramentas de engenharia reversa e debuggers.
    *   Proteção contra injeção de DLLs e leitura de memória.

2.  **Proteção de Arquivos (Race Conditions & Locking):**
    *   Algoritmos robustos para manipulação de arquivos no Windows, prevenindo erros de `EPERM`/`EBUSY` e garantindo limpeza ("Nuke") de arquivos temporários mesmo em caso de falha do sistema.
    *   Uso de atributos de sistema ocultos e manipulação direta de File Descriptors.

3.  **Dead Man's Switch (Processo Guardião):**
    *   Um processo filho independente monitora a saúde do Launcher principal. Em caso de encerramento forçado (Kill Process), o Guardião executa protocolos de emergência para limpar dados sensíveis.

---

## 📸 Galeria do Projeto

| **Loja & Gestão de Conteúdo** | **Checkout PIX em Tempo Real** |
|:---:|:---:|
| *Interface moderna para aquisição de ativos digitais.* | *Geração de QR Code e aprovação instantânea via WebSocket/Polling.* |

| **Dashboard do Usuário** | **Sistema de Alerta de Segurança** |
|:---:|:---:|
| *Gestão de biblioteca, atualizações e instalação automática.* | *Feedback visual e sonoro para violações de integridade.* |

---

## 🧠 Metodologia: AI-Augmented Engineering

Este projeto é um exemplo prático de **Desenvolvimento Acelerado por IA**.
Utilizando técnicas avançadas de Engenharia de Prompts e LLMs, atuei como **Arquiteto de Software**, guiando a implementação de:

*   Lógicas complexas de Sistema Operacional (Windows API via Node.js).
*   Integrações de API bancária segura.
*   Sistemas de Auto-Update (CI/CD com GitHub Releases).

Essa abordagem permitiu reduzir o ciclo de desenvolvimento de meses para semanas, mantendo a qualidade de código Enterprise.

---

**Desenvolvido por [Seu Nome]**
*Full Stack Desktop Developer | Security Enthusiast*
