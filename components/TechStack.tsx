import React from 'react';
import { Database, Layout, Shield, Cloud, Server, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-24 bg-nino-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.techStack.title} <br />
              <span className="text-indigo-400">{t.techStack.subtitle}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t.techStack.description}
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Layout size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">{t.techStack.electron.title}</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {t.techStack.electron.desc}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <Database size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">{t.techStack.supabase.title}</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {t.techStack.supabase.desc}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <Cpu size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">{t.techStack.deno.title}</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {t.techStack.deno.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
             <div className="relative bg-nino-900 border border-gray-700 rounded-xl p-8 shadow-2xl">
                <div className="font-mono text-sm text-gray-300 space-y-4">
                  <div className="flex items-center space-x-2 border-b border-gray-700 pb-4">
                     <span className="w-3 h-3 rounded-full bg-red-500"></span>
                     <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                     <span className="w-3 h-3 rounded-full bg-green-500"></span>
                     <span className="text-gray-500 ml-2">{t.techStack.codeWindow.fileName}</span>
                  </div>
                  
                  <div className="space-y-2 pl-2">
                    <p><span className="text-purple-400">interface</span> <span className="text-yellow-300">SystemArchitecture</span> {'{'}</p>
                    <p className="pl-4"><span className="text-indigo-400">client</span>: {'{'}</p>
                    <p className="pl-8">framework: <span className="text-green-400">'Electron'</span>,</p>
                    <p className="pl-8">ui: <span className="text-green-400">'React 18'</span>,</p>
                    <p className="pl-8">security: <span className="text-green-400">['IPC', 'ContextIsolation']</span></p>
                    <p className="pl-4">{'}'},</p>
                    <p className="pl-4"><span className="text-indigo-400">backend</span>: {'{'}</p>
                    <p className="pl-8">db: <span className="text-green-400">'Supabase (PostgreSQL)'</span>,</p>
                    <p className="pl-8">runtime: <span className="text-green-400">'Deno Edge Functions'</span>,</p>
                    <p className="pl-8">payments: <span className="text-green-400">'Mercado Pago API'</span></p>
                    <p className="pl-4">{'}'}</p>
                    <p>{'}'}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex items-center text-green-400 text-xs">
                       <Shield size={14} className="mr-2" />
                       <span>{t.techStack.codeWindow.integrity}</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};