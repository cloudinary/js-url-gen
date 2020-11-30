import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @doc
 * @memberOf Values
 * @namespace RotationMode
 */
class RotationMode extends QualifierValue {
  private readonly val: string;

  constructor(val: string) {
    super();
    this.val = val;
  }

  toString() {
    return this.val;
  }

  /**
   * @description Rotate image 90 degrees clockwise only if the requested aspect ratio does not match the image's aspect ratio.
   * @memberOf Values.RotationMode
   * @return {string}
   */
  static autoRight(): RotationMode {
    return new RotationMode('auto_right');
  }

  /**
   * @description Rotate image 90 degrees counterclockwise only if the requested aspect ratio does not match the image's aspect ratio.
   * @memberOf Values.RotationMode
   * @return {string}
   */
  static autoLeft(): RotationMode {
    return new RotationMode('auto_left');
  }

  /**
   * @description Vertical mirror flip of the image.
   * @memberOf Values.RotationMode
   * @return {string}
   */
  static verticalFlip(): RotationMode {
    return new RotationMode('vflip');
  }

  /**
   * @description Horizontal mirror flip of the image.
   * @memberOf Values.RotationMode
   * @return {string}
   */
  static horizontalFlip(): RotationMode {
    return new RotationMode('hflip');
  }


  /**
   * @description By default, the image is automatically rotated according to the EXIF data stored by the camera when the image
   *                           was taken. Set the angle to 'ignore' if you do not want the image to be automatically rotated.
   * @memberOf Values.RotationMode
   * @return {string}
   */
  static ignore(): RotationMode {
    return new RotationMode('ignore');
  }
}

const {autoLeft, autoRight, horizontalFlip, ignore, verticalFlip} = RotationMode;
export {
  RotationMode,
  autoLeft,
  autoRight,
  horizontalFlip,
  ignore,
  verticalFlip
};
