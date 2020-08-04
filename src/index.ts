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
