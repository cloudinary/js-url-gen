import Action from "../Action";
import Param from "../../parameters/Param";
import {INamedTransformationAction} from "./INamedTransformationAction";

class NamedTransformationAction extends Action implements INamedTransformationAction{
  constructor(name:string) {
    super();
    this.addParam(new Param('t', name));
  }
}

/**
 *
 */
function name(name:string): NamedTransformationAction {
  return new NamedTransformationAction(name);
}


export {name};
export default {name};
