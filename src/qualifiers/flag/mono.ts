import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Convert the audio channel to mono
 */
function mono(): Flag{
  return new Flag('mono');
}

export default mono;
