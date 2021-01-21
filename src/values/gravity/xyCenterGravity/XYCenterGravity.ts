import {GravityQualifier} from "../GravityQualifier";

/**
 * @description The class for the XYCenter Gravity builder
 * @memberOf Values.Gravity
 * @extends {Values.Gravity.GravityQualifier}
 */
class XYCenterGravity extends GravityQualifier {
  constructor() {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super('xy_center');
  }
}


export {XYCenterGravity};
