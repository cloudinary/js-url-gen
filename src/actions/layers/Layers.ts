import {ILayerAction} from "./ILayerAction";
import Action from "../Action";
// TODO - BundleSize Warning - we include all the Sources code within Layers.
import Source, {ImageSource} from "./Source";


class Layer extends Action implements ILayerAction {
  source: ImageSource; // TODO this should not be any
  // TODO this needs to accept other types of sources
  constructor(transformable: ImageSource) {
    super();
    this.source = transformable;
  }

  toString(){
    return `l_${this.source.asset.publicID}/${this.source.toString()}/fl_layer_apply`;
  }
}

/**
 * @param imageSource
 * @param Position
 * @param BlendMode
 * @return {Layer}
 */
function imageLayer(imageSource: ImageSource, Position?:any, BlendMode?:any): Layer {
  // TODO this needs to accept other types of sources
  return new Layer(imageSource);
}


export {imageLayer, Source};
export default {imageLayer, Source};

