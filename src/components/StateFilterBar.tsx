import React from 'react';
import { Search, Filter, MapPin, Building2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { StateDamStat } from '../data/stateStats';
import { DamCondition } from '../types';

interface StateFilterBarProps {
  stateStats: StateDamStat[];
  selectedState: string | null;
  onSelectState: (state: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  conditionFilter: DamCondition | 'all';
  onConditionFilterChange: (cond: DamCondition | 'all') => void;
  totalNationalDams: number;
}

export const StateFilterBar: React.FC<StateFilterBarProps> = ({
  stateStats,
  selectedState,
  onSelectState,
  searchQuery,
  onSearchChange,
  conditionFilter,
  onConditionFilterChange,
  totalNationalDams,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
      {/* Search and Condition Filters Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search all 5,300+ dams by name, river (e.g. Bhagirathi, Narmada), district..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>

        {/* Condition Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0 text-xs font-semibold">
          <button
            onClick={() => onConditionFilterChange('all')}
            className={`px-3 py-1.5 rounded-lg border transition ${
              conditionFilter === 'all'
                ? 'bg-blue-600 text-white border-blue-500 shadow'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            All Conditions
          </button>
          <button
            onClick={() => onConditionFilterChange('good')}
            className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              conditionFilter === 'good'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                : 'bg-slate-800/80 text-emerald-400 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Good
          </button>
          <button
            onClick={() => onConditionFilterChange('moderate')}
            className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              conditionFilter === 'moderate'
                ? 'bg-amber-600 text-white border-amber-500 shadow'
                : 'bg-slate-800/80 text-amber-400 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Moderate
          </button>
          <button
            onClick={() => onConditionFilterChange('alert')}
            className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              conditionFilter === 'alert'
                ? 'bg-orange-600 text-white border-orange-500 shadow'
                : 'bg-slate-800/80 text-orange-400 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            Alert
          </button>
          <button
            onClick={() => onConditionFilterChange('critical')}
            className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1 ${
              conditionFilter === 'critical'
                ? 'bg-red-600 text-white border-red-500 shadow'
                : 'bg-slate-800/80 text-red-400 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
            Critical
          </button>
        </div>
      </div>

      {/* State Selection Badges (All Indian States & UTs with official CWC tallies) */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            Filter Dams by State (National Register of Large Dams - NRLD):
          </span>
          {selectedState && (
            <button
              onClick={() => onSelectState(null)}
              className="text-cyan-400 hover:underline text-xs"
            >
              Reset to All States
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {/* All States Button */}
          <button
            onClick={() => onSelectState(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1.5 ${
              selectedState === null
                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-950'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span>All States ({totalNationalDams.toLocaleString()})</span>
          </button>

          {/* Individual States */}
          {stateStats.map((st) => {
            const isSelected = selectedState === st.state;
            return (
              <button
                key={st.state}
                onClick={() => onSelectState(isSelected ? null : st.state)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-950'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{st.state}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    isSelected
                      ? 'bg-slate-950 text-cyan-400'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {st.totalDams.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
