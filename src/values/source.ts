import {TextSource} from "./source/sourceTypes/TextSource";
import {VideoSource} from "./source/sourceTypes/VideoSource";
import {ImageSource} from "./source/sourceTypes/ImageSource";
import {TextStyle} from "./textStyle";

/**
 * @description This namespace contains different sources that can be used in overlays and underlays
 * @memberOf Values
 * @namespace Source
 */


/**
 * @description Returns an instance of an ImageSource
 * @memberOf Values.Sources
 * @param {string} publicID The publicID of the image to be used as a layer
 * @return {ImageSource}
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}

/**
 * @description Returns an instance of a TextSource
 * @memberOf Values.Sources
 * @param text {string} The text to display.
 * @return {TextSource}
 */
function text(text: string, textStyle: TextStyle): TextSource {
  return new TextSource(text, textStyle);
}

/**
 * @description Returns an instance of an VideoSource
 * @memberOf Values.Sources
 * @param {string} publicID The publicID of the video to be used as a layer
 * @return {VideoSource}
 */
function video(publicID: string): VideoSource {
  return new VideoSource(publicID);
}


const Source = {image, text, video};
export {Source, image, text, video};
