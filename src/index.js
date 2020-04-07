import cloudinaryURL from "./url/cloudinaryURL";
import Transformation from "./transformation/Transformation";
import Resize from './actions/Resize';

/**
 * @description a class
 */
class Base {
  constructor() {
    console.log("TADAAAAA, now you see me now don't");
    console.log('More magic');
  }
}

let obj = {};
// let foo = {...obj}

export {cloudinaryURL, Transformation, Base, Resize};
