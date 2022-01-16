import {IActionModel} from "./IActionModel.js";
import {actionToJson} from "./actionToJson.js";

export class ActionModel {
  protected _actionModel: IActionModel;

  constructor() {
    this._actionModel = {};
  }

  toJson(): typeof actionToJson {
    return actionToJson.apply(this);
  }
}
