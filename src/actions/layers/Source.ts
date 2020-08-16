import TextSource from "./sources/TextSource";
import ImageSource from "./sources/ImageSource";


/**
 * @memberOf Sources
 * @param publicID
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}


/**
 * @memberOf Sources
 * @param someText {string}
 */
function text(someText: string): TextSource {
  return new TextSource(someText);
}

export default {ImageSource, TextSource, image, text};
export {ImageSource, TextSource, image, text};
