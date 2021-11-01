import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {
  ColorSpaceModeType,
  IDeliveryColorSpaceActionModel
} from "../../internal/models/IDeliveryColorSpaceActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {ColorSpace} from "../../qualifiers/colorSpace.js";
import {ColorSpaceType} from "../../types/types.js";
import {
  COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP,
  COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP
} from "../../internal/internalConstants.js";

/**
 * @description Specifies the color space to use.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryColorSpaceAction extends Action {
  protected _actionModel: IDeliveryColorSpaceActionModel = {};

  /**
   * Create a new DeliveryColorSpaceAction
   * @param mode
   */
  constructor(mode: ColorSpaceType) {
    super();

    this._actionModel = {
      actionType: 'colorSpace',
      mode: (COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP[mode] || mode) as ColorSpaceModeType
    };

    this.addQualifier(new Qualifier('cs', ColorSpace[mode] ? ColorSpace[mode]() : mode));
  }

  static fromJson(actionModel: IActionModel): DeliveryColorSpaceAction {
    const {mode} = (actionModel as IDeliveryColorSpaceActionModel);
    const colorSpaceMode = COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP[mode] || mode;

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    return new this(colorSpaceMode);
  }
}

export {DeliveryColorSpaceAction};
