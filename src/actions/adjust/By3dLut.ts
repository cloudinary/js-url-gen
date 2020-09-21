import Action from "../Action";

class By3dLutAction extends Action {
  readonly publicId: string;
  constructor(publicId: string) {
    super();
    this.publicId = publicId;
  }

  toString(): string {
    return `l_lut:${this.publicId}/fl_layer_apply`;
  }
}

export default By3dLutAction;
