import Expression from './expression';
import Condition from './condition';
import {CONFIG_PARAMS} from './configuration';
import { cloneDeep } from '../internal/utils/cloneDeep';

/**
 * A list of keys used by the url() function.
 * @private
 */
export const URL_KEYS = [
  'accessibility',
  'api_secret',
  'auth_token',
  'cdn_subdomain',
  'cloud_name',
  'cname',
  'format',
  'placeholder',
  'private_cdn',
  'resource_type',
  'secure',
  'secure_cdn_subdomain',
  'secure_distribution',
  'shorten',
  'sign_url',
  'signature',
  'ssl_detected',
  'type',
  'url_suffix',
  'use_root_path',
  'version'
];

import {
  Param,
  ArrayParam,
  LayerParam,
  RangeParam,
  RawParam,
  TransformationParam
} from "./parameters";
import {isEmpty} from "./utils/isEmpty";
import {isFunction} from "./utils/isFunction";
import {camelCase, contains, difference, identity} from "./utils/legacyBaseUtil";
import {snakeCase} from "./utils/snakeCase";
import {isObject} from "./utils/isObject";
import {isString} from "../internal/utils/dataStructureUtils";
import Layer from "./legacyLayer/layer";
import {stringOrNumber} from "../types/types";

/**
 * Assign key, value to target, when value is not null.<br>
 *   This function mutates the target!
 * @param {object} target the object to assign the values to
 * @param {object} sources one or more objects to get values from
 * @returns {object} the target after the assignment
 */
function assignNotNull(target:{}, ...sources:object[]) {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      // @ts-ignore
      if (source[key] != null) {
        // @ts-ignore
        target[key] = source[key];
      }
    });
  });
  return target;
}

/**
 * TransformationBase
 * Depends on 'configuration', 'parameters','util'
 * @internal
 */

class TransformationBase {
  private toOptions: any;
  private otherOptions: any;
  protected chained: any;
  private setParent: (arg0: object) => this;
  private getParent: () => this;
  protected param?: (value?: any, name?: any, abbr?: any, defaultValue?: any, process?: any) => this;
  protected rawParam?: (value?: any, name?: any, abbr?: any, defaultValue?: any, process?: any) => TransformationBase;
  protected rangeParam?: (value?: any, name?: any, abbr?: any, defaultValue?: any, process?: any) => TransformationBase;
  protected arrayParam: (value?: any, name?: any, abbr?: any, sep?: string, defaultValue?: any, process?: any) => TransformationBase;
  protected transformationParam: (value?: any, name?: any, abbr?: any, sep?: string, defaultValue?: any, process?: any) => TransformationBase;
  protected layerParam: (value?: any, name?: any, abbr?: any) => TransformationBase;
  protected getValue: (name: any) => any;
  protected get: (name: any) => any;
  private remove: (name: any) => (any | null);
  private keys: () => any[];
  private toPlainObject: () => {} | { transformation: any };
  private resetTransformations: () => TransformationBase;
  chain: () => Transformation;

