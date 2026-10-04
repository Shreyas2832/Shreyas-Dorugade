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

export const JHARKHAND_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'jhk-dam-maithon',
    name: 'Maithon Dam (DVC Underground Hydel)',
    state: 'Jharkhand',
    district: 'Dhanbad',
    river: 'Barakar',
    basin: 'Damodar Valley Basin',
    yearCompleted: 1957,
    damType: 'Composite Concrete Gravity Spillway with Earthen Flanks',
    heightMeters: 50.29,
    crestLengthMeters: 4789.0,
    fullReservoirLevelMeters: 150.88,
    maximumWaterLevelMeters: 152.4,
    crestLevelMeters: 154.5,
    currentWaterLevelMeters: 147.6,
    grossStorageCapacityLiters: 1357000000000, // 1.357 Trillion Liters
    currentWaterVolumeLiters: 1195000000000,
    spillwayCapacityCumecs: 15800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-17',
    inspectingOfficer: 'Damodar Valley Corporation (DVC) Dam Safety Cell & CWC'
  },
  {
    id: 'jhk-dam-panchet',
    name: 'Panchet Dam',
    state: 'Jharkhand',
    district: 'Dhanbad',
    river: 'Damodar',
    basin: 'Damodar Valley Basin',
    yearCompleted: 1959,
    damType: 'Composite Masonry Spillway & Earthen Embankment',
    heightMeters: 44.2,
    crestLengthMeters: 6777.0,
    fullReservoirLevelMeters: 132.59,
    maximumWaterLevelMeters: 135.64,
    crestLevelMeters: 138.0,
    currentWaterLevelMeters: 129.8,
    grossStorageCapacityLiters: 1497000000000, // 1.497 Trillion Liters
    currentWaterVolumeLiters: 1290000000000,
    spillwayCapacityCumecs: 18400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'Damodar Valley Corporation (DVC) Panchet Division'
  },
  {
    id: 'jhk-dam-tenughat',
    name: 'Tenughat Dam',
    state: 'Jharkhand',
    district: 'Bokaro',
    river: 'Damodar',
    basin: 'Damodar River Basin',
    yearCompleted: 1978,
    damType: 'Earthen Embankment with Concrete Spillway',
    heightMeters: 55.0,
    crestLengthMeters: 6000.0,
    fullReservoirLevelMeters: 264.87,
    maximumWaterLevelMeters: 266.0,
    crestLevelMeters: 269.0,
    currentWaterLevelMeters: 261.4,
    grossStorageCapacityLiters: 1022000000000, // 1.022 Trillion Liters
    currentWaterVolumeLiters: 890000000000,
    spillwayCapacityCumecs: 17200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Jharkhand WRD Tenughat Division & Bokaro Steel'
  },
  {
    id: 'jhk-dam-tilaiya',
    name: 'Tilaiya Dam',
    state: 'Jharkhand',
    district: 'Koderma',
    river: 'Barakar',
    basin: 'Damodar Valley Basin',
    yearCompleted: 1953, // First dam of DVC
    damType: 'Concrete Gravity',
    heightMeters: 30.2,
    crestLengthMeters: 366.0,
    fullReservoirLevelMeters: 371.86,
    maximumWaterLevelMeters: 373.0,
    crestLevelMeters: 375.5,
    currentWaterLevelMeters: 369.2,
    grossStorageCapacityLiters: 395000000000,
    currentWaterVolumeLiters: 348000000000,
    spillwayCapacityCumecs: 3820,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'DVC Tilaiya Project Division'
  },
  {
    id: 'jhk-dam-chandil',
    name: 'Chandil Dam',
    state: 'Jharkhand',
    district: 'Seraikela Kharsawan',
    river: 'Subarnarekha',
    basin: 'Subarnarekha Basin',
    yearCompleted: 1992,
    damType: 'Composite Earthen & Concrete Spillway',
    heightMeters: 56.5,
    crestLengthMeters: 720.0,
    fullReservoirLevelMeters: 192.0,
    maximumWaterLevelMeters: 194.0,
    crestLevelMeters: 196.5,
    currentWaterLevelMeters: 188.4,
    grossStorageCapacityLiters: 1963000000000, // 1.963 Trillion Liters
    currentWaterVolumeLiters: 1720000000000,
    spillwayCapacityCumecs: 19500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-04',
    inspectingOfficer: 'Subarnarekha Multi-purpose Project (SMP) Directorate'
  },
  {
    id: 'jhk-dam-getalsud',
    name: 'Getalsud Dam (Ranchi Water Supply)',
    state: 'Jharkhand',
    district: 'Ranchi',
    river: 'Subarnarekha',
    basin: 'Subarnarekha Basin',
    yearCompleted: 1971,
    damType: 'Composite Masonry & Earthen',
    heightMeters: 35.5,
    crestLengthMeters: 1950.0,
    fullReservoirLevelMeters: 596.5,
    maximumWaterLevelMeters: 597.5,
    crestLevelMeters: 600.0,
    currentWaterLevelMeters: 594.1,
    grossStorageCapacityLiters: 288000000000,
    currentWaterVolumeLiters: 252000000000,
    spillwayCapacityCumecs: 3965,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-01',
    inspectingOfficer: 'Jharkhand Drinking Water & Sanitation Dept'
  }
];

