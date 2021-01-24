/**
 * @description Contains functions to select the alignment of the text.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Values
 * @namespace TextAlignment
 */

/**
 * @memberOf Values.TextAlignment
 */
function left(): string {
  return 'left';
}

/**
 * @memberOf Values.TextAlignment
 */
function right(): string {
  return 'right';
}

/**
 * @memberOf Values.TextAlignment
 */
function center(): string {
  return 'center';
}

/**
 * @memberOf Values.TextAlignment
 */
function start(): string {
  return 'start';
}

/**
 * @memberOf Values.TextAlignment
 */
function end(): string {
  return 'end';
}

/**
 * @memberOf Values.TextAlignment
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
