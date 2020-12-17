import {Action} from "../../internal/Action";
import {CompassGravity} from "../gravity/compassGravity/CompassGravity";
import {OCR} from "../gravity/OCR/OCR";
import {FocusOnGravity} from "../gravity/focusOnGravity/FocusOnGravity";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {tiled} from "../flag/tiled";
import {noOverflow} from "../flag/noOverflow";

/**
 * @description
 * Defines the position of a layer: overlay or underlay.</br>
 * Even though Position is technically an action qualifier, it implements exactly the same functionality as an action.</br>
 * This is true because Position is compounded of multiple qualifiers</br>
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_and_text_overlays|Applying overlays to images} | {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_image_overlays|Applying overlays to videos}
 *
 * @augments {SDK.Actions}
 */
class PositionQualifier extends Action {
  constructor() {
    super();
  }

  gravity(gravityQualifier: CompassGravity | FocusOnGravity | OCR): this {
    this.addQualifier(gravityQualifier);
    return this;
  }

  /**
   * @description Tile the overlay across your image.
   * @doc
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#tiling_overlays | Tiling overlay}
   */
  tiled(): this {
    this.addFlag(tiled());
    return this;
  }

  /**
   * @description Prevents an image or text overlay from extending a delivered image canvas beyond the dimensions of the base image
   * @doc
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#fl_no_overflow | Overflow in overlays}
   */
  allowOverflow(): this {
    this.addFlag(noOverflow());
    return this;
  }

  /**
   * @description Set the X Offset
   * @param {number} offsetX
   * @return {this}
   */
  x(offsetX:number): this{
    this.addQualifier(new Qualifier('x', offsetX));
    return this;
  }

  /**
   * @description Set the Y Offset
   * @param {number} offsetY
   * @return {this}
   */
  y(offsetY:number): this{
    this.addQualifier(new Qualifier('y', offsetY));
    return this;
  }
}

export {PositionQualifier};
