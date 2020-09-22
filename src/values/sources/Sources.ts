import TextSource from "./TextSource";
import ImageSource from "./ImageSource";
import VideoSource from "./VideoSource";

/**
 * @memberOf Values
 * @namespace Sources
 */


/**
 * @memberOf Values.Sources
 * @param {string} publicID
 * @description Returns an instance of an ImageSource
 * @returns {Values.Sources.ImageSource}
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}


/**
 * @memberOf Values.Sources
 * @param text {string}
 * @description Returns an instance of a TextSource
 * @returns {Values.Sources.TextSource}
 */
function text(text: string): TextSource {
  return new TextSource(text);
}

/**
 * @memberOf Values.Sources
 * @param {string} publicID
 * @description Returns an instance of an VideoSource
 * @returns {Values.Sources.VideoSource}
 */
function video(publicID: string): VideoSource {
  return new VideoSource(publicID);
}

export default {ImageSource, TextSource, VideoSource, image, text, video};
export {ImageSource, TextSource, VideoSource, image, text, video};
