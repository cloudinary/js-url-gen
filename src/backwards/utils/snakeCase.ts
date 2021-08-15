/**
 * Converts string to snake case
 * @param {string} str
 */
export const snakeCase = (str:string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
