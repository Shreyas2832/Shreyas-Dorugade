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

export const UTTAR_PRADESH_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'up-dam-rihand',
    name: 'Rihand Dam (Govind Ballabh Pant Sagar)',
    state: 'Uttar Pradesh',
    district: 'Sonbhadra',
    river: 'Rihand',
    basin: 'Ganga / Son Basin',
    yearCompleted: 1962,
    damType: 'Concrete Gravity',
    heightMeters: 91.44,
    crestLengthMeters: 934.21,
    fullReservoirLevelMeters: 268.22,
    maximumWaterLevelMeters: 270.0,
    crestLevelMeters: 272.5,
    currentWaterLevelMeters: 264.8,
    grossStorageCapacityLiters: 10608000000000, // 10.6 Trillion Liters (India's #2 Largest Artificial Reservoir by Volume)
    currentWaterVolumeLiters: 9420000000000,
    spillwayCapacityCumecs: 15300,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'UP Irrigation & Water Resources Dept & UP Jal Vidyut Nigam'
  },
  {
    id: 'up-dam-matatila',
    name: 'Matatila Dam',
    state: 'Uttar Pradesh',
    district: 'Lalitpur',
    river: 'Betwa',
    basin: 'Yamuna / Betwa Basin',
    yearCompleted: 1958,
    damType: 'Composite Masonry Spillway & Earth-fill Flanks',
    heightMeters: 45.72,
    crestLengthMeters: 6300.0,
    fullReservoirLevelMeters: 308.46,
    maximumWaterLevelMeters: 309.0,
    crestLevelMeters: 312.0,
    currentWaterLevelMeters: 306.9,
    grossStorageCapacityLiters: 1132000000000, // 1.13 Trillion Liters
    currentWaterVolumeLiters: 995000000000,
    spillwayCapacityCumecs: 16000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Betwa River Board & UPWRD Matatila Division'
  },
  {
    id: 'up-dam-rajghat',
    name: 'Rajghat Dam (Interstate UP-MP)',
    state: 'Uttar Pradesh',
    district: 'Lalitpur',
    river: 'Betwa',
    basin: 'Yamuna / Betwa Basin',
    yearCompleted: 2006,
    damType: 'Masonry Gravity with Earthen Embankment',
    heightMeters: 43.8,
    crestLengthMeters: 11200.0,
    fullReservoirLevelMeters: 371.0,
    maximumWaterLevelMeters: 371.5,
    crestLevelMeters: 374.0,
    currentWaterLevelMeters: 368.5,
    grossStorageCapacityLiters: 1945000000000, // 1.95 Trillion Liters
    currentWaterVolumeLiters: 1720000000000,
    spillwayCapacityCumecs: 29000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Betwa River Board & CWC Central Circle'
  },
  {
    id: 'up-dam-parichha',
    name: 'Parichha Dam & Weir',
    state: 'Uttar Pradesh',
    district: 'Jhansi',
    river: 'Betwa',
    basin: 'Yamuna / Betwa Basin',
    yearCompleted: 1984,
    damType: 'Masonry Weir & Barrage for Thermal Power Cooling',
    heightMeters: 21.0,
    crestLengthMeters: 1175.0,
    fullReservoirLevelMeters: 213.5,
    maximumWaterLevelMeters: 214.2,
    crestLevelMeters: 216.0,
    currentWaterLevelMeters: 212.8,
    grossStorageCapacityLiters: 105000000000,
    currentWaterVolumeLiters: 96000000000,
    spillwayCapacityCumecs: 19500,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'UPWRD Jhansi Irrigation Division & Parichha TPS'
  },
  {
    id: 'up-dam-sukmadukma',
    name: 'Sukma Dukma Dam (Historic Masonry Weir)',
    state: 'Uttar Pradesh',
    district: 'Jhansi',
    river: 'Betwa',
    basin: 'Betwa Basin',
    yearCompleted: 1906, // Historic Bundelkhand heritage engineering
    damType: 'Stone Masonry Overflow Weir',
    heightMeters: 16.5,
    crestLengthMeters: 1820.0,
    fullReservoirLevelMeters: 202.0,
    maximumWaterLevelMeters: 203.0,
    crestLevelMeters: 204.5,
    currentWaterLevelMeters: 201.4,
    grossStorageCapacityLiters: 65000000000,
    currentWaterVolumeLiters: 58000000000,
    spillwayCapacityCumecs: 14500,
    condition: 'moderate',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-05',
    inspectingOfficer: 'UPWRD Jhansi Circle & Heritage Dam Safety Cell'
  },
  {
    id: 'up-dam-meja-mirzapur',
    name: 'Meja Dam (Belan Canal)',
    state: 'Uttar Pradesh',
    district: 'Mirzapur',
    river: 'Belan',
    basin: 'Ganga / Tons Basin',
    yearCompleted: 1968,
    damType: 'Earthen Dam with Masonry Chute Spillway',
    heightMeters: 34.0,
    crestLengthMeters: 2360.0,
    fullReservoirLevelMeters: 175.0,
    maximumWaterLevelMeters: 176.2,
    crestLevelMeters: 178.5,
    currentWaterLevelMeters: 173.6,
    grossStorageCapacityLiters: 310000000000,
    currentWaterVolumeLiters: 275000000000,
    spillwayCapacityCumecs: 5400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'UPWRD Mirzapur Irrigation Division'
  },
  {
    id: 'up-dam-arjundam',
    name: 'Arjun Dam',
    state: 'Uttar Pradesh',
    district: 'Mahoba',
    river: 'Arjun',
    basin: 'Yamuna / Ken Basin',
    yearCompleted: 1957,
    damType: 'Earthen Embankment with Masonry Spillway',
    heightMeters: 27.0,
    crestLengthMeters: 5200.0,
    fullReservoirLevelMeters: 166.0,
    maximumWaterLevelMeters: 167.2,
    crestLevelMeters: 169.5,
    currentWaterLevelMeters: 164.5,
    grossStorageCapacityLiters: 128000000000,
    currentWaterVolumeLiters: 108000000000,
    spillwayCapacityCumecs: 3450,
    condition: 'alert',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-04',
    inspectingOfficer: 'UPWRD Mahoba Irrigation Division'
  }
];

