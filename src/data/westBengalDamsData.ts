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

export const WEST_BENGAL_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'wb-dam-kangsabati',
    name: 'Kangsabati Kumari Dam (Mukutmanipur)',
    state: 'West Bengal',
    district: 'Bankura',
    river: 'Kangsabati & Kumari',
    basin: 'Kangsabati River Basin',
    yearCompleted: 1965,
    damType: 'Earthen Embankment (Second Longest in India)',
    heightMeters: 38.1,
    crestLengthMeters: 10800.0, // 10.8 km Crest!
    fullReservoirLevelMeters: 134.11,
    maximumWaterLevelMeters: 135.5,
    crestLevelMeters: 138.0,
    currentWaterLevelMeters: 131.4,
    grossStorageCapacityLiters: 1044000000000, // 1.044 Trillion Liters
    currentWaterVolumeLiters: 920000000000,
    spillwayCapacityCumecs: 14158,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-16',
    inspectingOfficer: 'West Bengal Irrigation & Waterways Dept (I&WD) Dam Safety Cell'
  },
  {
    id: 'wb-dam-teesta',
    name: 'Teesta Barrage (Gajoldoba)',
    state: 'West Bengal',
    district: 'Jalpaiguri',
    river: 'Teesta',
    basin: 'Brahmaputra / Teesta Basin',
    yearCompleted: 1998,
    damType: 'Concrete Barrage with Radial Gates',
    heightMeters: 19.5,
    crestLengthMeters: 922.0,
    fullReservoirLevelMeters: 114.5,
    maximumWaterLevelMeters: 116.0,
    crestLevelMeters: 118.5,
    currentWaterLevelMeters: 113.8,
    grossStorageCapacityLiters: 112000000000,
    currentWaterVolumeLiters: 98000000000,
    spillwayCapacityCumecs: 20100,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-13',
    inspectingOfficer: 'Teesta Barrage Project Directorate'
  },
  {
    id: 'wb-dam-durgapur',
    name: 'Durgapur Barrage',
    state: 'West Bengal',
    district: 'Paschim Bardhaman',
    river: 'Damodar',
    basin: 'Damodar Basin',
    yearCompleted: 1955,
    damType: 'Concrete & Masonry Barrage',
    heightMeters: 11.58,
    crestLengthMeters: 692.0,
    fullReservoirLevelMeters: 64.46,
    maximumWaterLevelMeters: 65.5,
    crestLevelMeters: 67.5,
    currentWaterLevelMeters: 63.8,
    grossStorageCapacityLiters: 11000000000,
    currentWaterVolumeLiters: 9500000000,
    spillwayCapacityCumecs: 12500,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'DVC & WB I&WD Damodar Canal Division'
  },
  {
    id: 'wb-dam-bakreswar',
    name: 'Bakreswar Dam',
    state: 'West Bengal',
    district: 'Birbhum',
    river: 'Bakreswar',
    basin: 'Mayurakshi Basin',
    yearCompleted: 2000,
    damType: 'Earthen Embankment with Concrete Spillway',
    heightMeters: 15.2,
    crestLengthMeters: 2200.0,
    fullReservoirLevelMeters: 72.0,
    maximumWaterLevelMeters: 73.5,
    crestLevelMeters: 75.5,
    currentWaterLevelMeters: 70.8,
    grossStorageCapacityLiters: 65000000000,
    currentWaterVolumeLiters: 58000000000,
    spillwayCapacityCumecs: 2450,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'WB I&WD Mayurakshi North Division'
  },
  {
    id: 'wb-dam-hinglow',
    name: 'Hinglow Dam',
    state: 'West Bengal',
    district: 'Birbhum',
    river: 'Hinglow',
    basin: 'Ajay River Basin',
    yearCompleted: 1980,
    damType: 'Composite Earthen & Masonry Spillway',
    heightMeters: 21.0,
    crestLengthMeters: 4500.0,
    fullReservoirLevelMeters: 92.5,
    maximumWaterLevelMeters: 94.0,
    crestLevelMeters: 96.0,
    currentWaterLevelMeters: 90.2,
    grossStorageCapacityLiters: 88000000000,
    currentWaterVolumeLiters: 76000000000,
    spillwayCapacityCumecs: 2800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-02',
    inspectingOfficer: 'WB I&WD Ajay Basin Division'
  }
];

