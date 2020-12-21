import {Action} from "../../internal/Action";
import {PositionQualifier} from "../../values/position/PositionQualifier";
import {ImageSource} from "../../values/source/sourceTypes/ImageSource";
import {Position} from "../../values/position";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Trims pixels according to the transparency levels of a given overlay image.
 * Wherever the overlay image is transparent, the original is shown, and wherever the overlay is opaque, the resulting image is transparent.
 * @augments Action
 */
class CutByImage extends Action {
  private source: ImageSource;
  private _position: Position;
  constructor(source: ImageSource) {
    super();
    this.source = source;
  }

  /**
   * @description Defines the position of the layer.
   * @param {Values.Position} position The position of the overlay with respect to the base image.
   * @return {this}
   */
  position(position:PositionQualifier): this {
    this._position = position;
    return this;
  }

  toString(): string {
    const close = new Action();
    // Our implementation prevents two `fl` keys in the same URL component
    // We also don't want to concatenate flags (fl_layer_apply.cutter)
    // We use this trick to create two separate flags
    close.addQualifier(new Qualifier('fl', 'cutter,fl_layer_apply'));

    this._position?.qualifiers.forEach((qualifier) => {
      close.addQualifier(qualifier);
    });

    return [
      this.source.getOpenSourceString('l'),
      this.source.getTransformation(),
      close
    ].filter((a) => a).join('/');
  }
}


export default CutByImage;
