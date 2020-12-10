import {base64Encode} from "../../internal/utils/base64Encode";
import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @class CustomFunctionAction
 */
class CustomFunctionAction extends Action {
  private mode: 'wasm' | 'remote' | string;
  protected pre?: 'pre';
  readonly fn:string;
  private encodedFn: string;

  constructor(fn: string) {
    super();
    this.fn = fn;
  }

  private encodeCustomFunctionString(fn:string):string {
    const encodedSource = base64Encode(fn)
      .replace(/\+/g, '-') // Convert '+' to '-'
      .replace(/\//g, '_') // Convert '/' to '_'
      .replace(/=+$/, ''); // Remove ending '='
    return encodedSource;
  }

  asWasm(): this {
    this.mode = 'wasm';
    return this;
  }

  asRemote(): this {
    this.mode = 'remote';
    return this;
  }

  protected prepareQualifiers():this {
    this.encodedFn = this.fn;
    if (this.mode === 'remote') {
      this.encodedFn = this.encodeCustomFunctionString(this.fn);
    }
    return this.addQualifier(new Qualifier('fn', new QualifierValue([this.pre, this.mode, this.encodedFn])));
  }
}


export default CustomFunctionAction;
