/**
 * Determines how to crop, scale, and/or zoom the delivered asset according to the requested dimensions.
 * @memberOf Actions
 * @namespace Resize
 */

import crop from './crop';
import fill from './fill';
import scale from './scale';
import fit from './fit';
import pad from './pad';
import limitFill from './limitFill';
import limitFit from './limitFit';
import minimumPad from './minimumPad';
import thumbnail from './thumbnail';
import minimumFit from './minimumFit';
import limitPad from './limitPad';
import fillPad from './fillPad';
import imaggaCrop from './imaggaCrop';
import imaggaScale from './imaggaScale';

import ResizeAction from './ResizeAction';

export {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad, ResizeAction};

export default {imaggaScale, imaggaCrop, crop, fill, scale, minimumPad, fit, pad, limitFit, thumbnail, limitFill, minimumFit, limitPad, fillPad, ResizeAction};
