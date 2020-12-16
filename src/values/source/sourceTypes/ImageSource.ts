import {BaseSource} from "../BaseSource";
import {ImageTransformation} from "../../../transformation/ImageTransformation";
import {FormatQualifier} from "../../format/FormatQualifier";

/**
 * @description Defines how to manipulate an image layer, is an instance of a {@link ImageTransformation|ImageTransformation}
 * <div class="panel panel-warning">
 *   <div class="panel-heading">Notice</div>
 *   <div class="panel-body">
 *     This class is used as a Qualifier for the asset.overlay() and asset.underlay() methods.</br>
 *     You can find regular images and videos transformations below:
 *   </div>
  *   <ul>
 *     <li>{@link SDK.ImageTransformation| Image Transformations}</li>
 *     <li>{@link SDK.VideoTransformation| Video Transformations}
 *   </ul>
 * </div>
 * @augments {BaseSource}
 */
class ImageSource extends BaseSource {
  readonly _publicID: string;
  private _format: FormatQualifier;

  constructor(publicID: string) {
    super();
    this._publicID = publicID;
  }

  /**
   * @description
   * Get the opening string of the overlay,
   * This method is used internally within {@link LayerAction|LayerAction}
   * @returns {string}
   */
  getOpenSourceString(): string {
    if (this._format) {
      return `${this._publicID}.${this._format.toString()}`;
    } else {
      return this._publicID;
    }
  }

  /**
   * @description
   * Apply a transformation on the image source of the layer
   * @returns {this}
   */
  transformation(t: ImageTransformation): this {
    this._transformation = t;
    return this;
  }

  /**
   * @description
   * Apply a format for the image source of the layer
   * @returns {this}
   */
  format(format: FormatQualifier): this {
    this._format = format;
    return this;
  }
}

export {ImageSource};
