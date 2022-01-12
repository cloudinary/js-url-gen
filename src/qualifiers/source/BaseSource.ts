import {Transformation} from "../../transformation/Transformation.js";
import {ImageTransformation} from "../../transformation/ImageTransformation.js";
import {qualifierToJson} from "../../internal/models/qualifierToJson.js";
import {ISourceModel} from "../../internal/models/ISourceModel.js";
import {QualifierModel} from "../../internal/qualifier/QualifierModel.js";


/**
 * @memberOf Qualifiers.Source
 * @description An abstract class extended by all Source objects
 */
abstract class BaseSource extends QualifierModel{
  protected _transformation:Transformation;

  /**
   * @description Utility function to encode an asset publicID in an overlay
   * @protected
   * @example
   * encodeAssetPublicID('foo/bar'); // -> foo:bar
   */
  protected encodeAssetPublicID(publicID: string): string {
    return publicID.replace(/\//g, ':');
  }
  /**
   * @description
   * Apply a transformation on the image source of the layer
   * @param {SDK.ImageTransformation} t An image transformation to apply to the layer
   * @returns {this}
   */
  transformation(t: ImageTransformation): this {
    this._qualifierModel.transformation = t.toJson();
    this._transformation = t;
    return this;
  }

  /**
   * @description Returns the Transformation of the source
   * @return {SDK.Transformation}
   */
  getTransformation(): Transformation {
    return this._transformation;
  }

  abstract getOpenSourceString(layerType: 'u' | 'l'): string
}

export {BaseSource};
