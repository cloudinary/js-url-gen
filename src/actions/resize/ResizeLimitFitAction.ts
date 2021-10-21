import {ResizeSimpleAction} from "./ResizeSimpleAction.js";

/**
 * @description Defines a fitting resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeLimitFitAction extends ResizeSimpleAction {
  protected get _actionType(): string{
    return 'limitFit';
  }
}

export {ResizeLimitFitAction};
