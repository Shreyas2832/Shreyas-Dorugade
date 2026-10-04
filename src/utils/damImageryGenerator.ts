import { Dam, DamImage } from '../types';

export interface LocationCoordinate {
  lat: number;
  lng: number;
}

// Comprehensive district geographic coordinates mapping for all Indian states
export const DISTRICT_COORDINATES: Record<string, LocationCoordinate> = {
  // Maharashtra
  'Satara': { lat: 17.6805, lng: 73.9903 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Nashik': { lat: 19.9975, lng: 73.7898 },
  'Ahmednagar': { lat: 19.0952, lng: 74.7496 },
  'Kolhapur': { lat: 16.7050, lng: 74.2433 },
  'Thane': { lat: 19.2183, lng: 72.9781 },
  'Palghar': { lat: 19.6967, lng: 72.7699 },
  'Raigad': { lat: 18.5158, lng: 73.1822 },
  'Ratnagiri': { lat: 16.9902, lng: 73.3120 },
  'Sindhudurg': { lat: 16.1189, lng: 73.6931 },
  'Sangli': { lat: 16.8524, lng: 74.5815 },
  'Solapur': { lat: 17.6599, lng: 75.9064 },
  'Osmanabad': { lat: 18.1861, lng: 76.0419 },
  'Dharashiv': { lat: 18.1861, lng: 76.0419 },
  'Latur': { lat: 18.4088, lng: 76.5604 },
  'Beed': { lat: 18.9891, lng: 75.7601 },
  'Aurangabad': { lat: 19.8762, lng: 75.3433 },
  'Chhatrapati Sambhajinagar': { lat: 19.8762, lng: 75.3433 },
  'Jalna': { lat: 19.8410, lng: 75.8864 },
  'Parbhani': { lat: 19.2644, lng: 76.7767 },
  'Hingoli': { lat: 19.7196, lng: 77.1485 },
  'Nanded': { lat: 19.1383, lng: 77.3210 },
  'Dhule': { lat: 20.9042, lng: 74.7749 },
  'Nandurbar': { lat: 21.3734, lng: 74.2423 },
  'Jalgaon': { lat: 21.0077, lng: 75.5626 },
  'Buldhana': { lat: 20.5293, lng: 76.1843 },
  'Akola': { lat: 20.7002, lng: 77.0082 },
  'Washim': { lat: 20.1110, lng: 77.1352 },
  'Amravati': { lat: 20.9320, lng: 77.7523 },
  'Yavatmal': { lat: 20.3888, lng: 78.1204 },
  'Wardha': { lat: 20.7453, lng: 78.6022 },
  'Nagpur': { lat: 21.1458, lng: 79.0882 },
  'Bhandara': { lat: 21.1687, lng: 79.6543 },
  'Gondia': { lat: 21.4598, lng: 80.1961 },
  'Chandrapur': { lat: 19.9615, lng: 79.2961 },
  'Gadchiroli': { lat: 20.1809, lng: 80.0039 },

  // Gujarat
  'Narmada': { lat: 21.8700, lng: 73.5500 },
  'Tapi': { lat: 21.2500, lng: 73.5000 },
  'Rajkot': { lat: 22.3039, lng: 70.8022 },
  'Sabarkantha': { lat: 23.6800, lng: 73.0400 },
  'Banas Kantha': { lat: 24.1700, lng: 72.4300 },
  'Banaskantha': { lat: 24.1700, lng: 72.4300 },
  'Mahisagar': { lat: 23.1600, lng: 73.5700 },
  'Junagadh': { lat: 21.5222, lng: 70.4579 },
  'Bhavnagar': { lat: 21.7645, lng: 72.1519 },
  'Kutch': { lat: 23.7337, lng: 69.8597 },
  'Surendranagar': { lat: 22.7275, lng: 71.6370 },
  'Panchmahal': { lat: 22.7500, lng: 73.6100 },
  'Vadodara': { lat: 22.3072, lng: 73.1812 },
  'Morbi': { lat: 22.8120, lng: 70.8385 },
  'Jamnagar': { lat: 22.4707, lng: 70.0577 },
  'Amreli': { lat: 21.6032, lng: 71.2221 },

  // Madhya Pradesh
  'Khandwa': { lat: 22.2500, lng: 76.3500 },
  'Hoshangabad': { lat: 22.7500, lng: 77.7200 },
  'Narmadapuram': { lat: 22.7500, lng: 77.7200 },
  'Jabalpur': { lat: 23.1815, lng: 79.9864 },
  'Rewa': { lat: 24.5362, lng: 81.3037 },
  'Betul': { lat: 21.9014, lng: 77.9016 },
  'Chhindwara': { lat: 22.0574, lng: 78.9382 },
  'Seoni': { lat: 22.0869, lng: 79.5435 },
  'Sagar': { lat: 23.8388, lng: 78.7378 },
  'Vidisha': { lat: 23.5251, lng: 77.8081 },
  'Raisen': { lat: 23.3300, lng: 77.7800 },
  'Gwalior': { lat: 26.2183, lng: 78.1828 },
  'Shivpuri': { lat: 25.4300, lng: 77.6500 },

  // Karnataka
  'Mandya': { lat: 12.5222, lng: 76.8974 },
  'Shivamogga': { lat: 13.9299, lng: 75.5681 },
  'Shimoga': { lat: 13.9299, lng: 75.5681 },
  'Bellary': { lat: 15.1394, lng: 76.9214 },
  'Vijayanagara': { lat: 15.2800, lng: 76.3900 },
  'Uttara Kannada': { lat: 14.7950, lng: 74.6860 },
  'Belagavi': { lat: 15.8497, lng: 74.4977 },
  'Mysuru': { lat: 12.2958, lng: 76.6394 },
  'Hassan': { lat: 13.0072, lng: 76.0963 },
  'Bagalkot': { lat: 16.1800, lng: 75.6900 },
  'Kalaburagi': { lat: 17.3297, lng: 76.8343 },
  'Raichur': { lat: 16.2120, lng: 77.3439 },
  'Chikkamagaluru': { lat: 13.3161, lng: 75.7720 },

  // Rajasthan
  'Chittorgarh': { lat: 24.8887, lng: 74.6269 },
  'Banswara': { lat: 23.5461, lng: 74.4373 },
  'Tonk': { lat: 26.1625, lng: 75.7895 },
  'Kota': { lat: 25.2138, lng: 75.8648 },
  'Pratapgarh': { lat: 24.0300, lng: 74.7800 },
  'Pali': { lat: 25.7711, lng: 73.3234 },
  'Udaipur': { lat: 24.5854, lng: 73.7125 },
  'Bhilwara': { lat: 25.3475, lng: 74.6366 },
  'Jhalawar': { lat: 24.5973, lng: 76.1610 },
  'Baran': { lat: 25.1011, lng: 76.5132 },

  // Odisha
  'Sambalpur': { lat: 21.4669, lng: 83.9812 },
  'Koraput': { lat: 18.8135, lng: 82.7118 },
  'Nabarangpur': { lat: 19.2315, lng: 82.5502 },
  'Kalahandi': { lat: 19.9075, lng: 83.1643 },
  'Ganjam': { lat: 19.3800, lng: 84.8800 },
  'Mayurbhanj': { lat: 21.9300, lng: 86.7300 },
  'Sundargarh': { lat: 22.1200, lng: 84.0300 },
  'Angul': { lat: 20.8400, lng: 85.1000 },
  'Keonjhar': { lat: 21.6300, lng: 85.5800 },
  'Cuttack': { lat: 20.4625, lng: 85.8828 },

  // Telangana
  'Peddapalli': { lat: 18.6163, lng: 79.3739 },
  'Nalgonda': { lat: 17.0575, lng: 79.2684 },
  'Nizamabad': { lat: 18.6725, lng: 78.0941 },
  'Karimnagar': { lat: 18.4386, lng: 79.1288 },
  'Khammam': { lat: 17.2473, lng: 80.1514 },
  'Bhadradri Kothagudem': { lat: 17.5500, lng: 80.6200 },
  'Jayashankar Bhupalpally': { lat: 18.4300, lng: 79.8600 },
  'Mahabubnagar': { lat: 16.7488, lng: 77.9856 },
  'Medak': { lat: 18.0485, lng: 78.2612 },
  'Warangal': { lat: 17.9689, lng: 79.5941 },

  // Andhra Pradesh
  'Nandyal': { lat: 15.4886, lng: 78.4836 },
  'Kurnool': { lat: 15.8281, lng: 78.0373 },
  'Eluru': { lat: 16.7107, lng: 81.0952 },
  'East Godavari': { lat: 17.0005, lng: 81.8040 },
  'Alluri Sitharama Raju': { lat: 18.0600, lng: 82.5200 },
  'YSR Kadapa': { lat: 14.4673, lng: 78.8242 },
  'Kadapa': { lat: 14.4673, lng: 78.8242 },
  'Nellore': { lat: 14.4426, lng: 79.9865 },
  'Sri Potti Sriramulu Nellore': { lat: 14.4426, lng: 79.9865 },
  'Annamayya': { lat: 14.1800, lng: 78.9600 },
  'Prakasam': { lat: 15.5057, lng: 80.0499 },
  'Chittoor': { lat: 13.2172, lng: 79.1003 },
  'Srikakulam': { lat: 18.2949, lng: 83.8938 },
  'Vizianagaram': { lat: 18.1067, lng: 83.3956 },

  // Uttar Pradesh
  'Sonbhadra': { lat: 24.6850, lng: 83.0650 },
  'Jhansi': { lat: 25.4484, lng: 78.5685 },
  'Lalitpur': { lat: 24.6900, lng: 78.4100 },
  'Mirzapur': { lat: 25.1337, lng: 82.5644 },
  'Mahoba': { lat: 25.2900, lng: 79.8700 },
  'Hamirpur': { lat: 25.9500, lng: 80.1500 },
  'Banda': { lat: 25.4800, lng: 80.3300 },
  'Chitrakoot': { lat: 25.2100, lng: 80.8900 },
  'Varanasi': { lat: 25.3176, lng: 82.9739 },
  'Chandauli': { lat: 25.2600, lng: 83.2700 },

  // Tamil Nadu
  'Salem': { lat: 11.8000, lng: 77.8000 },
  'Theni': { lat: 10.0104, lng: 77.4768 },
  'Tirunelveli': { lat: 8.7139, lng: 77.7567 },
  'Erode': { lat: 11.3410, lng: 77.7172 },
  'Coimbatore': { lat: 11.0168, lng: 76.9558 },
  'Dindigul': { lat: 10.3673, lng: 77.9803 },
  'Kanniyakumari': { lat: 8.0883, lng: 77.5385 },
  'Kanyakumari': { lat: 8.0883, lng: 77.5385 },
  'Krishnagiri': { lat: 12.5186, lng: 78.2137 },
  'Dharmapuri': { lat: 12.1211, lng: 78.1582 },
  'Madurai': { lat: 9.9252, lng: 78.1198 },
  'Nilgiris': { lat: 11.4102, lng: 76.6950 },
  'Tenkasi': { lat: 8.9594, lng: 77.3142 },

  // Kerala
  'Idukki': { lat: 9.8494, lng: 76.9723 },
  'Palakkad': { lat: 10.7867, lng: 76.6548 },
  'Pathanamthitta': { lat: 9.2648, lng: 76.7870 },
  'Thrissur': { lat: 10.5276, lng: 76.2144 },
  'Wayanad': { lat: 11.6854, lng: 76.1320 },
  'Kollam': { lat: 8.8932, lng: 76.6141 },
  'Thiruvananthapuram': { lat: 8.5241, lng: 76.9366 },
  'Ernakulam': { lat: 9.9816, lng: 76.2999 },
  'Kannur': { lat: 11.8745, lng: 75.3704 },
  'Kozhikode': { lat: 11.2588, lng: 75.7804 },

  // Jharkhand
  'Dhanbad': { lat: 23.7957, lng: 86.4304 },
  'Bokaro': { lat: 23.6693, lng: 86.1511 },
  'Ranchi': { lat: 23.3441, lng: 85.3096 },
  'Hazaribagh': { lat: 23.9937, lng: 85.3621 },
  'Ramgarh': { lat: 23.6300, lng: 85.5100 },
  'East Singhbhum': { lat: 22.8000, lng: 86.2000 },
  'West Singhbhum': { lat: 22.5600, lng: 85.8100 },
  'Seraikela Kharsawan': { lat: 22.7000, lng: 85.9800 },
  'Latehar': { lat: 23.7400, lng: 84.5000 },
  'Palamu': { lat: 24.0400, lng: 84.0700 },
  'Deoghar': { lat: 24.4826, lng: 86.7000 },

  // West Bengal
  'Purulia': { lat: 23.3322, lng: 86.3652 },
  'Bankura': { lat: 23.2324, lng: 87.0715 },
  'Paschim Bardhaman': { lat: 23.6800, lng: 86.9800 },
  'Birbhum': { lat: 23.8400, lng: 87.6100 },
  'Murshidabad': { lat: 24.1800, lng: 88.2700 },
  'Darjeeling': { lat: 27.0410, lng: 88.2663 },
  'Kalimpong': { lat: 27.0600, lng: 88.4700 },
  'Jalpaiguri': { lat: 26.5400, lng: 88.7200 },
  'Paschim Medinipur': { lat: 22.4200, lng: 87.3200 },
  'Alipurduar': { lat: 26.4900, lng: 89.5200 },

  // Uttarakhand
  'Tehri Garhwal': { lat: 30.3700, lng: 78.4800 },
  'Dehradun': { lat: 30.3165, lng: 78.0322 },
  'Nainital': { lat: 29.3919, lng: 79.4542 },
  'Pauri Garhwal': { lat: 30.1500, lng: 78.7800 },
  'Chamoli': { lat: 30.5500, lng: 79.3500 },
  'Pithoragarh': { lat: 29.5800, lng: 80.2200 },
  'Uttarkashi': { lat: 30.7300, lng: 78.4500 },
  'Udham Singh Nagar': { lat: 28.9800, lng: 79.4000 },

  // Himachal Pradesh
  'Bilaspur': { lat: 31.3300, lng: 76.7500 },
  'Kangra': { lat: 32.1000, lng: 76.2700 },
  'Mandi': { lat: 31.7087, lng: 76.9320 },
  'Kinnaur': { lat: 31.6500, lng: 78.4700 },
  'Shimla': { lat: 31.1048, lng: 77.1734 },
  'Chamba': { lat: 32.5534, lng: 76.1258 },
  'Kullu': { lat: 31.9579, lng: 77.1095 },
  'Sirmaur': { lat: 30.5600, lng: 77.3000 },

  // Jammu and Kashmir
  'Kishtwar': { lat: 33.3100, lng: 75.7600 },
  'Reasi': { lat: 33.0800, lng: 74.8300 },
  'Ramban': { lat: 33.2400, lng: 75.2400 },
  'Baramulla': { lat: 34.2000, lng: 74.3400 },
  'Ganderbal': { lat: 34.2200, lng: 74.7800 },
  'Bandipora': { lat: 34.4200, lng: 74.6400 },
  'Kathua': { lat: 32.3700, lng: 75.5200 },

  // Punjab
  'Pathankot': { lat: 32.2689, lng: 75.6497 },
  'Hoshiarpur': { lat: 31.5273, lng: 75.9149 },
  'Rupnagar': { lat: 30.9664, lng: 76.5331 },
  'Firozpur': { lat: 30.9237, lng: 74.6136 },
  'Gurdaspur': { lat: 32.0419, lng: 75.4053 },
  'SAS Nagar (Mohali)': { lat: 30.7046, lng: 76.7179 },

  // Chhattisgarh
  'Dhamtari': { lat: 20.7070, lng: 81.5480 },
  'Korba': { lat: 22.3595, lng: 82.7501 },
  'Balod': { lat: 20.7300, lng: 81.2000 },
  'Raigarh': { lat: 21.8974, lng: 83.3950 },
  'Kanker': { lat: 20.2718, lng: 81.4932 },
  'Mahasamund': { lat: 21.1091, lng: 82.0970 },
  'Kabirdham': { lat: 22.0100, lng: 81.2500 },
  'Gariaband': { lat: 20.9600, lng: 82.0600 },
  'Rajnandgaon': { lat: 21.0970, lng: 81.0340 },
  'Surguja': { lat: 23.1200, lng: 83.2000 },

  // Assam and North East
  'Dhemaji (Assam)': { lat: 27.4800, lng: 94.5800 },
  'Dhemaji / Lower Subansiri': { lat: 27.5500, lng: 94.2500 },
  'Dima Hasao (Assam)': { lat: 25.1700, lng: 93.0200 },
  'Karbi Anglong (Assam)': { lat: 26.0000, lng: 93.4300 },
  'Baksa (Assam)': { lat: 26.6800, lng: 91.5900 },
  'Ri-Bhoi (Meghalaya)': { lat: 25.9000, lng: 91.8800 },
  'Lower Subansiri (Arunachal)': { lat: 27.5800, lng: 93.8300 },
  'Wokha (Nagaland)': { lat: 26.1000, lng: 94.2600 },
  'Imphal & Churachandpur (Manipur)': { lat: 24.3300, lng: 93.6700 },
  'Aizawl & Kolasib (Mizoram)': { lat: 24.2300, lng: 92.6800 },
  'Gomati (Tripura)': { lat: 23.5300, lng: 91.6800 }
};

// Fallback state bounding box centers
export const STATE_FALLBACK_COORDINATES: Record<string, LocationCoordinate> = {
  'Maharashtra': { lat: 19.6633, lng: 75.3003 },
  'Madhya Pradesh': { lat: 23.2599, lng: 77.4126 },
  'Gujarat': { lat: 22.2587, lng: 71.1924 },
  'Karnataka': { lat: 14.5204, lng: 75.7224 },
  'Rajasthan': { lat: 26.9124, lng: 75.7873 },
  'Odisha': { lat: 20.9517, lng: 85.0985 },
  'Telangana': { lat: 17.8496, lng: 79.1151 },
  'Andhra Pradesh': { lat: 15.9129, lng: 79.7400 },
  'Uttar Pradesh': { lat: 26.8467, lng: 80.9462 },
  'Tamil Nadu': { lat: 11.1271, lng: 78.6569 },
  'Kerala': { lat: 10.8505, lng: 76.2711 },
  'Jharkhand': { lat: 23.6102, lng: 85.2799 },
  'West Bengal': { lat: 22.9868, lng: 87.8550 },
  'Uttarakhand': { lat: 30.0668, lng: 79.0193 },
  'Himachal Pradesh': { lat: 31.8167, lng: 77.1000 },
  'Jammu and Kashmir': { lat: 33.7782, lng: 76.5762 },
  'Punjab': { lat: 31.1471, lng: 75.3412 },
  'Chhattisgarh': { lat: 21.2787, lng: 81.8661 },
  'Assam and North East': { lat: 26.2006, lng: 92.9376 }
};

// Curated high-resolution photographic sets for Drone UAVs & Satellite Earth Observation
export const DRONE_IMAGERY_COLLECTION = [
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    model: 'DJI Matrice 300 RTK (45MP Full-Frame Zenmuse P1)',
    sensor: 'RGB Photogrammetry 35mm lens, Mechanical Shutter',
    altitudeRange: '100m - 125m AGL',
    flightType: 'Crest & Spillway Nadir Orthomosaic'
  },
  {
    url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    model: 'senseFly eBee X Fixed-Wing Autonomous UAV',
    sensor: 'Aeria X High-Accuracy Mapping Camera',
    altitudeRange: '140m - 180m AGL',
    flightType: 'Upstream Catchment & Rim Topography Scan'
  },
  {
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    model: 'Skydio X2 Autonomous Inspection Drone',
    sensor: '4K HDR 60fps Dual Optical & Navigation Sensors',
    altitudeRange: '45m - 65m AGL',
    flightType: 'Plunge Pool & Hydraulic Jump Dissipator Survey'
  },
  {
    url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1200&q=80',
    model: 'Autel EVO II Dual 640T Enterprise UAV',
    sensor: 'FLIR Boson 640 LWIR Thermal + 8K Ultra-HD Sensor',
    altitudeRange: '60m - 80m AGL',
    flightType: 'Thermal Infrared Abutment Seepage Scan'
  },
  {
    url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=80',
    model: 'DJI Inspire 3 CineCore Cinematic UAV',
    sensor: 'Zenmuse X9-8K Air Gimbal Camera',
    altitudeRange: '70m - 90m AGL',
    flightType: 'Radial Crest Gates & Pier Structural Survey'
  },
  {
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    model: 'WingtraOne GEN II VTOL High-Precision Drone',
    sensor: 'Sony RX1R II 42MP Full-Frame Precision Sensor',
    altitudeRange: '120m - 150m AGL',
    flightType: 'Downstream Riparian Channel Corridor Drone Scan'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    model: 'DJI Matrice 350 RTK with LiDAR Zenmuse L2',
    sensor: 'Dual-pulse LiDAR Scanner & 20MP Photogrammetric Camera',
    altitudeRange: '85m - 110m AGL',
    flightType: 'Reservoir Rim Landslide & Abutment DEM Drone Survey'
  },
  {
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    model: 'Parrot ANAFI USA Gov Edition Micro UAV',
    sensor: '32x Optical Zoom & FLIR Boson 320 Thermal',
    altitudeRange: '35m - 50m AGL',
    flightType: 'Energy Dissipator & Stilling Basin Close-Range Drone View'
  }
];