  /**
   * The base class for transformations.
   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
   * @class TransformationBase
   */
  constructor(options:any) {
    /** @private */
    /** @private */
    let parent:any;
    let trans: {name?:Param|RawParam|RangeParam};
    parent = void 0;
    trans = {};
    /**
     * Return an options object that can be used to create an identical Transformation
     * @function Transformation#toOptions
     * @return {Object} Returns a plain object representing this transformation
     */
    this.toOptions = (withChain:any) => {
      let opt = {};
      if(withChain == null) {
        withChain = true;
      }
      // @ts-ignore
      Object.keys(trans).forEach(key => opt[key] = trans[key].origValue);
      assignNotNull(opt, this.otherOptions);
      if (withChain && !isEmpty(this.chained)) {
        let list = this.chained.map((tr: { toOptions: () => any; }) => tr.toOptions());
        list.push(opt);
        opt = {};
        assignNotNull(opt, this.otherOptions);
        // @ts-ignore
        opt.transformation = list;
      }
      return opt;
    };
    /**
     * Set a parent for this object for chaining purposes.
     *
     * @function Transformation#setParent
     * @param {Object} object - the parent to be assigned to
     * @returns {Transformation} Returns this instance for chaining purposes.
     */
    this.setParent = (object) => {
      parent = object;
      if (object != null) {
        // @ts-ignore
        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
      }
      return this;
    };
    /**
     * Returns the parent of this object in the chain
     * @function Transformation#getParent
     * @protected
     * @return {Object} Returns the parent of this object if there is any
     */
    this.getParent =  () => {
      return parent;
    };

    // Helper methods to create parameter methods
    // These methods are defined here because they access `trans` which is
    // a private member of `TransformationBase`

    /** @protected */
    this.param = (value, name, abbr, defaultValue, process) => {
      if (process == null) {
        if (isFunction(defaultValue)) {
          process = defaultValue;
        } else {
          process = identity;
        }
      }
      // @ts-ignore
      trans[name] = new Param(name, abbr, process).set(value);
      return this;
    };
    /** @protected */
    this.rawParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      // @ts-ignore
      trans[name] = new RawParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */
    this.rangeParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      // @ts-ignore
      trans[name] = new RangeParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */
    this.arrayParam = function (value, name, abbr, sep = ":", defaultValue = [], process = undefined) {
      process = lastArgCallback(arguments);
      // @ts-ignore
      trans[name] = new ArrayParam(name, abbr, sep, process).set(value);
      return this;
    };
    /** @protected */
    this.transformationParam = function (value, name, abbr, sep = ".", defaultValue = undefined, process = undefined) {
      process = lastArgCallback(arguments);
      // @ts-ignore
      trans[name] = new TransformationParam(name, abbr, sep, process).set(value);
      return this;
    };
    this.layerParam = function (value, name, abbr) {
      // @ts-ignore
      trans[name] = new LayerParam(name, abbr).set(value);
      return this;
    };

    // End Helper methods

    /**
     * Get the value associated with the given name.
     * Get the value associated with the given name.
     * @function Transformation#getValue
     * @param {string} name - the name of the parameter
     * @return {*} the processed value associated with the given name
     * @description Use {@link get}.origValue for the value originally provided for the parameter
     */
    this.getValue = function (name) {
      // @ts-ignore
      let value = trans[name] && trans[name].value();
      return value != null ? value : this.otherOptions[name];
    };
    /**
     * Get the parameter object for the given parameter name
     * @function Transformation#get
     * @param {string} name the name of the transformation parameter
     * @returns {Param} the param object for the given name, or undefined
     */
    this.get = function (name) {
      // @ts-ignore
      return trans[name];
    };
    /**
     * Remove a transformation option from the transformation.
     * @function Transformation#remove
     * @param {string} name - the name of the option to remove
     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
     *              returned value depends on the value.
     */
    this.remove = function (name) {
      var temp;
      switch (false) {
        // @ts-ignore
        case trans[name] == null:
          // @ts-ignore
          temp = trans[name];
          // @ts-ignore
          delete trans[name];
          return temp.origValue;
        case this.otherOptions[name] == null:
          temp = this.otherOptions[name];
          delete this.otherOptions[name];
          return temp;
        default:
          return null;
      }
    };
    /**
     * Return an array of all the keys (option names) in the transformation.
     * @return {Array<string>} the keys in snakeCase format
     */
    this.keys = function () {
      var key;
      return ((function () {
        var results;
        results = [];
        for (key in trans) {
          if (key != null) {
            results.push(key.match(VAR_NAME_RE) ? key : snakeCase(key));
          }
        }
        return results;
      })()).sort();
    };
    /**
     * Returns a plain object representation of the transformation. Values are processed.
     * @function Transformation#toPlainObject
     * @return {Object} the transformation options as plain object
     */
    this.toPlainObject = function () {
      var hash, key, list;
      hash = {};
      for (key in trans) {
        // @ts-ignore
        hash[key] = trans[key].value();
        // @ts-ignore
        if (isObject(hash[key])) {
          // @ts-ignore
          hash[key] = cloneDeep(hash[key]);
        }
      }
      if (!isEmpty(this.chained)) {
        list = this.chained.map((tr: { toPlainObject: () => any; }) => tr.toPlainObject());
        list.push(hash);
        hash = {
          transformation: list
        };
      }
      return hash;
    };
    /**
     * Complete the current transformation and chain to a new one.
     * In the URL, transformations are chained together by slashes.
     * @function Transformation#chain
     * @return {Transformation} Returns this transformation for chaining
     * @example
     * var tr = cloudinary.Transformation.new();
     * tr.width(10).crop('fit').chain().angle(15).serialize()
     * // produces "c_fit,w_10/a_15"
     */
    this.chain = function () {
      var names, tr;
      names = Object.getOwnPropertyNames(trans);
      if (names.length !== 0) {
        tr = new this.constructor(this.toOptions(false));
        this.resetTransformations();
        this.chained.push(tr);
      }
      return this;
    };
    this.resetTransformations = function () {
      trans = {};
      return this;
    };
    this.otherOptions = {};
    this.chained = [];
    this.fromOptions(options);
  }

