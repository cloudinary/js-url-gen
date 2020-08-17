import '../../interfaces/IAction';
import RoundCornersAction from "./RoundCornersAction";


/**
 * @memberOf Actions.RoundCorners
 * @description Generates an asset with a circular crop using the 'max' radius value.
 * @return {RoundCornersAction}
 */
function max():RoundCornersAction {
  return new RoundCornersAction().max();
}

export default max;
