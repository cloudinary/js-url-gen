import VariableAction from "./VariableAction";

/**
 * @class SetAction
 * @augments Action
 * @@description A class that sets variable from metadata.
 */
class SetFromMetadataAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `md:!${value}!`);
  }
}

export default SetFromMetadataAction;
