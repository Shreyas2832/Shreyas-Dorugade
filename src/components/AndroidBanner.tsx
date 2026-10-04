import React, { useState, useEffect } from 'react';
import { X, QrCode } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { AndroidInstallModal } from './AndroidInstallModal';
import { triggerHaptic } from '../utils/androidBridge';

export const AndroidBanner: React.FC = () => {
  const { isInstalled, isInstallable, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [initialModalTab, setInitialModalTab] = useState<'qr_install' | 'usb_transfer'>('qr_install');

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('dam_android_banner_dismissed');
    if (isDismissed === 'true') {
      setDismissed(true);
    }
  }, []);

  if (isInstalled || dismissed) return null;

  const handleDismiss = () => {
    triggerHaptic('light');
    setDismissed(true);
    sessionStorage.setItem('dam_android_banner_dismissed', 'true');
  };

  const handleOpenQr = () => {
    triggerHaptic('medium');
    setInitialModalTab('qr_install');
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 border-b border-emerald-500/30 text-slate-200 px-3 py-2 sm:py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <QrCode className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="font-bold text-white">Install on Mobile Phone:</span>{' '}
              <span className="text-slate-300 hidden sm:inline">
                Scan QR code for instant zero-error installation on your Android phone.
              </span>
              <span className="text-slate-300 sm:hidden">Scan QR for instant install.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick QR code scanner modal button */}
            <button
              onClick={handleOpenQr}
              className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer"
              title="Scan QR Code to install app on phone without package errors"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Scan QR to Install</span>
            </button>

            <button
              onClick={handleDismiss}
              className="p-1 text-slate-400 hover:text-white rounded transition cursor-pointer"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AndroidInstallModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialTab={initialModalTab}
      />
    </>
  );
};
