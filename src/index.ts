/**
 * A namespace for all Sources</br>
 * TODO This needs a proper file, maybe in a future ./Sources.ts?
 * @namespace Sources
 */

/**
 * A namespace for all Types</br>
 * This namespace contains all non primitive types used in the SDK.
 * Types are not concrete implementations, but rather instructions for acceptable input
 * TODO This needs a proper file
 * @namespace Types
 */

// Transformations
import Transformation from "./transformation/Transformation";
import cloudinaryURL from "./url/cloudinaryURL";
import TransformableImage from "./transformation/TransformableImage";

// Actions
import Actions from './actions/Actions';


/**
 * @description a class
 */
class Base {
  constructor() {
  }
}

export {cloudinaryURL, Transformation, TransformableImage, Base, Actions};
export default {cloudinaryURL, Transformation, Base, Actions};
