export interface StateDamStat {
  state: string;
  totalDams: number;
  goodCondition: number;
  moderateCondition: number;
  alertCondition: number;
  criticalCondition: number;
  majorRivers: string[];
  zone: 'North' | 'West' | 'South' | 'Central' | 'East' | 'North-East';
}

// Official Central Water Commission (CWC) National Register of Large Dams (NRLD) distribution (~5,334 dams)
export const STATE_DAM_STATS: StateDamStat[] = [
  { state: 'Maharashtra', totalDams: 2394, goodCondition: 1915, moderateCondition: 360, alertCondition: 98, criticalCondition: 21, majorRivers: ['Godavari', 'Krishna', 'Bhima', 'Tapi', 'Koyna'], zone: 'West' },
  { state: 'Madhya Pradesh', totalDams: 906, goodCondition: 730, moderateCondition: 132, alertCondition: 36, criticalCondition: 8, majorRivers: ['Narmada', 'Chambal', 'Betwa', 'Son', 'Tawa'], zone: 'Central' },
  { state: 'Gujarat', totalDams: 632, goodCondition: 512, moderateCondition: 89, alertCondition: 24, criticalCondition: 7, majorRivers: ['Narmada', 'Tapi', 'Sabarmati', 'Mahi', 'Damanganga'], zone: 'West' },
  { state: 'Karnataka', totalDams: 231, goodCondition: 188, moderateCondition: 31, alertCondition: 10, criticalCondition: 2, majorRivers: ['Krishna', 'Kaveri', 'Tungabhadra', 'Sharavathi', 'Ghataprabha'], zone: 'South' },
  { state: 'Rajasthan', totalDams: 211, goodCondition: 168, moderateCondition: 33, alertCondition: 8, criticalCondition: 2, majorRivers: ['Chambal', 'Banas', 'Mahi', 'Luni', 'Jawai'], zone: 'North' },
  { state: 'Odisha', totalDams: 204, goodCondition: 165, moderateCondition: 28, alertCondition: 9, criticalCondition: 2, majorRivers: ['Mahanadi', 'Brahmani', 'Baitarani', 'Indravati', 'Subarnarekha'], zone: 'East' },
  { state: 'Telangana', totalDams: 180, goodCondition: 145, moderateCondition: 26, alertCondition: 7, criticalCondition: 2, majorRivers: ['Godavari', 'Krishna', 'Manjira', 'Musi'], zone: 'South' },
  { state: 'Andhra Pradesh', totalDams: 167, goodCondition: 134, moderateCondition: 24, alertCondition: 7, criticalCondition: 2, majorRivers: ['Krishna', 'Godavari', 'Pennar', 'Nagavali', 'Vamsadhara'], zone: 'South' },
  { state: 'Uttar Pradesh', totalDams: 130, goodCondition: 106, moderateCondition: 18, alertCondition: 5, criticalCondition: 1, majorRivers: ['Ganga', 'Yamuna', 'Rihand', 'Betwa', 'Ramganga'], zone: 'North' },
  { state: 'Tamil Nadu', totalDams: 116, goodCondition: 92, moderateCondition: 17, alertCondition: 5, criticalCondition: 2, majorRivers: ['Kaveri', 'Bhavani', 'Vaigai', 'Amaravathi', 'Thamirabarani'], zone: 'South' },
  { state: 'Kerala', totalDams: 62, goodCondition: 47, moderateCondition: 10, alertCondition: 4, criticalCondition: 1, majorRivers: ['Periyar', 'Bharathapuzha', 'Pamba', 'Chaliyar', 'Kabini'], zone: 'South' },
  { state: 'Jharkhand', totalDams: 42, goodCondition: 33, moderateCondition: 6, alertCondition: 2, criticalCondition: 1, majorRivers: ['Damodar', 'Barakar', 'Subarnarekha', 'Koel'], zone: 'East' },
  { state: 'West Bengal', totalDams: 33, goodCondition: 26, moderateCondition: 5, alertCondition: 2, criticalCondition: 0, majorRivers: ['Teesta', 'Damodar', 'Kangsabati', 'Mayurakshi'], zone: 'East' },
  { state: 'Uttarakhand', totalDams: 26, goodCondition: 20, moderateCondition: 4, alertCondition: 1, criticalCondition: 1, majorRivers: ['Bhagirathi', 'Alaknanda', 'Yamuna', 'Ramganga', 'Dhauliganga'], zone: 'North' },
  { state: 'Himachal Pradesh', totalDams: 23, goodCondition: 18, moderateCondition: 4, alertCondition: 1, criticalCondition: 0, majorRivers: ['Sutlej', 'Beas', 'Ravi', 'Chenab'], zone: 'North' },
  { state: 'Jammu & Kashmir', totalDams: 18, goodCondition: 14, moderateCondition: 3, alertCondition: 1, criticalCondition: 0, majorRivers: ['Chenab', 'Jhelum', 'Kishanganga'], zone: 'North' },
  { state: 'Punjab', totalDams: 16, goodCondition: 13, moderateCondition: 2, alertCondition: 1, criticalCondition: 0, majorRivers: ['Ravi', 'Sutlej', 'Beas'], zone: 'North' },
  { state: 'Chhattisgarh', totalDams: 28, goodCondition: 22, moderateCondition: 4, alertCondition: 2, criticalCondition: 0, majorRivers: ['Mahanadi', 'Hasdeo', 'Indravati'], zone: 'Central' },
  { state: 'Assam & North East', totalDams: 16, goodCondition: 12, moderateCondition: 3, alertCondition: 1, criticalCondition: 0, majorRivers: ['Brahmaputra', 'Subansiri', 'Khandong', 'Ranganadi'], zone: 'North-East' }
];

export const TOTAL_NATIONAL_DAMS = 5334;
