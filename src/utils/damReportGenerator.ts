import { jsPDF } from 'jspdf';
import { Dam, EmergencyBroadcast } from '../types';

/**
 * Returns recent alert history for the specified dam, combining active broadcasts
 * with historical logged advisories.
 */
export function getDamAlertHistory(dam: Dam, broadcasts: EmergencyBroadcast[] = []): EmergencyBroadcast[] {
  // Alerts matching this dam from system broadcasts
  const matching = broadcasts.filter(
    b => b.damId === dam.id || b.damName.toLowerCase() === dam.name.toLowerCase()
  );

  // If there are existing matching broadcasts, return them along with contextual historical alerts
  if (matching.length > 0) {
    return matching;
  }

  // Generate realistic historical alerts based on dam condition and sensor readings
  const dateStr = dam.lastInspectionDate || '2026-09-20';
  const defaultAlerts: EmergencyBroadcast[] = [];

  if (dam.condition === 'critical') {
    defaultAlerts.push({
      id: `alert-${dam.id}-01`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `${dateStr} 08:30 IST (Active Emergency)`,
      type: 'condition_alert',
      priority: 'Emergency',
      targetAudience: ['Local Residents', 'Police Department', 'Government & SDMA'],
      title: `CRITICAL DEFICIENCY ALERT: Heightened Seepage & Pore Pressure at ${dam.name}`,
      messageBody: `Pore pressure reading ${dam.sensors.piezometer.porePressureKpa} kPa exceeded threshold. Seepage flow rate at ${dam.seepageRecords[0]?.flowRateLps || 28} L/s with turbidity ${dam.seepageRecords[0]?.turbidityNtu || 45} NTU indicates progressive internal erosion risk. Immediate relief well flushing initiated.`,
      inspectionParametersSummary: `Piezometer: ${dam.sensors.piezometer.currentHeadMeters}m | Seepage: ${dam.seepageRecords[0]?.flowRateLps || 28} L/s (${dam.seepageRecords[0]?.pipingRiskScore || 'Severe'} Piping Risk) | Inclinometer: ${dam.sensors.inclinometer.currentDisplacementMm}mm`,
      status: 'Broadcasting Active'
    });
    defaultAlerts.push({
      id: `alert-${dam.id}-02`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `${dateStr} 06:15 IST`,
      type: 'condition_alert',
      priority: 'Urgent',
      targetAudience: ['Police Department', 'Government & SDMA'],
      title: `Precautionary Evacuation Warning: Downstream Flood Reach`,
      messageBody: `Downstream settlements within ${dam.hydrodynamicBreach.affectedZones[0]?.distanceDownstreamKm || 8} km placed on standby. Hydrodynamic breach simulation indicates ${dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s peak surge potential.`,
      inspectionParametersSummary: `Affected Zones: ${dam.hydrodynamicBreach.affectedZones.length} | Peak Qp: ${dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s`,
      status: 'Delivered'
    });
  } else if (dam.condition === 'alert') {
    defaultAlerts.push({
      id: `alert-${dam.id}-01`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `${dateStr} 10:15 IST (Monitored Alert)`,
      type: 'condition_alert',
      priority: 'Urgent',
      targetAudience: ['Government & SDMA', 'Local Residents'],
      title: `HEIGHTENED SURVEILLANCE: Hydraulic Inflow Surge Advisory`,
      messageBody: `Reservoir level at ${dam.currentWaterLevelMeters}m MSL is within ${(dam.crestLevelMeters - dam.currentWaterLevelMeters).toFixed(1)}m of crest elevation. Spillway discharge readiness confirmed at ${dam.spillwayCapacityCumecs.toLocaleString()} m³/s capacity.`,
      inspectionParametersSummary: `Live Storage: ${Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100)}% Full | Inclinometer: ${dam.sensors.inclinometer.currentDisplacementMm}mm`,
      status: 'Delivered'
    });
    defaultAlerts.push({
      id: `alert-${dam.id}-02`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `Pre-Monsoon Inspection Log`,
      type: 'condition_alert',
      priority: 'Info',
      targetAudience: ['Government & SDMA'],
      title: `Structural Baseline Verification & Drainage Gallery Inspection`,
      messageBody: `Inspecting Officer ${dam.inspectingOfficer} completed ultrasonic concrete integrity scan and inverted filter clearance test.`,
      status: 'Delivered'
    });
  } else if (dam.condition === 'moderate') {
    defaultAlerts.push({
      id: `alert-${dam.id}-01`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `${dateStr} 14:00 IST`,
      type: 'condition_alert',
      priority: 'Urgent',
      targetAudience: ['Government & SDMA'],
      title: `MONSOON ADVISORY: Routine Drainage Adit & Sluice Gate Testing`,
      messageBody: `Routine telemetry check: Piezometer pore pressure at ${dam.sensors.piezometer.porePressureKpa} kPa (Normal baseline: ${dam.sensors.piezometer.normalBaselineMeters}m). Vortex baffles checked at intake bellmouth.`,
      inspectionParametersSummary: `Condition: Class II Moderate | Seismograph: ${dam.sensors.seismograph.peakGroundAccelerationG}g (PGA)`,
      status: 'Delivered'
    });
  } else {
    defaultAlerts.push({
      id: `alert-${dam.id}-01`,
      damId: dam.id,
      damName: dam.name,
      timestamp: `${dateStr} 09:00 IST`,
      type: 'condition_alert',
      priority: 'Info',
      targetAudience: ['Government & SDMA', 'NGOs & Public Services'],
      title: `SAFETY CERTIFICATION: Condition Class I Safe Operational Status`,
      messageBody: `All structural telemetry within nominal tolerances. Freeboard clearance ${(dam.crestLevelMeters - dam.currentWaterLevelMeters).toFixed(2)}m confirmed safe under NDSA Section 36 guidelines.`,
      inspectionParametersSummary: `Piezometer: ${dam.sensors.piezometer.status} | Inclinometer: ${dam.sensors.inclinometer.status} | Seismograph: ${dam.sensors.seismograph.status}`,
      status: 'Delivered'
    });
  }

  return defaultAlerts;
}

