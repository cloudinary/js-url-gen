import {FlagQualifier} from "./FlagQualifier";

/**
 * @memberOf Values.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#tiling_overlays | Tiling overlay}
 * @return {Values.Flag.FlagQualifier}
 */
function tiled(): FlagQualifier{
  return new FlagQualifier('tiled');
}

export {tiled};
