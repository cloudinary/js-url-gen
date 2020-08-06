import '../../interfaces/IAction';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

class Max extends Action implements IAction {

}

/**
 * @memberOf Actions.RoundCorners
 * @description Generates an asset with a circular crop using the 'max' radius value.
 * @return {Max}
 */
function max():Max {
  return new Max();
}

export default max;
