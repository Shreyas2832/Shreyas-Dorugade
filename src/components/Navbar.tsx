import React from 'react';
import { ShieldAlert, Waves, Radio, Bell, Info, Building2, ChevronDown } from 'lucide-react';
import { DamCondition } from '../types';
import { SupportedMajorState } from './StateDamsExplorer';

interface NavbarProps {
  totalDams: number;
  conditionCounts: Record<DamCondition, number>;
  onTriggerSos: () => void;
  onOpenBroadcastLog: () => void;
  broadcastCount: number;
  onShowNationalOverview: () => void;
  onOpenAndroidHub?: () => void;
  onSelectStateRegistry?: (state: SupportedMajorState) => void;
  activeStateRegistry?: SupportedMajorState;
  onSelectMaharashtra?: () => void;
  isMaharashtraSelected?: boolean;
}

const NAVBAR_STATES: { name: SupportedMajorState; code: string; count: number; color: string }[] = [
  { name: 'Maharashtra', code: 'MH', count: 2394, color: 'text-cyan-400' },
  { name: 'Madhya Pradesh', code: 'MP', count: 906, color: 'text-emerald-400' },
  { name: 'Gujarat', code: 'GJ', count: 632, color: 'text-blue-400' },
  { name: 'Karnataka', code: 'KA', count: 231, color: 'text-amber-400' },
  { name: 'Rajasthan', code: 'RJ', count: 211, color: 'text-orange-400' },
  { name: 'Odisha', code: 'OD', count: 204, color: 'text-teal-400' },
  { name: 'Telangana', code: 'TG', count: 180, color: 'text-purple-400' },
  { name: 'Andhra Pradesh', code: 'AP', count: 167, color: 'text-sky-400' },
  { name: 'Uttar Pradesh', code: 'UP', count: 130, color: 'text-rose-400' },
  { name: 'Tamil Nadu', code: 'TN', count: 116, color: 'text-indigo-400' },
  { name: 'Kerala', code: 'KL', count: 62, color: 'text-emerald-400' },
  { name: 'Jharkhand', code: 'JH', count: 42, color: 'text-amber-400' },
  { name: 'West Bengal', code: 'WB', count: 33, color: 'text-cyan-400' },
  { name: 'Uttarakhand', code: 'UK', count: 26, color: 'text-teal-400' },
  { name: 'Himachal Pradesh', code: 'HP', count: 23, color: 'text-blue-400' },
  { name: 'Jammu and Kashmir', code: 'JK', count: 18, color: 'text-violet-400' },
  { name: 'Punjab', code: 'PB', count: 16, color: 'text-orange-400' },
  { name: 'Chhattisgarh', code: 'CG', count: 28, color: 'text-lime-400' },
  { name: 'Assam and North East', code: 'NE', count: 16, color: 'text-purple-400' },
];

export const Navbar: React.FC<NavbarProps> = ({
  totalDams,
  conditionCounts,
  onTriggerSos,
  onOpenBroadcastLog,
  broadcastCount,
  onShowNationalOverview,
  onOpenAndroidHub,
  onSelectStateRegistry,
  activeStateRegistry = 'Maharashtra',
  onSelectMaharashtra,
  isMaharashtraSelected,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[56px] h-14 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & Title */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0 flex-1 sm:flex-initial" 
            onClick={onShowNationalOverview} 
            id="nav-brand-btn"
          >
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner shrink-0">
              <Waves className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 leading-none mb-0.5 sm:mb-1">
                <span className="text-[10px] sm:text-xs font-bold sm:font-semibold tracking-wider text-blue-400 uppercase truncate">
                  <span className="sm:hidden">NDSA • CWC India</span>
                  <span className="hidden sm:inline">National Dam Safety Authority &amp; CWC</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50 shrink-0">
                  Hydrodynamic 2D Engine
                </span>
              </div>
              <h1 className="text-xs sm:text-base md:text-lg font-bold text-white tracking-tight leading-tight flex items-center gap-1.5">
                <span className="sm:hidden truncate">Dam Break Inundation Model</span>
                <span className="hidden sm:inline">Dam Break Inundation &amp; Hydrodynamic Modeling</span>
              </h1>
            </div>
          </div>

          {/* Quick Direct Jump: Major State Registries CTA */}
          {onSelectStateRegistry && (
            <div className="hidden lg:flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1">
                {NAVBAR_STATES.slice(0, 4).map(st => (
                  <button
                    key={st.code}
                    onClick={() => onSelectStateRegistry(st.name)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold transition border cursor-pointer ${
                      activeStateRegistry === st.name
                        ? 'bg-blue-500 text-slate-950 border-blue-400 shadow-md shadow-blue-950'
                        : 'bg-transparent text-slate-400 hover:text-white border-transparent'
                    }`}
                    title={`${st.name}: ${st.count.toLocaleString()} Dams`}
                  >
                    <span>{st.code} ({st.count})</span>
                  </button>
                ))}
              </div>

              {/* State Dropdown Selector for all 9 states */}
              <div className="relative border-l border-slate-800 pl-1">
                <select
                  value={activeStateRegistry}
                  onChange={(e) => onSelectStateRegistry(e.target.value as SupportedMajorState)}
                  className="bg-slate-900 text-xs font-bold text-slate-200 py-1 px-2 rounded-lg border border-slate-700 hover:border-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {NAVBAR_STATES.map(st => (
                    <option key={st.name} value={st.name}>
                      {st.name} ({st.count.toLocaleString()} dams)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* National Stats Quick Ticker */}
          <div className="hidden xl:flex items-center gap-3 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 text-xs">
            <div className="flex items-center gap-1.5 pr-3 border-r border-slate-700">
              <span className="text-slate-400">Total Large Dams:</span>
              <span className="font-bold text-white text-sm">{totalDams.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {conditionCounts.good} Good
              </span>
              <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                {conditionCounts.moderate} Moderate
              </span>
              <span className="inline-flex items-center gap-1 text-orange-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                {conditionCounts.alert} Alert
              </span>
              <span className="inline-flex items-center gap-1 text-red-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                {conditionCounts.critical} Critical
              </span>
            </div>
          </div>

          {/* Action Buttons: Broadcast Log & RED SOS SIGNAL */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              id="broadcast-log-btn"
              onClick={onOpenBroadcastLog}
              className="relative p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
              title="Emergency Broadcasts & Warnings Log"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              {broadcastCount > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-slate-900 border border-slate-900">
                  {broadcastCount}
                </span>
              )}
            </button>

            <button
              id="national-overview-btn"
              onClick={onShowNationalOverview}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition"
            >
              <Info className="w-4 h-4 text-blue-400" />
              <span>National Overview</span>
            </button>

            {/* MANDATORY PROMINENT RED SOS SIGNAL */}
            <button
              id="emergency-sos-btn"
              onClick={onTriggerSos}
              className="relative group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-red-600/40 border border-red-500 transition active:scale-95 animate-pulse shrink-0"
              title="Emergency SOS Alert - Immediate Broadcast to Police & Public"
            >
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
              </span>
              <Radio className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white animate-bounce shrink-0" />
              <span className="shrink-0">SOS SIGNAL</span>
              <span className="absolute -inset-1 rounded-lg bg-red-500/20 blur-sm group-hover:bg-red-500/40 transition -z-10"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
