import '../../interfaces/IAction';
import RoundCornersAction from "./RoundCornersAction";

/**
 * @memberOf Actions.RoundCorners
 * @description Rounds the specified corners of an image by specifying 1-4 pixel values as follows:
 * @param {number} a
 * @param {number} [b] ;
 * @param {number} [c];
 * @param {number} [d];
 * @return {RoundCornersAction}
 */
function byRadius(a:number, b?:number, c?:number, d?:number):RoundCornersAction {
  return new RoundCornersAction().radius(a, b, c, d);
}

export default byRadius;
