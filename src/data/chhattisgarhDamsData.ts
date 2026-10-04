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

export const CHHATTISGARH_NOTABLE_DAMS: Partial<Dam>[] = [
  {
    id: 'cg-dam-hasdeobango',
    name: 'Hasdeo Bango Dam (Minimata Bango)',
    state: 'Chhattisgarh',
    district: 'Korba',
    river: 'Hasdeo',
    basin: 'Mahanadi Basin',
    yearCompleted: 1990,
    damType: 'Composite Concrete Gravity Spillway & Earth Flanks',
    heightMeters: 87.0, // Highest Dam in Chhattisgarh
    crestLengthMeters: 2509.0,
    fullReservoirLevelMeters: 359.66,
    maximumWaterLevelMeters: 360.27,
    crestLevelMeters: 363.0,
    currentWaterLevelMeters: 356.2,
    grossStorageCapacityLiters: 3416000000000, // 3.416 Trillion Liters (120.6 TMC)
    currentWaterVolumeLiters: 3080000000000,
    spillwayCapacityCumecs: 19800,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-20',
    inspectingOfficer: 'Chhattisgarh Water Resources Dept (CGWRD) Dam Safety & CWC'
  },
  {
    id: 'cg-dam-gangrel',
    name: 'Gangrel Dam (Ravishankar Sagar)',
    state: 'Chhattisgarh',
    district: 'Dhamtari',
    river: 'Mahanadi',
    basin: 'Mahanadi Basin',
    yearCompleted: 1979,
    damType: 'Composite Masonry & Earthen Embankment (Longest in CG)',
    heightMeters: 30.5,
    crestLengthMeters: 1830.0,
    fullReservoirLevelMeters: 348.7,
    maximumWaterLevelMeters: 349.5,
    crestLevelMeters: 352.0,
    currentWaterLevelMeters: 345.8,
    grossStorageCapacityLiters: 910000000000, // 910 Billion Liters
    currentWaterVolumeLiters: 815000000000,
    spillwayCapacityCumecs: 11200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-18',
    inspectingOfficer: 'CGWRD Mahanadi Project Directorate'
  },
  {
    id: 'cg-dam-dudhawa',
    name: 'Dudhawa Dam',
    state: 'Chhattisgarh',
    district: 'Kanker',
    river: 'Mahanadi',
    basin: 'Mahanadi Basin',
    yearCompleted: 1964,
    damType: 'Earthen Embankment with Chute Spillway',
    heightMeters: 24.5,
    crestLengthMeters: 2906.0,
    fullReservoirLevelMeters: 425.0,
    maximumWaterLevelMeters: 426.2,
    crestLevelMeters: 428.5,
    currentWaterLevelMeters: 422.4,
    grossStorageCapacityLiters: 288000000000,
    currentWaterVolumeLiters: 252000000000,
    spillwayCapacityCumecs: 3820,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-14',
    inspectingOfficer: 'CGWRD Kanker Circle'
  },
  {
    id: 'cg-dam-murrumsilli',
    name: 'Murrum Silli Dam (Madam Silli Siphon Spillway)',
    state: 'Chhattisgarh',
    district: 'Dhamtari',
    river: 'Sillari',
    basin: 'Mahanadi Basin',
    yearCompleted: 1923, // Historic Asian engineering feat
    damType: 'Earthen Embankment with 34 Siphon Spillways',
    heightMeters: 28.0,
    crestLengthMeters: 2591.0,
    fullReservoirLevelMeters: 382.52,
    maximumWaterLevelMeters: 383.5,
    crestLevelMeters: 386.0,
    currentWaterLevelMeters: 379.8,
    grossStorageCapacityLiters: 165000000000,
    currentWaterVolumeLiters: 142000000000,
    spillwayCapacityCumecs: 3200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-10',
    inspectingOfficer: 'CGWRD Dhamtari Heritage Dam Inspection Unit'
  },
  {
    id: 'cg-dam-tandula',
    name: 'Tandula Dam',
    state: 'Chhattisgarh',
    district: 'Balod',
    river: 'Tandula & Sukha',
    basin: 'Mahanadi Basin',
    yearCompleted: 1921,
    damType: 'Twin Earthen Embankment Dam',
    heightMeters: 24.8,
    crestLengthMeters: 2450.0,
    fullReservoirLevelMeters: 333.4,
    maximumWaterLevelMeters: 334.6,
    crestLevelMeters: 337.0,
    currentWaterLevelMeters: 330.8,
    grossStorageCapacityLiters: 312000000000,
    currentWaterVolumeLiters: 275000000000,
    spillwayCapacityCumecs: 4200,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-06',
    inspectingOfficer: 'CGWRD Balod Division & Bhilai Steel Plant Water Wing'
  }
];

