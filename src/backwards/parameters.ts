import Expression from './expression';
import Transformation from "./transformation";
import Layer from './legacyLayer/layer';
import TextLayer from './legacyLayer/textlayer';
import SubtitlesLayer from './legacyLayer/subtitleslayer';
import FetchLayer from './legacyLayer/fetchlayer';
import {isObject} from "./utils/isObject";
import {isString} from "../internal/utils/dataStructureUtils";
import {isEmpty} from "./utils/isEmpty";
import {isFunction} from "./utils/isFunction";
import {identity, withCamelCaseKeys} from "./utils/legacyBaseUtil";


/**
 * Return true if all items in list are strings
 * @function Util.allString
 * @param {Array} list - an array of items
 */
const allStrings = function(list:[]) {
  return list.length && list.every(isString);
};

/**
 * Transformation parameters
 * Depends on 'util', 'transformation'
 */
class Param {
  private name: string;
  protected shortName: string;
  protected process: (x: any) => any;
  protected origValue: any;
  /**
   * Represents a single parameter.
   * @class Param
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter.
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @ignore
   */
  constructor(name:string, shortName:string, process = identity) {
    /**
     * The name of the parameter in snake_case
     * @member {string} Param#name
     */
    this.name = name;
    /**
     * The name of the serialized form of the parameter
     * @member {string} Param#shortName
     */
    this.shortName = shortName;
    /**
     * Manipulate origValue when value is called
     * @member {function} Param#process
     */
    this.process = process;
  }

  /**
   * Set a (unprocessed) value for this parameter
   * @function Param#set
   * @param {*} origValue - the value of the parameter
   * @return {Param} self for chaining
   */
  set(origValue: any) {
    this.origValue = origValue;
    return this;
  }

  /**
   * Generate the serialized form of the parameter
   * @function Param#serialize
   * @return {string} the serialized form of the parameter
   */
  serialize() {
    var val, valid;
    val = this.value();
    valid = Array.isArray(val) || isObject(val) || isString(val) ? !isEmpty(val) : val != null;
    if ((this.shortName != null) && valid) {
      return `${this.shortName}_${val}`;
    } else {
      return '';
    }
  }

  /**
   * Return the processed value of the parameter
   * @function Param#value
   */
  value() {
    return this.process(this.origValue);
  }

  static norm_color(value: string) {
    return value != null ? value.replace(/^#/, 'rgb:') : void 0;
  }

  static build_array(arg: any) {
    if(arg == null) {
      return [];
    } else if (Array.isArray(arg)) {
      return arg;
    } else {
      return [arg];
    }
  }

  /**
   * Covert value to video codec string.
   *
   * If the parameter is an object,
   * @param {(string|Object)} param - the video codec as either a String or a Hash
   * @return {string} the video codec string in the format codec:profile:level
   * @example
   * vc_[ :profile : [level]]
   * or
   { codec: 'h264', profile: 'basic', level: '3.1' }
   * @ignore
   */
  static process_video_params(param:any) {
    var video;
    switch (param.constructor) {
      case Object:
        video = "";
        if ('codec' in param) {
          video = param.codec;
          if ('profile' in param) {
            video += ":" + param.profile;
            if ('level' in param) {
              video += ":" + param.level;
            }
          }
        }
        return video;
      case String:
        return param;
      default:
        return null;
    }
  }
}

class ArrayParam extends Param {
  private sep: string;
  /**
   * A parameter that represents an array.
   * @param {string} name - The name of the parameter in snake_case.
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class ArrayParam
   * @extends Param
   * @ignore
   */
  constructor(name:string, shortName:string, sep: string = '.', process: (x: any) => any = undefined) {
    super(name, shortName, process);
    this.sep = sep;
  }

  serialize() {
    if (this.shortName != null) {
      let arrayValue = this.value();
      if (isEmpty(arrayValue)) {
        return '';
      } else if (isString(arrayValue)) {
        return `${this.shortName}_${arrayValue}`;
      } else {
        let flat = arrayValue.map((t: { serialize: () => any; })=>isFunction(t.serialize) ? t.serialize() : t).join(this.sep);
        return `${this.shortName}_${flat}`;
      }
    } else {
      return '';
    }
  }

