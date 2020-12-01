import Action from "../../actions/Action";
import Qualifier from "../../qualifier/Qualifier";
import {GravityQualifier} from "../gravity/GravityQualifier";

/**
 * @description
 * Defines the position of a layer: overlay or underlay.</br>
 * Even though Position is technically an action qualifier, it implements exactly the same functionality as an action.</br>
 * This is true because Position is compounded of multiple qualifiers</br>
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_and_text_overlays|Applying overlays to images} | {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_image_overlays|Applying overlays to videos}
 *
 * @class PositionQualifier
 * @augments Action
 */
class PositionQualifier extends Action {
  constructor(positionDirection:string) {
    super();
    this.addQualifier(new GravityQualifier(positionDirection));
  }

  /**
   * @description Set the X Offset
   * @param {number} offsetX
   * @return {this}
   */
  x(offsetX:number): this{
    return this.addQualifier(new Qualifier('x', offsetX));
  }

  /**
   * @description Set the Y Offset
   * @param {number} offsetY
   * @return {this}
   */
  y(offsetY:number): this{
    return this.addQualifier(new Qualifier('y', offsetY));
  }
}

export {PositionQualifier};
