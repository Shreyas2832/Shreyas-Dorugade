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

export const JAMMU_KASHMIR_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'jk-dam-baglihar',
    name: 'Baglihar Dam',
    state: 'Jammu and Kashmir',
    district: 'Ramban',
    river: 'Chenab',
    basin: 'Indus / Chenab Basin',
    yearCompleted: 2008,
    damType: 'Concrete Gravity',
    heightMeters: 143.0,
    crestLengthMeters: 317.0,
    fullReservoirLevelMeters: 840.0,
    maximumWaterLevelMeters: 840.0,
    crestLevelMeters: 844.5,
    currentWaterLevelMeters: 837.2,
    grossStorageCapacityLiters: 396000000000, // 396 Billion Liters
    currentWaterVolumeLiters: 362000000000,
    spillwayCapacityCumecs: 16500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-20',
    inspectingOfficer: 'JKSPDC Dam Safety Organisation & Indus Commission CWC'
  },
  {
    id: 'jk-dam-salal',
    name: 'Salal Dam (Rock-fill & Concrete Gravity)',
    state: 'Jammu and Kashmir',
    district: 'Reasi',
    river: 'Chenab',
    basin: 'Indus / Chenab Basin',
    yearCompleted: 1987,
    damType: 'Composite Concrete Gravity & Rock-fill',
    heightMeters: 113.0,
    crestLengthMeters: 630.0,
    fullReservoirLevelMeters: 487.68, // 1600 ft
    maximumWaterLevelMeters: 489.0,
    crestLevelMeters: 492.0,
    currentWaterLevelMeters: 484.5,
    grossStorageCapacityLiters: 285000000000,
    currentWaterVolumeLiters: 254000000000,
    spillwayCapacityCumecs: 22400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-18',
    inspectingOfficer: 'NHPC Limited Salal Power Station & CWC'
  },
  {
    id: 'jk-dam-dulhasti',
    name: 'Dul Hasti Dam',
    state: 'Jammu and Kashmir',
    district: 'Kishtwar',
    river: 'Chenab',
    basin: 'Indus / Chenab Basin',
    yearCompleted: 2007,
    damType: 'Concrete Gravity',
    heightMeters: 65.0,
    crestLengthMeters: 186.0,
    fullReservoirLevelMeters: 1258.0,
    maximumWaterLevelMeters: 1260.0,
    crestLevelMeters: 1263.0,
    currentWaterLevelMeters: 1255.8,
    grossStorageCapacityLiters: 11800000000,
    currentWaterVolumeLiters: 10400000000,
    spillwayCapacityCumecs: 8000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'NHPC Limited Dulhasti Power Station'
  },
  {
    id: 'jk-dam-uri',
    name: 'Uri Dam (Uri-I Hydel Project)',
    state: 'Jammu and Kashmir',
    district: 'Baramulla',
    river: 'Jhelum',
    basin: 'Indus / Jhelum Basin',
    yearCompleted: 1997,
    damType: 'Concrete Gravity Barrage',
    heightMeters: 38.0,
    crestLengthMeters: 156.0,
    fullReservoirLevelMeters: 1148.0,
    maximumWaterLevelMeters: 1150.0,
    crestLevelMeters: 1153.0,
    currentWaterLevelMeters: 1146.2,
    grossStorageCapacityLiters: 8900000000,
    currentWaterVolumeLiters: 7800000000,
    spillwayCapacityCumecs: 6500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'NHPC Limited Uri Power Station'
  },
  {
    id: 'jk-dam-kishanganga',
    name: 'Kishanganga Dam',
    state: 'Jammu and Kashmir',
    district: 'Bandipora',
    river: 'Kishanganga (Neelum)',
    basin: 'Indus / Jhelum Basin',
    yearCompleted: 2018,
    damType: 'Concrete-Faced Rock-fill (CFRD)',
    heightMeters: 37.0,
    crestLengthMeters: 239.0,
    fullReservoirLevelMeters: 2390.0,
    maximumWaterLevelMeters: 2392.0,
    crestLevelMeters: 2395.0,
    currentWaterLevelMeters: 2387.5,
    grossStorageCapacityLiters: 18350000000,
    currentWaterVolumeLiters: 16200000000,
    spillwayCapacityCumecs: 4080,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-06',
    inspectingOfficer: 'NHPC Limited Kishanganga Power Station'
  }
];

