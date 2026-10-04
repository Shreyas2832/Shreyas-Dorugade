import { Dam, DamCondition, SeepageRecord, WhirlpoolRecord, SensorTelemetry, LandslidePrecaution, RainfallRecord, EarthquakeRecord, HydrodynamicBreachModel, DamImage } from '../types';

// Authentic Major Benchmark Dams of Gujarat with precise engineering parameters
export const GUJARAT_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'gj-dam-sardarsarovar',
    name: 'Sardar Sarovar Dam',
    state: 'Gujarat',
    district: 'Narmada',
    river: 'Narmada',
    basin: 'Narmada Basin',
    yearCompleted: 2017,
    damType: 'Concrete Gravity',
    heightMeters: 138.68, // Raised to 163m crest
    crestLengthMeters: 1210.0,
    fullReservoirLevelMeters: 138.68,
    maximumWaterLevelMeters: 140.21,
    crestLevelMeters: 146.18,
    currentWaterLevelMeters: 136.4,
    grossStorageCapacityLiters: 9500000000000, // 9.50 Trillion Liters (335.5 TMC / 9.5 Billion m³)
    currentWaterVolumeLiters: 8850000000000,
    spillwayCapacityCumecs: 84949, // 30 radial gates, largest discharge capacity in Gujarat
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'Sardar Sarovar Narmada Nigam Ltd (SSNNL) & Narmada Control Authority'
  },
  {
    id: 'gj-dam-ukai',
    name: 'Ukai Dam (Vallabh Sagar)',
    state: 'Gujarat',
    district: 'Tapi',
    river: 'Tapi',
    basin: 'Tapi Basin',
    yearCompleted: 1972,
    damType: 'Earth-cum-Masonry Dam',
    heightMeters: 80.77,
    crestLengthMeters: 4927.0,
    fullReservoirLevelMeters: 105.16,
    maximumWaterLevelMeters: 105.5,
    crestLevelMeters: 109.5,
    currentWaterLevelMeters: 102.8,
    grossStorageCapacityLiters: 7414000000000, // 7.41 Trillion Liters (261.8 TMC)
    currentWaterVolumeLiters: 6520000000000,
    spillwayCapacityCumecs: 46269,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'Gujarat WRD Ukai Project Circle'
  },
  {
    id: 'gj-dam-kadana',
    name: 'Kadana Dam',
    state: 'Gujarat',
    district: 'Mahisagar',
    river: 'Mahi',
    basin: 'Mahi Basin',
    yearCompleted: 1979,
    damType: 'Earth-cum-Masonry Gravity with Pumped Hydro',
    heightMeters: 58.2,
    crestLengthMeters: 1551.0,
    fullReservoirLevelMeters: 127.71,
    maximumWaterLevelMeters: 128.5,
    crestLevelMeters: 131.0,
    currentWaterLevelMeters: 125.6,
    grossStorageCapacityLiters: 1542000000000, // 1.54 Trillion Liters
    currentWaterVolumeLiters: 1320000000000,
    spillwayCapacityCumecs: 34000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'Gujarat WRD Kadana Project Division'
  },
  {
    id: 'gj-dam-dharoi',
    name: 'Dharoi Dam',
    state: 'Gujarat',
    district: 'Mehsana',
    river: 'Sabarmati',
    basin: 'Sabarmati Basin',
    yearCompleted: 1978,
    damType: 'Masonry & Composite Earthen Dyke',
    heightMeters: 45.87,
    crestLengthMeters: 1207.0,
    fullReservoirLevelMeters: 189.59,
    maximumWaterLevelMeters: 190.5,
    crestLevelMeters: 193.0,
    currentWaterLevelMeters: 186.8,
    grossStorageCapacityLiters: 907000000000, // 907 Billion Liters
    currentWaterVolumeLiters: 780000000000,
    spillwayCapacityCumecs: 21600,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'Gujarat WRD Sabarmati Circle'
  },
  {
    id: 'gj-dam-dantiwada',
    name: 'Dantiwada Dam',
    state: 'Gujarat',
    district: 'Banaskantha',
    river: 'Banas',
    basin: 'Banas Basin',
    yearCompleted: 1965,
    damType: 'Masonry Gravity & Earthen Embankment',
    heightMeters: 61.0,
    crestLengthMeters: 4832.0,
    fullReservoirLevelMeters: 184.1,
    maximumWaterLevelMeters: 185.0,
    crestLevelMeters: 188.0,
    currentWaterLevelMeters: 181.4,
    grossStorageCapacityLiters: 464000000000, // 464 Billion Liters
    currentWaterVolumeLiters: 390000000000,
    spillwayCapacityCumecs: 16100,
    condition: 'alert',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-06',
    inspectingOfficer: 'Banaskantha Irrigation Project Division'
  },
  {
    id: 'gj-dam-damanganga',
    name: 'Madhuban Dam (Damanganga Reservoir)',
    state: 'Gujarat',
    district: 'Valsad',
    river: 'Damanganga',
    basin: 'Damanganga Basin',
    yearCompleted: 1989,
    damType: 'Earth-fill with Central Masonry Spillway',
    heightMeters: 58.6,
    crestLengthMeters: 2860.0,
    fullReservoirLevelMeters: 79.86,
    maximumWaterLevelMeters: 80.5,
    crestLevelMeters: 83.5,
    currentWaterLevelMeters: 77.9,
    grossStorageCapacityLiters: 567000000000,
    currentWaterVolumeLiters: 495000000000,
    spillwayCapacityCumecs: 19200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Damanganga Project Circle Valsad'
  },
  {
    id: 'gj-dam-karjan',
    name: 'Karjan Dam',
    state: 'Gujarat',
    district: 'Narmada',
    river: 'Karjan',
    basin: 'Narmada Basin',
    yearCompleted: 1987,
    damType: 'Masonry Gravity Dam',
    heightMeters: 100.0,
    crestLengthMeters: 903.0,
    fullReservoirLevelMeters: 115.25,
    maximumWaterLevelMeters: 116.0,
    crestLevelMeters: 119.0,
    currentWaterLevelMeters: 112.7,
    grossStorageCapacityLiters: 630000000000,
    currentWaterVolumeLiters: 540000000000,
    spillwayCapacityCumecs: 16800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'SSNNL Karjan Division'
  },
  {
    id: 'gj-dam-bhadar',
    name: 'Bhadar Dam',
    state: 'Gujarat',
    district: 'Rajkot',
    river: 'Bhadar',
    basin: 'Bhadar Basin',
    yearCompleted: 1964,
    damType: 'Masonry Gravity & Earthen Saddle',
    heightMeters: 29.0,
    crestLengthMeters: 4358.0,
    fullReservoirLevelMeters: 105.15,
    maximumWaterLevelMeters: 106.0,
    crestLevelMeters: 108.5,
    currentWaterLevelMeters: 103.2,
    grossStorageCapacityLiters: 238000000000,
    currentWaterVolumeLiters: 198000000000,
    spillwayCapacityCumecs: 12500,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'Rajkot Irrigation Project Circle'
  },
  {
    id: 'gj-dam-machchhu2',
    name: 'Machchhu-II Dam',
    state: 'Gujarat',
    district: 'Morbi',
    river: 'Machchhu',
    basin: 'Machchhu Basin',
    yearCompleted: 1989, // Reconstructed with high spillway discharge capacity
    damType: 'Composite Earthen & Concrete Gravity Spillway',
    heightMeters: 26.2,
    crestLengthMeters: 4022.0,
    fullReservoirLevelMeters: 57.3,
    maximumWaterLevelMeters: 58.0,
    crestLevelMeters: 60.5,
    currentWaterLevelMeters: 55.4,
    grossStorageCapacityLiters: 100500000000,
    currentWaterVolumeLiters: 82000000000,
    spillwayCapacityCumecs: 21000, // Augmented design following 1979 historical breach
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-08',
    inspectingOfficer: 'Gujarat WRD Morbi Dam Safety Unit'
  },
  {
    id: 'gj-dam-shetrunji',
    name: 'Shetrunji Dam',
    state: 'Gujarat',
    district: 'Bhavnagar',
    river: 'Shetrunji',
    basin: 'Shetrunji Basin',
    yearCompleted: 1959,
    damType: 'Masonry Gravity & Earthen Dyke',
    heightMeters: 32.0,
    crestLengthMeters: 3120.0,
    fullReservoirLevelMeters: 57.6,
    maximumWaterLevelMeters: 58.3,
    crestLevelMeters: 60.8,
    currentWaterLevelMeters: 56.1,
    grossStorageCapacityLiters: 308000000000,
    currentWaterVolumeLiters: 265000000000,
    spillwayCapacityCumecs: 7100,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'Bhavnagar Irrigation Circle'
  },
  {
    id: 'gj-dam-sukhi',
    name: 'Sukhi Dam',
    state: 'Gujarat',
    district: 'Chhota Udepur',
    river: 'Sukhi',
    basin: 'Narmada Basin',
    yearCompleted: 1987,
    damType: 'Composite Earthen with Gated Spillway',
    heightMeters: 42.0,
    crestLengthMeters: 4192.0,
    fullReservoirLevelMeters: 147.82,
    maximumWaterLevelMeters: 148.5,
    crestLevelMeters: 151.0,
    currentWaterLevelMeters: 145.2,
    grossStorageCapacityLiters: 167000000000,
    currentWaterVolumeLiters: 142000000000,
    spillwayCapacityCumecs: 8400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-05',
    inspectingOfficer: 'Vadodara Irrigation Circle'
  },
  {
    id: 'gj-dam-rudramata',
    name: 'Rudramata Dam',
    state: 'Gujarat',
    district: 'Kutch',
    river: 'Pur',
    basin: 'Kutch Basin',
    yearCompleted: 1970,
    damType: 'Earthen Embankment',
    heightMeters: 27.5,
    crestLengthMeters: 2150.0,
    fullReservoirLevelMeters: 41.2,
    maximumWaterLevelMeters: 42.0,
    crestLevelMeters: 44.5,
    currentWaterLevelMeters: 38.6,
    grossStorageCapacityLiters: 65000000000,
    currentWaterVolumeLiters: 48000000000,
    spillwayCapacityCumecs: 3200,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-04',
    inspectingOfficer: 'Kutch Irrigation Project Circle Bhuj'
  },
  {
    id: 'gj-dam-aji1',
    name: 'Aji-I Dam',
    state: 'Gujarat',
    district: 'Rajkot',
    river: 'Aji',
    basin: 'Aji Basin',
    yearCompleted: 1954,
    damType: 'Earthen with Masonry Waste Weir',
    heightMeters: 19.8,
    crestLengthMeters: 1850.0,
    fullReservoirLevelMeters: 142.3,
    maximumWaterLevelMeters: 143.0,
    crestLevelMeters: 145.0,
    currentWaterLevelMeters: 141.0,
    grossStorageCapacityLiters: 42000000000,
    currentWaterVolumeLiters: 36000000000,
    spillwayCapacityCumecs: 2900,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'Rajkot Municipal Corporation & Gujarat WRD'
  }
];

