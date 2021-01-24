/**
 * @description Contains functions to select the text decoration to be used with text.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Values
 * @namespace TextDecoration
 */

/**
 * @memberOf Values.TextDecoration
 */
function normal(): string {
  return '';
}

/**
 * @memberOf Values.TextDecoration
 */
function underline(): string {
  return 'underline';
}

/**
 * @memberOf Values.TextDecoration
 */
function strikethrough(): string {
  return 'strikethrough';
}

const TextDecoration = {normal, underline, strikethrough};

export {
  TextDecoration,
  normal,
  underline,
  strikethrough
};
