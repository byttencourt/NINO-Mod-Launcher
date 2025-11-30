export const translations = {
  en: {
    nav: {
      features: 'Features',
      architecture: 'Architecture',
      security: 'Security',
      fintech: 'Fintech',
      demo: 'Request Demo',
    },
    hero: {
      badge: 'v2.0 Enterprise Release Available',
      title1: 'Secure Distribution',
      title2: 'For Digital Assets',
      description: 'Nino Platform connects creators to users with military-grade protection. The ultimate Electron & React solution for licensing, payments, and instant delivery.',
      btnDownload: 'Download Launcher',
      btnArch: 'View Architecture',
      stats: {
        uptime: 'Uptime',
        latency: 'Latency Polling',
        encryption: '256-bit Encryption',
        hwid: 'Lock Protection'
      }
    },
    features: {
      subtitle: 'Core Capabilities',
      title: 'Engineered for',
      titleHighlight: 'Scale & Security',
      description: "The Nino Platform isn't just a launcher; it's a complete ecosystem for digital rights management.",
      cards: {
        revenue: {
          title: "Revenue Protection",
          desc: "Real-time license validation prevents unauthorized access. Your intellectual property is safe with our robust DRM."
        },
        fintech: {
          title: "Fintech Integrated",
          desc: "Seamless checkout via Mercado Pago API with PIX support. Instant Delivery triggered by real-time payment polling."
        },
        hwid: {
          title: "HWID Binding",
          desc: "Licenses are locked to the user's specific hardware signature, effectively stopping account sharing and credential leaks."
        },
        secure: {
          title: "Secure Asset Delivery",
          desc: "Assets are decrypted only in memory during runtime. Our pipeline minimizes the attack surface against dumping."
        },
        unified: {
          title: "Unified Experience",
          desc: "Store, Library, and Execution environment in a single Electron application. Built with React for responsiveness."
        },
        updates: {
          title: "Auto-Updates",
          desc: "Keep your users secure with OTA updates via GitHub Releases. Patches are applied without manual intervention."
        }
      }
    },
    techStack: {
      title: "Hybrid Architecture",
      subtitle: "Client-Side & Serverless",
      description: "We utilize a modern stack prioritizing strict typing and secure communication protocols. The frontend runs on a hardened Electron shell, while critical business logic is offloaded to Edge Functions.",
      electron: {
        title: "Electron & React (TypeScript)",
        desc: "Cross-platform client with strict typing. IPC bridge ensures secure communication between Main and Renderer processes."
      },
      supabase: {
        title: "Supabase & PostgreSQL",
        desc: "Relational data integrity for licenses and user sessions. Row Level Security (RLS) enabled by default."
      },
      deno: {
        title: "Deno Edge Functions",
        desc: "Serverless backend for handling payment webhooks and HWID validation. Secrets never leave the server."
      },
      codeWindow: {
        fileName: "architecture.ts",
        integrity: "System Integrity Verified"
      }
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      description: "Start monetizing your digital assets today with instant PIX payments.",
      starter: {
        name: "Starter",
        price: "Free",
        cta: "Get Started"
      },
      enterprise: {
        name: "Enterprise",
        price: "$99",
        period: "/mo",
        fee: "+ 2.5% transaction fee",
        cta: "Start Free Trial",
        badge: "Popular"
      },
      custom: {
        name: "Custom",
        price: "Talk to Us",
        cta: "Contact Sales"
      },
      features: {
        products5: "5 Products",
        drmStd: "Standard DRM",
        community: "Community Support",
        unlimited: "Unlimited Products",
        hwidAdv: "Advanced HWID Locking",
        pix: "Instant PIX Settlement",
        edge: "Priority Edge Network",
        white: "Whitelabel Solution",
        infra: "Dedicated Infrastructure",
        gateways: "Custom Payment Gateways"
      }
    },
    footer: {
      desc: "The next generation digital asset distribution platform. Secure, fast, and developer-friendly.",
      headers: {
        product: "Product",
        resources: "Resources",
        legal: "Legal"
      },
      links: {
        features: "Features",
        security: "Security",
        integrations: "Integrations",
        changelog: "Changelog",
        docs: "Documentation",
        api: "API Reference",
        community: "Community",
        help: "Help Center",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        agreement: "DaaS Agreement"
      },
      rights: "© 2024 Nino Platform. All rights reserved."
    },
    ai: {
      greeting: "Hi! I am the Nino Platform AI assistant. Ask me about our Security, Tech Stack, or Fintech integration."
    }
  },
  pt: {
    nav: {
      features: 'Funcionalidades',
      architecture: 'Arquitetura',
      security: 'Segurança',
      fintech: 'Fintech',
      demo: 'Solicitar Demo',
    },
    hero: {
      badge: 'Versão Enterprise v2.0 Disponível',
      title1: 'Distribuição Segura',
      title2: 'Para Ativos Digitais',
      description: 'A Plataforma Nino conecta criadores a usuários com proteção de nível militar. A solução definitiva em Electron & React para licenciamento, pagamentos e entrega instantânea.',
      btnDownload: 'Baixar Launcher',
      btnArch: 'Ver Arquitetura',
      stats: {
        uptime: 'Uptime',
        latency: 'Latência Polling',
        encryption: 'Criptografia 256-bit',
        hwid: 'Proteção HWID'
      }
    },
    features: {
      subtitle: 'Capacidades Centrais',
      title: 'Projetado para',
      titleHighlight: 'Escala & Segurança',
      description: "A Plataforma Nino não é apenas um launcher; é um ecossistema completo para gestão de direitos digitais.",
      cards: {
        revenue: {
          title: "Proteção de Receita",
          desc: "Validação de licenças em tempo real previne uso não autorizado. Sua propriedade intelectual segura com nosso DRM robusto."
        },
        fintech: {
          title: "Fintech Integrada",
          desc: "Checkout transparente via API Mercado Pago com suporte a PIX. Entrega Instantânea acionada por polling de pagamento em tempo real."
        },
        hwid: {
          title: "Vinculação de HWID",
          desc: "Licenças bloqueadas na assinatura de hardware do usuário, impedindo efetivamente o compartilhamento de contas e vazamento de credenciais."
        },
        secure: {
          title: "Entrega Segura de Ativos",
          desc: "Ativos são descriptografados apenas em memória durante a execução. Minimiza a superfície de ataque contra dumping."
        },
        unified: {
          title: "Experiência Unificada",
          desc: "Loja, Biblioteca e Execução em uma única aplicação Electron. Construído com React para responsividade."
        },
        updates: {
          title: "Auto-Updates",
          desc: "Mantenha seus usuários seguros com atualizações OTA via GitHub Releases. Patches aplicados sem intervenção manual."
        }
      }
    },
    techStack: {
      title: "Arquitetura Híbrida",
      subtitle: "Client-Side & Serverless",
      description: "Utilizamos uma stack moderna priorizando tipagem estrita e protocolos seguros. O frontend roda em um shell Electron reforçado, enquanto a lógica crítica fica em Edge Functions.",
      electron: {
        title: "Electron & React (TypeScript)",
        desc: "Cliente cross-platform com tipagem estrita. Ponte IPC garante comunicação segura entre processos Main e Renderer."
      },
      supabase: {
        title: "Supabase & PostgreSQL",
        desc: "Integridade de dados relacional para licenças e sessões. Row Level Security (RLS) ativado por padrão."
      },
      deno: {
        title: "Deno Edge Functions",
        desc: "Backend serverless para webhooks de pagamento e validação de HWID. Segredos nunca saem do servidor."
      },
      codeWindow: {
        fileName: "arquitetura.ts",
        integrity: "Integridade do Sistema Verificada"
      }
    },
    pricing: {
      title: "Preços Simples e Transparentes",
      description: "Comece a monetizar seus ativos digitais hoje com pagamentos PIX instantâneos.",
      starter: {
        name: "Starter",
        price: "Grátis",
        cta: "Começar Agora"
      },
      enterprise: {
        name: "Enterprise",
        price: "R$ 499",
        period: "/mês",
        fee: "+ 2.5% taxa de transação",
        cta: "Teste Grátis",
        badge: "Popular"
      },
      custom: {
        name: "Personalizado",
        price: "Fale Conosco",
        cta: "Contatar Vendas"
      },
      features: {
        products5: "5 Produtos",
        drmStd: "DRM Padrão",
        community: "Suporte da Comunidade",
        unlimited: "Produtos Ilimitados",
        hwidAdv: "Bloqueio Avançado HWID",
        pix: "Liquidação Instantânea PIX",
        edge: "Rede Edge Prioritária",
        white: "Solução Whitelabel",
        infra: "Infraestrutura Dedicada",
        gateways: "Gateways de Pagamento Personalizados"
      }
    },
    footer: {
      desc: "A plataforma de distribuição de ativos digitais da próxima geração. Segura, rápida e amigável para desenvolvedores.",
      headers: {
        product: "Produto",
        resources: "Recursos",
        legal: "Legal"
      },
      links: {
        features: "Funcionalidades",
        security: "Segurança",
        integrations: "Integrações",
        changelog: "Changelog",
        docs: "Documentação",
        api: "Referência da API",
        community: "Comunidade",
        help: "Central de Ajuda",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        agreement: "Acordo DaaS"
      },
      rights: "© 2024 Plataforma Nino. Todos os direitos reservados."
    },
    ai: {
      greeting: "Olá! Sou o assistente de IA da Plataforma Nino. Pergunte-me sobre Segurança, Tech Stack ou integração Fintech."
    }
  }
};