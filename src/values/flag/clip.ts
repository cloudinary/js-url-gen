import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 * @return {Values.Flag.FlagQualifier}
 */
function clip(): FlagQualifier {
  return new FlagQualifier('clip');
}

export {clip};
