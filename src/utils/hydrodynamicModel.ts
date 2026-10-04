import { HydrodynamicBreachModel, AffectedZone } from '../types';

/**
 * Hydrodynamic calculations for dam break breach and flood wave propagation
 * Based on Froehlich / MacDonald-Langridge breach mechanics and 1D/2D St. Venant shallow water wave routing.
 */

export interface SimulationStepResult {
  elapsedHours: number;
  breachProgressionPercent: number;
  currentDischargeCumecs: number;
  waveFrontDistanceKm: number;
  inundatedZoneIds: string[];
  maxWaveDepthMeters: number;
  flowState: 'Breaching' | 'Peak Wave Propagating' | 'Downstream Inundating' | 'Receding' | 'Flow Cessation (Safe)';
}

export function computeHydrodynamicStep(
  model: HydrodynamicBreachModel,
  elapsedHours: number
): SimulationStepResult {
  const { breachFormationTimeHours, peakBreachDischargeCumecs, totalFloodDurationHours, floodRecessionTimeHours, affectedZones } = model;

  let currentDischarge = 0;
  let progression = 0;
  let flowState: SimulationStepResult['flowState'] = 'Breaching';

  if (elapsedHours <= 0) {
    currentDischarge = 0;
    progression = 0;
    flowState = 'Breaching';
  } else if (elapsedHours <= breachFormationTimeHours) {
    progression = Math.min(100, (elapsedHours / breachFormationTimeHours) * 100);
    // Hydrodynamic ascending hydrograph limb: Q(t) = Qp * (t / tf)^1.8
    currentDischarge = peakBreachDischargeCumecs * Math.pow(elapsedHours / breachFormationTimeHours, 1.8);
    flowState = 'Breaching';
  } else if (elapsedHours <= breachFormationTimeHours * 1.5) {
    progression = 100;
    currentDischarge = peakBreachDischargeCumecs;
    flowState = 'Peak Wave Propagating';
  } else if (elapsedHours < totalFloodDurationHours) {
    progression = 100;
    // Exponential recession limb of dam-break wave
    const recedeTime = elapsedHours - breachFormationTimeHours * 1.5;
    const decayConst = 2.5 / (totalFloodDurationHours - breachFormationTimeHours);
    currentDischarge = Math.max(
      peakBreachDischargeCumecs * 0.05,
      peakBreachDischargeCumecs * Math.exp(-decayConst * recedeTime)
    );
    flowState = 'Downstream Inundating';
  } else if (elapsedHours < floodRecessionTimeHours) {
    progression = 100;
    currentDischarge = peakBreachDischargeCumecs * 0.03 * (1 - (elapsedHours - totalFloodDurationHours) / (floodRecessionTimeHours - totalFloodDurationHours));
    flowState = 'Receding';
  } else {
    progression = 100;
    currentDischarge = 0;
    flowState = 'Flow Cessation (Safe)';
  }

  // Wave speed c = sqrt(g * h) + v (~6 - 12 m/s avg in river channel)
  // Distance km = time in hours * avg speed (km/h)
  const avgWaveSpeedKmh = 22; // ~6.1 m/s
  const waveFrontDistanceKm = Math.min(model.downstreamRiverReachKm, elapsedHours * avgWaveSpeedKmh);

  const inundatedZoneIds: string[] = affectedZones
    .filter(zone => (zone.waveArrivalTimeMinutes / 60) <= elapsedHours)
    .map(z => z.id);

  const maxWaveDepthMeters = flowState === 'Flow Cessation (Safe)'
    ? 0
    : Math.max(0.5, (currentDischarge / peakBreachDischargeCumecs) * (affectedZones[0]?.peakFloodDepthMeters || 12));

  return {
    elapsedHours,
    breachProgressionPercent: Math.round(progression),
    currentDischargeCumecs: Math.round(currentDischarge),
    waveFrontDistanceKm: parseFloat(waveFrontDistanceKm.toFixed(1)),
    inundatedZoneIds,
    maxWaveDepthMeters: parseFloat(maxWaveDepthMeters.toFixed(1)),
    flowState,
  };
}
