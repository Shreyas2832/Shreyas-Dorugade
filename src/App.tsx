/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Waves, AlertTriangle, ShieldCheck, Radio, Droplets, 
  Send, Compass, Mountain, CloudRain, Bell, Info, 
  Layers, ChevronRight, Activity, Building, Users, Smartphone, Download
} from 'lucide-react';
import { Dam, DamCondition, EmergencyBroadcast } from './types';
import { getAllDams, getStateStats, getTotalDamsCount } from './data/damsDatabase';
import { Navbar } from './components/Navbar';
import { StateFilterBar } from './components/StateFilterBar';
import { DamCard } from './components/DamCard';
import { DamDetailModal } from './components/DamDetailModal';
import { SosAlertModal } from './components/SosAlertModal';
import { EmergencyBroadcastModal } from './components/EmergencyBroadcastModal';
import { NationalOverviewModal } from './components/NationalOverviewModal';
import { InundationMapCanvas } from './components/InundationMapCanvas';
import { StateDamsExplorer, SupportedMajorState } from './components/StateDamsExplorer';
import { AndroidBanner } from './components/AndroidBanner';
import { AndroidInstallModal } from './components/AndroidInstallModal';
import { AndroidMobileNavBar } from './components/AndroidMobileNavBar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { triggerHaptic } from './utils/androidBridge';

const MAJOR_REGISTRIES: { name: SupportedMajorState; short: string; count: number; activeColor: string; pillColor: string }[] = [
  { name: 'Maharashtra', short: 'MH', count: 2394, activeColor: 'bg-cyan-500 text-slate-950 shadow-cyan-950', pillColor: 'bg-slate-950 text-cyan-300' },
  { name: 'Madhya Pradesh', short: 'MP', count: 906, activeColor: 'bg-emerald-500 text-slate-950 shadow-emerald-950', pillColor: 'bg-slate-950 text-emerald-300' },
  { name: 'Gujarat', short: 'GJ', count: 632, activeColor: 'bg-blue-500 text-slate-950 shadow-blue-950', pillColor: 'bg-slate-950 text-blue-300' },
  { name: 'Karnataka', short: 'KA', count: 231, activeColor: 'bg-amber-500 text-slate-950 shadow-amber-950', pillColor: 'bg-slate-950 text-amber-300' },
  { name: 'Rajasthan', short: 'RJ', count: 211, activeColor: 'bg-orange-500 text-slate-950 shadow-orange-950', pillColor: 'bg-slate-950 text-orange-300' },
  { name: 'Odisha', short: 'OD', count: 204, activeColor: 'bg-teal-500 text-slate-950 shadow-teal-950', pillColor: 'bg-slate-950 text-teal-300' },
  { name: 'Telangana', short: 'TG', count: 180, activeColor: 'bg-purple-500 text-slate-950 shadow-purple-950', pillColor: 'bg-slate-950 text-purple-300' },
  { name: 'Andhra Pradesh', short: 'AP', count: 167, activeColor: 'bg-sky-500 text-slate-950 shadow-sky-950', pillColor: 'bg-slate-950 text-sky-300' },
  { name: 'Uttar Pradesh', short: 'UP', count: 130, activeColor: 'bg-rose-500 text-slate-950 shadow-rose-950', pillColor: 'bg-slate-950 text-rose-300' },
  { name: 'Tamil Nadu', short: 'TN', count: 116, activeColor: 'bg-indigo-500 text-slate-950 shadow-indigo-950', pillColor: 'bg-slate-950 text-indigo-300' },
  { name: 'Kerala', short: 'KL', count: 62, activeColor: 'bg-emerald-500 text-slate-950 shadow-emerald-950', pillColor: 'bg-slate-950 text-emerald-300' },
  { name: 'Jharkhand', short: 'JH', count: 42, activeColor: 'bg-amber-500 text-slate-950 shadow-amber-950', pillColor: 'bg-slate-950 text-amber-300' },
  { name: 'West Bengal', short: 'WB', count: 33, activeColor: 'bg-cyan-500 text-slate-950 shadow-cyan-950', pillColor: 'bg-slate-950 text-cyan-300' },
  { name: 'Uttarakhand', short: 'UK', count: 26, activeColor: 'bg-teal-500 text-slate-950 shadow-teal-950', pillColor: 'bg-slate-950 text-teal-300' },
  { name: 'Himachal Pradesh', short: 'HP', count: 23, activeColor: 'bg-blue-500 text-slate-950 shadow-blue-950', pillColor: 'bg-slate-950 text-blue-300' },
  { name: 'Jammu and Kashmir', short: 'JK', count: 18, activeColor: 'bg-violet-500 text-slate-950 shadow-violet-950', pillColor: 'bg-slate-950 text-violet-300' },
  { name: 'Punjab', short: 'PB', count: 16, activeColor: 'bg-orange-500 text-slate-950 shadow-orange-950', pillColor: 'bg-slate-950 text-orange-300' },
  { name: 'Chhattisgarh', short: 'CG', count: 28, activeColor: 'bg-lime-500 text-slate-950 shadow-lime-950', pillColor: 'bg-slate-950 text-lime-300' },
  { name: 'Assam and North East', short: 'NE', count: 16, activeColor: 'bg-purple-500 text-slate-950 shadow-purple-950', pillColor: 'bg-slate-950 text-purple-300' },
];

