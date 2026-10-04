import React, { useState, useMemo } from 'react';
import { 
  Building2, Search, Filter, Download, ArrowUpDown, 
  MapPin, Waves, Droplets, Activity, AlertTriangle, 
  CheckCircle2, ChevronLeft, ChevronRight, Eye, Radio, 
  Layers, BarChart3, Database, Table, Grid, Compass,
  Plane, Satellite
} from 'lucide-react';
import { Dam, DamCondition } from '../types';
import { enrichDamWithLocationAndImagery } from '../utils/damImageryGenerator';
import { 
  getMaharashtra2394Dams, 
  getMaharashtraSummaryStats, 
  MAHARASHTRA_DISTRICT_QUOTAS 
} from '../data/maharashtraDamsData';
import { 
  getMadhyaPradesh906Dams, 
  getMadhyaPradeshSummaryStats, 
  MADHYA_PRADESH_DISTRICT_QUOTAS 
} from '../data/madhyaPradeshDamsData';
import { 
  getGujarat632Dams, 
  getGujaratSummaryStats, 
  GUJARAT_DISTRICT_QUOTAS 
} from '../data/gujaratDamsData';
import { 
  getKarnataka231Dams, 
  getKarnatakaSummaryStats, 
  KARNATAKA_DISTRICT_QUOTAS 
} from '../data/karnatakaDamsData';
import { 
  getRajasthan211Dams, 
  getRajasthanSummaryStats, 
  RAJASTHAN_DISTRICT_QUOTAS 
} from '../data/rajasthanDamsData';
import { 
  getOdisha204Dams, 
  getOdishaSummaryStats, 
  ODISHA_DISTRICT_QUOTAS 
} from '../data/odishaDamsData';
import { 
  getTelangana180Dams, 
  getTelanganaSummaryStats, 
  TELANGANA_DISTRICT_QUOTAS 
} from '../data/telanganaDamsData';
import { 
  getAndhraPradesh167Dams, 
  getAndhraPradeshSummaryStats, 
  ANDHRA_PRADESH_DISTRICT_QUOTAS 
} from '../data/andhraPradeshDamsData';
import { 
  getUttarPradesh130Dams, 
  getUttarPradeshSummaryStats, 
  UTTAR_PRADESH_DISTRICT_QUOTAS 
} from '../data/uttarPradeshDamsData';
import {
  getTamilNadu116Dams,
  getTamilNaduSummaryStats,
  TAMIL_NADU_DISTRICT_QUOTAS
} from '../data/tamilNaduDamsData';
import {
  getKerala62Dams,
  getKeralaSummaryStats,
  KERALA_DISTRICT_QUOTAS
} from '../data/keralaDamsData';
import {
  getJharkhand42Dams,
  getJharkhandSummaryStats,
  JHARKHAND_DISTRICT_QUOTAS
} from '../data/jharkhandDamsData';
import {
  getWestBengal33Dams,
  getWestBengalSummaryStats,
  WEST_BENGAL_DISTRICT_QUOTAS
} from '../data/westBengalDamsData';
import {
  getUttarakhand26Dams,
  getUttarakhandSummaryStats,
  UTTARAKHAND_DISTRICT_QUOTAS
} from '../data/uttarakhandDamsData';
import {
  getHimachalPradesh23Dams,
  getHimachalPradeshSummaryStats,
  HIMACHAL_PRADESH_DISTRICT_QUOTAS
} from '../data/himachalPradeshDamsData';
import {
  getJammuKashmir18Dams,
  getJammuKashmirSummaryStats,
  JAMMU_KASHMIR_DISTRICT_QUOTAS
} from '../data/jammuKashmirDamsData';
import {
  getPunjab16Dams,
  getPunjabSummaryStats,
  PUNJAB_DISTRICT_QUOTAS
} from '../data/punjabDamsData';
import {
  getChhattisgarh28Dams,
  getChhattisgarhSummaryStats,
  CHHATTISGARH_DISTRICT_QUOTAS
} from '../data/chhattisgarhDamsData';
import {
  getAssamNE16Dams,
  getAssamNESummaryStats,
  ASSAM_NE_DISTRICT_QUOTAS
} from '../data/assamNorthEastDamsData';

export type SupportedMajorState = 
  | 'Maharashtra' 
  | 'Madhya Pradesh' 
  | 'Gujarat' 
  | 'Karnataka'
  | 'Rajasthan'
  | 'Odisha'
  | 'Telangana'
  | 'Andhra Pradesh'
  | 'Uttar Pradesh'
  | 'Tamil Nadu'
  | 'Kerala'
  | 'Jharkhand'
  | 'West Bengal'
  | 'Uttarakhand'
  | 'Himachal Pradesh'
  | 'Jammu and Kashmir'
  | 'Punjab'
  | 'Chhattisgarh'
  | 'Assam and North East';

interface StateDamsExplorerProps {
  initialState?: SupportedMajorState;
  activeState?: SupportedMajorState;
  onStateChange?: (state: SupportedMajorState) => void;
  onSelectDam: (dam: Dam) => void;
  onTriggerSos: (dam: Dam) => void;
}