export interface WestBengalDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const WEST_BENGAL_DISTRICT_QUOTAS: WestBengalDistrictQuota[] = [
  { district: 'Bankura', quota: 8, primaryBasin: 'Kangsabati & Damodar Basin', majorRivers: ['Kangsabati', 'Kumari', 'Damodar', 'Dwarakeswar', 'Gandheswari'] },
  { district: 'Purulia', quota: 8, primaryBasin: 'Subarnarekha & Kangsabati Basin', majorRivers: ['Kangsabati', 'Kumari', 'Totko', 'Bandu', 'Sahrajhor'] },
  { district: 'Birbhum', quota: 5, primaryBasin: 'Mayurakshi & Ajay Basin', majorRivers: ['Mayurakshi', 'Ajay', 'Bakreswar', 'Hinglow', 'Kopai'] },
  { district: 'Paschim Bardhaman', quota: 3, primaryBasin: 'Damodar Basin', majorRivers: ['Damodar', 'Barakar', 'Nunia'] },
  { district: 'Jalpaiguri', quota: 3, primaryBasin: 'Teesta & Jaldhaka Basin', majorRivers: ['Teesta', 'Jaldhaka', 'Karala'] },
  { district: 'Darjeeling', quota: 3, primaryBasin: 'Teesta & Mahananda Basin', majorRivers: ['Teesta', 'Rangeet', 'Balason', 'Rammam'] },
  { district: 'Jhargram', quota: 2, primaryBasin: 'Subarnarekha Basin', majorRivers: ['Subarnarekha', 'Dulung', 'Tarafeny'] },
  { district: 'Murshidabad', quota: 1, primaryBasin: 'Ganga / Padma Basin', majorRivers: ['Bhagirathi', 'Ganga', 'Bhairab'] }
];