  /**
   * Merge the provided options with own's options
   * @param {Object} [options={}] key-value list of options
   * @returns {Transformation} Returns this instance for chaining
   */
  fromOptions(options = {}) {
    if (options instanceof TransformationBase) {
      this.fromTransformation(options);
    } else {
      if (isString(options) || Array.isArray(options)) {
        options = {
          transformation: options
        };
      }
      options = cloneDeep(options);
      // Handling of "if" statements precedes other options as it creates a chained transformation
      // @ts-ignore
      if (options["if"]) {
        // @ts-ignore
        this.set("if", options["if"]);
        // @ts-ignore
        delete options["if"];
      }
      for (let key in options) {
        // @ts-ignore
        let opt = options[key];
        if(opt != null) {
          if (key.match(VAR_NAME_RE)) {
            if (key !== '$attr') {
              this.set('variable', key, opt);
            }
          } else {
            this.set(key, opt);
          }
        }
      }
    }
    return this;
  }

  fromTransformation(other:any) {
    if (other instanceof TransformationBase) {
      other.keys().forEach(key =>
        this.set(key, other.get(key).origValue)
      );
    }
    return this;
  }

  /**
   * Set a parameter.
   * The parameter name `key` is converted to
   * @param {string} key - the name of the parameter
   * @param {*} values - the value of the parameter
   * @returns {Transformation} Returns this instance for chaining
   */
  set(key:string, ...values: string[]) {
    let camelKey;
    camelKey = camelCase(key);
    if (contains(methods, camelKey)) {
      // @ts-ignore
      this[camelKey].apply(this, values);
    } else {
      this.otherOptions[key] = values[0];
    }
    return this;
  }

  hasLayer() {
    return this.getValue("overlay") || this.getValue("underlay");
  }