export interface JharkhandDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const JHARKHAND_DISTRICT_QUOTAS: JharkhandDistrictQuota[] = [
  { district: 'Dhanbad', quota: 7, primaryBasin: 'Damodar & Barakar Basin', majorRivers: ['Damodar', 'Barakar', 'Khudia', 'Katri'] },
  { district: 'Ranchi', quota: 6, primaryBasin: 'Subarnarekha Basin', majorRivers: ['Subarnarekha', 'Kanchi', 'Karo', 'Raru'] },
  { district: 'Bokaro', quota: 5, primaryBasin: 'Damodar & Konar Basin', majorRivers: ['Damodar', 'Konar', 'Garga', 'Govindpur'] },
  { district: 'Hazaribagh', quota: 5, primaryBasin: 'Damodar Basin', majorRivers: ['Konar', 'Bokaro', 'Siwane', 'Mohane'] },
  { district: 'Seraikela Kharsawan', quota: 4, primaryBasin: 'Subarnarekha Basin', majorRivers: ['Subarnarekha', 'Karkari', 'Sanjay'] },
  { district: 'Koderma', quota: 3, primaryBasin: 'Barakar Basin', majorRivers: ['Barakar', 'Sakri', 'Poanch'] },
  { district: 'Dumka', quota: 3, primaryBasin: 'Mayurakshi Basin', majorRivers: ['Mayurakshi', 'Brahmani', 'Bansloi'] },
  { district: 'Ramgarh', quota: 3, primaryBasin: 'Damodar Basin', majorRivers: ['Damodar', 'Nalkari', 'Bhairavi'] },
  { district: 'Latehar', quota: 2, primaryBasin: 'North Koel Basin', majorRivers: ['North Koel', 'Auranga', 'Burha'] },
  { district: 'East Singhbhum', quota: 2, primaryBasin: 'Subarnarekha Basin', majorRivers: ['Subarnarekha', 'Kharkai', 'Garra'] },
  { district: 'Giridih', quota: 2, primaryBasin: 'Barakar & Usri Basin', majorRivers: ['Barakar', 'Usri'] }
];

