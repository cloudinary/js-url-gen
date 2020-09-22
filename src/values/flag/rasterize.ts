import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in
 * order to enable
 * PDF resizing and overlay manipulations.
 */
function rasterize(): Flag{
  return new Flag('rasterize');
}

export default rasterize;
