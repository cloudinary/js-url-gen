import {ILayerAction} from "./ILayerAction";
import Action from "../Action";
// TODO - BundleSize Warning - we include all the Sources code within Layers.
import Source, {ImageSource} from "./Source";
import {Position} from "../../params/position/Position";
import Param from "../../parameters/Param";


class Layer extends Action implements ILayerAction {
  source: ImageSource; // TODO this needs to accept other types of sources
  position:Position;
  constructor(transformable: ImageSource, position:Position) {
    super();
    this.source = transformable;
    this.position = position;
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
 * @param BlendMode
 * return {Layer}
 */
function imageLayer(imageSource: ImageSource, position?:Position, BlendMode?:any): Layer {
  // TODO this needs to accept other types of sources
  return new Layer(imageSource, position);
}


export {imageLayer, Source};
export default {imageLayer, Source};

