import {FlagQualifier} from "./FlagQualifier";

/**
 * @memberOf Values.Flag
 * @description Used internally by Position within an Overlay, this flag will tile the overlay across your image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#fl_no_overflow | Overflow in overlays}
 * @return {Values.Flag.FlagQualifier}
 */
function noOverflow(): FlagQualifier{
  return new FlagQualifier('no_overflow');
}

export {noOverflow};
