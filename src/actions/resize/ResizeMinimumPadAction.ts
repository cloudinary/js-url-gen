import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {ResizePadAction} from "./ResizePadAction.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";

/**
 * @description Defines an advanced resize with minimum padding.
 * @extends Actions.Resize.ResizePadAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeMinimumPadAction<GravityType extends IGravity> extends ResizePadAction<GravityType> {
  static fromJson(actionModel: IActionModel): ResizePadAction<CompassGravity> {
    return super.fromJson.apply(this, [actionModel]);
  }
}


export {ResizeMinimumPadAction};
