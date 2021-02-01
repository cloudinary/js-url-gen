/**
 * @description Contains functions to select the font antialias setting.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace FontAntialias
 */

/**
 * @memberOf Qualifiers.FontAntialias
 */
function none(): string {
  return '';
}

/**
 * @memberOf Qualifiers.FontAntialias
 */
function gray(): string {
  return 'gray';
}

/**
 * @memberOf Qualifiers.FontAntialias
 */
function subPixel(): string {
  return 'subpixel';
}

/**
 * @memberOf Qualifiers.FontAntialias
 */
function fast(): string {
  return 'fast';
}

/**
 * @memberOf Qualifiers.FontAntialias
 */
function good(): string {
  return 'good';
}

/**
 * @memberOf Qualifiers.FontAntialias
 */
function best(): string {
  return 'best';
}

const FontAntialias = {gray, subPixel, best, fast, none, good};

export {
  FontAntialias,
  gray,
  subPixel,
  best,
  fast,
  none,
  good
};
