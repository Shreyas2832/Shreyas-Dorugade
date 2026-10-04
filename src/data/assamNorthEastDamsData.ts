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

export const ASSAM_NE_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'ane-dam-subansiri',
    name: 'Subansiri Lower Dam (Largest Hydro Project in India)',
    state: 'Assam and North East',
    district: 'Dhemaji / Lower Subansiri',
    river: 'Subansiri',
    basin: 'Brahmaputra Basin',
    yearCompleted: 2024,
    damType: 'Concrete Gravity (2000 MW Mega Project)',
    heightMeters: 116.0,
    crestLengthMeters: 284.0,
    fullReservoirLevelMeters: 205.0,
    maximumWaterLevelMeters: 208.25,
    crestLevelMeters: 210.0,
    currentWaterLevelMeters: 198.5,
    grossStorageCapacityLiters: 1365000000000, // 1.365 Trillion Liters
    currentWaterVolumeLiters: 1210000000000,
    spillwayCapacityCumecs: 33800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-22',
    inspectingOfficer: 'NHPC Limited Subansiri Lower Hydroelectric Project & CWC'
  },
  {
    id: 'ane-dam-umiam',
    name: 'Umiam Dam (Barapani Dam)',
    state: 'Assam and North East',
    district: 'Ri-Bhoi (Meghalaya)',
    river: 'Umiam',
    basin: 'Brahmaputra Basin',
    yearCompleted: 1965,
    damType: 'Composite Concrete Gravity & Earth Dam',
    heightMeters: 73.0,
    crestLengthMeters: 171.0,
    fullReservoirLevelMeters: 981.46,
    maximumWaterLevelMeters: 984.5,
    crestLevelMeters: 987.0,
    currentWaterLevelMeters: 976.2,
    grossStorageCapacityLiters: 179000000000,
    currentWaterVolumeLiters: 154000000000,
    spillwayCapacityCumecs: 1954,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-18',
    inspectingOfficer: 'Meghalaya Energy Corporation Limited (MeECL) & CWC'
  },
  {
    id: 'ane-dam-kopili',
    name: 'Kopili Dam (Khandong Dam)',
    state: 'Assam and North East',
    district: 'Dima Hasao (Assam)',
    river: 'Kopili',
    basin: 'Brahmaputra Basin',
    yearCompleted: 1984,
    damType: 'Concrete Gravity with Semi-underground Powerhouse',
    heightMeters: 66.0,
    crestLengthMeters: 243.0,
    fullReservoirLevelMeters: 760.0,
    maximumWaterLevelMeters: 762.0,
    crestLevelMeters: 765.0,
    currentWaterLevelMeters: 754.5,
    grossStorageCapacityLiters: 145000000000,
    currentWaterVolumeLiters: 128000000000,
    spillwayCapacityCumecs: 5400,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'North Eastern Electric Power Corporation (NEEPCO) Dam Safety Cell'
  },
  {
    id: 'ane-dam-ranganadi',
    name: 'Ranganadi Dam (Yazali)',
    state: 'Assam and North East',
    district: 'Lower Subansiri (Arunachal)',
    river: 'Ranganadi',
    basin: 'Brahmaputra Basin',
    yearCompleted: 2002,
    damType: 'Concrete Gravity Diversion Dam',
    heightMeters: 68.0,
    crestLengthMeters: 345.0,
    fullReservoirLevelMeters: 567.0,
    maximumWaterLevelMeters: 569.5,
    crestLevelMeters: 572.0,
    currentWaterLevelMeters: 563.8,
    grossStorageCapacityLiters: 21280000000,
    currentWaterVolumeLiters: 18900000000,
    spillwayCapacityCumecs: 6800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-11',
    inspectingOfficer: 'NEEPCO Ranganadi Hydroelectric Plant Directorate'
  },
  {
    id: 'ane-dam-doyang',
    name: 'Doyang Dam',
    state: 'Assam and North East',
    district: 'Wokha (Nagaland)',
    river: 'Doyang',
    basin: 'Brahmaputra / Dhansiri Basin',
    yearCompleted: 2000,
    damType: 'Rock-fill Embankment with Impervious Clay Core',
    heightMeters: 90.0,
    crestLengthMeters: 462.0,
    fullReservoirLevelMeters: 333.0,
    maximumWaterLevelMeters: 335.5,
    crestLevelMeters: 339.0,
    currentWaterLevelMeters: 328.4,
    grossStorageCapacityLiters: 535000000000,
    currentWaterVolumeLiters: 468000000000,
    spillwayCapacityCumecs: 6077,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-07',
    inspectingOfficer: 'NEEPCO Doyang Hydro Electric Plant Directorate'
  }
];