export default function App() {
  const allDams = useMemo(() => getAllDams(), []);
  const stateStats = useMemo(() => getStateStats(), []);
  const totalDamsCount = getTotalDamsCount();

  // Primary inventory view mode: 'state_registry' or 'national'
  const [inventoryMode, setInventoryMode] = useState<'state_registry' | 'national'>('state_registry');
  const [activeStateRegistry, setActiveStateRegistry] = useState<SupportedMajorState>('Maharashtra');
  const [selectedState, setSelectedState] = useState<string | null>('Maharashtra');
  const [searchQuery, setSearchQuery] = useState('');
  const [conditionFilter, setConditionFilter] = useState<DamCondition | 'all'>('all');

  // Selected dam for comprehensive modal inspection
  const [selectedDam, setSelectedDam] = useState<Dam | null>(null);

  // Quick Hydrodynamic model showcase dam (defaults to Koyna Dam or Tehri Dam)
  const [showcaseDamId, setShowcaseDamId] = useState<string>('mh-dam-koyna');
  const showcaseDam = useMemo(() => {
    return allDams.find(d => d.id === showcaseDamId) || allDams[0];
  }, [allDams, showcaseDamId]);

  // SOS Emergency Modal State
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [sosTargetDam, setSosTargetDam] = useState<Dam | null>(null);

  // Emergency Broadcast Modal State
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [broadcastTargetDam, setBroadcastTargetDam] = useState<Dam | null>(null);

  // National Overview Modal State
  const [isNationalOverviewOpen, setIsNationalOverviewOpen] = useState(false);

  // Android App installation modal state & active section on mobile
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<'dams' | 'model' | 'recon'>('dams');

  // Handle Android App Manifest shortcuts (?action=sos, ?action=recon, ?action=inventory)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const action = params.get('action');
      if (action === 'sos') {
        triggerSos();
      } else if (action === 'inventory') {
        setInventoryMode('national');
      } else if (action === 'recon') {
        if (allDams[0]) {
          setSelectedDam(allDams[0]);
        }
      }
    } catch (e) {
      // ignore
    }
  }, [allDams]);

  const handleMobileNav = (section: 'dams' | 'model' | 'recon') => {
    setActiveMobileSection(section);
    if (section === 'dams') {
      const el = document.getElementById('dams-inventory-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'model') {
      const el = document.getElementById('hydrodynamic-simulation-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'recon') {
      if (allDams[0]) {
        setSelectedDam(allDams[0]);
      }
    }
  };

  // Broadcast History logs
  const [broadcasts, setBroadcasts] = useState<EmergencyBroadcast[]>([
    {
      id: 'init-bc-01',
      damId: 'dam-mullaperiyar',
      damName: 'Mullaperiyar Dam',
      timestamp: '08:15 IST (Active Alert)',
      type: 'condition_alert',
      priority: 'Urgent',
      targetAudience: ['Local Residents', 'Police Department'],
      title: 'HEIGHTENED SURVEILLANCE: Discolored Lime Leaching Seepage at Mullaperiyar',
      messageBody: 'Inspection parameters indicate elevated pore pressure (44.8m head) and turbid seepage (58.4 NTU). Pressure relief pipe flushing in progress. Police dispatched to Periyar downstream crossings.',
      inspectionParametersSummary: 'Condition: CRITICAL | Muddy Seepage: 34.2 L/s (Severe Piping Risk) | Whirlpool: Type 6 Vortex Core (2.4m diameter) | Relief Well Active',
      status: 'Broadcasting Active'
    },
    {
      id: 'init-bc-02',
      damId: 'dam-tehri',
      damName: 'Tehri Dam',
      timestamp: 'Yesterday 17:40 IST',
      type: 'condition_alert',
      priority: 'Urgent',
      targetAudience: ['Local Residents', 'Police Department'],
      title: 'MONSOON ADVISORY: Tehri Dam Bellmouth Anti-Vortex Baffle Adjustment',
      messageBody: 'Vortex formation recorded at intake tunnel; diversion throttling deployed. Local police advised on riverbank water levels.',
      inspectionParametersSummary: 'Piezometer: 742.6m | Inclinometer: 4.8mm | Turbid Seepage: Flushed and reverse-filtered',
      status: 'Delivered'
    }
  ]);

  // Aggregate condition counts
  const conditionCounts = useMemo(() => {
    const counts = { good: 0, moderate: 0, alert: 0, critical: 0 };
    stateStats.forEach((s) => {
      counts.good += s.goodCondition;
      counts.moderate += s.moderateCondition;
      counts.alert += s.alertCondition;
      counts.critical += s.criticalCondition;
    });
    return counts;
  }, [stateStats]);

  // Filtered dams list
  const filteredDams = useMemo(() => {
    return allDams.filter((dam) => {
      // State filter
      if (selectedState && dam.state !== selectedState) {
        return false;
      }
      // Condition filter
      if (conditionFilter !== 'all' && dam.condition !== conditionFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dam.name.toLowerCase().includes(q);
        const matchesRiver = dam.river.toLowerCase().includes(q);
        const matchesState = dam.state.toLowerCase().includes(q);
        const matchesDistrict = dam.district.toLowerCase().includes(q);
        const matchesBasin = dam.basin.toLowerCase().includes(q);
        return matchesName || matchesRiver || matchesState || matchesDistrict || matchesBasin;
      }
      return true;
    });
  }, [allDams, selectedState, conditionFilter, searchQuery]);

  // Handler for adding new broadcast
  const handleDispatchBroadcast = (newBroadcast: EmergencyBroadcast) => {
    setBroadcasts(prev => [newBroadcast, ...prev]);
  };

  // Trigger SOS for general or specific dam
  const triggerSos = (dam?: Dam) => {
    triggerHaptic('emergency');
    setSosTargetDam(dam || showcaseDam || allDams[0]);
    setIsSosOpen(true);
  };

  const openBroadcastForDam = (dam: Dam) => {
    triggerHaptic('medium');
    setBroadcastTargetDam(dam);
    setIsBroadcastOpen(true);
  };

  // Android Native Hardware / Gesture Back Button handling
  const anyModalOpen = !!(selectedDam || isSosOpen || isBroadcastOpen || isNationalOverviewOpen || isAndroidModalOpen);

  useEffect(() => {
    if (anyModalOpen) {
      window.history.pushState({ modalOpen: true }, '');
    }

    const handlePopState = () => {
      // If user taps the Android system back button or swipes from edge, dismiss the active modal!
      if (isAndroidModalOpen) {
        setIsAndroidModalOpen(false);
      } else if (isSosOpen) {
        setIsSosOpen(false);
      } else if (isBroadcastOpen) {
        setIsBroadcastOpen(false);
      } else if (isNationalOverviewOpen) {
        setIsNationalOverviewOpen(false);
      } else if (selectedDam) {
        setSelectedDam(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [anyModalOpen, isAndroidModalOpen, isSosOpen, isBroadcastOpen, isNationalOverviewOpen, selectedDam]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 pb-20 md:pb-0">
      
      {/* Field Connectivity Indicator (Offline Mode) */}
      <OfflineIndicator />

      {/* Android PWA Install Top Banner */}
      <AndroidBanner />

      {/* Top National Header with RED SOS signal */}
      <Navbar
        totalDams={totalDamsCount}
        conditionCounts={conditionCounts}
        onTriggerSos={() => triggerSos()}
        onOpenBroadcastLog={() => {
          setBroadcastTargetDam(showcaseDam);
          setIsBroadcastOpen(true);
        }}
        broadcastCount={broadcasts.length}
        onShowNationalOverview={() => setIsNationalOverviewOpen(true)}
        onOpenAndroidHub={() => {
          triggerHaptic('medium');
          setIsAndroidModalOpen(true);
        }}
        onSelectStateRegistry={(state) => {
          setInventoryMode('state_registry');
          setActiveStateRegistry(state);
          setSelectedState(state);
        }}
        activeStateRegistry={activeStateRegistry}
        onSelectMaharashtra={() => {
          setInventoryMode('state_registry');
          setActiveStateRegistry('Maharashtra');
          setSelectedState('Maharashtra');
        }}
        isMaharashtraSelected={inventoryMode === 'state_registry' && activeStateRegistry === 'Maharashtra'}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* Urgent Active Alerts Banner if any critical or alert dams */}
        <div className="bg-gradient-to-r from-red-950/70 via-slate-900 to-amber-950/70 border border-red-800/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-600/20 text-red-400 border border-red-500/40 shrink-0 animate-pulse">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-600 text-white uppercase tracking-wider">
                  Active Dam Safety Directives
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  {broadcasts.length} Active Emergency Broadcasts
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white mt-1">
                Heightened Surveillance: Muddy Seepage Detected at Mullaperiyar & Tehri Catchments
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mt-0.5">
                Piezometric elevated heads and turbid pipe wash logged. High-pressure filter flush active. 
                Downstream emergency response networks and police detachments on standby alert.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => {
                const target = allDams.find(d => d.id === 'dam-mullaperiyar') || allDams[0];
                setSelectedDam(target);
              }}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <span>Inspect Critical Dam</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => triggerSos(allDams.find(d => d.id === 'dam-mullaperiyar'))}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-red-950 transition"
            >
              <Radio className="w-4 h-4" />
              <span>Broadcast SOS</span>
            </button>
          </div>
        </div>

        {/* FEATURED: Interactive 2D Hydrodynamic Dam Break Inundation Simulator */}
        <section id="hydrodynamic-simulation-section" className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Real-Time 2D Hydrodynamic Modeling
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-950 text-cyan-300 border border-cyan-800">
                  St. Venant Shallow Water Solver
                </span>
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
                <span>Dam Break Inundation Simulation Engine</span>
              </h2>
            </div>

            {/* Quick Switcher for Showcase Dam */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Select River Basin:</span>
              <select
                value={showcaseDamId}
                onChange={(e) => setShowcaseDamId(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-cyan-400"
              >
                {allDams.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.river} River, {d.state})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Simulation Component */}
          <InundationMapCanvas
            dam={showcaseDam}
            onSelectZone={() => setSelectedDam(showcaseDam)}
          />
        </section>

        {/* Primary View Switcher: Top 9 State Registers vs National 5,300+ Dams */}
        <section id="dams-inventory-section" className="space-y-6 pt-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2 bg-slate-900 border border-slate-800 rounded-2xl">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800/80">
              {MAJOR_REGISTRIES.map(reg => {
                const isActive = inventoryMode === 'state_registry' && activeStateRegistry === reg.name;
                return (
                  <button
                    key={reg.name}
                    id={`btn-switch-${reg.short.toLowerCase()}`}
                    onClick={() => {
                      setInventoryMode('state_registry');
                      setActiveStateRegistry(reg.name);
                      setSelectedState(reg.name);
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                      isActive
                        ? `${reg.activeColor} shadow-lg`
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>{reg.name}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? reg.pillColor
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {reg.count.toLocaleString()}
                    </span>
                  </button>
                );
              })}

              {/* All-India Directory Tab */}
              <button
                id="btn-switch-national"
                onClick={() => setInventoryMode('national')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer ${
                  inventoryMode === 'national'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>All-India (5,300+)</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 px-3">
              {inventoryMode === 'state_registry' ? (
                <span>Official CWC & State WRD Registry for <strong>{activeStateRegistry}</strong></span>
              ) : (
                <span>Browsing national inventory across <strong>{totalDamsCount.toLocaleString()}</strong> large dams in India</span>
              )}
            </div>
          </div>

          {/* VIEW 1: DEDICATED STATE DAMS EXPLORER */}
          {inventoryMode === 'state_registry' ? (
            <StateDamsExplorer
              activeState={activeStateRegistry}
              onStateChange={(st) => {
                setActiveStateRegistry(st);
                setSelectedState(st);
              }}
              onSelectDam={setSelectedDam}
              onTriggerSos={triggerSos}
            />
          ) : (
            /* VIEW 2: ALL-INDIA 5,300+ DAMS DIRECTORY */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    National Register of Large Dams (NRLD)
                  </span>
                  <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    India State-Wise Dam Inventory ({totalDamsCount.toLocaleString()} Dams)
                  </h2>
                  <p className="text-xs text-slate-400">
                    Browse dams by state, inspect condition assessments, seepage logs, whirlpools, sensor telemetry,
                    rainfall, and run hydrodynamic inundation models.
                  </p>
                </div>
                <div className="text-xs text-slate-400">
                  Showing <span className="font-bold text-cyan-400">{filteredDams.length}</span> matching dams
                  {selectedState ? ` in ${selectedState}` : ' across India'}
                </div>
              </div>

              {/* State Filter Bar and Search */}
              <StateFilterBar
                stateStats={stateStats}
                selectedState={selectedState}
                onSelectState={(state) => {
                  if (state === 'Maharashtra' || state === 'Madhya Pradesh' || state === 'Gujarat' || state === 'Karnataka') {
                    setInventoryMode('state_registry');
                    setActiveStateRegistry(state as SupportedMajorState);
                  }
                  setSelectedState(state);
                }}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                conditionFilter={conditionFilter}
                onConditionFilterChange={setConditionFilter}
                totalNationalDams={totalDamsCount}
              />

              {/* Dams Cards Grid */}
              {filteredDams.length === 0 ? (
                <div className="py-16 text-center bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800 mx-auto flex items-center justify-center text-slate-400">
                    <Waves className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">No Dams Found</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    No dams match your search query &apos;{searchQuery}&apos; in the selected filter. Try clearing the filter or searching for another river/district.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedState(null);
                      setConditionFilter('all');
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredDams.map((dam) => (
                    <DamCard
                      key={dam.id}
                      dam={dam}
                      onSelect={setSelectedDam}
                      onTriggerSos={triggerSos}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-12 bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-slate-200">
              India Dam Break Hydrodynamic Inundation Modeling & Early Warning System
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Built under National Dam Safety Authority (NDSA) Guidelines & CWC Dam Safety Act 2021
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-400">
            <button
              onClick={() => {
                triggerHaptic('medium');
                setIsAndroidModalOpen(true);
              }}
              className="hover:text-emerald-400 text-emerald-400 font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android App Hub</span>
            </button>
            <span>&bull;</span>
            <button
              onClick={() => {
                triggerHaptic('medium');
                setIsAndroidModalOpen(true);
              }}
              className="hover:text-amber-400 text-amber-400 font-bold flex items-center gap-1.5 cursor-pointer"
              title="Download offline package (~485 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Offline Package</span>
            </button>
            <span>&bull;</span>
            <button onClick={() => setIsNationalOverviewOpen(true)} className="hover:text-white underline cursor-pointer">
              National Dam Statistics
            </button>
            <span>&bull;</span>
            <button onClick={() => triggerSos()} className="text-red-400 hover:text-red-300 font-bold cursor-pointer">
              Emergency SOS Signal
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL 1: DAM INSPECTION & MODELING DETAIL MODAL */}
      <DamDetailModal
        dam={selectedDam}
        onClose={() => setSelectedDam(null)}
        onOpenBroadcast={openBroadcastForDam}
        onTriggerSosForDam={triggerSos}
        broadcasts={broadcasts}
      />

      {/* MODAL 2: HIGH PRIORITY RED SOS SIGNAL ALERT MODAL */}
      <SosAlertModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
        activeDam={sosTargetDam}
        onDispatchBroadcast={handleDispatchBroadcast}
      />

      {/* MODAL 3: MULTI-TIER EMERGENCY BROADCAST MODAL */}
      {broadcastTargetDam && (
        <EmergencyBroadcastModal
          isOpen={isBroadcastOpen}
          onClose={() => setIsBroadcastOpen(false)}
          dam={broadcastTargetDam}
          broadcasts={broadcasts}
          onDispatch={handleDispatchBroadcast}
        />
      )}

      {/* MODAL 4: NATIONAL 5,300+ DAMS OVERVIEW MODAL */}
      <NationalOverviewModal
        isOpen={isNationalOverviewOpen}
        onClose={() => setIsNationalOverviewOpen(false)}
        stateStats={stateStats}
        totalDams={totalDamsCount}
      />

      {/* MOBILE ANDROID BOTTOM NAVIGATION BAR */}
      <AndroidMobileNavBar
        activeSection={activeMobileSection}
        onNavigate={handleMobileNav}
        onOpenSos={() => triggerSos()}
        onOpenAndroidModal={() => setIsAndroidModalOpen(true)}
      />

      {/* ANDROID INSTALLATION & WEBAPK MODAL */}
      <AndroidInstallModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />

    </div>
  );
}
