/**
 * Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 */

import crop from "./ResizeActions/CropAction";
import fill from "./ResizeActions/advancedResizeActions/FillAction";
import scale from "./ResizeActions/ScaleAction";
import fit from "./ResizeActions/simpleResizeActions/FitAction";
import pad from "./ResizeActions/pad/PadAction";
import limitFill from "./ResizeActions/advancedResizeActions/LimitFillAction";
import limitFit from "./ResizeActions/simpleResizeActions/LimitFitAction";
import minimumPad from "./ResizeActions/pad/MinimumPadAction";
import minimumFit from "./ResizeActions/simpleResizeActions/MinimumFitAction";
import fillPad from "./ResizeActions/pad/FillPadAction";
import thumbnail from "./ResizeActions/ThumbnailAction";
import imaggaCrop from "./ResizeActions/simpleResizeActions/ImaggaCropAction";
import imaggaScale from "./ResizeActions/simpleResizeActions/ImaggaScaleAction";
import limitPad from "./ResizeActions/pad/LimitPadAction";


export {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad};
export default {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad};
