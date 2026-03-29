// @ts-check

/**
 * The number of minutes it takes to prepare a single layer.
 */
export const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * The expected oven time in minutes.
 */
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the oven.
 *
 * @param {number} actualMinutesInOven
 * @returns {number}
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number}
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number}
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}