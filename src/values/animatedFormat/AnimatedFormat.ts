import QualifierValue from "../../qualifier/QualifierValue";


/**
 * @@doc
 * @namespace AnimatedFormat
 * @memberOf Values
 */
class AnimatedFormat extends QualifierValue{
  /**
   * @@doc
   * @memberOf Values.AnimatedFormat
   * @return {this}
   */
  static auto(): AnimatedFormat {
    return new AnimatedFormat('auto');
  }


  /**
   * @@doc
   * @memberOf Values.AnimatedFormat
   * @return {this}
   */
  static gif(): AnimatedFormat {
    return new AnimatedFormat('gif');
  }

  /**
   * @@doc
   * @memberOf Values.AnimatedFormat
   * @return {this}
   */
  static webp(): AnimatedFormat {
    return new AnimatedFormat('webp');
  }
}

const {auto, gif, webp} = AnimatedFormat;
export {auto, gif, webp, AnimatedFormat};


