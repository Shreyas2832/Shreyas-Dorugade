import React from 'react';
import { X, ShieldCheck, Waves, Database, AlertOctagon, BarChart3, Droplets } from 'lucide-react';
import { StateDamStat } from '../data/stateStats';

interface NationalOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  stateStats: StateDamStat[];
  totalDams: number;
}

export const NationalOverviewModal: React.FC<NationalOverviewModalProps> = ({
  isOpen,
  onClose,
  stateStats,
  totalDams,
}) => {
  if (!isOpen) return null;

  const totalGood = stateStats.reduce((acc, s) => acc + s.goodCondition, 0);
  const totalModerate = stateStats.reduce((acc, s) => acc + s.moderateCondition, 0);
  const totalAlert = stateStats.reduce((acc, s) => acc + s.alertCondition, 0);
  const totalCritical = stateStats.reduce((acc, s) => acc + s.criticalCondition, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-slate-100 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                National Dam Safety Register & 2D Hydrodynamic Modeling Architecture
              </h2>
              <p className="text-xs text-slate-400">
                Central Water Commission (CWC) & National Dam Safety Authority (NDSA)
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

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* High-level National Aggregate */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-cyan-400">
                {totalDams.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-semibold">Total Registered Dams</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
                {totalGood.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-semibold">Class I: Good / Safe</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-amber-400">
                {(totalModerate + totalAlert).toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-semibold">Class II/III: Monitored</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-mono font-black text-red-400 animate-pulse">
                {totalCritical.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-semibold">Class IV: Critical Piping</div>
            </div>
          </div>

          {/* State-by-State Breakdown Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              State-Wise Dam Distribution (All 28 States & UTs)
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">State</th>
                    <th className="p-3">Zone</th>
                    <th className="p-3">Total Dams</th>
                    <th className="p-3">Good</th>
                    <th className="p-3">Moderate</th>
                    <th className="p-3">Alert</th>
                    <th className="p-3">Critical</th>
                    <th className="p-3">Major River Basins</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                  {stateStats.map((st) => (
                    <tr key={st.state} className="hover:bg-slate-800/40 transition">
                      <td className="p-3 font-bold text-white">{st.state}</td>
                      <td className="p-3 text-slate-400">{st.zone}</td>
                      <td className="p-3 font-mono font-bold text-cyan-300">
                        {st.totalDams.toLocaleString()}
                      </td>
                      <td className="p-3 text-emerald-400 font-mono">{st.goodCondition}</td>
                      <td className="p-3 text-amber-400 font-mono">{st.moderateCondition}</td>
                      <td className="p-3 text-orange-400 font-mono">{st.alertCondition}</td>
                      <td className="p-3 text-red-400 font-mono font-bold">{st.criticalCondition}</td>
                      <td className="p-3 text-slate-400">{st.majorRivers.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dam Safety Act & Emergency Protocols Info */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2 text-slate-400 leading-relaxed">
            <h4 className="font-bold text-white text-sm">Emergency Alert Routing Protocols</h4>
            <p>
              Under the Indian Dam Safety Act 2021, when a dam transitions to non-good conditions (piping risk,
              turbid discolored seepage, or whirlpool formation), advisories are dispatched directly to local
              inhabitants and police stations.
            </p>
            <p>
              In the event of sudden hydrodynamic dam breach, automated high-priority alerts are transmitted
              to Local People, Government (SDMA/NDRF), and Police Stations simultaneously. Once the flood wave
              passes and river flow recedes to safe bankfull levels, coordinated relief directives are issued to
              voluntary NGOs, Indian Red Cross, and civil relief organizations.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
