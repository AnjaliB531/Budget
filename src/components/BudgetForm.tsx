import React, { useState } from 'react';
import { BudgetInput, BudgetBreakdown } from '../types';
import { calculateBudget } from '../utils/budgetCalculator';
import { Calculator } from 'lucide-react';

interface Props {
  onBudgetCalculated: (breakdown: BudgetBreakdown) => void;
}

export const BudgetForm: React.FC<Props> = ({ onBudgetCalculated }) => {
  const [formData, setFormData] = useState<BudgetInput>({
    teachersNeeded: 0,
    underprivilegedStudents: 0,
    classroomsToRenovate: 0,
    computerLabsNeeded: 0,
    libraryBooks: 0,
    sportsEquipment: false,
    scienceLab: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const breakdown = calculateBudget(formData);
    onBudgetCalculated(breakdown);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value) || 0
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 mr-2 text-blue-600" />
        <h3 className="text-xl font-bold">Budget Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Teachers Needed
          </label>
          <input
            type="number"
            name="teachersNeeded"
            value={formData.teachersNeeded}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Underprivileged Students
          </label>
          <input
            type="number"
            name="underprivilegedStudents"
            value={formData.underprivilegedStudents}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Classrooms to Renovate
          </label>
          <input
            type="number"
            name="classroomsToRenovate"
            value={formData.classroomsToRenovate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Computer Labs Needed
          </label>
          <input
            type="number"
            name="computerLabsNeeded"
            value={formData.computerLabsNeeded}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Library Books Required
          </label>
          <input
            type="number"
            name="libraryBooks"
            value={formData.libraryBooks}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            min="0"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sportsEquipment"
              checked={formData.sportsEquipment}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">
              Sports Equipment Required
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="scienceLab"
              checked={formData.scienceLab}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">
              Science Lab Required
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate Budget
      </button>
    </form>
  );
};