// @ts-check

/**
 * The fast attack is available when the knight is sleeping
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * A useful spy captures information if at least one person is awake
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You can signal the prisoner if the archer is asleep and the prisoner is awake
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * You can free the prisoner if:
 * 1. The pet dog is present AND the archer is asleep
 * OR
 * 2. The prisoner is awake AND both the knight and archer are asleep
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (prisonerIsAwake && !knightIsAwake && !archerIsAwake)
  );
}