// Ensure sum is exactly 33
const initialSumWB = WEST_BENGAL_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumWB !== 33) {
  const diff = 33 - initialSumWB;
  WEST_BENGAL_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedWestBengalDams: Dam[] | null = null;

const WB_NAMING_PATTERNS = [
  'Dam', 'Barrage', 'Bandh', 'Reservoir', 'Jalashay',
  'Weir', 'Headworks', 'Project', 'Anicut', 'Embankment Scheme'
];

const WB_TOPONYMS = [
  'Kangsabati', 'Mukutmanipur', 'Teesta', 'Damodar', 'Mayurakshi', 'Bakreswar',
  'Hinglow', 'Kumari', 'Durgapur', 'Dwarakeswar', 'Jaldhaka', 'Rangeet',
  'Sahrajhor', 'Bandu', 'Ajay', 'Subarnarekha', 'Gajoldoba', 'Farakka'
];

export function getWestBengal33Dams(): Dam[] {
  if (cachedWestBengalDams) return cachedWestBengalDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  WEST_BENGAL_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-wb-${paddedId}`;

      const matchedNotable = WEST_BENGAL_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = WB_TOPONYMS[(globalIdCounter + i * 2) % WB_TOPONYMS.length];
      const pattern = WB_NAMING_PATTERNS[(i + globalIdCounter) % WB_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((18.0 + ((globalIdCounter * 5.8) % 40)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(550 + ((globalIdCounter * 65) % 3200));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((60 + ((globalIdCounter * 11.2) % 180)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.3 + ((globalIdCounter % 4) * 0.25)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.4).toFixed(2));

      const fillRatio = 0.65 + ((globalIdCounter % 30) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.5 + (fillRatio * 2.5)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((60 + ((globalIdCounter * 35) % 650)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.48, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1960 + (globalIdCounter % 63));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Earthen Embankment with Clay Hearting' :
        globalIdCounter % 3 === 1 ? 'Composite Concrete Spillway & Earth Flanks' : 'Concrete Barrage with Radial Gates'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 78) cond = 'good';
        else if (condHash < 92) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 35.5 : cond === 'alert' ? 20.2 : cond === 'moderate' ? 7.8 : 1.7;
      const turbidity = cond === 'critical' ? 62 : cond === 'alert' ? 28 : cond === 'moderate' ? 8.2 : 1.5;
      const seepageRecord: SeepageRecord = {
        id: `wb-sep-${paddedId}`,
        timestamp: '2026-08-16 07:45',
        location: `Downstream toe filter trench and drainage gallery in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.24)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.38)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal silt seepage through alluvial foundation sands'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Toe drain reaming with pressurized water surging and sand filter pack inspection.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `wb-wp-${paddedId}`,
        timestamp: '2026-08-14 15:15',
        reservoirLevelMeters: currentLevel,
        location: `Main canal regulator intake and barrage undersluice in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.2 : cond === 'alert' ? 1.4 : 0.4,
        rotationalSpeedRpm: cond === 'critical' ? 44 : cond === 'alert' ? 21 : 6,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex baffle plates engaged; trash-rack mechanical rake cleared.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-WB-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.65).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.61).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.81).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.70),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Impervious clay core interface in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-WB-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 16.2 : cond === 'alert' ? 8.1 : 2.5,
          normalBaselineMm: 2.0,
          thresholdAlertMm: 11.2,
          tiltRateMmPerMonth: cond === 'critical' ? 0.82 : cond === 'alert' ? 0.37 : 0.04,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-WB-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.016,
          designBasisMceG: 0.24,
          ambientMicrotremorsHz: 3.8,
          status: 'Normal',
          lastTremorDate: '2026-05-20 (M2.1 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical' || dq.district === 'Darjeeling' || dq.district === 'Jalpaiguri') ? 'High' : 'Moderate',
        geologicalFormation: 'Eastern Himalayan Siwalik molasse thrust zone & Chota Nagpur crystalline peneplain',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Perforations',
            description: 'Perforated horizontal drains drilled into reservoir rim abutments to relieve pore water uplift.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Netting & Concrete Revetment',
            description: 'Steel wire mesh revetments and rip-rap wave protection along reservoir rim banks.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 5,
        rockBoltsInstalled: 2200,
        shotcreteAreaSqM: 16500,
        biorevetmentMeshType: 'Geobrugg High-Tensile Steel Wire Netting'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1850, monsoonPeak24hMm: 240, historicalDeviationPercent: 14.5 },
        { year: 2024, totalAnnualMm: 1720, monsoonPeak24hMm: 210, historicalDeviationPercent: 5.2 },
        { year: 2023, totalAnnualMm: 1980, monsoonPeak24hMm: 285, historicalDeviationPercent: 21.0 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `wb-eq-${paddedId}`,
          date: '2026-05-20',
          magnitudeRichter: 2.1,
          epicenterDistanceKm: 65,
          focalDepthKm: 18,
          measuredPgaDamG: 0.016,
          structuralInspectionSummary: 'Post-tremor instrumentation scan confirmed zero structural divergence.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(130 + ((globalIdCounter * 5.2) % 190)),
        breachFormationTimeHours: 2.5,
        peakBreachDischargeCumecs: Math.round(38000 + ((globalIdCounter * 1250) % 52000)),
        totalFloodDurationHours: 36,
        floodRecessionTimeHours: 56,
        totalInundationAreaSqKm: 310,
        downstreamRiverReachKm: 85,
        riverName: river,
        crossSectionsCount: 36,
        affectedZones: [
          {
            id: `az-wb-${paddedId}-1`,
            name: `${dq.district} Downstream Riparian Village`,
            distanceDownstreamKm: 6.9,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.5,
            flowVelocityMps: 4.7,
            estimatedPopulation: 4600,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ridge Disaster Shelters`
          },
          {
            id: `az-wb-${paddedId}-2`,
            name: `${river} Irrigation Command Township`,
            distanceDownstreamKm: 20.2,
            waveArrivalTimeMinutes: 49,
            peakFloodDepthMeters: 4.8,
            flowVelocityMps: 3.2,
            estimatedPopulation: 9600,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Sub-Division Elevated Administrative Complex'
          },
          {
            id: `az-wb-${paddedId}-3`,
            name: 'Delta Plain Flood Basin Settlement',
            distanceDownstreamKm: 40.5,
            waveArrivalTimeMinutes: 114,
            peakFloodDepthMeters: 2.9,
            flowVelocityMps: 1.8,
            estimatedPopulation: 16500,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Raised Transit Camp'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `wb-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying embankment rip-rap and radial gates in ${dq.district}.`,
          date: '2026-08-14'
        },
        {
          id: `wb-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-06'
        },
        {
          id: `wb-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} flood discharge pathways.`,
          date: '2026-08-10',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `wb-img-${paddedId}-drone`,
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
        state: 'West Bengal',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(1600 + ((globalIdCounter * 340) % 8800)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-14',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'West Bengal Irrigation & Waterways Dept (I&WD) & CWC',
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

  cachedWestBengalDams = result;
  return result;
}

export function getWestBengalSummaryStats() {
  const dams = getWestBengal33Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'West Bengal',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & West Bengal Irrigation & Waterways Department'
  };
}
