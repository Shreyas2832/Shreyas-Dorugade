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

export const UTTARAKHAND_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'utk-dam-tehri',
    name: 'Tehri Dam (India\'s Highest Dam)',
    state: 'Uttarakhand',
    district: 'Tehri Garhwal',
    river: 'Bhagirathi',
    basin: 'Ganga Basin',
    yearCompleted: 2006,
    damType: 'Earth and Rock-fill Dam (Highest in India)',
    heightMeters: 260.5, // #1 Highest Dam in India, #4 in the World
    crestLengthMeters: 575.0,
    fullReservoirLevelMeters: 830.0,
    maximumWaterLevelMeters: 835.0,
    crestLevelMeters: 839.5,
    currentWaterLevelMeters: 825.4,
    grossStorageCapacityLiters: 3540000000000, // 3.54 Trillion Liters (125 TMC)
    currentWaterVolumeLiters: 3280000000000,
    spillwayCapacityCumecs: 15540,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-20',
    inspectingOfficer: 'THDC India Limited Dam Safety Directorate & CWC'
  },
  {
    id: 'utk-dam-koteshwar',
    name: 'Koteshwar Dam',
    state: 'Uttarakhand',
    district: 'Tehri Garhwal',
    river: 'Bhagirathi',
    basin: 'Ganga Basin',
    yearCompleted: 2011,
    damType: 'Concrete Gravity',
    heightMeters: 97.5,
    crestLengthMeters: 387.0,
    fullReservoirLevelMeters: 612.5,
    maximumWaterLevelMeters: 615.0,
    crestLevelMeters: 618.0,
    currentWaterLevelMeters: 610.2,
    grossStorageCapacityLiters: 88000000000,
    currentWaterVolumeLiters: 79000000000,
    spillwayCapacityCumecs: 13240,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-18',
    inspectingOfficer: 'THDC India Limited Koteshwar Project Division'
  },
  {
    id: 'utk-dam-ramganga',
    name: 'Ramganga Dam (Kalagarh Dam)',
    state: 'Uttarakhand',
    district: 'Pauri Garhwal',
    river: 'Ramganga',
    basin: 'Ganga Basin',
    yearCompleted: 1974,
    damType: 'Earth and Rock-fill Dam',
    heightMeters: 128.0,
    crestLengthMeters: 630.0,
    fullReservoirLevelMeters: 365.3,
    maximumWaterLevelMeters: 366.2,
    crestLevelMeters: 372.0,
    currentWaterLevelMeters: 359.8,
    grossStorageCapacityLiters: 2450000000000, // 2.45 Trillion Liters
    currentWaterVolumeLiters: 2150000000000,
    spillwayCapacityCumecs: 8467,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'UP Irrigation Dept Kalagarh Division & Uttarakhand Jal Sansthan'
  },
  {
    id: 'utk-dam-ichari',
    name: 'Ichari Dam',
    state: 'Uttarakhand',
    district: 'Dehradun',
    river: 'Tons',
    basin: 'Yamuna Basin',
    yearCompleted: 1972,
    damType: 'Concrete Straight Gravity',
    heightMeters: 59.25,
    crestLengthMeters: 155.0,
    fullReservoirLevelMeters: 644.75,
    maximumWaterLevelMeters: 645.5,
    crestLevelMeters: 648.0,
    currentWaterLevelMeters: 643.1,
    grossStorageCapacityLiters: 11550000000,
    currentWaterVolumeLiters: 10200000000,
    spillwayCapacityCumecs: 14800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-12',
    inspectingOfficer: 'UJVN Limited Yamuna Valley Project Directorate'
  },
  {
    id: 'utk-dam-lakhwar',
    name: 'Lakhwar Multipurpose Dam',
    state: 'Uttarakhand',
    district: 'Dehradun',
    river: 'Yamuna',
    basin: 'Yamuna Basin',
    yearCompleted: 2024,
    damType: 'Concrete Gravity',
    heightMeters: 192.0,
    crestLengthMeters: 452.0,
    fullReservoirLevelMeters: 796.0,
    maximumWaterLevelMeters: 800.0,
    crestLevelMeters: 804.0,
    currentWaterLevelMeters: 791.5,
    grossStorageCapacityLiters: 580000000000,
    currentWaterVolumeLiters: 512000000000,
    spillwayCapacityCumecs: 8200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-09',
    inspectingOfficer: 'UJVN Limited & Upper Yamuna River Board'
  },
  {
    id: 'utk-dam-dhauliganga',
    name: 'Dhauliganga Dam (Chirkila)',
    state: 'Uttarakhand',
    district: 'Pithoragarh',
    river: 'Dhauliganga',
    basin: 'Sharda / Mahakali Basin',
    yearCompleted: 2005,
    damType: 'Concrete Faced Rock-fill (CFRD)',
    heightMeters: 56.0,
    crestLengthMeters: 270.0,
    fullReservoirLevelMeters: 1345.0,
    maximumWaterLevelMeters: 1348.5,
    crestLevelMeters: 1352.0,
    currentWaterLevelMeters: 1342.8,
    grossStorageCapacityLiters: 6200000000,
    currentWaterVolumeLiters: 5400000000,
    spillwayCapacityCumecs: 3200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-06',
    inspectingOfficer: 'NHPC Limited Dhauliganga Power Station'
  }
];