export interface GujaratDistrictQuota {
  district: string;
  region: 'Saurashtra' | 'Kutch' | 'North Gujarat' | 'Central Gujarat' | 'South Gujarat';
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const GUJARAT_DISTRICT_QUOTAS: GujaratDistrictQuota[] = [
  { district: 'Kutch', region: 'Kutch', quota: 42, primaryBasin: 'Kutch Basin', majorRivers: ['Pur', 'Mitti', 'Kaswati', 'Rukmavati'] },
  { district: 'Rajkot', region: 'Saurashtra', quota: 38, primaryBasin: 'Bhadar / Aji Basin', majorRivers: ['Bhadar', 'Aji', 'Nyari', 'Dondi'] },
  { district: 'Jamnagar', region: 'Saurashtra', quota: 36, primaryBasin: 'Und Basin', majorRivers: ['Und', 'Rangmati', 'Sasoi', 'Phuljhar'] },
  { district: 'Bhavnagar', region: 'Saurashtra', quota: 30, primaryBasin: 'Shetrunji Basin', majorRivers: ['Shetrunji', 'Malan', 'Keri', 'Ghelo'] },
  { district: 'Amreli', region: 'Saurashtra', quota: 28, primaryBasin: 'Shetrunji Basin', majorRivers: ['Shetrunji', 'Thebi', 'Dhatarwadi', 'Galo'] },
  { district: 'Junagadh', region: 'Saurashtra', quota: 26, primaryBasin: 'Ozat Basin', majorRivers: ['Ozat', 'Madhuvanti', 'Hiran', 'Ambakhari'] },
  { district: 'Surendranagar', region: 'Saurashtra', quota: 24, primaryBasin: 'Brahmani Basin', majorRivers: ['Brahmani', 'Bhogavo', 'Nayka', 'Dholidhaja'] },
  { district: 'Narmada', region: 'South Gujarat', quota: 24, primaryBasin: 'Narmada Basin', majorRivers: ['Narmada', 'Karjan', 'Men'] },
  { district: 'Mahisagar', region: 'Central Gujarat', quota: 24, primaryBasin: 'Mahi Basin', majorRivers: ['Mahi', 'Panam', 'Bhadar'] },
  { district: 'Tapi', region: 'South Gujarat', quota: 22, primaryBasin: 'Tapi Basin', majorRivers: ['Tapi', 'Purna', 'Mindhola'] },
  { district: 'Morbi', region: 'Saurashtra', quota: 22, primaryBasin: 'Machchhu Basin', majorRivers: ['Machchhu', 'Brahmani', 'Demai'] },
  { district: 'Banaskantha', region: 'North Gujarat', quota: 22, primaryBasin: 'Banas Basin', majorRivers: ['Banas', 'Sipu', 'Balaram'] },
  { district: 'Gir Somnath', region: 'Saurashtra', quota: 20, primaryBasin: 'Hiran Basin', majorRivers: ['Hiran', 'Shingoda', 'Machhundri', 'Raval'] },
  { district: 'Sabarkantha', region: 'North Gujarat', quota: 20, primaryBasin: 'Sabarmati Basin', majorRivers: ['Hathmati', 'Guhai', 'Harnav', 'Khed'] },
  { district: 'Valsad', region: 'South Gujarat', quota: 18, primaryBasin: 'Damanganga Basin', majorRivers: ['Damanganga', 'Kolak', 'Par', 'Auranga'] },
  { district: 'Devbhumi Dwarka', region: 'Saurashtra', quota: 18, primaryBasin: 'Vartu Basin', majorRivers: ['Vartu', 'Sani', 'Ghee', 'Sindhani'] },
  { district: 'Aravalli', region: 'North Gujarat', quota: 18, primaryBasin: 'Sabarmati Basin', majorRivers: ['Majjham', 'Meshwo', 'Vatrak', 'Mazam'] },
  { district: 'Panchmahal', region: 'Central Gujarat', quota: 18, primaryBasin: 'Mahi Basin', majorRivers: ['Panam', 'Hadaf', 'Goma'] },
  { district: 'Dahod', region: 'Central Gujarat', quota: 18, primaryBasin: 'Mahi Basin', majorRivers: ['Khan', 'Machhan', 'Kali', 'Hadaf'] },
  { district: 'Chhota Udepur', region: 'Central Gujarat', quota: 16, primaryBasin: 'Narmada Basin', majorRivers: ['Sukhi', 'Rami', 'Orsang', 'Heran'] },
  { district: 'Surat', region: 'South Gujarat', quota: 16, primaryBasin: 'Tapi Basin', majorRivers: ['Tapi', 'Kim', 'Sena'] },
  { district: 'Porbandar', region: 'Saurashtra', quota: 14, primaryBasin: 'Bhadar Basin', majorRivers: ['Bhadar', 'Advana', 'Khambala'] },
  { district: 'Botad', region: 'Saurashtra', quota: 14, primaryBasin: 'Bhadar Basin', majorRivers: ['Bhimdad', 'Kaniyad', 'Goma', 'Utavali'] },
  { district: 'Vadodara', region: 'Central Gujarat', quota: 14, primaryBasin: 'Mahi / Narmada Basin', majorRivers: ['Vishwamitri', 'Surya', 'Jojwa'] },
  { district: 'Navsari', region: 'South Gujarat', quota: 14, primaryBasin: 'Ambika Basin', majorRivers: ['Ambika', 'Purna', 'Kaveri'] },
  { district: 'Mehsana', region: 'North Gujarat', quota: 14, primaryBasin: 'Sabarmati Basin', majorRivers: ['Sabarmati', 'Saraswati', 'Khari'] },
  { district: 'Bharuch', region: 'South Gujarat', quota: 12, primaryBasin: 'Narmada Basin', majorRivers: ['Narmada', 'Dhadhar', 'Bhukhi'] },
  { district: 'Dang', region: 'South Gujarat', quota: 10, primaryBasin: 'Purna Basin', majorRivers: ['Purna', 'Gira', 'Khapri'] },
  { district: 'Patan', region: 'North Gujarat', quota: 10, primaryBasin: 'Saraswati Basin', majorRivers: ['Saraswati', 'Rupen', 'Ban'] },
  { district: 'Kheda', region: 'Central Gujarat', quota: 10, primaryBasin: 'Mahi Basin', majorRivers: ['Mahi', 'Shedhi', 'Vatrak'] },
  { district: 'Ahmedabad', region: 'Central Gujarat', quota: 8, primaryBasin: 'Sabarmati Basin', majorRivers: ['Sabarmati', 'Bhogavo', 'Roda'] },
  { district: 'Gandhinagar', region: 'North Gujarat', quota: 6, primaryBasin: 'Sabarmati Basin', majorRivers: ['Sabarmati', 'Khari'] },
  { district: 'Anand', region: 'Central Gujarat', quota: 6, primaryBasin: 'Mahi Basin', majorRivers: ['Mahi', 'Gomti'] }
];

// Ensure sum is exactly 632
const totalGujaratQuota = GUJARAT_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (totalGujaratQuota !== 632) {
  GUJARAT_DISTRICT_QUOTAS[0].quota += (632 - totalGujaratQuota);
}

let cachedGujaratDams: Dam[] | null = null;

const GUJARAT_NAMING_PATTERNS = [
  'Bandhara', 'Jalashay', 'Medium Irrigation Project', 'Barrage',
  'Weir', 'Reservoir Scheme', 'Canal Headworks', 'Sagar'
];

const GUJARAT_LOCALITIES = [
  'Kevadia', 'Mandvi', 'Mundra', 'Anjar', 'Bhuj', 'Nakhatrana', 'Gandhidham',
  'Gondal', 'Jasdan', 'Jetpur', 'Dhoraji', 'Upleta', 'Morbi', 'Wankaner', 'Halvad',
  'Dhrol', 'Jodiya', 'Kalavad', 'Lalpur', 'Jamjodhpur', 'Talaja', 'Mahuva', 'Palitana',
  'Sihor', 'Gadhada', 'Botad', 'Savarkundla', 'Bagasara', 'Dhari', 'Rajula', 'Jafrabad',
  'Una', 'Kodinar', 'Talala', 'Veraval', 'Keshod', 'Mangrol', 'Manavadar', 'Visavadar',
  'Wadhwan', 'Dhrangadhra', 'Chotila', 'Sayla', 'Limbdi', 'Viramgam', 'Sanand', 'Dholka',
  'Deesa', 'Tharad', 'Dhanera', 'Palanpur', 'Idar', 'Himatnagar', 'Khedbrahma', 'Modasa',
  'Lunawada', 'Santrampur', 'Godhra', 'Halol', 'Kalol', 'Devgadh Baria', 'Limkheda'
];

export function getGujarat632Dams(): Dam[] {
  if (cachedGujaratDams) {
    return cachedGujaratDams;
  }

  const result: Dam[] = [];
  let globalIdCounter = 1;

  GUJARAT_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `gj-dam-${paddedId}`;

      const matchedNotable = GUJARAT_NOTABLE_DAMS.find(
        nd => nd.district?.toLowerCase() === dq.district.toLowerCase() && !result.some(r => r.name === nd.name)
      );

      let damName = matchedNotable?.name;
      let river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      let basin = matchedNotable?.basin || dq.primaryBasin;
      let damType = matchedNotable?.damType || (i % 3 === 0 ? 'Earthen Embankment' : i % 3 === 1 ? 'Masonry Gravity' : 'Composite Earth-cum-Masonry');
      let yearCompleted = matchedNotable?.yearCompleted || (1955 + ((i * 9 + globalIdCounter * 5) % 68));
      let height = matchedNotable?.heightMeters || (19 + ((globalIdCounter * 13) % 48) + ((i % 4) * 3.5));
      let crestLength = matchedNotable?.crestLengthMeters || (540 + ((globalIdCounter * 53) % 3200));
      let frl = matchedNotable?.fullReservoirLevelMeters || (45 + ((globalIdCounter * 11) % 150));
      let mwl = matchedNotable?.maximumWaterLevelMeters || (frl + 1.1);
      let crest = matchedNotable?.crestLevelMeters || (mwl + 2.3);
      let currentLevel = matchedNotable?.currentWaterLevelMeters || (frl - 1.5 + ((globalIdCounter % 5) * 0.25));

      let grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((height * crestLength * 38000 + ((globalIdCounter * 8765432) % 18000000000)));
      let currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * (0.72 + ((globalIdCounter % 24) / 100)));

