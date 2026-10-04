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

export const PUNJAB_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'pb-dam-ranjitsagar',
    name: 'Ranjit Sagar Dam (Thein Dam)',
    state: 'Punjab',
    district: 'Pathankot',
    river: 'Ravi',
    basin: 'Indus / Ravi Basin',
    yearCompleted: 2001,
    damType: 'Earth-Core Gravel-Shell Embankment Dam',
    heightMeters: 160.0, // Highest earth-core gravel shell dam in India
    crestLengthMeters: 617.0,
    fullReservoirLevelMeters: 527.91,
    maximumWaterLevelMeters: 530.0,
    crestLevelMeters: 540.0,
    currentWaterLevelMeters: 522.4,
    grossStorageCapacityLiters: 3280000000000, // 3.28 Trillion Liters (115.8 TMC)
    currentWaterVolumeLiters: 2940000000000,
    spillwayCapacityCumecs: 20600,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-21',
    inspectingOfficer: 'Punjab Water Resources Dept (PWRD) Dam Safety & CWC'
  },
  {
    id: 'pb-dam-shahpurkandi',
    name: 'Shahpur Kandi Dam',
    state: 'Punjab',
    district: 'Pathankot',
    river: 'Ravi',
    basin: 'Indus / Ravi Basin',
    yearCompleted: 2024,
    damType: 'Concrete Gravity with Earth Embankment',
    heightMeters: 55.5,
    crestLengthMeters: 855.0,
    fullReservoirLevelMeters: 403.2,
    maximumWaterLevelMeters: 405.0,
    crestLevelMeters: 408.0,
    currentWaterLevelMeters: 399.5,
    grossStorageCapacityLiters: 120000000000,
    currentWaterVolumeLiters: 105000000000,
    spillwayCapacityCumecs: 23500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-19',
    inspectingOfficer: 'Shahpurkandi Dam Project Directorate & CWC'
  },
  {
    id: 'pb-dam-harike',
    name: 'Harike Barrage (Confluence of Beas & Sutlej)',
    state: 'Punjab',
    district: 'Tarn Taran',
    river: 'Beas & Sutlej',
    basin: 'Indus Basin',
    yearCompleted: 1953,
    damType: 'Concrete Barrage with Sluice Gates',
    heightMeters: 14.5,
    crestLengthMeters: 636.0,
    fullReservoirLevelMeters: 210.3,
    maximumWaterLevelMeters: 211.5,
    crestLevelMeters: 214.0,
    currentWaterLevelMeters: 209.6,
    grossStorageCapacityLiters: 68000000000,
    currentWaterVolumeLiters: 58000000000,
    spillwayCapacityCumecs: 18400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'Punjab Irrigation Dept Harike Headworks Division'
  },
  {
    id: 'pb-dam-ropar',
    name: 'Ropar Headworks Barrage',
    state: 'Punjab',
    district: 'Rupnagar',
    river: 'Sutlej',
    basin: 'Indus / Sutlej Basin',
    yearCompleted: 1954,
    damType: 'Concrete & Masonry Barrage',
    heightMeters: 12.8,
    crestLengthMeters: 580.0,
    fullReservoirLevelMeters: 265.5,
    maximumWaterLevelMeters: 267.0,
    crestLevelMeters: 269.5,
    currentWaterLevelMeters: 264.8,
    grossStorageCapacityLiters: 45000000000,
    currentWaterVolumeLiters: 39000000000,
    spillwayCapacityCumecs: 14200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Punjab Irrigation Sirhind Canal Headworks'
  },
  {
    id: 'pb-dam-dholbaha',
    name: 'Dholbaha Dam (Kandi Watershed)',
    state: 'Punjab',
    district: 'Hoshiarpur',
    river: 'Dholbaha Khad',
    basin: 'Beas Sub-basin',
    yearCompleted: 1987,
    damType: 'Earthen Embankment with Chute Spillway',
    heightMeters: 38.8,
    crestLengthMeters: 450.0,
    fullReservoirLevelMeters: 421.5,
    maximumWaterLevelMeters: 423.0,
    crestLevelMeters: 426.0,
    currentWaterLevelMeters: 418.2,
    grossStorageCapacityLiters: 36000000000,
    currentWaterVolumeLiters: 31000000000,
    spillwayCapacityCumecs: 1450,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'Punjab WRD Kandi Area Dam Division Hoshiarpur'
  }
];

