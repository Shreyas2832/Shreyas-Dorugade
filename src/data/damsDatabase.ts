import { Dam, DamCondition } from '../types';
import { enrichDamWithLocationAndImagery } from '../utils/damImageryGenerator';
import { MAJOR_DAMS } from './majorDamsData';
import { STATE_DAM_STATS, TOTAL_NATIONAL_DAMS } from './stateStats';
import { getMaharashtra2394Dams, getMaharashtraSummaryStats } from './maharashtraDamsData';
import { getMadhyaPradesh906Dams, getMadhyaPradeshSummaryStats } from './madhyaPradeshDamsData';
import { getGujarat632Dams, getGujaratSummaryStats } from './gujaratDamsData';
import { getKarnataka231Dams, getKarnatakaSummaryStats } from './karnatakaDamsData';
import { getRajasthan211Dams, getRajasthanSummaryStats } from './rajasthanDamsData';
import { getOdisha204Dams, getOdishaSummaryStats } from './odishaDamsData';
import { getTelangana180Dams, getTelanganaSummaryStats } from './telanganaDamsData';
import { getAndhraPradesh167Dams, getAndhraPradeshSummaryStats } from './andhraPradeshDamsData';
import { getUttarPradesh130Dams, getUttarPradeshSummaryStats } from './uttarPradeshDamsData';
import { getTamilNadu116Dams, getTamilNaduSummaryStats } from './tamilNaduDamsData';
import { getKerala62Dams, getKeralaSummaryStats } from './keralaDamsData';
import { getJharkhand42Dams, getJharkhandSummaryStats } from './jharkhandDamsData';
import { getWestBengal33Dams, getWestBengalSummaryStats } from './westBengalDamsData';
import { getUttarakhand26Dams, getUttarakhandSummaryStats } from './uttarakhandDamsData';
import { getHimachalPradesh23Dams, getHimachalPradeshSummaryStats } from './himachalPradeshDamsData';
import { getJammuKashmir18Dams, getJammuKashmirSummaryStats } from './jammuKashmirDamsData';
import { getPunjab16Dams, getPunjabSummaryStats } from './punjabDamsData';
import { getChhattisgarh28Dams, getChhattisgarhSummaryStats } from './chhattisgarhDamsData';
import { getAssamNE16Dams, getAssamNESummaryStats } from './assamNorthEastDamsData';

