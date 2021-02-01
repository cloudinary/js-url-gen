import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Action} from "../../internal/Action";
import {ImageSource} from "../../qualifiers/source/sourceTypes/ImageSource";
import {Qualifier} from "../../internal/qualifier/Qualifier";


/**
 * @description - This Action, while belonging to Effect, acts as a modified overlay.
 *                The class implements the Builder pattern, where strength() and preserveColor()
 *                are applied to the instance, and toString() is responsible to combining them into the right result.
 * @extend {SDK.Action}
 */
class StyleTransfer extends Action {
  private imageSource: ImageSource;
  private effectStrength : number;
  private preserve: boolean;


  /**
   * The Image Source used to create the style transfer,
   * Use the Image Source builder to quickly create a source:
   * </br>Import: {@link Qualifiers.Source|import Sources from '@cloudinary/base/qualifiers/sources';}
   * </br>Create: `Source.image('dog')`
   * @param {ImageSource} imageSource
   */
  constructor(imageSource: ImageSource) {
    super();
    this.imageSource = imageSource;
  }


  /**
   * Determines the strength in which the styleTransfer is applied.
   * @param {number} [effectStrength] - The strength level, 1-100, default: 100
   * @return {this}
   */
  strength(effectStrength:number = null):this {
    this.effectStrength = effectStrength;
    return this;
  }


  /**
   * More aggressively preserves the colors of the the target photo,
   * Can be used with `strength()` to enhance this behaviour
   * @param {boolean} bool
   * @return {this}
   */
  preserveColor(bool = true):this {
    this.preserve = bool;
    return this;
  }

  /**
   * The `build` phase of the Action, used internally to concat all the options received into a single string.
   * The result of this method is the toString() of the imageLayer provided in the constructor.
   * @return {string}
   */
  toString():string {
    const NAME = 'style_transfer';
    const PRES = this.preserve ? 'preserve_color' : null;
    const STRENGTH = this.effectStrength;
    // Create the style effect
    const styleEffect = new Qualifier('e', new QualifierValue([NAME, PRES, STRENGTH]));

    // Handle the source for publicID,
    const sourceOpenString = this.imageSource.getOpenSourceString('l');

    // Handle source transformation
    const imgTx = this.imageSource.getTransformation();
    const sourceTransformation = imgTx ? imgTx.toString() : '';

    return [
      sourceOpenString,
      sourceTransformation,
      `${styleEffect},fl_layer_apply`
    ].filter((a) => a).join('/');
  }
}



export {StyleTransfer};
