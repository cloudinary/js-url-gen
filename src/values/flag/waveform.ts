import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Create a waveform image (in the format specified by the file extension) from the audio or video file.
 * @return {Values.Flag.FlagQualifier}
 */
function waveform(): FlagQualifier {
  return new FlagQualifier('waveform');
}

export {waveform};