export interface UttarakhandDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const UTTARAKHAND_DISTRICT_QUOTAS: UttarakhandDistrictQuota[] = [
  { district: 'Tehri Garhwal', quota: 6, primaryBasin: 'Bhagirathi & Bhilangana Basin', majorRivers: ['Bhagirathi', 'Bhilangana', 'Bal Ganga'] },
  { district: 'Dehradun', quota: 5, primaryBasin: 'Yamuna & Tons Basin', majorRivers: ['Yamuna', 'Tons', 'Asan', 'Song'] },
  { district: 'Pauri Garhwal', quota: 4, primaryBasin: 'Alaknanda & Ramganga Basin', majorRivers: ['Alaknanda', 'Ramganga', 'Nayyar'] },
  { district: 'Uttarkashi', quota: 3, primaryBasin: 'Upper Bhagirathi & Yamuna Basin', majorRivers: ['Bhagirathi', 'Yamuna', 'Jadh Ganga'] },
  { district: 'Chamoli', quota: 3, primaryBasin: 'Alaknanda & Dhauliganga Basin', majorRivers: ['Alaknanda', 'Dhauliganga', 'Rishiganga', 'Mandakini'] },
  { district: 'Pithoragarh', quota: 2, primaryBasin: 'Sharda & Dhauliganga Basin', majorRivers: ['Dhauliganga', 'Gori Ganga', 'Kali / Sharda'] },
  { district: 'Rudraprayag', quota: 1, primaryBasin: 'Mandakini Basin', majorRivers: ['Mandakini', 'Madhyamaheshwar'] },
  { district: 'Champawat', quota: 1, primaryBasin: 'Sharda Basin', majorRivers: ['Sharda', 'Lodh'] },
  { district: 'Haridwar', quota: 1, primaryBasin: 'Ganga Basin', majorRivers: ['Ganga', 'Solani'] }
];

