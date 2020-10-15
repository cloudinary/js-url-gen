import Action from "../Action";
import {ImageSource} from "../../values/sources/sourceTypes/ImageSource";
import {imageLayer} from "../overlay/Overlay";
import {Flag} from "../../values/flag/Flag";
import {LayerAction} from "../overlay/LayerAction";
import {PositionQualifier} from "../../values/position/PositionQualifier";

/**
 * @@doc
 * @description A class for Cutter
 * @class CutterAction
 * @augments Action
 */
class CutterAction extends Action {
  private layer: LayerAction;
  constructor(source: ImageSource) {
    super();
    this.layer = imageLayer(source).setLayerType('l');
    // `modifications` is the action used as the last component of a layer
    // we can leverage that to add more things to it
    this.layer.modifications.addFlag(new Flag('cutter'));
  }

  /**
   * @description Defines the position of the layer.
   * @param {Values.Position} position The position of the overlay with respect to the base image.
   */
  position(position?:PositionQualifier): this{
    this.layer.position = position;
    return this;
  }

  toString(): string {
    return this.layer.toString();
  }
}


export default CutterAction;
