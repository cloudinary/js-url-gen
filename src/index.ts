/**
 * A namespace for all Params</br>
 * TODO This needs to be in a proper file, maybe ./Params.ts?
 * @namespace Params
 */

/**
 * A namespace for all Sources</br>
 * TODO This needs a proper file, maybe in a future ./Sources.ts?
 * @namespace Sources
 */

// Transformations
import Transformation from "./transformation/Transformation";
import cloudinaryURL from "./url/cloudinaryURL";
import TransformableImage from "./transformation/TransformableImage";

// Actions
import Actions from './actions/Actions';

import * as Color from './constants/colors/Colors';
import * as ObjectGravity from './constants/gravityObjects/GravityObjects';

/**
 * @description a class
 */
class Base {
  constructor() {
  }
}

export {cloudinaryURL, Transformation, TransformableImage, Base, Actions, Color, ObjectGravity};
export default {cloudinaryURL, Transformation, Base, Actions, Color, ObjectGravity};
