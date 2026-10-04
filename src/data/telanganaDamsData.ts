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

export const TELANGANA_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'tg-dam-nagarjunasagar',
    name: 'Nagarjuna Sagar Dam',
    state: 'Telangana',
    district: 'Nalgonda',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1967,
    damType: 'Masonry Gravity with Earthen Flanks (Tallest Masonry Dam in the World)',
    heightMeters: 124.0,
    crestLengthMeters: 4865.0,
    fullReservoirLevelMeters: 179.83,
    maximumWaterLevelMeters: 180.5,
    crestLevelMeters: 183.0,
    currentWaterLevelMeters: 177.2,
    grossStorageCapacityLiters: 11472000000000, // 11.47 Trillion Liters (Massive Krishna landmark)
    currentWaterVolumeLiters: 10120000000000,
    spillwayCapacityCumecs: 42475,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'Krishna River Management Board (KRMB) & Telangana I&CAD'
  },
  {
    id: 'tg-dam-srisailam',
    name: 'Srisailam Dam (Left Bank & Forebay)',
    state: 'Telangana',
    district: 'Nagar Kurnool',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1980,
    damType: 'Concrete Gravity',
    heightMeters: 145.1,
    crestLengthMeters: 512.0,
    fullReservoirLevelMeters: 269.75,
    maximumWaterLevelMeters: 271.88,
    crestLevelMeters: 273.5,
    currentWaterLevelMeters: 267.4,
    grossStorageCapacityLiters: 8722000000000, // 8.72 Trillion Liters
    currentWaterVolumeLiters: 7850000000000,
    spillwayCapacityCumecs: 37945,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'TSGENCO Srisailam Left Bank Hydel Station & KRMB'
  },
  {
    id: 'tg-dam-sriramsagar',
    name: 'Sri Ram Sagar Project (SRSP Pochampad)',
    state: 'Telangana',
    district: 'Nizamabad',
    river: 'Godavari',
    basin: 'Godavari Basin',
    yearCompleted: 1977,
    damType: 'Earth-fill Dam with Masonry Spillway',
    heightMeters: 43.0,
    crestLengthMeters: 15600.0,
    fullReservoirLevelMeters: 332.54,
    maximumWaterLevelMeters: 333.15,
    crestLevelMeters: 335.5,
    currentWaterLevelMeters: 330.8,
    grossStorageCapacityLiters: 3170000000000, // 3.17 Trillion Liters
    currentWaterVolumeLiters: 2780000000000,
    spillwayCapacityCumecs: 28317,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Telangana Irrigation & CAD Department SRSP Circle'
  },
  {
    id: 'tg-dam-lowermanair',
    name: 'Lower Manair Dam (LMD)',
    state: 'Telangana',
    district: 'Karimnagar',
    river: 'Manair',
    basin: 'Godavari Basin',
    yearCompleted: 1985,
    damType: 'Composite Earthen & Masonry Spillway',
    heightMeters: 41.0,
    crestLengthMeters: 10471.0,
    fullReservoirLevelMeters: 280.4,
    maximumWaterLevelMeters: 281.5,
    crestLevelMeters: 283.5,
    currentWaterLevelMeters: 279.1,
    grossStorageCapacityLiters: 680000000000,
    currentWaterVolumeLiters: 595000000000,
    spillwayCapacityCumecs: 14158,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'Telangana I&CAD Karimnagar Division'
  },
  {
    id: 'tg-dam-singur',
    name: 'Singur Dam',
    state: 'Telangana',
    district: 'Sangareddy',
    river: 'Manjira',
    basin: 'Godavari Basin',
    yearCompleted: 1989,
    damType: 'Earthen Dam with Concrete Spillway',
    heightMeters: 32.5,
    crestLengthMeters: 4672.0,
    fullReservoirLevelMeters: 523.6,
    maximumWaterLevelMeters: 524.2,
    crestLevelMeters: 526.0,
    currentWaterLevelMeters: 522.1,
    grossStorageCapacityLiters: 847000000000,
    currentWaterVolumeLiters: 740000000000,
    spillwayCapacityCumecs: 23200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-13',
    inspectingOfficer: 'Hyderabad Metropolitan Water Supply & Sewerage Board (HMWSSB)'
  },
  {
    id: 'tg-dam-jurala',
    name: 'Priyadarshini Jurala Project',
    state: 'Telangana',
    district: 'Jogulamba Gadwal',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1995,
    damType: 'Masonry Gravity with Earthen Dykes',
    heightMeters: 40.0,
    crestLengthMeters: 4534.0,
    fullReservoirLevelMeters: 318.51,
    maximumWaterLevelMeters: 319.2,
    crestLevelMeters: 321.0,
    currentWaterLevelMeters: 317.3,
    grossStorageCapacityLiters: 339000000000,
    currentWaterVolumeLiters: 295000000000,
    spillwayCapacityCumecs: 35000,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Telangana I&CAD Jurala Division Gadwal'
  },
  {
    id: 'tg-dam-kaleshwaram-medigadda',
    name: 'Medigadda (Lakshmi) Barrage',
    state: 'Telangana',
    district: 'Jayashankar Bhupalpally',
    river: 'Godavari',
    basin: 'Godavari Basin',
    yearCompleted: 2019,
    damType: 'Radial Gate Reinforced Concrete Barrage',
    heightMeters: 25.0,
    crestLengthMeters: 1632.0,
    fullReservoirLevelMeters: 100.0,
    maximumWaterLevelMeters: 101.5,
    crestLevelMeters: 104.0,
    currentWaterLevelMeters: 96.5,
    grossStorageCapacityLiters: 457000000000,
    currentWaterVolumeLiters: 210000000000,
    spillwayCapacityCumecs: 80000,
    condition: 'alert', // National Dam Safety Authority (NDSA) active investigation on pier settlement
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'National Dam Safety Authority (NDSA) Expert Committee'
  }
];