  /**
   * Generate a string representation of the transformation.
   * @function Transformation#serialize
   * @return {string} Returns the transformation as a string
   */
  serialize() {
    var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList,
      transformationString, transformations, value, variables, vars;
    resultArray = this.chained.map((tr: { serialize?: () => any; }) => tr.serialize());
    paramList = this.keys();
    transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
    ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
    variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
    paramList = difference(paramList, ["transformation", "if", "variables"]);
    vars = [];
    transformationList = [];
    for (j = 0, len = paramList.length; j < len; j++) {
      t = paramList[j];
      if (t.match(VAR_NAME_RE)) {
        vars.push(t + "_" + Expression.normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
      } else {
        transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
      }
    }
    switch (false) {
      case !isString(transformations):
        transformationList.push(transformations);
        break;
      case !Array.isArray(transformations):
        resultArray = resultArray.concat(transformations);
    }
    transformationList = (function () {
      var k, len1, results;
      results = [];
      for (k = 0, len1 = transformationList.length; k < len1; k++) {
        value = transformationList[k];
        if (Array.isArray(value) && !isEmpty(value) || !Array.isArray(value) && value) {
          results.push(value);
        }
      }
      return results;
    })();
    transformationList = vars.sort().concat(variables).concat(transformationList.sort());
    if (ifParam === "if_end") {
      transformationList.push(ifParam);
    } else if (!isEmpty(ifParam)) {
      transformationList.unshift(ifParam);
    }
    transformationString = (transformationList).filter(x => !!x).join(param_separator);
    if (!isEmpty(transformationString)) {
      resultArray.push(transformationString);
    }
    return (resultArray).filter((x: any) => !!x).join(trans_separator);
  }

  /**
   * Provide a list of all the valid transformation option names
   * @function Transformation#listNames
   * @private
   * @return {Array<string>} a array of all the valid option names
   */
  static listNames() {
    return methods;
  }

  /**
   * Returns the attributes for an HTML tag.
   * @function Cloudinary.toHtmlAttributes
   * @return PlainObject
   */
  toHtmlAttributes() {
    let attrName, height, options:any, ref2, ref3, value, width;
    options = {};
    let snakeCaseKey;
    Object.keys(this.otherOptions).forEach(key=>{
      value = this.otherOptions[key];
      snakeCaseKey = snakeCase(key);
      if (!contains(PARAM_NAMES, snakeCaseKey) && !contains(URL_KEYS, snakeCaseKey)) {
        attrName = /^html_/.test(key) ? key.slice(5) : key;
        options[attrName] = value;
      }
    });
    // convert all "html_key" to "key" with the same value
    this.keys().forEach(key => {
      if (/^html_/.test(key)) {
        options[camelCase(key.slice(5))] = this.getValue(key);
      }
    });
    if (!(this.hasLayer() || this.getValue("angle") || contains(["fit", "limit", "lfill"], this.getValue("crop")))) {
      width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
      height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;
      if (parseFloat(width) >= 1.0) {
        if (options.width == null) {
          options.width = width;
        }
      }
      if (parseFloat(height) >= 1.0) {
        if (options.height == null) {
          options.height = height;
        }
      }
    }
    return options;
  }

  static isValidParamName(name: string) {
    return methods.indexOf(camelCase(name)) >= 0;
  }

  /**
   * Delegate to the parent (up the call chain) to produce HTML
   * @function Transformation#toHtml
   * @return {string} HTML representation of the parent if possible.
   * @example
   * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
   * // ImageTag {name: "img", publicId: "sample"}
   * tag.toHtml()
   * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
   * tag.transformation().crop("fit").width(300).toHtml()
   * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
   */
  toHtml():any {
    var ref;
    return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
  }

  toString() {
    return this.serialize();
  }

  clone() {
    return new TransformationBase(this.toOptions(true));
  }
}

const VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;

const trans_separator = '/';

const param_separator = ',';


function lastArgCallback(args: string | IArguments | any[]) {
  var callback;
  callback = args != null ? args[args.length - 1] : void 0;
  if (isFunction(callback)) {
    return callback;
  } else {
    return void 0;
  }
}

function processVar(varArray: string | any[]) {
  var j, len, name, results, v;
  if (Array.isArray(varArray)) {
    results = [];
    for (j = 0, len = varArray.length; j < len; j++) {
      [name, v] = varArray[j];
      results.push(`${name}_${Expression.normalize(v)}`);
    }
    return results;
  } else {
    return varArray;
  }
}

// @ts-ignore
function processCustomFunction({function_type, source}) {
  if (function_type === 'remote') {
    return [function_type, btoa(source)].join(":");
  } else if (function_type === 'wasm') {
    return [function_type, source].join(":");
  }
}

/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 * @const Transformation.methods
 * @private
 * @ignore
 * @type {Array<string>}
 */
/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 * @const {Array<string>} Transformation.PARAM_NAMES
 * @private
 * @ignore
 * @see toHtmlAttributes
 */
class Transformation extends TransformationBase {
  /**
   * Represents a single transformation.
   * @class Transformation
   * @example
   * t = new cloudinary.Transformation();
   * t.angle(20).crop("scale").width("auto");
   *
   * // or
   *
   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
   * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
   *  target="_blank">Available image transformations</a>
   * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
   *  target="_blank">Available video transformations</a>
   */
  constructor(options?: {}) {
    super(options);
  }

  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Transformation}
   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
   */
  static new(options?: { serialize?: () => any; }) {
    return new Transformation(options);
  }

  /*
    Transformation Parameters
  */
  angle(value: string | number) {
    this.arrayParam(value, "angle", "a", ".", Expression.normalize);
    return this;
  }

  audioCodec(value: string | number) {
    this.param(value, "audio_codec", "ac");
    return this;
  }

  audioFrequency(value: string | number) {
    this.param(value, "audio_frequency", "af");
    return this;
  }

  aspectRatio(value: string | number) {
    this.param(value, "aspect_ratio", "ar", Expression.normalize);
    return this;
  }

