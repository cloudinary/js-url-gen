import RoundCornersAction from "./RoundCornersAction";


/**
 * @description Generates an asset with a circular crop using the 'max' radius value.
 * @memberOf Actions.RoundCorners
 * @return {RoundCornersAction}
 */
function max():RoundCornersAction {
  return new RoundCornersAction().max();
}

export default max;
