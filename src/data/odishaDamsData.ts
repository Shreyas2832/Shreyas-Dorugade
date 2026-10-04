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

export const ODISHA_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'od-dam-hirakud',
    name: 'Hirakud Dam',
    state: 'Odisha',
    district: 'Sambalpur',
    river: 'Mahanadi',
    basin: 'Mahanadi Basin',
    yearCompleted: 1957,
    damType: 'Composite Earthen, Concrete & Masonry (World’s Longest Dam - 25.8 km)',
    heightMeters: 60.96,
    crestLengthMeters: 25790.0, // World's longest dam complex (main section 4.8 km)
    fullReservoirLevelMeters: 192.02,
    maximumWaterLevelMeters: 192.63,
    crestLevelMeters: 195.07,
    currentWaterLevelMeters: 189.6,
    grossStorageCapacityLiters: 5896000000000, // 5.89 Trillion Liters (Odisha's flag landmark)
    currentWaterVolumeLiters: 5120000000000,
    spillwayCapacityCumecs: 42475,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Central Water Commission (CWC) & Odisha DoWR Hirakud Dam Circle'
  },
  {
    id: 'od-dam-rengali',
    name: 'Rengali Dam',
    state: 'Odisha',
    district: 'Angul',
    river: 'Brahmani',
    basin: 'Brahmani Basin',
    yearCompleted: 1985,
    damType: 'Concrete Gravity',
    heightMeters: 70.5,
    crestLengthMeters: 1040.0,
    fullReservoirLevelMeters: 123.5,
    maximumWaterLevelMeters: 125.4,
    crestLevelMeters: 128.0,
    currentWaterLevelMeters: 121.2,
    grossStorageCapacityLiters: 5150000000000, // 5.15 Trillion Liters
    currentWaterVolumeLiters: 4610000000000,
    spillwayCapacityCumecs: 46960,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Odisha Hydro Power Corporation (OHPC) & CWC'
  },
  {
    id: 'od-dam-indravati',
    name: 'Upper Indravati Dam',
    state: 'Odisha',
    district: 'Kalahandi',
    river: 'Indravati',
    basin: 'Godavari / Indravati Basin',
    yearCompleted: 1996,
    damType: 'Masonry & Concrete Gravity with 4 Dykes',
    heightMeters: 77.0,
    crestLengthMeters: 539.0,
    fullReservoirLevelMeters: 642.0,
    maximumWaterLevelMeters: 643.0,
    crestLevelMeters: 645.5,
    currentWaterLevelMeters: 639.8,
    grossStorageCapacityLiters: 2308000000000, // 2.31 Trillion Liters
    currentWaterVolumeLiters: 2040000000000,
    spillwayCapacityCumecs: 14000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'Odisha DoWR Upper Indravati Project Mukhiguda'
  },
  {
    id: 'od-dam-balimela',
    name: 'Balimela Dam',
    state: 'Odisha',
    district: 'Malkangiri',
    river: 'Sileru',
    basin: 'Godavari / Sileru Basin',
    yearCompleted: 1977,
    damType: 'Earth and Rockfill Dam',
    heightMeters: 70.0,
    crestLengthMeters: 1828.0,
    fullReservoirLevelMeters: 462.0,
    maximumWaterLevelMeters: 462.6,
    crestLevelMeters: 465.0,
    currentWaterLevelMeters: 458.7,
    grossStorageCapacityLiters: 3610000000000, // 3.61 Trillion Liters
    currentWaterVolumeLiters: 3120000000000,
    spillwayCapacityCumecs: 8500,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'Balimela Dam Safety Organization & OHPC'
  },
  {
    id: 'od-dam-upperkolab',
    name: 'Upper Kolab Dam',
    state: 'Odisha',
    district: 'Koraput',
    river: 'Kolab (Sabari)',
    basin: 'Godavari Basin',
    yearCompleted: 1993,
    damType: 'Masonry & Concrete Gravity',
    heightMeters: 55.0,
    crestLengthMeters: 646.0,
    fullReservoirLevelMeters: 858.0,
    maximumWaterLevelMeters: 859.0,
    crestLevelMeters: 861.0,
    currentWaterLevelMeters: 855.4,
    grossStorageCapacityLiters: 1215000000000,
    currentWaterVolumeLiters: 1040000000000,
    spillwayCapacityCumecs: 6800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'Odisha DoWR Upper Kolab Division Jeypore'
  },
  {
    id: 'od-dam-mandira',
    name: 'Mandira Dam',
    state: 'Odisha',
    district: 'Sundargarh',
    river: 'Sankh',
    basin: 'Brahmani Basin',
    yearCompleted: 1959,
    damType: 'Earthen Dam with Concrete Chute Spillway',
    heightMeters: 31.0,
    crestLengthMeters: 520.0,
    fullReservoirLevelMeters: 210.3,
    maximumWaterLevelMeters: 211.5,
    crestLevelMeters: 214.0,
    currentWaterLevelMeters: 209.1,
    grossStorageCapacityLiters: 340000000000,
    currentWaterVolumeLiters: 290000000000,
    spillwayCapacityCumecs: 10450,
    condition: 'alert',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-03',
    inspectingOfficer: 'SAIL Rourkela Steel Plant & Odisha WRD'
  },
  {
    id: 'od-dam-salandi',
    name: 'Salandi Dam (Hadagarh)',
    state: 'Odisha',
    district: 'Keonjhar',
    river: 'Salandi',
    basin: 'Baitarani Basin',
    yearCompleted: 1978,
    damType: 'Composite Masonry & Earthen',
    heightMeters: 51.8,
    crestLengthMeters: 823.0,
    fullReservoirLevelMeters: 82.3,
    maximumWaterLevelMeters: 83.5,
    crestLevelMeters: 86.0,
    currentWaterLevelMeters: 80.8,
    grossStorageCapacityLiters: 610000000000,
    currentWaterVolumeLiters: 535000000000,
    spillwayCapacityCumecs: 4250,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Odisha DoWR Anandapur Barrage Division'
  }
];