export interface AssamNEDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const ASSAM_NE_DISTRICT_QUOTAS: AssamNEDistrictQuota[] = [
  { district: 'Dhemaji (Assam)', quota: 3, primaryBasin: 'Subansiri Basin', majorRivers: ['Subansiri', 'Gai', 'Sisi'] },
  { district: 'Dima Hasao (Assam)', quota: 2, primaryBasin: 'Kopili Basin', majorRivers: ['Kopili', 'Khandong', 'Diyung'] },
  { district: 'Karbi Anglong (Assam)', quota: 2, primaryBasin: 'Borpani & Dhansiri Basin', majorRivers: ['Borpani', 'Karbi Langpi', 'Jamuna'] },
  { district: 'Baksa (Assam)', quota: 1, primaryBasin: 'Brahmaputra Basin', majorRivers: ['Pagladiya', 'Moutanga'] },
  { district: 'Ri-Bhoi (Meghalaya)', quota: 2, primaryBasin: 'Umiam & Umtru Basin', majorRivers: ['Umiam', 'Umtru', 'Kyrdemkulai'] },
  { district: 'Lower Subansiri (Arunachal)', quota: 2, primaryBasin: 'Subansiri & Ranganadi', majorRivers: ['Subansiri', 'Ranganadi', 'Dikrong'] },
  { district: 'Wokha (Nagaland)', quota: 1, primaryBasin: 'Doyang Basin', majorRivers: ['Doyang', 'Chubi'] },
  { district: 'Imphal & Churachandpur (Manipur)', quota: 1, primaryBasin: 'Manipur River Basin', majorRivers: ['Khuga', 'Singda', 'Barak'] },
  { district: 'Aizawl & Kolasib (Mizoram)', quota: 1, primaryBasin: 'Barak & Tuirial Basin', majorRivers: ['Tuirial', 'Serlui B', 'Tlawng'] },
  { district: 'Gomati (Tripura)', quota: 1, primaryBasin: 'Gomati River Basin', majorRivers: ['Gumti', 'Raima', 'Sarma'] }
];

