import { BudgetInput, BudgetBreakdown } from '../types';

const MONTHLY_TEACHER_SALARY = 60000;
const STUDENT_GRANT = 2000;
const CLASSROOM_RENOVATION_COST = 500000;
const COMPUTER_LAB_COST = 1000000;
const LIBRARY_BOOK_COST = 500;
const SPORTS_EQUIPMENT_COST = 200000;
const SCIENCE_LAB_COST = 1500000;
const ANNUAL_MAINTENANCE_PERCENT = 0.1;

export const calculateBudget = (input: BudgetInput): BudgetBreakdown => {
  // Calculate teacher salaries (annual)
  const teachersSalary = input.teachersNeeded * MONTHLY_TEACHER_SALARY * 12;

  // Calculate student grants
  const studentGrants = input.underprivilegedStudents * STUDENT_GRANT;

  // Calculate infrastructure costs
  const infrastructureCost = 
    (input.classroomsToRenovate * CLASSROOM_RENOVATION_COST) +
    (input.computerLabsNeeded * COMPUTER_LAB_COST);

  // Calculate facilities costs
  const facilitiesCost = 
    (input.libraryBooks * LIBRARY_BOOK_COST) +
    (input.sportsEquipment ? SPORTS_EQUIPMENT_COST : 0) +
    (input.scienceLab ? SCIENCE_LAB_COST : 0);

  // Calculate maintenance costs
  const maintenanceCost = 
    (infrastructureCost + facilitiesCost) * ANNUAL_MAINTENANCE_PERCENT;

  // Calculate total budget
  const totalBudget = 
    teachersSalary +
    studentGrants +
    infrastructureCost +
    facilitiesCost +
    maintenanceCost;

  return {
    teachersSalary,
    studentGrants,
    infrastructure: infrastructureCost,
    facilities: facilitiesCost,
    maintenance: maintenanceCost,
    total: totalBudget
  };
};