import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-nino-900 text-white selection:bg-indigo-500/30">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <TechStack />
          <Pricing />
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </LanguageProvider>
  );
}

export default App;