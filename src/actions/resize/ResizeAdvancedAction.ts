import ResizeSimpleAction from "./ResizeSimpleAction";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier";

export type IShortenGravity = 'g_auto' | 'g_north' | 'g_center' | 'g_east' | 'g_west' | 'g_south' | 'g_north_west' | 'g_south_east' | 'g_south_west' | 'g_north_east';

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
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
