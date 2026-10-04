import React from 'react';
import { Waves, Droplets, Activity, Radio, Plane, Satellite, MapPin, Eye } from 'lucide-react';
import { Dam, DamCondition } from '../types';

interface DamCardProps {
  dam: Dam;
  onSelect: (dam: Dam, initialTab?: 'inundation' | 'seepage_whirlpool' | 'images' | 'sensors' | 'landslides' | 'rainfall_earthquake' | 'capacity') => void;
  onTriggerSos: (dam: Dam) => void;
}

export const DamCard: React.FC<DamCardProps> = ({ dam, onSelect, onTriggerSos }) => {
  const latestSeepage = dam.seepageRecords[0];
  const latestWhirlpool = dam.whirlpoolRecords[0];
  const fillPercent = Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100);

  // Pick primary drone and satellite images
  const droneImg = dam.images?.find(img => img.type === 'drone') || dam.images?.[0];
  const satImg = dam.images?.find(img => img.type === 'satellite');
  const previewImg = droneImg || satImg || dam.images?.[0];

  const formatLiters = (liters: number) => {
    if (liters >= 1000000000000) {
      return `${(liters / 1000000000000).toFixed(2)} Trillion L`;
    }
    if (liters >= 1000000000) {
      return `${(liters / 1000000000).toFixed(1)} Billion L`;
    }
    return `${(liters / 1000000).toFixed(0)}M L`;
  };

  const conditionBadges: Record<DamCondition, { label: string; style: string }> = {
    good: { label: 'Good Condition', style: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/60' },
    moderate: { label: 'Moderate', style: 'bg-amber-900/60 text-amber-300 border-amber-700/60' },
    alert: { label: 'Alert / Seepage', style: 'bg-orange-900/60 text-orange-300 border-orange-700/60' },
    critical: { label: 'Critical Piping', style: 'bg-red-900/80 text-red-200 border-red-600 animate-pulse' },
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition shadow-lg flex flex-col justify-between group">
      {/* Top Drone / Satellite Imagery Banner */}
      {previewImg && (
        <div 
          onClick={() => onSelect(dam, 'images')}
          className="relative h-44 w-full bg-slate-950 overflow-hidden cursor-pointer group/img"
          title={`Click to inspect Drone & Satellite Imagery for ${dam.name}`}
        >
          <img
            src={previewImg.url}
            alt={previewImg.title || `${dam.name} Drone Imagery`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Top Left: Drone / Satellite Badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-700/60 flex items-center gap-1 shadow-md backdrop-blur-sm">
              <Plane className="w-3 h-3" />
              <span>UAV Drone Scan</span>
            </span>
            {satImg && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950/90 text-indigo-300 border border-indigo-700/60 flex items-center gap-1 shadow-md backdrop-blur-sm">
                <Satellite className="w-3 h-3" />
                <span>Radar Pass</span>
              </span>
            )}
          </div>

          {/* Top Right: Condition */}
          <div className="absolute top-2.5 right-2.5">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shrink-0 backdrop-blur-sm shadow ${
                conditionBadges[dam.condition].style
              }`}
            >
              {conditionBadges[dam.condition].label}
            </span>
          </div>

          {/* Bottom Overlay: Location & Coordinates */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-300">
            <div className="flex items-center gap-1 font-medium truncate drop-shadow">
              <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="truncate">{dam.district}, {dam.state}</span>
            </div>
            {dam.latitude && dam.longitude && (
              <span className="font-mono text-cyan-300 bg-slate-900/80 px-1.5 py-0.5 rounded text-[9px] border border-slate-700/80 shrink-0">
                {dam.latitude.toFixed(2)}°N, {dam.longitude.toFixed(2)}°E
              </span>
            )}
          </div>

          {/* Hover View Cue */}
          <div className="absolute inset-0 bg-cyan-950/60 backdrop-blur-[1px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>Open Drone UAV & Satellite Views ({dam.images?.length || 0})</span>
          </div>
        </div>
      )}

      {/* Main Details Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="mb-2">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
              {dam.state} &bull; {dam.river} River
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {dam.name}
            </h3>
          </div>

          {/* Reservoir Capacity & Overflow Level */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1.5 my-2 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Total Capacity:</span>
              <span className="font-mono font-bold text-cyan-300">
                {formatLiters(dam.grossStorageCapacityLiters)}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Current Volume ({fillPercent}%):</span>
              <span className="font-mono font-bold text-emerald-400">
                {formatLiters(dam.currentWaterVolumeLiters)}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-cyan-500 h-full rounded-full"
                style={{ width: `${fillPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-0.5">
              <span>Water Level: {dam.currentWaterLevelMeters}m MSL</span>
              <span>Overflow Crest: {dam.crestLevelMeters}m</span>
            </div>
          </div>

          {/* Key Indicators Snippets */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
            {/* Seepage */}
            <div className="p-2 rounded bg-slate-800/50 border border-slate-800 flex items-start gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div className="truncate">
                <span className="text-slate-400 block text-[10px]">Muddy Seepage</span>
                <span className="font-semibold text-white truncate block">
                  {latestSeepage ? `${latestSeepage.flowRateLps} L/s (${latestSeepage.pipingRiskScore})` : 'Clear'}
                </span>
              </div>
            </div>

            {/* Whirlpool */}
            <div className="p-2 rounded bg-slate-800/50 border border-slate-800 flex items-start gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="truncate">
                <span className="text-slate-400 block text-[10px]">Whirlpool Vortex</span>
                <span className="font-semibold text-white truncate block">
                  {latestWhirlpool ? `${latestWhirlpool.coreDiameterMeters}m Core` : 'None'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => onSelect(dam, 'inundation')}
            className="flex-1 min-w-[130px] py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
          >
            <Waves className="w-3.5 h-3.5" />
            <span>Inspect & Model</span>
          </button>

          <button
            onClick={() => onSelect(dam, 'images')}
            className="py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow"
            title="Inspect Drone & Satellite Images"
          >
            <Plane className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Drone & Satellite</span>
          </button>

          <button
            onClick={() => onTriggerSos(dam)}
            className="p-2 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 transition shrink-0"
            title="SOS Alert for this Dam"
          >
            <Radio className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
