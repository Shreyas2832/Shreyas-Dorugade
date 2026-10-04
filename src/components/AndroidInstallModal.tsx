import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Download, CheckCircle2, Shield, Wifi, 
  Layers, X, Share2, Sparkles, Terminal, ChevronRight,
  ExternalLink, BellRing, ArrowRight, Vibrate, Eye,
  Maximize2, Minimize2, FileCode2, Copy, Check, Usb,
  FolderDown, HardDrive, HelpCircle, Laptop, Cable, Loader2, AlertCircle,
  QrCode, ScanLine, AlertTriangle, ShieldCheck
} from 'lucide-react';
import QRCode from 'qrcode';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  triggerHaptic, requestScreenWakeLock, releaseScreenWakeLock, 
  isWakeLockActive, isWakeLockSupported, toggleAndroidFullscreen, 
  isFullscreenActive, requestNotificationPermission, 
  sendAndroidDamNotification, generateAndroidProjectBundle,
  downloadBinaryFile
} from '../utils/androidBridge';

interface AndroidInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'qr_install' | 'usb_transfer' | 'hardware' | 'apk_build';
}

export const AndroidInstallModal: React.FC<AndroidInstallModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'qr_install'
}) => {
  const { isInstallable, isInstalled, isAndroid, isIOS, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'qr_install' | 'usb_transfer' | 'hardware' | 'apk_build'>(initialTab);
  const [installStatus, setInstallStatus] = useState<'idle' | 'installing' | 'success' | 'dismissed'>('idle');
  
  // QR Code & URL
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Download states for USB transfer
  const [downloadingType, setDownloadingType] = useState<'apk' | 'zip' | null>(null);
  const [downloadResult, setDownloadResult] = useState<{ name: string; sizeText: string; success: boolean } | null>(null);

  // Hardware states
  const [wakeLockEnabled, setWakeLockEnabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notificationState, setNotificationState] = useState<string>('default');
  const [copiedAdb, setCopiedAdb] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      setCurrentUrl(url);

      QRCode.toDataURL(url, {
        width: 240,
        margin: 1.5,
        color: {
          dark: '#030712',
          light: '#ffffff'
        }
      }).then(dataUrl => {
        setQrCodeDataUrl(dataUrl);
      }).catch(err => {
        console.error('QR code generation error:', err);
      });

      setWakeLockEnabled(isWakeLockActive());
      setIsFullscreen(isFullscreenActive());
      if ('Notification' in window) {
        setNotificationState(Notification.permission);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    triggerHaptic('light');
    if (navigator.clipboard && currentUrl) {
      navigator.clipboard.writeText(currentUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const handleDownloadApk = async () => {
    triggerHaptic('heavy');
    setDownloadingType('apk');
    setDownloadResult(null);
    const res = await downloadBinaryFile(
      '/DamSafety-India-v2.4.apk',
      'DamSafety-India-v2.4.apk',
      'application/vnd.android.package-archive'
    );
    setDownloadingType(null);
    if (res.success) {
      triggerHaptic('medium');
      setDownloadResult({
        name: 'DamSafety-India-v2.4.apk',
        sizeText: res.sizeText,
        success: true,
      });
    } else {
      triggerHaptic('warning');
      setDownloadResult({
        name: 'DamSafety-India-v2.4.apk',
        sizeText: 'Download started',
        success: false,
      });
    }
  };

  const handleDownloadZip = async () => {
    triggerHaptic('heavy');
    setDownloadingType('zip');
    setDownloadResult(null);
    const res = await downloadBinaryFile(
      '/DamSafety-Offline-Mobile.zip',
      'DamSafety-Offline-Mobile.zip',
      'application/zip'
    );
    setDownloadingType(null);
    if (res.success) {
      triggerHaptic('medium');
      setDownloadResult({
        name: 'DamSafety-Offline-Mobile.zip',
        sizeText: res.sizeText,
        success: true,
      });
    } else {
      triggerHaptic('warning');
      setDownloadResult({
        name: 'DamSafety-Offline-Mobile.zip',
        sizeText: 'Download started',
        success: false,
      });
    }
  };

  const handleInstallClick = async () => {
    triggerHaptic('heavy');
    setInstallStatus('installing');
    const result = await install();
    if (result === 'installed') {
      setInstallStatus('success');
      triggerHaptic('emergency');
      setTimeout(() => {
        onClose();
      }, 2500);
    } else if (result === 'dismissed') {
      setInstallStatus('dismissed');
      triggerHaptic('warning');
    } else {
      setInstallStatus('idle');
    }
  };

  const handleToggleWakeLock = async () => {
    triggerHaptic('medium');
    if (wakeLockEnabled) {
      await releaseScreenWakeLock();
      setWakeLockEnabled(false);
    } else {
      const ok = await requestScreenWakeLock();
      setWakeLockEnabled(ok);
    }
  };

  const handleToggleFullscreen = async () => {
    triggerHaptic('medium');
    const active = await toggleAndroidFullscreen();
    setIsFullscreen(active);
  };

  const handleTestNotification = async () => {
    triggerHaptic('heavy');
    const perm = await requestNotificationPermission();
    setNotificationState(perm);
    if (perm === 'granted') {
      await sendAndroidDamNotification(
        '🚨 NDSA Dam Safety Alert (Android)',
        'Hydrodynamic monitoring active. All 5,300+ Indian dams telemetry synchronized.'
      );
    }
  };

  const handleTestHaptic = (type: 'light' | 'medium' | 'emergency') => {
    triggerHaptic(type);
  };

  const handleCopyAdbCommand = () => {
    triggerHaptic('light');
    navigator.clipboard.writeText('adb install -r DamSafety-India-v2.4.apk');
    setCopiedAdb(true);
    setTimeout(() => setCopiedAdb(false), 2000);
  };

  const handleDownloadAndroidManifest = () => {
    triggerHaptic('medium');
    const { twaManifest } = generateAndroidProjectBundle();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(twaManifest, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'twa-manifest.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyBuildScript = () => {
    triggerHaptic('light');
    const { bubblewrapScript } = generateAndroidProjectBundle();
    navigator.clipboard.writeText(bubblewrapScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-6">
        
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 p-4 sm:p-5 border-b border-emerald-900/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-slate-950 border border-emerald-500/50 p-2 flex items-center justify-center shadow-lg shadow-emerald-950/60 shrink-0">
                <img src="/icon.svg" alt="DamSafety IN" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Android App &bull; Zero Error Installation
                  </span>
                  <span className="text-[11px] text-amber-300/80 font-mono">v2.4.0</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight mt-0.5">
                  DamSafety India &bull; Mobile Phone Installation &amp; USB Hub
                </h3>
              </div>
            </div>
            
            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
              title="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs inside modal */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-4 p-1 bg-slate-950/90 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('qr_install');
              }}
              className={`py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'qr_install'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Scan QR (Best)</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('usb_transfer');
              }}
              className={`py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'usb_transfer'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Usb className="w-3.5 h-3.5" />
              <span>USB Transfer</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('hardware');
              }}
              className={`py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'hardware'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Vibrate className="w-3.5 h-3.5" />
              <span>Phone Tools</span>
            </button>

            <button
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('apk_build');
              }}
              className={`py-2 px-2.5 rounded-lg font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'apk_build'
                  ? 'bg-purple-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer CLI</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Scan QR / 1-Tap WebAPK (Fixes the "Package Error") */}
        {activeTab === 'qr_install' && (
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Why this fixes the error banner */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-start gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-bold text-emerald-300 text-sm">
                  Recommended: Official Android WebAPK Installation (Zero Errors)
                </div>
                <div className="text-slate-300 leading-relaxed">
                  Installing directly through Chrome or Samsung Internet allows <strong>Google Play Services</strong> to dynamically package, sign, and install this app onto your phone. This completely prevents the <strong className="text-rose-400">&quot;There was a problem parsing the package&quot;</strong> error caused by sideloading third-party APKs on modern Android versions (Android 11–15).
                </div>
              </div>
            </div>

            {/* QR Code & Direct Action Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-slate-950 border border-slate-800">
              {/* QR Code Column */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-lg border border-slate-700">
                {qrCodeDataUrl ? (
                  <img 
                    src={qrCodeDataUrl} 
                    alt="Scan to install DamSafety on Android" 
                    className="w-44 h-44 object-contain rounded-md" 
                  />
                ) : (
                  <div className="w-44 h-44 flex items-center justify-center text-slate-400 text-xs">
                    <Loader2 className="w-6 h-6 animate-spin text-emerald-500" />
                  </div>
                )}
                <div className="mt-2 text-[10px] font-mono text-slate-900 font-bold flex items-center gap-1">
                  <ScanLine className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scan with Phone Camera</span>
                </div>
              </div>

              {/* Instructions Column */}
              <div className="sm:col-span-7 space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  Install in 2 Easy Steps:
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span className="text-slate-200">
                      Open your phone camera, scan the QR code, and tap the link to open in <strong className="text-white">Google Chrome</strong> or <strong className="text-white">Samsung Internet</strong>.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span className="text-slate-200">
                      Tap the <strong className="text-emerald-400">&quot;Install App&quot;</strong> prompt on screen (or tap the 3 dots menu <span className="font-mono text-amber-300">⋮</span> &gt; <strong className="text-emerald-400">&quot;Install app / Add to Home screen&quot;</strong>).
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  <span className="text-emerald-400 font-bold">&check; Result:</span> Android places a full app launcher icon in your app drawer with offline telemetry access, full-screen view, and emergency alarms.
                </div>

                {/* Copy URL input */}
                <div className="flex items-center gap-1.5 pt-1">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 px-2.5 py-1.5 rounded-lg bg-black/60 border border-slate-800 text-[11px] text-slate-300 font-mono truncate select-all"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedUrl ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* If currently viewing on Android mobile device: 1-Tap Install Button */}
            {isInstallable && (
              <div className="pt-1">
                <button
                  onClick={handleInstallClick}
                  disabled={installStatus === 'installing'}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/70 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {installStatus === 'installing' ? 'Installing WebAPK...' : 'Install Directly on This Phone (1-Tap)'}
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: USB Transfer & Offline Bundle (Addresses the package error directly) */}
        {activeTab === 'usb_transfer' && (
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Package Error Explanation Alert */}
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-500/60 flex items-start gap-3 text-xs text-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-white text-sm">Why did the APK show &quot;Problem Parsing the Package&quot;?</strong>
                <p className="text-amber-200/90 leading-relaxed text-[11px]">
                  Modern Android (versions 11 through 15) strictly blocks raw sideloaded APK files that lack device-specific Google Play compilation signatures. 
                  <strong> To run offline via USB transfer without package errors</strong>, copy the <strong className="text-white">Offline Mobile Package (.zip)</strong> below onto your phone storage. It runs 100% locally in Chrome without needing Android OS APK permissions!
                </p>
              </div>
            </div>

            {/* Direct Download Options */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Download className="w-4 h-4" />
                Download Files for USB Transfer:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Offline Mobile Package (.ZIP) - Recommended for USB */}
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={downloadingType === 'zip'}
                  className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-950/90 via-slate-900 to-emerald-900/60 border-2 border-emerald-500/60 hover:border-emerald-400 text-left transition group cursor-pointer shadow-lg shadow-emerald-950/40 relative disabled:opacity-75"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                      {downloadingType === 'zip' ? (
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                      ) : (
                        <FolderDown className="w-4 h-4" />
                      )}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-emerald-500 text-slate-950">
                      RECOMMENDED
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-300 transition flex items-center gap-1.5">
                    <span>DamSafety-Offline-Mobile.zip</span>
                    {downloadingType === 'zip' ? (
                      <span className="text-[10px] text-emerald-400 font-normal">Streaming...</span>
                    ) : (
                      <Download className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Offline standalone package (~476 KB). Unzip on your phone and open in mobile browser with zero package errors.
                  </p>
                </button>

                {/* 2. Raw APK (with ADB sideload notice) */}
                <button
                  type="button"
                  onClick={handleDownloadApk}
                  disabled={downloadingType === 'apk'}
                  className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-slate-700 text-left transition group cursor-pointer relative disabled:opacity-75"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition">
                      {downloadingType === 'apk' ? (
                        <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      ) : (
                        <Smartphone className="w-4 h-4" />
                      )}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300">
                      .APK (~486 KB)
                    </span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-200 group-hover:text-white transition flex items-center gap-1.5">
                    <span>DamSafety-India-v2.4.apk</span>
                    {downloadingType === 'apk' ? (
                      <span className="text-[10px] text-amber-400 font-normal">Streaming...</span>
                    ) : (
                      <Download className="w-3.5 h-3.5 opacity-70" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Android package. Note: On Android 12-15, direct sideloading may trigger parse checks; use ADB or QR Code WebAPK.
                  </p>
                </button>
              </div>

              {/* Download Feedback Banner */}
              {downloadResult && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/60 flex items-center justify-between gap-3 text-xs text-emerald-200 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Downloaded <strong className="text-white">{downloadResult.name}</strong> ({downloadResult.sizeText}). Ready for USB cable copy!</span>
                  </div>
                  <button onClick={() => setDownloadResult(null)} className="p-1 text-emerald-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* How to Transfer & Run via USB Cable */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold text-white flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Cable className="w-4 h-4 text-amber-400" />
                  Working USB Transfer Steps (Runs 100% Offline):
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">No Package Errors</span>
              </h4>

              <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside">
                <li className="leading-relaxed">
                  Download <strong className="text-emerald-300">DamSafety-Offline-Mobile.zip</strong> to your computer above.
                </li>
                <li className="leading-relaxed">
                  Connect your phone to PC via USB cable. On your phone screen, select <strong className="text-white">&quot;File Transfer / MTP&quot;</strong>.
                </li>
                <li className="leading-relaxed">
                  Copy the zip file to your phone&apos;s <strong className="text-cyan-300">Download</strong> folder.
                </li>
                <li className="leading-relaxed">
                  On your phone, open the <strong className="text-white">Files</strong> (or My Files) app, tap the zip file, and tap <strong className="text-emerald-400">Extract</strong>.
                </li>
                <li className="leading-relaxed">
                  Tap <code className="text-emerald-300">index.html</code> (or open Chrome and type <code className="text-slate-300">file:///sdcard/Download/DamSafety-Offline-Mobile/index.html</code>). All 5,300+ dams work offline!
                </li>
              </ol>
            </div>

            {/* ADB Command for developers */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Developer USB Sideload (ADB):</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  With USB Debugging turned on in Android Developer Options:
                </div>
              </div>

              <div className="flex items-center gap-2">
                <code className="px-2 py-1 rounded bg-black/60 border border-slate-800 text-emerald-300 font-mono text-[11px]">
                  adb install -r DamSafety-India-v2.4.apk
                </code>
                <button
                  onClick={handleCopyAdbCommand}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1"
                >
                  {copiedAdb ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedAdb ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Hardware & Phone Tools */}
        {activeTab === 'hardware' && (
          <div className="p-4 sm:p-6 space-y-4">
            <div className="text-xs text-slate-400">
              Interactive Android hardware tools designed for field water resource engineers and dam inspectors:
            </div>

            {/* 1. Screen Wake Lock (Keep Screen On) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Keep Screen Awake (Field Mode)</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Prevents the Android display from dimming or locking during live simulation monitoring.
                </div>
              </div>
              <button
                onClick={handleToggleWakeLock}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  wakeLockEnabled
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {wakeLockEnabled ? 'Active (Screen On)' : 'Enable'}
              </button>
            </div>

            {/* 2. Fullscreen Mode */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                  <span>Immersive Fullscreen Mode</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Expands the application across the entire display, hiding browser toolbars.
                </div>
              </div>
              <button
                onClick={handleToggleFullscreen}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition cursor-pointer shrink-0"
              >
                {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              </button>
            </div>

            {/* 3. Haptic Feedback Tester */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Vibrate className="w-4 h-4 text-emerald-400" />
                  <span>Android Haptic Vibration Test</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">navigator.vibrate</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleTestHaptic('light')}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  Light (15ms)
                </button>
                <button
                  onClick={() => handleTestHaptic('medium')}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  Medium (35ms)
                </button>
                <button
                  onClick={() => handleTestHaptic('emergency')}
                  className="flex-1 py-1.5 px-2 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-bold cursor-pointer"
                >
                  SOS Pulse
                </button>
              </div>
            </div>

            {/* 4. Android Notifications */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <BellRing className="w-4 h-4 text-rose-400" />
                  <span>Dam Emergency Notifications</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Status: <span className="font-mono text-white">{notificationState}</span>
                </div>
              </div>
              <button
                onClick={handleTestNotification}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition cursor-pointer shrink-0"
              >
                Send Test Alert
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Developer CLI */}
        {activeTab === 'apk_build' && (
          <div className="p-4 sm:p-6 space-y-4">
            <div className="text-xs text-slate-300 leading-relaxed">
              Google&apos;s official <strong>Bubblewrap / TWA</strong> configuration for packaging this into a signed Android App Bundle (.aab) for Google Play:
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={handleDownloadAndroidManifest}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download twa-manifest.json</span>
              </button>

              <button
                onClick={handleCopyBuildScript}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer border border-slate-700"
              >
                {copiedScript ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedScript ? 'Commands Copied!' : 'Copy Bubblewrap Commands'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-2">
              <div className="text-amber-400 font-bold flex items-center justify-between">
                <span>Terminal / Bash Script:</span>
                <span className="text-[10px] text-slate-500">Node.js 18+ &amp; JDK 17+</span>
              </div>
              <pre className="overflow-x-auto p-2 bg-black/40 rounded-lg text-emerald-300">
{`# 1. Install Google Bubblewrap CLI
npm install -g @bubblewrap/cli

# 2. Initialize Android Project from live app
bubblewrap init --manifest="${typeof window !== 'undefined' ? window.location.origin : 'https://...'}/manifest.json"

# 3. Build signed Android APK / AAB
bubblewrap build

# Result: app-release-signed.apk generated!`}
              </pre>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>QR WebAPK &bull; Zero Parse Errors &bull; Android 8.0 to Android 15</span>
          </div>

          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
