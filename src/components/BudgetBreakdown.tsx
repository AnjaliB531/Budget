import React from 'react';
import { BudgetBreakdown as BudgetBreakdownType } from '../types';
import { IndianRupee } from 'lucide-react';

interface Props {
  breakdown: BudgetBreakdownType;
}

export const BudgetBreakdown: React.FC<Props> = ({ breakdown }) => {
  const categories = [
    { label: 'Teachers Salary (Annual)', value: breakdown.teachersSalary },
    { label: 'Student Grants', value: breakdown.studentGrants },
    { label: 'Infrastructure', value: breakdown.infrastructure },
    { label: 'Facilities', value: breakdown.facilities },
    { label: 'Annual Maintenance', value: breakdown.maintenance },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Budget Breakdown</h3>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">{category.label}</span>
            <span className="font-semibold">₹{category.value.toLocaleString()}</span>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4">
          <span className="text-lg font-bold">Total Budget</span>
          <div className="flex items-center text-blue-600">
            <IndianRupee className="w-5 h-5 mr-1" />
            <span className="text-xl font-bold">{breakdown.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};