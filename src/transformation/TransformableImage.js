import Transformation from "./Transformation";

/**
 * PSEUDO IMPLEMENTATION
 * @param {{}} config
 * @param {{}} transformation
 * @param {{}} assetDescriptor
 */
function cloudinaryURL(config, transformation, assetDescriptor) {
  return '';
}

/**
 * @augments Transformation
 */
class TransformableImage extends Transformation {
  /**
   * once for all future instances
   * @param {*} transformableImageConfig
   */
  static setConfig(transformableImageConfig) {

  }

  /**
   * for current instance
   * @param {*} transformableImageConfig
   */
  setConfig(transformableImageConfig) {
    this.config = transformableImageConfig;
    return this;
  }

  setImageID() {
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
  getUrlForImage(publicID) {
    // transformationString
    // TODO We can cache this per instance, this way the user can create 10000 URLS with the same transformation for free
    let transformation = this.toString(); // Get transformation string, since this is a transformation instance

    return cloudinaryURL(this.config, transformation, {
      publicID: publicID,
      deliveryType: 'upload/image' // hardcoded in this class, user doesn't need to know
    });
  }
}


export default TransformableImage;
