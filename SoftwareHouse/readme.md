# Nino Digital Asset Platform 🛡️🚀

> **Ecossistema Enterprise para Distribuição, Monetização e Proteção de Software Desktop.**

![Status](https://img.shields.io/badge/Production-Ready-green?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-RASP_%26_DRM-red?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Event_Driven-blueviolet?style=for-the-badge)
![Stack](https://img.shields.io/badge/Tech-Electron_%7C_React_%7C_Supabase-blue?style=for-the-badge)

## 🔒 Aviso de Propriedade Intelectual

**Repositório de Demonstração Técnica (Architecture Showcase)**

O código-fonte core desta aplicação (núcleo de segurança e DRM) é **proprietário e fechado (Closed Source)** para garantir a integridade comercial do produto. Este repositório documenta a **Engenharia de Sistemas, Decisões Arquiteturais e a Experiência do Usuário (UX)**, servindo como portfólio técnico.

---

## 💼 Visão Executiva: O Problema & A Solução

No mercado de mods e softwares digitais, criadores enfrentam dois problemas críticos: **Pirataria (Redistribuição não autorizada)** e **Fricção de Vendas (Processos manuais de entrega)**.

O **Nino Platform** resolve isso entregando uma experiência "Steam-like" para produtos independentes:

1.  **Proteção de Receita (DRM):** O ativo digital nunca é exposto diretamente ao usuário. Ele é injetado e removido dinamicamente, garantindo que apenas assinantes ativos tenham acesso.
2.  **Automação Fintech:** De zero a acesso em segundos. O sistema processa pagamentos PIX em tempo real e vincula a licença ao hardware do cliente instantaneamente.
3.  **Ciclo de Vida Completo:** Loja -> Compra -> Instalação -> Execução -> Atualização. Tudo em um único aplicativo.

---

## 📸 Jornada do Usuário (Visual Walkthrough)

### 1. A Experiência de Compra (Fintech)
*Uma interface fluida que converte visitantes em clientes.*

| **Storefront Imersiva** | **Checkout PIX em Tempo Real** |
|:---:|:---:|
| ![Store_UI](https://via.placeholder.com/500x300?text=Loja+Moderna+com+Galeria+e+Filtros) | ![Checkout_Flow](https://via.placeholder.com/500x300?text=QR+Code+PIX+e+Polling+de+Status) |
| *Design responsivo com glassmorphism e galeria interativa.* | *Integração direta com Mercado Pago. O sistema detecta o pagamento via WebSocket/Polling.* |

### 2. Gestão e Execução (Core)
*Onde a mágica técnica acontece: instalação segura e sandbox.*

| **Dashboard & Biblioteca** | **Modo Imersivo (Roleplay)** |
|:---:|:---:|
| ![Dashboard_UI](https://via.placeholder.com/500x300?text=Dashboard+com+Status+de+Instalacao) | ![Immersive_UI](https://via.placeholder.com/500x300?text=Interface+Tematica+Caminhoneiro) |
| *Gestão de versões, auto-update e status da licença.* | *Adaptação de linguagem técnica para termos do nicho (Ex: "Motor" vs "Kernel").* |

### 3. Feedback de Segurança
*Transparência e controle para o administrador.*

| **Painel Administrativo** | **Alertas de Segurança (User Side)** |
|:---:|:---:|
| ![Admin_Panel](https://via.placeholder.com/500x300?text=Gestao+de+Usuarios+e+Logs) | ![Security_Alert](https://via.placeholder.com/500x300?text=Alerta+de+Violação+de+Integridade) |
| *Controle total de chaves, usuários e auditoria de entregas.* | *Feedback visual imediato em caso de tentativa de tampering.* |

---

## 🛡️ Engenharia de Segurança (Architecture & Security)

A plataforma utiliza um modelo de segurança em camadas (**Defense in Depth**) para proteger a propriedade intelectual.

### 1. RASP (Runtime Application Self-Protection)
Implementação de um sistema de **Vigilância Heurística** que monitora o ambiente de execução em tempo real.
*   **Detecção de Intrusão:** Identificação de ferramentas de engenharia reversa, debuggers e sniffers de memória.
*   **Proteção de Contexto:** O sistema reage a mudanças de foco de janela e tentativas de manipulação da área de transferência (Clipboard Security Policy).

### 2. Watchdog Sidecar Pattern (O "Guardião")
Arquitetura de processos resiliente. Um processo secundário isolado ("Sidecar") monitora a saúde do processo principal.
*   **Fail-Safe Protocol:** Se o Launcher for encerrado forçadamente (Kill Process), o Watchdog assume e executa a sanitização do ambiente.
*   **Atomic Cleanup:** Garantia de que nenhum arquivo descriptografado persista no disco após a sessão.

### 3. Atomic File Transactions & Integrity
Abordagem robusta para I/O de arquivos no Windows.
*   Prevenção de **Race Conditions** e Deadlocks de I/O.
*   Uso de **Obfuscated Asset Storage** para dificultar o acesso direto ao sistema de arquivos.
*   **Persistence Recovery:** Mecanismos de recuperação que garantem a limpeza do ambiente no próximo boot em caso de falha catastrófica (BSOD/Queda de Energia).

---

## 🛠️ Stack Tecnológica & Integrações

### Client-Side (Desktop)
*   **Core:** Electron (Process Isolation), React 18, TypeScript.
*   **Build System:** Vite (Fast HMR), Electron-Builder (NSIS Installers).
*   **Social:** Integração Discord RPC (Rich Presence) para engajamento comunitário.

### Server-Side (Serverless Architecture)
*   **Database:** PostgreSQL (Supabase) com Row Level Security (RLS).
*   **Backend Logic:** Edge Functions (Deno/Node.js) para isolar regras de negócio críticas.
*   **Payments:** API Mercado Pago (Webhooks & Idempotency Keys).

### DevOps
*   **CI/CD:** Pipeline de atualização automática (OTA) via **Electron-Updater** e GitHub Releases.

---

## 🚀 Metodologia: AI-Augmented Architect

Este projeto foi desenvolvido utilizando uma metodologia de **Engenharia Aumentada por IA**.
Como Arquiteto de Software, utilizei LLMs para acelerar a escrita de código boilerplate e testes unitários, permitindo foco total na **Arquitetura de Segurança**, **Design Patterns** e **Lógica de Negócios Complexa**.

O resultado é um produto com maturidade de software Enterprise, entregue em um ciclo de desenvolvimento extremamente otimizado.

---

**Desenvolvido por [Seu Nome]**
*Senior Full Stack Developer | Desktop & Security Specialist*
