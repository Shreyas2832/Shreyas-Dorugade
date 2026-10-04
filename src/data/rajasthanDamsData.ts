import { 
  Dam, 
  DamCondition, 
  SeepageRecord, 
  WhirlpoolRecord, 
  SensorTelemetry, 
  LandslidePrecaution, 
  RainfallRecord, 
  EarthquakeRecord, 
  HydrodynamicBreachModel, 
  DamImage 
} from '../types';

export const RAJASTHAN_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'rj-dam-ranapratapsagar',
    name: 'Rana Pratap Sagar Dam',
    state: 'Rajasthan',
    district: 'Chittorgarh',
    river: 'Chambal',
    basin: 'Ganga / Yamuna Basin',
    yearCompleted: 1970,
    damType: 'Masonry & Concrete Gravity',
    heightMeters: 53.8,
    crestLengthMeters: 1143.0,
    fullReservoirLevelMeters: 352.81,
    maximumWaterLevelMeters: 354.18,
    crestLevelMeters: 356.5,
    currentWaterLevelMeters: 350.9,
    grossStorageCapacityLiters: 2898000000000, // 2.90 Trillion Liters (Rajasthan's largest storage)
    currentWaterVolumeLiters: 2510000000000,
    spillwayCapacityCumecs: 18408,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Rajasthan Water Resources Department & CWC Kota Circle'
  },
  {
    id: 'rj-dam-mahibajajsagar',
    name: 'Mahi Bajaj Sagar Dam',
    state: 'Rajasthan',
    district: 'Banswara',
    river: 'Mahi',
    basin: 'Mahi Basin',
    yearCompleted: 1983,
    damType: 'Earthen Dam with Masonry Spillway',
    heightMeters: 74.5,
    crestLengthMeters: 3109.0,
    fullReservoirLevelMeters: 281.5,
    maximumWaterLevelMeters: 282.8,
    crestLevelMeters: 285.0,
    currentWaterLevelMeters: 279.4,
    grossStorageCapacityLiters: 2860000000000, // 2.86 Trillion Liters
    currentWaterVolumeLiters: 2420000000000,
    spillwayCapacityCumecs: 27906,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Rajasthan WRD Mahi Project Division Banswara'
  },
  {
    id: 'rj-dam-bisalpur',
    name: 'Bisalpur Dam',
    state: 'Rajasthan',
    district: 'Tonk',
    river: 'Banas',
    basin: 'Chambal / Banas Basin',
    yearCompleted: 1999,
    damType: 'Concrete Gravity',
    heightMeters: 39.5,
    crestLengthMeters: 574.0,
    fullReservoirLevelMeters: 315.5,
    maximumWaterLevelMeters: 316.0,
    crestLevelMeters: 318.5,
    currentWaterLevelMeters: 314.8,
    grossStorageCapacityLiters: 1095000000000, // 1.095 Trillion Liters (Drinking water lifeline of Jaipur, Ajmer, Tonk)
    currentWaterVolumeLiters: 980000000000,
    spillwayCapacityCumecs: 16180,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'Chief Engineer, Bisalpur Project, WRD Jaipur'
  },
  {
    id: 'rj-dam-jawaharsagar',
    name: 'Jawahar Sagar Dam',
    state: 'Rajasthan',
    district: 'Kota',
    river: 'Chambal',
    basin: 'Chambal Basin',
    yearCompleted: 1972,
    damType: 'Concrete Gravity',
    heightMeters: 45.0,
    crestLengthMeters: 440.0,
    fullReservoirLevelMeters: 295.66,
    maximumWaterLevelMeters: 297.0,
    crestLevelMeters: 299.5,
    currentWaterLevelMeters: 294.2,
    grossStorageCapacityLiters: 671000000000,
    currentWaterVolumeLiters: 580000000000,
    spillwayCapacityCumecs: 25488,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'Rajasthan Rajya Vidyut Utpadan Nigam (RRVUNL) & CWC'
  },
  {
    id: 'rj-dam-kotabarrage',
    name: 'Kota Barrage',
    state: 'Rajasthan',
    district: 'Kota',
    river: 'Chambal',
    basin: 'Chambal Basin',
    yearCompleted: 1960,
    damType: 'Barrage with Earthen Embankment & Radial Sluices',
    heightMeters: 39.0,
    crestLengthMeters: 552.0,
    fullReservoirLevelMeters: 260.3,
    maximumWaterLevelMeters: 261.2,
    crestLevelMeters: 263.0,
    currentWaterLevelMeters: 259.8,
    grossStorageCapacityLiters: 99000000000,
    currentWaterVolumeLiters: 88000000000,
    spillwayCapacityCumecs: 21240,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Chambal Command Area Development (CAD) Kota'
  },
  {
    id: 'rj-dam-jakham',
    name: 'Jakham Dam',
    state: 'Rajasthan',
    district: 'Pratapgarh',
    river: 'Jakham',
    basin: 'Mahi Basin',
    yearCompleted: 1986,
    damType: 'Masonry & Concrete Gravity',
    heightMeters: 81.0, // Highest dam in Rajasthan
    crestLengthMeters: 253.0,
    fullReservoirLevelMeters: 359.5,
    maximumWaterLevelMeters: 360.5,
    crestLevelMeters: 363.0,
    currentWaterLevelMeters: 357.2,
    grossStorageCapacityLiters: 142000000000,
    currentWaterVolumeLiters: 125000000000,
    spillwayCapacityCumecs: 4190,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'Rajasthan WRD Pratapgarh Division'
  },
  {
    id: 'rj-dam-meja',
    name: 'Meja Dam',
    state: 'Rajasthan',
    district: 'Bhilwara',
    river: 'Kothari',
    basin: 'Banas Basin',
    yearCompleted: 1957,
    damType: 'Earthen Dam with Masonry Waste Weir',
    heightMeters: 18.3,
    crestLengthMeters: 3870.0,
    fullReservoirLevelMeters: 96.0,
    maximumWaterLevelMeters: 97.2,
    crestLevelMeters: 99.0,
    currentWaterLevelMeters: 94.6,
    grossStorageCapacityLiters: 83000000000,
    currentWaterVolumeLiters: 71000000000,
    spillwayCapacityCumecs: 3200,
    condition: 'alert',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-04',
    inspectingOfficer: 'Rajasthan WRD Bhilwara Division'
  },
  {
    id: 'rj-dam-somkamlaamba',
    name: 'Som Kamla Amba Dam',
    state: 'Rajasthan',
    district: 'Dungarpur',
    river: 'Som',
    basin: 'Mahi Basin',
    yearCompleted: 1995,
    damType: 'Masonry & Earthen Composite',
    heightMeters: 29.0,
    crestLengthMeters: 3340.0,
    fullReservoirLevelMeters: 213.5,
    maximumWaterLevelMeters: 214.2,
    crestLevelMeters: 216.0,
    currentWaterLevelMeters: 211.8,
    grossStorageCapacityLiters: 172800000000,
    currentWaterVolumeLiters: 154000000000,
    spillwayCapacityCumecs: 8495,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'Rajasthan WRD Dungarpur Irrigation Division'
  }
];

