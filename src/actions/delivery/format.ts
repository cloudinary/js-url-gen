import DeliveryAction from "./DeliveryAction";
import {FormatQualifier} from "../../values/format/FormatQualifier";

/**
 * @description Defines the format of the delivered asset.
 *
 * <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/image_transformations#image_format_support | Image formats}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#transcoding_video_to_other_formats |
  * Video formats}
 * @memberOf Actions.Delivery
 * @param {string} format The file format. For a list of supported format types see {@link Values.formatTypeValues|
  * format types} for
 * possible values
 * @return {DeliveryAction}
 */
function format(format:FormatQualifier | string) :DeliveryAction {
  return new DeliveryAction('f', format);
}

export default format;
