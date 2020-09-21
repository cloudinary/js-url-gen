import Action from "../Action";
import ImageSource from "../../values/sources/ImageSource";
import {Layer, imageLayer} from "../overlay/Overlay";
import {Flag} from "../../values/flag/Flag";

class CutterAction extends Action {
  private layer: Layer;
  constructor(source: ImageSource) {
    super();
    this.layer = imageLayer(source).setLayerType('l');
    // `modifications` is the action used as the last component of a layer
    // we can leverage that to add more things to it
    this.layer.modifications.addFlag(new Flag('cutter'));
  }

  toString(): string {
    return this.layer.toString();
  }
}


export default CutterAction;
