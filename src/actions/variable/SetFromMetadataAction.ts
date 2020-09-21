import VariableAction from "./VariableAction";

class SetFromMetadataAction extends VariableAction {
  constructor(name: string, value: string) {
    super(name, `md:!${value}!`);
  }
}

export default SetFromMetadataAction;
