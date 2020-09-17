import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Create a waveform image (in the format specified by the file extension) from the audio or video file.
 */
function waveform(): Flag{
  return new Flag('waveform');
}

export default waveform;