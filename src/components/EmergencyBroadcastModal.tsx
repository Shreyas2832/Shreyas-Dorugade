import React, { useState } from 'react';
import { Send, Bell, Users, Shield, Building, HeartHandshake, CheckCircle2, AlertTriangle, X, Radio, FileText } from 'lucide-react';
import { Dam, EmergencyBroadcast } from '../types';
import { playBeepAlert } from '../utils/soundAlert';

interface EmergencyBroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  dam: Dam;
  broadcasts: EmergencyBroadcast[];
  onDispatch: (broadcast: EmergencyBroadcast) => void;
}

export const EmergencyBroadcastModal: React.FC<EmergencyBroadcastModalProps> = ({
  isOpen,
  onClose,
  dam,
  broadcasts,
  onDispatch,
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'history'>('create');
  const [messageType, setMessageType] = useState<'condition_alert' | 'sudden_breach' | 'flood_stopped_relief'>('condition_alert');
  const [dispatchedSuccess, setDispatchedSuccess] = useState(false);

  if (!isOpen) return null;

  // Build dynamic default inspection parameters summary from dam records
  const latestSeepage = dam.seepageRecords[0];
  const latestWhirlpool = dam.whirlpoolRecords[0];

  const conditionParamsText = `Condition: ${dam.condition.toUpperCase()} | Muddy Seepage: ${
    latestSeepage ? `${latestSeepage.appearance} (${latestSeepage.flowRateLps} L/s, ${latestSeepage.turbidityNtu} NTU) - Pipe Status: ${latestSeepage.pipeStatus}` : 'Under normal limits'
  } | Whirlpool Log: ${
    latestWhirlpool ? `${latestWhirlpool.vortexType}, core diameter ${latestWhirlpool.coreDiameterMeters}m at Elev ${latestWhirlpool.reservoirLevelMeters}m` : 'No severe vortex'
  } | Piezometer: ${dam.sensors.piezometer.currentHeadMeters}m (Baseline ${dam.sensors.piezometer.normalBaselineMeters}m) | Inclinometer: ${dam.sensors.inclinometer.currentDisplacementMm}mm`;

  const handleSendMessage = () => {
    let title = '';
    let body = '';
    let targetAudience: EmergencyBroadcast['targetAudience'] = [];
    let priority: EmergencyBroadcast['priority'] = 'Urgent';

    if (messageType === 'condition_alert') {
      title = `SAFETY WARNING: ${dam.name} Condition Assessment & Heightened Surveillance`;
      targetAudience = ['Local Residents', 'Police Department'];
      priority = 'Urgent';
      body = `ADVISORY TO LOCAL RESIDENTS & POLICE OFFICERS: Dam safety inspection has flagged heightened surveillance parameters for ${dam.name} on River ${dam.river}. Muddy and discolored seepages were detected (${latestSeepage?.appearance || 'Silt wash'}, ${latestSeepage?.flowRateLps || 10} L/s) and remedial pipe cleaning/flushing is actively underway. Whirlpool activity (${latestWhirlpool?.vortexType || 'Vortex core'}) logged at water level ${dam.currentWaterLevelMeters}m. Police are instructed to establish riverbank advisory patrols and restrict public bathing/boating. Local residents are advised to stay tuned to official siren alerts.`;
    } else if (messageType === 'sudden_breach') {
      title = `CRITICAL FLASH FLOOD ALARM: SUDDEN BREACH AT ${dam.name.toUpperCase()}`;
      targetAudience = ['Local Residents', 'Police Department', 'Government & SDMA'];
      priority = 'Emergency';
      body = `IMMEDIATE EVACUATION ORDER: Severe structural dam break breach detected at ${dam.name}. Peak flood discharge estimated at ${dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s. Hydrodynamic wave will impact downstream settlements along River ${dam.river} within 15-45 minutes. Police stations, District Magistrate, and NDRF battalions are mobilizing. Local residents must evacuate immediately to designated high-ground shelters. Avoid all bridges and low embankments!`;
    } else {
      // Flow stopped / relief message
      title = `RELIEF DISPATCH: Flood Surge Ceased at ${dam.name} - Mobilizing NGOs & Medical Aid`;
      targetAudience = ['NGOs & Public Services'];
      priority = 'Info';
      body = `TO ALL DISASTER RELIEF NGOs, VOLUNTARY ORGANIZATIONS & PUBLIC HEALTH SERVICES: Hydrodynamic simulation confirms flood wave recession and river flow cessation at ${dam.name} basin. Safe access corridors are now re-opened along River ${dam.river}. Immediate deployment requested for drinking water distribution, medical triage, community kitchens, shelter rehabilitation, and sanitization camps in affected villages.`;
    }

    const newBroadcast: EmergencyBroadcast = {
      id: `bc-${Date.now()}`,
      damId: dam.id,
      damName: dam.name,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST',
      type: messageType,
      priority,
      targetAudience,
      title,
      messageBody: body,
      inspectionParametersSummary: conditionParamsText,
      status: 'Dispatched',
    };

    playBeepAlert();
    onDispatch(newBroadcast);
    setDispatchedSuccess(true);
    setTimeout(() => setDispatchedSuccess(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Header */}
        <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Emergency Alert & Broadcasting Center
              </h2>
              <p className="text-xs text-slate-400">
                Facility: <span className="text-white font-semibold">{dam.name}</span> ({dam.river}, {dam.state})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector: Dispatch vs History */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('create')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition ${
              activeTab === 'create'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Compose Multi-Tier Dispatch
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'history'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Broadcast Logs ({broadcasts.length})</span>
          </button>
        </div>

        {activeTab === 'create' ? (
          <div className="p-6 space-y-5">
            {/* Step 1: Select Broadcast Classification */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Broadcast Directive Scenario
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1. Condition Not Good Warning */}
                <button
                  type="button"
                  onClick={() => setMessageType('condition_alert')}
                  className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer ${
                    messageType === 'condition_alert'
                      ? 'bg-amber-950/40 border-amber-500 shadow-md shadow-amber-950'
                      : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-300">
                      Surveillance
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">Condition Alert</div>
                  <div className="text-[11px] text-slate-400">
                    To Local People & Police with inspection parameters
                  </div>
                </button>

                {/* 2. Sudden Dam Breach */}
                <button
                  type="button"
                  onClick={() => setMessageType('sudden_breach')}
                  className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer ${
                    messageType === 'sudden_breach'
                      ? 'bg-red-950/40 border-red-500 shadow-md shadow-red-950'
                      : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="p-1.5 rounded-lg bg-red-500/20 text-red-400">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-900/60 text-red-300">
                      Critical
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">Sudden Breach</div>
                  <div className="text-[11px] text-slate-400">
                    To Local People, Government (SDMA) & Police Stations
                  </div>
                </button>

                {/* 3. Flow Stopped - NGO Relief */}
                <button
                  type="button"
                  onClick={() => setMessageType('flood_stopped_relief')}
                  className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer ${
                    messageType === 'flood_stopped_relief'
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950'
                      : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <HeartHandshake className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300">
                      Rehabilitation
                    </span>
                  </div>
                  <div className="font-bold text-xs text-white">Flow Stopped / Relief</div>
                  <div className="text-[11px] text-slate-400">
                    To NGOs & Public Helping / Relief Services
                  </div>
                </button>
              </div>
            </div>

            {/* Recipient Audience Display */}
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400 font-medium">Automatic Destination Nodes:</span>
              <div className="flex items-center gap-1.5">
                {messageType === 'condition_alert' && (
                  <>
                    <span className="px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-700/50 flex items-center gap-1">
                      <Users className="w-3 h-3" /> Local People
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 border border-blue-700/50 flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Police Officers
                    </span>
                  </>
                )}
                {messageType === 'sudden_breach' && (
                  <>
                    <span className="px-2 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-700/50 flex items-center gap-1">
                      <Users className="w-3 h-3" /> Local People
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-700/50 flex items-center gap-1">
                      <Building className="w-3 h-3" /> Govt / SDMA
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-700/50 flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Police Station
                    </span>
                  </>
                )}
                {messageType === 'flood_stopped_relief' && (
                  <>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-300 border border-emerald-700/50 flex items-center gap-1">
                      <HeartHandshake className="w-3 h-3" /> NGOs & Red Cross
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/50 text-emerald-300 border border-emerald-700/50 flex items-center gap-1">
                      <Users className="w-3 h-3" /> Public Helping Services
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Embedded Inspection Parameters (Muddy seepages, whirlpools, pipes) */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-xs space-y-1.5">
              <div className="font-bold text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Verified Inspection Telemetry & Remedial Parameters:</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-mono text-[11px]">
                {conditionParamsText}
              </p>
            </div>

            {dispatchedSuccess ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500 rounded-xl flex items-center gap-3 text-emerald-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-sm text-white">Broadcast Successfully Dispatched!</div>
                  <div className="text-xs text-emerald-300">
                    Transmission confirmed across all designated emergency receiver network channels.
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSendMessage}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50 transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH OFFICIAL EMERGENCY BROADCAST</span>
              </button>
            )}
          </div>
        ) : (
          /* Broadcast History Tab */
          <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
            {broadcasts.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-sm">
                No active broadcast records. Transmit a directive from the compose tab.
              </div>
            ) : (
              broadcasts.map((bc) => (
                <div
                  key={bc.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase ${
                          bc.priority === 'Emergency'
                            ? 'bg-red-900/80 text-red-200 border border-red-600'
                            : bc.priority === 'Urgent'
                            ? 'bg-amber-900/80 text-amber-200 border border-amber-600'
                            : 'bg-emerald-900/80 text-emerald-200 border border-emerald-600'
                        }`}
                      >
                        {bc.priority}
                      </span>
                      <span className="font-bold text-white">{bc.damName}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{bc.timestamp}</span>
                  </div>

                  <h4 className="font-bold text-slate-200 text-sm">{bc.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{bc.messageBody}</p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Recipients: {bc.targetAudience.join(', ')}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {bc.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