// Additional prominent dams across other states
const ADDITIONAL_STATE_DAMS: Partial<Dam>[] = [
  {
    id: 'dam-mettur',
    name: 'Mettur Dam (Stanley Reservoir)',
    state: 'Tamil Nadu',
    district: 'Salem',
    river: 'Kaveri',
    basin: 'Kaveri Basin',
    yearCompleted: 1934,
    damType: 'Masonry Gravity',
    heightMeters: 65.2,
    crestLengthMeters: 1615,
    fullReservoirLevelMeters: 120.0,
    maximumWaterLevelMeters: 122.0,
    crestLevelMeters: 125.0,
    currentWaterLevelMeters: 118.2,
    grossStorageCapacityLiters: 2640000000000,
    currentWaterVolumeLiters: 2450000000000,
    spillwayCapacityCumecs: 12970,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Tamil Nadu WRD Dam Safety Cell'
  },
  {
    id: 'dam-indirasagar',
    name: 'Indira Sagar Dam',
    state: 'Madhya Pradesh',
    district: 'Khandwa',
    river: 'Narmada',
    basin: 'Narmada Basin',
    yearCompleted: 2005,
    damType: 'Concrete Gravity',
    heightMeters: 92.0,
    crestLengthMeters: 653,
    fullReservoirLevelMeters: 262.13,
    maximumWaterLevelMeters: 263.35,
    crestLevelMeters: 267.0,
    currentWaterLevelMeters: 260.4,
    grossStorageCapacityLiters: 12220000000000, // Largest reservoir in India by storage (12.22 Trillion Liters!)
    currentWaterVolumeLiters: 10980000000000,
    spillwayCapacityCumecs: 83500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Narmada Hydroelectric Development Corporation'
  },
  {
    id: 'dam-rihand',
    name: 'Rihand Dam (Govind Ballabh Pant Sagar)',
    state: 'Uttar Pradesh',
    district: 'Sonbhadra',
    river: 'Rihand',
    basin: 'Ganga Basin',
    yearCompleted: 1962,
    damType: 'Concrete Gravity',
    heightMeters: 91.44,
    crestLengthMeters: 934.2,
    fullReservoirLevelMeters: 268.22,
    maximumWaterLevelMeters: 270.0,
    crestLevelMeters: 273.5,
    currentWaterLevelMeters: 264.8,
    grossStorageCapacityLiters: 10600000000000,
    currentWaterVolumeLiters: 8900000000000,
    spillwayCapacityCumecs: 16707,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-07-19',
    inspectingOfficer: 'UP Irrigation & Water Resources Dept'
  },
  {
    id: 'dam-idukki',
    name: 'Idukki Arch Dam',
    state: 'Kerala',
    district: 'Idukki',
    river: 'Periyar',
    basin: 'Periyar Basin',
    yearCompleted: 1976,
    damType: 'Double Curvature Parabolic Arch Dam',
    heightMeters: 168.91,
    crestLengthMeters: 365.85,
    fullReservoirLevelMeters: 732.43, // 2403 feet
    maximumWaterLevelMeters: 733.0,
    crestLevelMeters: 736.0,
    currentWaterLevelMeters: 728.5,
    grossStorageCapacityLiters: 1996000000000,
    currentWaterVolumeLiters: 1780000000000,
    spillwayCapacityCumecs: 5012, // Through Cheruthoni Dam spillway
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-25',
    inspectingOfficer: 'Kerala State Electricity Board (KSEB) Dam Safety'
  },
  {
    id: 'dam-ranapratap',
    name: 'Rana Pratap Sagar Dam',
    state: 'Rajasthan',
    district: 'Chittorgarh',
    river: 'Chambal',
    basin: 'Ganga / Yamuna Basin',
    yearCompleted: 1970,
    damType: 'Masonry Gravity',
    heightMeters: 53.8,
    crestLengthMeters: 1143,
    fullReservoirLevelMeters: 352.81,
    maximumWaterLevelMeters: 354.2,
    crestLevelMeters: 356.5,
    currentWaterLevelMeters: 350.2,
    grossStorageCapacityLiters: 2898000000000,
    currentWaterVolumeLiters: 2450000000000,
    spillwayCapacityCumecs: 18408,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-05',
    inspectingOfficer: 'Rajasthan WRD Dam Safety Cell'
  },
  {
    id: 'dam-almatti',
    name: 'Almatti Dam (Lal Bahadur Shastri Sagar)',
    state: 'Karnataka',
    district: 'Bagalkot',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 2005,
    damType: 'Concrete Gravity & Earthen Embankment',
    heightMeters: 52.25,
    crestLengthMeters: 1565,
    fullReservoirLevelMeters: 519.6,
    maximumWaterLevelMeters: 524.25,
    crestLevelMeters: 528.0,
    currentWaterLevelMeters: 518.2,
    grossStorageCapacityLiters: 3440000000000,
    currentWaterVolumeLiters: 3120000000000,
    spillwayCapacityCumecs: 31000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'Krishna Bhagya Jala Nigam Ltd'
  },
  {
    id: 'dam-jayakwadi',
    name: 'Jayakwadi Dam (Nath Sagar)',
    state: 'Maharashtra',
    district: 'Chhatrapati Sambhajinagar (Aurangabad)',
    river: 'Godavari',
    basin: 'Godavari Basin',
    yearCompleted: 1976,
    damType: 'Earthen Embankment with Central Masonry Spillway',
    heightMeters: 41.3,
    crestLengthMeters: 10000, // 10 km long
    fullReservoirLevelMeters: 463.91,
    maximumWaterLevelMeters: 465.0,
    crestLevelMeters: 468.0,
    currentWaterLevelMeters: 461.5,
    grossStorageCapacityLiters: 2909000000000,
    currentWaterVolumeLiters: 2380000000000,
    spillwayCapacityCumecs: 18123,
    condition: 'alert',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Maharashtra WRD Godavari Basin'
  },
  {
    id: 'dam-srisailam',
    name: 'Srisailam Dam',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1980,
    damType: 'Concrete Gravity',
    heightMeters: 145.1,
    crestLengthMeters: 512,
    fullReservoirLevelMeters: 269.75, // 885 feet
    maximumWaterLevelMeters: 271.88,
    crestLevelMeters: 275.0,
    currentWaterLevelMeters: 267.4,
    grossStorageCapacityLiters: 8722000000000,
    currentWaterVolumeLiters: 7650000000000,
    spillwayCapacityCumecs: 37950,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-20',
    inspectingOfficer: 'Andhra Pradesh Water Resources Department'
  },
  {
    id: 'dam-subansiri',
    name: 'Subansiri Lower Hydroelectric Project',
    state: 'Assam & North East',
    district: 'Dhemaji',
    river: 'Subansiri',
    basin: 'Brahmaputra Basin',
    yearCompleted: 2024,
    damType: 'Concrete Gravity',
    heightMeters: 116.0,
    crestLengthMeters: 284,
    fullReservoirLevelMeters: 205.0,
    maximumWaterLevelMeters: 208.0,
    crestLevelMeters: 210.0,
    currentWaterLevelMeters: 198.5,
    grossStorageCapacityLiters: 1370000000000,
    currentWaterVolumeLiters: 1150000000000,
    spillwayCapacityCumecs: 33800,
    condition: 'alert',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-05',
    inspectingOfficer: 'NHPC Dam Safety Cell & CWC'
  }
];

