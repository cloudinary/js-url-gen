import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {Action} from "../../internal/Action.js";
import {toFloatAsString} from "../../internal/utils/toFloatAsString.js";
import {AspectRatioQualifierValue} from "../../qualifiers/aspectRatio/AspectRatioQualifierValue.js";
import {regionRelative, relative} from "../../qualifiers/flag.js";
import {FlagQualifier} from "../../qualifiers/flag/FlagQualifier.js";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier.js";
import {AspectRatioType} from "../../types/types.js";
import {IResizeSimpleActionModel} from "../../internal/models/IResizeSimpleActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {ACTION_TYPE_TO_CROP_MODE_MAP, CROP_MODE_TO_ACTION_TYPE_MAP} from "../../internal/internalConstants.js";

/**
 * @description Defines a resize using width and height.
 * @extends SDK.Action
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeSimpleAction extends Action {
  protected _actionModel: IResizeSimpleActionModel = {dimensions: {}};

  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType: string, cropWidth: number | string, cropHeight?: number | string) {
    super();

    this._actionModel.actionType = CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
    this.addQualifier(new Qualifier('c', cropType));
    cropWidth && this.width(cropWidth);
    cropHeight && this.height(cropHeight);
  }

  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x: number | string | ExpressionQualifier): this {
    this._actionModel.dimensions.height = x as string;
    return this.addQualifier(new Qualifier('h', x));
  }

  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x: number | string | ExpressionQualifier): this {
    this._actionModel.dimensions.width = x as string;
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * @description Sets the aspect ratio of the asset.
   * For a list of supported types see {@link Qualifiers.AspectRatio |
    * AspectRatio values}
   * @param {AspectRatioType|number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   * @return {this}
   */
  aspectRatio(ratio: AspectRatioType | AspectRatioQualifierValue | FlagQualifier | number | string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    if (ratio instanceof AspectRatioQualifierValue) {
      return this.addQualifier(new Qualifier('ar', ratio));
    }

    if (typeof ratio === 'number' || typeof ratio === 'string') {
      return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
    }

    if (ratio instanceof FlagQualifier) {
      return this.addFlag(ratio);
    }
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
   * @return {this}
   */
  relative(): this {
    this._actionModel.relative = true;
    return this.addFlag(relative());
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
   * @return {this}
   */
  regionRelative(): this {
    this._actionModel.regionRelative = true;
    return this.addFlag(regionRelative());
  }

  static fromJson(actionModel: IActionModel): ResizeSimpleAction {
    const {actionType, dimensions, relative, regionRelative} = (actionModel as IResizeSimpleActionModel);
    const {width, height} = dimensions;
    const cropMode = ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
    const result = new ResizeSimpleAction(cropMode, width, height);
    relative && result.relative();
    regionRelative && result.regionRelative();

    return result as ResizeSimpleAction;
  }
}

export {ResizeSimpleAction};
