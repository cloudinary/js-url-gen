import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Trims pixels according to a clipping path included in the original image (e.g., manually created
 * using PhotoShop)
 * using an evenodd clipping rule.
 * @return {Values.Flag.FlagQualifier}
 */
function clipEvenOdd(): FlagQualifier {
  return new FlagQualifier('clip_evenodd');
}

export default clipEvenOdd;