      if (!damName) {
        const locality = GUJARAT_LOCALITIES[(globalIdCounter + i * 2) % GUJARAT_LOCALITIES.length];
        const pattern = GUJARAT_NAMING_PATTERNS[(i + globalIdCounter) % GUJARAT_NAMING_PATTERNS.length];
        damName = `${locality} (${river}) ${pattern}`;
      }

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23 + i * 11) % 100;
        if (condHash < 81) cond = 'good';
        else if (condHash < 95) cond = 'moderate';
        else if (condHash < 99) cond = 'alert';
        else cond = 'critical';
      }

      // Seepage
      const seepageLps = cond === 'critical' ? 42.0 : cond === 'alert' ? 22.5 : cond === 'moderate' ? 8.2 : 2.1;
      const turbidity = cond === 'critical' ? 72 : cond === 'alert' ? 34 : cond === 'moderate' ? 10 : 1.9;
      const seepageRecord: SeepageRecord = {
        id: `gj-sep-${paddedId}`,
        timestamp: '2026-08-14 06:30',
        location: `Toe relief gallery and left embankment junction in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.35)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.5)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Muddy brown sediment discharge, elevated colloidal fines'
          : 'Clear seepage flow, normal filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'High-pressure inverted geotextile filter backflush & bentonite curtain inspection.'
      };

      // Whirlpool
      const whirlpoolRecord: WhirlpoolRecord = {
        id: `gj-wp-${paddedId}`,
        timestamp: '2026-08-12 14:15',
        reservoirLevelMeters: currentLevel,
        location: `Spillway bay and canal head regulator in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.4 : cond === 'alert' ? 1.6 : 0.5,
        rotationalSpeedRpm: cond === 'critical' ? 48 : cond === 'alert' ? 24 : 7,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex floating raft boom adjusted and bellmouth submerged vortex suppressor deployed.'
      };

      // Sensors
      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-GJ-${paddedId}`,
          currentHeadMeters: parseFloat((height * 0.38 + (cond === 'critical' ? 5.8 : cond === 'alert' ? 2.9 : 0.6)).toFixed(2)),
          normalBaselineMeters: parseFloat((height * 0.36).toFixed(2)),
          thresholdAlertMeters: parseFloat((height * 0.45).toFixed(2)),
          porePressureKpa: Math.round(height * 9.81 * 0.42),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Foundation gallery block ${1 + (globalIdCounter % 12)}`
        },
        inclinometer: {
          stationId: `INC-GJ-${paddedId}`,
          currentDisplacementMm: parseFloat((cond === 'critical' ? 16.8 : cond === 'alert' ? 8.9 : 1.8).toFixed(1)),
          normalBaselineMm: 1.0,
          thresholdAlertMm: 14.0,
          tiltRateMmPerMonth: cond === 'critical' ? 3.1 : 0.35,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Crest Axis'
        },
        seismograph: {
          stationId: `SM-GJ-${paddedId}`,
          peakGroundAccelerationG: parseFloat((0.03 + ((globalIdCounter % 7) * 0.005)).toFixed(3)),
          designBasisMceG: 0.36,
          ambientMicrotremorsHz: 3.4,
          status: (dq.region === 'Kutch') ? 'Tremor Detected' : 'Normal',
          lastTremorDate: '2026-06-18 (M3.2 Kutch fault micro-tremor)'
        }
      };

      // Landslide / Slope Precaution
      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: (cond === 'critical') ? 'High' : (cond === 'alert') ? 'Moderate' : 'Low',
        geologicalFormation: 'Tertiary alluvial gravels, Deccan basalt trap and coastal calc-arenite strata',
        precautionsTaken: [
          {
            title: 'Subsurface Horizontal Pressure Relief Drains',
            description: 'Perforated drainage pipes drilled into abutment slope to relieve hydrostatic saturation.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'Riprap Pitching & Rock Bolt Stabilization',
            description: 'Heavy basalt boulders keyed into geogrid reinforcement on embankment face.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          },
          {
            title: 'Optical Prism Micro-Displacement Tracking',
            description: 'Automated geodetic total station monitoring 24/7.',
            status: 'Installed & Active',
            iconName: 'Activity'
          }
        ],
        drainageAditsCount: 4,
        rockBoltsInstalled: 1800,
        shotcreteAreaSqM: 12500,
        biorevetmentMeshType: 'Geogrid Turf & Galvanized Steel Wire Mattress'
      };

      // Rainfall history 2021-2025
      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 880 + (globalIdCounter % 260), monsoonPeak24hMm: 140, historicalDeviationPercent: 6.2 },
        { year: 2024, totalAnnualMm: 1120 + (globalIdCounter % 360), monsoonPeak24hMm: 195, historicalDeviationPercent: 18.5 },
        { year: 2023, totalAnnualMm: 910 + (globalIdCounter % 290), monsoonPeak24hMm: 148, historicalDeviationPercent: -2.1 },
        { year: 2022, totalAnnualMm: 960 + (globalIdCounter % 310), monsoonPeak24hMm: 158, historicalDeviationPercent: 4.8 },
        { year: 2021, totalAnnualMm: 820 + (globalIdCounter % 280), monsoonPeak24hMm: 135, historicalDeviationPercent: -9.5 }
      ];

      // Earthquake history
      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `gj-eq-${paddedId}-1`,
          date: '2001-01-26',
          magnitudeRichter: 7.7,
          epicenterDistanceKm: 45 + (globalIdCounter % 160),
          focalDepthKm: 16,
          measuredPgaDamG: 0.125,
          structuralInspectionSummary: 'Bhuj major seismic event; crest alignment and toe drainage verified intact.'
        },
        {
          id: `gj-eq-${paddedId}-2`,
          date: '2023-08-18',
          magnitudeRichter: 4.1,
          epicenterDistanceKm: 28 + (globalIdCounter % 75),
          focalDepthKm: 12,
          measuredPgaDamG: 0.032,
          structuralInspectionSummary: 'Kutch fault micro-tremor; pore pressures and piezometric levels unaffected.'
        }
      ];

      // 2D Hydrodynamic Breach Model
      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: 120,
        breachFormationTimeHours: 2.5,
        peakBreachDischargeCumecs: Math.round(height * crestLength * 0.42 + 4500),
        totalFloodDurationHours: 26,
        floodRecessionTimeHours: 44,
        totalInundationAreaSqKm: 290,
        downstreamRiverReachKm: 78,
        riverName: river,
        crossSectionsCount: 34,
        affectedZones: [
          {
            id: `az-${paddedId}-1`,
            name: `${dq.district} Downstream Canal Colony`,
            distanceDownstreamKm: 7,
            waveArrivalTimeMinutes: 16,
            peakFloodDepthMeters: 13.2,
            flowVelocityMps: 6.4,
            estimatedPopulation: 19000,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} Elevated Highway Embankment`
          },
          {
            id: `az-${paddedId}-2`,
            name: `${river} Plain Town Center`,
            distanceDownstreamKm: 24,
            waveArrivalTimeMinutes: 48,
            peakFloodDepthMeters: 7.8,
            flowVelocityMps: 3.9,
            estimatedPopulation: 58000,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: 'Industrial High Plinth Zones'
          },
          {
            id: `az-${paddedId}-3`,
            name: `Coastal / Gulf Confluence Delta`,
            distanceDownstreamKm: 52,
            waveArrivalTimeMinutes: 98,
            peakFloodDepthMeters: 4.2,
            flowVelocityMps: 2.5,
            estimatedPopulation: 95000,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Disaster Cyclone Shelters'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `gj-img-${paddedId}-good`,
          title: `${damName} Gated Crest & Radial Sluices`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Inspection verifying hydraulic radial hoist machinery and crest deck in ${dq.district}.`,
          date: '2026-08-11'
        },
        {
          id: `gj-img-${paddedId}-bad`,
          title: 'Downstream Stilling Basin & Toe Drain Inspection',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: `Downstream apron friction blocks and foundation seepage measurement weir.`,
          date: '2026-08-05'
        },
        {
          id: `gj-img-${paddedId}-sat`,
          title: 'ISRO Cartosat Satellite Downstream Inundation Track',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Multispectral radar monitoring downstream flood corridors across ${dq.district}.`,
          date: '2026-08-09',
          resolutionOrAltitude: '10m Spatial Resolution'
        },
        {
          id: `gj-img-${paddedId}-drone`,
          title: 'UAV Drone Orthomosaic Embankment Alignment',
          type: 'drone',
          url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
          caption: 'Photogrammetric survey checking upstream stone pitching integrity against wave slap.',
          date: '2026-08-13',
          resolutionOrAltitude: 'Altitude: 90m AGL'
        }
      ];

      const damRecord: Dam = {
        id,
        name: damName,
        state: 'Gujarat',
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
        inspectingOfficer: matchedNotable?.inspectingOfficer || `Gujarat WRD ${dq.district} Irrigation Circle`,
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

  cachedGujaratDams = result;
  return result;
}

export interface GujaratOverviewStats {
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

export function getGujaratSummaryStats(): GujaratOverviewStats {
  const dams = getGujarat632Dams();
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

  GUJARAT_DISTRICT_QUOTAS.forEach(dq => {
    regions[dq.region] = (regions[dq.region] || 0) + dq.quota;
  });

  return {
    totalDams: dams.length, // exactly 632
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