// Helper to synthesize complete telemetry and hydrodynamic profiles for any dam record
function enrichDamData(partialDam: Partial<Dam>): Dam {
  const base = MAJOR_DAMS.find(d => d.id === partialDam.id);
  if (base) return base;

  const cond: DamCondition = partialDam.condition || 'good';
  const name = partialDam.name || 'Dam';
  const river = partialDam.river || 'River';
  const state = partialDam.state || 'India';
  const grossLiters = partialDam.grossStorageCapacityLiters || 1500000000000;
  const currentLiters = partialDam.currentWaterVolumeLiters || Math.round(grossLiters * 0.85);
  const frl = partialDam.fullReservoirLevelMeters || 250;
  const curLvl = partialDam.currentWaterLevelMeters || frl - 3.5;

  return {
    id: partialDam.id || `dam-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    state,
    district: partialDam.district || 'State District',
    river,
    basin: partialDam.basin || `${river} Basin`,
    yearCompleted: partialDam.yearCompleted || 1985,
    damType: partialDam.damType || 'Concrete Gravity / Composite',
    heightMeters: partialDam.heightMeters || 65,
    crestLengthMeters: partialDam.crestLengthMeters || 1200,
    fullReservoirLevelMeters: frl,
    maximumWaterLevelMeters: partialDam.maximumWaterLevelMeters || frl + 2,
    crestLevelMeters: partialDam.crestLevelMeters || frl + 4.5,
    currentWaterLevelMeters: curLvl,
    grossStorageCapacityLiters: grossLiters,
    currentWaterVolumeLiters: currentLiters,
    spillwayCapacityCumecs: partialDam.spillwayCapacityCumecs || 15000,
    condition: cond,
    hazardClass: partialDam.hazardClass || 'Category 1 (High)',
    lastInspectionDate: partialDam.lastInspectionDate || '2026-08-10',
    inspectingOfficer: partialDam.inspectingOfficer || 'State Dam Safety Organization (SDSO)',
    seepageRecords: [
      {
        id: `sep-${name.slice(0, 3).toLowerCase()}-01`,
        timestamp: '2026-08-04 10:15 IST',
        location: 'Foundation Gallery Relief Well #8',
        flowRateLps: cond === 'critical' ? 28.5 : cond === 'alert' ? 14.2 : cond === 'moderate' ? 7.5 : 3.2,
        turbidityNtu: cond === 'critical' ? 46.0 : cond === 'alert' ? 22.4 : cond === 'moderate' ? 8.1 : 2.6,
        appearance: cond === 'critical' ? 'Heavy discolored clayey slurry' : cond === 'alert' ? 'Turbid colloidal silt wash' : 'Clear seepage drainage',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : cond === 'moderate' ? 'Medium' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : 'Flushed & Filtered',
        cleaningDetails: 'Relief wells reamed with pressurized water jets; gravel packing verified.'
      }
    ],
    whirlpoolRecords: [
      {
        id: `wh-${name.slice(0, 3).toLowerCase()}-01`,
        timestamp: '2026-07-29 14:40 IST',
        reservoirLevelMeters: curLvl,
        location: 'Spillway Bay 2 Undersluice Bellmouth',
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : 'Type 2 (Depression)',
        coreDiameterMeters: cond === 'critical' ? 1.6 : 0.7,
        rotationalSpeedRpm: cond === 'critical' ? 38 : 18,
        trashRackDangerLevel: cond === 'critical' ? 'High' : 'Normal',
        intakeActionTaken: 'Anti-vortex baffle plates checked; vortex dissipation verified.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: `PZ-${name.slice(0, 4).toUpperCase()}-01`,
        currentHeadMeters: curLvl - 8,
        normalBaselineMeters: curLvl - 10,
        thresholdAlertMeters: curLvl - 4,
        porePressureKpa: Math.round((curLvl - 8) * 9.81 * 10),
        status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
        unitLocation: 'Foundation Bedrock Grout Interface'
      },
      inclinometer: {
        stationId: `INC-${name.slice(0, 4).toUpperCase()}-CREST`,
        currentDisplacementMm: cond === 'critical' ? 6.2 : cond === 'alert' ? 4.1 : 1.8,
        normalBaselineMm: 1.5,
        thresholdAlertMm: 5.0,
        tiltRateMmPerMonth: cond === 'critical' ? 0.6 : 0.05,
        status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
        axis: 'Upstream-Downstream Axis'
      },
      seismograph: {
        stationId: `SM-${name.slice(0, 4).toUpperCase()}-CENTRAL`,
        peakGroundAccelerationG: 0.018,
        designBasisMceG: 0.32,
        ambientMicrotremorsHz: 4.1,
        status: 'Normal',
        lastTremorDate: '2026-04-12 (M2.5 Regional microtremor)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: cond === 'critical' ? 'High' : 'Moderate',
      geologicalFormation: 'Bedrock strata with regional dip slope joints',
      precautionsTaken: [
        {
          title: 'Sub-surface Horizontal Drainage Perforations',
          description: 'Drilled relief holes discharging hydrostatic pressure from reservoir rim abutment.',
          status: 'Installed & Active',
          iconName: 'Droplets'
        },
        {
          title: 'High-Tensile Wire Mesh & Shotcrete Revetment',
          description: 'Geobrugg high-tensile steel mesh anchored with deep rock bolts on fractured slope face.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        }
      ],
      drainageAditsCount: 4,
      rockBoltsInstalled: 2400,
      shotcreteAreaSqM: 18000,
      biorevetmentMeshType: 'Biaxial High-Tensile Steel Wire Netting'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 1420, monsoonPeak24hMm: 220, historicalDeviationPercent: 11.4 },
      { year: 2024, totalAnnualMm: 1310, monsoonPeak24hMm: 180, historicalDeviationPercent: 2.8 },
      { year: 2023, totalAnnualMm: 1540, monsoonPeak24hMm: 260, historicalDeviationPercent: 18.0 }
    ],
    earthquakeHistory: [
      {
        id: `eq-${name.slice(0, 3).toLowerCase()}-01`,
        date: '2026-04-12',
        magnitudeRichter: 2.5,
        epicenterDistanceKm: 45,
        focalDepthKm: 14,
        measuredPgaDamG: 0.018,
        structuralInspectionSummary: 'Instrumentation post-tremor check confirmed zero structural divergence.'
      }
    ],
    hydrodynamicBreach: {
      breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
      breachWidthMeters: 160,
      breachFormationTimeHours: 2.6,
      peakBreachDischargeCumecs: 68000,
      totalFloodDurationHours: 32,
      floodRecessionTimeHours: 52,
      totalInundationAreaSqKm: 480,
      downstreamRiverReachKm: 100,
      riverName: river,
      crossSectionsCount: 40,
      affectedZones: [
        { id: 'az1', name: `${name} Downstream Valley`, distanceDownstreamKm: 12, waveArrivalTimeMinutes: 24, peakFloodDepthMeters: 18.2, flowVelocityMps: 8.4, estimatedPopulation: 18000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'High Ridge Shelters' },
        { id: 'az2', name: `${river} Riverine District Hub`, distanceDownstreamKm: 38, waveArrivalTimeMinutes: 62, peakFloodDepthMeters: 11.4, flowVelocityMps: 5.6, estimatedPopulation: 85000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Tehsil Complex High Grounds' },
        { id: 'az3', name: `${river} Plain Agricultural Belt`, distanceDownstreamKm: 76, waveArrivalTimeMinutes: 130, peakFloodDepthMeters: 6.1, flowVelocityMps: 3.2, estimatedPopulation: 160000, evacuationStatus: 'High Alert', safeShelterZone: 'Highway Elevated Bypass' }
      ]
    },
    images: [
      {
        id: `img-${name.slice(0, 3).toLowerCase()}-good`,
        title: `${name} Crest & Spillway Gates (Operational Condition)`,
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Standard operational inspection confirming healthy concrete facade and active drainage.',
        date: '2026-08-10'
      },
      {
        id: `img-${name.slice(0, 3).toLowerCase()}-bad`,
        title: 'Toe Drain Maintenance & Seepage Investigation View',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        caption: 'Detailed structural scan of drain conduits and sediment collection sumps.',
        date: '2026-08-04'
      },
      {
        id: `img-${name.slice(0, 3).toLowerCase()}-sat`,
        title: 'Satellite Multispectral Inundation Corridor Map',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} flood paths.`,
        date: '2026-08-08',
        resolutionOrAltitude: '10m Resolution'
      },
      {
        id: `img-${name.slice(0, 3).toLowerCase()}-drone`,
        title: 'Drone Inspection Orthomosaic Survey',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Aerial photogrammetry verifying crest road alignment and downstream toe stability.',
        date: '2026-08-12',
        resolutionOrAltitude: 'Altitude: 90m AGL'
      }
    ]
  };
}