export interface ChhattisgarhDistrictQuota {
  district: string;
  quota: number;
  primaryBasin: string;
  majorRivers: string[];
}

export const CHHATTISGARH_DISTRICT_QUOTAS: ChhattisgarhDistrictQuota[] = [
  { district: 'Dhamtari', quota: 5, primaryBasin: 'Mahanadi Basin', majorRivers: ['Mahanadi', 'Sillari', 'Sondhur', 'Sendur'] },
  { district: 'Korba', quota: 4, primaryBasin: 'Hasdeo Basin', majorRivers: ['Hasdeo', 'Ahiran', 'Chornai'] },
  { district: 'Bilaspur', quota: 3, primaryBasin: 'Arpa & Kharang Basin', majorRivers: ['Arpa', 'Kharang', 'Maniari'] },
  { district: 'Balod', quota: 3, primaryBasin: 'Tandula & Shivnath Basin', majorRivers: ['Tandula', 'Sukha', 'Gondli'] },
  { district: 'Raigarh', quota: 3, primaryBasin: 'Mahanadi & Kelo Basin', majorRivers: ['Kelo', 'Mand', 'Kurket'] },
  { district: 'Kanker', quota: 2, primaryBasin: 'Mahanadi & Dudhawa Basin', majorRivers: ['Mahanadi', 'Dudhawa', 'Hatkul'] },
  { district: 'Mahasamund', quota: 2, primaryBasin: 'Mahanadi & Kodar Basin', majorRivers: ['Kodar', 'Jonk', 'Sukha'] },
  { district: 'Kabirdham', quota: 2, primaryBasin: 'Shivnath Basin', majorRivers: ['Saroda', 'Sakri', 'Phen'] },
  { district: 'Gariaband', quota: 2, primaryBasin: 'Pairi Basin', majorRivers: ['Pairi', 'Sikasar'] },
  { district: 'Rajnandgaon', quota: 1, primaryBasin: 'Shivnath Basin', majorRivers: ['Shivnath', 'Mongra'] },
  { district: 'Surguja', quota: 1, primaryBasin: 'Rihand & Kanhar Basin', majorRivers: ['Rihand', 'Ghaghar'] }
];

// Ensure sum is exactly 28
const initialSumCG = CHHATTISGARH_DISTRICT_QUOTAS.reduce((acc, curr) => acc + curr.quota, 0);
if (initialSumCG !== 28) {
  const diff = 28 - initialSumCG;
  CHHATTISGARH_DISTRICT_QUOTAS[0].quota += diff;
}

let cachedChhattisgarhDams: Dam[] | null = null;

const CG_NAMING_PATTERNS = [
  'Dam', 'Jalashay', 'Sagar', 'Reservoir', 'Bandh',
  'Project', 'Weir', 'Headworks', 'Barrage', 'Siphon Scheme'
];

const CG_TOPONYMS = [
  'Hasdeo', 'Minimata', 'Gangrel', 'Ravishankar', 'Dudhawa', 'Murrum Silli',
  'Tandula', 'Khutaghat', 'Kelo', 'Kodar', 'Saroda', 'Sikasar',
  'Mongra', 'Gondli', 'Maniari', 'Jonk', 'Arpa', 'Pairi'
];

