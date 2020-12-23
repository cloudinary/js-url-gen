import {VideoSource} from "./source/sourceTypes/VideoSource";
import {ImageSource} from "./source/sourceTypes/ImageSource";
import {FetchSource} from "./source/sourceTypes/FetchSource";
/**
 * @description This namespace contains different sources that can be used when concatenating to a video
 * @memberOf Values
 * @namespace Concatenate
 */


/**
 * @description Returns an instance of an ImageSource
 * @memberOf Values.Concatenate
 * @param {string} publicID The publicID of the image to be used to concatenate
 * @return {Values.Concatenate.ImageSource}
 */
function imageSource(publicID: string): ImageSource {
  return new ImageSource(publicID);
}


/**
 * @description Returns an instance of a VideoSource
 * @memberOf Values.Concatenate
 * @param {string} publicID The publicID of the video to be used to concatenate
 * @return {Values.Concatenate.VideoSource}
 */
function videoSource(publicID: string): VideoSource {
  return new VideoSource(publicID);
}


/**
 * @description Returns an instance of a FetchSource
 * @memberOf Values.Concatenate
 * @param {string} remoteURL The URL of the remote asset to fetch as and to be used to concatenate
 * @return {Values.Concatenate.FetchSource}
 */
function fetchSource(remoteURL: string): FetchSource {
  return new FetchSource(remoteURL);
}


const Concatenate = {imageSource, videoSource, fetchSource};
export {Concatenate, imageSource, videoSource, fetchSource};
