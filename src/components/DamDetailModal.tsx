import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, Waves, AlertTriangle, ShieldCheck, Activity, Eye, 
  Droplets, CloudRain, Mountain, Radio, ArrowUpRight, 
  Compass, Camera, Satellite, Gauge, Clock, ShieldAlert,
  Send, Layers, RefreshCw, Plane, Download, FileText, FileCode,
  CheckCircle2, ChevronDown, Bell, Loader2, Share2
} from 'lucide-react';
import { Dam, DamCondition, EmergencyBroadcast } from '../types';
import { InundationMapCanvas } from './InundationMapCanvas';
import { DamImageryInspector } from './DamImageryInspector';
import { 
  generateDamPdfReport, 
  downloadDamJsonReport, 
  getDamAlertHistory 
} from '../utils/damReportGenerator';
import { shareViaAndroid, triggerHaptic } from '../utils/androidBridge';

interface DamDetailModalProps {
  dam: Dam | null;
  initialTab?: 'inundation' | 'seepage_whirlpool' | 'images' | 'sensors' | 'landslides' | 'rainfall_earthquake' | 'capacity' | 'alerts';
  onClose: () => void;
  onOpenBroadcast: (dam: Dam) => void;
  onTriggerSosForDam: (dam: Dam) => void;
  broadcasts?: EmergencyBroadcast[];
}

