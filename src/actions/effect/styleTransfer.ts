import ImageSource from '../../params/sources/ImageSource';
import {imageLayer, Layer} from "../layers/Layers";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
import {IAction} from "../../interfaces/IAction";



class StyleTransfer implements IAction {
  imgLayer: Layer;
  private effectStrength : number;
  private preserve: boolean;
  constructor(imageSource: ImageSource) {
    this.imgLayer = imageLayer(imageSource);
  }

  strength(effectStrength:number = null):this {
    this.effectStrength = effectStrength;
    return this;
  }
  preserveColor():this {
    this.preserve = true;
    return this;
  }

  toString() {
    const NAME = 'style_transfer';
    const PRES = this.preserve ? 'preserve_color' : null;
    const STRENGTH = this.effectStrength;
    const effectValue = new ParamValue([NAME, PRES, STRENGTH]);


    this.imgLayer.modifications.addParam(new Param('e', effectValue));
    return this.imgLayer.toString();
  }
}

/**
 * @description Applies a complex deep learning neural network algorithm that extracts artistic styles from a source image and applies them to the content of a target photograph.<br/>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/neural_artwork_style_transfer_addon|Neural Artwork Style Transfer}
 * @memberOf Actions.Effect
 * @param {ImageSource} imageSource `import {image} from '@cloudinary/base/params/sources`
 */
function styleTransfer(imageSource: ImageSource): StyleTransfer {
  return new StyleTransfer(imageSource);
}

export default styleTransfer;
