import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * Keep the Display Aspect Ratio metadata of the uploaded video (if it’s different from the current video
 * dimensions).
 * @return {Values.Flag.FlagQualifier}
 */
function keepDar(): FlagQualifier {
  return new FlagQualifier('keep_dar');
}

export {keepDar};
