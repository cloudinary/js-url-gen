import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * Keep the Display Aspect Ratio metadata of the uploaded video (if it’s different from the current video
 * dimensions).
 */
function keepDar(): Flag{
  return new Flag('keep_dar');
}

export default keepDar;