export interface ODDistrictQuota {
  district: string;
  region: 'Northern Plateau' | 'Central River Basin' | 'Eastern Ghats' | 'Coastal Plains';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const ODISHA_DISTRICT_QUOTAS: ODDistrictQuota[] = [
  { district: 'Sambalpur', region: 'Central River Basin', quota: 14, primaryBasin: 'Mahanadi Basin', majorRivers: ['Mahanadi', 'Ib', 'Malthi'] },
  { district: 'Mayurbhanj', region: 'Northern Plateau', quota: 14, primaryBasin: 'Subarnarekha / Budhabalanga Basin', majorRivers: ['Budhabalanga', 'Subarnarekha', 'Kalo', 'Sunei'] },
  { district: 'Ganjam', region: 'Coastal Plains', quota: 14, primaryBasin: 'Rushikulya Basin', majorRivers: ['Rushikulya', 'Ghodahada', 'Bhadra', 'Dhanei'] },
  { district: 'Koraput', region: 'Eastern Ghats', quota: 12, primaryBasin: 'Godavari Basin', majorRivers: ['Kolab', 'Machkund', 'Patali', 'Murran'] },
  { district: 'Kalahandi', region: 'Eastern Ghats', quota: 12, primaryBasin: 'Indravati / Tel Basin', majorRivers: ['Indravati', 'Tel', 'Hati', 'Sandul'] },
  { district: 'Sundargarh', region: 'Northern Plateau', quota: 12, primaryBasin: 'Brahmani Basin', majorRivers: ['Sankh', 'South Koel', 'Ib', 'Rukura'] },
  { district: 'Angul', region: 'Central River Basin', quota: 10, primaryBasin: 'Brahmani Basin', majorRivers: ['Brahmani', 'Tikara', 'Derjang', 'Nandira'] },
  { district: 'Malkangiri', region: 'Eastern Ghats', quota: 10, primaryBasin: 'Godavari / Sileru Basin', majorRivers: ['Sileru', 'Potteru', 'Sabari', 'Satiguda'] },
  { district: 'Rayagada', region: 'Eastern Ghats', quota: 10, primaryBasin: 'Nagavali / Vamsadhara Basin', majorRivers: ['Nagavali', 'Vamsadhara', 'Badanalla', 'Jhanjavati'] },
  { district: 'Balangir', region: 'Central River Basin', quota: 10, primaryBasin: 'Mahanadi Basin', majorRivers: ['Suktel', 'Tel', 'Hariharjore', 'Lanth'] },
  { district: 'Bargarh', region: 'Central River Basin', quota: 10, primaryBasin: 'Mahanadi Basin', majorRivers: ['Jira', 'Jhaun', 'Danta', 'Mahanadi'] },
  { district: 'Nuapada', region: 'Eastern Ghats', quota: 8, primaryBasin: 'Mahanadi Basin', majorRivers: ['Jonk', 'Sundar', 'Indra'] },
  { district: 'Keonjhar', region: 'Northern Plateau', quota: 8, primaryBasin: 'Baitarani Basin', majorRivers: ['Baitarani', 'Salandi', 'Kanjhari', 'Remal'] },
  { district: 'Dhenkanal', region: 'Central River Basin', quota: 8, primaryBasin: 'Brahmani Basin', majorRivers: ['Brahmani', 'Ramial', 'Dadaraghati'] },
  { district: 'Kandhamal', region: 'Eastern Ghats', quota: 8, primaryBasin: 'Mahanadi Basin', majorRivers: ['Rushikulya', 'Bagh', 'Pilasalki', 'Salunki'] },
  { district: 'Boudh', region: 'Central River Basin', quota: 7, primaryBasin: 'Mahanadi Basin', majorRivers: ['Mahanadi', 'Tel', 'Bagh', 'Salki'] },
  { district: 'Subarnapur', region: 'Central River Basin', quota: 7, primaryBasin: 'Mahanadi Basin', majorRivers: ['Mahanadi', 'Tel', 'Suktel'] },
  { district: 'Khordha', region: 'Coastal Plains', quota: 7, primaryBasin: 'Mahanadi Basin', majorRivers: ['Kuakhai', 'Daya', 'Bhargavi', 'Malaguni'] },
  { district: 'Nayagarh', region: 'Eastern Ghats', quota: 6, primaryBasin: 'Mahanadi / Rushikulya Basin', majorRivers: ['Kuanria', 'Brutang', 'Budhabudhiani', 'Kusumi'] },
  { district: 'Cuttack', region: 'Coastal Plains', quota: 5, primaryBasin: 'Mahanadi Delta Basin', majorRivers: ['Mahanadi', 'Kathajodi', 'Birupa'] },
  { district: 'Jajpur', region: 'Coastal Plains', quota: 5, primaryBasin: 'Baitarani / Brahmani Basin', majorRivers: ['Baitarani', 'Brahmani', 'Kelua'] },
  { district: 'Nabarangpur', region: 'Eastern Ghats', quota: 5, primaryBasin: 'Indravati Basin', majorRivers: ['Indravati', 'Turi', 'Bhaskel'] },
  { district: 'Deogarh', region: 'Central River Basin', quota: 4, primaryBasin: 'Brahmani Basin', majorRivers: ['Brahmani', 'Gohira', 'Tikira'] },
  { district: 'Jharsuguda', region: 'Northern Plateau', quota: 4, primaryBasin: 'Mahanadi Basin', majorRivers: ['Ib', 'Bheden'] }
];

// Ensure sum is exactly 204
const initialSumOD = ODISHA_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumOD !== 204) {
  const diff = 204 - initialSumOD;
  ODISHA_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedOdishaDams: Dam[] | null = null;

const OD_NAMING_PATTERNS = [
  'Dam', 'Sagar', 'Jalashay', 'Barrage', 'Medium Irrigation Project',
  'Weir', 'Headworks', 'Reservoir Project', 'Tank Scheme', 'Anicut'
];

const OD_TOPONYMS = [
  'Similipal', 'Dhauli', 'Udayagiri', 'Ratnagiri', 'Chilika', 'Konark',
  'Satkosia', 'Debrigarh', 'Gahirmatha', 'Bhitarkanika', 'Chandaka',
  'Tikarpada', 'Karlapat', 'Kotagarh', 'Sunabeda', 'Hadagarh', 'Kapilash'
];

export function getOdisha204Dams(): Dam[] {
  if (cachedOdishaDams) return cachedOdishaDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  ODISHA_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-od-${paddedId}`;

      const matchedNotable = ODISHA_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = OD_TOPONYMS[(globalIdCounter + i * 4) % OD_TOPONYMS.length];
      const pattern = OD_NAMING_PATTERNS[(i + globalIdCounter) % OD_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((22.0 + ((globalIdCounter * 5.8) % 48)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(350 + ((globalIdCounter * 55) % 2200));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((140 + ((globalIdCounter * 9.2) % 260)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.4 + ((globalIdCounter % 3) * 0.4)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.8).toFixed(2));

      // Water level
      const fillRatio = 0.62 + ((globalIdCounter % 35) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.2 + (fillRatio * 3.2)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((60 + ((globalIdCounter * 42) % 850)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.97, Math.max(0.45, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1960 + (globalIdCounter % 63));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Masonry Gravity' :
        globalIdCounter % 4 === 1 ? 'Earthen Dam with Rolled Clay Core' :
        globalIdCounter % 4 === 2 ? 'Zoned Earth-fill with Chute Spillway' : 'Concrete Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 19) % 100;
        if (condHash < 67) cond = 'good';
        else if (condHash < 87) cond = 'moderate';
        else if (condHash < 95) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 38.2 : cond === 'alert' ? 21.0 : cond === 'moderate' ? 8.4 : 2.1;
      const turbidity = cond === 'critical' ? 66 : cond === 'alert' ? 31 : cond === 'moderate' ? 9.0 : 1.7;
      const seepageRecord: SeepageRecord = {
        id: `od-sep-${paddedId}`,
        timestamp: '2026-08-14 06:12',
        location: `Downstream gallery filter bed and toe toe drain in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.28)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.42)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Muddy colloidal silt wash from khondalite bedrock foundation seam'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep relief well pneumatic surging, fine sand pack filter cleaning and bentonite sealant check.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `od-wp-${paddedId}`,
        timestamp: '2026-08-12 15:10',
        reservoirLevelMeters: currentLevel,
        location: `Power house intake penstock and deep sluice gate in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.5 : cond === 'alert' ? 1.7 : 0.52,
        rotationalSpeedRpm: cond === 'critical' ? 49 : cond === 'alert' ? 25 : 8,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex submerged cross-vanes activated, floating debris barrier repositioned.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-OD-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.41 + (cond === 'critical' ? 6.2 : cond === 'alert' ? 3.0 : 0.7)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.39).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.47).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.44),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Central gallery pier block ${1 + (globalIdCounter % 14)}`
        },
        inclinometer: {
          stationId: `INC-OD-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 17.2 : cond === 'alert' ? 9.0 : 1.8).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.5,
          tiltRateMmPerMonth: cond === 'critical' ? 3.2 : 0.36,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Transverse Embankment Deflection Axis'
        },
        seismograph: {
          stationId: `SM-OD-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.02 + ((globalIdCounter % 8) * 0.0035)).toFixed(3)),
          designBasisMceG: 0.30,
          ambientMicrotremorsHz: 3.5,
          status: 'Normal',
          lastTremorDate: '2026-05-11 (M2.6 Mahanadi graben micro-tremor)'
        }
      };

      // Landslide precautions
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Eastern Ghats granulite belt, khondalite, charnockite and Gondwana sandstone',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Sub-horizontal PVC drainage holes drilled at 5° gradient into Eastern Ghats abutment.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Prestressed Rock Anchors',
            description: '110-ton pre-stressed rock bolts pinned into weathered khondalite cliff faces.',
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
        rockBoltsInstalled: 2100,
        shotcreteAreaSqM: 16500,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025 (Odisha coastal / cyclone monsoon)
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1480 + (globalIdCounter % 450), monsoonPeak24hMm: 210, historicalDeviationPercent: 12.8 },
        { year: 2024, totalAnnualMm: 1650 + (globalIdCounter % 520), monsoonPeak24hMm: 255, historicalDeviationPercent: 23.4 },
        { year: 2023, totalAnnualMm: 1320 + (globalIdCounter % 380), monsoonPeak24hMm: 180, historicalDeviationPercent: -4.5 },
        { year: 2022, totalAnnualMm: 1540 + (globalIdCounter % 480), monsoonPeak24hMm: 230, historicalDeviationPercent: 16.2 },
        { year: 2021, totalAnnualMm: 1420 + (globalIdCounter % 410), monsoonPeak24hMm: 195, historicalDeviationPercent: 4.6 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `od-eq-${paddedId}-1`,
          date: '1995-03-27',
          magnitudeRichter: 4.8,
          epicenterDistanceKm: 75 + (globalIdCounter % 160),
          focalDepthKm: 15,
          measuredPgaDamG: 0.045,
          structuralInspectionSummary: 'Eastern Ghats seismic propagation; gallery drainage channels verified intact.'
        },
        {
          id: `od-eq-${paddedId}-2`,
          date: '2021-08-20',
          magnitudeRichter: 3.2,
          epicenterDistanceKm: 38 + (globalIdCounter % 75),
          focalDepthKm: 12,
          measuredPgaDamG: 0.021,
          structuralInspectionSummary: 'Mahanadi rift micro-tremor; pore pressure within standard limits.'
        }
      ];

      // Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 135,
        breachFormationTimeHours: 2.3,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.44 + 4400),
        totalFloodDurationHours: 27,
        floodRecessionTimeHours: 46,
        totalInundationAreaSqKm: 325,
        downstreamRiverReachKm: 82,
        riverName: river,
        crossSectionsCount: 36,
        affectedZones: [
          {
            id: `az-od-${paddedId}-1`,
            name: `${dq.district} Downstream Mahanadi Delta Village`,
            distanceDownstreamKm: 7.2,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 8.1,
            flowVelocityMps: 5.2,
            estimatedPopulation: 5100,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} Multi-Purpose Cyclone & Flood Shelter`
          },
          {
            id: `az-od-${paddedId}-2`,
            name: `${river} Valley Canal Settlement`,
            distanceDownstreamKm: 21.0,
            waveArrivalTimeMinutes: 52,
            peakFloodDepthMeters: 5.2,
            flowVelocityMps: 3.4,
            estimatedPopulation: 9800,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Tehsil Headquarters Elevated Campus'
          },
          {
            id: `az-od-${paddedId}-3`,
            name: 'Coastal Delta Estuary Township',
            distanceDownstreamKm: 42.0,
            waveArrivalTimeMinutes: 118,
            peakFloodDepthMeters: 3.1,
            flowVelocityMps: 2.0,
            estimatedPopulation: 16500,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'Coastal Highway Concrete Elevated Terminal'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `od-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying stone masonry mortar and radial crest gates in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `od-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Measuring Flume',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection of downstream toe seepage V-notch weir and sediment collection conduits.`,
          date: '2026-08-05'
        },
        {
          id: `od-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Multispectral Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Satellite radar flood simulation following the downstream ${river} corridor across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Ground Resolution'
        },
        {
          id: `od-img-${paddedId}-drone`,
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
        state: 'Odisha',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(height * 68 + 1950),
        condition: cond,
        hazardClass: 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-10',
        inspectingOfficer: matchedNotable?.inspectingOfficer || `Odisha DoWR ${dq.district} Irrigation Division`,
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

  cachedOdishaDams = result;
  return result;
}

export interface OdishaOverviewStats {
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

export function getOdishaSummaryStats(): OdishaOverviewStats {
  const dams = getOdisha204Dams();
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

  ODISHA_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 204
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
