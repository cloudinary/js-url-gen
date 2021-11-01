import {ResizeSimpleAction} from "./ResizeSimpleAction.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

export type IShortenGravity = 'auto' | 'north' | 'center' | 'east' | 'west' | 'south' | 'north_west' | 'south_east' | 'south_west' | 'north_east';

/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity: IGravity | IShortenGravity): this {
    if(typeof gravity === "string") {
      this._actionModel.gravity = gravity;
      return this.addQualifier(new Qualifier('g', gravity));
    }

    this._actionModel.gravity = gravity.qualifierValue;

    return this.addQualifier(gravity);
  }

  static fromJson(actionModel: IActionModel): ResizeAdvancedAction {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.gravity && result.gravity(actionModel.gravity);

    return result;
  }
}

export {ResizeAdvancedAction};
