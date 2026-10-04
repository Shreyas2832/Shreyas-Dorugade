import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, MapPin, Clock, Waves, Compass, AlertCircle, CheckCircle } from 'lucide-react';
import { Dam } from '../types';
import { computeHydrodynamicStep } from '../utils/hydrodynamicModel';

interface InundationMapCanvasProps {
  dam: Dam;
  onSelectZone?: (zoneName: string) => void;
}

export const InundationMapCanvas: React.FC<InundationMapCanvasProps> = ({ dam, onSelectZone }) => {
  const model = dam.hydrodynamicBreach;
  const [elapsedHours, setElapsedHours] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mapLayer, setMapLayer] = useState<'satellite' | 'hydrological'>('satellite');
  const animationRef = useRef<number | null>(null);

  const stepResult = computeHydrodynamicStep(model, elapsedHours);

  // Animation playback
  useEffect(() => {
    if (isPlaying) {
      const interval = window.setInterval(() => {
        setElapsedHours((prev) => {
          if (prev >= model.floodRecessionTimeHours) {
            setIsPlaying(false);
            return model.floodRecessionTimeHours;
          }
          return parseFloat((prev + 0.4).toFixed(1));
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isPlaying, model.floodRecessionTimeHours]);

  const handleReset = () => {
    setIsPlaying(false);
    setElapsedHours(0);
  };

  // Convert distance to canvas x coordinates
  const canvasWidth = 750;
  const canvasHeight = 320;
  const startX = 60;
  const endX = 700;

  // River meandering path coordinates
  const getRiverPoint = (distKm: number) => {
    const ratio = Math.min(1, distKm / model.downstreamRiverReachKm);
    const x = startX + ratio * (endX - startX);
    // Meandering sinusoidal wave
    const y = 160 + Math.sin(ratio * Math.PI * 4) * 45 + Math.cos(ratio * Math.PI * 2) * 20;
    return { x, y };
  };

  const damPos = { x: startX, y: 160 };
  const waveFrontPos = getRiverPoint(stepResult.waveFrontDistanceKm);

  // Generate river path string
  let riverPathD = `M ${damPos.x} ${damPos.y}`;
  const pointsCount = 40;
  for (let i = 1; i <= pointsCount; i++) {
    const km = (i / pointsCount) * model.downstreamRiverReachKm;
    const pt = getRiverPoint(km);
    riverPathD += ` L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  }

  // Generate inundation polygon up to current wavefront
  const reachedPoints: { x: number; y: number }[] = [];
  const floodRatio = Math.min(1, stepResult.waveFrontDistanceKm / model.downstreamRiverReachKm);
  const reachedCount = Math.max(1, Math.round(floodRatio * pointsCount));

  for (let i = 0; i <= reachedCount; i++) {
    const km = (i / pointsCount) * model.downstreamRiverReachKm;
    if (km <= stepResult.waveFrontDistanceKm) {
      reachedPoints.push(getRiverPoint(km));
    }
  }

  // Upper boundary of flood spread (proportional to wave depth)
  let floodPolygonD = '';
  if (reachedPoints.length > 1 && stepResult.maxWaveDepthMeters > 0) {
    const spreadPx = Math.min(38, Math.max(8, stepResult.maxWaveDepthMeters * 1.8));
    
    // Top path
    floodPolygonD = `M ${reachedPoints[0].x} ${reachedPoints[0].y - spreadPx * 0.4}`;
    for (let i = 1; i < reachedPoints.length; i++) {
      const taper = (1 - (i / reachedPoints.length) * 0.4);
      floodPolygonD += ` L ${reachedPoints[i].x} ${reachedPoints[i].y - spreadPx * taper}`;
    }
    // Bottom path backwards
    for (let i = reachedPoints.length - 1; i >= 0; i--) {
      const taper = (1 - (i / reachedPoints.length) * 0.4);
      floodPolygonD += ` L ${reachedPoints[i].x} ${reachedPoints[i].y + spreadPx * taper}`;
    }
    floodPolygonD += ' Z';
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4 shadow-xl">
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50 uppercase">
              2D Hydrodynamic Breach Model
            </span>
            <span className="text-xs text-slate-400">
              River: <span className="text-white font-semibold">{dam.river}</span>
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mt-0.5">
            <Waves className="w-5 h-5 text-cyan-400" />
            Downstream Dam Break Inundation Simulation
          </h3>
        </div>

        {/* Layer Mode & Reset */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-800 p-1 rounded-lg border border-slate-700 flex text-xs">
            <button
              onClick={() => setMapLayer('satellite')}
              className={`px-2.5 py-1 rounded font-medium transition ${
                mapLayer === 'satellite' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Satellite Imagery
            </button>
            <button
              onClick={() => setMapLayer('hydrological')}
              className={`px-2.5 py-1 rounded font-medium transition ${
                mapLayer === 'hydrological' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Hydrograph Contours
            </button>
          </div>
        </div>
      </div>

      {/* Primary 2D Simulation Canvas & Map View */}
      <div className="relative w-full rounded-xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950">
        
        {/* Background Layer: Satellite or Hydro */}
        {mapLayer === 'satellite' ? (
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Satellite topographic terrain texture */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-950/20 via-slate-900 to-amber-950/20"></div>
          </div>
        ) : (
          <div className="absolute inset-0 opacity-30 bg-slate-900 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        )}

        {/* SVG Simulation Graphics */}
        <svg
          viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
          className="relative z-10 w-full h-64 sm:h-80 select-none"
        >
          <defs>
            {/* Flood water gradient */}
            <linearGradient id="floodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.85" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Natural River Bed Track */}
          <path
            d={riverPathD}
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={riverPathD}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="3"
            strokeDasharray="4,4"
            strokeOpacity="0.6"
          />

          {/* Dynamic Inundation Flood Wave Polygon */}
          {floodPolygonD && (
            <path
              d={floodPolygonD}
              fill="url(#floodGrad)"
              stroke="#38bdf8"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-150"
            />
          )}

          {/* Dam Wall Marker (Source of breach) */}
          <g transform={`translate(${damPos.x}, ${damPos.y})`}>
            {/* Dam barrier icon */}
            <rect
              x="-8"
              y="-30"
              width="16"
              height="60"
              rx="3"
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text x="-4" y="-36" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">
              DAM BREACH ORIGIN
            </text>
            <text x="-4" y="44" fill="#cbd5e1" fontSize="10" textAnchor="middle">
              {dam.name} (KM 0.0)
            </text>
          </g>

          {/* Downstream Affected Zones / Settlements */}
          {model.affectedZones.map((zone, idx) => {
            const pos = getRiverPoint(zone.distanceDownstreamKm);
            const isFlooded = (zone.waveArrivalTimeMinutes / 60) <= elapsedHours;
            const isReceded = stepResult.flowState === 'Flow Cessation (Safe)';

            return (
              <g
                key={zone.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className="cursor-pointer"
                onClick={() => onSelectZone && onSelectZone(zone.name)}
              >
                {/* Ping animation if currently being hit */}
                {isFlooded && !isReceded && (
                  <circle r="16" fill="none" stroke="#ef4444" strokeWidth="2" className="animate-ping" />
                )}

                {/* Pin Circle */}
                <circle
                  r="7"
                  fill={isFlooded ? (isReceded ? '#10b981' : '#dc2626') : '#334155'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />

                {/* Text Label */}
                <text
                  x="0"
                  y={idx % 2 === 0 ? -14 : 22}
                  fill={isFlooded ? '#ffffff' : '#94a3b8'}
                  fontSize="11"
                  fontWeight={isFlooded ? 'bold' : 'normal'}
                  textAnchor="middle"
                >
                  {zone.name}
                </text>
                <text
                  x="0"
                  y={idx % 2 === 0 ? -26 : 34}
                  fill={isFlooded ? '#f87171' : '#64748b'}
                  fontSize="9"
                  textAnchor="middle"
                >
                  +{zone.distanceDownstreamKm}km | {zone.waveArrivalTimeMinutes}m ETA
                </text>
              </g>
            );
          })}

          {/* Active Flood Wave Front Arrow Indicator */}
          {stepResult.maxWaveDepthMeters > 0 && (
            <g transform={`translate(${waveFrontPos.x}, ${waveFrontPos.y})`}>
              <circle r="12" fill="#ef4444" fillOpacity="0.4" className="animate-ping" />
              <polygon
                points="0,-8 10,0 0,8"
                fill="#ffffff"
                stroke="#ef4444"
                strokeWidth="1.5"
              />
              <text x="0" y="-14" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                Wave Front: {stepResult.waveFrontDistanceKm} km
              </text>
            </g>
          )}
        </svg>

        {/* Live Simulation Telemetry HUD Overlay */}
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-lg p-2.5 sm:p-3 text-xs space-y-1 z-20 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Elapsed Model Time:</span>
            <span className="font-mono text-cyan-400 font-bold text-sm">
              T+{elapsedHours.toFixed(1)} hrs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Simulation Status:</span>
            <span
              className={`font-semibold ${
                stepResult.flowState === 'Flow Cessation (Safe)'
                  ? 'text-emerald-400'
                  : stepResult.flowState === 'Breaching' || stepResult.flowState === 'Peak Wave Propagating'
                  ? 'text-red-400 animate-pulse'
                  : 'text-amber-400'
              }`}
            >
              {stepResult.flowState}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Breach Peak Q:</span>
            <span className="font-mono text-white font-medium">
              {stepResult.currentDischargeCumecs.toLocaleString()} m³/s
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Max Flood Depth:</span>
            <span className="font-mono text-white font-medium">
              {stepResult.maxWaveDepthMeters} meters
            </span>
          </div>
        </div>

        {/* "Till How Long Water Will Flow" Banner */}
        <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-cyan-800/80 rounded-lg p-2.5 sm:p-3 text-xs z-20 shadow-lg max-w-[240px]">
          <div className="text-cyan-400 font-bold flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5" />
            HYDRODYNAMIC DURATION
          </div>
          <div className="text-[11px] text-slate-300">
            • Peak Flood Surge: <span className="font-bold text-white">{model.totalFloodDurationHours} Hours</span>
          </div>
          <div className="text-[11px] text-slate-300">
            • Full Flow Cessation: <span className="font-bold text-emerald-400">{model.floodRecessionTimeHours} Hours</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1 italic">
            Water recedes completely to non-flood channel capacity at T+{model.floodRecessionTimeHours}h.
          </div>
        </div>
      </div>

      {/* Simulation Playback & Timeline Controls */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer ${
                isPlaying
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'PAUSE WAVE' : 'RUN WAVE SIMULATION'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
              title="Reset Simulation to T=0"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info Status */}
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Downstream Reach:</span>
            <span className="font-bold text-white">{model.downstreamRiverReachKm} km</span>
            <span className="text-slate-600">|</span>
            <span>Total Inundation Area:</span>
            <span className="font-bold text-cyan-400">{model.totalInundationAreaSqKm} km²</span>
          </div>
        </div>

        {/* Timeline Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>T=0h (Breach Start)</span>
            <span className="text-cyan-400 font-bold">
              Current: T+{elapsedHours.toFixed(1)}h / {model.floodRecessionTimeHours}h
            </span>
            <span>T+{model.floodRecessionTimeHours}h (Flow Stops / Cessation)</span>
          </div>
          <input
            type="range"
            min={0}
            max={model.floodRecessionTimeHours}
            step={0.5}
            value={elapsedHours}
            onChange={(e) => {
              setIsPlaying(false);
              setElapsedHours(parseFloat(e.target.value));
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>
      </div>

      {/* Downstream Affected Zones Table */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-red-400" />
          Downstream Impact Corridor & Evacuation Zones
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {model.affectedZones.map((zone) => {
            const isFlooded = (zone.waveArrivalTimeMinutes / 60) <= elapsedHours;
            const isReceded = stepResult.flowState === 'Flow Cessation (Safe)';

            return (
              <div
                key={zone.id}
                className={`p-3 rounded-xl border transition ${
                  isFlooded && !isReceded
                    ? 'bg-red-950/40 border-red-600/80 shadow-md shadow-red-950'
                    : isReceded
                    ? 'bg-emerald-950/30 border-emerald-600/50'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm text-white">{zone.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      isFlooded && !isReceded
                        ? 'bg-red-600 text-white animate-pulse'
                        : isReceded
                        ? 'bg-emerald-800 text-emerald-100'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {isFlooded ? (isReceded ? 'Water Receded' : 'FLOODING') : 'Pending Wave'}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Arrival Time:</span>
                    <span className="font-mono font-semibold text-white">
                      +{zone.waveArrivalTimeMinutes} mins
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Peak Flood Depth:</span>
                    <span className="font-mono font-semibold text-cyan-400">
                      {zone.peakFloodDepthMeters} m
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Velocity:</span>
                    <span className="font-mono text-slate-200">{zone.flowVelocityMps} m/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Population:</span>
                    <span className="text-slate-200">{zone.estimatedPopulation.toLocaleString()}</span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-700/50 text-[11px] text-amber-300 font-medium truncate">
                    Shelter: {zone.safeShelterZone}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
