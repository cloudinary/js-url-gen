import {IResizeSimpleActionModel} from "./IResizeSimpleActionModel.js";

interface IResizeAdvancedActionModel extends IResizeSimpleActionModel{
  gravity: string;
}

export {IResizeAdvancedActionModel};