import {IActionModel} from "./IActionModel.js";
import {actionToJson} from "./actionToJson.js";

export class ActionModel {
  protected _actionModel: IActionModel;
  toJson = actionToJson;

  constructor() {
    this._actionModel = {};
  }
}