// Combine all pre-configured benchmark dams
const ALL_SEED_DAMS: Dam[] = [
  ...MAJOR_DAMS,
  ...ADDITIONAL_STATE_DAMS.map(d => enrichDamData(d))
];

// Lazy cached union of all dams
let cachedCombinedDams: Dam[] | null = null;

export function getAllDams(): Dam[] {
  if (cachedCombinedDams) return cachedCombinedDams;

  const mhDams = getMaharashtra2394Dams();
  const mpDams = getMadhyaPradesh906Dams();
  const gjDams = getGujarat632Dams();
  const kaDams = getKarnataka231Dams();
  const rjDams = getRajasthan211Dams();
  const odDams = getOdisha204Dams();
  const tgDams = getTelangana180Dams();
  const apDams = getAndhraPradesh167Dams();
  const upDams = getUttarPradesh130Dams();
  const tnDams = getTamilNadu116Dams();
  const klDams = getKerala62Dams();
  const jhDams = getJharkhand42Dams();
  const wbDams = getWestBengal33Dams();
  const ukDams = getUttarakhand26Dams();
  const hpDams = getHimachalPradesh23Dams();
  const jkDams = getJammuKashmir18Dams();
  const pbDams = getPunjab16Dams();
  const cgDams = getChhattisgarh28Dams();
  const aneDams = getAssamNE16Dams();

  const coveredStates = new Set([
    'Maharashtra', 
    'Madhya Pradesh', 
    'Gujarat', 
    'Karnataka',
    'Rajasthan',
    'Odisha',
    'Telangana',
    'Andhra Pradesh',
    'Uttar Pradesh',
    'Tamil Nadu',
    'Kerala',
    'Jharkhand',
    'West Bengal',
    'Uttarakhand',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Punjab',
    'Chhattisgarh',
    'Assam and North East'
  ]);
  const otherSeedDams = ALL_SEED_DAMS.filter(d => !coveredStates.has(d.state));

  cachedCombinedDams = [
    ...mhDams, 
    ...mpDams, 
    ...gjDams, 
    ...kaDams, 
    ...rjDams,
    ...odDams,
    ...tgDams,
    ...apDams,
    ...upDams,
    ...tnDams,
    ...klDams,
    ...jhDams,
    ...wbDams,
    ...ukDams,
    ...hpDams,
    ...jkDams,
    ...pbDams,
    ...cgDams,
    ...aneDams,
    ...otherSeedDams
  ].map(d => enrichDamWithLocationAndImagery(d));
  return cachedCombinedDams;
}

