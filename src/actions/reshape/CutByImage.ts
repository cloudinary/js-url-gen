import {Action} from "../../internal/Action";
import {Overlay} from "../overlay";
import {LayerAction} from "../layer/LayerAction";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import {ImageSource} from "../../values/source/sourceTypes/ImageSource";

/**
 * @description Trims pixels according to the transparency levels of a given overlay image.
 * Wherever the overlay image is transparent, the original is shown, and wherever the overlay is opaque, the resulting image is transparent.
 * @augments Action
 */
class CutByImage extends Action {
  private layer: LayerAction;
  constructor(source: ImageSource) {
    super();
    this.layer = Overlay.source(source).setLayerType('l');
    // `modifications` is the action used as the last component of a layer
    // we can leverage that to add more things to it
    // this.layer.modifications.addFlag(new FlagQualifier('cutter'));
  }

  /**
   * @description Defines the position of the layer.
   * @param {Values.Position} position The position of the overlay with respect to the base image.
   * @return {this}
   */
  position(position?:PositionQualifier): this{
    this.layer.position(position);
    return this;
  }

  toString(): string {
    return this.layer.toString();
  }
}


export default CutByImage;
