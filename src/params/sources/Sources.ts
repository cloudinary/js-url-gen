import TextSource from "./TextSource";
import ImageSource from "./ImageSource";
import VideoSource from "./VideoSource";

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

/**
 * @memberOf Params.Sources
 * @param {string} publicID
 * @description Returns an instance of an VideoSource
 * @returns {Params.Sources.VideoSource}
 */
function video(publicID: string): VideoSource {
  return new VideoSource(publicID);
}

export default {ImageSource, TextSource, VideoSource, image, text, video};
export {ImageSource, TextSource, VideoSource, image, text, video};
