export type DamCondition = 'good' | 'moderate' | 'alert' | 'critical';

export interface SeepageRecord {
  id: string;
  timestamp: string;
  location: string;
  flowRateLps: number; // liters per second
  turbidityNtu: number; // Nephelometric Turbidity Units
  appearance: string; // e.g. "Muddy brown sediment", "Discolored colloidal silt"
  pipingRiskScore: 'Low' | 'Medium' | 'High' | 'Severe';
  pipeStatus: 'Active Discharge' | 'Flushed & Filtered' | 'Sealed with Bentonite' | 'Relief Well Cleared';
  cleaningDetails: string;
}

export interface WhirlpoolRecord {
  id: string;
  timestamp: string;
  reservoirLevelMeters: number;
  location: string; // e.g., "Left Power Tunnel Bellmouth", "Spillway Bay 3 Sluice"
  vortexType: 'Type 1 (Dimple)' | 'Type 2 (Depression)' | 'Type 3 (Dye Core)' | 'Type 4 (Vortex Tube)' | 'Type 5 (Air Bubbles)' | 'Type 6 (Full Air Core)';
  coreDiameterMeters: number;
  rotationalSpeedRpm: number;
  trashRackDangerLevel: 'Normal' | 'Caution' | 'High' | 'Severe Aeration & Cavitation';
  intakeActionTaken: string;
}

export interface SensorTelemetry {
  piezometer: {
    stationId: string;
    currentHeadMeters: number;
    normalBaselineMeters: number;
    thresholdAlertMeters: number;
    porePressureKpa: number;
    status: 'Normal' | 'Elevated' | 'Critical';
    unitLocation: string;
  };
  inclinometer: {
    stationId: string;
    currentDisplacementMm: number;
    normalBaselineMm: number;
    thresholdAlertMm: number;
    tiltRateMmPerMonth: number;
    status: 'Normal' | 'Elevated' | 'Critical';
    axis: string; // e.g., "Downstream Crest Axis A-B"
  };
  seismograph: {
    stationId: string;
    peakGroundAccelerationG: number; // PGA in g (e.g. 0.04g)
    designBasisMceG: number; // Maximum Credible Earthquake design (e.g. 0.36g)
    ambientMicrotremorsHz: number;
    status: 'Normal' | 'Tremor Detected' | 'High Seismic Alert';
    lastTremorDate: string;
  };
}

export interface LandslidePrecaution {
  slopeRiskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  geologicalFormation: string;
  precautionsTaken: {
    title: string;
    description: string;
    status: 'Installed & Active' | 'Regularly Monitored' | 'Reinforced';
    iconName: string;
  }[];
  drainageAditsCount: number;
  rockBoltsInstalled: number;
  shotcreteAreaSqM: number;
  biorevetmentMeshType: string;
}

export interface RainfallRecord {
  year: number;
  totalAnnualMm: number;
  monsoonPeak24hMm: number;
  historicalDeviationPercent: number; // e.g. +14% above normal
}

export interface EarthquakeRecord {
  id: string;
  date: string;
  magnitudeRichter: number;
  epicenterDistanceKm: number;
  focalDepthKm: number;
  measuredPgaDamG: number;
  structuralInspectionSummary: string;
}

export interface AffectedZone {
  id: string;
  name: string;
  distanceDownstreamKm: number;
  waveArrivalTimeMinutes: number;
  peakFloodDepthMeters: number;
  flowVelocityMps: number;
  estimatedPopulation: number;
  evacuationStatus: 'Safe' | 'Evacuate Immediate' | 'High Alert' | 'Relief Camp Ready';
  safeShelterZone: string;
}

export interface HydrodynamicBreachModel {
  breachType: 'Piping Failure' | 'Overtopping' | 'Earthquake-Induced Foundation Slip';
  breachWidthMeters: number;
  breachFormationTimeHours: number;
  peakBreachDischargeCumecs: number; // m3/s
  totalFloodDurationHours: number; // till how long the water will flow
  floodRecessionTimeHours: number; // when water completely recedes to safe bankfull
  totalInundationAreaSqKm: number;
  downstreamRiverReachKm: number;
  affectedZones: AffectedZone[];
  riverName: string;
  crossSectionsCount: number;
}

export interface DamImage {
  id: string;
  title: string;
  type: 'condition_good' | 'condition_bad' | 'satellite' | 'drone';
  url: string;
  caption: string;
  date: string;
  resolutionOrAltitude?: string;
  latitude?: number;
  longitude?: number;
  locationName?: string;
  droneModelOrSatellite?: string;
  flightAltitudeMeters?: number;
  flightSpeedMps?: number;
  gimbalPitchDegrees?: number;
  sensorPayload?: string;
  cloudCoverPercent?: number;
  spectralBand?: string;
  groundSamplingDistanceCm?: number;
  orbitOrFlightCode?: string;
}

export interface Dam {
  id: string;
  name: string;
  state: string;
  district: string;
  river: string;
  basin: string;
  yearCompleted: number;
  damType: string; // e.g., "Concrete Gravity", "Earth-fill & Rock-fill", "Arch Dam"
  heightMeters: number;
  crestLengthMeters: number;
  fullReservoirLevelMeters: number; // FRL
  maximumWaterLevelMeters: number; // MWL
  crestLevelMeters: number; // Overflow point
  currentWaterLevelMeters: number;
  grossStorageCapacityLiters: number; // Total liters capacity
  currentWaterVolumeLiters: number; // Current liters present
  spillwayCapacityCumecs: number;
  condition: DamCondition;
  hazardClass: 'Category 1 (High)' | 'Category 2 (Significant)' | 'Category 3 (Low)';
  lastInspectionDate: string;
  inspectingOfficer: string;
  latitude?: number;
  longitude?: number;
  
  // Detailed subsystems
  seepageRecords: SeepageRecord[];
  whirlpoolRecords: WhirlpoolRecord[];
  sensors: SensorTelemetry;
  landslidePrevention: LandslidePrecaution;
  rainfallHistory: RainfallRecord[];
  earthquakeHistory: EarthquakeRecord[];
  hydrodynamicBreach: HydrodynamicBreachModel;
  images: DamImage[];
}

export interface EmergencyBroadcast {
  id: string;
  damId: string;
  damName: string;
  timestamp: string;
  type: 'condition_alert' | 'sudden_breach' | 'flood_stopped_relief';
  priority: 'Emergency' | 'Critical' | 'Urgent' | 'Info';
  targetAudience: ('Local Residents' | 'Police Department' | 'Government & SDMA' | 'NGOs & Public Services')[];
  title: string;
  messageBody: string;
  inspectionParametersSummary?: string;
  status: 'Dispatched' | 'Delivered' | 'Broadcasting Active';
}
