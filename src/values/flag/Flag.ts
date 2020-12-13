import {animatedWebP} from "./animatedWebP";
import {hlsv3} from "./hlsv3";
import {anyFormat} from "./anyFormat";
import {keepDar} from "./keepDar";
import {immutableCache} from "./immutableCache";
import {stripProfile} from "./stripProfile";
import {lossy} from "./lossy";
import {mono} from "./mono";
import {animatedPng} from "./animatedPng";
import attachment from "./attachment";
import {png32} from "./png32";
import {rasterize} from "./rasterize";
import {png8} from "./png8";
import {keepIptc} from "./keepIptc";
import {streamingAttachment} from "./streamingAttachment";
import {layerApply} from "./layerApply";
import {getInfo} from "./getInfo";
import {splice} from "./splice";
import custom from "./custom";
import {forceIcc} from "./forceIcc";
import clipEvenOdd from "./clipEvenOdd";
import {keepAttribution} from "./keepAttribution";
import {noStream} from "./noStream";
import {truncateTS} from "./truncateTS";
import {forceStrip} from "./forceStrip";
import {png24} from "./png24";
import {preserveTransparency} from "./preserveTransparency";
import {animated} from "./animated";
import {progressive} from "./progressive";
import {tiff8Lzw} from "./tiff8Lzw";
import {waveform} from "./waveform";
import {sanitize} from "./sanitize";
import {relative} from "./relative";
import {regionRelative} from "./regionRelative";
import {ignoreAspectRatio} from "./ignoreAspectRatio";
import {clip} from "./clip";
import {tiled} from "./tiled";
import {noOverflow} from "./noOverflow";


/**
 * @description Defines flags that you can use to alter the default transformation behavior.
 * @namespace Flag
 * @memberOf Values
 */
const Flag = {animated, anyFormat, animatedPng, animatedWebP,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc, custom, streamingAttachment, hlsv3, keepDar, noStream, mono,
  layerApply, relative, regionRelative, splice, truncateTS, waveform, ignoreAspectRatio, clip,
  tiled, noOverflow
};

export {Flag, animated, anyFormat, animatedPng, animatedWebP,
  clipEvenOdd, lossy, preserveTransparency, png8, png24, png32, progressive, rasterize,
  sanitize, stripProfile, tiff8Lzw, attachment, forceIcc, forceStrip, getInfo, immutableCache,
  keepAttribution, keepIptc, custom, streamingAttachment, hlsv3, keepDar, noStream, mono,
  layerApply, relative, regionRelative, splice, truncateTS, waveform, ignoreAspectRatio, clip,
  tiled, noOverflow};