// Ensure sum is exactly 26
const initialSumUTK = UTTARAKHAND_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumUTK !== 26) {
  const diff = 26 - initialSumUTK;
  UTTARAKHAND_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedUttarakhandDams: Dam[] | null = null;

const UTK_NAMING_PATTERNS = [
  'Dam', 'Hydel Project', 'Barrage', 'Headworks', 'Reservoir',
  'Weir', 'Diversion Dam', 'Tunnel Spillway Scheme', 'Sagar', 'Rock-fill Project'
];

const UTK_TOPONYMS = [
  'Tehri', 'Koteshwar', 'Ramganga', 'Ichari', 'Lakhwar', 'Vyasi',
  'Dhauliganga', 'Vishnuprayag', 'Maneri', 'Uttarkashi', 'Srinagar',
  'Tanakpur', 'Bhilangana', 'Alaknanda', 'Bhagirathi', 'Tons'
];

export function getUttarakhand26Dams(): Dam[] {
  if (cachedUttarakhandDams) return cachedUttarakhandDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  UTTARAKHAND_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-utk-${paddedId}`;

      const matchedNotable = UTTARAKHAND_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = UTK_TOPONYMS[(globalIdCounter + i * 2) % UTK_TOPONYMS.length];
      const pattern = UTK_NAMING_PATTERNS[(i + globalIdCounter) % UTK_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((45.0 + ((globalIdCounter * 8.5) % 95)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(250 + ((globalIdCounter * 35) % 950));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((450 + ((globalIdCounter * 38.5) % 950)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.8 + ((globalIdCounter % 4) * 0.4)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 3.2).toFixed(2));

      const fillRatio = 0.72 + ((globalIdCounter % 24) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 3.2 + (fillRatio * 3.2)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((90 + ((globalIdCounter * 65) % 1200)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.52, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1975 + (globalIdCounter % 50));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Earth and Rock-fill Dam with Clay Core' :
        globalIdCounter % 3 === 1 ? 'Concrete Gravity' : 'Concrete Faced Rock-fill (CFRD)'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 77) cond = 'good';
        else if (condHash < 92) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 39.5 : cond === 'alert' ? 22.8 : cond === 'moderate' ? 8.6 : 1.9;
      const turbidity = cond === 'critical' ? 68 : cond === 'alert' ? 32 : cond === 'moderate' ? 9.0 : 1.8;
      const seepageRecord: SeepageRecord = {
        id: `utk-sep-${paddedId}`,
        timestamp: '2026-08-17 06:30',
        location: `Grout curtain inspection gallery and relief wells in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.3)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.45)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Lesser Himalayan quartzite fault fissure'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Deep borehole flushing with high-pressure nitrogen and bentonite sealant inspection.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `utk-wp-${paddedId}`,
        timestamp: '2026-08-15 16:15',
        reservoirLevelMeters: currentLevel,
        location: `Power intake shaft bellmouth and shaft spillway in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.6 : cond === 'alert' ? 1.8 : 0.5,
        rotationalSpeedRpm: cond === 'critical' ? 52 : cond === 'alert' ? 26 : 8,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex radial splitter beams engaged; submerged baffle grid positioned.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-UTK-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.70).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.65).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.86).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.76),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Abutment core grout contact zone in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-UTK-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 18.5 : cond === 'alert' ? 9.2 : 3.0,
          normalBaselineMm: 2.4,
          thresholdAlertMm: 12.8,
          tiltRateMmPerMonth: cond === 'critical' ? 0.92 : cond === 'alert' ? 0.42 : 0.05,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-UTK-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.024,
          designBasisMceG: 0.45, // Himalayan Seismic Zone IV/V
          ambientMicrotremorsHz: 4.8,
          status: 'Normal',
          lastTremorDate: '2026-06-25 (M2.6 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: 'High', // High in all Himalayan reservoirs
        geologicalFormation: 'Central Himalayan Crystalline thrust sheets with Main Central Thrust (MCT) shears',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Adits',
            description: 'Massive drainage adits excavated deep into abutments with fan-pattern relief boreholes.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'Prestressed Cable Anchors & Wire Netting',
            description: 'High-capacity 200-tonne cable anchors with Geobrugg wire mesh and fiber-reinforced shotcrete.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 8,
        rockBoltsInstalled: 3400,
        shotcreteAreaSqM: 28000,
        biorevetmentMeshType: 'Biaxial High-Tensile Steel Wire Netting & Cable Anchors'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 2150, monsoonPeak24hMm: 290, historicalDeviationPercent: 16.8 },
        { year: 2024, totalAnnualMm: 1980, monsoonPeak24hMm: 245, historicalDeviationPercent: 7.5 },
        { year: 2023, totalAnnualMm: 2380, monsoonPeak24hMm: 340, historicalDeviationPercent: 24.2 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `utk-eq-${paddedId}`,
          date: '2026-06-25',
          magnitudeRichter: 2.6,
          epicenterDistanceKm: 32,
          focalDepthKm: 12,
          measuredPgaDamG: 0.024,
          structuralInspectionSummary: 'Post-tremor gallery plumb line scan and inclinometer verification indicated zero displacement.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(140 + ((globalIdCounter * 6) % 190)),
        breachFormationTimeHours: 2.2,
        peakBreachDischargeCumecs: Math.round(52000 + ((globalIdCounter * 1600) % 75000)),
        totalFloodDurationHours: 28,
        floodRecessionTimeHours: 48,
        totalInundationAreaSqKm: 280,
        downstreamRiverReachKm: 95,
        riverName: river,
        crossSectionsCount: 45,
        affectedZones: [
          {
            id: `az-utk-${paddedId}-1`,
            name: `${dq.district} Downstream Himalayan Gorge Town`,
            distanceDownstreamKm: 6.5,
            waveArrivalTimeMinutes: 15,
            peakFloodDepthMeters: 9.2,
            flowVelocityMps: 6.2,
            estimatedPopulation: 5200,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Mountain Ridge Shelters`
          },
          {
            id: `az-utk-${paddedId}-2`,
            name: `${river} Valley Pilgrim Route & Habitation Hub`,
            distanceDownstreamKm: 19.2,
            waveArrivalTimeMinutes: 44,
            peakFloodDepthMeters: 5.8,
            flowVelocityMps: 4.1,
            estimatedPopulation: 11500,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'District Administrative High Plateau'
          },
          {
            id: `az-utk-${paddedId}-3`,
            name: 'Foothills Plains Entry Settlement',
            distanceDownstreamKm: 39.0,
            waveArrivalTimeMinutes: 105,
            peakFloodDepthMeters: 3.4,
            flowVelocityMps: 2.2,
            estimatedPopulation: 19000,
            evacuationStatus: 'Relief Camp Ready',
            safeShelterZone: 'National Highway Elevated Transit Terminal'
          }
        ]
      };

      const images: DamImage[] = [
        {
          id: `utk-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying rock-fill face rip-rap and spillway chutes in ${dq.district}.`,
          date: '2026-08-16'
        },
        {
          id: `utk-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-08'
        },
        {
          id: `utk-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} Himalayan gorge flood corridors.`,
          date: '2026-08-12',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `utk-img-${paddedId}-drone`,
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
        state: 'Uttarakhand',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(2200 + ((globalIdCounter * 450) % 11000)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-16',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'THDC India & UJVN Limited Dam Safety Wing & CWC',
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

  cachedUttarakhandDams = result;
  return result;
}

export function getUttarakhandSummaryStats() {
  const dams = getUttarakhand26Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Uttarakhand',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & Uttarakhand Dam Safety Organization'
  };
}
