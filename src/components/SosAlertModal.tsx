import React, { useState, useEffect } from 'react';
import { Radio, Volume2, VolumeX, AlertTriangle, ShieldAlert, CheckCircle2, Building, Users, Shield, Send, X } from 'lucide-react';
import { playEmergencySiren, stopEmergencySiren } from '../utils/soundAlert';
import { Dam, EmergencyBroadcast } from '../types';
import { triggerHaptic, sendAndroidDamNotification } from '../utils/androidBridge';

interface SosAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDam: Dam | null;
  onDispatchBroadcast: (broadcast: EmergencyBroadcast) => void;
}

export const SosAlertModal: React.FC<SosAlertModalProps> = ({
  isOpen,
  onClose,
  activeDam,
  onDispatchBroadcast,
}) => {
  const [sirenActive, setSirenActive] = useState(true);
  const [dispatched, setDispatched] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState({
    localPeople: true,
    police: true,
    government: true,
  });

  useEffect(() => {
    if (isOpen) {
      setDispatched(false);
      if (sirenActive) {
        playEmergencySiren();
      }
    } else {
      stopEmergencySiren();
    }

    return () => {
      stopEmergencySiren();
    };
  }, [isOpen, sirenActive]);

  if (!isOpen) return null;

  const toggleSiren = () => {
    if (sirenActive) {
      stopEmergencySiren();
      setSirenActive(false);
    } else {
      playEmergencySiren();
      setSirenActive(true);
    }
  };

  const damName = activeDam ? activeDam.name : 'National Dam System (High Hazard Corridor)';
  const damRiver = activeDam ? activeDam.river : 'Target River Basin';
  const damState = activeDam ? activeDam.state : 'Immediate Downstream Zone';
  const targetReach = activeDam ? `${activeDam.hydrodynamicBreach.downstreamRiverReachKm} km` : '100+ km';

  const handleImmediateBroadcast = () => {
    const audience: ('Local Residents' | 'Police Department' | 'Government & SDMA')[] = [];
    if (selectedChannels.localPeople) audience.push('Local Residents');
    if (selectedChannels.police) audience.push('Police Department');
    if (selectedChannels.government) audience.push('Government & SDMA');

    const newBroadcast: EmergencyBroadcast = {
      id: `sos-${Date.now()}`,
      damId: activeDam?.id || 'national-sos',
      damName,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST',
      type: 'sudden_breach',
      priority: 'Emergency',
      targetAudience: audience,
      title: `URGENT SOS: FLASH FLOOD & DAM BREACH WARNING FOR ${damName.toUpperCase()}`,
      messageBody: `CRITICAL EVACUATION DIRECTIVE: Sudden hydrodynamic flood wave imminent along ${damRiver} downstream corridor in ${damState}. Evacuate low-lying riverbanks immediately to designated elevated grounds within reach length of ${targetReach}. Police and NDRF units deployed. Do NOT cross bridges or riverfronts!`,
      status: 'Broadcasting Active',
    };

    onDispatchBroadcast(newBroadcast);
    setDispatched(true);
    triggerHaptic('emergency');
    sendAndroidDamNotification(
      `🚨 EVACUATION ALERT: ${damName}`,
      `Imminent hydrodynamic surge along ${damRiver}. Evacuate downstream reach (${targetReach}) immediately.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-red-600 rounded-2xl shadow-2xl shadow-red-950 overflow-hidden text-slate-100 my-8">
        
        {/* Urgent Flashing Header */}
        <div className="bg-red-600 px-6 py-4 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black/30 rounded-lg animate-pulse">
              <AlertTriangle className="w-7 h-7 text-yellow-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-white text-red-700 tracking-wider uppercase">
                  HIGH-PRIORITY RED ALERT
                </span>
                <span className="text-xs font-mono text-red-100">NDSA-SOS-LEVEL-4</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">
                NATIONAL EMERGENCY SOS SIGNAL
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSiren}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                sirenActive
                  ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                  : 'bg-red-800 text-white hover:bg-red-700'
              }`}
              title={sirenActive ? 'Mute Siren Audio' : 'Unmute Siren Audio'}
            >
              {sirenActive ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
              <span className="hidden sm:inline">{sirenActive ? 'SIREN ON' : 'MUTED'}</span>
            </button>
            <button
              onClick={() => {
                stopEmergencySiren();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-red-700/80 hover:bg-red-800 text-white transition"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Target Dam Banner */}
          <div className="bg-red-950/50 border border-red-800/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                Target Facility
              </span>
              <h3 className="text-lg font-bold text-white">{damName}</h3>
              <p className="text-xs text-slate-300">
                River: <span className="font-semibold text-white">{damRiver}</span> | State:{' '}
                <span className="font-semibold text-white">{damState}</span>
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 border border-red-500 text-xs font-bold text-red-300">
                <Radio className="w-3.5 h-3.5 animate-spin" />
                Critical Threat Zone
              </span>
            </div>
          </div>

          {/* Broadcast Recipients Channels */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Send className="w-4 h-4 text-red-400" />
              Immediate Multi-Agency Broadcast Routing
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Local People */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col gap-2 cursor-pointer transition ${
                  selectedChannels.localPeople
                    ? 'bg-slate-800/90 border-red-500 shadow-md shadow-red-950'
                    : 'bg-slate-900 border-slate-700 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedChannels.localPeople}
                    onChange={(e) =>
                      setSelectedChannels({ ...selectedChannels, localPeople: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Local People</div>
                  <div className="text-[11px] text-slate-400">
                    Direct Cell Broadcast SMS & Community Sirens in Inundation Reach
                  </div>
                </div>
              </label>

              {/* Police Station */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col gap-2 cursor-pointer transition ${
                  selectedChannels.police
                    ? 'bg-slate-800/90 border-red-500 shadow-md shadow-red-950'
                    : 'bg-slate-900 border-slate-700 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedChannels.police}
                    onChange={(e) =>
                      setSelectedChannels({ ...selectedChannels, police: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Police Officers</div>
                  <div className="text-[11px] text-slate-400">
                    District Police Control Rooms & River Patrol VHF Wireless Net
                  </div>
                </div>
              </label>

              {/* Government & SDMA */}
              <label
                className={`p-3.5 rounded-xl border flex flex-col gap-2 cursor-pointer transition ${
                  selectedChannels.government
                    ? 'bg-slate-800/90 border-red-500 shadow-md shadow-red-950'
                    : 'bg-slate-900 border-slate-700 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedChannels.government}
                    onChange={(e) =>
                      setSelectedChannels({ ...selectedChannels, government: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-red-600 focus:ring-red-500"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Government & SDMA</div>
                  <div className="text-[11px] text-slate-400">
                    District Magistrate, NDRF Battalions & State Disaster Cells
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Emergency Advisory Preview */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono space-y-1.5 text-slate-300">
            <div className="text-red-400 font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              PRIORITY TRANSMISSION PREVIEW:
            </div>
            <p className="leading-relaxed">
              &quot;EMERGENCY FLASH FLOOD EVACUATION: Hydrodynamic modeling indicates imminent rapid breach
              peak discharge along {damRiver}. Downstream population within {targetReach} must move to
              designated high ground shelters immediately. Police units initiating mandatory perimeter
              cordons.&quot;
            </p>
          </div>

          {dispatched ? (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500 rounded-xl flex items-center gap-3 text-emerald-300">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <div className="font-bold text-sm text-white">Emergency Broadcast Successfully Dispatched!</div>
                <div className="text-xs text-emerald-300">
                  Cell Broadcast SMS, Police Wireless Dispatch, and State Emergency Operation Center
                  acknowledged the red alert.
                </div>
              </div>
            </div>
          ) : (
            <button
              id="dispatch-sos-alert-now"
              onClick={handleImmediateBroadcast}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-red-950 transition active:scale-98 flex items-center justify-center gap-2 border border-red-400 cursor-pointer"
            >
              <Radio className="w-5 h-5 text-white animate-pulse" />
              DISPATCH EMERGENCY SOS BROADCAST NOW
            </button>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-950/90 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>In compliance with Indian Dam Safety Act 2021 & NDMA protocols</span>
          <button
            onClick={() => {
              stopEmergencySiren();
              onClose();
            }}
            className="text-slate-300 hover:text-white underline"
          >
            Dismiss Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
