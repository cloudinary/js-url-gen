interface IActionModel {
  actionType?: string;
  [x: string]: unknown;
}

/**
 * Validates obj is an instance of IActionModel
 * @param obj
 */
function isIActionModel(obj: unknown): obj is IActionModel{
  const actionModel = obj as IActionModel;
  return ('actionType' in actionModel);
}

export {IActionModel, isIActionModel};