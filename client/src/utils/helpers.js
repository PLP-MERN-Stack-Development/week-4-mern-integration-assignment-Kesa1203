export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCuisineOptions = () => {
  return [
    'South African',
    'African',
    'Asian',
    'European',
    'American',
    'Fusion',
    'Vegetarian',
    'Vegan',
    'Seafood',
    'Steakhouse',
    'Fast Food',
    'Cafe',
    'Other',
  ];
};

export const getLocationOptions = () => {
  return [
    'Cape Town',
    'Johannesburg',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein',
    'Stellenbosch',
    'Franschhoek',
    'Other',
  ];
};

export const getPriceRangeOptions = () => {
  return [
    'Under R100',
    'R100-R200',
    'R200-R400',
    'R400-R600',
    'Over R600',
  ];
};