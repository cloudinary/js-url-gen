import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Reduces the image to one flat pixelated layer (as opposed to the default vector based graphic) in order to enable
 * PDF resizing and overlay manipulations.
 *
 * @return FlagAction
 */
function rasterize(): IFlagAction{
  return new FlagAction('rasterize');
}

export default rasterize;
