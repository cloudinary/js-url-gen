import {IPositionModel} from "./IPositionModel.js";
import {Position} from "../../qualifiers/position.js";
import {createGravityFromModel} from "./createGravityFromModel.js";
import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";

/**
 * Create Position from given IPositionModel
 * @param position
 */
export function createPositionFromModel(position: IPositionModel): Position {
  const {offsetX, offsetY, tiled, allowOverflow, gravity} = position;
  const result = new Position();

  if (offsetX){
    result.offsetX(offsetX);
  }

  if (offsetY){
    result.offsetY(offsetY);
  }

  if (tiled){
    result.tiled();
  }

  if (allowOverflow != null){
    result.allowOverflow(allowOverflow);
  }

  if (gravity){
    result.gravity(createGravityFromModel(gravity) as CompassGravity);
  }

  return result;
}
