/**
 * Rotates or flips an image or video by the specified number of degrees, or automatically (images only) according to its orientation or available metadata.
 * @memberOf Actions
 * @namespace Rotate
 */


import byAngle from "./rotate/byAngle";
import mode from "./rotate/mode";





const Rotate = {byAngle, mode};
export {Rotate, byAngle, mode};
