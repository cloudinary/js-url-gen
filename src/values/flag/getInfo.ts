import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Returns metadata of the input asset and of the transformed output asset in JSON instead of the
 * transformed image.
 * @return {Values.Flag.FlagQualifier}
 */
function getInfo(): FlagQualifier {
  return new FlagQualifier('getinfo');
}

export {getInfo};
