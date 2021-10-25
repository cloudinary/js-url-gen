import {lossy, preserveTransparency, progressive} from "../../qualifiers/flag.js";
import {DeliveryAction} from "./DeliveryAction.js";
import {ProgressiveQualifier} from "../../qualifiers/progressive.js";
import {IDeliveryFormatModel} from "../../internal/models/IDeliveryActionModel.js";
import {FormatQualifier} from "../../qualifiers/format/FormatQualifier.js";
import {FlagQualifier} from "../../qualifiers/flag/FlagQualifier.js";

/**
 * @memberOf Actions.Delivery
 * @extends {Actions.Delivery.DeliveryAction}
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryFormat extends DeliveryAction {
  protected _actionModel: IDeliveryFormatModel = {};

  constructor(deliveryKey?: string, deliveryType?: FormatQualifier|string|number) {
    super(deliveryKey, deliveryType);
    this._actionModel.actionType = 'format';

    if( deliveryType instanceof FormatQualifier){
      this._actionModel.formatType = deliveryType.getValue();
    }else {
      this._actionModel.formatType = deliveryType;
    }

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
  progressive(mode?: FlagQualifier | string): this {
    if (mode instanceof ProgressiveQualifier) {
      this._actionModel.progressive = {mode: mode.getMode()};
      this.addFlag(mode);
    } else {
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