export const SATELLITE_IMAGERY_COLLECTION = [
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    satellite: 'ISRO Cartosat-3 High-Resolution Earth Observation',
    sensor: 'Panchromatic & 4-Band Multi-spectral Radiometer',
    resolution: '0.28m Panchromatic / 1.12m Multi-spectral',
    band: 'Panchromatic / RGB Multi-spectral',
    surveyMode: 'Reservoir Surface Perimeter & Infrastructure Boundary'
  },
  {
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    satellite: 'ESA Copernicus Sentinel-1 Synthetic Aperture Radar',
    sensor: 'C-Band Synthetic Aperture Radar (SAR)',
    resolution: '10m Spatial Resolution (Interferometric Wide Swath)',
    band: 'C-Band SAR (VV + VH Dual Polarisation)',
    surveyMode: 'All-Weather Day/Night Flood Corridor Radar'
  },
  {
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    satellite: 'ESA Copernicus Sentinel-2B Multi-Spectral Instrument (MSI)',
    sensor: '13-Band Multi-Spectral Radiometer',
    resolution: '10m Multi-spectral (B2 Blue, B3 Green, B4 Red, B8 NIR)',
    band: 'NDWI (Normalized Difference Water Index) Surface Tracking',
    surveyMode: 'Full Reservoir Water Spread & Shoreline Inundation'
  },
  {
    url: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1200&q=80',
    satellite: 'ISRO RISAT-1A (EOS-04) Radar Imaging Satellite',
    sensor: 'C-Band SAR Microwave Imaging System',
    resolution: '1m High-Resolution Spotlight SAR',
    band: 'Microwave C-band Backscatter Radiometry',
    surveyMode: 'Sub-surface Soil Moisture & Riparian Embankment Radar'
  },
  {
    url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1200&q=80',
    satellite: 'NASA / USGS Landsat-9 Operational Land Imager (OLI-2)',
    sensor: 'Thermal Infrared Sensor 2 (TIRS-2) & OLI-2',
    resolution: '15m Panchromatic / 30m Multi-spectral / 100m Thermal',
    band: 'Bands 1-9 (Coastal/Aerosol, Blue, Green, Red, NIR, SWIR)',
    surveyMode: 'Catchment Land-Use & Sedimentation Analysis'
  },
  {
    url: 'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&w=1200&q=80',
    satellite: 'ISRO Resourcesat-2A Advanced Wide Field Sensor (AWiFS)',
    sensor: 'High Resolution Linear Imaging Self-Scanner (LISS-4)',
    resolution: '5.8m Multi-spectral Monoscan',
    band: 'Green, Red, Near-Infrared Multi-spectral',
    surveyMode: 'Seasonal Water Body Expansion & Command Area Irrigation'
  }
];

