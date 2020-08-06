import {ILayerAction} from "./ILayerAction";
import Action from "../Action";
// TODO - BundleSize Warning - we include all the Sources code within Layers.
import Source, {ImageSource} from "./Source";
import {Position} from "../../params/position/Position";
import Param from "../../parameters/Param";
import {BlendMode} from "../../params/blendMode/BlendMode";


class Layer extends Action implements ILayerAction {
  source: ImageSource; // TODO this needs to accept other types of sources
  position:Position;
  blendMode: BlendMode;
  constructor(transformable: ImageSource, position:Position, blendMode: BlendMode) {
    super();
    this.source = transformable;
    this.position = position;
    this.blendMode = blendMode;
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * The opening of a layer
   */
  openLayer() {
    return `l_${this.source.asset.publicID}`;
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * Transformations conducted on the image in the layer
   */
  layerTransformation() {
    return this.source.toString();
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * Closing of the layer, includes Position as well
   */
  closeLayer() {
    const bit = new Action().addParam(new Param('fl', 'layer_apply'));

    this.position?.params.forEach((param) => {
      bit.addParam(param);
    });

    this.blendMode?.params.forEach((param) => {
      bit.addParam(param);
    });
    return bit;
  }

  toString(){
    // Since layerTransformation can be empty, we filter out empty strings.
    return [this.openLayer(), this.layerTransformation(), this.closeLayer()].filter((a) => a).join('/');
  }
}


/**
 *
 * @param imageSource
 * @param position
 * @param blendMode
 * return {Layer}
 */
function imageLayer(imageSource: ImageSource, position?:Position, blendMode?:BlendMode): Layer {
  // TODO this needs to accept other types of sources
  return new Layer(imageSource, position, blendMode);
}


export {imageLayer, Source};
export default {imageLayer, Source};

