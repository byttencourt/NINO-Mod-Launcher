import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="fintech" className="py-24 bg-nino-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
          {t.pricing.title}
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          {t.pricing.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-nino-800 rounded-2xl p-8 border border-white/5 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.starter.name}</h3>
            <div className="text-4xl font-bold text-white mb-6">{t.pricing.starter.price}</div>
            <ul className="space-y-4 mb-8 text-left flex-1">
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.products5}</li>
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.drmStd}</li>
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.community}</li>
            </ul>
            <Button variant="secondary" className="w-full">{t.pricing.starter.cta}</Button>
          </div>

          {/* Pro */}
          <div className="bg-nino-700 rounded-2xl p-8 border border-indigo-500/50 shadow-xl shadow-indigo-500/10 flex flex-col relative transform scale-105 z-10">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold text-white uppercase">
              {t.pricing.enterprise.badge}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.enterprise.name}</h3>
            <div className="text-4xl font-bold text-white mb-1">{t.pricing.enterprise.price}<span className="text-lg text-gray-400 font-normal">{t.pricing.enterprise.period}</span></div>
            <p className="text-indigo-300 text-sm mb-6">{t.pricing.enterprise.fee}</p>
            <ul className="space-y-4 mb-8 text-left flex-1">
              <li className="flex items-center text-white"><Check size={18} className="text-emerald-400 mr-2" /> {t.pricing.features.unlimited}</li>
              <li className="flex items-center text-white"><Check size={18} className="text-emerald-400 mr-2" /> {t.pricing.features.hwidAdv}</li>
              <li className="flex items-center text-white"><Check size={18} className="text-emerald-400 mr-2" /> {t.pricing.features.pix}</li>
              <li className="flex items-center text-white"><Check size={18} className="text-emerald-400 mr-2" /> {t.pricing.features.edge}</li>
            </ul>
            <Button variant="glow" className="w-full">{t.pricing.enterprise.cta}</Button>
          </div>

          {/* Enterprise */}
          <div className="bg-nino-800 rounded-2xl p-8 border border-white/5 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.custom.name}</h3>
            <div className="text-4xl font-bold text-white mb-6">{t.pricing.custom.price}</div>
            <ul className="space-y-4 mb-8 text-left flex-1">
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.white}</li>
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.infra}</li>
              <li className="flex items-center text-gray-400"><Check size={18} className="text-indigo-500 mr-2" /> {t.pricing.features.gateways}</li>
            </ul>
            <Button variant="secondary" className="w-full">{t.pricing.custom.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};