import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Convert the audio channel to mono
 * @return {Flag}
 */
function mono(): Flag{
  return new Flag('mono');
}

export default mono;
