import DeliveryAction from "./DeliveryAction";
import {IDeliveryAction} from "./IDeliveryAction";
import {FormatType} from "../../params/formats/ImageFormats";

/**
 * @param format
 */
function format(format:string | FormatType) :IDeliveryAction {
  return new DeliveryAction('f', format);
}

export default format;