export interface PunjabDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const PUNJAB_DISTRICT_QUOTAS: PunjabDistrictQuota[] = [
  { district: 'Hoshiarpur', quota: 6, primaryBasin: 'Beas & Sutlej Kandi Basin', majorRivers: ['Dholbaha', 'Janauri', 'Maili', 'Damsal', 'Chohal', 'Thana'] },
  { district: 'Pathankot', quota: 4, primaryBasin: 'Ravi & Chakki Basin', majorRivers: ['Ravi', 'Chakki', 'Ujh'] },
  { district: 'SAS Nagar Mohali', quota: 3, primaryBasin: 'Ghaggar Basin', majorRivers: ['Siswan', 'Mirzapur', 'Perch', 'Jayanti'] },
  { district: 'Rupnagar', quota: 2, primaryBasin: 'Sutlej Basin', majorRivers: ['Sutlej', 'Sirsa', 'Swan'] },
  { district: 'Tarn Taran', quota: 1, primaryBasin: 'Beas & Sutlej Confluence', majorRivers: ['Beas', 'Sutlej'] }
];

// Ensure sum is exactly 16
const initialSumPB = PUNJAB_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumPB !== 16) {
  const diff = 16 - initialSumPB;
  PUNJAB_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedPunjabDams: Dam[] | null = null;

const PB_NAMING_PATTERNS = [
  'Dam', 'Barrage', 'Headworks', 'Reservoir', 'Sagar',
  'Weir', 'Embankment Scheme', 'Check Dam Project', 'Kandi Project'
];

const PB_TOPONYMS = [
  'Ranjit Sagar', 'Thein', 'Shahpur Kandi', 'Harike', 'Ropar', 'Dholbaha',
  'Siswan', 'Mirzapur', 'Perch', 'Janauri', 'Maili', 'Damsal',
  'Chohal', 'Thana', 'Jayanti', 'Saleran'
];

export function getPunjab16Dams(): Dam[] {
  if (cachedPunjabDams) return cachedPunjabDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  PUNJAB_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-pb-${paddedId}`;

      const matchedNotable = PUNJAB_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = PB_TOPONYMS[(globalIdCounter + i * 2) % PB_TOPONYMS.length];
      const pattern = PB_NAMING_PATTERNS[(i + globalIdCounter) % PB_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((22.0 + ((globalIdCounter * 6.5) % 45)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(350 + ((globalIdCounter * 45) % 1100));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((260 + ((globalIdCounter * 18.5) % 280)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.4 + ((globalIdCounter % 4) * 0.3)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.5).toFixed(2));

      const fillRatio = 0.68 + ((globalIdCounter % 26) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.6 + (fillRatio * 2.6)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((60 + ((globalIdCounter * 35) % 550)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.50, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1975 + (globalIdCounter % 48));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Earthen Embankment with Clay Core' :
        globalIdCounter % 3 === 1 ? 'Concrete Barrage with Sluice Gates' : 'Composite Rock-fill & Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 80) cond = 'good';
        else if (condHash < 93) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 36.0 : cond === 'alert' ? 20.5 : cond === 'moderate' ? 7.9 : 1.7;
      const turbidity = cond === 'critical' ? 63 : cond === 'alert' ? 29 : cond === 'moderate' ? 8.4 : 1.6;
      const seepageRecord: SeepageRecord = {
        id: `pb-sep-${paddedId}`,
        timestamp: '2026-08-17 07:15',
        location: `Downstream toe drainage ditch and relief wells in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.25)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.4)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal silt seepage from Siwalik boulder conglomerate contact'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Toe drain reaming with pressurized water surging and sand filter pack inspection.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `pb-wp-${paddedId}`,
        timestamp: '2026-08-15 15:45',
        reservoirLevelMeters: currentLevel,
        location: `Canal intake head regulator and spillway sluice in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.2 : cond === 'alert' ? 1.5 : 0.4,
        rotationalSpeedRpm: cond === 'critical' ? 45 : cond === 'alert' ? 22 : 6,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex baffle plates engaged; floating pontoon boom secured across intake.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-PB-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.66).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.62).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.82).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.72),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Embankment clay core filter interface in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-PB-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 16.5 : cond === 'alert' ? 8.2 : 2.6,
          normalBaselineMm: 2.1,
          thresholdAlertMm: 11.5,
          tiltRateMmPerMonth: cond === 'critical' ? 0.84 : cond === 'alert' ? 0.38 : 0.04,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-PB-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.018,
          designBasisMceG: 0.30,
          ambientMicrotremorsHz: 4.1,
          status: 'Normal',
          lastTremorDate: '2026-05-28 (M2.2 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical' || dq.district === 'Pathankot' || dq.district === 'Hoshiarpur') ? 'High' : 'Moderate',
        geologicalFormation: 'Sub-Himalayan Siwalik Upper Boulder Beds and foothill loess alluvial deposits',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Adits',
            description: 'Perforated horizontal drains drilled into reservoir rim abutments to relieve pore water uplift.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'Geobrugg Wire Mesh & Stone Pitching',
            description: 'Heavy wire mesh netting with dry stone pitching and rip-rap along reservoir slopes.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 6,
        rockBoltsInstalled: 2500,
        shotcreteAreaSqM: 19000,
        biorevetmentMeshType: 'Geobrugg High-Tensile Steel Wire Netting & Stone Pitching'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1120, monsoonPeak24hMm: 180, historicalDeviationPercent: 10.5 },
        { year: 2024, totalAnnualMm: 1040, monsoonPeak24hMm: 155, historicalDeviationPercent: 3.2 },
        { year: 2023, totalAnnualMm: 1250, monsoonPeak24hMm: 215, historicalDeviationPercent: 19.8 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `pb-eq-${paddedId}`,
          date: '2026-05-28',
          magnitudeRichter: 2.2,
          epicenterDistanceKm: 42,
          focalDepthKm: 16,
          measuredPgaDamG: 0.018,
          structuralInspectionSummary: 'Post-tremor instrumentation scan confirmed zero structural divergence.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(125 + ((globalIdCounter * 5) % 175)),
        breachFormationTimeHours: 2.4,
        peakBreachDischargeCumecs: Math.round(41000 + ((globalIdCounter * 1350) % 59000)),
        totalFloodDurationHours: 32,
        floodRecessionTimeHours: 52,
        totalInundationAreaSqKm: 300,
        downstreamRiverReachKm: 88,
        riverName: river,
        crossSectionsCount: 40,
        affectedZones: [
          {
            id: `az-pb-${paddedId}-1`,
            name: `${dq.district} Downstream Plains Village`,
            distanceDownstreamKm: 6.8,
            waveArrivalTimeMinutes: 17,
            peakFloodDepthMeters: 7.8,
            flowVelocityMps: 4.9,
            estimatedPopulation: 4700,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Mound Flood Shelters`
          },
          {
            id: `az-pb-${paddedId}-2`,
            name: `${river} Canal Command Agricultural Township`,
            distanceDownstreamKm: 19.8,
            waveArrivalTimeMinutes: 48,
            peakFloodDepthMeters: 5.0,
            flowVelocityMps: 3.3,
            estimatedPopulation: 10200,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Grain Market High-Plinth Storage Complex'
          },
          {
            id: `az-pb-${paddedId}-3`,
            name: 'Downstream Doaba Plain Settlement',
            distanceDownstreamKm: 39.5,
            waveArrivalTimeMinutes: 110,
            peakFloodDepthMeters: 3.0,
            flowVelocityMps: 1.9,
            estimatedPopulation: 16800,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Elevated Transit Terminal'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `pb-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying embankment rip-rap and radial gates in ${dq.district}.`,
          date: '2026-08-16'
        },
        {
          id: `pb-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-08'
        },
        {
          id: `pb-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} flood discharge pathways.`,
          date: '2026-08-12',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `pb-img-${paddedId}-drone`,
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
        state: 'Punjab',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(1800 + ((globalIdCounter * 390) % 9200)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-16',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'Punjab Water Resources Dept (PWRD) Dam Safety & CWC',
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

  cachedPunjabDams = result;
  return result;
}

export function getPunjabSummaryStats() {
  const dams = getPunjab16Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Punjab',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & Punjab Water Resources Department'
  };
}
