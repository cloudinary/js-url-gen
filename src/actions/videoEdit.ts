import TrimAction from './videoEdit/TrimAction';
import ConcatenateAction from './videoEdit/ConcatenateAction';
import VolumeAction from "./videoEdit/VolumeAction";
import {VideoSource} from "../values/source/sourceTypes/VideoSource";
import {PreviewAction} from "./videoEdit/PreviewAction";

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
 * @param {string | number} volumeValue The value of volume. The percentage change of volume (Range: -100 to 400).
 * For a list of supported types see {@link Values.Volume |
    * Volume values}
 * @return {VolumeAction}
 */
function volume(volumeValue: string | number): VolumeAction{
  return new VolumeAction(volumeValue);
}

/**
 * @description A video preview is a short excerpt from a video that can be used to engage your audience and help them select the video content that interests them.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#generate_an_ai_based_video_preview |
  * Create a video preview}
 *
 * @memberOf Actions.VideoEdit
 * @return {Actions.VideoEdit.PreviewAction}
 */
function preview(): PreviewAction{
  return new PreviewAction();
}

export declare type videoEditType = VolumeAction | TrimAction | ConcatenateAction | PreviewAction;

const VideoEdit = {concatenate, trim, volume, preview};
export {VideoEdit, concatenate, trim, volume, preview};