export function getDamById(id: string): Dam | undefined {
  const all = getAllDams();
  return all.find(d => d.id === id);
}

export function getMaharashtraDams(): Dam[] {
  return getMaharashtra2394Dams();
}

export function getMadhyaPradeshDams(): Dam[] {
  return getMadhyaPradesh906Dams();
}

export function getGujaratDams(): Dam[] {
  return getGujarat632Dams();
}

export function getKarnatakaDams(): Dam[] {
  return getKarnataka231Dams();
}

export function getRajasthanDams(): Dam[] {
  return getRajasthan211Dams();
}

export function getOdishaDams(): Dam[] {
  return getOdisha204Dams();
}

export function getTelanganaDams(): Dam[] {
  return getTelangana180Dams();
}

export function getAndhraPradeshDams(): Dam[] {
  return getAndhraPradesh167Dams();
}

export function getUttarPradeshDams(): Dam[] {
  return getUttarPradesh130Dams();
}

export function getTamilNaduDams(): Dam[] {
  return getTamilNadu116Dams();
}

export function getKeralaDams(): Dam[] {
  return getKerala62Dams();
}

export function getJharkhandDams(): Dam[] {
  return getJharkhand42Dams();
}

export function getWestBengalDams(): Dam[] {
  return getWestBengal33Dams();
}

