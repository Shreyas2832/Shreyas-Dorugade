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

export const ANDHRA_PRADESH_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'ap-dam-polavaram',
    name: 'Polavaram Dam (Indira Sagar)',
    state: 'Andhra Pradesh',
    district: 'Eluru',
    river: 'Godavari',
    basin: 'Godavari Basin',
    yearCompleted: 2024,
    damType: 'Earth-cum-Rockfill Dam (ECRF) with Concrete Spillway',
    heightMeters: 48.0,
    crestLengthMeters: 2454.0,
    fullReservoirLevelMeters: 45.72,
    maximumWaterLevelMeters: 46.5,
    crestLevelMeters: 54.0,
    currentWaterLevelMeters: 41.2,
    grossStorageCapacityLiters: 5511000000000, // 5.51 Trillion Liters (National Project of India)
    currentWaterVolumeLiters: 4230000000000,
    spillwayCapacityCumecs: 141584, // World's largest discharge spillway capacity (50 lakh cusecs)
    condition: 'moderate', // Under active hydraulic diaphragm wall rehabilitation
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'Polavaram Project Authority (PPA) & Central Water Commission (CWC)'
  },
  {
    id: 'ap-dam-somasila',
    name: 'Somasila Dam',
    state: 'Andhra Pradesh',
    district: 'SPS Nellore',
    river: 'Pennar',
    basin: 'Pennar Basin',
    yearCompleted: 1989,
    damType: 'Earth-fill Dam with Masonry Spillway',
    heightMeters: 39.0,
    crestLengthMeters: 760.0,
    fullReservoirLevelMeters: 100.58,
    maximumWaterLevelMeters: 101.8,
    crestLevelMeters: 103.5,
    currentWaterLevelMeters: 98.4,
    grossStorageCapacityLiters: 2208000000000, // 2.21 Trillion Liters
    currentWaterVolumeLiters: 1940000000000,
    spillwayCapacityCumecs: 16990,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Andhra Pradesh WRD Somasila Project Division'
  },
  {
    id: 'ap-dam-srisailam-rb',
    name: 'Srisailam Dam (Right Bank & Spillway)',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
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
    grossStorageCapacityLiters: 8722000000000,
    currentWaterVolumeLiters: 7850000000000,
    spillwayCapacityCumecs: 37945,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'APGENCO Srisailam Right Bank Hydel Project & KRMB'
  },
  {
    id: 'ap-dam-prakasambarrage',
    name: 'Prakasam Barrage',
    state: 'Andhra Pradesh',
    district: 'NTR',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1957,
    damType: 'Road-cum-Barrage with 70 Regulator Vents',
    heightMeters: 12.0,
    crestLengthMeters: 1223.5,
    fullReservoirLevelMeters: 17.39,
    maximumWaterLevelMeters: 17.98,
    crestLevelMeters: 21.0,
    currentWaterLevelMeters: 17.1,
    grossStorageCapacityLiters: 87000000000,
    currentWaterVolumeLiters: 82000000000,
    spillwayCapacityCumecs: 33697,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-13',
    inspectingOfficer: 'Andhra Pradesh WRD Krishna Delta Circle Vijayawada'
  },
  {
    id: 'ap-dam-gandikota',
    name: 'Gandikota Reservoir',
    state: 'Andhra Pradesh',
    district: 'YSR Kadapa',
    river: 'Pennar',
    basin: 'Pennar Basin',
    yearCompleted: 2013,
    damType: 'Earth-cum-Rockfill Dam across Gandikota Canyon',
    heightMeters: 29.0,
    crestLengthMeters: 450.0,
    fullReservoirLevelMeters: 212.0,
    maximumWaterLevelMeters: 213.5,
    crestLevelMeters: 215.0,
    currentWaterLevelMeters: 209.6,
    grossStorageCapacityLiters: 759000000000,
    currentWaterVolumeLiters: 685000000000,
    spillwayCapacityCumecs: 10500,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'Galeru Nagari Sujala Sravanthi (GNSS) Kadapa'
  },
  {
    id: 'ap-dam-kalyani',
    name: 'Kalyani Dam',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    river: 'Swarnamukhi',
    basin: 'Swarnamukhi Basin',
    yearCompleted: 1977,
    damType: 'Masonry Gravity & Earthen Saddle',
    heightMeters: 38.0,
    crestLengthMeters: 240.0,
    fullReservoirLevelMeters: 275.0,
    maximumWaterLevelMeters: 276.0,
    crestLevelMeters: 278.0,
    currentWaterLevelMeters: 273.8,
    grossStorageCapacityLiters: 25000000000,
    currentWaterVolumeLiters: 22500000000,
    spillwayCapacityCumecs: 1200,
    condition: 'good',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'Tirumala Tirupati Devasthanams (TTD) Water Works'
  },
  {
    id: 'ap-dam-cumbum',
    name: 'Cumbum Dam (Gundlakamma Lake)',
    state: 'Andhra Pradesh',
    district: 'Prakasam',
    river: 'Gundlakamma',
    basin: 'Gundlakamma Basin',
    yearCompleted: 1500, // Built by Gajapati rulers / Vijayanagara Kingdom
    damType: 'Historic Earthen Embankment with Modern Regulated Spillway',
    heightMeters: 17.4,
    crestLengthMeters: 1600.0,
    fullReservoirLevelMeters: 187.0,
    maximumWaterLevelMeters: 188.2,
    crestLevelMeters: 190.0,
    currentWaterLevelMeters: 185.7,
    grossStorageCapacityLiters: 104000000000,
    currentWaterVolumeLiters: 89000000000,
    spillwayCapacityCumecs: 2150,
    condition: 'moderate',
    hazardClass: 'Category 2 (Significant)',
    lastInspectionDate: '2026-08-05',
    inspectingOfficer: 'AP WRD Ongole Circle & Archaeological Survey Liaison'
  }
];