  value() {
    if (Array.isArray(this.origValue)) {
      return this.origValue.map(v=>this.process(v));
    } else {
      return this.process(this.origValue);
    }
  }

  set(origValue: any) {
    if ((origValue == null) || Array.isArray(origValue)) {
      return super.set(origValue);
    } else {
      return super.set([origValue]);
    }
  }
}

class TransformationParam extends Param {
  private sep: string;
  /**
   * A parameter that represents a transformation
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class TransformationParam
   * @extends Param
   * @ignore
   */
  constructor(name:string, shortName = "t", sep = '.', process:(x: any) => any = undefined) {
    super(name, shortName, process);
    this.sep = sep;
  }

  /**
   * Generate string representations of the transformation.
   * @returns {*} Returns either the transformation as a string, or an array of string representations.
   */
  serialize() {
    let result = '';
    const val = this.value();

    if (isEmpty(val)) {
      return result;
    }

    // val is an array of strings so join them
    if (allStrings(val)) {
      const joined = val.join(this.sep);  // creates t1.t2.t3 in case multiple named transformations were configured
      if (!isEmpty(joined)) {
        // in case options.transformation was not set with an empty string (val != ['']);
        result = `${this.shortName}_${joined}`;
      }
    } else { // Convert val to an array of strings
      result = val.map((t: { serialize: () => any; }) => {
        if (isString(t) && !isEmpty(t)) {
          return `${this.shortName}_${t}`;
        }
        if (isFunction(t.serialize)) {
          return t.serialize();
        }
        if (isObject(t) && !isEmpty(t)) {
          return new Transformation(t).serialize();
        }
        return undefined;
      }).filter((t: any)=>t);
    }
    return result;
  }

  set(origValue1: any[]) {
    this.origValue = origValue1;
    if (Array.isArray(this.origValue)) {
      return super.set(this.origValue);
    } else {
      return super.set([this.origValue]);
    }
  }
}

const number_pattern = "([0-9]*)\\.([0-9]+)|([0-9]+)";
const offset_any_pattern = "(" + number_pattern + ")([%pP])?";

class RangeParam extends Param {

  /**
   * A parameter that represents a range
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
   * @class RangeParam
   * @extends Param
   * @ignore
   */
  constructor(name:string, shortName:string, process = RangeParam.norm_range_value) {
    super(name, shortName, process);
  }
  static norm_range_value(value: string) {

    let offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));
    if (offset) {
      let modifier = offset[5] != null ? 'p' : '';
      value = (offset[1] || offset[4]) + modifier;
    }
    return value;
  }
}

class RawParam extends Param {
  constructor(name: string, shortName: string, process = identity) {
    super(name, shortName, process);
  }

  serialize() {
    return this.value();
  }

}

class LayerParam extends Param {
  // Parse layer options
  // @return [string] layer transformation string
  // @private
  value() {
    if (this.origValue == null) {
      return '';
    }
    let result;
    if (this.origValue instanceof Layer) {
      result = this.origValue;
    } else if (isObject(this.origValue)) {
      let layerOptions = withCamelCaseKeys(this.origValue);
      // @ts-ignore
      if (layerOptions.resourceType === "text" || (layerOptions.text != null)) {
        result = new TextLayer(layerOptions);
      } else { // @ts-ignore
        if (layerOptions.resourceType === "subtitles") {
                result = new SubtitlesLayer(layerOptions);
              } else { // @ts-ignore
          if (layerOptions.resourceType === "fetch" || (layerOptions.url != null)) {
                          result = new FetchLayer(layerOptions);
                        } else {
                          result = new Layer(layerOptions);
                        }
        }
      }
    } else if (isString(this.origValue)) {
      if (/^fetch:.+/.test(this.origValue)) {
        result = new FetchLayer(this.origValue.substr(6));
      } else {
        result = this.origValue;
      }
    } else {
      result = '';
    }
    return result.toString();
  }

  static textStyle(layer: { key?: any; }) {
    return (new TextLayer(layer)).textStyleIdentifier();
  }
}

class ExpressionParam extends Param {
  // @ts-ignore
  serialize() {
    return Expression.normalize(super.serialize());
  }
}

export {
  Param,
  ArrayParam,
  TransformationParam,
  RangeParam,
  RawParam,
  LayerParam,
  ExpressionParam
};
