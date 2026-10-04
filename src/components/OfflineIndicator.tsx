import React from 'react';
import { WifiOff, AlertCircle } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full shadow-2xl text-xs border border-amber-300 animate-bounce">
      <WifiOff className="w-4 h-4 text-slate-950" />
      <span>Offline Field Mode: Running on cached local telemetry & 5,300+ dams database</span>
    </div>
  );
};
