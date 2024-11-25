import React, { useState, useEffect } from 'react';
import { School, BudgetBreakdown as BudgetBreakdownType } from '../types';
import { generateSuggestions } from '../utils/suggestions';
import { Building2, BookOpen, Lightbulb, Users } from 'lucide-react';
import { BudgetForm } from './BudgetForm';
import { BudgetBreakdown } from './BudgetBreakdown';

interface Props {
  schools: School[];
}

export const SchoolAnalyzer: React.FC<Props> = ({ schools }) => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [budgetBreakdown, setBudgetBreakdown] = useState<BudgetBreakdownType | null>(null);

  useEffect(() => {
    if (selectedSchool) {
      const result = generateSuggestions(selectedSchool);
      setAnalysis(result);
      setBudgetBreakdown(null);
    }
  }, [selectedSchool]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Select School for Analysis</h2>
        <select
          className="w-full p-3 border rounded-lg shadow-sm"
          onChange={(e) => setSelectedSchool(schools[parseInt(e.target.value)])}
        >
          <option value="">Choose a school...</option>
          {schools.map((school, index) => (
            <option key={index} value={index}>
              {school['School Nmae']}
            </option>
          ))}
        </select>
      </div>

      {selectedSchool && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">School Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-blue-600" />
                <span>Building Status: {selectedSchool['Building Status']}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                <span>Library: {selectedSchool['Library Availability']}</span>
              </div>
              <div className="flex items-center">
                <Lightbulb className="w-6 h-6 mr-2 text-yellow-600" />
                <span>Digital Facilities: {selectedSchool['DIGITAL FACILITIE-S']}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-purple-600" />
                <span>Total Classrooms: {selectedSchool['Total Class Rooms']}</span>
              </div>
            </div>
          </div>

          {analysis && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Improvement Suggestions</h3>
              <div className="space-y-4">
                {analysis.suggestions.map((suggestion: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="font-semibold">{suggestion.item}</h4>
                    <p className="text-gray-600">{suggestion.description}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">Priority: {suggestion.priority}</span>
                      <span className="text-sm font-semibold">
                        ₹{suggestion.estimatedCost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {selectedSchool && (
        <>
          <BudgetForm onBudgetCalculated={setBudgetBreakdown} />
          {budgetBreakdown && (
            <div className="mt-8">
              <BudgetBreakdown breakdown={budgetBreakdown} />
            </div>
          )}
        </>
      )}
    </div>
  );
};