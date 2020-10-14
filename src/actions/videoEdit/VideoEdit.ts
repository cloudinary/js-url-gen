import TrimAction from './TrimAction';
import ConcatenateAction from './ConcatenateAction';
import {VideoSource} from "../../values/sources/sourceTypes/VideoSource";
import VolumeAction from "./VolumeAction";
import Volume from "../../values/volume/Volume";

/**
 * Methods for editing a video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_manipulation_and_delivery | Video manipulation}
 * @memberOf Actions
 * @namespace VideoEdit
 */

/**
 * @description Concatenates another video.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenating_videos | Concatenating videos}
 *
 * @memberOf Actions.VideoEdit
 * @param {VideoSource} source The source to concatenate.
 * @return {ConcatenateAction}
 */
function concatenate(source:VideoSource):ConcatenateAction{
  return new ConcatenateAction(source);
}

/**
 * @description Trims a video (and discards the rest).
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#trimming_videos |
  * Trimming videos}
 *
 * @memberOf Actions.VideoEdit
 * @return {TrimAction}
 */
function trim(): TrimAction{
  return new TrimAction();
}

/**
 * @description Increases or decreases the volume by a percentage of the current volume.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#adjust_the_audio_volume |
  * Adjust the audio volume}
 *
 * @memberOf Actions.VideoEdit
 * @param {string | number | typeof Volume} volumeValue The value of volume. The percentage change of volume (Range: -100 to 400).
 * For a list of supported types see {@link Values.Volume |
    * Volume values}
 * @return {VolumeAction}
 */
function volume(volumeValue: string | number | typeof Volume): VolumeAction{
  return new VolumeAction(volumeValue);
}

export {concatenate, trim, volume};
export default {concatenate, trim, volume};
