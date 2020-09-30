import VariableAction from "./VariableAction";

/**
 * @class SetAction
 * @augments Action
 * @@doc
 * @description A class that sets variable from reference.
 */
class SetReferenceAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `ref:!${value}!`);
  }
}

export default SetReferenceAction;
