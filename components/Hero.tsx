import React from 'react';
import { Button } from './Button';
import { Download, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-white mb-2">{t.hero.title1}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              {t.hero.title2}
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="lg" icon={<Download size={20} />}>
              {t.hero.btnDownload}
            </Button>
            <Button variant="secondary" size="lg" icon={<Zap size={20} />}>
              {t.hero.btnArch}
            </Button>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/5 pt-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.stats.uptime}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">0ms</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.stats.latency}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">AES</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.stats.encryption}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">HWID</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t.hero.stats.hwid}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};