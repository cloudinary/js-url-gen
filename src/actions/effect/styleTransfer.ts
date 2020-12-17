import {Overlay} from "../overlay";
import {LayerAction} from "../layer/LayerAction";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Action} from "../../internal/Action";
import {ImageSource} from "../../values/source/sourceTypes/ImageSource";


/**
 * @description - This Action, while belonging to Effect, acts as a modified overlay.
 *                The class implements the Builder pattern, where strength() and preserveColor()
 *                are applied to the instance, and toString() is responsible to combining them into the right result.
 * @augments Action
 */
class StyleTransfer extends Action {
  // This action is actually a layer.
  private imgLayer: LayerAction;
  // This action is built from effectStrength and preserve
  private effectStrength : number;
  private preserve: boolean;


  /**
   * The Image Source used to create the style transfer,
   * Use the Image Source builder to quickly create a source:
   * </br>Import: {@link Values.Source|import Sources from '@cloudinary/base/values/sources';}
   * </br>Create: `Sources.image('dog')`
   * @param {ImageSource} imageSource
   */
  constructor(imageSource: ImageSource) {
    super();
    this.imgLayer = Overlay.source(imageSource);
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
    const effectValue = new QualifierValue([NAME, PRES, STRENGTH]);


    // this.imgLayer.modifications.addQualifier(new Qualifier('e', effectValue));
    this.imgLayer.setLayerType('l');
    return this.imgLayer.toString();
  }
}



export {StyleTransfer};
