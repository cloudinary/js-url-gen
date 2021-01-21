/**
 * @description Contains functions to select the font weight.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Values
 * @namespace FontWeight
 */

/**
 * @memberOf Values.FontWeight
 */
function thin(): string {
  return 'thin';
}

/**
 * @memberOf Values.FontWeight
 */
function light(): string {
  return 'light';
}

/**
 * @memberOf Values.FontWeight
 */
function normal(): string {
  return 'normal';
}

/**
 * @memberOf Values.FontWeight
 */
function bold(): string {
  return 'bold';
}


const FontWeight = {bold, light, normal, thin};
export {
  FontWeight,
  bold,
  light,
  normal,
  thin
};
