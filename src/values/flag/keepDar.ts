import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * Keep the Display Aspect Ratio metadata of the uploaded video (if it’s different from the current video
 * dimensions).
 * @return {Flag}
 */
function keepDar(): Flag{
  return new Flag('keep_dar');
}

export default keepDar;
