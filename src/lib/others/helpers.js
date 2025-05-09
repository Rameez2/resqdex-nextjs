// Helper function to remove any keys that start with "$"
export const removeDollarKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(removeDollarKeys);
  } else if (obj && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!key.startsWith('$')) { // Skip fields starting with "$"
        acc[key] = removeDollarKeys(value); // Recursively clean nested objects/arrays
      }
      return acc;
    }, {});
  }
  return obj;
};