export const DamDetailModal: React.FC<DamDetailModalProps> = ({
  dam,
  initialTab = 'inundation',
  onClose,
  onOpenBroadcast,
  onTriggerSosForDam,
  broadcasts = [],
}) => {
  const [activeTab, setActiveTab] = useState<
    'inundation' | 'seepage_whirlpool' | 'images' | 'sensors' | 'landslides' | 'rainfall_earthquake' | 'capacity' | 'alerts'
  >(initialTab);

  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [downloadingFormat, setDownloadingFormat] = useState<'pdf' | 'json' | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, dam?.id]);

  const damAlerts = useMemo(() => {
    if (!dam) return [];
    return getDamAlertHistory(dam, broadcasts);
  }, [dam, broadcasts]);

  const handleDownloadReport = (format: 'pdf' | 'json') => {
    if (!dam) return;
    setDownloadingFormat(format);
    setShowDownloadMenu(false);

    setTimeout(() => {
      try {
        if (format === 'pdf') {
          generateDamPdfReport(dam, broadcasts);
          setDownloadToast(`Summary PDF report for ${dam.name} generated & downloaded!`);
        } else {
          downloadDamJsonReport(dam, broadcasts);
          setDownloadToast(`Full JSON telemetry for ${dam.name} exported & downloaded!`);
        }
      } catch (err) {
        console.error('Error generating report:', err);
        setDownloadToast('Failed to generate report. Please try again.');
      } finally {
        setDownloadingFormat(null);
        setTimeout(() => {
          setDownloadToast(null);
        }, 5000);
      }
    }, 100);
  };

  const handleShareDam = async () => {
    if (!dam) return;
    triggerHaptic('medium');
    const res = await shareViaAndroid({
      title: `${dam.name} Dam Safety Report`,
      text: `Dam Safety Telemetry for ${dam.name} (${dam.river} River, ${dam.state}):\nCondition: ${dam.condition.toUpperCase()}\nWater Volume: ${fillPercent}% (${formatLiters(dam.currentWaterVolumeLiters)})\nPeak Breach Discharge: ${dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s\nDownstream Inundation Reach: ${dam.hydrodynamicBreach.downstreamRiverReachKm} km`,
      url: window.location.href,
    });
    if (res === 'copied') {
      setDownloadToast('Dam summary & parameters copied to clipboard!');
      setTimeout(() => setDownloadToast(null), 3000);
    }
  };

  if (!dam) return null;

  // Format big liters values to human readable
  const formatLiters = (liters: number) => {
    if (liters >= 1000000000000) {
      return `${(liters / 1000000000000).toFixed(2)} Trillion Liters`;
    }
    if (liters >= 1000000000) {
      return `${(liters / 1000000000).toFixed(2)} Billion Liters`;
    }
    return `${(liters / 1000000).toFixed(1)} Million Liters`;
  };

  const fillPercent = Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100);

  const conditionColors: Record<DamCondition, { bg: string; text: string; border: string; label: string }> = {
    good: { bg: 'bg-emerald-900/40', text: 'text-emerald-400', border: 'border-emerald-500/50', label: 'Condition Class I (Good / Safe)' },
    moderate: { bg: 'bg-amber-900/40', text: 'text-amber-400', border: 'border-amber-500/50', label: 'Condition Class II (Moderate / Monitored)' },
    alert: { bg: 'bg-orange-900/40', text: 'text-orange-400', border: 'border-orange-500/50', label: 'Condition Class III (Heightened Alert)' },
    critical: { bg: 'bg-red-900/40', text: 'text-red-400', border: 'border-red-500/50', label: 'Condition Class IV (Critical Deficiencies)' },
  };

  const condStyle = conditionColors[dam.condition];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-slate-100 my-4 sm:my-8 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-slate-800/90 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${condStyle.bg} ${condStyle.text} ${condStyle.border}`}>
                {condStyle.label}
              </span>
              <span className="text-xs text-slate-400">
                {dam.state} &bull; {dam.district} &bull; {dam.basin}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              {dam.name}
            </h2>
            <p className="text-xs text-slate-400">
              Type: <span className="text-slate-200 font-semibold">{dam.damType}</span> | River:{' '}
              <span className="text-cyan-400 font-semibold">{dam.river}</span> | Height:{' '}
              <span className="text-slate-200 font-semibold">{dam.heightMeters} m</span>
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Download Report Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDownloadMenu(prev => !prev)}
                disabled={downloadingFormat !== null}
                className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-950/30 border border-emerald-400/40 transition cursor-pointer disabled:opacity-70"
                title="Download Dam Inspection & Telemetry Report (PDF or JSON)"
              >
                {downloadingFormat ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-200" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                <span>{downloadingFormat ? `Generating ${downloadingFormat.toUpperCase()}...` : 'Download Report'}</span>
                <ChevronDown className="w-3 h-3 opacity-80" />
              </button>

              {/* Download Format Dropdown Menu */}
              {showDownloadMenu && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowDownloadMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-40 space-y-1.5 animate-fadeIn text-left">
                    <div className="px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                      <span>Download Safety Report</span>
                      <span className="text-[10px] text-cyan-400 font-mono">NDSA Format</span>
                    </div>

                    {/* PDF Option */}
                    <button
                      type="button"
                      onClick={() => handleDownloadReport('pdf')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-800/90 transition flex items-start gap-2.5 group cursor-pointer border border-transparent hover:border-slate-700"
                    >
                      <div className="p-2 rounded-lg bg-red-950/80 border border-red-800/70 text-red-400 group-hover:scale-105 transition shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                          <span>Summary PDF Report</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/50 text-red-300 font-mono font-semibold">PDF</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Printable 2-page CWC/NDSA inspection document with sensor stats, elevations & inundation parameters.
                        </p>
                      </div>
                    </button>

                    {/* JSON Option */}
                    <button
                      type="button"
                      onClick={() => handleDownloadReport('json')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-800/90 transition flex items-start gap-2.5 group cursor-pointer border border-transparent hover:border-slate-700"
                    >
                      <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/70 text-cyan-400 group-hover:scale-105 transition shrink-0 mt-0.5">
                        <FileCode className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                          <span>Technical JSON Data</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 font-mono font-semibold">JSON</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Raw structured data with live telemetry, breach zones, historical alerts & risk scores.
                        </p>
                      </div>
                    </button>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={handleShareDam}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              title="Share Dam Data & Status via Android Share Sheet"
            >
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Share</span>
            </button>

            <button
              onClick={() => onOpenBroadcast(dam)}
              className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Broadcast Alert</span>
            </button>

            <button
              onClick={() => onTriggerSosForDam(dam)}
              className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-red-950 border border-red-500 transition animate-pulse cursor-pointer"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>RED SOS</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feedback Download Toast Notification */}
        {downloadToast && (
          <div className="bg-emerald-900/90 border-b border-emerald-600/50 px-4 py-2 flex items-center justify-between text-xs text-emerald-100 animate-fadeIn shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">{downloadToast}</span>
            </div>
            <button
              onClick={() => setDownloadToast(null)}
              className="text-emerald-300 hover:text-white ml-2 text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab Navigation Menu */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 px-4 sm:px-6 overflow-x-auto no-scrollbar gap-2 sm:gap-4 shrink-0 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('inundation')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'inundation' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Waves className="w-4 h-4" />
            <span>Hydrodynamic Inundation</span>
          </button>

          <button
            onClick={() => setActiveTab('seepage_whirlpool')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'seepage_whirlpool' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>Muddy Seepage & Whirlpools</span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'images' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Plane className="w-4 h-4 text-cyan-400" />
            <span>Drone & Satellite Reconnaissance ({dam.images?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('sensors')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'sensors' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>Piezometer, Inclinometer & Seismograph</span>
          </button>

          <button
            onClick={() => setActiveTab('landslides')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'landslides' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Mountain className="w-4 h-4" />
            <span>Landslide Precautions</span>
          </button>

          <button
            onClick={() => setActiveTab('rainfall_earthquake')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'rainfall_earthquake' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <CloudRain className="w-4 h-4" />
            <span>Rainfall & Earthquakes</span>
          </button>

          <button
            onClick={() => setActiveTab('capacity')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'capacity' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Capacity & Overflow</span>
          </button>

          <button
            onClick={() => setActiveTab('alerts')}
            className={`py-3 font-bold border-b-2 flex items-center gap-1.5 whitespace-nowrap transition ${
              activeTab === 'alerts' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Alerts & Logs ({damAlerts.length})</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-slate-900/50">
          
          {/* TAB 1: HYDRODYNAMIC DAM BREAK INUNDATION */}
          {activeTab === 'inundation' && (
            <div className="space-y-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row justify-between gap-3">
                <div>
                  <span className="text-slate-400">Modeled River Reach:</span>
                  <span className="font-bold text-white ml-1">
                    {dam.hydrodynamicBreach.downstreamRiverReachKm} km downstream corridor
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Peak Breach Flow Qp:</span>
                  <span className="font-bold text-red-400 ml-1">
                    {dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Breach Development Time:</span>
                  <span className="font-bold text-white ml-1">
                    {dam.hydrodynamicBreach.breachFormationTimeHours} Hours
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Full Flow Cessation:</span>
                  <span className="font-bold text-emerald-400 ml-1">
                    At T+{dam.hydrodynamicBreach.floodRecessionTimeHours} Hours
                  </span>
                </div>
              </div>

              {/* 2D Canvas */}
              <InundationMapCanvas dam={dam} />
            </div>
          )}

          {/* TAB 2: MUDDY SEEPAGE & WHIRLPOOL RECORDS */}
          {activeTab === 'seepage_whirlpool' && (
            <div className="space-y-6">
              {/* Muddy Seepages */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-amber-400" />
                    Muddy & Discolored Seepages Release Logs & Remedial Pipe Flushing
                  </h3>
                  <span className="text-xs text-slate-400">
                    Inspecting Officer: {dam.inspectingOfficer}
                  </span>
                </div>

                <div className="space-y-3">
                  {dam.seepageRecords.map((sep) => (
                    <div
                      key={sep.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              sep.pipingRiskScore === 'Severe'
                                ? 'bg-red-900/80 text-red-200 border border-red-600'
                                : sep.pipingRiskScore === 'High'
                                ? 'bg-orange-900/80 text-orange-200 border border-orange-600'
                                : 'bg-amber-900/80 text-amber-200 border border-amber-600'
                            }`}
                          >
                            Piping Risk: {sep.pipingRiskScore}
                          </span>
                          <span className="font-bold text-white">{sep.location}</span>
                        </div>
                        <span className="font-mono text-slate-400 text-[11px]">{sep.timestamp}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-[11px]">
                        <div>
                          <span className="text-slate-400">Discharge Flow Rate:</span>
                          <div className="font-mono font-bold text-cyan-400 text-sm">
                            {sep.flowRateLps} L/s
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400">Turbidity:</span>
                          <div className="font-mono font-bold text-amber-400 text-sm">
                            {sep.turbidityNtu} NTU
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400">Pipe Cleaning Status:</span>
                          <div className="font-bold text-emerald-400 text-sm">
                            {sep.pipeStatus}
                          </div>
                        </div>
                      </div>

                      <div className="text-slate-300">
                        <span className="font-semibold text-slate-200">Color & Silt Appearance:</span>{' '}
                        {sep.appearance}
                      </div>

                      <div className="p-2.5 rounded bg-blue-950/40 border border-blue-900/50 text-blue-200 text-[11px]">
                        <span className="font-bold text-blue-300">Action & Cleaning Details:</span>{' '}
                        {sep.cleaningDetails}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Whirlpools */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-cyan-400 animate-spin" />
                    Formation of Whirlpools (Vortices) & Air Core Records
                  </h3>
                </div>

                <div className="space-y-3">
                  {dam.whirlpoolRecords.map((wh) => (
                    <div
                      key={wh.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-cyan-900/80 text-cyan-200 border border-cyan-700">
                            {wh.vortexType}
                          </span>
                          <span className="font-bold text-white">{wh.location}</span>
                        </div>
                        <span className="font-mono text-slate-400 text-[11px]">{wh.timestamp}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-[11px]">
                        <div>
                          <span className="text-slate-400">Reservoir Water Level:</span>
                          <div className="font-mono font-bold text-white text-sm">
                            {wh.reservoirLevelMeters} m
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400">Vortex Core Diameter:</span>
                          <div className="font-mono font-bold text-cyan-400 text-sm">
                            {wh.coreDiameterMeters} m
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400">Rotational Speed:</span>
                          <div className="font-mono font-bold text-amber-400 text-sm">
                            {wh.rotationalSpeedRpm} RPM
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-400">Intake / Trash Rack Hazard:</span>
                          <div
                            className={`font-bold text-sm ${
                              wh.trashRackDangerLevel.includes('Severe')
                                ? 'text-red-400'
                                : wh.trashRackDangerLevel === 'High'
                                ? 'text-orange-400'
                                : wh.trashRackDangerLevel === 'Caution'
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }`}
                          >
                            {wh.trashRackDangerLevel}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                        <span className="font-bold text-slate-200">Intake Action Taken:</span>{' '}
                        {wh.intakeActionTaken}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IMAGERY (GOOD/BAD, SATELLITE & DRONE) */}
          {activeTab === 'images' && (
            <DamImageryInspector dam={dam} />
          )}

          {/* TAB 4: SENSORS TELEMETRY (PIEZOMETER, INCLINOMETER, SEISMOGRAPH) */}
          {activeTab === 'sensors' && (
            <div className="space-y-5">
              <div className="text-xs text-slate-400">
                Real-Time Geotechnical & Structural Telemetry: Normal baseline readings vs current values for
                Pore Pressure (Piezometer), Slope Displacement (Inclinometer), and Ground Motion (Seismograph).
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Piezometer */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-cyan-400" />
                      Piezometer
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        dam.sensors.piezometer.status === 'Critical'
                          ? 'bg-red-900 text-red-200'
                          : dam.sensors.piezometer.status === 'Elevated'
                          ? 'bg-amber-900 text-amber-200'
                          : 'bg-emerald-900 text-emerald-200'
                      }`}
                    >
                      {dam.sensors.piezometer.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-mono font-bold text-cyan-400">
                      {dam.sensors.piezometer.currentHeadMeters} m
                    </div>
                    <div className="text-[11px] text-slate-400">Pore Pressure Head</div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Normal Baseline:</span>
                      <span className="font-mono text-slate-200">{dam.sensors.piezometer.normalBaselineMeters} m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Alert Threshold:</span>
                      <span className="font-mono text-red-400">{dam.sensors.piezometer.thresholdAlertMeters} m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pore Pressure:</span>
                      <span className="font-mono text-slate-200">{dam.sensors.piezometer.porePressureKpa} kPa</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    Station: {dam.sensors.piezometer.stationId} &bull; {dam.sensors.piezometer.unitLocation}
                  </div>
                </div>

                {/* 2. Inclinometer */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-amber-400" />
                      Inclinometer
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        dam.sensors.inclinometer.status === 'Critical'
                          ? 'bg-red-900 text-red-200'
                          : dam.sensors.inclinometer.status === 'Elevated'
                          ? 'bg-amber-900 text-amber-200'
                          : 'bg-emerald-900 text-emerald-200'
                      }`}
                    >
                      {dam.sensors.inclinometer.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-mono font-bold text-amber-400">
                      {dam.sensors.inclinometer.currentDisplacementMm} mm
                    </div>
                    <div className="text-[11px] text-slate-400">Cumulative Slope Displacement</div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Normal Baseline:</span>
                      <span className="font-mono text-slate-200">{dam.sensors.inclinometer.normalBaselineMm} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Alert Threshold:</span>
                      <span className="font-mono text-red-400">{dam.sensors.inclinometer.thresholdAlertMm} mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tilt Rate:</span>
                      <span className="font-mono text-slate-200">{dam.sensors.inclinometer.tiltRateMmPerMonth} mm/month</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    Station: {dam.sensors.inclinometer.stationId} &bull; {dam.sensors.inclinometer.axis}
                  </div>
                </div>

                {/* 3. Seismograph */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      Seismograph
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        dam.sensors.seismograph.status.includes('Alert')
                          ? 'bg-red-900 text-red-200'
                          : dam.sensors.seismograph.status.includes('Tremor')
                          ? 'bg-amber-900 text-amber-200'
                          : 'bg-emerald-900 text-emerald-200'
                      }`}
                    >
                      {dam.sensors.seismograph.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-mono font-bold text-emerald-400">
                      {dam.sensors.seismograph.peakGroundAccelerationG} g
                    </div>
                    <div className="text-[11px] text-slate-400">Measured Peak Ground Accel (PGA)</div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Design Basis (MCE):</span>
                      <span className="font-mono text-slate-200">{dam.sensors.seismograph.designBasisMceG} g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Microtremor Freq:</span>
                      <span className="font-mono text-slate-200">{dam.sensors.seismograph.ambientMicrotremorsHz} Hz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Last Tremor:</span>
                      <span className="font-mono text-slate-300 text-[10px]">{dam.sensors.seismograph.lastTremorDate}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    Station: {dam.sensors.seismograph.stationId}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: LANDSLIDE PREVENTION & PRECAUTIONS */}
          {activeTab === 'landslides' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-amber-400" />
                    Landslide Risk Mitigation & Slope Stabilization Precautions
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Formation: {dam.landslidePrevention.geologicalFormation}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-900/50 text-amber-300 border border-amber-700/50 w-fit">
                  Slope Risk: {dam.landslidePrevention.slopeRiskLevel}
                </span>
              </div>

              {/* Engineering Precaution Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-lg font-mono font-bold text-cyan-400">
                    {dam.landslidePrevention.rockBoltsInstalled.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rock Bolts Installed</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-lg font-mono font-bold text-amber-400">
                    {dam.landslidePrevention.shotcreteAreaSqM.toLocaleString()} m²
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Shotcrete Revetment</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-lg font-mono font-bold text-emerald-400">
                    {dam.landslidePrevention.drainageAditsCount}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Subsurface Drainage Tunnels</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xs font-bold text-purple-300 truncate">
                    {dam.landslidePrevention.biorevetmentMeshType}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Bio-Revetment Matrix</div>
                </div>
              </div>

              {/* Action Precautions List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Precautions & Preventive Defenses Implemented:
                </h4>
                {dam.landslidePrevention.precautionsTaken.map((prec, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-white text-sm flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        {prec.title}
                      </div>
                      <p className="text-slate-400 leading-relaxed">{prec.description}</p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {prec.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: RAINFALL & EARTHQUAKE RECORDS */}
          {activeTab === 'rainfall_earthquake' && (
            <div className="space-y-6">
              {/* Rainfall */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CloudRain className="w-5 h-5 text-blue-400" />
                  Historical Rainfall Records (Past Years mm)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {dam.rainfallHistory.map((rf) => (
                    <div key={rf.year} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-xs font-bold text-slate-400">{rf.year}</div>
                      <div className="text-xl font-mono font-bold text-cyan-400">
                        {rf.totalAnnualMm} mm
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Peak 24h: <span className="text-white font-semibold">{rf.monsoonPeak24hMm} mm</span>
                      </div>
                      <div className="text-[10px] text-emerald-400">
                        Deviation: {rf.historicalDeviationPercent > 0 ? '+' : ''}{rf.historicalDeviationPercent}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Earthquakes */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  Historical Earthquakes (Past Years Tremors within Catchment)
                </h3>
                <div className="space-y-2.5">
                  {dam.earthquakeHistory.map((eq) => (
                    <div
                      key={eq.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-red-900/60 text-red-300 font-bold text-xs border border-red-700/60">
                            Magnitude {eq.magnitudeRichter} M<sub>w</sub>
                          </span>
                          <span className="font-mono text-slate-400">{eq.date}</span>
                        </div>
                        <div className="text-slate-400">
                          Epicenter: <span className="font-semibold text-white">{eq.epicenterDistanceKm} km away</span> (Depth: {eq.focalDepthKm}km)
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] text-slate-300">
                        <span>Measured PGA on Dam: <strong className="text-cyan-400">{eq.measuredPgaDamG} g</strong></span>
                      </div>

                      <p className="text-slate-400 leading-relaxed pt-1 border-t border-slate-900">
                        <span className="font-semibold text-slate-200">Inspection Summary:</span> {eq.structuralInspectionSummary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CAPACITY & OVERFLOW LIMITS */}
          {activeTab === 'capacity' && (
            <div className="space-y-5">
              <div className="text-xs text-slate-400">
                Hydrological Levels & Water Storage Liters Accounting: Displays the exact level at which the dam can
                overflow, total storage capacity in Liters, and current water volume present.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Liters Capacity */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Total Storage Capacity
                  </span>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">
                      {formatLiters(dam.grossStorageCapacityLiters)}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {dam.grossStorageCapacityLiters.toLocaleString()} Liters
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Current Liters Present:</span>
                      <span className="font-mono font-bold text-emerald-400">
                        {formatLiters(dam.currentWaterVolumeLiters)}
                      </span>
                    </div>
                    {/* Fill Bar */}
                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${fillPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Live Storage Volume</span>
                      <span className="font-bold text-white">{fillPercent}% Full</span>
                    </div>
                  </div>
                </div>

                {/* Overflow Level Meter */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Overflow Threshold & Elevation Limits
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded bg-slate-900">
                      <span className="text-slate-400">Overflow Crest Level:</span>
                      <span className="font-mono font-bold text-red-400">{dam.crestLevelMeters} m MSL</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-900">
                      <span className="text-slate-400">Maximum Water Level (MWL):</span>
                      <span className="font-mono font-bold text-amber-400">{dam.maximumWaterLevelMeters} m MSL</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-900">
                      <span className="text-slate-400">Full Reservoir Level (FRL):</span>
                      <span className="font-mono font-bold text-cyan-400">{dam.fullReservoirLevelMeters} m MSL</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-900 border border-cyan-800/40">
                      <span className="text-slate-300 font-bold">Current Gauge Water Level:</span>
                      <span className="font-mono font-bold text-white">{dam.currentWaterLevelMeters} m MSL</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-slate-900">
                      <span className="text-slate-400">Freeboard Margin to Overflow:</span>
                      <span className="font-mono font-bold text-emerald-400">
                        +{(dam.crestLevelMeters - dam.currentWaterLevelMeters).toFixed(2)} m Freeboard
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: ALERTS & INCIDENT HISTORY */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              {/* Report Export Quick Banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-900/80 text-emerald-300 border border-emerald-600/40">
                      OFFICIAL DOCUMENTATION
                    </span>
                    <span className="text-xs text-slate-400">
                      CWC & National Dam Safety Authority Act 2021
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    Download Complete Dam Safety & Telemetry Report
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xl">
                    Generate an instant summary report of {dam.name}&apos;s current condition status, sensor telemetry (piezometer, inclinometer, seismograph), hydraulic limits, and recent alert logs.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => handleDownloadReport('pdf')}
                    disabled={downloadingFormat !== null}
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer disabled:opacity-70"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download PDF Report</span>
                  </button>

                  <button
                    onClick={() => handleDownloadReport('json')}
                    disabled={downloadingFormat !== null}
                    className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold flex items-center gap-1.5 border border-cyan-800/50 transition cursor-pointer disabled:opacity-70"
                  >
                    <FileCode className="w-4 h-4" />
                    <span>Download JSON Data</span>
                  </button>
                </div>
              </div>

              {/* Status Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Active Condition</span>
                  <div className={`text-sm font-bold ${condStyle.text}`}>{condStyle.label}</div>
                  <div className="text-[11px] text-slate-400">Inspecting Officer: {dam.inspectingOfficer}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Telemetry Sensor State</span>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${dam.sensors.piezometer.status === 'Normal' ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                    <span>Piezometer: {dam.sensors.piezometer.status}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Pore Pressure: {dam.sensors.piezometer.porePressureKpa} kPa</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Recent Alerts Dispatched</span>
                  <div className="text-sm font-bold text-amber-400">{damAlerts.length} Recorded Alerts</div>
                  <div className="text-[11px] text-slate-400">Last Inspection: {dam.lastInspectionDate}</div>
                </div>
              </div>

              {/* Alerts Log List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    Recent Broadcast & Incident Advisory History
                  </h4>
                  <button
                    onClick={() => onOpenBroadcast(dam)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>Broadcast New Advisory</span>
                  </button>
                </div>

                {damAlerts.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400 bg-slate-950 rounded-xl border border-slate-800">
                    No active emergency alerts recorded for {dam.name}.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {damAlerts.map((alert) => {
                      const isHighPriority = alert.priority === 'Emergency' || alert.priority === 'Critical';
                      return (
                        <div
                          key={alert.id}
                          className={`p-4 rounded-xl border text-xs space-y-2.5 transition ${
                            isHighPriority
                              ? 'bg-red-950/20 border-red-800/50 shadow-sm shadow-red-950/40'
                              : 'bg-slate-950 border-slate-800'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                  alert.priority === 'Emergency'
                                    ? 'bg-red-600 text-white'
                                    : alert.priority === 'Critical'
                                    ? 'bg-rose-700 text-white'
                                    : alert.priority === 'Urgent'
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-blue-600 text-white'
                                }`}
                              >
                                {alert.priority}
                              </span>
                              <span className="font-bold text-sm text-slate-100">
                                {alert.title}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {alert.timestamp}
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed">
                            {alert.messageBody}
                          </p>

                          {alert.inspectionParametersSummary && (
                            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                              <span className="text-slate-400">Parameters: </span>
                              {alert.inspectionParametersSummary}
                            </div>
                          )}

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-[11px]">
                            <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
                              <span>Recipients:</span>
                              {alert.targetAudience.map((aud, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]"
                                >
                                  {aud}
                                </span>
                              ))}
                            </div>
                            <span className="font-medium text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {alert.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <span>National Register of Large Dams ID: <span className="font-mono text-white">{dam.id}</span></span>
            <span>&bull;</span>
            <span className="text-slate-300">{dam.state}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleDownloadReport('pdf')}
              disabled={downloadingFormat !== null}
              className="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-semibold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
              title="Download PDF Safety Report"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF Report</span>
            </button>
            <button
              onClick={() => handleDownloadReport('json')}
              disabled={downloadingFormat !== null}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
              title="Download JSON Telemetry"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>JSON Telemetry</span>
            </button>
            <button
              onClick={() => onOpenBroadcast(dam)}
              className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
            >
              Broadcast Alert
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
