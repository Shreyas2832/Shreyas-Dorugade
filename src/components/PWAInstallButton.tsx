import React, { useState } from 'react';
import { Smartphone, Download, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { AndroidInstallModal } from './AndroidInstallModal';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  // If already installed as native standalone app, show subtle status badge
  if (isInstalled) {
    return (
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
        <Check className="w-3.5 h-3.5 text-emerald-400" />
        <span>Android App Active</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={async () => {
          if (isInstallable) {
            const result = await install();
            if (result === 'manual_needed' || result === 'dismissed') {
              setShowModal(true);
            }
          } else {
            setShowModal(true);
          }
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition active:scale-95 cursor-pointer"
        title="Install as Android App on your smartphone or desktop"
      >
        <Smartphone className="w-4 h-4 text-emerald-200 animate-pulse" />
        <span>Install Android App</span>
      </button>

      <AndroidInstallModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
