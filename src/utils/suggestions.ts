export const generateSuggestions = (school: any) => {
  const suggestions = [];
  let totalBudget = 0;

  // Infrastructure
  if (school['Building Status'] !== '1-Pucca') {
    suggestions.push({
      category: 'Infrastructure',
      item: 'Building Improvement',
      description: 'Upgrade to pucca building structure',
      estimatedCost: 2000000,
      priority: 'High'
    });
    totalBudget += 2000000;
  }

  // Digital Facilities
  if (!school['DIGITAL FACILITIE-S']?.includes('Desktop') || 
      !school['DIGITAL FACILITIE-S']?.includes('Internet')) {
    suggestions.push({
      category: 'Technology',
      item: 'Digital Infrastructure',
      description: 'Setup computer lab with internet connectivity',
      estimatedCost: 500000,
      priority: 'Medium'
    });
    totalBudget += 500000;
  }

  // Basic Amenities
  if (school['Drinking Water Available'] !== '1-Yes') {
    suggestions.push({
      category: 'Basic Amenities',
      item: 'Water Facility',
      description: 'Install drinking water system',
      estimatedCost: 100000,
      priority: 'High'
    });
    totalBudget += 100000;
  }

  // Library
  if (school['Library Availability'] !== '1-Yes') {
    suggestions.push({
      category: 'Education',
      item: 'Library Setup',
      description: 'Establish library with basic books and furniture',
      estimatedCost: 300000,
      priority: 'Medium'
    });
    totalBudget += 300000;
  }

  return { suggestions, totalBudget };
};