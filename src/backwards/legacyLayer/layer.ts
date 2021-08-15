import {snakeCase} from "../utils/snakeCase";

class Layer {
  protected options: {
    url?: any;
    text?: string;
    fontAntialiasing?: string;
    fontHinting?: string;
    lineSpacing?: string;
    letterSpacing?: string;
    stroke?: string;
    textAlign?: string;
    textDecoration?: string;
    fontStyle?: string;
    fontWeight?: string;
    fontSize?: string | number;
    fontFamily?: string;
    format?: any;
    publicId?: string;
    type?: string;
    resourceType?: string;
    key?: string;
  };
  /**
   * Layer
   * @constructor Layer
   * @param {Object} options - layer parameters
   */
  constructor(options?:{}) {
    this.options = {};
    if (options != null) {
      ["resourceType", "type", "publicId", "format"].forEach((key) => {
        var ref;
        // @ts-ignore
        return this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }
  }

  resourceType(value:string) {
    this.options.resourceType = value;
    return this;
  }

  type(value:string) {
    this.options.type = value;
    return this;
  }

  publicId(value:string) {
    this.options.publicId = value;
    return this;
  }

  /**
   * Get the public ID, formatted for layer parameter
   * @function Layer#getPublicId
   * @return {String} public ID
   */
  getPublicId() {
    var ref;
    return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
  }

  /**
   * Get the public ID, with format if present
   * @function Layer#getFullPublicId
   * @return {String} public ID
   */
  getFullPublicId() {
    if (this.options.format != null) {
      return this.getPublicId() + "." + this.options.format;
    } else {
      return this.getPublicId();
    }
  }

  format(value:any): this | void {
    this.options.format = value;
    return this;
  }

  /**
   * generate the string representation of the layer
   * @function Layer#toString
   */
  toString() {
    let components:string[]=[];
    if (this.options.publicId == null) {
      throw "Must supply publicId";
    }
    if (!(this.options.resourceType === "image")) {
      components.push(this.options.resourceType);
    }
    if (!(this.options.type === "upload")) {
      components.push(this.options.type);
    }
    components.push(this.getFullPublicId());
    return components.filter(x => !!x).join(":");
  }

  clone() {
    return new Layer(this.options);
  }

}

export default Layer;