export interface APDistrictQuota {
  district: string;
  region: 'Rayalaseema' | 'Coastal Andhra' | 'North Coastal';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const ANDHRA_PRADESH_DISTRICT_QUOTAS: APDistrictQuota[] = [
  { district: 'YSR Kadapa', region: 'Rayalaseema', quota: 15, primaryBasin: 'Pennar Basin', majorRivers: ['Pennar', 'Chitravathi', 'Papagni', 'Buggavanka'] },
  { district: 'Nandyal', region: 'Rayalaseema', quota: 14, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Kunduru', 'Galiru', 'Kunderu'] },
  { district: 'SPS Nellore', region: 'Coastal Andhra', quota: 13, primaryBasin: 'Pennar / Swarnamukhi Basin', majorRivers: ['Pennar', 'Kandaleru', 'Boggeru', 'Swarnamukhi'] },
  { district: 'Kurnool', region: 'Rayalaseema', quota: 12, primaryBasin: 'Krishna / Tungabhadra Basin', majorRivers: ['Tungabhadra', 'Hundri', 'Krishna'] },
  { district: 'Annamayya', region: 'Rayalaseema', quota: 11, primaryBasin: 'Pennar / Papagni Basin', majorRivers: ['Papagni', 'Bahuda', 'Cheyyeru', 'Mandavya'] },
  { district: 'Chittoor', region: 'Rayalaseema', quota: 11, primaryBasin: 'Palar / Swarnamukhi Basin', majorRivers: ['Kalyani', 'Araniar', 'Kushasthali', 'Kalangi'] },
  { district: 'Palnadu', region: 'Coastal Andhra', quota: 11, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Chandra Vanka', 'Naguleru'] },
  { district: 'Ananthapuramu', region: 'Rayalaseema', quota: 10, primaryBasin: 'Pennar Basin', majorRivers: ['Pennar', 'Jayamangali', 'Kushavathi'] },
  { district: 'Sri Sathya Sai', region: 'Rayalaseema', quota: 10, primaryBasin: 'Pennar Basin', majorRivers: ['Chitravathi', 'Pennar', 'Maddileru'] },
  { district: 'Alluri Sitharama Raju', region: 'North Coastal', quota: 10, primaryBasin: 'Godavari / Sileru Basin', majorRivers: ['Godavari', 'Sileru', 'Sabari', 'Varaha'] },
  { district: 'Prakasam', region: 'Coastal Andhra', quota: 9, primaryBasin: 'Gundlakamma Basin', majorRivers: ['Gundlakamma', 'Musi', 'Paleru', 'Manneru'] },
  { district: 'East Godavari', region: 'Coastal Andhra', quota: 9, primaryBasin: 'Godavari Basin', majorRivers: ['Godavari', 'Yeleru', 'Pampa', 'Torrigedda'] },
  { district: 'Eluru', region: 'Coastal Andhra', quota: 8, primaryBasin: 'Godavari / Tammileru Basin', majorRivers: ['Godavari', 'Tammileru', 'Goyeru', 'Jalleru'] },
  { district: 'NTR', region: 'Coastal Andhra', quota: 8, primaryBasin: 'Krishna Basin', majorRivers: ['Krishna', 'Munneru', 'Budameru'] },
  { district: 'Vizianagaram', region: 'North Coastal', quota: 6, primaryBasin: 'Nagavali / Champavathi Basin', majorRivers: ['Nagavali', 'Champavathi', 'Gosthani', 'Vegavathi'] },
  { district: 'Srikakulam', region: 'North Coastal', quota: 6, primaryBasin: 'Vamsadhara / Nagavali Basin', majorRivers: ['Vamsadhara', 'Nagavali', 'Bahuda', 'Suvarnamukhi'] },
  { district: 'Visakhapatnam', region: 'North Coastal', quota: 4, primaryBasin: 'Sarada / Varaha Basin', majorRivers: ['Sarada', 'Varaha', 'Meghadrigedda', 'Gosthani'] }
];

// Ensure sum is exactly 167
const initialSumAP = ANDHRA_PRADESH_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumAP !== 167) {
  const diff = 167 - initialSumAP;
  ANDHRA_PRADESH_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedAndhraPradeshDams: Dam[] | null = null;

const AP_NAMING_PATTERNS = [
  'Reservoir', 'Sagar', 'Project', 'Barrage', 'Balancing Reservoir',
  'Weir', 'Headworks', 'Lift Irrigation Scheme', 'Cheruvu Dam', 'Anicut'
];

const AP_TOPONYMS = [
  'Amaravati', 'Lepakshi', 'Gandikota', 'Chandragiri', 'Kondaveedu', 'Belum',
  'Bobbili', 'Ahobilam', 'Simhachalam', 'Mahanandi', 'Horsley', 'Pattiseema',
  'Dindi', 'Gooty', 'Penukonda', 'Udayagiri', 'Mypadu'
];

export function getAndhraPradesh167Dams(): Dam[] {
  if (cachedAndhraPradeshDams) return cachedAndhraPradeshDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  ANDHRA_PRADESH_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-ap-${paddedId}`;

      const matchedNotable = ANDHRA_PRADESH_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = AP_TOPONYMS[(globalIdCounter + i * 3) % AP_TOPONYMS.length];
      const pattern = AP_NAMING_PATTERNS[(i + globalIdCounter) % AP_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((21.0 + ((globalIdCounter * 6.6) % 52)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(310 + ((globalIdCounter * 50) % 2400));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((110 + ((globalIdCounter * 9.5) % 220)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.2 + ((globalIdCounter % 4) * 0.35)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.6).toFixed(2));

      // Water level
      const fillRatio = 0.60 + ((globalIdCounter % 35) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.8 + (fillRatio * 2.8)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((58 + ((globalIdCounter * 41) % 820)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.46, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1965 + (globalIdCounter % 58));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 4 === 0 ? 'Masonry Gravity' :
        globalIdCounter % 4 === 1 ? 'Earthen Dam with Clay Impervious Core' :
        globalIdCounter % 4 === 2 ? 'Composite Masonry Spillway with Earthen Flanks' : 'Concrete Gravity'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 15) % 100;
        if (condHash < 68) cond = 'good';
        else if (condHash < 88) cond = 'moderate';
        else if (condHash < 96) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 38.6 : cond === 'alert' ? 21.8 : cond === 'moderate' ? 8.5 : 2.0;
      const turbidity = cond === 'critical' ? 65 : cond === 'alert' ? 30 : cond === 'moderate' ? 8.8 : 1.7;
      const seepageRecord: SeepageRecord = {
        id: `ap-sep-${paddedId}`,
        timestamp: '2026-08-14 06:13',
        location: `Foundation drainage gallery block 8 and downstream toe filter in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.28)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.42)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Cuddapah basin quartzite bedding plane'
          : 'Clear seepage flow, normal filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep relief well pneumatic surging, fine sand pack filter cleaning and bentonite sealant check.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `ap-wp-${paddedId}`,
        timestamp: '2026-08-12 15:50',
        reservoirLevelMeters: currentLevel,
        location: `Main canal regulator and power house headrace intake in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.5 : cond === 'alert' ? 1.7 : 0.52,
        rotationalSpeedRpm: cond === 'critical' ? 49 : cond === 'alert' ? 24 : 8,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex submerged cross-vanes activated, floating debris barrier repositioned.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-AP-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.41 + (cond === 'critical' ? 6.3 : cond === 'alert' ? 3.0 : 0.7)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.39).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.47).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.44),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Central gallery pier block ${1 + (globalIdCounter % 13)}`
        },
        inclinometer: {
          stationId: `INC-AP-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 17.4 : cond === 'alert' ? 9.1 : 1.8).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.6,
          tiltRateMmPerMonth: cond === 'critical' ? 3.2 : 0.36,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Transverse Arch Deflection Axis'
        },
        seismograph: {
          stationId: `SM-AP-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.02 + ((globalIdCounter % 8) * 0.0035)).toFixed(3)),
          designBasisMceG: 0.29,
          ambientMicrotremorsHz: 3.5,
          status: 'Normal',
          lastTremorDate: '2026-05-24 (M2.5 Eastern Ghats micro-tremor)'
        }
      };

      // Landslide precautions
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Cuddapah Supergroup quartzites, Bairenkonda sandstones and Eastern Ghats charnockite',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Sub-horizontal PVC drainage holes drilled at 5° gradient into Cuddapah ridge abutment.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Mesh & Prestressed Rock Anchors',
            description: '115-ton pre-stressed rock bolts pinned into fractured quartzite gorge walls.',
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
        rockBoltsInstalled: 2150,
        shotcreteAreaSqM: 16800,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 980 + (globalIdCounter % 360), monsoonPeak24hMm: 165, historicalDeviationPercent: 13.5 },
        { year: 2024, totalAnnualMm: 1140 + (globalIdCounter % 440), monsoonPeak24hMm: 205, historicalDeviationPercent: 24.2 },
        { year: 2023, totalAnnualMm: 860 + (globalIdCounter % 290), monsoonPeak24hMm: 135, historicalDeviationPercent: -5.6 },
        { year: 2022, totalAnnualMm: 1060 + (globalIdCounter % 390), monsoonPeak24hMm: 180, historicalDeviationPercent: 17.1 },
        { year: 2021, totalAnnualMm: 940 + (globalIdCounter % 330), monsoonPeak24hMm: 150, historicalDeviationPercent: 4.8 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `ap-eq-${paddedId}-1`,
          date: '1967-03-27',
          magnitudeRichter: 5.4,
          epicenterDistanceKm: 80 + (globalIdCounter % 160),
          focalDepthKm: 18,
          measuredPgaDamG: 0.052,
          structuralInspectionSummary: 'Ongole seismic zone shock; crest spillway gates inspected without defect.'
        },
        {
          id: `ap-eq-${paddedId}-2`,
          date: '2022-09-15',
          magnitudeRichter: 3.2,
          epicenterDistanceKm: 36 + (globalIdCounter % 70),
          focalDepthKm: 11,
          measuredPgaDamG: 0.021,
          structuralInspectionSummary: 'Eastern Ghats shear tremor; foundation piezometers within normal range.'
        }
      ];

      // Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 132,
        breachFormationTimeHours: 2.3,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.44 + 4350),
        totalFloodDurationHours: 27,
        floodRecessionTimeHours: 46,
        totalInundationAreaSqKm: 318,
        downstreamRiverReachKm: 83,
        riverName: river,
        crossSectionsCount: 36,
        affectedZones: [
          {
            id: `az-ap-${paddedId}-1`,
            name: `${dq.district} Downstream Delta Village`,
            distanceDownstreamKm: 7.1,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.9,
            flowVelocityMps: 5.1,
            estimatedPopulation: 4900,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} Cyclone & Flood Shelters`
          },
          {
            id: `az-ap-${paddedId}-2`,
            name: `${river} Irrigation Canal Township`,
            distanceDownstreamKm: 20.8,
            waveArrivalTimeMinutes: 51,
            peakFloodDepthMeters: 5.1,
            flowVelocityMps: 3.4,
            estimatedPopulation: 9500,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Tehsil Complex High Ground'
          },
          {
            id: `az-ap-${paddedId}-3`,
            name: 'Coastal Inundation Municipality',
            distanceDownstreamKm: 41.5,
            waveArrivalTimeMinutes: 116,
            peakFloodDepthMeters: 3.1,
            flowVelocityMps: 1.9,
            estimatedPopulation: 16200,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'Coastal Highway Multipurpose Building'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `ap-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying stone masonry mortar and radial crest gates in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `ap-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Measuring Flume',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection of downstream toe seepage V-notch weir and sediment collection conduits.`,
          date: '2026-08-05'
        },
        {
          id: `ap-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Multispectral Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Satellite radar flood simulation following the downstream ${river} corridor across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Ground Resolution'
        },
        {
          id: `ap-img-${paddedId}-drone`,
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
        state: 'Andhra Pradesh',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(height * 67 + 1890),
        condition: cond,
        hazardClass: 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-10',
        inspectingOfficer: matchedNotable?.inspectingOfficer || `Andhra Pradesh WRD ${dq.district} Circle`,
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

  cachedAndhraPradeshDams = result;
  return result;
}

export interface AndhraPradeshOverviewStats {
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

export function getAndhraPradeshSummaryStats(): AndhraPradeshOverviewStats {
  const dams = getAndhraPradesh167Dams();
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

  ANDHRA_PRADESH_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 167
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
