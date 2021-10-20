import {ResizeSimpleAction} from "./ResizeSimpleAction.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";

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
      return this.addQualifier(new Qualifier('g', gravity));
    }

    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
