import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Trims pixels according to a clipping path included in the original image (e.g., manually created
 * using PhotoShop)
 * using an evenodd clipping rule.
 * @return {Flag}
 */
function clipEvenOdd(): Flag{
  return new Flag('clip_evenodd');
}

export default clipEvenOdd;
