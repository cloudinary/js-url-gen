/**
 * @description given an ESM package and a default export, this function expects the two to be identical
 * Example usage:
 *    import * as GravityESM from '/params/gravity/Gravity'
 *    import Gravity from '/params/gravity/Gravity'
 *
 *    it ('Should work', () => {
 *       expectESMToMatchDefault(GravityESM, Gravity);
 *    })
 *
 * @param {object} ESM
 * @param {object} Default
 */
export default function expectESMToMatchDefault(ESM: unknown, Default: unknown): void {
  (Object.keys(ESM) as Array<keyof typeof ESM>) .forEach((funcName) => {
    if (typeof ESM[funcName] === 'function') {
      // Ensure function exists on both objects
      expect(ESM[funcName]).toEqual( Default[funcName]);

      // sanity, ensure the result is a function at all (and not an accidental undefined)
      expect(typeof ESM[funcName]).toBe('function');
    }
  });
}
