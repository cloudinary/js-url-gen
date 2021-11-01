import {lossy, preserveTransparency, progressive} from "../../qualifiers/flag.js";
import {DeliveryAction} from "./DeliveryAction.js";
import {ProgressiveQualifier} from "../../qualifiers/progressive.js";
import {FormatQualifier} from "../../qualifiers/format/FormatQualifier.js";
import {ProgressiveType} from "../../types/types.js";

/**
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryFormat extends DeliveryAction {
  constructor(deliveryKey?: string, deliveryType?: FormatQualifier|string|number) {
    super(deliveryKey, deliveryType, 'formatType');
  }
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy(): this {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }

  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode?: ProgressiveType | ProgressiveQualifier): this {
    if (mode instanceof ProgressiveQualifier) {
      this._actionModel.progressive = {mode: mode.getFlagValue()};
      this.addFlag(mode);
    } else {
      this._actionModel.progressive = {mode: mode};
      this.addFlag(progressive(mode));
    }
    return this;
  }

  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency(): this {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
}

export {DeliveryFormat};
