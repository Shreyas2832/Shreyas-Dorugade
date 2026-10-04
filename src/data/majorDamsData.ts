import { Dam } from '../types';

export const MAJOR_DAMS: Dam[] = [
  {
    id: 'dam-tehri',
    name: 'Tehri Dam',
    state: 'Uttarakhand',
    district: 'Tehri Garhwal',
    river: 'Bhagirathi',
    basin: 'Ganga Basin',
    yearCompleted: 2006,
    damType: 'Earth and Rock-fill Gravity',
    heightMeters: 260.5, // Tallest dam in India
    crestLengthMeters: 575,
    fullReservoirLevelMeters: 830.0,
    maximumWaterLevelMeters: 835.0,
    crestLevelMeters: 839.5,
    currentWaterLevelMeters: 818.4,
    // 3.54 Billion Cubic Meters = 3.54 Trillion Liters (3,540,000,000,000 L)
    grossStorageCapacityLiters: 3540000000000,
    currentWaterVolumeLiters: 3080000000000,
    spillwayCapacityCumecs: 15540,
    condition: 'alert',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-28',
    inspectingOfficer: 'Dr. S. K. Negi (CWC Dam Safety Organization)',
    seepageRecords: [
      {
        id: 'sep-th-01',
        timestamp: '2026-08-14 06:45 IST',
        location: 'Right Abutment Inspection Gallery Drain Hole #14',
        flowRateLps: 18.5,
        turbidityNtu: 42.8,
        appearance: 'Reddish-brown muddy colloidal silt slurry',
        pipingRiskScore: 'High',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'High-pressure backwash flushing performed; granular reverse filter pack installed. Suspended silt dropped to 3.2 NTU after 48 hrs.'
      },
      {
        id: 'sep-th-02',
        timestamp: '2026-05-19 14:10 IST',
        location: 'Foundation Grouting Adit 3B Toe Collector Pipe',
        flowRateLps: 8.2,
        turbidityNtu: 18.4,
        appearance: 'Discolored gray shale fines',
        pipingRiskScore: 'Medium',
        pipeStatus: 'Relief Well Cleared',
        cleaningDetails: 'Chemical polyurethane micro-fine grouting injected through piezometer borehole to stabilize core-mantle contact.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-th-01',
        timestamp: '2026-07-22 17:30 IST',
        reservoirLevelMeters: 824.6,
        location: 'Left Intake Shaft Bellmouth No. 2',
        vortexType: 'Type 5 (Air Bubbles)',
        coreDiameterMeters: 1.85,
        rotationalSpeedRpm: 48,
        trashRackDangerLevel: 'High',
        intakeActionTaken: 'De-vortexing floating cross-baffle deployed; intake discharge restricted by 15% to prevent air entrainment into penstock.'
      },
      {
        id: 'wh-th-02',
        timestamp: '2025-08-11 11:15 IST',
        reservoirLevelMeters: 828.1,
        location: 'Spillway Chute Crest Bay 1',
        vortexType: 'Type 4 (Vortex Tube)',
        coreDiameterMeters: 1.2,
        rotationalSpeedRpm: 34,
        trashRackDangerLevel: 'Caution',
        intakeActionTaken: 'Spillway gate opened incrementally by 0.5m to break steady circulatory flow pattern.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-CORE-820',
        currentHeadMeters: 742.6,
        normalBaselineMeters: 730.0,
        thresholdAlertMeters: 745.0,
        porePressureKpa: 7280,
        status: 'Elevated',
        unitLocation: 'Clay Core Centerline Elev. 720m'
      },
      inclinometer: {
        stationId: 'INC-DS-SLOPE-04',
        currentDisplacementMm: 4.8,
        normalBaselineMm: 2.1,
        thresholdAlertMm: 6.0,
        tiltRateMmPerMonth: 0.35,
        status: 'Elevated',
        axis: 'Downstream Slope Station Chainage 280m'
      },
      seismograph: {
        stationId: 'SM-CREST-ACC-01',
        peakGroundAccelerationG: 0.038,
        designBasisMceG: 0.50, // High seismic Zone V
        ambientMicrotremorsHz: 3.8,
        status: 'Normal',
        lastTremorDate: '2026-06-14 (M3.6 Garhwal Focus)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'High',
      geologicalFormation: 'Phyllites & Quartzites (Tehri Himalayan Shear Zone)',
      precautionsTaken: [
        {
          title: 'High-Tensile Wire Mesh & Geogrid Bio-Revetment',
          description: '35,000 sq.m of Tecco high-tensile steel mesh anchored with deep soil nails and hydro-seeding for vegetative root binding on reservoir rim.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        },
        {
          title: 'Deep Pre-stressed Tendon Anchors (1000 kN)',
          description: '650 permanent pre-stressed cable anchors drilled 45m into sound rock behind unstable dip slopes of Bhagirathi canyon.',
          status: 'Reinforced',
          iconName: 'Anchor'
        },
        {
          title: 'Sub-surface Drainage Adits & Perforated Pipes',
          description: '4 subterranean drainage tunnels with 1,200 gravity relief drains discharging pore water directly to tailrace to prevent saturation liquefaction.',
          status: 'Regularly Monitored',
          iconName: 'Droplets'
        },
        {
          title: 'Robotic Total Station & InSAR Displacement Alarms',
          description: '24/7 automated continuous mm-precision prism telemetry along 12 designated reservoir rim landslide bodies.',
          status: 'Installed & Active',
          iconName: 'Radio'
        }
      ],
      drainageAditsCount: 6,
      rockBoltsInstalled: 4200,
      shotcreteAreaSqM: 48000,
      biorevetmentMeshType: 'Geobrugg Tecco G65 Steel Wire Matrix'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 1680, monsoonPeak24hMm: 245, historicalDeviationPercent: 18.2 },
      { year: 2024, totalAnnualMm: 1540, monsoonPeak24hMm: 210, historicalDeviationPercent: 8.5 },
      { year: 2023, totalAnnualMm: 1720, monsoonPeak24hMm: 280, historicalDeviationPercent: 21.4 },
      { year: 2022, totalAnnualMm: 1410, monsoonPeak24hMm: 185, historicalDeviationPercent: -0.8 },
      { year: 2021, totalAnnualMm: 1590, monsoonPeak24hMm: 230, historicalDeviationPercent: 11.9 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-th-01',
        date: '2026-06-14',
        magnitudeRichter: 3.6,
        epicenterDistanceKm: 28,
        focalDepthKm: 12,
        measuredPgaDamG: 0.038,
        structuralInspectionSummary: 'Post-event visual and piezometric check showed zero structural hairline anomalies on rock-fill face.'
      },
      {
        id: 'eq-th-02',
        date: '2023-11-03',
        magnitudeRichter: 5.7,
        epicenterDistanceKm: 185,
        focalDepthKm: 15,
        measuredPgaDamG: 0.082,
        structuralInspectionSummary: 'Nepal-Uttarakhand transboundary quake; accelerometers recorded 0.082g; crest alignment re-surveyed within 1.2mm tolerance.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Piping Failure',
      breachWidthMeters: 145,
      breachFormationTimeHours: 2.8,
      peakBreachDischargeCumecs: 84000,
      totalFloodDurationHours: 36,
      floodRecessionTimeHours: 54, // water completely recedes to safe bankfull
      totalInundationAreaSqKm: 420,
      downstreamRiverReachKm: 120,
      riverName: 'Bhagirathi / Ganga',
      crossSectionsCount: 48,
      affectedZones: [
        { id: 'z1', name: 'Devprayag (Confluence)', distanceDownstreamKm: 42, waveArrivalTimeMinutes: 48, peakFloodDepthMeters: 28.5, flowVelocityMps: 9.2, estimatedPopulation: 14500, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Rudraprayag Ridge Shelters' },
        { id: 'z2', name: 'Rishikesh Town & Ghats', distanceDownstreamKm: 85, waveArrivalTimeMinutes: 125, peakFloodDepthMeters: 16.2, flowVelocityMps: 6.8, estimatedPopulation: 110000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Tapovan Heights & Bypass Elevated Zone' },
        { id: 'z3', name: 'Haridwar City & Barrage', distanceDownstreamKm: 108, waveArrivalTimeMinutes: 190, peakFloodDepthMeters: 9.8, flowVelocityMps: 4.5, estimatedPopulation: 340000, evacuationStatus: 'High Alert', safeShelterZone: 'Mansa Devi Hillside High Grounds' },
        { id: 'z4', name: 'Roorkee Plains Sub-Basin', distanceDownstreamKm: 135, waveArrivalTimeMinutes: 290, peakFloodDepthMeters: 4.1, flowVelocityMps: 2.2, estimatedPopulation: 280000, evacuationStatus: 'Relief Camp Ready', safeShelterZone: 'IIT Roorkee Upper Cantonment' }
      ]
    },
    images: [
      {
        id: 'img-th-good',
        title: 'Tehri Dam Concrete Spillway & Rockfill Crest (Good Condition)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Operational state with intact riprap slope, calibrated radial gates, and clear downstream apron energy dissipator.',
        date: '2026-05-10'
      },
      {
        id: 'img-th-bad',
        title: 'Inspection Alert: Sub-surface Seepage Piping Outflow (Degraded Area)',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        caption: 'Turbid discharge point at drainage toe collector before inverted sand filter remediation and high-pressure backflushing.',
        date: '2026-08-14'
      },
      {
        id: 'img-th-sat',
        title: 'ISRO RISAT-1A SAR Satellite Radar Inundation Scan',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        caption: 'Synthetic Aperture Radar interferometric map showing downstream Bhagirathi canyon flood channel and reservoir shoreline perimeter.',
        date: '2026-08-25',
        resolutionOrAltitude: '0.8m Multi-spectral Radar'
      },
      {
        id: 'img-th-drone',
        title: 'UAV High-Altitude Drone Photogrammetry Orthomosaic',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Oblique thermal aerial drone survey identifying crest joint seals, rock riprap displacement, and abutment stability benches.',
        date: '2026-08-27',
        resolutionOrAltitude: 'Altitude: 120m AGL, 4K High-Res Thermal'
      }
    ]
  },
  {
    id: 'dam-koyna',
    name: 'Koyna Dam',
    state: 'Maharashtra',
    district: 'Satara',
    river: 'Koyna',
    basin: 'Krishna Basin',
    yearCompleted: 1964,
    damType: 'Rubble Concrete Gravity',
    heightMeters: 103.2,
    crestLengthMeters: 807.2,
    fullReservoirLevelMeters: 657.9,
    maximumWaterLevelMeters: 660.0,
    crestLevelMeters: 662.5,
    currentWaterLevelMeters: 654.2,
    grossStorageCapacityLiters: 2797000000000, // 2.797 Trillion Liters (Shivsagar Lake)
    currentWaterVolumeLiters: 2420000000000,
    spillwayCapacityCumecs: 5465,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-07-30',
    inspectingOfficer: 'R. K. Patil (Chief Engineer, Maharashtra WRD)',
    seepageRecords: [
      {
        id: 'sep-kn-01',
        timestamp: '2026-07-16 09:20 IST',
        location: 'Monolith 18 Internal Gallery Relief Hole G-09',
        flowRateLps: 6.4,
        turbidityNtu: 12.1,
        appearance: 'Slightly discolored basaltic wash',
        pipingRiskScore: 'Medium',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Pneumatic cleaning of clogged perforated pipes completed. Calcite deposits removed from porous concrete drains.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-kn-01',
        timestamp: '2026-07-28 15:45 IST',
        reservoirLevelMeters: 655.8,
        location: 'Intake Tower Stage IV Penstock Bellmouth',
        vortexType: 'Type 3 (Dye Core)',
        coreDiameterMeters: 0.95,
        rotationalSpeedRpm: 26,
        trashRackDangerLevel: 'Caution',
        intakeActionTaken: 'Trash rack raking completed; vortex suppressor grid lowered into guide slot.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-MONOLITH-14',
        currentHeadMeters: 602.4,
        normalBaselineMeters: 598.0,
        thresholdAlertMeters: 610.0,
        porePressureKpa: 4850,
        status: 'Normal',
        unitLocation: 'Foundation Gallery Basalt Bedrock'
      },
      inclinometer: {
        stationId: 'INC-CREST-MON-22',
        currentDisplacementMm: 3.2,
        normalBaselineMm: 2.8,
        thresholdAlertMm: 5.5,
        tiltRateMmPerMonth: 0.08,
        status: 'Normal',
        axis: 'Upstream-Downstream Axis'
      },
      seismograph: {
        stationId: 'SM-KOYNA-RTS-01',
        peakGroundAccelerationG: 0.045,
        designBasisMceG: 0.40, // Reservoir-Triggered Seismicity Zone
        ambientMicrotremorsHz: 4.2,
        status: 'Normal',
        lastTremorDate: '2026-07-04 (M2.9 Koyna Rift Focus)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Moderate',
      geologicalFormation: 'Deccan Trap Flood Basalt Layers with Red Bole Beds',
      precautionsTaken: [
        {
          title: 'Perforated Sub-Horizontal Drain Pipes in Red Bole',
          description: 'Installation of 80mm PVC slotted pipes into vulnerable red bole inter-trappean layers to depressurize perched water tables.',
          status: 'Installed & Active',
          iconName: 'Droplets'
        },
        {
          title: 'Shotcrete & Heavy Duty Steel Wire Netting',
          description: '18,000 sq.m of rockfall protection mesh along western reservoir rim escarpments overlooking the power intake.',
          status: 'Reinforced',
          iconName: 'ShieldCheck'
        }
      ],
      drainageAditsCount: 4,
      rockBoltsInstalled: 2800,
      shotcreteAreaSqM: 22000,
      biorevetmentMeshType: 'Maccaferri Steel Wire Netting'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 4850, monsoonPeak24hMm: 380, historicalDeviationPercent: 12.0 },
      { year: 2024, totalAnnualMm: 4420, monsoonPeak24hMm: 310, historicalDeviationPercent: 4.5 },
      { year: 2023, totalAnnualMm: 5100, monsoonPeak24hMm: 420, historicalDeviationPercent: 19.8 },
      { year: 2022, totalAnnualMm: 4200, monsoonPeak24hMm: 290, historicalDeviationPercent: -2.1 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-kn-01',
        date: '2026-07-04',
        magnitudeRichter: 2.9,
        epicenterDistanceKm: 6.2,
        focalDepthKm: 5.1,
        measuredPgaDamG: 0.045,
        structuralInspectionSummary: 'Reservoir-triggered microtremor; no crack widening detected in structural galleries.'
      },
      {
        id: 'eq-kn-hist',
        date: '1967-12-11',
        magnitudeRichter: 6.3,
        epicenterDistanceKm: 3.0,
        focalDepthKm: 4.5,
        measuredPgaDamG: 0.63,
        structuralInspectionSummary: 'Historic Koyna earthquake. Dam subsequently reinforced with downstream concrete buttressing.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Earthquake-Induced Foundation Slip',
      breachWidthMeters: 110,
      breachFormationTimeHours: 1.8,
      peakBreachDischargeCumecs: 62000,
      totalFloodDurationHours: 28,
      floodRecessionTimeHours: 42,
      totalInundationAreaSqKm: 310,
      downstreamRiverReachKm: 95,
      riverName: 'Koyna / Krishna',
      crossSectionsCount: 36,
      affectedZones: [
        { id: 'kz1', name: 'Helwak Settlement', distanceDownstreamKm: 14, waveArrivalTimeMinutes: 24, peakFloodDepthMeters: 19.4, flowVelocityMps: 8.5, estimatedPopulation: 8500, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Kumbharli Ghat Elevated Pass' },
        { id: 'kz2', name: 'Patan Sub-District Hub', distanceDownstreamKm: 38, waveArrivalTimeMinutes: 58, peakFloodDepthMeters: 12.8, flowVelocityMps: 5.9, estimatedPopulation: 45000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Patan Tehsil High Ridge Ground' },
        { id: 'kz3', name: 'Karad City (Krishna Confluence)', distanceDownstreamKm: 72, waveArrivalTimeMinutes: 135, peakFloodDepthMeters: 7.2, flowVelocityMps: 3.8, estimatedPopulation: 175000, evacuationStatus: 'High Alert', safeShelterZone: 'Malkapur Plateau & NH48 Bypass High' }
      ]
    },
    images: [
      {
        id: 'img-kn-good',
        title: 'Koyna Dam Rubble Concrete Spillway & Shivsagar Lake (Good Condition)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Full capacity operational condition with six active radial overflow gates discharging safely.',
        date: '2026-06-20'
      },
      {
        id: 'img-kn-bad',
        title: 'Monolith Joint Weepage & Silt Staining Prior to Maintenance',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
        caption: 'Calcite leach marks and seepage discoloration along inspection gallery drainage conduits.',
        date: '2026-07-16'
      },
      {
        id: 'img-kn-sat',
        title: 'Sentinel-2 Multispectral Surface Water Contour Satellite Image',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Downstream river meander simulation showing Karad confluence flood spread hazard boundaries.',
        date: '2026-07-25',
        resolutionOrAltitude: '10m Spatial Resolution'
      },
      {
        id: 'img-kn-drone',
        title: 'Crest Drone Structural Inspection Survey',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Aerial drone inspection of downstream reinforced concrete buttress wall and spillway bucket.',
        date: '2026-07-29',
        resolutionOrAltitude: 'Drone Alt: 80m AGL'
      }
    ]
  },
  {
    id: 'dam-sardar-sarovar',
    name: 'Sardar Sarovar Dam',
    state: 'Gujarat',
    district: 'Narmada',
    river: 'Narmada',
    basin: 'Narmada Basin',
    yearCompleted: 2017,
    damType: 'Concrete Gravity',
    heightMeters: 163.0,
    crestLengthMeters: 1210.0,
    fullReservoirLevelMeters: 138.68,
    maximumWaterLevelMeters: 140.21,
    crestLevelMeters: 146.5,
    currentWaterLevelMeters: 136.4,
    // 9.5 Billion Cubic Meters = 9.5 Trillion Liters (9,500,000,000,000 L)
    grossStorageCapacityLiters: 9500000000000,
    currentWaterVolumeLiters: 8650000000000,
    spillwayCapacityCumecs: 84949, // One of the largest in Asia
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-15',
    inspectingOfficer: 'V. J. Shah (Sardar Sarovar Narmada Nigam Ltd)',
    seepageRecords: [
      {
        id: 'sep-ss-01',
        timestamp: '2026-08-02 11:00 IST',
        location: 'Powerhouse Cavern Upstream Drainage Curtain C-12',
        flowRateLps: 3.1,
        turbidityNtu: 2.4,
        appearance: 'Clear seepage water, normal mineral balance',
        pipingRiskScore: 'Low',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Quarterly mechanical descaling and flushing performed on drainage manifold pipes.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-ss-01',
        timestamp: '2026-08-08 16:20 IST',
        reservoirLevelMeters: 137.9,
        location: 'Riverbed Power House (RBPH) Intake Bay 4',
        vortexType: 'Type 2 (Depression)',
        coreDiameterMeters: 0.65,
        rotationalSpeedRpm: 18,
        trashRackDangerLevel: 'Normal',
        intakeActionTaken: 'Submerged vortex guide vanes checked; laminar inflow sustained without vortex resonance.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-FOUNDATION-SS-42',
        currentHeadMeters: 92.4,
        normalBaselineMeters: 90.0,
        thresholdAlertMeters: 105.0,
        porePressureKpa: 1120,
        status: 'Normal',
        unitLocation: 'Basal Contact Quartzite Bedrock'
      },
      inclinometer: {
        stationId: 'INC-LEFT-ABUT-03',
        currentDisplacementMm: 1.6,
        normalBaselineMm: 1.5,
        thresholdAlertMm: 4.5,
        tiltRateMmPerMonth: 0.02,
        status: 'Normal',
        axis: 'Transverse Monolith Joint Axis'
      },
      seismograph: {
        stationId: 'SM-DAM-GALLERY-01',
        peakGroundAccelerationG: 0.012,
        designBasisMceG: 0.35,
        ambientMicrotremorsHz: 5.1,
        status: 'Normal',
        lastTremorDate: '2026-04-18 (M2.4 Bharuch Rift)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Low',
      geologicalFormation: 'Basalts, Sandstones, and Faulted Dolerite Dykes',
      precautionsTaken: [
        {
          title: 'Deep Drainage Curtain & Foundation Grout Curtain',
          description: 'Twin-line grout curtain extending 50m into foundation rock with relief holes preventing hydrostatic uplift.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        },
        {
          title: 'Downstream Stilling Basin Chute Stabilization',
          description: 'Reinforced concrete apron anchored with 32mm dowels to withstand hydrodynamic impact of 85,000 cumecs flood jet.',
          status: 'Installed & Active',
          iconName: 'Anchor'
        }
      ],
      drainageAditsCount: 8,
      rockBoltsInstalled: 5600,
      shotcreteAreaSqM: 35000,
      biorevetmentMeshType: 'Geosynthetic Heavy Biaxial Grid'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 1250, monsoonPeak24hMm: 215, historicalDeviationPercent: 6.2 },
      { year: 2024, totalAnnualMm: 1180, monsoonPeak24hMm: 190, historicalDeviationPercent: 2.1 },
      { year: 2023, totalAnnualMm: 1390, monsoonPeak24hMm: 275, historicalDeviationPercent: 16.5 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-ss-01',
        date: '2026-04-18',
        magnitudeRichter: 2.4,
        epicenterDistanceKm: 34,
        focalDepthKm: 18,
        measuredPgaDamG: 0.012,
        structuralInspectionSummary: 'Routine minor microseism. Structural telemetry verified completely stable.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Overtopping',
      breachWidthMeters: 220,
      breachFormationTimeHours: 3.5,
      peakBreachDischargeCumecs: 125000,
      totalFloodDurationHours: 48,
      floodRecessionTimeHours: 72,
      totalInundationAreaSqKm: 850,
      downstreamRiverReachKm: 140,
      riverName: 'Narmada',
      crossSectionsCount: 64,
      affectedZones: [
        { id: 'sz1', name: 'Garudeshwar & Kevadia', distanceDownstreamKm: 12, waveArrivalTimeMinutes: 20, peakFloodDepthMeters: 24.2, flowVelocityMps: 9.8, estimatedPopulation: 22000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Statue of Unity Elevated Ridge' },
        { id: 'sz2', name: 'Rajpipla Town', distanceDownstreamKm: 32, waveArrivalTimeMinutes: 48, peakFloodDepthMeters: 18.1, flowVelocityMps: 7.2, estimatedPopulation: 65000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Rajpipla Plateau Fort Grounds' },
        { id: 'sz3', name: 'Bharuch & Ankleshwar Twin Cities', distanceDownstreamKm: 105, waveArrivalTimeMinutes: 180, peakFloodDepthMeters: 8.5, flowVelocityMps: 4.1, estimatedPopulation: 520000, evacuationStatus: 'High Alert', safeShelterZone: 'NH48 Elevated Corridor & Jhagadia Heights' }
      ]
    },
    images: [
      {
        id: 'img-ss-good',
        title: 'Sardar Sarovar Dam 30 Radial Overflow Gates (Good Operational Condition)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Full capacity discharge with calibrated aeration ramp and zero structural vibrations.',
        date: '2026-08-15'
      },
      {
        id: 'img-ss-bad',
        title: 'Spillway Chute Training Wall Scour Repair Check (Maintenance View)',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Inspection of hydraulic cavitation pit remediation on spillway baffle block prior to epoxy mortar filling.',
        date: '2026-02-12'
      },
      {
        id: 'img-ss-sat',
        title: 'Cartosat-3 High-Resolution Optical Satellite View of Narmada River',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Satellite hydro-topography mapping downstream flood basin across Narmada and Bharuch districts.',
        date: '2026-08-01',
        resolutionOrAltitude: '0.28m Panchromatic Cartosat'
      },
      {
        id: 'img-ss-drone',
        title: 'Drone 3D LIDAR Bathymetric & Topographic Scan',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
        caption: 'Autonomous drone point cloud survey validating spillway crest curvature and zero expansion joint drift.',
        date: '2026-08-10',
        resolutionOrAltitude: 'LIDAR Accuracy: ±5mm'
      }
    ]
  },
  {
    id: 'dam-mullaperiyar',
    name: 'Mullaperiyar Dam',
    state: 'Kerala',
    district: 'Idukki',
    river: 'Periyar',
    basin: 'Periyar Basin',
    yearCompleted: 1895, // Over 130 years old!
    damType: 'Lime-Surkhi Rubble Masonry & Concrete Backing',
    heightMeters: 53.6,
    crestLengthMeters: 365.7,
    fullReservoirLevelMeters: 142.0, // Per SC limit (feet to meters conversion ~43.28m, relative datum 142 ft)
    maximumWaterLevelMeters: 145.0,
    crestLevelMeters: 147.2,
    currentWaterLevelMeters: 141.6,
    grossStorageCapacityLiters: 443230000000, // 443.2 Billion Liters
    currentWaterVolumeLiters: 418000000000,
    spillwayCapacityCumecs: 3450,
    condition: 'critical',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-09-02',
    inspectingOfficer: 'Empowered Committee on Dam Safety (Govt of India / CWC)',
    seepageRecords: [
      {
        id: 'sep-mp-01',
        timestamp: '2026-08-30 08:15 IST',
        location: 'Baby Dam Junction Masonry Gallery Drainage Chute #3',
        flowRateLps: 34.2,
        turbidityNtu: 58.4,
        appearance: 'Muddy discolored lime-surkhi leaching slurry',
        pipingRiskScore: 'Severe',
        pipeStatus: 'Active Discharge',
        cleaningDetails: 'Surkhi mortar paste washing detected in seepage drainage channels. Immediate grouting team notified. Pipe filter flushed.'
      },
      {
        id: 'sep-mp-02',
        timestamp: '2026-07-14 16:40 IST',
        location: 'Left Abutment Foundation Relief Hole #7',
        flowRateLps: 22.8,
        turbidityNtu: 36.1,
        appearance: 'Discolored brownish clay and decomposed lime',
        pipingRiskScore: 'High',
        pipeStatus: 'Relief Well Cleared',
        cleaningDetails: 'Sediment buildup purged with low-pressure nitrogen purge; flow collector weir re-calibrated.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-mp-01',
        timestamp: '2026-08-28 14:10 IST',
        reservoirLevelMeters: 141.8,
        location: 'Tamil Nadu Divergent Sluice Tunnel Intake',
        vortexType: 'Type 6 (Full Air Core)',
        coreDiameterMeters: 2.4,
        rotationalSpeedRpm: 52,
        trashRackDangerLevel: 'Severe Aeration & Cavitation',
        intakeActionTaken: 'Urgent throttling of diversion sluices; anti-vortex raft deployed to suppress rotational kinetic vortex energy.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-SURKHI-MASONRY-07',
        currentHeadMeters: 44.8,
        normalBaselineMeters: 36.0,
        thresholdAlertMeters: 42.0,
        porePressureKpa: 439,
        status: 'Critical',
        unitLocation: 'Old Masonry Upstream Facing Block'
      },
      inclinometer: {
        stationId: 'INC-BABY-DAM-CREST',
        currentDisplacementMm: 7.4,
        normalBaselineMm: 3.0,
        thresholdAlertMm: 6.5,
        tiltRateMmPerMonth: 0.85,
        status: 'Critical',
        axis: 'Transverse Lateral Tilt Station 140'
      },
      seismograph: {
        stationId: 'SM-PERIYAR-SEISMIC',
        peakGroundAccelerationG: 0.062,
        designBasisMceG: 0.16, // Old masonry has low tensile capacity
        ambientMicrotremorsHz: 3.1,
        status: 'Tremor Detected',
        lastTremorDate: '2026-08-20 (M3.2 Idukki Epicenter)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Very High',
      geologicalFormation: 'Weathered Charnockite and Gneiss with High Moisture Saturation',
      precautionsTaken: [
        {
          title: 'Reservoir Catchment Slope Anchoring',
          description: 'Heavy steel cables stabilizing steep weathered cliffs near Vallakadavu and Periyar Tiger Reserve flanks.',
          status: 'Regularly Monitored',
          iconName: 'ShieldAlert'
        },
        {
          title: 'Inverted Drainage Filters at Downstream Masonry Toe',
          description: 'Multi-layered sand, gravel, and geotextile filter trench to arrest piping of fine lime mortar particles.',
          status: 'Reinforced',
          iconName: 'Droplets'
        }
      ],
      drainageAditsCount: 3,
      rockBoltsInstalled: 1450,
      shotcreteAreaSqM: 12000,
      biorevetmentMeshType: 'Coir Geotextile with Steel Diamond Mesh'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 3450, monsoonPeak24hMm: 310, historicalDeviationPercent: 24.5 },
      { year: 2024, totalAnnualMm: 2980, monsoonPeak24hMm: 240, historicalDeviationPercent: 9.1 },
      { year: 2023, totalAnnualMm: 3620, monsoonPeak24hMm: 360, historicalDeviationPercent: 31.0 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-mp-01',
        date: '2026-08-20',
        magnitudeRichter: 3.2,
        epicenterDistanceKm: 14.5,
        focalDepthKm: 8,
        measuredPgaDamG: 0.062,
        structuralInspectionSummary: 'Minor micro-cracks in lime plaster mortar joint checked along gallery downstream face.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Piping Failure',
      breachWidthMeters: 85,
      breachFormationTimeHours: 1.4,
      peakBreachDischargeCumecs: 38000,
      totalFloodDurationHours: 24,
      floodRecessionTimeHours: 36,
      totalInundationAreaSqKm: 240,
      downstreamRiverReachKm: 50,
      riverName: 'Periyar',
      crossSectionsCount: 32,
      affectedZones: [
        { id: 'mz1', name: 'Vallakadavu Village', distanceDownstreamKm: 6, waveArrivalTimeMinutes: 12, peakFloodDepthMeters: 16.5, flowVelocityMps: 9.4, estimatedPopulation: 4200, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Vallakadavu Hill School & High Church' },
        { id: 'mz2', name: 'Vandiperiyar Town', distanceDownstreamKm: 16, waveArrivalTimeMinutes: 28, peakFloodDepthMeters: 11.2, flowVelocityMps: 7.1, estimatedPopulation: 28000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Periyar Estate Upper Tea Bungalows' },
        { id: 'mz3', name: 'Upputhara & Chappath', distanceDownstreamKm: 32, waveArrivalTimeMinutes: 52, peakFloodDepthMeters: 7.8, flowVelocityMps: 4.8, estimatedPopulation: 19000, evacuationStatus: 'High Alert', safeShelterZone: 'Upputhara High School & Panchayat High Hall' },
        { id: 'mz4', name: 'Idukki Reservoir Backwaters', distanceDownstreamKm: 48, waveArrivalTimeMinutes: 80, peakFloodDepthMeters: 14.0, flowVelocityMps: 3.2, estimatedPopulation: 12000, evacuationStatus: 'Relief Camp Ready', safeShelterZone: 'Kulamavu Hill Tops' }
      ]
    },
    images: [
      {
        id: 'img-mp-bad',
        title: 'Critical Warning: Lime-Surkhi Leaching & Seepage in Old Masonry Wall',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-turbidity discolored seepage stains and efflorescence along downstream masonry blocks.',
        date: '2026-08-30'
      },
      {
        id: 'img-mp-good',
        title: 'Upstream View of Mullaperiyar Spillway & Surrounding Forest',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Reservoir shoreline bordering Periyar National Park during controlled spillway discharge.',
        date: '2026-05-18'
      },
      {
        id: 'img-mp-sat',
        title: 'Satellite Hydrodynamic Flood Inundation Corridor (Periyar Valley)',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sentinel-1 radar surface water classification highlighting downstream Periyar valley flood risk corridor.',
        date: '2026-08-31',
        resolutionOrAltitude: 'SAR Radar 10m Ground Resolution'
      },
      {
        id: 'img-mp-drone',
        title: 'Drone Thermal & HD Abutment Crack Survey',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Close-range drone inspection of baby dam parapet and drainage exit pipe turbid discharge.',
        date: '2026-09-01',
        resolutionOrAltitude: 'UAV 40m AGL, Micro-crack Zoom'
      }
    ]
  },
  {
    id: 'dam-bhakra',
    name: 'Bhakra Dam',
    state: 'Himachal Pradesh',
    district: 'Bilaspur',
    river: 'Sutlej',
    basin: 'Indus Basin',
    yearCompleted: 1963,
    damType: 'Concrete Gravity',
    heightMeters: 226.0,
    crestLengthMeters: 518.2,
    fullReservoirLevelMeters: 513.6,
    maximumWaterLevelMeters: 515.1,
    crestLevelMeters: 518.5,
    currentWaterLevelMeters: 504.8,
    // 9.34 Billion Cubic Meters = 9.34 Trillion Liters (Gobind Sagar Lake)
    grossStorageCapacityLiters: 9340000000000,
    currentWaterVolumeLiters: 7850000000000,
    spillwayCapacityCumecs: 8212,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-07-22',
    inspectingOfficer: 'Bhakra Beas Management Board (BBMB)',
    seepageRecords: [
      {
        id: 'sep-bk-01',
        timestamp: '2026-07-10 10:15 IST',
        location: 'Foundation Drainage Gallery Block 24',
        flowRateLps: 4.8,
        turbidityNtu: 3.1,
        appearance: 'Clear crystalline seepage',
        pipingRiskScore: 'Low',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Regular maintenance reaming of foundation drainage relief holes.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-bk-01',
        timestamp: '2026-07-18 13:30 IST',
        reservoirLevelMeters: 506.2,
        location: 'Left Power Plant Penstock Intake Gate 3',
        vortexType: 'Type 2 (Depression)',
        coreDiameterMeters: 0.8,
        rotationalSpeedRpm: 22,
        trashRackDangerLevel: 'Normal',
        intakeActionTaken: 'Intake anti-vortex beam inspected and operating correctly.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-BK-BLOCK-20',
        currentHeadMeters: 420.2,
        normalBaselineMeters: 418.0,
        thresholdAlertMeters: 435.0,
        porePressureKpa: 4120,
        status: 'Normal',
        unitLocation: 'Heel Contact Sandstone Bedrock'
      },
      inclinometer: {
        stationId: 'INC-BK-CREST-PLUMB',
        currentDisplacementMm: 2.1,
        normalBaselineMm: 2.0,
        thresholdAlertMm: 5.0,
        tiltRateMmPerMonth: 0.04,
        status: 'Normal',
        axis: 'Vertical Plumb Line Crest Deflection'
      },
      seismograph: {
        stationId: 'SM-BHAKRA-CENTRAL',
        peakGroundAccelerationG: 0.024,
        designBasisMceG: 0.40,
        ambientMicrotremorsHz: 4.8,
        status: 'Normal',
        lastTremorDate: '2026-05-12 (M3.0 Sundernagar)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Moderate',
      geologicalFormation: 'Siwalik Formations - Interbedded Sandstones and Claystones',
      precautionsTaken: [
        {
          title: 'Abutment Pre-stressed Cable Anchors',
          description: 'Deep anchors installed into dipping sandstone layers on both canyon walls.',
          status: 'Installed & Active',
          iconName: 'Anchor'
        },
        {
          title: 'Extensive Grout Curtain & Drainage Holes',
          description: 'Deep grout curtain cutting off reservoir seepage under 226m hydrostatic head.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        }
      ],
      drainageAditsCount: 12,
      rockBoltsInstalled: 6800,
      shotcreteAreaSqM: 42000,
      biorevetmentMeshType: 'Reinforced Concrete Revetment & Steel Mesh'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 1140, monsoonPeak24hMm: 165, historicalDeviationPercent: 4.1 },
      { year: 2024, totalAnnualMm: 1080, monsoonPeak24hMm: 145, historicalDeviationPercent: -1.2 },
      { year: 2023, totalAnnualMm: 1350, monsoonPeak24hMm: 240, historicalDeviationPercent: 23.0 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-bk-01',
        date: '2026-05-12',
        magnitudeRichter: 3.0,
        epicenterDistanceKm: 42,
        focalDepthKm: 15,
        measuredPgaDamG: 0.024,
        structuralInspectionSummary: 'Minor regional vibration; all plumb line readings confirmed zero deflection offset.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Overtopping',
      breachWidthMeters: 180,
      breachFormationTimeHours: 3.0,
      peakBreachDischargeCumecs: 98000,
      totalFloodDurationHours: 40,
      floodRecessionTimeHours: 60,
      totalInundationAreaSqKm: 580,
      downstreamRiverReachKm: 110,
      riverName: 'Sutlej',
      crossSectionsCount: 52,
      affectedZones: [
        { id: 'bz1', name: 'Nangal Township', distanceDownstreamKm: 13, waveArrivalTimeMinutes: 22, peakFloodDepthMeters: 21.0, flowVelocityMps: 9.1, estimatedPopulation: 48000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Nangal Fertilizer Ridge Grounds' },
        { id: 'bz2', name: 'Anandpur Sahib Basin', distanceDownstreamKm: 34, waveArrivalTimeMinutes: 52, peakFloodDepthMeters: 14.5, flowVelocityMps: 6.8, estimatedPopulation: 85000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Keshgarh Sahib High Fort Plateau' },
        { id: 'bz3', name: 'Rupnagar (Ropar) City', distanceDownstreamKm: 78, waveArrivalTimeMinutes: 120, peakFloodDepthMeters: 8.2, flowVelocityMps: 4.2, estimatedPopulation: 220000, evacuationStatus: 'High Alert', safeShelterZone: 'IIT Ropar High Campus Ground' }
      ]
    },
    images: [
      {
        id: 'img-bk-good',
        title: 'Bhakra Dam Majestic 226m Concrete Gravity Wall (Good Condition)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Central spillway radial gates and spillway aprons in optimal operational health.',
        date: '2026-07-22'
      },
      {
        id: 'img-bk-bad',
        title: 'Spillway Chute Aeration Dentate Sills Inspection',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Periodic dewatered inspection of dentated chute splitters assessing concrete cavitation resistance.',
        date: '2026-01-20'
      },
      {
        id: 'img-bk-sat',
        title: 'Satellite High-Resolution Gobind Sagar Lake & Sutlej Gorge',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-definition multispectral satellite mapping of Sutlej river downstream floodplain.',
        date: '2026-07-15',
        resolutionOrAltitude: 'ISRO Cartosat 1m Resolution'
      },
      {
        id: 'img-bk-drone',
        title: 'Drone Thermographic & Laser Inspection of Bhakra Crest',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Full-span drone flight along the 518m crest verifying parapet joints and gantry rail alignment.',
        date: '2026-07-20',
        resolutionOrAltitude: 'Altitude: 100m AGL'
      }
    ]
  },
  {
    id: 'dam-hirakud',
    name: 'Hirakud Dam',
    state: 'Odisha',
    district: 'Sambalpur',
    river: 'Mahanadi',
    basin: 'Mahanadi Basin',
    yearCompleted: 1957,
    damType: 'Composite Masonry, Concrete & Earthen Dam',
    heightMeters: 60.96,
    crestLengthMeters: 4800, // Longest earthen dam in India (total 25.8 km including dykes!)
    fullReservoirLevelMeters: 192.02,
    maximumWaterLevelMeters: 192.63,
    crestLevelMeters: 195.07,
    currentWaterLevelMeters: 189.5,
    // 5.89 Billion Cubic Meters = 5.89 Trillion Liters (5,890,000,000,000 L)
    grossStorageCapacityLiters: 5890000000000,
    currentWaterVolumeLiters: 4920000000000,
    spillwayCapacityCumecs: 42475,
    condition: 'moderate',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-18',
    inspectingOfficer: 'B. C. Mohapatra (Chief Engineer, Mahanadi Basin)',
    seepageRecords: [
      {
        id: 'sep-hk-01',
        timestamp: '2026-08-04 14:30 IST',
        location: 'Right Earthen Dyke Chainage 18+200 Toe Drain',
        flowRateLps: 11.4,
        turbidityNtu: 24.5,
        appearance: 'Muddy reddish laterite silt',
        pipingRiskScore: 'High',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Downstream inverted filter trench re-excavated and repacked with graded gravel and non-woven geotextile.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-hk-01',
        timestamp: '2026-08-12 11:20 IST',
        reservoirLevelMeters: 190.8,
        location: 'Left Spillway Undersluice Bay 12',
        vortexType: 'Type 4 (Vortex Tube)',
        coreDiameterMeters: 1.4,
        rotationalSpeedRpm: 32,
        trashRackDangerLevel: 'Caution',
        intakeActionTaken: 'Undersluice gate raised by 1.2m to increase submerged backwater head.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-RIGHT-DYKE-22',
        currentHeadMeters: 178.6,
        normalBaselineMeters: 174.0,
        thresholdAlertMeters: 182.0,
        porePressureKpa: 1750,
        status: 'Elevated',
        unitLocation: 'Earthen Core Phreatic Line'
      },
      inclinometer: {
        stationId: 'INC-HIRAKUD-SLOPE-08',
        currentDisplacementMm: 3.8,
        normalBaselineMm: 2.2,
        thresholdAlertMm: 5.5,
        tiltRateMmPerMonth: 0.18,
        status: 'Normal',
        axis: 'Downstream Embankment Slope'
      },
      seismograph: {
        stationId: 'SM-HIRAKUD-EAST',
        peakGroundAccelerationG: 0.018,
        designBasisMceG: 0.25,
        ambientMicrotremorsHz: 3.6,
        status: 'Normal',
        lastTremorDate: '2026-03-08 (M2.6 Talcher Fault)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Low',
      geologicalFormation: 'Archaean Granite Gneiss and Cuttack Alluvium',
      precautionsTaken: [
        {
          title: 'Heavy Stone Pitching (Riprap) on Earthen Slopes',
          description: '1.2m thick hand-placed basalt stone riprap with filter backing on 25km dyke perimeters.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        },
        {
          title: 'Toe Drain Long-itudinal Collector System',
          description: 'Continuous continuous stone masonry toe drains with longitudinal collectors leading to inspection sumps.',
          status: 'Regularly Monitored',
          iconName: 'Droplets'
        }
      ],
      drainageAditsCount: 2,
      rockBoltsInstalled: 1800,
      shotcreteAreaSqM: 14000,
      biorevetmentMeshType: 'Vetiver Grass Plantation & Stone Pitching'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 1520, monsoonPeak24hMm: 280, historicalDeviationPercent: 14.8 },
      { year: 2024, totalAnnualMm: 1380, monsoonPeak24hMm: 220, historicalDeviationPercent: 3.2 },
      { year: 2023, totalAnnualMm: 1610, monsoonPeak24hMm: 310, historicalDeviationPercent: 21.0 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-hk-01',
        date: '2026-03-08',
        magnitudeRichter: 2.6,
        epicenterDistanceKm: 65,
        focalDepthKm: 20,
        measuredPgaDamG: 0.018,
        structuralInspectionSummary: 'Routine minor tremor. Masonry spillway crest and earthen dykes inspected without defects.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Piping Failure',
      breachWidthMeters: 210,
      breachFormationTimeHours: 3.2,
      peakBreachDischargeCumecs: 78000,
      totalFloodDurationHours: 44,
      floodRecessionTimeHours: 64,
      totalInundationAreaSqKm: 690,
      downstreamRiverReachKm: 130,
      riverName: 'Mahanadi',
      crossSectionsCount: 56,
      affectedZones: [
        { id: 'hz1', name: 'Sambalpur City & Ghats', distanceDownstreamKm: 14, waveArrivalTimeMinutes: 28, peakFloodDepthMeters: 17.2, flowVelocityMps: 7.8, estimatedPopulation: 340000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Budharaja Hill & University High Ground' },
        { id: 'hz2', name: 'Birmaharajpur & Sonepur', distanceDownstreamKm: 58, waveArrivalTimeMinutes: 95, peakFloodDepthMeters: 11.5, flowVelocityMps: 5.2, estimatedPopulation: 140000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Sonepur Sub-Collector Ridge' },
        { id: 'hz3', name: 'Boudh Riverine Towns', distanceDownstreamKm: 105, waveArrivalTimeMinutes: 185, peakFloodDepthMeters: 6.8, flowVelocityMps: 3.4, estimatedPopulation: 190000, evacuationStatus: 'High Alert', safeShelterZone: 'Boudh District Stadium High Grounds' }
      ]
    },
    images: [
      {
        id: 'img-hk-good',
        title: 'Hirakud Dam 64 Sluice Gates Discharging Floodwater (Operational)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Mahanadi river controlled discharge through Gandhi Minar observation vantage point.',
        date: '2026-08-18'
      },
      {
        id: 'img-hk-bad',
        title: 'Dyke Toe Filter Cleaning & Muddy Seepage Investigation Point',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        caption: 'Inspection of toe drain silting and geotextile installation along Chainage 18+200.',
        date: '2026-08-04'
      },
      {
        id: 'img-hk-sat',
        title: 'Sentinel Radar Inundation Extent Simulation along Mahanadi Basin',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Satellite water spread classification model tracking Hirakud to Sambalpur and Cuttack delta.',
        date: '2026-08-10',
        resolutionOrAltitude: 'SAR 10m Ground Resolution'
      },
      {
        id: 'img-hk-drone',
        title: 'Drone Survey of 4.8km Main Masonry & Earthen Section',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-resolution aerial composite checking stone riprap packing on reservoir slope.',
        date: '2026-08-16',
        resolutionOrAltitude: 'UAV Flight Alt: 110m AGL'
      }
    ]
  },
  {
    id: 'dam-nagarjunasagar',
    name: 'Nagarjuna Sagar Dam',
    state: 'Telangana',
    district: 'Nalgonda',
    river: 'Krishna',
    basin: 'Krishna Basin',
    yearCompleted: 1967,
    damType: 'Masonry Gravity',
    heightMeters: 124.0,
    crestLengthMeters: 1450,
    fullReservoirLevelMeters: 179.83,
    maximumWaterLevelMeters: 181.05,
    crestLevelMeters: 184.4,
    currentWaterLevelMeters: 177.2,
    // 11.56 Billion Cubic Meters = 11.56 Trillion Liters (11,560,000,000,000 L)
    grossStorageCapacityLiters: 11560000000000,
    currentWaterVolumeLiters: 9840000000000,
    spillwayCapacityCumecs: 42476,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-08-22',
    inspectingOfficer: 'Telangana State Dam Safety Organisation (SDSO)',
    seepageRecords: [
      {
        id: 'sep-ns-01',
        timestamp: '2026-08-01 09:40 IST',
        location: 'Block 28 Drainage Gallery Weep Hole #5',
        flowRateLps: 5.2,
        turbidityNtu: 3.8,
        appearance: 'Clear lime-leached drainage',
        pipingRiskScore: 'Low',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Pipes washed with water jets to clear calcium carbonate incrustations.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-ns-01',
        timestamp: '2026-08-16 16:00 IST',
        reservoirLevelMeters: 178.5,
        location: 'Left Canal Intake Structure',
        vortexType: 'Type 3 (Dye Core)',
        coreDiameterMeters: 1.1,
        rotationalSpeedRpm: 24,
        trashRackDangerLevel: 'Caution',
        intakeActionTaken: 'Floating log-boom adjusted to disperse surface vorticity.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-NS-BLOCK-33',
        currentHeadMeters: 112.4,
        normalBaselineMeters: 110.0,
        thresholdAlertMeters: 125.0,
        porePressureKpa: 1100,
        status: 'Normal',
        unitLocation: 'Masonry Heel Bedrock Joint'
      },
      inclinometer: {
        stationId: 'INC-NS-CREST-02',
        currentDisplacementMm: 1.9,
        normalBaselineMm: 1.8,
        thresholdAlertMm: 4.8,
        tiltRateMmPerMonth: 0.03,
        status: 'Normal',
        axis: 'Crest Plumb Wire deflection'
      },
      seismograph: {
        stationId: 'SM-NS-GALLERY-CENTRAL',
        peakGroundAccelerationG: 0.015,
        designBasisMceG: 0.30,
        ambientMicrotremorsHz: 4.5,
        status: 'Normal',
        lastTremorDate: '2026-02-14 (M2.1 Nalgonda microtremor)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Low',
      geologicalFormation: 'Cuddapah Supergroup Quartzites and Shales',
      precautionsTaken: [
        {
          title: 'Abutment Rock Mass Grouting and Rock Bolting',
          description: 'Pattern rock bolts and consolidation grouting along left and right quartzitic abutments.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        }
      ],
      drainageAditsCount: 5,
      rockBoltsInstalled: 3200,
      shotcreteAreaSqM: 26000,
      biorevetmentMeshType: 'Wire Mesh & Concrete Berms'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 890, monsoonPeak24hMm: 175, historicalDeviationPercent: 8.5 },
      { year: 2024, totalAnnualMm: 820, monsoonPeak24hMm: 150, historicalDeviationPercent: 1.2 },
      { year: 2023, totalAnnualMm: 980, monsoonPeak24hMm: 210, historicalDeviationPercent: 19.5 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-ns-01',
        date: '2026-02-14',
        magnitudeRichter: 2.1,
        epicenterDistanceKm: 28,
        focalDepthKm: 12,
        measuredPgaDamG: 0.015,
        structuralInspectionSummary: 'Minor microtremor, all gallery instruments within normal tolerances.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Overtopping',
      breachWidthMeters: 190,
      breachFormationTimeHours: 3.2,
      peakBreachDischargeCumecs: 86000,
      totalFloodDurationHours: 42,
      floodRecessionTimeHours: 66,
      totalInundationAreaSqKm: 620,
      downstreamRiverReachKm: 120,
      riverName: 'Krishna',
      crossSectionsCount: 44,
      affectedZones: [
        { id: 'nz1', name: 'Nagarjuna Hill Tourist Settlement', distanceDownstreamKm: 8, waveArrivalTimeMinutes: 16, peakFloodDepthMeters: 22.5, flowVelocityMps: 9.6, estimatedPopulation: 12000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Anupu Buddhist Site High Plateau' },
        { id: 'nz2', name: 'Macherla Sub-Division', distanceDownstreamKm: 28, waveArrivalTimeMinutes: 44, peakFloodDepthMeters: 15.1, flowVelocityMps: 6.9, estimatedPopulation: 65000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Macherla Fort Elevated Area' },
        { id: 'nz3', name: 'Amaravati River Corridor', distanceDownstreamKm: 98, waveArrivalTimeMinutes: 160, peakFloodDepthMeters: 7.4, flowVelocityMps: 3.8, estimatedPopulation: 290000, evacuationStatus: 'High Alert', safeShelterZone: 'Amaravati Capital High Embankment' }
      ]
    },
    images: [
      {
        id: 'img-ns-good',
        title: 'Nagarjuna Sagar 26 Radial Crest Gates Discharging into Krishna River',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Spectacular water wall discharge from the world’s largest masonry dam.',
        date: '2026-08-22'
      },
      {
        id: 'img-ns-bad',
        title: 'Gallery Drainage Weep Hole Inspection & Calcium Carbonate Check',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
        caption: 'Inspection gallery floor channels cleared of calcite deposits during monsoon inspection.',
        date: '2026-08-01'
      },
      {
        id: 'img-ns-sat',
        title: 'Satellite View of Krishna River Inundation Corridor',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        caption: 'Downstream hydrodynamic modeling grid across Guntur and Krishna districts.',
        date: '2026-08-15',
        resolutionOrAltitude: 'Landsat-9 15m Multispectral'
      },
      {
        id: 'img-ns-drone',
        title: 'Drone Inspection of 1.45km Masonry Crest and Gantry Crane',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
        caption: 'Orthomosaic mapping of masonry joints and radial gate trunnion pins.',
        date: '2026-08-20',
        resolutionOrAltitude: 'Altitude: 90m AGL'
      }
    ]
  },
  {
    id: 'dam-krs',
    name: 'Krishna Raja Sagara (KRS) Dam',
    state: 'Karnataka',
    district: 'Mandya',
    river: 'Kaveri',
    basin: 'Kaveri Basin',
    yearCompleted: 1938,
    damType: 'Surkhi Mortar Masonry Gravity',
    heightMeters: 39.8,
    crestLengthMeters: 2621,
    fullReservoirLevelMeters: 124.8, // 124.8 feet = ~38.04m above riverbed
    maximumWaterLevelMeters: 125.5,
    crestLevelMeters: 130.0,
    currentWaterLevelMeters: 123.4,
    // 1.39 Billion Cubic Meters = 1.39 Trillion Liters (1,390,000,000,000 L)
    grossStorageCapacityLiters: 1390000000000,
    currentWaterVolumeLiters: 1280000000000,
    spillwayCapacityCumecs: 10000,
    condition: 'good',
    hazardClass: 'Category 1 (High)',
    lastInspectionDate: '2026-07-28',
    inspectingOfficer: 'Karnataka Water Resources Dept (Cauvery Neeravari Nigam)',
    seepageRecords: [
      {
        id: 'sep-krs-01',
        timestamp: '2026-07-15 08:30 IST',
        location: 'Brindavan Gardens Facing Downstream Toe Drain #12',
        flowRateLps: 3.4,
        turbidityNtu: 2.9,
        appearance: 'Clear crystalline drainage',
        pipingRiskScore: 'Low',
        pipeStatus: 'Flushed & Filtered',
        cleaningDetails: 'Surkhi mortar joints sound; drainage pipes flushed and free from debris.'
      }
    ],
    whirlpoolRecords: [
      {
        id: 'wh-krs-01',
        timestamp: '2026-07-20 14:15 IST',
        reservoirLevelMeters: 124.2,
        location: 'Visvesvaraya Canal Sluice Intake',
        vortexType: 'Type 2 (Depression)',
        coreDiameterMeters: 0.7,
        rotationalSpeedRpm: 19,
        trashRackDangerLevel: 'Normal',
        intakeActionTaken: 'Canal sluice intake flow regulated to maintain smooth laminar stream.'
      }
    ],
    sensors: {
      piezometer: {
        stationId: 'PZ-KRS-SURKHI-04',
        currentHeadMeters: 28.5,
        normalBaselineMeters: 28.0,
        thresholdAlertMeters: 34.0,
        porePressureKpa: 279,
        status: 'Normal',
        unitLocation: 'Historical Surkhi Masonry Hearting'
      },
      inclinometer: {
        stationId: 'INC-KRS-CREST-01',
        currentDisplacementMm: 1.2,
        normalBaselineMm: 1.1,
        thresholdAlertMm: 3.5,
        tiltRateMmPerMonth: 0.01,
        status: 'Normal',
        axis: 'Downstream Alignment Axis'
      },
      seismograph: {
        stationId: 'SM-MANDYA-SEISMIC',
        peakGroundAccelerationG: 0.009,
        designBasisMceG: 0.20,
        ambientMicrotremorsHz: 5.4,
        status: 'Normal',
        lastTremorDate: '2025-11-20 (M2.0 Mandya minor tremor)'
      }
    },
    landslidePrevention: {
      slopeRiskLevel: 'Low',
      geologicalFormation: 'Peninsular Gneiss and Granitic Inclusions',
      precautionsTaken: [
        {
          title: 'Bedrock Consolidation Grouting',
          description: 'Granite foundation consolidated with pressure grouting along downstream cascade.',
          status: 'Installed & Active',
          iconName: 'ShieldCheck'
        }
      ],
      drainageAditsCount: 3,
      rockBoltsInstalled: 1200,
      shotcreteAreaSqM: 9500,
      biorevetmentMeshType: 'Masonry Retaining Walls and Terraced Gardens'
    },
    rainfallHistory: [
      { year: 2025, totalAnnualMm: 980, monsoonPeak24hMm: 160, historicalDeviationPercent: 7.2 },
      { year: 2024, totalAnnualMm: 910, monsoonPeak24hMm: 140, historicalDeviationPercent: 0.5 },
      { year: 2023, totalAnnualMm: 1120, monsoonPeak24hMm: 195, historicalDeviationPercent: 22.0 }
    ],
    earthquakeHistory: [
      {
        id: 'eq-krs-01',
        date: '2025-11-20',
        magnitudeRichter: 2.0,
        epicenterDistanceKm: 32,
        focalDepthKm: 16,
        measuredPgaDamG: 0.009,
        structuralInspectionSummary: 'Stable granite bedrock; no anomalies observed in plumb lines or masonry.'
      }
    ],
    hydrodynamicBreach: {
      breachType: 'Overtopping',
      breachWidthMeters: 140,
      breachFormationTimeHours: 2.5,
      peakBreachDischargeCumecs: 48000,
      totalFloodDurationHours: 30,
      floodRecessionTimeHours: 48,
      totalInundationAreaSqKm: 360,
      downstreamRiverReachKm: 90,
      riverName: 'Kaveri',
      crossSectionsCount: 38,
      affectedZones: [
        { id: 'kz1', name: 'Srirangapatna Heritage Island', distanceDownstreamKm: 18, waveArrivalTimeMinutes: 32, peakFloodDepthMeters: 12.8, flowVelocityMps: 6.8, estimatedPopulation: 32000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Ranganathaswamy Temple Upper High Ramparts' },
        { id: 'kz2', name: 'T. Narasipura (Confluence)', distanceDownstreamKm: 46, waveArrivalTimeMinutes: 75, peakFloodDepthMeters: 8.4, flowVelocityMps: 4.6, estimatedPopulation: 55000, evacuationStatus: 'Evacuate Immediate', safeShelterZone: 'Gunja Narasimhaswamy Ridge Ground' },
        { id: 'kz3', name: 'Kollegal Plains Corridor', distanceDownstreamKm: 85, waveArrivalTimeMinutes: 145, peakFloodDepthMeters: 4.8, flowVelocityMps: 2.9, estimatedPopulation: 110000, evacuationStatus: 'High Alert', safeShelterZone: 'Kollegal Town Upper High School Grounds' }
      ]
    },
    images: [
      {
        id: 'img-krs-good',
        title: 'KRS Dam Historic Crest & Illumination Fountains (Good Condition)',
        type: 'condition_good',
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Historic Sir M. Visvesvaraya masonry gravity design with functioning sluice gates.',
        date: '2026-07-28'
      },
      {
        id: 'img-krs-bad',
        title: 'Spillway Gate Lip Seal Maintenance & Calcite Weeping Check',
        type: 'condition_bad',
        url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Replacement of neoprene bottom seals on 136 sluice gate openings.',
        date: '2026-03-10'
      },
      {
        id: 'img-krs-sat',
        title: 'Sentinel Satellite Optical Mapping of Kaveri River Valley',
        type: 'satellite',
        url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Satellite view highlighting downstream river flood plain towards Mysore and Srirangapatna.',
        date: '2026-07-15',
        resolutionOrAltitude: 'Sentinel-2 10m Optical'
      },
      {
        id: 'img-krs-drone',
        title: 'Drone Aerial Survey of 2.6km Surkhi Masonry Wall',
        type: 'drone',
        url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Thermal and RGB drone imaging verifying mortar joint integrity and Brindavan Gardens wall.',
        date: '2026-07-24',
        resolutionOrAltitude: 'UAV Height: 75m AGL'
      }
    ]
  }
];