export interface UPDistrictQuota {
  district: string;
  region: 'Bundelkhand' | 'Vindhyan / Purvanchal' | 'Rohilkhand & Terai' | 'Western UP';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const UTTAR_PRADESH_DISTRICT_QUOTAS: UPDistrictQuota[] = [
  { district: 'Lalitpur', region: 'Bundelkhand', quota: 24, primaryBasin: 'Betwa / Yamuna Basin', majorRivers: ['Betwa', 'Jamni', 'Rohini', 'Shahzad', 'Sajnam'] },
  { district: 'Jhansi', region: 'Bundelkhand', quota: 18, primaryBasin: 'Betwa / Dhasan Basin', majorRivers: ['Betwa', 'Pahuj', 'Dhasan', 'Barwar'] },
  { district: 'Mirzapur', region: 'Vindhyan / Purvanchal', quota: 16, primaryBasin: 'Ganga / Belan Basin', majorRivers: ['Belan', 'Sirsi', 'Jirgo', 'Adwa', 'Khajuri'] },
  { district: 'Sonbhadra', region: 'Vindhyan / Purvanchal', quota: 16, primaryBasin: 'Son / Rihand Basin', majorRivers: ['Rihand', 'Son', 'Kanhar', 'Ghaghar', 'Nagwa'] },
  { district: 'Mahoba', region: 'Bundelkhand', quota: 14, primaryBasin: 'Ken / Yamuna Basin', majorRivers: ['Arjun', 'Chandrawal', 'Urmil', 'Kehari'] },
  { district: 'Chandauli', region: 'Vindhyan / Purvanchal', quota: 12, primaryBasin: 'Karamnasa / Ganga Basin', majorRivers: ['Karamnasa', 'Chandraprabha', 'Mushakhand', 'Garai'] },
  { district: 'Banda', region: 'Bundelkhand', quota: 8, primaryBasin: 'Ken / Baghain Basin', majorRivers: ['Ken', 'Baghain', 'Pai'] },
  { district: 'Chitrakoot', region: 'Bundelkhand', quota: 8, primaryBasin: 'Yamuna / Mandakini Basin', majorRivers: ['Mandakini', 'Bardaha', 'Ohan', 'Balmiki'] },
  { district: 'Hamirpur', region: 'Bundelkhand', quota: 6, primaryBasin: 'Betwa / Yamuna Basin', majorRivers: ['Betwa', 'Birma', 'Chandrawal'] },
  { district: 'Prayagraj', region: 'Vindhyan / Purvanchal', quota: 4, primaryBasin: 'Ganga / Tons Basin', majorRivers: ['Tons', 'Belan', 'Ganga'] },
  { district: 'Lakhimpur Kheri', region: 'Rohilkhand & Terai', quota: 3, primaryBasin: 'Ghaghara / Sharda Basin', majorRivers: ['Sharda', 'Ghaghara', 'Suheli'] },
  { district: 'Saharanpur', region: 'Western UP', quota: 1, primaryBasin: 'Yamuna Basin', majorRivers: ['Yamuna', 'Hindon'] }
];

// Ensure sum is exactly 130
const initialSumUP = UTTAR_PRADESH_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumUP !== 130) {
  const diff = 130 - initialSumUP;
  UTTAR_PRADESH_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedUttarPradeshDams: Dam[] | null = null;

const UP_NAMING_PATTERNS = [
  'Dam', 'Bandh', 'Sagar', 'Reservoir', 'Barrage',
  'Weir', 'Headworks', 'Feeder Project', 'Jalashay', 'Anicut'
];

const UP_TOPONYMS = [
  'Vindhyachal', 'Bundela', 'Chunar', 'Kalpi', 'Kalinjar', 'Chitrakoot',
  'Hastinapur', 'Ayodhya', 'Naimisharanya', 'Sarnath', 'Shravasti', 'Dudhwa',
  'Chakia', 'Pipri', 'Obra', 'Baberu', 'Mau Ranipur'
];

export function getUttarPradesh130Dams(): Dam[] {
  if (cachedUttarPradeshDams) return cachedUttarPradeshDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  UTTAR_PRADESH_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-up-${paddedId}`;

      const matchedNotable = UTTAR_PRADESH_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = UP_TOPONYMS[(globalIdCounter + i * 3) % UP_TOPONYMS.length];
      const pattern = UP_NAMING_PATTERNS[(i + globalIdCounter) % UP_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((19.0 + ((globalIdCounter * 6.2) % 48)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(340 + ((globalIdCounter * 52) % 2300));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((150 + ((globalIdCounter * 8.6) % 210)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.3 + ((globalIdCounter % 4) * 0.35)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.5).toFixed(2));

      // Water level
      const fillRatio = 0.59 + ((globalIdCounter % 36) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.9 + (fillRatio * 2.9)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((60 + ((globalIdCounter * 40) % 800)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.45, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1958 + (globalIdCounter % 65));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Masonry Gravity' :
        globalIdCounter % 4 === 1 ? 'Earthen Dam with Clay Impervious Core' :
        globalIdCounter % 4 === 2 ? 'Composite Masonry Spillway with Earthen Flanks' : 'Concrete Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 21) % 100;
        if (condHash < 68) cond = 'good';
        else if (condHash < 88) cond = 'moderate';
        else if (condHash < 96) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 37.8 : cond === 'alert' ? 21.2 : cond === 'moderate' ? 8.2 : 1.9;
      const turbidity = cond === 'critical' ? 64 : cond === 'alert' ? 29 : cond === 'moderate' ? 8.6 : 1.6;
      const seepageRecord: SeepageRecord = {
        id: `up-sep-${paddedId}`,
        timestamp: '2026-08-14 06:15',
        location: `Foundation drainage gallery block 7 and downstream toe filter in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.26)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.4)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Vindhyan sandstone bedding plane'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep relief well pneumatic surging, fine sand pack filter cleaning and bentonite sealant check.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `up-wp-${paddedId}`,
        timestamp: '2026-08-12 16:45',
        reservoirLevelMeters: currentLevel,
        location: `Main canal regulator and hydel intake in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.4 : cond === 'alert' ? 1.6 : 0.5,
        rotationalSpeedRpm: cond === 'critical' ? 48 : cond === 'alert' ? 24 : 7,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex submerged cross-vanes activated, floating debris barrier repositioned.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-UP-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.41 + (cond === 'critical' ? 6.2 : cond === 'alert' ? 2.9 : 0.6)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.39).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.47).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.43),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Central gallery pier block ${1 + (globalIdCounter % 12)}`
        },
        inclinometer: {
          stationId: `INC-UP-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 17.0 : cond === 'alert' ? 8.9 : 1.8).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.5,
          tiltRateMmPerMonth: cond === 'critical' ? 3.1 : 0.35,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Embankment Axis'
        },
        seismograph: {
          stationId: `SM-UP-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.019 + ((globalIdCounter % 7) * 0.003)).toFixed(3)),
          designBasisMceG: 0.28,
          ambientMicrotremorsHz: 3.4,
          status: 'Normal',
          lastTremorDate: '2026-05-18 (M2.6 Vindhyan fault micro-tremor)'
        }
      };

      // Landslide precautions
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Vindhyan Supergroup sandstones, Kaimur quartzite, Bundelkhand granite and Bijawar formation',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Sub-horizontal PVC drainage holes drilled at 5° gradient into Vindhyan sandstone abutment.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Prestressed Rock Anchors',
            description: '110-ton pre-stressed rock bolts pinned into fractured Kaimur quartzite bluffs.',
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
        rockBoltsInstalled: 1950,
        shotcreteAreaSqM: 15200,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 880 + (globalIdCounter % 320), monsoonPeak24hMm: 150, historicalDeviationPercent: 12.0 },
        { year: 2024, totalAnnualMm: 1020 + (globalIdCounter % 390), monsoonPeak24hMm: 185, historicalDeviationPercent: 22.8 },
        { year: 2023, totalAnnualMm: 760 + (globalIdCounter % 260), monsoonPeak24hMm: 120, historicalDeviationPercent: -7.2 },
        { year: 2022, totalAnnualMm: 940 + (globalIdCounter % 340), monsoonPeak24hMm: 165, historicalDeviationPercent: 15.6 },
        { year: 2021, totalAnnualMm: 840 + (globalIdCounter % 290), monsoonPeak24hMm: 140, historicalDeviationPercent: 3.5 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `up-eq-${paddedId}-1`,
          date: '1991-10-20',
          magnitudeRichter: 6.8,
          epicenterDistanceKm: 320 + (globalIdCounter % 180),
          focalDepthKm: 15,
          measuredPgaDamG: 0.048,
          structuralInspectionSummary: 'Uttarkashi earthquake long-period waves; masonry piers inspected without crack.'
        },
        {
          id: `up-eq-${paddedId}-2`,
          date: '2023-11-03',
          magnitudeRichter: 5.7,
          epicenterDistanceKm: 240 + (globalIdCounter % 120),
          focalDepthKm: 18,
          measuredPgaDamG: 0.024,
          structuralInspectionSummary: 'Nepal seismic waves recorded in Terai; foundation piezometers normal.'
        }
      ];

      // Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 128,
        breachFormationTimeHours: 2.4,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.42 + 4100),
        totalFloodDurationHours: 26,
        floodRecessionTimeHours: 45,
        totalInundationAreaSqKm: 305,
        downstreamRiverReachKm: 80,
        riverName: river,
        crossSectionsCount: 35,
        affectedZones: [
          {
            id: `az-up-${paddedId}-1`,
            name: `${dq.district} Downstream Riparian Village`,
            distanceDownstreamKm: 6.9,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.4,
            flowVelocityMps: 4.8,
            estimatedPopulation: 4400,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ridge Disaster Shelters`
          },
          {
            id: `az-up-${paddedId}-2`,
            name: `${river} Valley Canal Tehsil`,
            distanceDownstreamKm: 20.0,
            waveArrivalTimeMinutes: 49,
            peakFloodDepthMeters: 4.8,
            flowVelocityMps: 3.2,
            estimatedPopulation: 8900,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Tehsil Complex Higher Grounds'
          },
          {
            id: `az-up-${paddedId}-3`,
            name: 'District Canal Crossing Township',
            distanceDownstreamKm: 39.5,
            waveArrivalTimeMinutes: 112,
            peakFloodDepthMeters: 2.9,
            flowVelocityMps: 1.8,
            estimatedPopulation: 15100,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Elevated Transit Center'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `up-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying stone masonry mortar and radial crest gates in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `up-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Measuring Flume',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection of downstream toe seepage V-notch weir and sediment collection conduits.`,
          date: '2026-08-05'
        },
        {
          id: `up-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Multispectral Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Satellite radar flood simulation following the downstream ${river} corridor across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Ground Resolution'
        },
        {
          id: `up-img-${paddedId}-drone`,
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
        state: 'Uttar Pradesh',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(height * 66 + 1820),
        condition: cond,
        hazardClass: 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-10',
        inspectingOfficer: matchedNotable?.inspectingOfficer || `UPWRD ${dq.district} Irrigation Division`,
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

  cachedUttarPradeshDams = result;
  return result;
}

export interface UttarPradeshOverviewStats {
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

export function getUttarPradeshSummaryStats(): UttarPradeshOverviewStats {
  const dams = getUttarPradesh130Dams();
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

  UTTAR_PRADESH_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 130
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
