import React from 'react';
import { Waves, Activity, Plane, Radio, Smartphone } from 'lucide-react';
import { triggerHaptic } from '../utils/androidBridge';

interface AndroidMobileNavBarProps {
  activeSection: 'dams' | 'model' | 'recon';
  onNavigate: (section: 'dams' | 'model' | 'recon') => void;
  onOpenSos: () => void;
  onOpenAndroidModal: () => void;
}

export const AndroidMobileNavBar: React.FC<AndroidMobileNavBarProps> = ({
  activeSection,
  onNavigate,
  onOpenSos,
  onOpenAndroidModal,
}) => {
  return (
    <nav 
      aria-label="Android Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 px-3 py-1.5 flex items-center justify-around shadow-2xl pb-[max(0.375rem,env(safe-area-inset-bottom))]"
    >
      {/* 1. Dams Inventory */}
      <button
        onClick={() => {
          triggerHaptic('light');
          onNavigate('dams');
        }}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition cursor-pointer min-w-[56px] ${
          activeSection === 'dams' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Waves className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">Dams</span>
      </button>

      {/* 2. Hydrodynamic Model */}
      <button
        onClick={() => {
          triggerHaptic('light');
          onNavigate('model');
        }}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition cursor-pointer min-w-[56px] ${
          activeSection === 'model' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Activity className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">Breach Model</span>
      </button>

      {/* 3. Emergency SOS Center Action Button */}
      <button
        onClick={() => {
          triggerHaptic('emergency');
          onOpenSos();
        }}
        className="flex flex-col items-center justify-center -mt-6 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-950/80 border-2 border-slate-900 active:scale-95 transition cursor-pointer"
        title="Trigger Emergency Dam SOS Alert"
        aria-label="Trigger Emergency Dam SOS Alert"
      >
        <Radio className="w-5 h-5 animate-pulse" />
      </button>

      {/* 4. Drone & Satellite Recon */}
      <button
        onClick={() => {
          triggerHaptic('light');
          onNavigate('recon');
        }}
        className={`flex flex-col items-center gap-1 p-1 rounded-xl transition cursor-pointer min-w-[56px] ${
          activeSection === 'recon' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Plane className="w-5 h-5" />
        <span className="text-[10px] tracking-tight">Drone/Sat</span>
      </button>

      {/* 5. Android App Install Details */}
      <button
        onClick={() => {
          triggerHaptic('medium');
          onOpenAndroidModal();
        }}
        className="flex flex-col items-center gap-1 p-1 rounded-xl text-emerald-400 hover:text-emerald-300 transition cursor-pointer min-w-[56px]"
      >
        <Smartphone className="w-5 h-5" />
        <span className="text-[10px] tracking-tight font-semibold">Install App</span>
      </button>
    </nav>
  );
};
