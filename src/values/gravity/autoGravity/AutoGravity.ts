import {AutoFocus} from "../qualifiers/autoFocus/AutoFocus";
import {GravityQualifier} from "../GravityQualifier";

class AutoGravity extends GravityQualifier {
  constructor() {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super('auto');
  }

  autoFocus(...AutoFocusObjects: AutoFocus[]): this {
    this.addValue(AutoFocusObjects);
    return this;
  }
}


export {AutoGravity};
