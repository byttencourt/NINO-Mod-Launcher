import React from 'react';
import { Shield, CreditCard, Lock, Zap, Server, Globe } from 'lucide-react';
import { Feature } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t.features.cards.revenue.title,
      description: t.features.cards.revenue.desc,
      icon: Shield,
      color: "text-emerald-400"
    },
    {
      title: t.features.cards.fintech.title,
      description: t.features.cards.fintech.desc,
      icon: CreditCard,
      color: "text-blue-400"
    },
    {
      title: t.features.cards.hwid.title,
      description: t.features.cards.hwid.desc,
      icon: Lock,
      color: "text-purple-400"
    },
    {
      title: t.features.cards.secure.title,
      description: t.features.cards.secure.desc,
      icon: Server,
      color: "text-orange-400"
    },
    {
      title: t.features.cards.unified.title,
      description: t.features.cards.unified.desc,
      icon: Globe,
      color: "text-indigo-400"
    },
    {
      title: t.features.cards.updates.title,
      description: t.features.cards.updates.desc,
      icon: Zap,
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="features" className="py-24 bg-nino-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">{t.features.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {t.features.title} <span className="text-indigo-500">{t.features.titleHighlight}</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-nino-800 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-nino-900 border border-white/10 ${feature.color} mb-5`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};