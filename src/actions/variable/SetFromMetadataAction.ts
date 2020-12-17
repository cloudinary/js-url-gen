import VariableAction from "./VariableAction";

/**
 * @augments VariableAction
 * @description Sets a user-defined variable from structured metadata.
 */
class SetFromMetadataAction extends VariableAction {
  constructor(name: string, value: string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(name, `md:!${value}!`);
  }
}

export default SetFromMetadataAction;