export interface StateConfig {
  name: SupportedMajorState;
  shortCode: string;
  count: number;
  rank: string;
  districtsText: string;
  shareText: string;
  accentColor: string;
  badgeClass: string;
  activeBgClass: string;
  activeBorderClass: string;
  borderClass: string;
  bgGradient: string;
  authority: string;
  getData: () => Dam[];
  getStats: () => any;
  quotas: any[];
}

export const STATE_CONFIGS: Record<SupportedMajorState, StateConfig> = {
  'Maharashtra': {
    name: 'Maharashtra',
    shortCode: 'MH',
    count: 2394,
    rank: 'Rank #1 in India',
    districtsText: '36 Districts',
    shareText: '44.8% of National Large Dams',
    accentColor: 'cyan',
    badgeClass: 'bg-cyan-500 text-slate-950',
    activeBgClass: 'bg-cyan-950/60',
    activeBorderClass: 'border-cyan-400',
    borderClass: 'border-cyan-800/60',
    bgGradient: 'from-slate-900 via-cyan-950/20 to-slate-900',
    authority: 'Central Water Commission (CWC) & Maharashtra WRD',
    getData: getMaharashtra2394Dams,
    getStats: getMaharashtraSummaryStats,
    quotas: MAHARASHTRA_DISTRICT_QUOTAS
  },
  'Madhya Pradesh': {
    name: 'Madhya Pradesh',
    shortCode: 'MP',
    count: 906,
    rank: 'Rank #2 in India',
    districtsText: '51 Districts',
    shareText: '17.0% of National Large Dams',
    accentColor: 'emerald',
    badgeClass: 'bg-emerald-500 text-slate-950',
    activeBgClass: 'bg-emerald-950/60',
    activeBorderClass: 'border-emerald-400',
    borderClass: 'border-emerald-800/60',
    bgGradient: 'from-slate-900 via-emerald-950/20 to-slate-900',
    authority: 'CWC, Narmada Valley Development Authority (NVDA) & MP WRD',
    getData: getMadhyaPradesh906Dams,
    getStats: getMadhyaPradeshSummaryStats,
    quotas: MADHYA_PRADESH_DISTRICT_QUOTAS
  },
  'Gujarat': {
    name: 'Gujarat',
    shortCode: 'GJ',
    count: 632,
    rank: 'Rank #3 in India',
    districtsText: '33 Districts',
    shareText: '11.8% of National Large Dams',
    accentColor: 'blue',
    badgeClass: 'bg-blue-500 text-slate-950',
    activeBgClass: 'bg-blue-950/60',
    activeBorderClass: 'border-blue-400',
    borderClass: 'border-blue-800/60',
    bgGradient: 'from-slate-900 via-blue-950/20 to-slate-900',
    authority: 'CWC, Sardar Sarovar Narmada Nigam (SSNNL) & Gujarat WRD',
    getData: getGujarat632Dams,
    getStats: getGujaratSummaryStats,
    quotas: GUJARAT_DISTRICT_QUOTAS
  },
  'Karnataka': {
    name: 'Karnataka',
    shortCode: 'KA',
    count: 231,
    rank: 'Rank #5 in India',
    districtsText: '31 Districts',
    shareText: '4.3% of National Large Dams',
    accentColor: 'amber',
    badgeClass: 'bg-amber-500 text-slate-950',
    activeBgClass: 'bg-amber-950/60',
    activeBorderClass: 'border-amber-400',
    borderClass: 'border-amber-800/60',
    bgGradient: 'from-slate-900 via-amber-950/20 to-slate-900',
    authority: 'CWC, Cauvery Neeravari Nigam (CNNL), KBJNL & KPCL',
    getData: getKarnataka231Dams,
    getStats: getKarnatakaSummaryStats,
    quotas: KARNATAKA_DISTRICT_QUOTAS
  },
  'Rajasthan': {
    name: 'Rajasthan',
    shortCode: 'RJ',
    count: 211,
    rank: 'Rank #6 in India',
    districtsText: '22 Districts',
    shareText: '4.0% of National Large Dams',
    accentColor: 'orange',
    badgeClass: 'bg-orange-500 text-slate-950',
    activeBgClass: 'bg-orange-950/60',
    activeBorderClass: 'border-orange-400',
    borderClass: 'border-orange-800/60',
    bgGradient: 'from-slate-900 via-orange-950/20 to-slate-900',
    authority: 'CWC, Rajasthan Water Resources Department (WRD) & CAD Kota',
    getData: getRajasthan211Dams,
    getStats: getRajasthanSummaryStats,
    quotas: RAJASTHAN_DISTRICT_QUOTAS
  },
  'Odisha': {
    name: 'Odisha',
    shortCode: 'OD',
    count: 204,
    rank: 'Rank #7 in India',
    districtsText: '24 Districts',
    shareText: '3.8% of National Large Dams',
    accentColor: 'teal',
    badgeClass: 'bg-teal-500 text-slate-950',
    activeBgClass: 'bg-teal-950/60',
    activeBorderClass: 'border-teal-400',
    borderClass: 'border-teal-800/60',
    bgGradient: 'from-slate-900 via-teal-950/20 to-slate-900',
    authority: 'CWC, Department of Water Resources (DoWR Odisha) & OHPC',
    getData: getOdisha204Dams,
    getStats: getOdishaSummaryStats,
    quotas: ODISHA_DISTRICT_QUOTAS
  },
  'Telangana': {
    name: 'Telangana',
    shortCode: 'TG',
    count: 180,
    rank: 'Rank #8 in India',
    districtsText: '24 Districts',
    shareText: '3.4% of National Large Dams',
    accentColor: 'purple',
    badgeClass: 'bg-purple-500 text-slate-950',
    activeBgClass: 'bg-purple-950/60',
    activeBorderClass: 'border-purple-400',
    borderClass: 'border-purple-800/60',
    bgGradient: 'from-slate-900 via-purple-950/20 to-slate-900',
    authority: 'CWC, Krishna River Management Board (KRMB), TSGENCO & Telangana I&CAD',
    getData: getTelangana180Dams,
    getStats: getTelanganaSummaryStats,
    quotas: TELANGANA_DISTRICT_QUOTAS
  },
  'Andhra Pradesh': {
    name: 'Andhra Pradesh',
    shortCode: 'AP',
    count: 167,
    rank: 'Rank #9 in India',
    districtsText: '17 Districts',
    shareText: '3.1% of National Large Dams',
    accentColor: 'sky',
    badgeClass: 'bg-sky-500 text-slate-950',
    activeBgClass: 'bg-sky-950/60',
    activeBorderClass: 'border-sky-400',
    borderClass: 'border-sky-800/60',
    bgGradient: 'from-slate-900 via-sky-950/20 to-slate-900',
    authority: 'CWC, Polavaram Project Authority (PPA), APGENCO & Andhra Pradesh WRD',
    getData: getAndhraPradesh167Dams,
    getStats: getAndhraPradeshSummaryStats,
    quotas: ANDHRA_PRADESH_DISTRICT_QUOTAS
  },
  'Uttar Pradesh': {
    name: 'Uttar Pradesh',
    shortCode: 'UP',
    count: 130,
    rank: 'Rank #10 in India',
    districtsText: '12 Districts',
    shareText: '2.5% of National Large Dams',
    accentColor: 'rose',
    badgeClass: 'bg-rose-500 text-slate-950',
    activeBgClass: 'bg-rose-950/60',
    activeBorderClass: 'border-rose-400',
    borderClass: 'border-rose-800/60',
    bgGradient: 'from-slate-900 via-rose-950/20 to-slate-900',
    authority: 'CWC, Betwa River Board & UP Irrigation and Water Resources Dept',
    getData: getUttarPradesh130Dams,
    getStats: getUttarPradeshSummaryStats,
    quotas: UTTAR_PRADESH_DISTRICT_QUOTAS
  },
  'Tamil Nadu': {
    name: 'Tamil Nadu',
    shortCode: 'TN',
    count: 116,
    rank: 'Rank #11 in India',
    districtsText: '21 Districts',
    shareText: '2.2% of National Large Dams',
    accentColor: 'indigo',
    badgeClass: 'bg-indigo-500 text-slate-950',
    activeBgClass: 'bg-indigo-950/60',
    activeBorderClass: 'border-indigo-400',
    borderClass: 'border-indigo-800/60',
    bgGradient: 'from-slate-900 via-indigo-950/20 to-slate-900',
    authority: 'CWC, Cauvery Water Management Authority (CWMA) & Tamil Nadu WRD',
    getData: getTamilNadu116Dams,
    getStats: getTamilNaduSummaryStats,
    quotas: TAMIL_NADU_DISTRICT_QUOTAS
  },
  'Kerala': {
    name: 'Kerala',
    shortCode: 'KL',
    count: 62,
    rank: 'Rank #12 in India',
    districtsText: '11 Districts',
    shareText: '1.2% of National Large Dams',
    accentColor: 'emerald',
    badgeClass: 'bg-emerald-500 text-slate-950',
    activeBgClass: 'bg-emerald-950/60',
    activeBorderClass: 'border-emerald-400',
    borderClass: 'border-emerald-800/60',
    bgGradient: 'from-slate-900 via-emerald-950/20 to-slate-900',
    authority: 'CWC, Kerala State Electricity Board (KSEB) & Kerala Irrigation Dept',
    getData: getKerala62Dams,
    getStats: getKeralaSummaryStats,
    quotas: KERALA_DISTRICT_QUOTAS
  },
  'Jharkhand': {
    name: 'Jharkhand',
    shortCode: 'JH',
    count: 42,
    rank: 'Rank #13 in India',
    districtsText: '14 Districts',
    shareText: '0.8% of National Large Dams',
    accentColor: 'amber',
    badgeClass: 'bg-amber-500 text-slate-950',
    activeBgClass: 'bg-amber-950/60',
    activeBorderClass: 'border-amber-400',
    borderClass: 'border-amber-800/60',
    bgGradient: 'from-slate-900 via-amber-950/20 to-slate-900',
    authority: 'CWC, Damodar Valley Corporation (DVC) & Jharkhand WRD',
    getData: getJharkhand42Dams,
    getStats: getJharkhandSummaryStats,
    quotas: JHARKHAND_DISTRICT_QUOTAS
  },
  'West Bengal': {
    name: 'West Bengal',
    shortCode: 'WB',
    count: 33,
    rank: 'Rank #14 in India',
    districtsText: '10 Districts',
    shareText: '0.6% of National Large Dams',
    accentColor: 'cyan',
    badgeClass: 'bg-cyan-500 text-slate-950',
    activeBgClass: 'bg-cyan-950/60',
    activeBorderClass: 'border-cyan-400',
    borderClass: 'border-cyan-800/60',
    bgGradient: 'from-slate-900 via-cyan-950/20 to-slate-900',
    authority: 'CWC, DVC & West Bengal Irrigation and Waterways Directorate',
    getData: getWestBengal33Dams,
    getStats: getWestBengalSummaryStats,
    quotas: WEST_BENGAL_DISTRICT_QUOTAS
  },
  'Uttarakhand': {
    name: 'Uttarakhand',
    shortCode: 'UK',
    count: 26,
    rank: 'Rank #15 in India',
    districtsText: '8 Districts',
    shareText: '0.5% of National Large Dams',
    accentColor: 'teal',
    badgeClass: 'bg-teal-500 text-slate-950',
    activeBgClass: 'bg-teal-950/60',
    activeBorderClass: 'border-teal-400',
    borderClass: 'border-teal-800/60',
    bgGradient: 'from-slate-900 via-teal-950/20 to-slate-900',
    authority: 'CWC, THDC India Limited & Uttarakhand Jal Vidyut Nigam (UJVNL)',
    getData: getUttarakhand26Dams,
    getStats: getUttarakhandSummaryStats,
    quotas: UTTARAKHAND_DISTRICT_QUOTAS
  },
  'Himachal Pradesh': {
    name: 'Himachal Pradesh',
    shortCode: 'HP',
    count: 23,
    rank: 'Rank #16 in India',
    districtsText: '8 Districts',
    shareText: '0.4% of National Large Dams',
    accentColor: 'blue',
    badgeClass: 'bg-blue-500 text-slate-950',
    activeBgClass: 'bg-blue-950/60',
    activeBorderClass: 'border-blue-400',
    borderClass: 'border-blue-800/60',
    bgGradient: 'from-slate-900 via-blue-950/20 to-slate-900',
    authority: 'CWC, BBMB, SJVN Limited, NHPC & HP State Electricity Board',
    getData: getHimachalPradesh23Dams,
    getStats: getHimachalPradeshSummaryStats,
    quotas: HIMACHAL_PRADESH_DISTRICT_QUOTAS
  },
  'Jammu and Kashmir': {
    name: 'Jammu and Kashmir',
    shortCode: 'JK',
    count: 18,
    rank: 'Rank #17 in India',
    districtsText: '7 Districts',
    shareText: '0.34% of National Large Dams',
    accentColor: 'violet',
    badgeClass: 'bg-violet-500 text-slate-950',
    activeBgClass: 'bg-violet-950/60',
    activeBorderClass: 'border-violet-400',
    borderClass: 'border-violet-800/60',
    bgGradient: 'from-slate-900 via-violet-950/20 to-slate-900',
    authority: 'CWC, Indus Basin Authority, NHPC & JKSPDC',
    getData: getJammuKashmir18Dams,
    getStats: getJammuKashmirSummaryStats,
    quotas: JAMMU_KASHMIR_DISTRICT_QUOTAS
  },
  'Punjab': {
    name: 'Punjab',
    shortCode: 'PB',
    count: 16,
    rank: 'Rank #18 in India',
    districtsText: '6 Districts',
    shareText: '0.3% of National Large Dams',
    accentColor: 'orange',
    badgeClass: 'bg-orange-500 text-slate-950',
    activeBgClass: 'bg-orange-950/60',
    activeBorderClass: 'border-orange-400',
    borderClass: 'border-orange-800/60',
    bgGradient: 'from-slate-900 via-orange-950/20 to-slate-900',
    authority: 'CWC, Bhakra Beas Management Board (BBMB) & Punjab WRD',
    getData: getPunjab16Dams,
    getStats: getPunjabSummaryStats,
    quotas: PUNJAB_DISTRICT_QUOTAS
  },
  'Chhattisgarh': {
    name: 'Chhattisgarh',
    shortCode: 'CG',
    count: 28,
    rank: 'Rank #19 in India',
    districtsText: '11 Districts',
    shareText: '0.53% of National Large Dams',
    accentColor: 'lime',
    badgeClass: 'bg-lime-500 text-slate-950',
    activeBgClass: 'bg-lime-950/60',
    activeBorderClass: 'border-lime-400',
    borderClass: 'border-lime-800/60',
    bgGradient: 'from-slate-900 via-lime-950/20 to-slate-900',
    authority: 'CWC & Chhattisgarh Water Resources Department (CGWRD)',
    getData: getChhattisgarh28Dams,
    getStats: getChhattisgarhSummaryStats,
    quotas: CHHATTISGARH_DISTRICT_QUOTAS
  },
  'Assam and North East': {
    name: 'Assam and North East',
    shortCode: 'NE',
    count: 16,
    rank: 'North East Region',
    districtsText: '10 Districts',
    shareText: '0.3% of National Large Dams',
    accentColor: 'purple',
    badgeClass: 'bg-purple-500 text-slate-950',
    activeBgClass: 'bg-purple-950/60',
    activeBorderClass: 'border-purple-400',
    borderClass: 'border-purple-800/60',
    bgGradient: 'from-slate-900 via-purple-950/20 to-slate-900',
    authority: 'CWC, Brahmaputra Board, NEEPCO, NHPC & State WRDs',
    getData: getAssamNE16Dams,
    getStats: getAssamNESummaryStats,
    quotas: ASSAM_NE_DISTRICT_QUOTAS
  }
};