export interface RJDistrictQuota {
  district: string;
  region: 'Hadoti' | 'Mewar' | 'Marwar' | 'Dhundhar' | 'Matsya' | 'Shekhawati' | 'Vagad';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const RAJASTHAN_DISTRICT_QUOTAS: RJDistrictQuota[] = [
  { district: 'Chittorgarh', region: 'Mewar', quota: 18, primaryBasin: 'Chambal / Banas Basin', majorRivers: ['Chambal', 'Gambhiri', 'Orai', 'Bamania'] },
  { district: 'Kota', region: 'Hadoti', quota: 16, primaryBasin: 'Chambal Basin', majorRivers: ['Chambal', 'Alnia', 'Kalisindh', 'Takli'] },
  { district: 'Banswara', region: 'Vagad', quota: 16, primaryBasin: 'Mahi Basin', majorRivers: ['Mahi', 'Anas', 'Haran', 'Erav'] },
  { district: 'Bhilwara', region: 'Mewar', quota: 15, primaryBasin: 'Banas Basin', majorRivers: ['Kothari', 'Khari', 'Mansi', 'Bedach'] },
  { district: 'Udaipur', region: 'Mewar', quota: 14, primaryBasin: 'Banas / Sabarmati Basin', majorRivers: ['Bedach', 'Som', 'Wakal', 'Gomti'] },
  { district: 'Tonk', region: 'Dhundhar', quota: 12, primaryBasin: 'Banas Basin', majorRivers: ['Banas', 'Mashi', 'Bandi', 'Galwa'] },
  { district: 'Dungarpur', region: 'Vagad', quota: 12, primaryBasin: 'Mahi / Sabarmati Basin', majorRivers: ['Som', 'Moran', 'Majham', 'Vatrak'] },
  { district: 'Jhalawar', region: 'Hadoti', quota: 12, primaryBasin: 'Chambal Basin', majorRivers: ['Kalisindh', 'Ahu', 'Parwan', 'Chhapi'] },
  { district: 'Baran', region: 'Hadoti', quota: 12, primaryBasin: 'Chambal Basin', majorRivers: ['Parbati', 'Kunu', 'Kul', 'Bethali'] },
  { district: 'Pratapgarh', region: 'Mewar', quota: 10, primaryBasin: 'Mahi Basin', majorRivers: ['Jakham', 'Siwana', 'Airav'] },
  { district: 'Sirohi', region: 'Marwar', quota: 10, primaryBasin: 'West Banas / Luni Basin', majorRivers: ['West Banas', 'Sukli', 'Jaweshwar', 'Bula'] },
  { district: 'Pali', region: 'Marwar', quota: 10, primaryBasin: 'Luni Basin', majorRivers: ['Jawai', 'Sukri', 'Bandi', 'Mithari'] },
  { district: 'Rajsamand', region: 'Mewar', quota: 10, primaryBasin: 'Banas Basin', majorRivers: ['Banas', 'Khari', 'Chandrabhaga', 'Gomati'] },
  { district: 'Bundi', region: 'Hadoti', quota: 9, primaryBasin: 'Chambal Basin', majorRivers: ['Mej', 'Mangli', 'Ghora Pachhar', 'Chambal'] },
  { district: 'Sawai Madhopur', region: 'Dhundhar', quota: 9, primaryBasin: 'Chambal / Banas Basin', majorRivers: ['Chambal', 'Banas', 'Morel'] },
  { district: 'Karauli', region: 'Matsya', quota: 8, primaryBasin: 'Chambal / Gambhir Basin', majorRivers: ['Gambhir', 'Bhadrawati', 'Atta', 'Bhaisawat'] },
  { district: 'Dholpur', region: 'Matsya', quota: 7, primaryBasin: 'Chambal Basin', majorRivers: ['Chambal', 'Parbati', 'Utangan'] },
  { district: 'Ajmer', region: 'Dhundhar', quota: 7, primaryBasin: 'Luni / Banas Basin', majorRivers: ['Sagarmati', 'Saraswati', 'Dai'] },
  { district: 'Jaipur', region: 'Dhundhar', quota: 7, primaryBasin: 'Banganga / Banas Basin', majorRivers: ['Banganga', 'Dhundh', 'Bandi', 'Mendha'] },
  { district: 'Alwar', region: 'Matsya', quota: 5, primaryBasin: 'Sahibi / Ruparel Basin', majorRivers: ['Ruparel', 'Sahibi', 'Sota'] },
  { district: 'Dausa', region: 'Dhundhar', quota: 5, primaryBasin: 'Banganga / Morel Basin', majorRivers: ['Morel', 'Banganga', 'Sanwan'] },
  { district: 'Nagaur', region: 'Marwar', quota: 2, primaryBasin: 'Luni Basin', majorRivers: ['Luni', 'Jojari'] }
];

// Ensure sum is exactly 211
const initialSumRJ = RAJASTHAN_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumRJ !== 211) {
  const diff = 211 - initialSumRJ;
  RAJASTHAN_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedRajasthanDams: Dam[] | null = null;

const RJ_NAMING_PATTERNS = [
  'Bandh', 'Sagar', 'Jalashay', 'Barrage', 'Medium Irrigation Project',
  'Weir', 'Headworks', 'Feeder Project', 'Tank Scheme', 'Anicut'
];

const RJ_TOPONYMS = [
  'Kumbhalgarh', 'Ranthambore', 'Chittorgarh', 'Mandawa', 'Shekhawati', 'Taragarh',
  'Pushkar', 'Nathdwara', 'Deogarh', 'Ranakpur', 'Mount Abu', 'Amer', 'Jaigarh',
  'Alsisar', 'Gagron', 'Neemrana', 'Sariska', 'Tal Chhapar', 'Keoladeo', 'Mukundara'
];

export function getRajasthan211Dams(): Dam[] {
  if (cachedRajasthanDams) return cachedRajasthanDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  RAJASTHAN_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-rj-${paddedId}`;

      const matchedNotable = RAJASTHAN_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = RJ_TOPONYMS[(globalIdCounter + i * 3) % RJ_TOPONYMS.length];
      const pattern = RJ_NAMING_PATTERNS[(i + globalIdCounter) % RJ_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((18.5 + ((globalIdCounter * 6.7) % 52)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(280 + ((globalIdCounter * 45) % 2400));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((230 + ((globalIdCounter * 8.4) % 180)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.2 + ((globalIdCounter % 4) * 0.3)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.5).toFixed(2));

      // Water level
      const fillRatio = 0.55 + ((globalIdCounter % 38) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.5 + (fillRatio * 3.5)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((50 + ((globalIdCounter * 37) % 750)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.42, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1955 + (globalIdCounter % 68));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Masonry Gravity' :
        globalIdCounter % 4 === 1 ? 'Earthen Dam with Clay Core' :
        globalIdCounter % 4 === 2 ? 'Zoned Embankment with Chute Spillway' : 'Concrete Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 17) % 100;
        if (condHash < 68) cond = 'good';
        else if (condHash < 88) cond = 'moderate';
        else if (condHash < 96) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 36.4 : cond === 'alert' ? 19.5 : cond === 'moderate' ? 7.8 : 1.9;
      const turbidity = cond === 'critical' ? 62 : cond === 'alert' ? 28 : cond === 'moderate' ? 8.2 : 1.6;
      const seepageRecord: SeepageRecord = {
        id: `rj-sep-${paddedId}`,
        timestamp: '2026-08-14 06:10',
        location: `Foundation drainage gallery block 7 and downstream toe in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.25)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.4)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Turbid reddish-brown sediment wash from Aravalli quartzite joint'
          : 'Clear seepage flow, calcium carbonate precipitates normal',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep relief well pneumatic surging, fine sand pack filter cleaning and bentonite sealant check.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `rj-wp-${paddedId}`,
        timestamp: '2026-08-12 11:20',
        reservoirLevelMeters: currentLevel,
        location: `Irrigation sluice intake and canal head regulator in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.4 : cond === 'alert' ? 1.6 : 0.5,
        rotationalSpeedRpm: cond === 'critical' ? 48 : cond === 'alert' ? 24 : 7,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex submerged cross-vanes activated, floating debris barrier repositioned.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-RJ-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.41 + (cond === 'critical' ? 6.1 : cond === 'alert' ? 2.9 : 0.6)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.39).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.47).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.43),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Central gallery pier block ${1 + (globalIdCounter % 12)}`
        },
        inclinometer: {
          stationId: `INC-RJ-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 16.8 : cond === 'alert' ? 8.9 : 1.8).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.0,
          tiltRateMmPerMonth: cond === 'critical' ? 3.1 : 0.35,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Embankment Axis'
        },
        seismograph: {
          stationId: `SM-RJ-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.018 + ((globalIdCounter % 7) * 0.003)).toFixed(3)),
          designBasisMceG: 0.28,
          ambientMicrotremorsHz: 3.4,
          status: 'Normal',
          lastTremorDate: '2026-04-18 (M2.8 Aravalli Horst micro-tremor)'
        }
      };

      // Landslide precautions
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Aravalli Supergroup quartzites, phyllites, Vindhyan sandstones and Erinpura granite',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Sub-horizontal PVC drainage holes drilled at 5° gradient into Aravalli ridge abutment.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Prestressed Rock Anchors',
            description: '100-ton pre-stressed rock bolts pinned into fractured quartzite cliff faces.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          },
          {
            title: 'Catchment Slope InSAR & Prism Geodesy',
            description: 'Continuous satellite radar interferometry monitoring for slow creeping hillside masses.',
            status: 'Installed & Active',
            iconName: 'Activity'
          }
        ],
        drainageAditsCount: 4,
        rockBoltsInstalled: 1850,
        shotcreteAreaSqM: 14000,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 740 + (globalIdCounter % 280), monsoonPeak24hMm: 135, historicalDeviationPercent: 11.2 },
        { year: 2024, totalAnnualMm: 860 + (globalIdCounter % 320), monsoonPeak24hMm: 165, historicalDeviationPercent: 24.5 },
        { year: 2023, totalAnnualMm: 620 + (globalIdCounter % 210), monsoonPeak24hMm: 110, historicalDeviationPercent: -6.4 },
        { year: 2022, totalAnnualMm: 790 + (globalIdCounter % 290), monsoonPeak24hMm: 148, historicalDeviationPercent: 14.8 },
        { year: 2021, totalAnnualMm: 710 + (globalIdCounter % 260), monsoonPeak24hMm: 125, historicalDeviationPercent: 2.1 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `rj-eq-${paddedId}-1`,
          date: '2001-01-26',
          magnitudeRichter: 7.7,
          epicenterDistanceKm: 280 + (globalIdCounter % 220),
          focalDepthKm: 16,
          measuredPgaDamG: 0.052,
          structuralInspectionSummary: 'Bhuj seismic wave attenuation recorded; masonry joints and parapets intact.'
        },
        {
          id: `rj-eq-${paddedId}-2`,
          date: '2023-01-24',
          magnitudeRichter: 3.4,
          epicenterDistanceKm: 42 + (globalIdCounter % 90),
          focalDepthKm: 10,
          measuredPgaDamG: 0.019,
          structuralInspectionSummary: 'Aravalli fault micro-tremor; crest deflection within 0.15mm tolerance.'
        }
      ];

      // Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 125,
        breachFormationTimeHours: 2.5,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.42 + 3900),
        totalFloodDurationHours: 26,
        floodRecessionTimeHours: 44,
        totalInundationAreaSqKm: 295,
        downstreamRiverReachKm: 78,
        riverName: river,
        crossSectionsCount: 34,
        affectedZones: [
          {
            id: `az-rj-${paddedId}-1`,
            name: `${dq.district} Downstream Riparian Settlement`,
            distanceDownstreamKm: 6.8,
            waveArrivalTimeMinutes: 19,
            peakFloodDepthMeters: 7.2,
            flowVelocityMps: 4.6,
            estimatedPopulation: 4200,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ridge Disaster Shelters`
          },
          {
            id: `az-rj-${paddedId}-2`,
            name: `${river} Valley Irrigation Colony`,
            distanceDownstreamKm: 19.5,
            waveArrivalTimeMinutes: 48,
            peakFloodDepthMeters: 4.6,
            flowVelocityMps: 3.1,
            estimatedPopulation: 8600,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Tehsil Complex Elevated Quarters'
          },
          {
            id: `az-rj-${paddedId}-3`,
            name: 'District Canal Crossing Tehsil',
            distanceDownstreamKm: 38.0,
            waveArrivalTimeMinutes: 110,
            peakFloodDepthMeters: 2.8,
            flowVelocityMps: 1.7,
            estimatedPopulation: 14500,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Raised Transit Camp'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `rj-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying stone masonry mortar and radial crest gates in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `rj-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Measuring Flume',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection of downstream toe seepage V-notch weir and sediment collection conduits.`,
          date: '2026-08-05'
        },
        {
          id: `rj-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Multispectral Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Satellite radar flood simulation following the downstream ${river} corridor across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Ground Resolution'
        },
        {
          id: `rj-img-${paddedId}-drone`,
          title: 'UAV High-Definition Orthomosaic Photogrammetry',
          type: 'drone',
          url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
          caption: 'Aerial drone scan inspecting parapet wall and downstream bedrock scour prevention aprons.',
          date: '2026-08-13',
          resolutionOrAltitude: 'Altitude: 95m AGL'
        }
      ];

      const damRecord: Dam = {
        id,
        name: damName,
        state: 'Rajasthan',
        district: dq.district,
        river,
        basin,
        yearCompleted,
        damType,
        heightMeters: parseFloat(height.toFixed(1)),
        crestLengthMeters: Math.round(crestLength),
        fullReservoirLevelMeters: parseFloat(frl.toFixed(2)),
        maximumWaterLevelMeters: parseFloat(mwl.toFixed(2)),
        crestLevelMeters: parseFloat(crest.toFixed(2)),
        currentWaterLevelMeters: parseFloat(currentLevel.toFixed(2)),
        grossStorageCapacityLiters: grossStorageLiters,
        currentWaterVolumeLiters: currentWaterLiters,
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(height * 65 + 1750),
        condition: cond,
        hazardClass: 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-10',
        inspectingOfficer: matchedNotable?.inspectingOfficer || `Rajasthan WRD ${dq.district} Irrigation Division`,
        seepageRecords: [seepageRecord],
        whirlpoolRecords: [whirlpoolRecord],
        sensors: sensorTelemetry,
        landslidePrevention,
        rainfallHistory,
        earthquakeHistory,
        hydrodynamicBreach,
        images
      };

      result.push(damRecord);
      globalIdCounter++;
    }
  });

  cachedRajasthanDams = result;
  return result;
}

export interface RajasthanOverviewStats {
  totalDams: number;
  totalStorageLiters: number;
  goodDams: number;
  moderateDams: number;
  alertDams: number;
  criticalDams: number;
  districtsCount: number;
  regions: Record<string, number>;
  basins: Record<string, number>;
}

export function getRajasthanSummaryStats(): RajasthanOverviewStats {
  const dams = getRajasthan211Dams();
  let totalStorage = 0;
  let good = 0;
  let moderate = 0;
  let alert = 0;
  let critical = 0;
  const regions: Record<string, number> = {};
  const basins: Record<string, number> = {};
  const districtSet = new Set<string>();

  dams.forEach(d => {
    totalStorage += d.grossStorageCapacityLiters;
    districtSet.add(d.district);
    if (d.condition === 'good') good++;
    else if (d.condition === 'moderate') moderate++;
    else if (d.condition === 'alert') alert++;
    else if (d.condition === 'critical') critical++;

    basins[d.basin] = (basins[d.basin] || 0) + 1;
  });

  RAJASTHAN_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 211
    totalStorageLiters: totalStorage,
    goodDams: good,
    moderateDams: moderate,
    alertDams: alert,
    criticalDams: critical,
    districtsCount: districtSet.size,
    regions,
    basins
  };
}
