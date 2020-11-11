
/**
 * @description Defines the available modes to use with the improve effect.
 * @namespace ImproveMode
 * @memberOf Values
 */



/**
 * @memberOf Values.ImproveMode
 * @description Use this mode to get better results on outdoor images.
 * @return string
 */
function outdoor(): string {
  return 'outdoor';
}

/**
 * @memberOf Values.ImproveMode
 * @description Use this mode to get better results on images with indoor lighting and shadows.
 * @return string
 */
function indoor(): string {
  return 'indoor';
}

export {outdoor, indoor};