export interface TGDistrictQuota {
  district: string;
  region: 'Northern Telangana' | 'Central Telangana' | 'Southern Telangana' | 'Eastern Godavari Reach';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const TELANGANA_DISTRICT_QUOTAS: TGDistrictQuota[] = [
  { district: 'Nalgonda', region: 'Southern Telangana', quota: 14, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Musi', 'Dindi', 'Peddavagu'] },
  { district: 'Nagar Kurnool', region: 'Southern Telangana', quota: 12, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Dindi', 'Kalwakurthy Channel'] },
  { district: 'Nizamabad', region: 'Northern Telangana', quota: 12, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Manjira', 'Phulong'] },
  { district: 'Karimnagar', region: 'Northern Telangana', quota: 11, primaryBasin: 'Godavari Basin', majorRivers: ['Manair', 'Godavari', 'Shanigaram'] },
  { district: 'Peddapalli', region: 'Northern Telangana', quota: 10, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Manair', 'Bokkala'] },
  { district: 'Rajanna Sircilla', region: 'Northern Telangana', quota: 9, primaryBasin: 'Godavari Basin', majorRivers: ['Manair', 'Malkapet Vagu', 'Kudali'] },
  { district: 'Bhadradri Kothagudem', region: 'Eastern Godavari Reach', quota: 9, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Kinnerasani', 'Taliperu', 'Murredu'] },
  { district: 'Jayashankar Bhupalpally', region: 'Eastern Godavari Reach', quota: 9, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Manair', 'Challavagu'] },
  { district: 'Mahabubnagar', region: 'Southern Telangana', quota: 9, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Peddavagu', 'Koilsagar Nala'] },
  { district: 'Jogulamba Gadwal', region: 'Southern Telangana', quota: 9, primaryBasin: 'Krishna / Tungabhadra Basin', majorRivers: ['Krishna', 'Tungabhadra', 'Jurala Feeder'] },
  { district: 'Sangareddy', region: 'Central Telangana', quota: 8, primaryBasin: 'Godavari / Manjira Basin', majorRivers: ['Manjira', 'Nallavagu', 'Karanja'] },
  { district: 'Kamareddy', region: 'Northern Telangana', quota: 8, primaryBasin: 'Godavari Basin', majorRivers: ['Manjira', 'Koulas Nala', 'Pocharam Vagu'] },
  { district: 'Nirmal', region: 'Northern Telangana', quota: 8, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Kaddam', 'Swarna'] },
  { district: 'Adilabad', region: 'Northern Telangana', quota: 7, primaryBasin: 'Godavari Basin', majorRivers: ['Penganga', 'Satnala', 'Mathadivagu'] },
  { district: 'Khammam', region: 'Eastern Godavari Reach', quota: 7, primaryBasin: 'Krishna / Godavari Basin', majorRivers: ['Munneru', 'Akeru', 'Palair', 'Wyra'] },
  { district: 'Medak', region: 'Central Telangana', quota: 7, primaryBasin: 'Godavari / Manjira Basin', majorRivers: ['Manjira', 'Haldi', 'Pasupuleru'] },
  { district: 'Mancherial', region: 'Northern Telangana', quota: 6, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Pranahita', 'Rallivagu'] },
  { district: 'Kumuram Bheem Asifabad', region: 'Northern Telangana', quota: 6, primaryBasin: 'Godavari Basin', majorRivers: ['Pranahita', 'Peddavagu', 'Chelimelavagu'] },
  { district: 'Wanaparthy', region: 'Southern Telangana', quota: 5, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Okachetti Vagu', 'Ramanpad'] },
  { district: 'Siddipet', region: 'Central Telangana', quota: 5, primaryBasin: 'Godavari Basin', majorRivers: ['Haldi', 'Kudavelly Vagu', 'Moyathummeda'] },
  { district: 'Warangal', region: 'Central Telangana', quota: 5, primaryBasin: 'Godavari Basin', majorRivers: ['Muneru', 'Akeru', 'Dharmasagar Feeder'] },
  { district: 'Mulugu', region: 'Eastern Godavari Reach', quota: 4, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Laknavaram Vagu', 'Ramappa'] },
  { district: 'Rangareddy', region: 'Central Telangana', quota: 4, primaryBasin: 'Musi / Krishna Basin', majorRivers: ['Musi', 'Esi', 'Kagna'] },
  { district: 'Suryapet', region: 'Southern Telangana', quota: 3, primaryBasin: 'Krishna Basin', majorRivers: ['Musi', 'Bikkeru', 'Krishna'] }
];

// Ensure sum is exactly 180
const initialSumTG = TELANGANA_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumTG !== 180) {
  const diff = 180 - initialSumTG;
  TELANGANA_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedTelanganaDams: Dam[] | null = null;

const TG_NAMING_PATTERNS = [
  'Project', 'Sagar', 'Reservoir', 'Barrage', 'Jalashay',
  'Weir', 'Headworks', 'Lift Irrigation Scheme', 'Cheruvu Dam', 'Anicut'
];

const TG_TOPONYMS = [
  'Kakatiya', 'Golconda', 'Bhongir', 'Warangal', 'Ramappa', 'Kaleshwaram',
  'Bhadrachalam', 'Alampur', 'Kuntala', 'Pochera', 'Medak', 'Dharmapuri',
  'Yadadri', 'Kollapur', 'Chandragiri', 'Deverakonda', 'Domakonda'
];

export function getTelangana180Dams(): Dam[] {
  if (cachedTelanganaDams) return cachedTelanganaDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  TELANGANA_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-tg-${paddedId}`;

      const matchedNotable = TELANGANA_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = TG_TOPONYMS[(globalIdCounter + i * 3) % TG_TOPONYMS.length];
      const pattern = TG_NAMING_PATTERNS[(i + globalIdCounter) % TG_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((20.0 + ((globalIdCounter * 6.4) % 50)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(320 + ((globalIdCounter * 48) % 2500));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((180 + ((globalIdCounter * 8.8) % 240)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.3 + ((globalIdCounter % 4) * 0.35)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.6).toFixed(2));

      // Water level
      const fillRatio = 0.58 + ((globalIdCounter % 36) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.0 + (fillRatio * 3.0)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((55 + ((globalIdCounter * 39) % 800)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.44, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1962 + (globalIdCounter % 62));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Masonry Gravity' :
        globalIdCounter % 4 === 1 ? 'Earthen Dam with Clay Impervious Core' :
        globalIdCounter % 4 === 2 ? 'Composite Masonry Spillway with Earthen Dykes' : 'Concrete Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 13) % 100;
        if (condHash < 68) cond = 'good';
        else if (condHash < 88) cond = 'moderate';
        else if (condHash < 96) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 39.5 : cond === 'alert' ? 22.4 : cond === 'moderate' ? 8.6 : 2.0;
      const turbidity = cond === 'critical' ? 68 : cond === 'alert' ? 32 : cond === 'moderate' ? 9.2 : 1.8;
      const seepageRecord: SeepageRecord = {
        id: `tg-sep-${paddedId}`,
        timestamp: '2026-08-14 06:14',
        location: `Foundation drainage gallery block 9 and downstream earthen dyke toe in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.3)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.45)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Turbid brownish sediment discharge from peninsular gneiss joint'
          : 'Clear seepage flow, below piping trigger threshold',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep relief well pneumatic surging, fine sand pack filter cleaning and bentonite sealant check.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `tg-wp-${paddedId}`,
        timestamp: '2026-08-12 16:20',
        reservoirLevelMeters: currentLevel,
        location: `Main intake sluice and lift pump sump bay in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.6 : cond === 'alert' ? 1.8 : 0.54,
        rotationalSpeedRpm: cond === 'critical' ? 50 : cond === 'alert' ? 25 : 8,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex submerged cross-vanes activated, floating debris barrier repositioned.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-TG-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.42 + (cond === 'critical' ? 6.4 : cond === 'alert' ? 3.1 : 0.7)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.40).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.48).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.45),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Central gallery pier block ${1 + (globalIdCounter % 15)}`
        },
        inclinometer: {
          stationId: `INC-TG-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 17.8 : cond === 'alert' ? 9.4 : 1.9).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.8,
          tiltRateMmPerMonth: cond === 'critical' ? 3.3 : 0.37,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Embankment Axis'
        },
        seismograph: {
          stationId: `SM-TG-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.019 + ((globalIdCounter % 8) * 0.0035)).toFixed(3)),
          designBasisMceG: 0.28,
          ambientMicrotremorsHz: 3.6,
          status: 'Normal',
          lastTremorDate: '2026-06-04 (M2.7 Godavari graben micro-tremor)'
        }
      };

      // Landslide precautions
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Archaean Peninsular Gneissic Complex (PGC), Pakhal shales and Gondwana formations',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Sub-horizontal PVC drainage holes drilled at 5° gradient into granitic abutment.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Prestressed Rock Anchors',
            description: '120-ton pre-stressed rock bolts pinned into fractured granite blocks.',
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
        drainageAditsCount: 5,
        rockBoltsInstalled: 2250,
        shotcreteAreaSqM: 17000,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1050 + (globalIdCounter % 380), monsoonPeak24hMm: 175, historicalDeviationPercent: 14.2 },
        { year: 2024, totalAnnualMm: 1220 + (globalIdCounter % 460), monsoonPeak24hMm: 215, historicalDeviationPercent: 25.8 },
        { year: 2023, totalAnnualMm: 920 + (globalIdCounter % 310), monsoonPeak24hMm: 140, historicalDeviationPercent: -6.8 },
        { year: 2022, totalAnnualMm: 1140 + (globalIdCounter % 410), monsoonPeak24hMm: 190, historicalDeviationPercent: 18.5 },
        { year: 2021, totalAnnualMm: 1010 + (globalIdCounter % 350), monsoonPeak24hMm: 160, historicalDeviationPercent: 5.2 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `tg-eq-${paddedId}-1`,
          date: '1969-04-13',
          magnitudeRichter: 5.7,
          epicenterDistanceKm: 85 + (globalIdCounter % 150),
          focalDepthKm: 20,
          measuredPgaDamG: 0.058,
          structuralInspectionSummary: 'Bhadrachalam earthquake propagation; masonry foundation joints verified solid.'
        },
        {
          id: `tg-eq-${paddedId}-2`,
          date: '2023-04-26',
          magnitudeRichter: 3.3,
          epicenterDistanceKm: 40 + (globalIdCounter % 70),
          focalDepthKm: 12,
          measuredPgaDamG: 0.020,
          structuralInspectionSummary: 'Godavari rift micro-tremor; crest deflection within 0.18mm tolerance.'
        }
      ];

      // Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 130,
        breachFormationTimeHours: 2.4,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.43 + 4300),
        totalFloodDurationHours: 27,
        floodRecessionTimeHours: 47,
        totalInundationAreaSqKm: 310,
        downstreamRiverReachKm: 84,
        riverName: river,
        crossSectionsCount: 36,
        affectedZones: [
          {
            id: `az-tg-${paddedId}-1`,
            name: `${dq.district} Downstream Riverine Village`,
            distanceDownstreamKm: 7.0,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.8,
            flowVelocityMps: 5.0,
            estimatedPopulation: 4800,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ground Relief Shelters`
          },
          {
            id: `az-tg-${paddedId}-2`,
            name: `${river} Irrigation Command Habitation`,
            distanceDownstreamKm: 20.5,
            waveArrivalTimeMinutes: 50,
            peakFloodDepthMeters: 5.0,
            flowVelocityMps: 3.3,
            estimatedPopulation: 9200,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Mandal Office Elevated Complex'
          },
          {
            id: `az-tg-${paddedId}-3`,
            name: 'Mandal Agricultural Town',
            distanceDownstreamKm: 41.0,
            waveArrivalTimeMinutes: 115,
            peakFloodDepthMeters: 3.0,
            flowVelocityMps: 1.8,
            estimatedPopulation: 15800,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'Inter-District Highway Bypass Shelter'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `tg-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying stone masonry mortar and radial crest gates in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `tg-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Measuring Flume',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection of downstream toe seepage V-notch weir and sediment collection conduits.`,
          date: '2026-08-05'
        },
        {
          id: `tg-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Multispectral Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Satellite radar flood simulation following the downstream ${river} corridor across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Ground Resolution'
        },
        {
          id: `tg-img-${paddedId}-drone`,
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
        state: 'Telangana',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(height * 67 + 1880),
        condition: cond,
        hazardClass: 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-10',
        inspectingOfficer: matchedNotable?.inspectingOfficer || `Telangana I&CAD ${dq.district} Circle`,
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

  cachedTelanganaDams = result;
  return result;
}

export interface TelanganaOverviewStats {
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

export function getTelanganaSummaryStats(): TelanganaOverviewStats {
  const dams = getTelangana180Dams();
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

  TELANGANA_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 180
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
