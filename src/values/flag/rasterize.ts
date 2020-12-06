import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in
 * order to enable
 * PDF resizing and overlay manipulations.
 * @return {Values.Flag.FlagQualifier}
 */
function rasterize(): FlagQualifier {
  return new FlagQualifier('rasterize');
}

export {rasterize};
