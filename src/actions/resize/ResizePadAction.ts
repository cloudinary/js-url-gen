import {BackgroundQualifier} from "../../qualifiers/background/shared/base/BackgroundQualifier.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {ResizeAdvancedAction} from "./ResizeAdvancedAction.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";

/**
 * @description Defines an advanced resize with padding.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizePadAction<GravityType extends IGravity> extends ResizeAdvancedAction {
  /**
   * @description Sets the background.
   * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier): this {
    this._actionModel.background = backgroundQualifier.qualifierValue;
    return this.addQualifier(backgroundQualifier);
  }

  /**
   * @description Horizontal position for custom-coordinates based padding.
   * @param {number} x The x position.
   */
  offsetX(x: number | string): this {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based padding
   * @param {number} y The y position.
   */
  offsetY(y: number | string): this {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier('y', y));
  }

  static fromJson(actionModel: IActionModel): ResizePadAction<CompassGravity> {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.background && result.background(new BackgroundQualifier(actionModel.background as string));
    actionModel.x && result.offsetX(actionModel.x);
    actionModel.y && result.offsetY(actionModel.y);
    actionModel.zoom && result.zoom(actionModel.zoom as string);

    return result;
  }
}


export {ResizePadAction};
