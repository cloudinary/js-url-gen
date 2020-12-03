import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Convert the audio channel to mono
 * @return {Values.Flag.FlagQualifier}
 */
function mono(): FlagQualifier {
  return new FlagQualifier('mono');
}

export {mono};
