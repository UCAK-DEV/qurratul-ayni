'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/Icon';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const PWAInstallPrompt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'android' | 'ios'>('android');
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Detect if running in standalone mode (already installed PWA)
    const checkStandalone = () => {
      const isStandaloneMode = 
        window.matchMedia('(display-mode: standalone)').matches || 
        (navigator as Navigator & { standalone?: boolean }).standalone === true;
      setIsStandalone(isStandaloneMode);
      return isStandaloneMode;
    };

    const standalone = checkStandalone();

    // 2. Check if user already dismissed or accepted the prompt
    const isDismissed = localStorage.getItem('qurratul_pwa_dismissed') === 'true';

    // 3. Listen for the native beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the prompt if not already standalone and not dismissed
      if (!standalone && !isDismissed) {
        setIsOpen(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 4. Fallback: If browser is iOS or doesn't support beforeinstallprompt,
    // we still show the prompt on first visit if not standalone and not dismissed
    const timer = setTimeout(() => {
      if (!standalone && !isDismissed && !deferredPrompt) {
        // Auto-detect OS to set default tab
        const userAgent = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || '';
        if (/iPad|iPhone|iPod/.test(userAgent) && !(window as Window & { MSStream?: unknown }).MSStream) {
          setActiveTab('ios');
        } else {
          setActiveTab('android');
        }
        setIsOpen(true);
      }
    }, 2500); // Wait 2.5 seconds after page loads to show the prompt elegantly

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        localStorage.setItem('qurratul_pwa_dismissed', 'true');
        setIsOpen(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('qurratul_pwa_dismissed', 'true');
    setIsOpen(false);
  };

  // If already running inside PWA, don't show prompt
  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay arrière-plan sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300]"
            style={{ backgroundColor: 'var(--bg-overlay)', backdropFilter: 'blur(4px)' }}
            onClick={handleDismiss}
          />

          {/* Conteneur principal (Bottom Sheet sur Mobile, Modal sur Desktop) */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-x-0 bottom-0 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:max-w-md w-full z-[301] p-6 rounded-t-3xl md:rounded-3xl border flex flex-col shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--bg-surface) 0%, #06110a 100%)',
              borderColor: 'var(--border-subtle)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Header avec bouton fermer */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent-gradient)' }}
                >
                  <Icon name="mosque" className="text-xl" style={{ color: 'var(--accent-contrast)' }} />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold tracking-wide text-white">
                    Installer Qurratul Ayni
                  </h3>
                  <p className="text-[10px] text-white/50">
                    Application Spirituelle Digitale
                  </p>
                </div>
              </div>
              <button 
                onClick={handleDismiss} 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white/60"
                aria-label="Fermer"
              >
                <Icon name="close" className="text-sm" />
              </button>
            </div>

            {/* Corps - Description */}
            <div className="py-4 text-left space-y-4">
              <p className="text-xs text-white/70 leading-relaxed font-reading">
                Pour une immersion optimale, accédez aux audios hors-ligne et recevez les rappels de Nafila quotidiens en téléchargeant l'application sur votre écran d'accueil.
              </p>

              {/* Onglets Système */}
              <div className="flex bg-white/5 p-1 rounded-xl gap-1">
                <button
                  onClick={() => setActiveTab('android')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'android' 
                      ? 'bg-[#c9a961] text-[#241c07] shadow-sm' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon name="person" className="text-base" />
                  Android / Chrome
                </button>
                <button
                  onClick={() => setActiveTab('ios')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'ios' 
                      ? 'bg-[#c9a961] text-[#241c07] shadow-sm' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon name="person" className="text-base" />
                  iOS / Safari
                </button>
              </div>

              {/* Instructions par système */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-3.5">
                {activeTab === 'android' ? (
                  <div className="space-y-3">
                    {deferredPrompt ? (
                      <div className="text-center py-2">
                        <button
                          onClick={handleInstallClick}
                          className="w-full py-3 bg-[#c9a961] text-[#241c07] rounded-xl text-xs font-black uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                        >
                          <Icon name="download" className="text-base" />
                          Installer en 1 clic
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2.5 text-xs text-white/80">
                        <div className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961] flex items-center justify-center text-[10px] font-bold mt-0.5">1</span>
                          <p className="flex-1 leading-relaxed">
                            Appuyez sur le bouton de menu du navigateur <strong className="text-white">⁝</strong> (en haut à droite).
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961] flex items-center justify-center text-[10px] font-bold mt-0.5">2</span>
                          <p className="flex-1 leading-relaxed">
                            Sélectionnez <strong className="text-white">« Installer l\'application »</strong> ou <strong className="text-white">« Ajouter à l\'écran d\'accueil »</strong>.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs text-white/80">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961] flex items-center justify-center text-[10px] font-bold mt-0.5">1</span>
                      <p className="flex-1 leading-relaxed">
                        Appuyez sur le bouton de partage <Icon name="share" className="text-sm inline mx-1 text-[#c9a961]" /> situé en bas dans Safari.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961] flex items-center justify-center text-[10px] font-bold mt-0.5">2</span>
                      <p className="flex-1 leading-relaxed">
                        Faites défiler le menu vers le bas et sélectionnez <strong className="text-white">« Sur l\'écran d\'accueil »</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer / Actions de rappel */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button 
                onClick={handleDismiss} 
                className="text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-white/60 transition-all text-left"
              >
                Ne plus afficher
              </button>
              <button
                onClick={handleDismiss}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white transition-all"
              >
                Plus tard
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
