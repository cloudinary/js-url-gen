/**
 * Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 */

import crop from "./ResizeActions/CropAction";
import fill from "./ResizeActions/FillAction";
import scale from "./ResizeActions/ScaleAction";
import fit from "./ResizeActions/FitAction";
import pad from "./ResizeActions/PadAction";
import limitFill from "./ResizeActions/LimitFillAction";
import limitFit from "./ResizeActions/LimitFitAction";
import minimumPad from "./ResizeActions/MinimumPadAction";
import minimumFit from "./ResizeActions/MinimumFitAction";
import fillPad from "./ResizeActions/FillPadAction";
import thumbnail from "./ResizeActions/ThumbnailAction";
import imaggaCrop from "./ResizeActions/ImaggaCropAction";
import imaggaScale from "./ResizeActions/ImaggaScaleAction";
import limitPad from "./ResizeActions/LimitPadAction";


export {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad};
export default {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad};
