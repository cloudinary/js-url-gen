import VariableAction from "./VariableAction";

class SetFromContextAction extends VariableAction {
  constructor(name: string, value: string) {
    super(name, `ctx:!${value}!`);
  }
}

export default SetFromContextAction;