export function getUttarakhandDams(): Dam[] {
  return getUttarakhand26Dams();
}

export function getHimachalPradeshDams(): Dam[] {
  return getHimachalPradesh23Dams();
}

export function getJammuKashmirDams(): Dam[] {
  return getJammuKashmir18Dams();
}

export function getPunjabDams(): Dam[] {
  return getPunjab16Dams();
}

export function getChhattisgarhDams(): Dam[] {
  return getChhattisgarh28Dams();
}

export function getAssamNEDams(): Dam[] {
  return getAssamNE16Dams();
}

export { 
  getMaharashtraSummaryStats, 
  getMadhyaPradeshSummaryStats, 
  getGujaratSummaryStats, 
  getKarnatakaSummaryStats,
  getRajasthanSummaryStats,
  getOdishaSummaryStats,
  getTelanganaSummaryStats,
  getAndhraPradeshSummaryStats,
  getUttarPradeshSummaryStats,
  getTamilNaduSummaryStats,
  getKeralaSummaryStats,
  getJharkhandSummaryStats,
  getWestBengalSummaryStats,
  getUttarakhandSummaryStats,
  getHimachalPradeshSummaryStats,
  getJammuKashmirSummaryStats,
  getPunjabSummaryStats,
  getChhattisgarhSummaryStats,
  getAssamNESummaryStats
};

export function getStateStats(): typeof STATE_DAM_STATS {
  return STATE_DAM_STATS;
}

export function getTotalDamsCount(): number {
  return TOTAL_NATIONAL_DAMS;
}
