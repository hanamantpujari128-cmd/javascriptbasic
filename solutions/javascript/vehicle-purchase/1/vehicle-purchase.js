// @ts-check

/**
 * Determines whether or not you need a license
 */
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

/**
 * Choose the option that comes first alphabetically
 */
export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}

/**
 * Calculate resell price based on age
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age <= 10) {
    return originalPrice * 0.7;
  } else {
    return originalPrice * 0.5;
  }
}