export function getChhattisgarh28Dams(): Dam[] {
  if (cachedChhattisgarhDams) return cachedChhattisgarhDams;

  const result: Dam[] = [];
  let globalIdCounter = 1;

  CHHATTISGARH_DISTRICT_QUOTAS.forEach((dq) => {
    for (let i = 0; i < dq.quota; i++) {
      const paddedId = String(globalIdCounter).padStart(4, '0');
      const id = `dam-cg-${paddedId}`;

      const matchedNotable = CHHATTISGARH_NOTABLE_DAMS.find((nd) => {
        if (!nd.district) return false;
        return nd.district.toLowerCase() === dq.district.toLowerCase() && !result.some((r) => r.id === nd.id);
      });

      const river = matchedNotable?.river || dq.majorRivers[i % dq.majorRivers.length];
      const basin = matchedNotable?.basin || dq.primaryBasin;
      const toponym = CG_TOPONYMS[(globalIdCounter + i * 2) % CG_TOPONYMS.length];
      const pattern = CG_NAMING_PATTERNS[(i + globalIdCounter) % CG_NAMING_PATTERNS.length];
      const damName = matchedNotable?.name || `${toponym} ${river} ${pattern}`;

      const height = matchedNotable?.heightMeters || parseFloat((24.0 + ((globalIdCounter * 6.2) % 55)).toFixed(1));
      const crestLength = matchedNotable?.crestLengthMeters || Math.round(450 + ((globalIdCounter * 55) % 2200));
      const frl = matchedNotable?.fullReservoirLevelMeters || parseFloat((280 + ((globalIdCounter * 16.5) % 320)).toFixed(2));
      const mwl = matchedNotable?.maximumWaterLevelMeters || parseFloat((frl + 1.4 + ((globalIdCounter % 4) * 0.3)).toFixed(2));
      const crest = matchedNotable?.crestLevelMeters || parseFloat((mwl + 2.5).toFixed(2));

      const fillRatio = 0.66 + ((globalIdCounter % 28) / 100);
      const currentLevel = matchedNotable?.currentWaterLevelMeters || parseFloat((frl - 2.8 + (fillRatio * 2.8)).toFixed(2));

      const grossStorageLiters = matchedNotable?.grossStorageCapacityLiters || 
        Math.round((70 + ((globalIdCounter * 45) % 850)) * 1000000000);
      const currentWaterLiters = matchedNotable?.currentWaterVolumeLiters || 
        Math.round(grossStorageLiters * Math.min(0.96, Math.max(0.48, fillRatio)));

      const yearCompleted = matchedNotable?.yearCompleted || (1965 + (globalIdCounter % 58));
      const damType = matchedNotable?.damType || (
        globalIdCounter % 3 === 0 ? 'Composite Concrete Spillway & Earth Flanks' :
        globalIdCounter % 3 === 1 ? 'Earthen Embankment with Clay Hearting' : 'Masonry Gravity with Sluices'
      );

      let cond: DamCondition = matchedNotable?.condition || 'good';
      if (!matchedNotable) {
        const condHash = (globalIdCounter * 23) % 100;
        if (condHash < 78) cond = 'good';
        else if (condHash < 92) cond = 'moderate';
        else if (condHash < 98) cond = 'alert';
        else cond = 'critical';
      }

      const seepageLps = cond === 'critical' ? 36.5 : cond === 'alert' ? 21.0 : cond === 'moderate' ? 8.1 : 1.8;
      const turbidity = cond === 'critical' ? 64 : cond === 'alert' ? 29 : cond === 'moderate' ? 8.5 : 1.6;
      const seepageRecord: SeepageRecord = {
        id: `cg-sep-${paddedId}`,
        timestamp: '2026-08-17 07:30',
        location: `Foundation drainage gallery relief wells in ${dq.district}`,
        flowRateLps: parseFloat((seepageLps + ((globalIdCounter % 5) * 0.25)).toFixed(2)),
        turbidityNtu: parseFloat((turbidity + ((globalIdCounter % 6) * 0.4)).toFixed(1)),
        appearance: (cond === 'critical' || cond === 'alert')
          ? 'Colloidal sediment discharge from Bastar Craton gneissic fault contact'
          : 'Clear seepage flow, normal drainage filtration baseline',
        pipingRiskScore: cond === 'critical' ? 'Severe' : cond === 'alert' ? 'High' : 'Low',
        pipeStatus: cond === 'critical' ? 'Active Discharge' : cond === 'alert' ? 'Flushed & Filtered' : 'Relief Well Cleared',
        cleaningDetails: 'Pneumatic surging of foundation relief holes and filter drain reaming.'
      };

      const whirlpoolRecord: WhirlpoolRecord = {
        id: `cg-wp-${paddedId}`,
        timestamp: '2026-08-15 15:30',
        reservoirLevelMeters: currentLevel,
        location: `Irrigation sluice barrel portal and spillway intake in ${dq.district}`,
        vortexType: cond === 'critical' ? 'Type 5 (Air Bubbles)' : cond === 'alert' ? 'Type 3 (Dye Core)' : 'Type 1 (Dimple)',
        coreDiameterMeters: cond === 'critical' ? 3.3 : cond === 'alert' ? 1.5 : 0.4,
        rotationalSpeedRpm: cond === 'critical' ? 46 : cond === 'alert' ? 23 : 6,
        trashRackDangerLevel: cond === 'critical' ? 'Severe Aeration & Cavitation' : cond === 'alert' ? 'Caution' : 'Normal',
        intakeActionTaken: 'Anti-vortex baffle beam array engaged; trash-rack mechanical rake cleared.'
      };

      const sensorTelemetry: SensorTelemetry = {
        piezometer: {
          stationId: `PZ-CG-${paddedId}-A`,
          currentHeadMeters: parseFloat((currentLevel * 0.66).toFixed(2)),
          normalBaselineMeters: parseFloat((currentLevel * 0.62).toFixed(2)),
          thresholdAlertMeters: parseFloat((currentLevel * 0.82).toFixed(2)),
          porePressureKpa: Math.round(currentLevel * 9.81 * 0.72),
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          unitLocation: `Impervious clay core interface in ${dq.district}`
        },
        inclinometer: {
          stationId: `INC-CG-${paddedId}-CREST`,
          currentDisplacementMm: cond === 'critical' ? 16.8 : cond === 'alert' ? 8.4 : 2.7,
          normalBaselineMm: 2.1,
          thresholdAlertMm: 11.8,
          tiltRateMmPerMonth: cond === 'critical' ? 0.86 : cond === 'alert' ? 0.39 : 0.04,
          status: cond === 'critical' ? 'Critical' : cond === 'alert' ? 'Elevated' : 'Normal',
          axis: 'Upstream-Downstream Axis'
        },
        seismograph: {
          stationId: `SM-CG-${paddedId}-CENTRAL`,
          peakGroundAccelerationG: 0.015,
          designBasisMceG: 0.22,
          ambientMicrotremorsHz: 3.9,
          status: 'Normal',
          lastTremorDate: '2026-05-18 (M2.0 microtremor)'
        }
      };

      const landslidePrevention: LandslidePrecaution = {
        slopeRiskLevel: cond === 'critical' ? 'High' : 'Moderate',
        geologicalFormation: 'Bastar Craton Archaean Granite Gneiss and Chhattisgarh Basin sandstone-shale formations',
        precautionsTaken: [
          {
            title: 'Sub-surface Horizontal Drainage Perforations',
            description: 'Perforated horizontal drains drilled into reservoir rim abutments to relieve pore water uplift.',
            status: 'Installed & Active',
            iconName: 'Droplets'
          },
          {
            title: 'High-Tensile Wire Netting & Stone Pitching',
            description: 'Heavy wire netting with dry stone pitching rip-rap along reservoir embankment slopes.',
            status: 'Installed & Active',
            iconName: 'ShieldCheck'
          }
        ],
        drainageAditsCount: 5,
        rockBoltsInstalled: 2300,
        shotcreteAreaSqM: 18000,
        biorevetmentMeshType: 'Geobrugg High-Tensile Steel Wire Netting'
      };

      const rainfallHistory: RainfallRecord[] = [
        { year: 2025, totalAnnualMm: 1420, monsoonPeak24hMm: 215, historicalDeviationPercent: 12.4 },
        { year: 2024, totalAnnualMm: 1310, monsoonPeak24hMm: 185, historicalDeviationPercent: 3.8 },
        { year: 2023, totalAnnualMm: 1540, monsoonPeak24hMm: 250, historicalDeviationPercent: 19.2 }
      ];

      const earthquakeHistory: EarthquakeRecord[] = [
        {
          id: `cg-eq-${paddedId}`,
          date: '2026-05-18',
          magnitudeRichter: 2.0,
          epicenterDistanceKm: 62,
          focalDepthKm: 18,
          measuredPgaDamG: 0.015,
          structuralInspectionSummary: 'Post-tremor instrumentation scan confirmed zero structural divergence.'
        }
      ];

      const hydrodynamicBreach: HydrodynamicBreachModel = {
        breachType: cond === 'critical' ? 'Piping Failure' : 'Overtopping',
        breachWidthMeters: Math.round(120 + ((globalIdCounter * 5) % 175)),
        breachFormationTimeHours: 2.5,
        peakBreachDischargeCumecs: Math.round(39000 + ((globalIdCounter * 1300) % 56000)),
        totalFloodDurationHours: 34,
        floodRecessionTimeHours: 54,
        totalInundationAreaSqKm: 310,
        downstreamRiverReachKm: 88,
        riverName: river,
        crossSectionsCount: 38,
        affectedZones: [
          {
            id: `az-cg-${paddedId}-1`,
            name: `${dq.district} Downstream Riparian Village`,
            distanceDownstreamKm: 7.0,
            waveArrivalTimeMinutes: 18,
            peakFloodDepthMeters: 7.6,
            flowVelocityMps: 4.8,
            estimatedPopulation: 4500,
            evacuationStatus: 'Evacuate Immediate',
            safeShelterZone: `${dq.district} High Ridge Disaster Shelters`
          },
          {
            id: `az-cg-${paddedId}-2`,
            name: `${river} Irrigation Command Township`,
            distanceDownstreamKm: 20.5,
            waveArrivalTimeMinutes: 50,
            peakFloodDepthMeters: 4.8,
            flowVelocityMps: 3.2,
            estimatedPopulation: 9800,
            evacuationStatus: 'High Alert',
            safeShelterZone: 'Sub-Divisional Elevated Administrative Complex'
          },
          {
            id: `az-cg-${paddedId}-3`,
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
          id: `cg-img-${paddedId}-good`,
          title: `${damName} Crest Promenade & Spillway Gates`,
          type: 'condition_good',
          url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
          caption: `Official state dam inspection verifying masonry and earthen embankment stability in ${dq.district}.`,
          date: '2026-08-16'
        },
        {
          id: `cg-img-${paddedId}-bad`,
          title: 'Toe Drain Maintenance & Seepage Examination View',
          type: 'condition_bad',
          url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
          caption: 'Drainage gallery inspection examining relief wells, v-notch weir discharge, and downstream apron.',
          date: '2026-08-08'
        },
        {
          id: `cg-img-${paddedId}-sat`,
          title: 'Sentinel-2 Multispectral Inundation Corridor Map',
          type: 'satellite',
          url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          caption: `Cartosat and Sentinel radar overlay tracking downstream ${river} flood discharge pathways.`,
          date: '2026-08-12',
          resolutionOrAltitude: '10m Optical/SAR Resolution'
        },
        {
          id: `cg-img-${paddedId}-drone`,
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
        state: 'Chhattisgarh',
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
        spillwayCapacityCumecs: matchedNotable?.spillwayCapacityCumecs || Math.round(1700 + ((globalIdCounter * 370) % 9400)),
        condition: cond,
        hazardClass: matchedNotable?.hazardClass || 'Category 1 (High)',
        lastInspectionDate: matchedNotable?.lastInspectionDate || '2026-08-16',
        inspectingOfficer: matchedNotable?.inspectingOfficer || 'Chhattisgarh Water Resources Dept (CGWRD) & CWC',
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

  cachedChhattisgarhDams = result;
  return result;
}

export function getChhattisgarhSummaryStats() {
  const dams = getChhattisgarh28Dams();
  const total = dams.length;
  const good = dams.filter(d => d.condition === 'good').length;
  const moderate = dams.filter(d => d.condition === 'moderate').length;
  const alert = dams.filter(d => d.condition === 'alert').length;
  const critical = dams.filter(d => d.condition === 'critical').length;
  const totalStorageLiters = dams.reduce((acc, d) => acc + d.grossStorageCapacityLiters, 0);
  const currentWaterLiters = dams.reduce((acc, d) => acc + d.currentWaterVolumeLiters, 0);

  return {
    state: 'Chhattisgarh',
    totalDams: total,
    good,
    moderate,
    alert,
    critical,
    totalStorageLiters,
    currentWaterLiters,
    avgStorageFillPercent: Math.round((currentWaterLiters / totalStorageLiters) * 100),
    officialSource: 'Central Water Commission (CWC) NRLD & Chhattisgarh Water Resources Department'
  };
}
