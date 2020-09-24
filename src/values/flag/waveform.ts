import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Create a waveform image (in the format specified by the file extension) from the audio or video file.
 * @return {Flag}
 */
function waveform(): Flag{
  return new Flag('waveform');
}

export default waveform;
