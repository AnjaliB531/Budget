export interface School {
  State: string;
  District: string;
  'School Nmae': string;
  'School Category': string;
  'Building Status': string;
  'Total Class Rooms': number;
  'Library Availability': string;
  'Electricity Availability': string;
  'Playground Available': string;
  'DIGITAL FACILITIE-S': string;
  'Toilets for Boys Girls': string;
  'Drinking Water Available': string;
}

export interface BudgetInput {
  teachersNeeded: number;
  underprivilegedStudents: number;
  classroomsToRenovate: number;
  computerLabsNeeded: number;
  libraryBooks: number;
  sportsEquipment: boolean;
  scienceLab: boolean;
}

export interface BudgetBreakdown {
  teachersSalary: number;
  studentGrants: number;
  infrastructure: number;
  facilities: number;
  maintenance: number;
  total: number;
}