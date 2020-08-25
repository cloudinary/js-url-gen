import TextSource from "./TextSource";
import ImageSource from "./ImageSource";

/**
 * @memberOf Params
 * @namespace Sources
 */


/**
 * @memberOf Params.Sources
 * @param {string} publicID
 * @description Returns an instance of an ImageSource
 * @returns {Params.Sources.ImageSource}
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}


/**
 * @memberOf Params.Sources
 * @param text {string}
 * @description Returns an instance of a TextSource
 * @returns {Params.Sources.TextSource}
 */
function text(text: string): TextSource {
  return new TextSource(text);
}

export default {ImageSource, TextSource, image, text};
export {ImageSource, TextSource, image, text};
