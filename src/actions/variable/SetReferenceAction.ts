import VariableAction from "./VariableAction";

class SetReferenceAction extends VariableAction {
  constructor(name: string, value: string) {
    super(name, `ref:!${value}!`);
  }
}

export default SetReferenceAction;