  background(value: string | number) {
    this.param(value, "background", "b", Param.norm_color);
    return this;
  }

  bitRate(value: string | number) {
    this.param(value, "bit_rate", "br");
    return this;
  }

  border(value: string | number) {
    return this.param(value, "border", "bo",  (border:any) => {
      if (isObject(border)) {
        border = Object.assign({}, {
          color: "black",
          width: 2
        }, border);
        return `${border.width}px_solid_${Param.norm_color(border.color)}`;
      } else {
        return border;
      }
    });
  }

  color(value: string | number) {
    this.param(value, "color", "co", Param.norm_color);
    return this;
  }

  colorSpace(value: string | number) {
    this.param(value, "color_space", "cs");
    return this;
  }

  crop(value: string | number) {
    this.param(value, "crop", "c");
    return this;
  }

  customFunction(value: any) {
    return this.param(value, "custom_function", "fn", () => {
      return processCustomFunction(value);
    });
  }

  customPreFunction(value: any) {
    if (this.get('custom_function')) {
      return;
    }
    return this.rawParam(value, "custom_function", "", () => {
      value = processCustomFunction(value);
      return value ? `fn_pre:${value}` : value;
    });
  }

  defaultImage(value: string) {
    this.param(value, "default_image", "d");
    return this;
  }

  delay(value: string | number) {
    this.param(value, "delay", "dl");
    return this;
  }

  density(value: string | number) {
    this.param(value, "density", "dn");
    return this;
  }

  duration(value: string | number) {
    this.rangeParam(value, "duration", "du");
    return this;
  }