// Ensure sum is exactly 42
const initialSumJHK = JHARKHAND_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumJHK !== 42) {
  const diff = 42 - initialSumJHK;
  JHARKHAND_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedJharkhandDams: Dam[] | null = null;

const JHK_NAMING_PATTERNS = [
  'Dam', 'Bandh', 'Reservoir', 'Sagar', 'Project',
  'Weir', 'Headworks', 'Jalashay', 'Barrage', 'Feeder Dam'
];

const JHK_TOPONYMS = [
  'Damodar', 'Barakar', 'Subarnarekha', 'Maithon', 'Panchet', 'Tenughat',
  'Tilaiya', 'Konar', 'Chandil', 'Getalsud', 'Patratu', 'Massanjore',
  'Koel', 'Kharkai', 'Mayurakshi', 'Usri', 'Kanchi', 'Nalkari'
];

export function getJharkhand42Dams(): Dam[] {
  if (cachedJharkhandDams) return cachedJharkhandDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  JHARKHAND_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-jhk-${paddedId}`;

      const matchedNotable = JHARKHAND_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = JHK_TOPONYMS[(globalIdCounter + i * 2) % JHK_TOPONYMS.length];
      const pattern = JHK_NAMING_PATTERNS[(i + globalIdCounter) % JHK_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((24.0 + ((globalIdCounter * 6.5) % 55)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(380 + ((globalIdCounter * 50) % 2200));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((140 + ((globalIdCounter * 14.2) % 380)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.4 + ((globalIdCounter % 4) * 0.3)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.5).toFixed(2));

      const fillRatio = 0.64 + ((globalIdCounter % 32) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.8 + (fillRatio * 2.8)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((75 + ((globalIdCounter * 42) % 850)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.48, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1955 + (globalIdCounter % 68));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Composite Concrete Spillway & Earth Flanks' :
        globalIdCounter % 4 === 1 ? 'Earthen Embankment with Clay Puddle Core' :
        globalIdCounter % 4 === 2 ? 'Concrete Gravity' : 'Masonry Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 21) % 100;
        if (condHash < 76) cond = 'good';
        else if (condHash < 90) cond = 'moderate';
        else if (condHash < 97) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 36.8 : cond === 'alert' ? 21.0 : cond === 'moderate' ? 8.1 : 1.8;
      const turbidity = cond === 'critical' ? 64 : cond === 'alert' ? 29 : cond === 'moderate' ? 8.5 : 1.6;
      const seepageRecord: SeepageRecord = {
        id: `jhk-sep-${paddedId}`,
        timestamp: '2026-08-16 07:15',
        location: `Foundation drainage gallery block 6 in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.25)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.4)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Chota Nagpur granite-gneiss contact joint'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Pneumatic surging of foundation relief holes and filter drain reaming.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `jhk-wp-${paddedId}`,
        timestamp: '2026-08-14 14:45',
        reservoirLevelMeters: currentLevel,
        location: `Power intake tunnel portal and spillway sluice in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.3 : cond === 'alert' ? 1.5 : 0.4,
        rotationalSpeedRpm: cond === 'critical' ? 46 : cond === 'alert' ? 22 : 6,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex baffle beam array engaged; submerged floating grid deployed.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-JHK-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.66).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.62).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.82).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.72),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Foundation bedrock interface in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-JHK-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 16.8 : cond === 'alert' ? 8.4 : 2.7,
          normalBaselineMm: 2.1,
          thresholdAlertMm: 11.8,
          tiltRateMmPerMonth: cond === 'critical' ? 0.86 : cond === 'alert' ? 0.39 : 0.04,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-JHK-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.015,
          designBasisMceG: 0.22,
          ambientMicrotremorsHz: 3.9,
          status: 'Normal',
          lastTremorDate: '2026-05-14 (M2.0 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: cond === 'critical' ? 'High' : 'Moderate',
        geologicalFormation: 'Chota Nagpur Granite Gneiss Complex with Gondwana coal basin faults',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Perforations',
            description: 'Perforated horizontal drains drilled into reservoir rim abutments to relieve pore water uplift.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Deep Rock Bolts',
            description: 'Geobrugg wire netting with grouted rebar anchors on fractured gorge faces.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 5,
        rockBoltsInstalled: 2400,
        shotcreteAreaSqM: 18500,
        biorevetmentMeshType: 'Geobrugg High-Tensile Steel Wire Netting'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1380, monsoonPeak24hMm: 205, historicalDeviationPercent: 11.2 },
        { year: 2024, totalAnnualMm: 1260, monsoonPeak24hMm: 170, historicalDeviationPercent: 2.6 },
        { year: 2023, totalAnnualMm: 1480, monsoonPeak24hMm: 235, historicalDeviationPercent: 17.8 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `jhk-eq-${paddedId}`,
          date: '2026-05-14',
          magnitudeRichter: 2.0,
          epicenterDistanceKm: 58,
          focalDepthKm: 15,
          measuredPgaDamG: 0.015,
          structuralInspectionSummary: 'Post-tremor gallery plumb line scan and inclinometer verification indicated zero displacement.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(115 + ((globalIdCounter * 4.8) % 175)),
        breachFormationTimeHours: 2.6,
        peakBreachDischargeCumecs: Math.round(40000 + ((globalIdCounter * 1300) % 58000)),
        totalFloodDurationHours: 34,
        floodRecessionTimeHours: 54,
        totalInundationAreaSqKm: 320,
        downstreamRiverReachKm: 90,
        riverName: river,
        crossSectionsCount: 38,
        affectedZones: [
          {
            id: `az-jhk-${paddedId}-1`,
            name: `${dq.district} Downstream Riparian Settlement`,
            distanceDownstreamKm: 7.0,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.6,
            flowVelocityMps: 4.8,
            estimatedPopulation: 4500,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ridge Disaster Shelters`
          },
          {
            id: `az-jhk-${paddedId}-2`,
            name: `${river} Valley Industrial & Mining Colony`,
            distanceDownstreamKm: 20.5,
            waveArrivalTimeMinutes: 50,
            peakFloodDepthMeters: 4.8,
            flowVelocityMps: 3.2,
            estimatedPopulation: 9800,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Colliery Township Elevated Complex'
          },
          {
            id: `az-jhk-${paddedId}-3`,
            name: 'Downstream Plain Agricultural Tehsil',
            distanceDownstreamKm: 41.0,
            waveArrivalTimeMinutes: 115,
            peakFloodDepthMeters: 2.9,
            flowVelocityMps: 1.8,
            estimatedPopulation: 15800,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Raised Transit Camp'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `jhk-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying masonry facade and radial crest gates in ${dq.district}.`,
          date: '2026-08-14'
        },
        {
          id: `jhk-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-06'
        },
        {
          id: `jhk-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} flood discharge pathways.`,
          date: '2026-08-10',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `jhk-img-${paddedId}-drone`,
          title: 'Drone Inspection Orthomosaic Survey',
          type: 'drone',
          url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
          caption: 'Aerial photogrammetry confirming crest road integrity and downstream spillway plunge pool stability.',
          date: '2026-08-17',
          resolutionOrAltitude: 'Altitude: 95m AGL'
        }
      ];

      result.push({
        id,
        name: damName,
        state: 'Jharkhand',
        district: dq.district,
        river,
        basin,
        yearCompleted,
        damType,
        heightMeters: height,
        crestLengthMeters: crestLength,
        fullReservoirLevelMeters: frl,
        maximumWaterLevelMeters: mwl,
        crestLevelMeters: crest,
        currentWaterLevelMeters: currentLevel,
        grossStorageCapacityLiters: grossStorageLiters,
        currentWaterVolumeLiters: currentWaterLiters,
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(1800 + ((globalIdCounter * 380) % 9500)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-14',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'Damodar Valley Corporation (DVC) Dam Safety & CWC',
        seepageRecords: [seepageRecord],
        whirlpoolRecords: [whirlpoolRecord],
        sensors: sensorTelemetry,
        landslidePrevention,
        rainfallHistory,
        earthquakeHistory,
        hydrodynamicBreach,
        images
      });

      globalIdCounter++;
    }
  });

  cachedJharkhandDams = result;
  return result;
}

export function getJharkhandSummaryStats() {
  const dams = getJharkhand42Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Jharkhand',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & Damodar Valley Corporation (DVC)'
  };
}
