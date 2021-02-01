/**
 * @description Contains functions to select the alignment of the text.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace TextAlignment
 */

/**
 * @memberOf Qualifiers.TextAlignment
 */
function left(): string {
  return 'left';
}

/**
 * @memberOf Qualifiers.TextAlignment
 */
function right(): string {
  return 'right';
}

/**
 * @memberOf Qualifiers.TextAlignment
 */
function center(): string {
  return 'center';
}

/**
 * @memberOf Qualifiers.TextAlignment
 */
function start(): string {
  return 'start';
}

/**
 * @memberOf Qualifiers.TextAlignment
 */
function end(): string {
  return 'end';
}

/**
 * @memberOf Qualifiers.TextAlignment
 */
function justify(): string {
  return 'justify';
}

const TextAlignment = {left, right, center, end, justify, start};

export {
  TextAlignment,
  left,
  right,
  center,
  end,
  justify,
  start
};