   dpr(value: string | number) {
    return this.param(value, "dpr", "dpr", (dpr: string) => {
      dpr = dpr.toString();
      if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
        return dpr + ".0";
      } else {
        return Expression.normalize(dpr);
      }
    });
  }

  effect(value: string | Array<string | number>) {
    this.arrayParam(value, "effect", "e", ":", Expression.normalize);
    return this;
  }

  else() {
    return this.if('else');
  }

  endIf() {
    return this.if('end');
  }

  endOffset(value: string | number) {
    this.rangeParam(value, "end_offset", "eo");
    return this;
  }

  fallbackContent(value: string) {
    this.param(value, "fallback_content");
    return this;
  }

  fetchFormat(value: string) {
    this.param(value, "fetch_format", "f");
    return this;
  }

  format(value: string) {
    this.param(value, "format");
    return this;
  }

  flags(value: string) {
    this.arrayParam(value, "flags", "fl", ".");
    return this;
  }

  gravity(value: any) {
    this.param(value, "gravity", "g");
    return this;
  }

  fps(value: string | Array<string|number>) {
    return this.param(value, "fps", "fps", (fps: any[]) => {
      if (isString(fps)) {
        return fps;
      } else if (Array.isArray(fps)) {
        return fps.join("-");
      } else {
        return fps;
      }
    });
  }

  height(value:string | number) {
    return this.param(value, "height", "h", () => {
      if (this.getValue("crop") || this.getValue("overlay") || this.getValue("underlay")) {
        return Expression.normalize(value);
      } else {
        return null;
      }
    });
  }

  htmlHeight(value:string) {
    this.param(value, "html_height");
    return this;
  }

  htmlWidth(value:string) {
    this.param(value, "html_width");
    return this;
  }

  if(value = "") {
    var i, ifVal, j, ref, trIf, trRest;
    switch (value) {
      case "else":
        this.chain();
        return this.param(value, "if", "if");
      case "end":
        this.chain();
        for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
          ifVal = this.chained[i].getValue("if");
          if (ifVal === "end") {
            break;
          } else if (ifVal != null) {
            trIf = Transformation.new().if(ifVal);
            this.chained[i].remove("if");
            trRest = this.chained[i];
            this.chained[i] = Transformation.new().transformation([trIf, trRest]);
            if (ifVal !== "else") {
              break;
            }
          }
        }
        return this.param(value, "if", "if");
      case "":
        return Condition.new().setParent(this);
      default:
        return this.param(value, "if", "if",  (value:any) => {
          return Condition.new(value).toString();
        });
    }
  }

  keyframeInterval(value:number) {
    this.param(value, "keyframe_interval", "ki");
    return this;
  }

  ocr(value:any) {
    this.param(value, "ocr", "ocr");
    return this;
  }

  offset(value:any) {
    var end_o, start_o;
    [start_o, end_o] = (isFunction(value != null ? value.split : void 0)) ? value.split('..') : Array.isArray(value) ? value : [null, null];
    if (start_o != null) {
      this.startOffset(start_o);
    }
    if (end_o != null) {
      return this.endOffset(end_o);
    }
  }

  opacity(value: number) {
    this.param(value, "opacity", "o", Expression.normalize);
    return this;
  }

  overlay(value: string | object) {
    this.layerParam(value, "overlay", "l");
    return this;
  }

  page(value: number) {
    this.param(value, "page", "pg");
    return this;
  }

  poster(value: string | object) {
    this.param(value, "poster");
    return this;
  }

  prefix(value: string) {
    this.param(value, "prefix", "p");
    return this;
  }

  quality(value: string | number) {
    this.param(value, "quality", "q", Expression.normalize);
    return this;
  }

  radius(value: "max" | number) {
    this.arrayParam(value, "radius", "r", ":", Expression.normalize);
    return this;
  }

  rawTransformation(value: any) {
    this.rawParam(value, "raw_transformation");
    return this;
  }

  size(value: string) {
    let height, width;
    if (isFunction(value != null ? value.split : void 0)) {
      [width, height] = value.split('x');
      this.width(width);
      return this.height(height);
    }
  }

  sourceTypes(value: object) {
    this.param(value, "source_types");
    return this;
  }

  sourceTransformation(value: any) {
    return this.param(value, "source_transformation");
  }

  startOffset(value:string | number) {
    this.rangeParam(value, "start_offset", "so");
    return this;
  }

  streamingProfile(value:string) {
    this.param(value, "streaming_profile", "sp");
    return this;
  }

  transformation(value:any) {
    this.transformationParam(value, "transformation", "t");
    return this;
  }

  underlay(value: string) {
    this.layerParam(value, "underlay", "u");
    return this;
  }

  variable(name: string, value: any) {
    this.param(value, name, name);
    return this;
  }

  variables(values: Array<[string, any]>) {
    this.arrayParam(values, "variables");
    return this;
  }

  videoCodec(value:string | number | Object) {
     this.param(value, "video_codec", "vc", Param.process_video_params);
     return this;
  }

  videoSampling(value:string | number) {
    this.param(value, "video_sampling", "vs");
    return this;
  }

  width(value:string | number) {
   this.param(value, "width", "w", () => {
      if (this.getValue("crop") || this.getValue("overlay") || this.getValue("underlay")) {
        return Expression.normalize(value);
      } else {
        return null;
      }
    });
    return this;
  }

  x(value:number) {
    this.param(value, "x", "x", Expression.normalize);
    return this;
  }

  y(value:number) {
    this.param(value, "y", "y", Expression.normalize);
    return this;
  }

  zoom(value:number | string) {
    this.param(value, "zoom", "z", Expression.normalize);
    return this;
  }

}

/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 */
const methods = [
  "angle",
  "audioCodec",
  "audioFrequency",
  "aspectRatio",
  "background",
  "bitRate",
  "border",
  "color",
  "colorSpace",
  "crop",
  "customFunction",
  "customPreFunction",
  "defaultImage",
  "delay",
  "density",
  "duration",
  "dpr",
  "effect",
  "else",
  "endIf",
  "endOffset",
  "fallbackContent",
  "fetchFormat",
  "format",
  "flags",
  "gravity",
  "fps",
  "height",
  "htmlHeight",
  "htmlWidth",
  "if",
  "keyframeInterval",
  "ocr",
  "offset",
  "opacity",
  "overlay",
  "page",
  "poster",
  "prefix",
  "quality",
  "radius",
  "rawTransformation",
  "size",
  "sourceTypes",
  "sourceTransformation",
  "startOffset",
  "streamingProfile",
  "transformation",
  "underlay",
  "variable",
  "variables",
  "videoCodec",
  "videoSampling",
  "width",
  "x",
  "y",
  "zoom"
];

/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 */
const PARAM_NAMES = methods.map(snakeCase).concat(CONFIG_PARAMS);

export default Transformation;
