import {Action} from "../../internal/Action";

/**
 * @class By3dLutAction
 * @description Creates the 3D_lut layer transformation
 * @memberOf Actions.Adjust
 * @augments {SDK.Action}
 */
class By3dLutAction extends Action {
  readonly publicId: string;
  constructor(publicId: string) {
    super();
    this.publicId = publicId;
  }

  /**
   * Returns a string representation of the action
   * @return {string}
   */
  toString(): string {
    return `l_lut:${this.publicId}/fl_layer_apply`;
  }
}

export {By3dLutAction};
