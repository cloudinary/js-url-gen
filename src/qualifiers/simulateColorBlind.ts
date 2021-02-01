/**
 * @description Contains functions to select the type of color-blind condition to simulate.
 * <b>Learn more</b>: {@link https://cloudinary.com/blog/open_your_eyes_to_color_accessibility | Blog: Open your Eyes to Color Accessibility}
 * @memberOf Qualifiers
 * @namespace SimulateColorBlindValues
 */

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function deuteranopia(): string {
  return 'deuteranopia';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function protanopia(): string {
  return 'protanopia';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function tritanopia(): string {
  return 'tritanopia';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function tritanomaly(): string {
  return 'tritanomaly';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function deuteranomaly(): string {
  return 'deuteranomaly';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function coneMonochromacy(): string {
  return 'cone_monochromacy';
}

/**
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function rodMonochromacy(): string {
  return 'rod_monochromacy';
}



const SimulateColorBlind = {
  coneMonochromacy,
  deuteranomaly,
  deuteranopia,
  protanopia,
  rodMonochromacy,
  tritanomaly,
  tritanopia
};

export {
  SimulateColorBlind,
  coneMonochromacy,
  deuteranomaly,
  deuteranopia,
  protanopia,
  rodMonochromacy,
  tritanomaly,
  tritanopia
};

