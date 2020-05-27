import Transformation from "./Transformation";
import {IBorderAction} from "../actions/border/IBorderAction";
import {IResizeAction} from "../actions/resize/IResizeAction";
import {IRoundCornersAction} from "../actions/roundCorners/IResizeAction";

/**
 * PSEUDO IMPLEMENTATION
 * @param {{}} config
 * @param {{}} transformation
 * @param {{}} assetDescriptor
 */
function cloudinaryURL(config: object, transformation: string, assetDescriptor: object) {
  return '';
}

/**
 * @augments Transformation
 */
class TransformableImage extends Transformation {
  config: object;
  /**
   * once for all future instances
   * @param {*} transformableImageConfig
   */
  static setConfig(transformableImageConfig: object) {

  }

  /**
   * @param {IBorderAction} borderAction
   */
  border(borderAction: IBorderAction) {
    return this.addAction(borderAction);
  }

  /**
   * @param {IResizeAction} resizeAction
   */
  resize(resizeAction: IResizeAction) {
    return this.addAction(resizeAction);
  }

  /**
   * @param {IRoundCornersAction} roundCornersAction
   */
  roundCorners(roundCornersAction: IRoundCornersAction) {
    return this.addAction(roundCornersAction);
  }

  /**
   * for current instance
   * @param {*} transformableImageConfig
   */
  setConfig(transformableImageConfig: object) {
    this.config = transformableImageConfig;
    return this;
  }

  setPublicID() {
    return this;
  }

  sign() {
    return this;
  }

  /**
   *
   * @param {string} publicID
   * @return {string}
   */
  getUrlForImage(publicID: string) {
    // transformationString
    // TODO We can cache this per instance, this way the user can create 10000 URLS with the same transformation for free
    let transformation:string = this.toString(); // Get transformation string, since this is a transformation instance

    return cloudinaryURL(this.config, transformation, {
      publicID: publicID,
      deliveryType: 'upload/image' // hardcoded in this class, user doesn't need to know
    });
  }
}


export default TransformableImage;
