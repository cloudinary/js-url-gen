/**
 * @description Contains functions to select the type of colorblind to simulate mode.
 * <b>Learn more</b>: {@link https://cloudinary.com/blog/open_your_eyes_to_color_accessibility | Blog: Open your Eyes to Color Accessibility}
 * @memberOf Values
 * @namespace SimulateColorBlindValues
 */

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function deuteranopia(): string {
  return 'deuteranopia';
}

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function protanopia(): string {
  return 'protanopia';
}

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function tritanopia(): string {
  return 'tritanopia';
}

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function tritanomaly(): string {
  return 'tritanomaly';
}

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function deuteranomaly(): string {
  return 'deuteranomaly';
}

/**
 * @memberOf Values.SimulateColorBlindValues
 * @return {string}
 */
function coneMonochromacy(): string {
  return 'cone_monochromacy';
}

/**
 * @memberOf Values.SimulateColorBlindValues
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


