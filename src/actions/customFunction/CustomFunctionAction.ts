import Action from "../Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";
import base64Encode from "../../utils/base64Encode";

class CustomFunctionAction extends Action {
  private mode: 'wasm' | 'remote' | string;
  private pre?: 'pre';
  readonly fn:string;
  private encodedFn: string;

  constructor(fn: string) {
    super();
    this.fn = fn;
  }

  private encodeCustomFunctionString(fn:string):string {
    return base64Encode(fn);
  }

  asWasm(): this {
    this.mode = 'wasm';
    return this;
  }

  asRemote(): this {
    this.mode = 'remote';
    return this;
  }

  preprocess(): this {
    this.pre = 'pre';
    return this;
  }

  protected prepareParam() {
    this.encodedFn = this.fn;
    if (this.mode === 'remote') {
      this.encodedFn = this.encodeCustomFunctionString(this.fn);
    }

    return this.addParam(new Param('fn', new ParamValue([this.pre, this.mode, this.encodedFn])));
  }
}


export default CustomFunctionAction;
