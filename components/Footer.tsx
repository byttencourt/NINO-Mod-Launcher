import React from 'react';
import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-nino-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NINO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.headers.product}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.features}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.security}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.integrations}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.changelog}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.headers.resources}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.docs}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.api}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.community}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.help}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.headers.legal}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-indigo-400">{t.footer.links.agreement}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">{t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};