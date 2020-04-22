// Transformations
import Transformation from "./transformation/Transformation";
import cloudinaryURL from "./url/cloudinaryURL";

import TransformableImage from "./transformation/TransformableImage";
// Actions
import Actions from './actions/Actions';
import Resize, {crop} from './actions/resize/Resize';



/**
 * @description a class
 */
class Base {
  constructor() {
  }
}

export {cloudinaryURL, Transformation, Base};
