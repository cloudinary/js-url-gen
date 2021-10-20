import ResizeSimpleAction from "./ResizeSimpleAction.js";
import {GravityQualifier} from "../../qualifiers/gravity/GravityQualifier.js";
import {IResizeSimpleActionModel} from "../../internal/IResizeSimpleActionModel";

/**
 * @description Defines a scaling resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ScaleAction extends ResizeSimpleAction {
  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   * @return {this}
   */
  liquidRescaling(): this {
    return this.addQualifier(new GravityQualifier('liquid'));
  }

  fromJson(actionModel: IResizeSimpleActionModel): ScaleAction {
    const result = new ScaleAction(actionModel.actionType, actionModel.dimensions.width, actionModel.dimensions.height);
    actionModel.relative && result.relative();
    actionModel.regionRelative && result.regionRelative();

    return result;
  }
}


export {ScaleAction};
