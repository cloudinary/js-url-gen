import ResizeAction from "./ResizeAction";

/**
 * @memberOf Types
 * @name resizeActionFactory
 * @description
 * This is the type for all resize action methods (scale, fit, crop, etc.).
 */
export type resizeActionFactory = (width?:number|string, height?:number|string) => ResizeAction

// export interface IResizeAction extends IAction{
//   aspectRatio(ratio:number|string):IResizeAction;
//   gravity(type:GravityParam):IResizeAction;
//   height(x:number|string):IResizeAction;
//   width(x:number|string):IResizeAction;
// }