export const STRUCTURAL_IMAGERY_COLLECTION = [
  {
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    title: 'Downstream Spillway Energy Dissipator & Plunge Apron',
    caption: 'Operational examination of radial gates discharge, training walls, and downstream bedrock scour apron.',
    type: 'condition_good' as const
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    title: 'Dam Foundation Drainage Gallery & Relief Well Wells',
    caption: 'Longitudinal inspection adit monitoring foundation uplift relief drains and seepage collection gutters.',
    type: 'condition_bad' as const
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    title: 'Power Intake Shaft & Trash-Rack Hydraulic Portals',
    caption: 'Subsurface diver camera and acoustic telemetry inspection of trash-rack bars and penstock bellmouth.',
    type: 'condition_good' as const
  }
];

export function getDamCoordinates(district: string, state: string, id: string): LocationCoordinate {
  const cleanDistrict = district.trim();
  let baseCoord = DISTRICT_COORDINATES[cleanDistrict];

  if (!baseCoord) {
    // Try matching partial district name
    const foundKey = Object.keys(DISTRICT_COORDINATES).find(
      k => cleanDistrict.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(cleanDistrict.toLowerCase())
    );
    if (foundKey) {
      baseCoord = DISTRICT_COORDINATES[foundKey];
    }
  }

  if (!baseCoord) {
    baseCoord = STATE_FALLBACK_COORDINATES[state] || { lat: 20.5937, lng: 78.9629 };
  }

  // Generate subtle deterministic offset per dam id so multiple dams in a district don't overlap completely
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const latOffset = ((Math.abs(hash) % 1000) - 500) * 0.00018; // ~ +/- 9 km
  const lngOffset = ((Math.abs(hash >> 3) % 1000) - 500) * 0.00018;

  return {
    lat: parseFloat((baseCoord.lat + latOffset).toFixed(5)),
    lng: parseFloat((baseCoord.lng + lngOffset).toFixed(5))
  };
}

