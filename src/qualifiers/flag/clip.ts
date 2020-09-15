import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 */
function clip(): Flag{
  return new Flag('clip');
}

export default clip;
