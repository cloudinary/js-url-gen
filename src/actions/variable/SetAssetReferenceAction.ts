import VariableAction from "./VariableAction";

/**
 * @description Sets a user-defined variable from a file reference.
 * @memberOf Actions.Variable
 * @extends {Variable.VariableAction}
 */
class SetAssetReferenceAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `ref:!${value}!`);
  }
}

export default SetAssetReferenceAction;
