
/**
 * @description Indicates that the requested dimensions for the resize are percentage values relative to another asset or element, rather than pixel values.
 * @namespace ResizeMode
 * @memberOf Values
 */


/**
 * @memberOf Values.ResizeMode
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return string
 */
function relative(): string {
  return 'relative';
}

/**
 * @memberOf Values.ResizeMode
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region. Currently regions are only defined when using gravity 'face', 'faces' or 'custom'.
 * @return string
 */
function regionRelative(): string {
  return 'region_relative';
}

export {relative, regionRelative};
export default {relative, regionRelative};
