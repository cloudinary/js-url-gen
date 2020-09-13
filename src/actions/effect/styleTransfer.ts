import ImageSource from '../../params/sources/ImageSource';
import {imageLayer, Layer} from "../overlay/Overlay";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
import {IAction} from "../../interfaces/IAction";
import Action from "../Action";


/**
 * @class StyleTransfer
 * @implements IAction
 *
 * @description - This Action, while belonging to Effect, acts as a modified overlay.
 *                The class implements the Builder pattern, where strength() and preserveColor()
 *                are applied to the instance, and toString() is responsible to combining them into the right result.
 *
 */
class StyleTransfer extends Action implements IAction {
  // This action is actually a layer.
  private imgLayer: Layer;
  // This action is built from effectStrength and preserve
  private effectStrength : number;
  private preserve: boolean;


  /**
   * The Image Source used to create the style transfer,
   * Use the Image Source builder to quickly create a source:
   * Import: `import {image} from '@cloudinary/base/params/sources';`
   * Create: `image('dog')`
   * @param {ImageSource} imageSource
   */
  constructor(imageSource: ImageSource) {
    super();
    this.imgLayer = imageLayer(imageSource);
  }


  /**
   * Determines the strength in which the styleTransfer is applied.
   * @param {number} [effectStrength] - The strength level, 1-100, default: 100
   */
  strength(effectStrength:number = null):this {
    this.effectStrength = effectStrength;
    return this;
  }


  /**
   * More aggressively preserves the colors of the the target photo,
   * Can be used with `strength()` to enhance this behaviour
   */
  preserveColor():this {
    this.preserve = true;
    return this;
  }

  /**
   * The `build` phase of the Action, used internally to concat all the options received into a single string.
   * The result of this method is the toString() of the imageLayer provided in the constructor.
   */
  toString():string {
    const NAME = 'style_transfer';
    const PRES = this.preserve ? 'preserve_color' : null;
    const STRENGTH = this.effectStrength;
    const effectValue = new ParamValue([NAME, PRES, STRENGTH]);


    this.imgLayer.modifications.addParam(new Param('e', effectValue));
    this.imgLayer.setLayerType('l');
    return this.imgLayer.toString();
  }
}

/**
 * @description Applies a complex deep learning neural network algorithm that extracts artistic styles from a source image and applies them to the content of a target photograph.<br/>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/neural_artwork_style_transfer_addon | Neural Artwork Style Transfer}
 * @memberOf Actions.Effect
 * @param {ImageSource} imageSource `import {image} from '@cloudinary/base/params/sources`
 */
function styleTransfer(imageSource: ImageSource): StyleTransfer {
  return new StyleTransfer(imageSource);
}

export default styleTransfer;
