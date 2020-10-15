/**
 * @description Controls the volume of an audio or video file.
 * @namespace Volume
 * @memberOf Values
 */

/**
 * @description Mutes the volume.
 *
 * You can use this on the base video to deliver a video without sound, or with a video overlay
 * to ensure that only the sound from the base video plays.
 *
 * @memberOf Values.Volume
 * @return string
 */
function mute(): string{
  return 'mute';
}

/**
 * @description Increases or decreases the volume by a percentage of the current volume.
 *
 * @memberOf Values.Volume
 * @param {string|number} percent The percentage change of volume (Range: -100 to 400).
 * @return string
 */
function byPercent(percent: string|number): string {
  return `${percent}`;
}

/**
 * @description Increases or decreases the volume by the specified number of decibels.
 *
 * @memberOf Values.Volume
 * @param {string|number} decibel The offset in dB.
 * @return string
 */
function byDecibels(decibel: string|number): string {
  return `${decibel}db`;
}

export {mute, byPercent, byDecibels};
export default {mute, byPercent, byDecibels};
