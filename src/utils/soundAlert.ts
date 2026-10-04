// Web Audio API emergency siren and warning tone generator

let audioCtx: AudioContext | null = null;
let activeOscillator1: OscillatorNode | null = null;
let activeOscillator2: OscillatorNode | null = null;
let activeGain: GainNode | null = null;
let sirenInterval: number | null = null;
let isPlaying = false;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playEmergencySiren(): void {
  try {
    const ctx = getAudioContext();
    stopEmergencySiren(); // ensure single instance

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.connect(ctx.destination);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    osc1.connect(gain);
    osc2.connect(gain);

    osc1.start();
    osc2.start();

    activeOscillator1 = osc1;
    activeOscillator2 = osc2;
    activeGain = gain;
    isPlaying = true;

    // Siren wail between 440Hz and 880Hz
    let high = true;
    const sweep = () => {
      if (!isPlaying || !activeOscillator1 || !activeOscillator2) return;
      const now = ctx.currentTime;
      const targetFreq = high ? 880 : 440;
      activeOscillator1.frequency.setTargetAtTime(targetFreq, now, 0.35);
      activeOscillator2.frequency.setTargetAtTime(targetFreq * 1.01, now, 0.35);
      high = !high;
    };

    sweep();
    sirenInterval = window.setInterval(sweep, 800);
  } catch (err) {
    console.warn('AudioContext failed or blocked by browser policy:', err);
  }
}

export function stopEmergencySiren(): void {
  isPlaying = false;
  if (sirenInterval !== null) {
    clearInterval(sirenInterval);
    sirenInterval = null;
  }
  try {
    if (activeOscillator1) {
      activeOscillator1.stop();
      activeOscillator1.disconnect();
      activeOscillator1 = null;
    }
    if (activeOscillator2) {
      activeOscillator2.stop();
      activeOscillator2.disconnect();
      activeOscillator2 = null;
    }
    if (activeGain) {
      activeGain.disconnect();
      activeGain = null;
    }
  } catch (err) {
    console.warn('Error stopping siren audio:', err);
  }
}

export function playBeepAlert(): void {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch {
    // Ignore audio autoplay restrictions
  }
}