export interface JammuKashmirDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const JAMMU_KASHMIR_DISTRICT_QUOTAS: JammuKashmirDistrictQuota[] = [
  { district: 'Kishtwar', quota: 4, primaryBasin: 'Chenab & Marusudar Basin', majorRivers: ['Chenab', 'Marusudar', 'Rin'] },
  { district: 'Ramban', quota: 3, primaryBasin: 'Chenab Basin', majorRivers: ['Chenab', 'Bichlari', 'Pogal'] },
  { district: 'Reasi', quota: 3, primaryBasin: 'Chenab Basin', majorRivers: ['Chenab', 'Anji', 'Ans'] },
  { district: 'Baramulla', quota: 2, primaryBasin: 'Jhelum Basin', majorRivers: ['Jhelum', 'Pohru', 'Ningli'] },
  { district: 'Bandipora', quota: 2, primaryBasin: 'Kishanganga & Jhelum Basin', majorRivers: ['Kishanganga', 'Madhumati'] },
  { district: 'Kathua', quota: 2, primaryBasin: 'Ravi & Sewa Basin', majorRivers: ['Ravi', 'Sewa', 'Ujh'] },
  { district: 'Doda', quota: 1, primaryBasin: 'Chenab Basin', majorRivers: ['Chenab', 'Neeru'] },
  { district: 'Udhampur', quota: 1, primaryBasin: 'Chenab & Tawi Basin', majorRivers: ['Tawi', 'Birun'] }
];