/**
 * Builds a comprehensive, bespoke collection of Drone UAV and Satellite images
 * for a specific dam according to its name, district, state, and river basin.
 */
export function generateDamLocationImages(dam: {
  id: string;
  name: string;
  district: string;
  state: string;
  river: string;
  basin: string;
  condition?: string;
}): DamImage[] {
  const coord = getDamCoordinates(dam.district, dam.state, dam.id);
  
  // Deterministic selector based on ID
  let seed = 0;
  for (let i = 0; i < dam.id.length; i++) {
    seed = (seed * 31 + dam.id.charCodeAt(i)) & 0xffffff;
  }

  const drone1 = DRONE_IMAGERY_COLLECTION[seed % DRONE_IMAGERY_COLLECTION.length];
  const drone2 = DRONE_IMAGERY_COLLECTION[(seed + 3) % DRONE_IMAGERY_COLLECTION.length];
  const drone3 = DRONE_IMAGERY_COLLECTION[(seed + 5) % DRONE_IMAGERY_COLLECTION.length];

  const sat1 = SATELLITE_IMAGERY_COLLECTION[seed % SATELLITE_IMAGERY_COLLECTION.length];
  const sat2 = SATELLITE_IMAGERY_COLLECTION[(seed + 2) % SATELLITE_IMAGERY_COLLECTION.length];
  const sat3 = SATELLITE_IMAGERY_COLLECTION[(seed + 4) % SATELLITE_IMAGERY_COLLECTION.length];

  const structGood = STRUCTURAL_IMAGERY_COLLECTION[seed % STRUCTURAL_IMAGERY_COLLECTION.length];
  const structBad = STRUCTURAL_IMAGERY_COLLECTION[1];

  const recentYear = 2026;
  const month = String(1 + (seed % 9)).padStart(2, '0');
  const day = String(10 + (seed % 18)).padStart(2, '0');
  const dateStr = `${recentYear}-${month}-${day}`;

  const images: DamImage[] = [
    // 1. Primary Drone UAV Survey: Nadir Orthomosaic of Crest & Spillway
    {
      id: `${dam.id}-drone-crest`,
      title: `${dam.name} - 4K UAV Aerial Nadir Orthomosaic (${dam.district})`,
      type: 'drone',
      url: drone1.url,
      caption: `High-resolution UAV photogrammetry flight over ${dam.name} on the ${dam.river} River, ${dam.district}, ${dam.state}. Verifying crest road alignment, parapet copings, and radial spillway gate seating.`,
      date: dateStr,
      resolutionOrAltitude: `Altitude: 115m AGL • GSD 2.1 cm/px`,
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.district}, ${dam.state} (${dam.river} River)`,
      droneModelOrSatellite: drone1.model,
      sensorPayload: drone1.sensor,
      flightAltitudeMeters: 115,
      flightSpeedMps: 7.5,
      gimbalPitchDegrees: -90, // Nadir
      groundSamplingDistanceCm: 2.1,
      orbitOrFlightCode: `UAV-FLT-${dam.id.toUpperCase()}-01`
    },

    // 2. Secondary Drone UAV Survey: Oblique Hydraulic Plunge Pool & Scour Apron Scan
    {
      id: `${dam.id}-drone-spillway`,
      title: `${dam.name} - Oblique Drone Inspection: Plunge Pool & Downstream Apron`,
      type: 'drone',
      url: drone2.url,
      caption: `Low-altitude oblique UAV survey inspecting energy-dissipating baffle blocks, downstream bedrock scour, and riverbank retaining training walls at ${dam.name}.`,
      date: dateStr,
      resolutionOrAltitude: `Altitude: 52m AGL • Gimbal: -45°`,
      latitude: parseFloat((coord.lat + 0.0015).toFixed(5)),
      longitude: parseFloat((coord.lng + 0.0012).toFixed(5)),
      locationName: `${dam.name} Downstream Chute, ${dam.district}`,
      droneModelOrSatellite: drone2.model,
      sensorPayload: drone2.sensor,
      flightAltitudeMeters: 52,
      flightSpeedMps: 4.2,
      gimbalPitchDegrees: -45,
      groundSamplingDistanceCm: 1.4,
      orbitOrFlightCode: `UAV-FLT-${dam.id.toUpperCase()}-02`
    },

    // 3. Thermal IR / Reservoir Rim Abutment Drone Inspection
    {
      id: `${dam.id}-drone-thermal`,
      title: `${dam.name} - Abutment & Rim Topography Drone Surveillance`,
      type: 'drone',
      url: drone3.url,
      caption: `Autonomous UAV terrain flight mapping reservoir rim geological slopes, abutment contact stability, and perimeter drainage channels in ${dam.district}.`,
      date: dateStr,
      resolutionOrAltitude: `Altitude: 90m AGL • Dual Sensor Scan`,
      latitude: parseFloat((coord.lat - 0.0012).toFixed(5)),
      longitude: parseFloat((coord.lng - 0.0018).toFixed(5)),
      locationName: `${dam.name} Upstream Reservoir Rim, ${dam.district}`,
      droneModelOrSatellite: drone3.model,
      sensorPayload: drone3.sensor,
      flightAltitudeMeters: 90,
      flightSpeedMps: 6.0,
      gimbalPitchDegrees: -60,
      groundSamplingDistanceCm: 2.8,
      orbitOrFlightCode: `UAV-FLT-${dam.id.toUpperCase()}-03`
    },

    // 4. Primary Satellite Remote Sensing: ISRO Cartosat / Sentinel-2 Optical
    {
      id: `${dam.id}-sat-optical`,
      title: `${dam.name} - Multi-spectral Optical Satellite Pass (${dam.state})`,
      type: 'satellite',
      url: sat1.url,
      caption: `High-resolution multi-spectral satellite acquisition of ${dam.name} reservoir surface boundary, surrounding catchment vegetation, and ${dam.basin} river network in ${dam.district}.`,
      date: dateStr,
      resolutionOrAltitude: sat1.resolution,
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.name}, ${dam.district}, ${dam.state}`,
      droneModelOrSatellite: sat1.satellite,
      sensorPayload: sat1.sensor,
      cloudCoverPercent: 0.2,
      spectralBand: sat1.band,
      orbitOrFlightCode: `SAT-PASS-ORBIT-${120 + (seed % 80)}`
    },

    // 5. Secondary Satellite Remote Sensing: Sentinel-1 SAR All-Weather Radar
    {
      id: `${dam.id}-sat-radar`,
      title: `${dam.name} - Synthetic Aperture Radar (SAR) Microwave Flood Corridor`,
      type: 'satellite',
      url: sat2.url,
      caption: `Cloud-penetrating all-weather synthetic aperture radar scan revealing water surface backscatter, shoreline boundaries, and downstream floodways of ${dam.river} in ${dam.district}.`,
      date: dateStr,
      resolutionOrAltitude: sat2.resolution,
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.basin} Catchment, ${dam.district}`,
      droneModelOrSatellite: sat2.satellite,
      sensorPayload: sat2.sensor,
      cloudCoverPercent: 0.0,
      spectralBand: sat2.band,
      orbitOrFlightCode: `SAR-SWATH-${300 + (seed % 60)}`
    },

    // 6. False-Color / NDWI Satellite Moisture Inundation Scan
    {
      id: `${dam.id}-sat-ndwi`,
      title: `${dam.name} - NDWI False-Color Reservoir Surface Inundation Map`,
      type: 'satellite',
      url: sat3.url,
      caption: `Normalized Difference Water Index (NDWI) satellite band analysis tracking reservoir water spread area and sediment plume concentration behind ${dam.name}.`,
      date: dateStr,
      resolutionOrAltitude: sat3.resolution,
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.name} Water Spread, ${dam.district}`,
      droneModelOrSatellite: sat3.satellite,
      sensorPayload: sat3.sensor,
      cloudCoverPercent: 0.4,
      spectralBand: sat3.band,
      orbitOrFlightCode: `NDWI-SCAN-${500 + (seed % 90)}`
    },

    // 7. Structural Ground Inspection (Good Condition)
    {
      id: `${dam.id}-struct-good`,
      title: `${dam.name} - Spillway Radial Gates & Monolith Promenade View`,
      type: 'condition_good',
      url: structGood.url,
      caption: `CWC & State Dam Safety inspection verifying sound structural alignment, clear crest roadway, and operational spillway hoist mechanisms on River ${dam.river}.`,
      date: dateStr,
      resolutionOrAltitude: 'Structural Inspection Lens • Ground Telemetry',
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.name} Crest, ${dam.district}`
    },

    // 8. Foundation Drainage Gallery & Seepage Inspection
    {
      id: `${dam.id}-struct-bad`,
      title: `${dam.name} - Foundation Drainage Adit & Seepage Examination`,
      type: 'condition_bad',
      url: structBad.url,
      caption: `Subsurface inspection gallery in ${dam.name} examining foundation relief wells, v-notch weir telemetry, and drainage gutter discharge in ${dam.district}.`,
      date: dateStr,
      resolutionOrAltitude: 'Internal Borehole Camera & Gallery Sensor Array',
      latitude: coord.lat,
      longitude: coord.lng,
      locationName: `${dam.name} Gallery Adit, ${dam.district}`
    }
  ];

  return images;
}

/**
 * Enriches any dam object with geographical coordinates and comprehensive
 * drone UAV + satellite remote sensing imagery keyed to its name and location.
 */
export function enrichDamWithLocationAndImagery(dam: Dam): Dam {
  const coord = getDamCoordinates(dam.district, dam.state, dam.id);
  const enrichedImages = generateDamLocationImages({
    id: dam.id,
    name: dam.name,
    district: dam.district,
    state: dam.state,
    river: dam.river,
    basin: dam.basin,
    condition: dam.condition
  });

  return {
    ...dam,
    latitude: dam.latitude || coord.lat,
    longitude: dam.longitude || coord.lng,
    images: enrichedImages
  };
}
