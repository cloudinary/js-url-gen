import BitRateAction from "./BitRateAction";
import AudioCodecAction from "./AudioCodecAction";
import AudioFrequencyAction from "./AudioFrequencyAction";
import FPSAction from "./FPSAction";
import FPSRangeAction from "./FPSRangeAction";
import KeyframeIntervalsAction from "./KeyframeIntervalsAction";
import StreamingProfileAction from "./StreamingProfile";
import ToAnimatedAction from "./ToAnimatedAction";
import {AnimatedFormat} from "../../values/animatedFormat/AnimatedFormat";

/**
 * Defines how to transcode a video to another format
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats | Transcoding video to other formats}
 * @memberOf Actions
 * @namespace Transcode
 */

/**
 * @memberOf Actions.Transcode
 * @description Sets the audio sample frequency.
 *
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/audio_transformations#audio_frequency_control | Audio frequency control}
 * @param {string|number} freq The audio frequency.
 * @return {AudioFrequencyAction}
 */
function audioFrequency(freq: string|number): AudioFrequencyAction{
  return new AudioFrequencyAction(freq);
}
/**
 * @memberOf Actions.Transcode
 * @description Sets the audio codec or removes the audio channel.
 * @param {string} codec The audio codec or "none".
 * @return {AudioCodecAction}
 */
function audioCodec(codec: string): AudioCodecAction{
  return new AudioCodecAction(codec);
}
/**
 * @memberOf Actions.Transcode
 * @description Controls the video bitrate.
 * Supported codecs: h264, h265 (MPEG-4); vp8, vp9 (WebM).
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#bitrate_control | Bitrate control}
 *
 * @param {string|number}  bitRate The number of bits used to represent the video data per second. By default the video
 *                             uses a variable bitrate (VBR), with this value indicating the maximum bitrate.
 *                             The value can be an integer e.g. 120000, or a string supporting "k" and "m"
 *                             (kilobits and megabits respectively) e.g. 250k or 2m.
 * @return {BitRateAction}
 */
function bitRate(bitRate: string|number): BitRateAction {
  return new BitRateAction(bitRate);
}

/**
 * @memberOf Actions.Transcode
 * @param {number} from frame rate
 * @return {FPSAction}
 */
function fps(from: number): FPSAction {
  return new FPSAction(from);
}

/**
 * @memberOf Actions.Transcode
 * @description Controls the range of acceptable FPS (Frames Per Second) to ensure that video (even when optimized) is
 * delivered with an expected FPS level (helps with sync to audio).
 * @param {number} from frame rate
 * @param {number} to frame rate
 * @return {FPSRangeAction}
 */
function fpsRange(from: number, to?: number): FPSRangeAction {
  return new FPSRangeAction(from, to);
}

/**
 * @memberOf Actions.Transcode
 * @description Sets the keyframe interval of the delivered video.
 * @param {number} interval The keyframe interval in seconds.
 * @return {KeyframeIntervalsAction}
 */
function keyframeInterval(interval: number): KeyframeIntervalsAction {
  return new KeyframeIntervalsAction(interval);
}

/**
 * @memberOf Actions.Transcode
 * @description Sets the streaming profile to apply to an HLS or MPEG-DASH adaptive bitrate streaming video.
 * The value can be one of the pre-defined streaming profiles or a custom-defined one.
 * You can use the streaming profiles methods of StreamingProfilesTrait to get a list of the available streaming
 * profiles or to create new custom profiles.
 * @param {string} profile The streaming profile.
 * @return {StreamingProfileAction}
 */
function streamingProfile(profile: string): StreamingProfileAction {
  return new StreamingProfileAction(profile);
}

/**
 * @memberOf Actions.Transcode
 * @description Converts a video to animated image.
 * @param {string} animatedFormat The streaming profile.
 * @return {ToAnimatedAction}
 */
function toAnimated(animatedFormat: AnimatedFormat | string): ToAnimatedAction {
  return new ToAnimatedAction(animatedFormat);
}

export {bitRate, audioCodec, audioFrequency, fps, fpsRange, keyframeInterval, streamingProfile, toAnimated};