// Ensure sum is exactly 18
const initialSumJK = JAMMU_KASHMIR_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumJK !== 18) {
  const diff = 18 - initialSumJK;
  JAMMU_KASHMIR_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedJammuKashmirDams: Dam[] | null = null;

const JK_NAMING_PATTERNS = [
  'Dam', 'Hydel Project', 'Barrage', 'Headworks', 'Reservoir',
  'Weir', 'Diversion Dam', 'Tunnel Spillway Scheme', 'Hydro-Electric Scheme'
];

const JK_TOPONYMS = [
  'Baglihar', 'Salal', 'Dul Hasti', 'Uri', 'Kishanganga', 'Pakal Dul',
  'Ratle', 'Kwar', 'Kiru', 'Sewa', 'Lower Kalnai', 'Kirthai',
  'Bursar', 'Sawalkote', 'Ujh', 'Chenab'
];

export function getJammuKashmir18Dams(): Dam[] {
  if (cachedJammuKashmirDams) return cachedJammuKashmirDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  JAMMU_KASHMIR_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-jk-${paddedId}`;

      const matchedNotable = JAMMU_KASHMIR_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = JK_TOPONYMS[(globalIdCounter + i * 2) % JK_TOPONYMS.length];
      const pattern = JK_NAMING_PATTERNS[(i + globalIdCounter) % JK_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((42.0 + ((globalIdCounter * 9.5) % 95)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(230 + ((globalIdCounter * 38) % 850));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((650 + ((globalIdCounter * 65.0) % 1500)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.6 + ((globalIdCounter % 4) * 0.35)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.8).toFixed(2));

      const fillRatio = 0.75 + ((globalIdCounter % 20) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.0 + (fillRatio * 3.0)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((80 + ((globalIdCounter * 60) % 950)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.55, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1985 + (globalIdCounter % 40));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Concrete Gravity' :
        globalIdCounter % 3 === 1 ? 'Concrete Faced Rock-fill (CFRD)' : 'Composite Rock-fill & Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 78) cond = 'good';
        else if (condHash < 92) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 38.5 : cond === 'alert' ? 22.0 : cond === 'moderate' ? 8.4 : 1.8;
      const turbidity = cond === 'critical' ? 67 : cond === 'alert' ? 31 : cond === 'moderate' ? 8.9 : 1.7;
      const seepageRecord: SeepageRecord = {
        id: `jk-sep-${paddedId}`,
        timestamp: '2026-08-17 06:45',
        location: `Grout curtain inspection gallery relief wells in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.28)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.42)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment wash from Panjal volcanic & Pir Panjal thrust joint'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'High-pressure air-water jet flushing of drainage holes and sensor recalibration.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `jk-wp-${paddedId}`,
        timestamp: '2026-08-15 16:45',
        reservoirLevelMeters: currentLevel,
        location: `Power intake tunnel portal and chute spillway in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.5 : cond === 'alert' ? 1.7 : 0.45,
        rotationalSpeedRpm: cond === 'critical' ? 50 : cond === 'alert' ? 25 : 7,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex radial splitter beams engaged; trash rack debris rake cycle performed.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-JK-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.70).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.65).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.85).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.75),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Abutment rock contact gallery in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-JK-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 17.8 : cond === 'alert' ? 8.8 : 2.8,
          normalBaselineMm: 2.2,
          thresholdAlertMm: 12.2,
          tiltRateMmPerMonth: cond === 'critical' ? 0.88 : cond === 'alert' ? 0.40 : 0.05,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-JK-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.024,
          designBasisMceG: 0.45, // Kashmir Himalayan Seismic Zone IV/V
          ambientMicrotremorsHz: 4.8,
          status: 'Normal',
          lastTremorDate: '2026-06-18 (M2.4 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: 'High', // High in Pir Panjal and Great Himalayan canyons
        geologicalFormation: 'Pir Panjal Volcanics and Zanskar crystalline thrust nappe complexes',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Galleries',
            description: 'Deep perimeter drainage tunnels in mountain flanks to relieve hydrostatic head.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'Prestressed Rock Cable Anchors & Wire Netting',
            description: 'Geobrugg high-tensile steel wire mesh with 150-tonne prestressed grouted tendons.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 7,
        rockBoltsInstalled: 3100,
        shotcreteAreaSqM: 25000,
        biorevetmentMeshType: 'High-Tensile Tecco Wire Netting & Prestressed Tendons'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1650, monsoonPeak24hMm: 220, historicalDeviationPercent: 12.8 },
        { year: 2024, totalAnnualMm: 1510, monsoonPeak24hMm: 190, historicalDeviationPercent: 4.2 },
        { year: 2023, totalAnnualMm: 1780, monsoonPeak24hMm: 260, historicalDeviationPercent: 18.9 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `jk-eq-${paddedId}`,
          date: '2026-06-18',
          magnitudeRichter: 2.4,
          epicenterDistanceKm: 32,
          focalDepthKm: 15,
          measuredPgaDamG: 0.024,
          structuralInspectionSummary: 'Post-tremor instrumentation scan and inverted pendulum reading confirmed zero shift.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(135 + ((globalIdCounter * 5.8) % 180)),
        breachFormationTimeHours: 2.3,
        peakBreachDischargeCumecs: Math.round(51000 + ((globalIdCounter * 1550) % 72000)),
        totalFloodDurationHours: 28,
        floodRecessionTimeHours: 48,
        totalInundationAreaSqKm: 270,
        downstreamRiverReachKm: 90,
        riverName: river,
        crossSectionsCount: 42,
        affectedZones: [
          {
            id: `az-jk-${paddedId}-1`,
            name: `${dq.district} Downstream Canyon Habitation`,
            distanceDownstreamKm: 6.4,
            waveArrivalTimeMinutes: 15,
            peakFloodDepthMeters: 9.0,
            flowVelocityMps: 6.0,
            estimatedPopulation: 4800,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Mountain Terrace Shelters`
          },
          {
            id: `az-jk-${paddedId}-2`,
            name: `${river} Valley Highway Corridor & Colony`,
            distanceDownstreamKm: 18.8,
            waveArrivalTimeMinutes: 43,
            peakFloodDepthMeters: 5.6,
            flowVelocityMps: 4.0,
            estimatedPopulation: 10800,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Sub-Divisional Elevated Administrative Complex'
          },
          {
            id: `az-jk-${paddedId}-3`,
            name: 'Valley Basin Ingress Settlement',
            distanceDownstreamKm: 38.5,
            waveArrivalTimeMinutes: 102,
            peakFloodDepthMeters: 3.2,
            flowVelocityMps: 2.1,
            estimatedPopulation: 17500,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Elevated Transit Terminal'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `jk-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying concrete monolith structural integrity and radial crest gates in ${dq.district}.`,
          date: '2026-08-16'
        },
        {
          id: `jk-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-08'
        },
        {
          id: `jk-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} Himalayan gorge flood corridors.`,
          date: '2026-08-12',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `jk-img-${paddedId}-drone`,
          title: 'Drone Inspection Orthomosaic Survey',
          type: 'drone',
          url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
          caption: 'Aerial photogrammetry confirming crest road integrity and downstream spillway plunge pool stability.',
          date: '2026-08-19',
          resolutionOrAltitude: 'Altitude: 95m AGL'
        }
      ];

      result.push({
        id,
        name: damName,
        state: 'Jammu and Kashmir',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(2100 + ((globalIdCounter * 450) % 11500)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-16',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'NHPC & JKSPDC Dam Safety Cell & CWC Indus Commission',
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

  cachedJammuKashmirDams = result;
  return result;
}

export function getJammuKashmirSummaryStats() {
  const dams = getJammuKashmir18Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Jammu and Kashmir',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & JKSPDC / NHPC Dam Safety Wings'
  };
}
