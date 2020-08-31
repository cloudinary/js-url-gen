import Param from '../../parameters/Param';
import ParamValue from "../../parameters/ParamValue";
import animated from "./animated";
import anyFormat from "./anyFormat";
import animatedPng from "./animatedPng";
import animatedWebP from "./animatedWebP";
import clip from "./clip";
import clipEvenOdd from "./clipEvenOdd";
import lossy from "./lossy";
import preserveTransparency from "./preserveTransparency";
import png8 from "./png8";
import png24 from "./png24";
import png32 from "./png32";
import progressive from "./progressive";
import rasterize from "./rasterize";
import sanitize from "./sanitize";
import stripProfile from "./stripProfile";
import tiff8Lzw from "./tiff8Lzw";
import attachment from "./attachment";
import forceIcc from "./forceIcc";
import forceStrip from "./forceStrip";
import getInfo from "./getInfo";
import immutableCache from "./immutableCache";
import keepAttribution from "./keepAttribution";
import keepIptc from "./keepIptc";

/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Params
 */
class Flag extends Param {
  constructor(flagType?: ParamValue | ParamValue[] | number | number[] | string | string[], flagValue?: string) {
    let paramValue;
    if(flagValue) {
      paramValue = new ParamValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      paramValue = flagType;
    }
    super('fl', paramValue);
  }
}


export {Flag, animated, anyFormat, animatedPng, animatedWebP, clip,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc};

export default {Flag, animated, anyFormat, animatedPng, animatedWebP, clip,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc};
