

import Action from "../Action";
import Param from "../../parameters/Param";
import {isString} from "../../utils/dataStructureUtils";

// TODO: when spec for $award_ctx:!First! is ready, implement it
// TODO: when spec for $award_ref:!First! is ready, implement it
// TODO: when spec for to_i & to_f is ready, implement it
// TODO: when spec for list_!b:b:b! is ready, implement it

class VariableAction extends Action {
  constructor(key: string, value: number | string) {
    super();
    const paramKey = `$${key}`;
    const paramValue = isString(value) ? `!${value}!` : value;
    this.addParam(new Param(paramKey, paramValue));
  }
}

export default VariableAction;