export const StateDamsExplorer: React.FC<StateDamsExplorerProps> = ({
  initialState = 'Maharashtra',
  activeState: controlledState,
  onStateChange,
  onSelectDam,
  onTriggerSos,
}) => {
  const [internalState, setInternalState] = useState<SupportedMajorState>(initialState);
  const currentState = controlledState || internalState;

  const handleSwitchState = (st: SupportedMajorState) => {
    setInternalState(st);
    if (onStateChange) {
      onStateChange(st);
    }
    // Reset filters
    setSelectedDistrict('all');
    setSelectedRegion('all');
    setSelectedBasin('all');
    setConditionFilter('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const currentConfig = STATE_CONFIGS[currentState];

  // Retrieve current state dataset and stats
  const allStateDams = useMemo(() => {
    return currentConfig.getData();
  }, [currentConfig]);

  const stats = useMemo(() => {
    return currentConfig.getStats();
  }, [currentConfig]);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedBasin, setSelectedBasin] = useState<string>('all');
  const [conditionFilter, setConditionFilter] = useState<DamCondition | 'all'>('all');
  const [sortBy, setSortBy] = useState<'capacity' | 'height' | 'fill' | 'condition' | 'name'>('capacity');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [showDistrictBreakdown, setShowDistrictBreakdown] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  // Filter and sort the dams
  const filteredDams = useMemo(() => {
    let list = allStateDams;

    if (selectedDistrict !== 'all') {
      list = list.filter(d => d.district === selectedDistrict);
    }

    if (selectedBasin !== 'all') {
      list = list.filter(d => d.basin.toLowerCase().includes(selectedBasin.toLowerCase()));
    }

    if (conditionFilter !== 'all') {
      list = list.filter(d => d.condition === conditionFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(d => 
        d.name.toLowerCase().includes(q) ||
        d.river.toLowerCase().includes(q) ||
        d.district.toLowerCase().includes(q) ||
        d.basin.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q)
      );
    }

    // Sorting
    return [...list].sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'capacity') {
        comparison = a.grossStorageCapacityLiters - b.grossStorageCapacityLiters;
      } else if (sortBy === 'height') {
        comparison = a.heightMeters - b.heightMeters;
      } else if (sortBy === 'fill') {
        const fillA = a.currentWaterVolumeLiters / a.grossStorageCapacityLiters;
        const fillB = b.currentWaterVolumeLiters / b.grossStorageCapacityLiters;
        comparison = fillA - fillB;
      } else if (sortBy === 'condition') {
        const rank = { critical: 4, alert: 3, moderate: 2, good: 1 };
        comparison = rank[a.condition] - rank[b.condition];
      } else if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      }
      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [allStateDams, selectedDistrict, selectedBasin, conditionFilter, searchQuery, sortBy, sortDirection]);

  // Reset to page 1 on filter changes
  const totalPages = Math.ceil(filteredDams.length / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedDams = useMemo(() => {
    const start = (safeCurrentPage - 1) * itemsPerPage;
    return filteredDams.slice(start, start + itemsPerPage);
  }, [filteredDams, safeCurrentPage, itemsPerPage]);

  // Format Liters
  const formatLiters = (liters: number) => {
    if (liters >= 1000000000000) {
      return `${(liters / 1000000000000).toFixed(2)} Trillion L`;
    }
    if (liters >= 1000000000) {
      return `${(liters / 1000000000).toFixed(1)} Billion L`;
    }
    return `${(liters / 1000000).toFixed(0)}M L`;
  };

  // Export Dams to CSV
  const handleExportCsv = () => {
    const headers = [
      'NRLD Dam ID',
      'Dam Name',
      'State',
      'District',
      'River',
      'Basin',
      'Year Completed',
      'Dam Type',
      'Height (m)',
      'Crest Length (m)',
      'FRL (m MSL)',
      'Overflow Crest (m MSL)',
      'Current Level (m MSL)',
      'Gross Storage Capacity (Liters)',
      'Current Storage Volume (Liters)',
      'Condition Classification',
      'Piping Seepage Flow (L/s)',
      'Turbidity (NTU)',
      'Whirlpool Vortex Type',
      'Piezometer Head (m)',
      'Inclinometer Displacement (mm)',
      'Seismograph PGA (g)',
      'Inspecting Authority'
    ];

    const rows = filteredDams.map(d => [
      `"${d.id}"`,
      `"${d.name}"`,
      `"${d.state}"`,
      `"${d.district}"`,
      `"${d.river}"`,
      `"${d.basin}"`,
      d.yearCompleted,
      `"${d.damType}"`,
      d.heightMeters,
      d.crestLengthMeters,
      d.fullReservoirLevelMeters,
      d.crestLevelMeters,
      d.currentWaterLevelMeters,
      d.grossStorageCapacityLiters,
      d.currentWaterVolumeLiters,
      `"${d.condition.toUpperCase()}"`,
      d.seepageRecords[0]?.flowRateLps || 0,
      d.seepageRecords[0]?.turbidityNtu || 0,
      `"${d.whirlpoolRecords[0]?.vortexType || 'None'}"`,
      d.sensors.piezometer.currentHeadMeters,
      d.sensors.inclinometer.currentDisplacementMm,
      d.sensors.seismograph.peakGroundAccelerationG,
      `"${d.inspectingOfficer}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    const sanitizedState = currentState.replace(/\s+/g, '_');
    link.setAttribute('download', `${sanitizedState}_${allStateDams.length}_Dams_Official_Register_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Distinct basins in active state
  const distinctBasins = useMemo(() => {
    return Object.keys(stats.basins).sort();
  }, [stats]);

  // Distinct districts in active state
  const distinctDistricts = useMemo(() => {
    const set = new Set<string>();
    currentConfig.quotas.forEach(q => set.add(q.district));
    return Array.from(set).sort();
  }, [currentConfig]);

  return (
    <div className="space-y-6">
      
      {/* State Selector Tabs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 sm:p-3 shadow-xl">
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
              State-Wise Dam Inventory Explorer
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Explore complete verified registries with hydrodynamic modeling
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-2">
          {Object.entries(STATE_CONFIGS).map(([stKey, cfg]) => {
            const isSelected = currentState === stKey;
            return (
              <button
                key={stKey}
                id={`tab-state-${cfg.shortCode.toLowerCase()}`}
                onClick={() => handleSwitchState(stKey as SupportedMajorState)}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? `${cfg.activeBgClass} ${cfg.activeBorderClass} shadow-lg text-white ring-1 ring-${cfg.accentColor}-400`
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-semibold text-slate-400 truncate">{cfg.rank.replace(' in India', '')}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                    isSelected ? cfg.badgeClass : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cfg.shortCode}
                  </span>
                </div>
                <div className="mt-1">
                  <div className="text-xs sm:text-sm font-black truncate">{cfg.name}</div>
                  <div className="text-xs font-mono font-bold text-slate-200">{cfg.count.toLocaleString()} Dams</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Banner: Official Active State Inventory */}
      <div className={`bg-gradient-to-br ${currentConfig.bgGradient} border ${currentConfig.borderClass} rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${currentConfig.badgeClass} uppercase tracking-wider`}>
                State of {currentState} &bull; Official Inventory
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
                {currentConfig.rank} ({currentConfig.shareText})
              </span>
              <span className="text-xs text-slate-400">
                {currentConfig.authority}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-tight mt-1.5 flex items-center gap-2">
              <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400 shrink-0" />
              <span>All {allStateDams.length.toLocaleString()} Dams of {currentState} Register</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              Complete engineering and telemetry registry for all {allStateDams.length.toLocaleString()} large dams across all {stats.districtsCount} districts of {currentState}.
              Inspect muddy seepage flushes, whirlpool formations, piezometers, inclinometers, seismographs, rainfall,
              and run real-time 2D hydrodynamic dam break simulations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCsv}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 shadow-md transition cursor-pointer"
              title={`Download all ${allStateDams.length} ${currentState} dams to CSV spreadsheet`}
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Export {allStateDams.length} Dams (CSV)</span>
            </button>
            <button
              onClick={() => setShowDistrictBreakdown(!showDistrictBreakdown)}
              className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-cyan-950 transition cursor-pointer"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{showDistrictBreakdown ? 'Hide District Quotas' : `View All ${stats.districtsCount} Districts`}</span>
            </button>
          </div>
        </div>

        {/* State Summary KPI Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 border-t border-slate-800/80 text-xs">
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Total Large Dams</span>
            <span className="text-lg font-black text-white">{allStateDams.length.toLocaleString()}</span>
            <span className="text-[10px] text-cyan-400 block">100% Geo-Cataloged</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Total Gross Storage</span>
            <span className="text-lg font-black text-white">{formatLiters(stats.totalStorageLiters)}</span>
            <span className="text-[10px] text-blue-400 block">Active Live Capacity</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Good Condition</span>
            <span className="text-lg font-black text-emerald-400">{stats.goodDams.toLocaleString()}</span>
            <span className="text-[10px] text-emerald-500 block">Normal Telemetry</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Moderate Watch</span>
            <span className="text-lg font-black text-amber-400">{stats.moderateDams.toLocaleString()}</span>
            <span className="text-[10px] text-amber-500 block">Periodic Maintenance</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Alert Status</span>
            <span className="text-lg font-black text-orange-400">{stats.alertDams.toLocaleString()}</span>
            <span className="text-[10px] text-orange-500 block">Surveillance High</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-slate-400 block text-[11px]">Critical Directive</span>
            <span className="text-lg font-black text-red-400">{stats.criticalDams.toLocaleString()}</span>
            <span className="text-[10px] text-red-500 block">Piping / Cavitation Alert</span>
          </div>
        </div>
      </div>

      {/* Collapsible District Quotas Breakdown */}
      {showDistrictBreakdown && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">
                {currentState} District-Wise Dam Inventory ({stats.districtsCount} Districts)
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Click any district to filter the dams list below
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            {currentConfig.quotas.map((q) => {
              const isSelected = selectedDistrict === q.district;
              return (
                <button
                  key={q.district}
                  onClick={() => {
                    setSelectedDistrict(isSelected ? 'all' : q.district);
                    setCurrentPage(1);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-950 font-bold'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate">{q.district}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                      isSelected ? 'bg-slate-950 text-cyan-300 font-bold' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {q.quota}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {q.region}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter and Control Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${allStateDams.length} ${currentState} dams by name, river, district, basin or ID...`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* District Dropdown Filter */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All {stats.districtsCount} Districts</option>
              {distinctDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>

            {/* Basin Dropdown Filter */}
            <select
              value={selectedBasin}
              onChange={(e) => {
                setSelectedBasin(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All River Basins</option>
              {distinctBasins.map((b) => (
                <option key={b} value={b}>
                  {b} ({stats.basins[b]} dams)
                </option>
              ))}
            </select>

            {/* View Mode Toggle: Grid vs Table */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid Card View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'table' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
                title="Dense Data Table View"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Condition Filter & Sort Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/60 text-xs">
          {/* Condition Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 mr-1">Condition:</span>
            {(['all', 'good', 'moderate', 'alert', 'critical'] as const).map((c) => (
              <button
                key={c}
                onClick={() => {
                  setConditionFilter(c);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 rounded-lg font-bold capitalize transition cursor-pointer ${
                  conditionFilter === c
                    ? c === 'good' ? 'bg-emerald-500 text-slate-950'
                      : c === 'moderate' ? 'bg-amber-500 text-slate-950'
                      : c === 'alert' ? 'bg-orange-500 text-slate-950'
                      : c === 'critical' ? 'bg-red-500 text-white'
                      : 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c === 'all' ? `All (${allStateDams.length})` : c}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-2.5 py-1 text-xs font-medium focus:outline-none focus:border-cyan-400"
            >
              <option value="capacity">Storage Capacity (Liters)</option>
              <option value="fill">Fill % (Live Volume)</option>
              <option value="height">Structural Height (m)</option>
              <option value="condition">Hazard / Safety Risk</option>
              <option value="name">Dam Name (A-Z)</option>
            </select>

            <button
              onClick={() => setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
              title={sortDirection === 'desc' ? 'Descending' : 'Ascending'}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count & Active Filters Summary */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Showing <span className="font-bold text-white">{filteredDams.length.toLocaleString()}</span> of {allStateDams.length.toLocaleString()} dams in {currentState}
          {selectedDistrict !== 'all' && ` &bull; District: ${selectedDistrict}`}
          {selectedBasin !== 'all' && ` &bull; Basin: ${selectedBasin}`}
          {conditionFilter !== 'all' && ` &bull; Condition: ${conditionFilter.toUpperCase()}`}
          {searchQuery && ` &bull; Search: "${searchQuery}"`}
        </div>

        <div className="flex items-center gap-2">
          <span>Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-slate-900 border border-slate-800 text-slate-200 rounded px-2 py-0.5 text-xs font-mono"
          >
            <option value={24}>24</option>
            <option value={48}>48</option>
            <option value={96}>96</option>
            <option value={192}>192</option>
          </select>
        </div>
      </div>

      {/* VIEW MODE 1: GRID VIEW */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginatedDams.map((dam) => {
            const fillPercentage = Math.min(100, Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100));
            const primarySeepage = dam.seepageRecords[0];
            const primaryWhirlpool = dam.whirlpoolRecords[0];

            return (
              <div
                key={dam.id}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 flex flex-col justify-between transition group shadow-lg hover:shadow-cyan-950/30"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-semibold text-slate-300">{dam.district}</span>
                        <span>&bull;</span>
                        <span className="font-mono text-[10px] text-slate-400">{dam.id}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-1 mt-0.5">
                        {dam.name}
                      </h4>
                    </div>

                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 ${
                      dam.condition === 'good' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : dam.condition === 'moderate' ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : dam.condition === 'alert' ? 'bg-orange-950 text-orange-300 border border-orange-800'
                        : 'bg-red-950 text-red-300 border border-red-800 animate-pulse'
                    }`}>
                      {dam.condition}
                    </span>
                  </div>

                  {/* River & Basin */}
                  <div className="text-xs text-slate-300 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">River:</span>
                      <span className="font-semibold text-white truncate max-w-[150px]">{dam.river}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Basin:</span>
                      <span className="text-slate-300 truncate max-w-[150px]">{dam.basin}</span>
                    </div>
                  </div>

                  {/* Water Capacity & Overflow Gauge */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-blue-400" />
                        Storage:
                      </span>
                      <span className="font-mono font-bold text-white">
                        {formatLiters(dam.currentWaterVolumeLiters)}
                        <span className="text-slate-400 font-normal"> / {formatLiters(dam.grossStorageCapacityLiters)}</span>
                      </span>
                    </div>

                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          fillPercentage > 90 ? 'bg-red-500' : fillPercentage > 75 ? 'bg-amber-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${fillPercentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>Fill: {fillPercentage}%</span>
                      <span>H: {dam.heightMeters}m | L: {dam.crestLengthMeters}m</span>
                    </div>
                  </div>

                  {/* Telemetry Micro Status */}
                  <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-1.5 text-[11px]">
                    <div className="bg-slate-950/50 p-1.5 rounded-lg border border-slate-800/60">
                      <span className="text-slate-400 block text-[10px]">Muddy Seepage:</span>
                      <span className={`font-semibold ${primarySeepage?.isMuddyOrDiscolored ? 'text-red-400' : 'text-emerald-400'}`}>
                        {primarySeepage?.isMuddyOrDiscolored ? `${primarySeepage.flowRateLps} L/s (Muddy)` : `${primarySeepage?.flowRateLps || 0} L/s (Clear)`}
                      </span>
                    </div>

                    <div className="bg-slate-950/50 p-1.5 rounded-lg border border-slate-800/60">
                      <span className="text-slate-400 block text-[10px]">Whirlpool Vortex:</span>
                      <span className={`font-semibold truncate block ${primaryWhirlpool?.vortexType.includes('Type 5') ? 'text-red-400' : 'text-slate-300'}`}>
                        {primaryWhirlpool?.vortexType || 'None'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-3 mt-3 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDam(dam)}
                    className="flex-1 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-1 transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Dam</span>
                  </button>
                  <button
                    onClick={() => onTriggerSos(dam)}
                    className="p-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/40 text-xs transition cursor-pointer"
                    title="Broadcast SOS Emergency Alert for this dam"
                  >
                    <Radio className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* VIEW MODE 2: DENSE DATA TABLE VIEW */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-3">ID & Dam Name</th>
                  <th className="py-3 px-3">District</th>
                  <th className="py-3 px-3">River & Basin</th>
                  <th className="py-3 px-3">Height / Length</th>
                  <th className="py-3 px-3">Capacity (Liters)</th>
                  <th className="py-3 px-3">Fill %</th>
                  <th className="py-3 px-3">Muddy Seepage</th>
                  <th className="py-3 px-3">Whirlpool</th>
                  <th className="py-3 px-3">Condition</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {paginatedDams.map((dam) => {
                  const fillPercentage = Math.min(100, Math.round((dam.currentWaterVolumeLiters / dam.grossStorageCapacityLiters) * 100));
                  const seepage = dam.seepageRecords[0];
                  const whirlpool = dam.whirlpoolRecords[0];

                  return (
                    <tr key={dam.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-2.5 px-3">
                        <div className="font-bold text-white font-sans truncate max-w-[200px]">{dam.name}</div>
                        <div className="text-[10px] text-slate-400">{dam.id} &bull; {dam.yearCompleted}</div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-200 font-sans">{dam.district}</td>
                      <td className="py-2.5 px-3 font-sans">
                        <div className="text-white truncate max-w-[140px]">{dam.river}</div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[140px]">{dam.basin}</div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-300">
                        {dam.heightMeters}m / {dam.crestLengthMeters}m
                      </td>
                      <td className="py-2.5 px-3 text-white font-bold">
                        {formatLiters(dam.grossStorageCapacityLiters)}
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-12 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                fillPercentage > 90 ? 'bg-red-500' : fillPercentage > 75 ? 'bg-amber-500' : 'bg-blue-500'
                              }`}
                              style={{ width: `${fillPercentage}%` }}
                            />
                          </div>
                          <span className="text-[10px]">{fillPercentage}%</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={seepage?.isMuddyOrDiscolored ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                          {seepage?.flowRateLps} L/s {seepage?.isMuddyOrDiscolored ? '(Muddy)' : ''}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 truncate max-w-[120px] font-sans">
                        {whirlpool?.vortexType || 'None'}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                          dam.condition === 'good' ? 'bg-emerald-950 text-emerald-300'
                            : dam.condition === 'moderate' ? 'bg-amber-950 text-amber-300'
                            : dam.condition === 'alert' ? 'bg-orange-950 text-orange-300'
                            : 'bg-red-950 text-red-300 animate-pulse'
                        }`}>
                          {dam.condition}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-sans">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onSelectDam(dam)}
                            className="px-2 py-1 rounded bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-slate-950 text-xs font-semibold transition"
                          >
                            Inspect
                          </button>
                          <button
                            onClick={() => onTriggerSos(dam)}
                            className="p-1 rounded bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white transition"
                            title="Trigger SOS"
                          >
                            <Radio className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs">
        <div className="text-slate-400">
          Showing <span className="text-white font-bold">{Math.min(filteredDams.length, (safeCurrentPage - 1) * itemsPerPage + 1)}</span> to{' '}
          <span className="text-white font-bold">{Math.min(filteredDams.length, safeCurrentPage * itemsPerPage)}</span> of{' '}
          <span className="text-cyan-400 font-bold">{filteredDams.length.toLocaleString()}</span> filtered {currentState} dams
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={safeCurrentPage === 1}
            className="px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safeCurrentPage === 1}
            className="p-1.5 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-mono font-bold">
            Page {safeCurrentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safeCurrentPage >= totalPages}
            className="p-1.5 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={safeCurrentPage >= totalPages}
            className="px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Last
          </button>
        </div>
      </div>

    </div>
  );
};
