import '../../interfaces/IAction';
import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

class Max extends Action implements IAction {

}

/**
 * @return {Max}
 */
function max() {
  return new Max();
}

export default max;