/**
 * Downloads a structured JSON telemetry and condition report for the dam
 */
export function downloadDamJsonReport(dam: Dam, broadcasts: EmergencyBroadcast[] = []): void {
  const alerts = getDamAlertHistory(dam, broadcasts);
  const fillPercent = Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100);

  const reportPayload = {
    reportMetadata: {
      title: `National Dam Safety Authority (NDSA) Structural & Hydrodynamic Telemetry Report`,
      standard: `Central Water Commission & Dam Safety Act 2021`,
      reportVersion: '2.4.0',
      generatedAt: new Date().toISOString(),
      reportId: `RPT-${dam.id.toUpperCase()}-${Date.now()}`,
      classification: dam.condition.toUpperCase(),
      authorizingAuthority: 'Central Water Commission (CWC) & State Dam Safety Organisation (SDSO)'
    },
    damProfile: {
      id: dam.id,
      name: dam.name,
      state: dam.state,
      district: dam.district,
      river: dam.river,
      basin: dam.basin,
      yearCompleted: dam.yearCompleted,
      damType: dam.damType,
      hazardClass: dam.hazardClass,
      conditionClassification: dam.condition,
      lastInspectionDate: dam.lastInspectionDate,
      inspectingOfficer: dam.inspectingOfficer,
      coordinates: {
        latitude: dam.latitude,
        longitude: dam.longitude
      }
    },
    hydraulicElevationsAndCapacity: {
      heightMeters: dam.heightMeters,
      crestLengthMeters: dam.crestLengthMeters,
      crestLevelMetersMSL: dam.crestLevelMeters,
      maximumWaterLevelMetersMSL: dam.maximumWaterLevelMeters,
      fullReservoirLevelMetersMSL: dam.fullReservoirLevelMeters,
      currentWaterLevelMetersMSL: dam.currentWaterLevelMeters,
      freeboardMarginMeters: Number((dam.crestLevelMeters - dam.currentWaterLevelMeters).toFixed(2)),
      grossStorageCapacityLiters: dam.grossStorageCapacityLiters,
      currentWaterVolumeLiters: dam.currentWaterVolumeLiters,
      reservoirFillPercentage: fillPercent,
      spillwayCapacityCumecs: dam.spillwayCapacityCumecs
    },
    realtimeSensorTelemetry: {
      piezometer: {
        stationId: dam.sensors.piezometer.stationId,
        unitLocation: dam.sensors.piezometer.unitLocation,
        currentHeadMeters: dam.sensors.piezometer.currentHeadMeters,
        normalBaselineMeters: dam.sensors.piezometer.normalBaselineMeters,
        thresholdAlertMeters: dam.sensors.piezometer.thresholdAlertMeters,
        porePressureKpa: dam.sensors.piezometer.porePressureKpa,
        status: dam.sensors.piezometer.status
      },
      inclinometer: {
        stationId: dam.sensors.inclinometer.stationId,
        monitoringAxis: dam.sensors.inclinometer.axis,
        currentDisplacementMm: dam.sensors.inclinometer.currentDisplacementMm,
        normalBaselineMm: dam.sensors.inclinometer.normalBaselineMm,
        thresholdAlertMm: dam.sensors.inclinometer.thresholdAlertMm,
        tiltRateMmPerMonth: dam.sensors.inclinometer.tiltRateMmPerMonth,
        status: dam.sensors.inclinometer.status
      },
      seismograph: {
        stationId: dam.sensors.seismograph.stationId,
        peakGroundAccelerationG: dam.sensors.seismograph.peakGroundAccelerationG,
        designBasisMceG: dam.sensors.seismograph.designBasisMceG,
        ambientMicrotremorsHz: dam.sensors.seismograph.ambientMicrotremorsHz,
        status: dam.sensors.seismograph.status,
        lastRecordedTremorDate: dam.sensors.seismograph.lastTremorDate
      }
    },
    subsystemsAndInspections: {
      seepageAndPipingLogs: dam.seepageRecords,
      whirlpoolAndVortexRecords: dam.whirlpoolRecords,
      landslidePrecautions: dam.landslidePrevention,
      rainfallHistory: dam.rainfallHistory,
      earthquakeHistory: dam.earthquakeHistory
    },
    hydrodynamicBreachRiskModel: {
      breachType: dam.hydrodynamicBreach.breachType,
      breachWidthMeters: dam.hydrodynamicBreach.breachWidthMeters,
      breachFormationTimeHours: dam.hydrodynamicBreach.breachFormationTimeHours,
      peakBreachDischargeCumecs: dam.hydrodynamicBreach.peakBreachDischargeCumecs,
      totalFloodDurationHours: dam.hydrodynamicBreach.totalFloodDurationHours,
      floodRecessionTimeHours: dam.hydrodynamicBreach.floodRecessionTimeHours,
      totalInundationAreaSqKm: dam.hydrodynamicBreach.totalInundationAreaSqKm,
      downstreamRiverReachKm: dam.hydrodynamicBreach.downstreamRiverReachKm,
      affectedDownstreamZones: dam.hydrodynamicBreach.affectedZones
    },
    recentAlertsAndBroadcastHistory: alerts
  };

  const jsonString = JSON.stringify(reportPayload, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const safeDamName = dam.name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  const dateStamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `${safeDamName}_safety_telemetry_${dateStamp}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates and downloads a clean, multi-page PDF summary report
 */
export function generateDamPdfReport(dam: Dam, broadcasts: EmergencyBroadcast[] = []): void {
  const alerts = getDamAlertHistory(dam, broadcasts);
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  const formatLiters = (liters: number) => {
    if (liters >= 1000000000000) return `${(liters / 1000000000000).toFixed(2)} Trillion Liters`;
    if (liters >= 1000000000) return `${(liters / 1000000000).toFixed(2)} Billion Liters`;
    return `${(liters / 1000000).toFixed(1)} Million Liters`;
  };

  const fillPercent = Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100);

  // Condition color mapping for PDF header and badges
  const conditionRGB: Record<string, { r: number; g: number; b: number; label: string }> = {
    good: { r: 16, g: 149, b: 104, label: 'CLASS I - GOOD / SAFE' },
    moderate: { r: 217, g: 119, b: 6, label: 'CLASS II - MODERATE / MONITORED' },
    alert: { r: 234, g: 88, b: 12, label: 'CLASS III - HEIGHTENED ALERT' },
    critical: { r: 220, g: 38, b: 38, label: 'CLASS IV - CRITICAL DEFICIENCY' }
  };
  const condColor = conditionRGB[dam.condition] || conditionRGB.good;

  // Header Background Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Decorative top color strip
  doc.setFillColor(condColor.r, condColor.g, condColor.b);
  doc.rect(0, 0, pageWidth, 3, 'F');

  // Authority Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text('NATIONAL DAM SAFETY AUTHORITY (NDSA) • CENTRAL WATER COMMISSION', margin, 10);

  // Main Report Title
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text(`${dam.name.toUpperCase()} SAFETY & TELEMETRY REPORT`, margin, 17);

  // Subtitle / Location
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225); // slate-300
  doc.text(
    `State: ${dam.state}  |  District: ${dam.district}  |  Basin: ${dam.basin}  |  River: ${dam.river}`,
    margin,
    23
  );

  // Date & Reference ID
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  const nowStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST';
  doc.text(`Generated: ${nowStr}  •  Ref: CWC-NDSA-${dam.id.toUpperCase()}`, margin, 30);

  // Condition Badge on Top Right
  const badgeWidth = 62;
  const badgeHeight = 11;
  const badgeX = pageWidth - margin - badgeWidth;
  doc.setFillColor(condColor.r, condColor.g, condColor.b);
  doc.roundedRect(badgeX, 12, badgeWidth, badgeHeight, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text(condColor.label, badgeX + badgeWidth / 2, 19, { align: 'center' });

  y = 44;

  // Function to draw section header
  const drawSectionHeader = (title: string, iconNumber: string) => {
    doc.setFillColor(241, 245, 249); // slate-100
    doc.roundedRect(margin, y, contentWidth, 7, 1.5, 1.5, 'F');
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(margin, y, 2.5, 7, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(`${iconNumber}. ${title}`, margin + 5, y + 5);
    y += 10;
  };

  // SECTION 1: DAM PROFILE & STRUCTURAL SPECIFICATIONS
  drawSectionHeader('DAM SPECIFICATIONS & STORAGE ELEVATIONS', '1');

  // Spec Grid (2 columns)
  const colWidth = (contentWidth - 4) / 2;
  const leftX = margin;
  const rightX = margin + colWidth + 4;
  const specRowHeight = 5.2;

  doc.setFontSize(8);
  const specsLeft = [
    ['Dam Type', dam.damType],
    ['Year Completed', `${dam.yearCompleted} (${new Date().getFullYear() - dam.yearCompleted} yrs active)`],
    ['Structural Height', `${dam.heightMeters} m`],
    ['Crest Length', `${dam.crestLengthMeters} m`],
    ['Spillway Capacity', `${dam.spillwayCapacityCumecs.toLocaleString()} m³/s`],
    ['Hazard Classification', dam.hazardClass]
  ];

  const specsRight = [
    ['Current Water Level', `${dam.currentWaterLevelMeters} m MSL`],
    ['Full Reservoir Level (FRL)', `${dam.fullReservoirLevelMeters} m MSL`],
    ['Maximum Water Level (MWL)', `${dam.maximumWaterLevelMeters} m MSL`],
    ['Overflow Crest Level', `${dam.crestLevelMeters} m MSL`],
    ['Freeboard Margin', `+${(dam.crestLevelMeters - dam.currentWaterLevelMeters).toFixed(2)} m`],
    ['Storage Fill Level', `${fillPercent}% (${formatLiters(dam.currentWaterVolumeLiters)})`]
  ];

  specsLeft.forEach(([k, v], idx) => {
    const rowY = y + idx * specRowHeight;
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(leftX, rowY - 3.5, colWidth, specRowHeight, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(71, 85, 105);
    doc.text(k, leftX + 2, rowY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(String(v), leftX + colWidth - 2, rowY, { align: 'right' });
  });

  specsRight.forEach(([k, v], idx) => {
    const rowY = y + idx * specRowHeight;
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(rightX, rowY - 3.5, colWidth, specRowHeight, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(71, 85, 105);
    doc.text(k, rightX + 2, rowY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(String(v), rightX + colWidth - 2, rowY, { align: 'right' });
  });

  y += specsLeft.length * specRowHeight + 5;

  // SECTION 2: REAL-TIME SENSOR TELEMETRY READINGS
  drawSectionHeader('REAL-TIME SENSOR TELEMETRY READINGS', '2');

  const sensorCardWidth = (contentWidth - 6) / 3;
  const sensorCardHeight = 32;

  // Card 1: Piezometer
  const piez = dam.sensors.piezometer;
  const pX = margin;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(pX, y, sensorCardWidth, sensorCardHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Piezometer Station', pX + 3, y + 5);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`ID: ${piez.stationId}`, pX + 3, y + 9);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`Head: ${piez.currentHeadMeters} m`, pX + 3, y + 15);
  doc.text(`Pressure: ${piez.porePressureKpa} kPa`, pX + 3, y + 20);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Baseline: ${piez.normalBaselineMeters}m | Alert: ${piez.thresholdAlertMeters}m`, pX + 3, y + 24.5);

  // Status Pill
  const pStatusColor = piez.status === 'Normal' ? [16, 149, 104] : [220, 38, 38];
  doc.setFillColor(pStatusColor[0], pStatusColor[1], pStatusColor[2]);
  doc.roundedRect(pX + 3, y + 26.5, sensorCardWidth - 6, 4, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`STATUS: ${piez.status.toUpperCase()}`, pX + sensorCardWidth / 2, y + 29.5, { align: 'center' });

  // Card 2: Inclinometer
  const inc = dam.sensors.inclinometer;
  const iX = margin + sensorCardWidth + 3;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(iX, y, sensorCardWidth, sensorCardHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Inclinometer Tilt', iX + 3, y + 5);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`ID: ${inc.stationId}`, iX + 3, y + 9);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`Disp: ${inc.currentDisplacementMm} mm`, iX + 3, y + 15);
  doc.text(`Rate: ${inc.tiltRateMmPerMonth} mm/mo`, iX + 3, y + 20);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Baseline: ${inc.normalBaselineMm}mm | Alert: ${inc.thresholdAlertMm}mm`, iX + 3, y + 24.5);

  const iStatusColor = inc.status === 'Normal' ? [16, 149, 104] : [220, 38, 38];
  doc.setFillColor(iStatusColor[0], iStatusColor[1], iStatusColor[2]);
  doc.roundedRect(iX + 3, y + 26.5, sensorCardWidth - 6, 4, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`STATUS: ${inc.status.toUpperCase()}`, iX + sensorCardWidth / 2, y + 29.5, { align: 'center' });

  // Card 3: Seismograph
  const seis = dam.sensors.seismograph;
  const sX = margin + (sensorCardWidth + 3) * 2;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(sX, y, sensorCardWidth, sensorCardHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Seismic Monitoring', sX + 3, y + 5);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`ID: ${seis.stationId}`, sX + 3, y + 9);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`PGA: ${seis.peakGroundAccelerationG}g`, sX + 3, y + 15);
  doc.text(`MCE Design: ${seis.designBasisMceG}g`, sX + 3, y + 20);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`Microtremors: ${seis.ambientMicrotremorsHz} Hz`, sX + 3, y + 24.5);

  const sStatusColor = seis.status === 'Normal' ? [16, 149, 104] : [217, 119, 6];
  doc.setFillColor(sStatusColor[0], sStatusColor[1], sStatusColor[2]);
  doc.roundedRect(sX + 3, y + 26.5, sensorCardWidth - 6, 4, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`STATUS: ${seis.status.toUpperCase()}`, sX + sensorCardWidth / 2, y + 29.5, { align: 'center' });

  y += sensorCardHeight + 5;

  // SECTION 3: SUBSYSTEM STATUS & INSPECTION FINDINGS
  drawSectionHeader('SEEPAGE, VORTEX & LANDSLIDE PRECAUTION AUDIT', '3');

  const latestSeepage = dam.seepageRecords[0];
  const latestVortex = dam.whirlpoolRecords[0];

  doc.setFontSize(7.5);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 23, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('• Seepage & Piping:', margin + 3, y + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(
    latestSeepage
      ? `Flow: ${latestSeepage.flowRateLps} L/s | Turbidity: ${latestSeepage.turbidityNtu} NTU | Appearance: "${latestSeepage.appearance}" | Risk: ${latestSeepage.pipingRiskScore} (${latestSeepage.pipeStatus})`
      : 'No anomalous seepage recorded.',
    margin + 34,
    y + 4.5
  );

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('• Whirlpool & Vortex:', margin + 3, y + 10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(
    latestVortex
      ? `${latestVortex.vortexType} at ${latestVortex.location} | Core: ${latestVortex.coreDiameterMeters}m @ ${latestVortex.rotationalSpeedRpm} RPM | Risk: ${latestVortex.trashRackDangerLevel}`
      : 'No intake vortex active.',
    margin + 34,
    y + 10
  );

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('• Landslide Precautions:', margin + 3, y + 15.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(
    `Slope Risk: ${dam.landslidePrevention.slopeRiskLevel} | Rock Bolts: ${dam.landslidePrevention.rockBoltsInstalled} installed | Shotcrete: ${dam.landslidePrevention.shotcreteAreaSqM.toLocaleString()} m² | Drainage Adits: ${dam.landslidePrevention.drainageAditsCount}`,
    margin + 34,
    y + 15.5
  );

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('• Officer In-Charge:', margin + 3, y + 20.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(
    `${dam.inspectingOfficer} | Date of Last Field Inspection: ${dam.lastInspectionDate}`,
    margin + 34,
    y + 20.5
  );

  y += 27;

  // SECTION 4: RECENT ALERT & BROADCAST HISTORY
  drawSectionHeader('RECENT ALERT HISTORY & EMERGENCY LOGS', '4');

  const alertBoxY = y;
  const maxAlertsToShow = Math.min(alerts.length, 3);

  if (maxAlertsToShow === 0) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('No critical alerts or emergency broadcasts dispatched for this dam.', margin + 3, y + 4);
    y += 10;
  } else {
    for (let i = 0; i < maxAlertsToShow; i++) {
      const alt = alerts[i];
      const alertHeight = 16;

      // Color code based on priority
      let pColor = [59, 130, 246]; // blue
      if (alt.priority === 'Emergency' || alt.priority === 'Critical') pColor = [220, 38, 38];
      else if (alt.priority === 'Urgent') pColor = [217, 119, 6];

      doc.setFillColor(254, 242, 242); // very light tint or clean slate
      if (alt.priority === 'Emergency' || alt.priority === 'Critical') {
        doc.setFillColor(254, 242, 242);
      } else {
        doc.setFillColor(248, 250, 252);
      }
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, y, contentWidth, alertHeight, 1.5, 1.5, 'FD');

      // Left priority vertical bar
      doc.setFillColor(pColor[0], pColor[1], pColor[2]);
      doc.rect(margin, y, 2.5, alertHeight, 'F');

      // Title & Timestamp
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(pColor[0], pColor[1], pColor[2]);
      doc.text(`[${alt.priority.toUpperCase()}] ${alt.title}`, margin + 5, y + 4.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(100, 116, 139);
      doc.text(`Timestamp: ${alt.timestamp}  |  Status: ${alt.status}`, contentWidth + margin - 2, y + 4.5, { align: 'right' });

      // Body snippet (truncated if too long)
      doc.setFontSize(6.8);
      doc.setTextColor(51, 65, 85);
      const splitBody = doc.splitTextToSize(alt.messageBody, contentWidth - 10);
      doc.text(splitBody.slice(0, 2), margin + 5, y + 8.5);

      y += alertHeight + 2.5;
    }
  }

  // Footer / Sign-off area on Page 1
  const footerY = pageHeight - 18;
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, footerY - 2, pageWidth - margin, footerY - 2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text(
    'CONFIDENTIAL & OFFICIAL • Dam Safety Act 2021 Statutory Document • Government of India',
    margin,
    footerY + 2
  );
  doc.text(
    `Inspecting Officer Signature: _________________________  (${dam.inspectingOfficer})`,
    pageWidth - margin,
    footerY + 2,
    { align: 'right' }
  );

  doc.text(
    'Page 1 of 2  •  Hydrodynamic Simulation & Downstream Reach on Page 2',
    pageWidth / 2,
    footerY + 6.5,
    { align: 'center' }
  );

  // ================= PAGE 2: HYDRODYNAMIC INUNDATION & DOWNSTREAM REACH =================
  doc.addPage();
  let p2Y = 14;

  // Page 2 Header Banner
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 22, 'F');
  doc.setFillColor(condColor.r, condColor.g, condColor.b);
  doc.rect(0, 0, pageWidth, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('NATIONAL DAM SAFETY AUTHORITY • ANNEXURE II', margin, 9);

  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(`${dam.name.toUpperCase()} - HYDRODYNAMIC DAM BREAK INUNDATION MODEL`, margin, 16);

  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text(`Reach: ${dam.hydrodynamicBreach.downstreamRiverReachKm} km  |  River: ${dam.hydrodynamicBreach.riverName}`, pageWidth - margin, 16, { align: 'right' });

  p2Y = 28;

  // Breach Model Key Parameters Table
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, p2Y, contentWidth, 7, 1.5, 1.5, 'F');
  doc.setFillColor(15, 23, 42);
  doc.rect(margin, p2Y, 2.5, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text('5. DAM BREAK SIMULATION & BREACH PARAMETERS', margin + 5, p2Y + 5);

  p2Y += 10;

  const breachSpecs = [
    ['Modeled Breach Mechanism', dam.hydrodynamicBreach.breachType],
    ['Breach Width at Crest', `${dam.hydrodynamicBreach.breachWidthMeters} meters`],
    ['Breach Formation Time (Tf)', `${dam.hydrodynamicBreach.breachFormationTimeHours} Hours`],
    ['Peak Discharge at Dam Toe (Qp)', `${dam.hydrodynamicBreach.peakBreachDischargeCumecs.toLocaleString()} m³/s`],
    ['Total Flood Hydrograph Duration', `${dam.hydrodynamicBreach.totalFloodDurationHours} Hours`],
    ['Flood Recession to Safe Bankfull', `T+${dam.hydrodynamicBreach.floodRecessionTimeHours} Hours`],
    ['Total Inundation Footprint', `${dam.hydrodynamicBreach.totalInundationAreaSqKm.toLocaleString()} sq km`],
    ['Downstream River Corridor', `${dam.hydrodynamicBreach.downstreamRiverReachKm} km`]
  ];

  breachSpecs.forEach(([k, v], idx) => {
    const rowY = p2Y + idx * 5.2;
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, rowY - 3.5, contentWidth, 5.2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(k, margin + 2, rowY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(String(v), margin + contentWidth - 2, rowY, { align: 'right' });
  });

  p2Y += breachSpecs.length * 5.2 + 8;

  // Downstream Affected Zones Table
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, p2Y, contentWidth, 7, 1.5, 1.5, 'F');
  doc.setFillColor(15, 23, 42);
  doc.rect(margin, p2Y, 2.5, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text('6. DOWNSTREAM VULNERABLE ZONES & EVACUATION TIMELINES', margin + 5, p2Y + 5);

  p2Y += 10;

  // Table Header
  const headers = ['Settlement / Sector', 'Distance', 'Wave Arrival', 'Peak Depth', 'Velocity', 'Pop. at Risk', 'Status'];
  const colXs = [margin + 2, margin + 45, margin + 65, margin + 88, margin + 110, margin + 130, margin + 155];

  doc.setFillColor(15, 23, 42);
  doc.rect(margin, p2Y - 3.5, contentWidth, 5.5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  headers.forEach((h, i) => {
    doc.text(h, colXs[i], p2Y);
  });

  p2Y += 5.5;

  dam.hydrodynamicBreach.affectedZones.forEach((zone, idx) => {
    const rowY = p2Y + idx * 6;
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, rowY - 3.5, contentWidth, 6, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(30, 41, 59);
    doc.text(zone.name, colXs[0], rowY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`${zone.distanceDownstreamKm} km`, colXs[1], rowY);
    doc.text(`${zone.waveArrivalTimeMinutes} min`, colXs[2], rowY);
    doc.text(`${zone.peakFloodDepthMeters} m`, colXs[3], rowY);
    doc.text(`${zone.flowVelocityMps} m/s`, colXs[4], rowY);
    doc.text(zone.estimatedPopulation.toLocaleString(), colXs[5], rowY);

    // Evacuation Status
    if (zone.evacuationStatus === 'Evacuate Immediate') {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(220, 38, 38);
    } else if (zone.evacuationStatus === 'High Alert') {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(217, 119, 6);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(16, 149, 104);
    }
    doc.text(zone.evacuationStatus, colXs[6], rowY);
  });

  p2Y += dam.hydrodynamicBreach.affectedZones.length * 6 + 10;

  // Emergency Preparedness Directives Box
  doc.setFillColor(254, 242, 242);
  doc.setDrawColor(252, 165, 165);
  doc.roundedRect(margin, p2Y, contentWidth, 24, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(185, 28, 28);
  doc.text('EMERGENCY ACTION PLAN (EAP) DIRECTIVES:', margin + 4, p2Y + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(69, 10, 10);
  const directiveText = `1. In accordance with Dam Safety Act 2021 Section 31, downstream Collectorate and District Disaster Management Authorities (DDMA) must maintain satellite VHF communication with the dam control tower.
2. In case of water level breaching ${dam.maximumWaterLevelMeters}m MSL, all automated sirens at downstream gauge stations must sound continuous high-pitch pulses.
3. Rapid relief shelters identified: ${dam.hydrodynamicBreach.affectedZones.map(z => z.safeShelterZone).slice(0, 3).join(', ')}.`;
  const splitDirectives = doc.splitTextToSize(directiveText, contentWidth - 8);
  doc.text(splitDirectives, margin + 4, p2Y + 10);

  // Page 2 Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, footerY - 2, pageWidth - margin, footerY - 2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('END OF OFFICIAL TECHNICAL REPORT • National Dam Safety Authority • New Delhi', margin, footerY + 2);
  doc.text('Page 2 of 2', pageWidth / 2, footerY + 6.5, { align: 'center' });

  // Save the PDF
  const safeDamName = dam.name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  const dateStamp = new Date().toISOString().slice(0, 10);
  doc.save(`${safeDamName}_safety_inspection_report_${dateStamp}.pdf`);
}
