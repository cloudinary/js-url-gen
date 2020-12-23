import {VideoSource} from "./source/sourceTypes/VideoSource";
/**
 * @description This namespace contains different sources that can be used as a transition between two videos
 * @memberOf Values
 * @namespace Transition
 */


/**
 * @description Returns an instance of a VideoSource
 * @memberOf Values.Transition
 * @param {string} publicID The publicID of the video to be used as a transition
 * @return {Values.Transition.VideoSource}
 */
function videoSource(publicID: string): VideoSource {
  return new VideoSource(publicID);
}


const Transition = {videoSource};
export {Transition, videoSource};
