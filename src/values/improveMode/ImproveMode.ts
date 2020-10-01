
/**
 * @@doc
 * @description Defines the available modes to improve an image
 * @namespace ImproveMode
 * @memberOf Values
 */



/**
 * @memberOf Values.ImproveMode
 * @@doc
 * @description Use this mode to get better results on images with outdoor lighting and shadows.
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
export default {outdoor, indoor};

