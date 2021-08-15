import Layer from './layer';
import {isString} from "../../internal/utils/dataStructureUtils";
import {base64Encode} from "../../internal/utils/base64Encode";


class FetchLayer extends Layer {
  /**
   * @class FetchLayer
   * @classdesc Creates an image layer using a remote URL.
   * @param {Object|string} options - layer parameters or a url
   * @param {string} options.url the url of the image to fetch
   */
  constructor(options:any) {
    super(options);
    if (isString(options)) {
      this.options.url = options;
    } else if (options != null ? options.url : void 0) {
      this.options.url = options.url;
    }
  }

  url(url:string) {
    this.options.url = url;
    return this;
  }

  /**
   * generate the string representation of the layer
   * @function FetchLayer#toString
   * @return {String}
   */
  toString() {
    return `fetch:${base64Encode(this.options.url)}`;
  }

}

export default FetchLayer;
