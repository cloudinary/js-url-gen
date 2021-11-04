import {ResizeSimpleAction} from "./ResizeSimpleAction.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {createGravityModel} from "../../internal/models/createGravityModel.js";
import {createGravityFromModel} from "../../internal/models/createGravityFromModel.js";
import {IResizeAdvancedActionModel} from "../../internal/models/IResizeAdvancedActionModel.js";

/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends ResizeSimpleAction{
  protected _actionModel: IResizeAdvancedActionModel;

  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity: IGravity): this {
    this._actionModel.gravity = createGravityModel(gravity);
    const gravityQualifier = typeof gravity === "string" ? new Qualifier('g', gravity) : gravity;

    return this.addQualifier(gravityQualifier);
  }

  static fromJson(actionModel: IActionModel): ResizeAdvancedAction {
    const result = super.fromJson.apply(this, [actionModel]);

    if (actionModel.gravity) {
      result.gravity(createGravityFromModel(actionModel.gravity));
    }

    return result;
  }
}

export {ResizeAdvancedAction};
