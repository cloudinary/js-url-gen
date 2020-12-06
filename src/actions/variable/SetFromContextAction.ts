import VariableAction from "./VariableAction";


/**
 * @class SetFromContextAction
 * @augments VariableAction
 * @description Sets a user-defined variable from contextual metadata.
 */
class SetFromContextAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `ctx:!${value}!`);
  }
}

export default SetFromContextAction;
