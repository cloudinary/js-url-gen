import {Action} from "../../internal/Action.js";
import {FormatQualifier} from "../../qualifiers/format/FormatQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IColorSpaceModel, IDefaultImageModel, IDensityModel, IDprModel} from "../../internal/models/IDeliveryActionModel.js";
import {DELIVERY_MODE_TO_ACTION_TYPE_MAP} from "../../internal/internalConstants.js";

/**
 * @description Qualifies the delivery of an asset.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 */
class DeliveryAction extends Action {
  protected _actionModel: IColorSpaceModel | IDprModel | IDensityModel | IDefaultImageModel= {};

  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @param {string} modelProperty internal model property
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey?: string, deliveryType?: FormatQualifier | string|number, modelProperty?: string) {
    super();
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryType;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
}

export {DeliveryAction};
