/**
 * @description Contains functions to select the device pixel ratio.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#set_device_pixel_ratio_dpr | Set Device Pixel Ratio}
 * @memberOf Qualifiers
 * @namespace DPR
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.DPR
 */
function auto(): string {
  return 'auto';
}

const Dpr = {
  auto
};

export {auto, Dpr};
