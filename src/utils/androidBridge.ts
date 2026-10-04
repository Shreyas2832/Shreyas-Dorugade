/**
 * Android Native Platform Bridge
 * Provides hardware integration for Android devices:
 * - Haptic feedback (navigator.vibrate)
 * - Screen Wake Lock for field dam monitoring (navigator.wakeLock)
 * - Android Native Web Share (navigator.share)
 * - Android System Notifications (Notification API)
 * - Android Immersive Fullscreen Mode
 * - Android Hardware/Gesture Back Button navigation management
 */

// Vibration / Haptic Feedback Patterns
export type HapticType = 'light' | 'medium' | 'heavy' | 'warning' | 'emergency';

export const triggerHaptic = (type: HapticType = 'light'): boolean => {
  if (typeof window === 'undefined' || !navigator.vibrate) return false;

  try {
    switch (type) {
      case 'light':
        return navigator.vibrate(15);
      case 'medium':
        return navigator.vibrate(35);
      case 'heavy':
        return navigator.vibrate(60);
      case 'warning':
        return navigator.vibrate([40, 60, 40]);
      case 'emergency':
        // SOS rhythm (... --- ...)
        return navigator.vibrate([100, 50, 100, 50, 100, 150, 300, 100, 300, 100, 300, 150, 100, 50, 100, 50, 100]);
      default:
        return navigator.vibrate(20);
    }
  } catch {
    return false;
  }
};

// Screen Wake Lock for field dam engineering
let wakeLockSentinel: any = null;

export const requestScreenWakeLock = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !('wakeLock' in navigator)) return false;

  try {
    wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
    wakeLockSentinel.addEventListener('release', () => {
      wakeLockSentinel = null;
    });
    return true;
  } catch (err) {
    console.warn('Wake Lock request failed:', err);
    return false;
  }
};

export const releaseScreenWakeLock = async (): Promise<boolean> => {
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
      wakeLockSentinel = null;
      return true;
    } catch {
      return false;
    }
  }
  return false;
};

export const isWakeLockActive = (): boolean => {
  return wakeLockSentinel !== null;
};

export const isWakeLockSupported = (): boolean => {
  return typeof window !== 'undefined' && 'wakeLock' in navigator;
};

// Android Native Share API
export const shareViaAndroid = async (data: {
  title: string;
  text: string;
  url?: string;
}): Promise<'shared' | 'copied' | 'failed'> => {
  const shareUrl = data.url || (typeof window !== 'undefined' ? window.location.href : '');

  if (typeof window !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: data.title,
        text: data.text,
        url: shareUrl,
      });
      return 'shared';
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return 'failed';
      }
    }
  }

  // Fallback to Clipboard copy
  try {
    await navigator.clipboard.writeText(`${data.title}\n\n${data.text}\n\n${shareUrl}`);
    return 'copied';
  } catch {
    return 'failed';
  }
};

// Android System Notifications
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }
  try {
    return await Notification.requestPermission();
  } catch {
    return 'denied';
  }
};

export const sendAndroidDamNotification = async (
  title: string,
  body: string,
  tag: string = 'dam-alert'
): Promise<boolean> => {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;

  if (Notification.permission === 'granted') {
    try {
      const notif = new Notification(title, {
        body,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag,
        vibrate: [200, 100, 200],
      } as any);

      notif.onclick = () => {
        window.focus();
        notif.close();
      };
      return true;
    } catch {
      return false;
    }
  }
  return false;
};

// Android Immersive Fullscreen Mode
export const toggleAndroidFullscreen = async (): Promise<boolean> => {
  if (typeof document === 'undefined') return false;

  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return true;
    } else {
      await document.exitFullscreen();
      return false;
    }
  } catch {
    return false;
  }
};

export const isFullscreenActive = (): boolean => {
  return typeof document !== 'undefined' && !!document.fullscreenElement;
};

// Robust Binary File Downloader (prevents 10KB HTML service-worker fallback)
export const downloadBinaryFile = async (
  url: string,
  filename: string,
  mimeType: string = 'application/octet-stream'
): Promise<{ success: boolean; size: number; sizeText: string; error?: string }> => {
  try {
    const fullUrl = `${url}${url.includes('?') ? '&' : '?'}v=${Date.now()}`;
    const response = await fetch(fullUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}: ${response.statusText}`);
    }

    const blob = await response.blob();
    const sizeInBytes = blob.size;
    const sizeInKb = Math.round(sizeInBytes / 1024);

    // Safeguard: Verify it is not an HTML fallback page (~10KB)
    if (sizeInBytes < 30000) {
      const textPreview = await blob.text();
      if (textPreview.includes('<!doctype') || textPreview.includes('<html')) {
        throw new Error(`Received HTML fallback instead of full binary file (${sizeInKb} KB).`);
      }
    }

    const fileBlob = new Blob([blob], { type: mimeType });
    const objectUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    }, 4000);

    return {
      success: true,
      size: sizeInBytes,
      sizeText: `${sizeInKb} KB`,
    };
  } catch (err: any) {
    console.error('Binary download error:', err);
    // Fallback: direct window link
    const fallbackLink = document.createElement('a');
    fallbackLink.href = url;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);

    return {
      success: false,
      size: 0,
      sizeText: 'Unknown',
      error: err.message || 'Download failed',
    };
  }
};

// Generate Android TWA (Trusted Web Activity) / Bubblewrap Project Configuration
export const generateAndroidProjectBundle = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://damsafety-india.gov.in';

  const twaManifest = {
    packageId: 'in.gov.ndsa.damsafety',
    host: typeof window !== 'undefined' ? window.location.host : 'damsafety-india.gov.in',
    name: 'DamSafety India',
    launcherName: 'DamSafety',
    themeColor: '#0C0A09',
    navigationColor: '#0C0A09',
    backgroundColor: '#0C0A09',
    enableNotifications: true,
    startUrl: '/',
    iconUrl: `${origin}/pwa-512x512.png`,
    maskableIconUrl: `${origin}/pwa-maskable-512x512.png`,
    appVersion: '2.4.0',
    appVersionCode: 24,
    shortcuts: [
      { name: 'SOS Alert', shortName: 'SOS', url: '/?action=sos' },
      { name: 'Dam Inventory', shortName: 'Dams', url: '/?action=inventory' },
      { name: 'Drone Recon', shortName: 'Recon', url: '/?action=recon' },
    ],
    features: {
      locationDelegation: { enabled: true },
      playBilling: { enabled: false },
    },
    alphaDependencies: { enabled: false },
  };

  const bubblewrapScript = `# DamSafety India Android APK Compilation Guide
# Build ready-to-publish Android APK / AAB using Google Bubblewrap CLI

# 1. Install Bubblewrap CLI
npm install -g @bubblewrap/cli

# 2. Initialize project with current manifest
bubblewrap init --manifest="${origin}/manifest.json"

# 3. Build signed Android Application (.apk / .aab)
bubblewrap build

# Output: app-release-signed.apk ready to install on any Android phone!
`;

  return { twaManifest, bubblewrapScript };
};
