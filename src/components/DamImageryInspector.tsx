import React, { useState } from 'react';
import { 
  Plane, Satellite, Camera, Compass, MapPin, Sliders, 
  Maximize2, Minimize2, ZoomIn, ZoomOut, Download, 
  ExternalLink, Eye, Layers, ShieldCheck, AlertTriangle, 
  CheckCircle2, Radio, Info, X, ChevronRight, Share2
} from 'lucide-react';
import { Dam, DamImage } from '../types';

interface DamImageryInspectorProps {
  dam: Dam;
}

export const DamImageryInspector: React.FC<DamImageryInspectorProps> = ({ dam }) => {
  const [filterType, setFilterType] = useState<'all' | 'drone' | 'satellite' | 'condition'>('all');
  const [showHud, setShowHud] = useState(true);
  const [compareMode, setCompareMode] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<DamImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Categorize images
  const allImages = dam.images || [];
  const droneImages = allImages.filter(img => img.type === 'drone');
  const satelliteImages = allImages.filter(img => img.type === 'satellite');
  const conditionImages = allImages.filter(img => img.type === 'condition_good' || img.type === 'condition_bad');

  // Selected images for compare mode
  const [leftCompareId, setLeftCompareId] = useState<string>(droneImages[0]?.id || allImages[0]?.id || '');
  const [rightCompareId, setRightCompareId] = useState<string>(satelliteImages[0]?.id || allImages[1]?.id || '');

  const filteredImages = allImages.filter(img => {
    if (filterType === 'drone') return img.type === 'drone';
    if (filterType === 'satellite') return img.type === 'satellite';
    if (filterType === 'condition') return img.type === 'condition_good' || img.type === 'condition_bad';
    return true;
  });

  const leftCompareImage = allImages.find(i => i.id === leftCompareId) || droneImages[0] || allImages[0];
  const rightCompareImage = allImages.find(i => i.id === rightCompareId) || satelliteImages[0] || allImages[1];

  const handleExportDossier = () => {
    const dossierData = {
      damId: dam.id,
      damName: dam.name,
      state: dam.state,
      district: dam.district,
      river: dam.river,
      basin: dam.basin,
      latitude: dam.latitude,
      longitude: dam.longitude,
      grossStorageCapacityLiters: dam.grossStorageCapacityLiters,
      currentWaterLevelMeters: dam.currentWaterLevelMeters,
      imageryRecordsCount: allImages.length,
      droneMissionsCount: droneImages.length,
      satellitePassesCount: satelliteImages.length,
      images: allImages.map(img => ({
        id: img.id,
        title: img.title,
        type: img.type,
        date: img.date,
        url: img.url,
        caption: img.caption,
        latitude: img.latitude,
        longitude: img.longitude,
        resolutionOrAltitude: img.resolutionOrAltitude,
        droneModelOrSatellite: img.droneModelOrSatellite,
        flightAltitudeMeters: img.flightAltitudeMeters,
        flightSpeedMps: img.flightSpeedMps,
        gimbalPitchDegrees: img.gimbalPitchDegrees,
        groundSamplingDistanceCm: img.groundSamplingDistanceCm,
        sensorPayload: img.sensorPayload,
        spectralBand: img.spectralBand,
        cloudCoverPercent: img.cloudCoverPercent,
        orbitOrFlightCode: img.orbitOrFlightCode
      }))
    };

    const blob = new Blob([JSON.stringify(dossierData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dam.id}-drone-satellite-imagery-dossier.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      {/* Top Remote Sensing Reconnaissance Intelligence Banner */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Multi-Source Remote Sensing & UAV Reconnaissance</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
              <span>{dam.name}</span>
              <span className="text-slate-400 text-sm font-normal">
                ({dam.district}, {dam.state})
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Real-time synchronization of sub-decimeter UAV drone orthomosaics with ISRO Cartosat-3 and ESA Sentinel-1 Synthetic Aperture Radar (SAR) for crack detection, crest erosion, and flood corridor monitoring.
            </p>
          </div>

          {/* Quick Location & Export Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {dam.latitude && dam.longitude && (
              <a
                href={`https://www.google.com/maps?q=${dam.latitude},${dam.longitude}&t=k`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-700/50 text-xs font-mono flex items-center gap-1.5 transition shadow"
                title="View Dam on Google Earth / Satellite"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{dam.latitude.toFixed(4)}°N, {dam.longitude.toFixed(4)}°E</span>
                <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
              </a>
            )}

            <button
              onClick={handleExportDossier}
              className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 text-xs font-semibold flex items-center gap-1.5 transition shadow"
              title="Download Imagery Telemetry Dossier"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export Dossier (JSON)</span>
            </button>
          </div>
        </div>

        {/* Technical Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-800/80 text-xs">
          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">UAV Drone Flights</span>
              <span className="text-sm font-bold text-white font-mono">{droneImages.length} Missions</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
              <Satellite className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Satellite Passes</span>
              <span className="text-sm font-bold text-white font-mono">{satelliteImages.length} Orbits</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Inspection Records</span>
              <span className="text-sm font-bold text-white font-mono">{conditionImages.length} Structural</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/60">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">River & Basin</span>
              <span className="text-xs font-bold text-white truncate block">{dam.river} ({dam.basin})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters & View Modes */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              filterType === 'all'
                ? 'bg-cyan-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Imagery ({allImages.length})</span>
          </button>

          <button
            onClick={() => setFilterType('drone')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              filterType === 'drone'
                ? 'bg-cyan-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Drone UAV Flights ({droneImages.length})</span>
          </button>

          <button
            onClick={() => setFilterType('satellite')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              filterType === 'satellite'
                ? 'bg-cyan-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Satellite className="w-3.5 h-3.5" />
            <span>Satellite Remote Sensing ({satelliteImages.length})</span>
          </button>

          <button
            onClick={() => setFilterType('condition')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              filterType === 'condition'
                ? 'bg-cyan-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Structural Condition ({conditionImages.length})</span>
          </button>
        </div>

        {/* View Options: HUD Toggle & Compare Mode */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHud(!showHud)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition ${
              showHud
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-600'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="Toggle Avionics & Orbit Telemetry HUD on imagery"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Avionics HUD {showHud ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition ${
              compareMode
                ? 'bg-indigo-900/80 text-indigo-200 border-indigo-500'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            title="Compare Drone vs Satellite side-by-side"
          >
            <span>Compare Mode</span>
          </button>
        </div>
      </div>

      {/* COMPARATOR MODE: SIDE-BY-SIDE DRONE VS SATELLITE */}
      {compareMode && (
        <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-indigo-800/60 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>Side-by-Side Drone UAV vs Satellite Radar Analysis</span>
              </h4>
              <p className="text-xs text-slate-400">
                Compare micro-resolution UAV drone structural orthomosaic with macro synthetic aperture radar flood swath.
              </p>
            </div>
            <button
              onClick={() => setCompareMode(false)}
              className="text-xs text-slate-400 hover:text-white underline self-start sm:self-auto"
            >
              Exit Comparator
            </button>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] text-cyan-400 font-bold mb-1 flex items-center gap-1">
                <Plane className="w-3 h-3" />
                <span>Left Panel (Primary Drone Aerial):</span>
              </label>
              <select
                value={leftCompareId}
                onChange={(e) => setLeftCompareId(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white text-xs rounded-lg px-3 py-2"
              >
                {allImages.map(img => (
                  <option key={img.id} value={img.id}>
                    [{img.type.toUpperCase()}] {img.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-indigo-400 font-bold mb-1 flex items-center gap-1">
                <Satellite className="w-3 h-3" />
                <span>Right Panel (Satellite Radar / Swath):</span>
              </label>
              <select
                value={rightCompareId}
                onChange={(e) => setRightCompareId(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white text-xs rounded-lg px-3 py-2"
              >
                {allImages.map(img => (
                  <option key={img.id} value={img.id}>
                    [{img.type.toUpperCase()}] {img.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dual Viewports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Image */}
            {leftCompareImage && (
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-cyan-800/60 relative group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={leftCompareImage.url}
                    alt={leftCompareImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-cyan-900/90 text-cyan-200 text-[10px] font-bold px-2 py-0.5 rounded border border-cyan-600">
                    {leftCompareImage.droneModelOrSatellite || leftCompareImage.title}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 p-2 rounded text-[10px] text-slate-300 border border-slate-800 font-mono">
                    <div>ALT: {leftCompareImage.flightAltitudeMeters || 115}m AGL &bull; GSD: {leftCompareImage.groundSamplingDistanceCm || 2.1} cm/px</div>
                    <div>GPS: {leftCompareImage.latitude?.toFixed(5)}°N, {leftCompareImage.longitude?.toFixed(5)}°E</div>
                  </div>
                  <button
                    onClick={() => setLightboxImage(leftCompareImage)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-white hover:bg-cyan-600 transition"
                    title="Fullscreen Inspect"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-3">
                  <h5 className="font-bold text-xs text-white">{leftCompareImage.title}</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{leftCompareImage.caption}</p>
                </div>
              </div>
            )}

            {/* Right Image */}
            {rightCompareImage && (
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-indigo-800/60 relative group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={rightCompareImage.url}
                    alt={rightCompareImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-900/90 text-indigo-200 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-600">
                    {rightCompareImage.droneModelOrSatellite || rightCompareImage.title}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 p-2 rounded text-[10px] text-slate-300 border border-slate-800 font-mono">
                    <div>SWATH: {rightCompareImage.orbitOrFlightCode || 'PASS-104'} &bull; RES: {rightCompareImage.resolutionOrAltitude || '10m'}</div>
                    <div>BAND: {rightCompareImage.spectralBand || 'SAR C-Band'}</div>
                  </div>
                  <button
                    onClick={() => setLightboxImage(rightCompareImage)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/80 text-white hover:bg-indigo-600 transition"
                    title="Fullscreen Inspect"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-3">
                  <h5 className="font-bold text-xs text-white">{rightCompareImage.title}</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{rightCompareImage.caption}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MAIN IMAGERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredImages.map((img) => {
          const isDrone = img.type === 'drone';
          const isSatellite = img.type === 'satellite';
          const isGood = img.type === 'condition_good';
          const isBad = img.type === 'condition_bad';

          return (
            <div
              key={img.id}
              className="group bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-700/60 transition shadow-lg flex flex-col justify-between relative"
            >
              {/* Image Container with HUD */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900 cursor-pointer">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onClick={() => setLightboxImage(img)}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Left Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase shadow-lg backdrop-blur-md flex items-center gap-1 ${
                      isGood
                        ? 'bg-emerald-600/90 text-white'
                        : isBad
                        ? 'bg-red-600/90 text-white'
                        : isSatellite
                        ? 'bg-indigo-600/90 text-white'
                        : 'bg-cyan-600/90 text-white'
                    }`}
                  >
                    {isDrone && <Plane className="w-3 h-3" />}
                    {isSatellite && <Satellite className="w-3 h-3" />}
                    {isGood && <ShieldCheck className="w-3 h-3" />}
                    {isBad && <AlertTriangle className="w-3 h-3" />}
                    <span>
                      {isGood
                        ? 'Structural Good'
                        : isBad
                        ? 'Defect / Seepage'
                        : isSatellite
                        ? 'Satellite Radar'
                        : 'Drone UAV Scan'}
                    </span>
                  </span>
                </div>

                {/* Top Right: Fullscreen Action */}
                <button
                  onClick={() => setLightboxImage(img)}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-900/80 text-slate-300 hover:text-white hover:bg-cyan-600 transition shadow backdrop-blur-sm"
                  title="Open Fullscreen Lightbox & Telemetry"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* INTERACTIVE AVIONICS HUD OVERLAY */}
                {showHud && (
                  <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between text-cyan-300 font-mono text-[9px]">
                    {/* Reticle / Artificial Horizon Crosshair in Center */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-12 h-12 border border-cyan-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div className="absolute w-24 h-px bg-cyan-400/60"></div>
                      <div className="absolute h-24 w-px bg-cyan-400/60"></div>
                    </div>

                    {/* Top Right Instrument Telemetry */}
                    <div className="flex justify-end pt-8">
                      <div className="bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded border border-cyan-500/30 text-right space-y-0.5">
                        {isDrone && (
                          <>
                            <div className="text-white font-bold">{img.droneModelOrSatellite || 'DJI Matrice 300 RTK'}</div>
                            <div>ALT: <span className="text-white font-bold">{img.flightAltitudeMeters || 115}m AGL</span></div>
                            <div>GSD: <span className="text-white">{img.groundSamplingDistanceCm || 2.1} cm/px</span></div>
                            <div>GIMBAL: <span className="text-white">{img.gimbalPitchDegrees || -90}°</span></div>
                          </>
                        )}
                        {isSatellite && (
                          <>
                            <div className="text-white font-bold">{img.droneModelOrSatellite || 'ISRO Cartosat-3'}</div>
                            <div>RES: <span className="text-white font-bold">{img.resolutionOrAltitude || '10m'}</span></div>
                            <div>BAND: <span className="text-white">{img.spectralBand || 'NDWI / NIR'}</span></div>
                            <div>CLOUD: <span className="text-white">{img.cloudCoverPercent || 0.1}%</span></div>
                          </>
                        )}
                        {(isGood || isBad) && (
                          <>
                            <div className="text-white font-bold">{img.resolutionOrAltitude || '4K Optical Sensor'}</div>
                            <div>FIELD CODE: <span className="text-white">{img.orbitOrFlightCode || 'INSP-DOC'}</span></div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Bottom HUD: Coordinates & Location */}
                    <div className="flex items-end justify-between">
                      <div className="bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded border border-cyan-500/30 space-y-0.5">
                        <div className="flex items-center gap-1 text-white">
                          <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                          <span>{dam.name}</span>
                        </div>
                        <div className="text-cyan-400">
                          {img.latitude?.toFixed(5)}°N, {img.longitude?.toFixed(5)}°E
                        </div>
                      </div>

                      <div className="bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded border border-cyan-500/30 text-right">
                        <div className="text-[8px] text-slate-400">MISSION CODE</div>
                        <div className="text-white font-bold">{img.orbitOrFlightCode || 'UAV-SURVEY'}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text & Metadata Details */}
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                      {img.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-3">
                    {img.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Acquisition Date:</span>
                    <span className="text-slate-200">{img.date}</span>
                  </div>

                  {img.sensorPayload && (
                    <div className="flex justify-between text-slate-400">
                      <span>Sensor:</span>
                      <span className="text-cyan-300 truncate max-w-[170px]">{img.sensorPayload}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setLightboxImage(img)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Full Telemetry & Zoom</span>
                    </button>

                    {img.latitude && img.longitude && (
                      <a
                        href={`https://www.google.com/maps?q=${img.latitude},${img.longitude}&t=k`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-slate-400 hover:text-white flex items-center gap-0.5"
                        title="View Location on Google Earth"
                      >
                        <span>Satellite Map</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN LIGHTBOX & TELEMETRY INSPECTOR MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col">
          {/* Lightbox Header Bar */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${
                  lightboxImage.type === 'drone'
                    ? 'bg-cyan-600 text-white'
                    : lightboxImage.type === 'satellite'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {lightboxImage.type.toUpperCase()}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">{lightboxImage.title}</h3>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>{dam.name} &bull; {dam.river} River, {dam.district}, {dam.state}</span>
                  {lightboxImage.latitude && (
                    <span className="font-mono text-cyan-400">
                      ({lightboxImage.latitude.toFixed(5)}°N, {lightboxImage.longitude?.toFixed(5)}°E)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700"
                title="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Image Viewer Stage */}
            <div className="flex-1 bg-black overflow-auto flex items-center justify-center p-4 relative">
              <div 
                className="transition-transform duration-200 cursor-grab active:cursor-grabbing"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Side Telemetry Drawer */}
            <div className="w-full lg:w-96 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 p-5 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Mission Intelligence Dossier</h4>
                <h3 className="text-base font-bold text-white mt-1">{lightboxImage.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{lightboxImage.caption}</p>
              </div>

              {/* Sensor & Flight Parameters */}
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Technical Specifications</div>
                
                <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                  <span className="text-slate-400">Platform / Vehicle:</span>
                  <span className="text-white font-bold">{lightboxImage.droneModelOrSatellite || 'Aerial UAV System'}</span>
                </div>

                {lightboxImage.flightAltitudeMeters && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400">Flight Altitude:</span>
                    <span className="text-cyan-300 font-bold">{lightboxImage.flightAltitudeMeters} meters AGL</span>
                  </div>
                )}

                {lightboxImage.flightSpeedMps && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400">Ground Speed:</span>
                    <span className="text-white">{lightboxImage.flightSpeedMps} m/s</span>
                  </div>
                )}

                {lightboxImage.groundSamplingDistanceCm && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400">Ground Sample Dist (GSD):</span>
                    <span className="text-emerald-400 font-bold">{lightboxImage.groundSamplingDistanceCm} cm / pixel</span>
                  </div>
                )}

                {lightboxImage.sensorPayload && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400">Sensor Payload:</span>
                    <span className="text-indigo-300">{lightboxImage.sensorPayload}</span>
                  </div>
                )}

                {lightboxImage.spectralBand && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400">Spectral Band:</span>
                    <span className="text-amber-300">{lightboxImage.spectralBand}</span>
                  </div>
                )}

                <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                  <span className="text-slate-400">Mission / Orbit Code:</span>
                  <span className="text-cyan-400">{lightboxImage.orbitOrFlightCode || 'UAV-FLIGHT'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Acquisition Date:</span>
                  <span className="text-white">{lightboxImage.date}</span>
                </div>
              </div>

              {/* Exact Coordinates */}
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2 text-xs">
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider font-mono">Geospatial Target</div>
                <div className="text-slate-300 font-mono">
                  Latitude: <span className="text-cyan-300">{lightboxImage.latitude?.toFixed(6)}° N</span><br />
                  Longitude: <span className="text-cyan-300">{lightboxImage.longitude?.toFixed(6)}° E</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  River Basin: {dam.river} River, {dam.basin}<br />
                  District: {dam.district}, {dam.state}
                </div>

                {lightboxImage.latitude && lightboxImage.longitude && (
                  <a
                    href={`https://www.google.com/maps?q=${lightboxImage.latitude},${lightboxImage.longitude}&t=k`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full py-2 px-3 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Earth / Satellite</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
