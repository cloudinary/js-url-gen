import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in
 * order to enable
 * PDF resizing and overlay manipulations.
 */
function rasterize(): FlagAction{
  return new FlagAction('rasterize');
}

export default rasterize;
