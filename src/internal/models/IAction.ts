import {Action} from "../Action.js";
import {IErrorObject} from "./IErrorObject.js";

type IAction = Action | IErrorObject;

export {IAction};