// Ensure sum is exactly 16
const initialSumANE = ASSAM_NE_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumANE !== 16) {
  const diff = 16 - initialSumANE;
  ASSAM_NE_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedAssamNEDams: Dam[] | null = null;

const ANE_NAMING_PATTERNS = [
  'Dam', 'Hydel Project', 'Barrage', 'Headworks', 'Reservoir',
  'Weir', 'Diversion Dam', 'Multipurpose Project', 'Hydro Scheme'
];

const ANE_TOPONYMS = [
  'Subansiri', 'Umiam', 'Kopili', 'Ranganadi', 'Doyang', 'Karbi Langpi',
  'Khandong', 'Pagladiya', 'Kyrdemkulai', 'Myntdu Leshka', 'Khuga',
  'Singda', 'Tuirial', 'Serlui B', 'Gumti', 'Kameng'
];

export function getAssamNE16Dams(): Dam[] {
  if (cachedAssamNEDams) return cachedAssamNEDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  ASSAM_NE_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-ane-${paddedId}`;

      const matchedNotable = ASSAM_NE_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = ANE_TOPONYMS[(globalIdCounter + i * 2) % ANE_TOPONYMS.length];
      const pattern = ANE_NAMING_PATTERNS[(i + globalIdCounter) % ANE_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((40.0 + ((globalIdCounter * 8.8) % 85)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(260 + ((globalIdCounter * 42) % 950));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((350 + ((globalIdCounter * 55.0) % 850)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.8 + ((globalIdCounter % 4) * 0.4)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.8).toFixed(2));

      const fillRatio = 0.76 + ((globalIdCounter % 20) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.2 + (fillRatio * 3.2)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((85 + ((globalIdCounter * 65) % 1100)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.55, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1978 + (globalIdCounter % 46));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Concrete Gravity' :
        globalIdCounter % 3 === 1 ? 'Rock-fill Embankment with Clay Core' : 'Composite Concrete Spillway & Earth Flanks'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 78) cond = 'good';
        else if (condHash < 92) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 39.2 : cond === 'alert' ? 22.5 : cond === 'moderate' ? 8.5 : 1.9;
      const turbidity = cond === 'critical' ? 68 : cond === 'alert' ? 32 : cond === 'moderate' ? 9.0 : 1.7;
      const seepageRecord: SeepageRecord = {
        id: `ane-sep-${paddedId}`,
        timestamp: '2026-08-17 06:40',
        location: `Foundation drainage gallery relief wells in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.28)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.42)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Eastern Himalayan syntaxis thrust fault'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'High-pressure air-water jet flushing of drainage holes and sensor recalibration.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `ane-wp-${paddedId}`,
        timestamp: '2026-08-15 16:20',
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
          stationId: `PZ-ANE-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.70).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.65).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.85).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.75),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Abutment rock contact gallery in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-ANE-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 18.0 : cond === 'alert' ? 8.9 : 2.8,
          normalBaselineMm: 2.3,
          thresholdAlertMm: 12.4,
          tiltRateMmPerMonth: cond === 'critical' ? 0.89 : cond === 'alert' ? 0.41 : 0.05,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-ANE-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.026,
          designBasisMceG: 0.50, // Northeast Himalayan Seismic Zone V (Highest seismicity)
          ambientMicrotremorsHz: 5.0,
          status: 'Normal',
          lastTremorDate: '2026-06-22 (M2.7 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: 'High', // High in Northeast Himalayan terrain
        geologicalFormation: 'Eastern Himalayan Syntaxis with Main Boundary Thrust (MBT) and Siwalik sandstone-shale molasse',
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
        rockBoltsInstalled: 3200,
        shotcreteAreaSqM: 26000,
        biorevetmentMeshType: 'High-Tensile Tecco Wire Netting & Prestressed Tendons'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 3450, monsoonPeak24hMm: 380, historicalDeviationPercent: 18.5 }, // Cherrapunji / NE monsoon belt
        { year: 2024, totalAnnualMm: 3200, monsoonPeak24hMm: 330, historicalDeviationPercent: 8.2 },
        { year: 2023, totalAnnualMm: 3850, monsoonPeak24hMm: 440, historicalDeviationPercent: 28.0 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `ane-eq-${paddedId}`,
          date: '2026-06-22',
          magnitudeRichter: 2.7,
          epicenterDistanceKm: 34,
          focalDepthKm: 16,
          measuredPgaDamG: 0.026,
          structuralInspectionSummary: 'Post-tremor instrumentation scan and inverted pendulum reading confirmed zero shift.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(140 + ((globalIdCounter * 6) % 190)),
        breachFormationTimeHours: 2.2,
        peakBreachDischargeCumecs: Math.round(56000 + ((globalIdCounter * 1650) % 78000)),
        totalFloodDurationHours: 28,
        floodRecessionTimeHours: 48,
        totalInundationAreaSqKm: 290,
        downstreamRiverReachKm: 95,
        riverName: river,
        crossSectionsCount: 45,
        affectedZones: [
          {
            id: `az-ane-${paddedId}-1`,
            name: `${dq.district} Downstream Foothills Riparian Hub`,
            distanceDownstreamKm: 6.5,
            waveArrivalTimeMinutes: 15,
            peakFloodDepthMeters: 9.2,
            flowVelocityMps: 6.2,
            estimatedPopulation: 5100,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Mountain Terrace Shelters`
          },
          {
            id: `az-ane-${paddedId}-2`,
            name: `${river} Valley Plains Ingress Township`,
            distanceDownstreamKm: 19.0,
            waveArrivalTimeMinutes: 44,
            peakFloodDepthMeters: 5.7,
            flowVelocityMps: 4.1,
            estimatedPopulation: 11200,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Sub-Divisional Elevated Administrative Complex'
          },
          {
            id: `az-ane-${paddedId}-3`,
            name: 'Brahmaputra Floodplain Riverine Belt',
            distanceDownstreamKm: 39.0,
            waveArrivalTimeMinutes: 104,
            peakFloodDepthMeters: 3.3,
            flowVelocityMps: 2.1,
            estimatedPopulation: 18200,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Elevated Transit Terminal'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `ane-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying concrete monolith structural integrity and radial crest gates in ${dq.district}.`,
          date: '2026-08-16'
        },
        {
          id: `ane-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-08'
        },
        {
          id: `ane-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} Himalayan gorge flood corridors.`,
          date: '2026-08-12',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `ane-img-${paddedId}-drone`,
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
        state: 'Assam and North East',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(2300 + ((globalIdCounter * 460) % 11800)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-16',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'NHPC / NEEPCO & North Eastern Dam Safety Authority & CWC',
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

  cachedAssamNEDams = result;
  return result;
}

export function getAssamNESummaryStats() {
  const dams = getAssamNE16Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Assam and North East',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & NEEPCO / NHPC Dam Safety Directorates'
  };
}
