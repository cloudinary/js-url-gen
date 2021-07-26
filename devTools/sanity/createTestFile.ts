/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable require-jsdoc */


import {ITxResult} from "./index";

const fs = require('fs');

const prettier = require('prettier');

function createTestFile(txs: ITxResult[]){
  let file = `
  // In the future, we'll support HOTER tests without name duplication issues, for now it's commented out
  // It's stored here since this is built manually, and it's best to keep the work :)
    
// import { Dither, checkerboard2x1Dither, circles5x5Black, circles5x5White, circles6x6Black, circles6x6White, circles7x7Black, circles7x7White, halftone4x4Angled, halftone4x4Orthogonal, halftone6x6Angled, halftone6x6Orthogonal, halftone8x8Angled, halftone8x8Orthogonal, halftone16x16Orthogonal, ordered2x2Dispersed, ordered3x3Dispersed, ordered4x4Dispersed, ordered8x8Dispersed, threshold1x1Nondither} from "../src/qualifiers/dither";
// import { Variable, setString, setInteger, set, setAssetReference, setFloat, setFromContext, setFromMetadata } from "../src/actions/variable";
// import { Rotate, byAngle, mode } from "../src/actions/rotate";
// import { GradientDirection, diagonalAsc, diagonalDesc, horizontal, vertical } from "../src/qualifiers/gradientDirection";
// import { ColorSpace, cmyk, keepCmyk, noCmyk, srgb, tinySrgb, trueColor } from "../src/qualifiers/colorSpace";
// import { Dpr, auto } from "../src/qualifiers/dpr";
// import { CustomFunction, remote, wasm, } from "../src/actions/customFunction";
// import { Extract, ExtractAction, getFrame, getPage, } from "../src/actions/extract";
// import { ImproveMode } from "../src/qualifiers/improveMode";
// import { Source, video, image, subtitles, fetch, text } from "../src/qualifiers/source";
// import { RoundCorners, max, byRadius } from "../src/actions/roundCorners";
// import { Format, auto, ai, arw, audioAac, audioAiff, audioAmr, audioFlac, audioM4a, audioMp3, audioOgg, audioOpus, audioWav, avif, bmp, cr2, djvu, eps, eps3, ept, flif, fxb, gif, glb, gltf, hdp, heic, heif, ico, indd, jp2, jpc, jpe, jpeg, jpg, jxr, pdf, png, ps, psd, spd, svg, tga, tif, tiff, usdz, video3g2, video3gp, videoAvi, videoFlv, videoM2ts, videoM3u8, videoMkv, videoMov, videoMp4, videoMpd, videoMpeg, videoMts, videoMxf, videoOgv, videoTs, videoWebm, videoWmv, wdp, webp} from "../src/qualifiers/format";
// import { Quality, auto, autoBest, autoEco, autoGood, autoLow, jpegmini, jpegminiBest, jpegminiHigh, jpegminiMedium } from "../src/qualifiers/quality";
// import { ImageTransformation } from "../src/transformation/ImageTransformation";
// import { Transcode, audioCodec, audioFrequency, bitRate, fps, fpsRange, ITranscodeAction, keyframeInterval, streamingProfile, toAnimated, videoCodec } from "../src/actions/transcode";
// import { Overlay, source } from "../src/actions/overlay";
// import { AutoFocus } from "../src/qualifiers/autoFocus";
// import { ArtisticFilter, alDente, athena, audrey, aurora, daguerre, eucalyptus, fes, frost, hairspray, hokusai, incognito, linen, peacock, primavera, quartz, redRock, refresh, sizzle, sonnet, ukulele, zorro} from "../src/qualifiers/artisticFilter";
// import { Gravity, autoGravity, compass, focusOn, xyCenter } from "../src/qualifiers/gravity";
// import { AnimatedFormat, webp, png, gif, auto } from "../src/qualifiers/animatedFormat";
// import { Background, auto, blurred, border, borderGradient, color, predominant, predominantGradient } from "../src/qualifiers/background";
// import { ChromaSubSampling, chroma420, chroma444 } from "../src/qualifiers/chromaSubSampling";
// import { Position } from "../src/qualifiers/position";
// import { Resize, fill, thumbnail, scale, crop, fillPad, fit, imaggaCrop, imaggaScale, limitFill, limitFit, limitPad, minimumFit, minimumPad, pad} from "../src/actions/resize";
// import { BlendMode, antiRemoval, mask, multiply, overlay, screen } from "../src/qualifiers/blendMode";
// import { CloudinaryMedia } from "../src/assets/CloudinaryMedia";
// import { Compass, center, east, north, northEast, northWest, south, southEast, southWest, west } from "../src/qualifiers/compass";
// import { Adjust, saturation, autoBrightness, autoColor, autoContrast, blue, brightness, brightnessHSB, by3dLut, contrast, fillLight, gamma, green, hue, IAdjustAction, improve, opacity, opacityThreshold, recolor, red, replaceColor, sharpen, tint, unsharpMask, vibrance, viesusCorrect } from "../src/actions/adjust";
// import {
//   RotationMode,
//   verticalFlip,
//   autoRight,
//   autoLeft, horizontalFlip, ignore
// } from "../src/qualifiers/rotationMode";
// import { Region, ocr, faces, custom} from "../src/qualifiers/region";
// import { GradientFade } from "../src/qualifiers/GradientFade";
// import { Effect, vignette, sepia, accelerate, advancedRedEye, artisticFilter, assistColorBlind, blackwhite, blur, boomerang, cartoonify, colorize, deshake, dither, EffectActions, fadeIn, fadeOut, gradientFade, grayscale, loop, makeTransparent, negate, noise, oilPaint, outline, pixelate, redEye, removeBackground, reverse, shadow, simulateColorBlind, styleTransfer, theme, transition, vectorize} from "../src/actions/effect";
// import { Delivery, dpr, quality, colorSpace, colorSpaceFromICC, defaultImage, density, format} from "../src/actions/delivery";
// import { FocusOn, advancedEyes, advancedFace, advancedFaces, aeroplane, background, bicycle, bird, boat, bottle, bus, car, cat, chair, cow, diningtable, dog, face, faces, horse, microwave, motorbike, FocusOnValue, ocr, person, pottedplant, refrigerator, sheep, sink, skateboard, sofa, train, tvmonitor } from "../src/qualifiers/focusOn";
// import { OutlineMode, fill, inner, innerFill, outer } from "../src/qualifiers/outlineMode";
// import { SimulateColorBlind, coneMonochromacy, deuteranomaly, deuteranopia, protanopia, rodMonochromacy, tritanomaly, tritanopia } from "../src/qualifiers/simulateColorBlind";
// import { StreamingProfile } from "../src/qualifiers/streamingProfile";
// import { Underlay } from "../src/actions/underlay";
// import { VideoEdit, trim, volume, concatenate, preview } from "../src/actions/videoEdit";
// import { VideoTransformation } from "../src/transformation/VideoTransformation";
// import { Border, solid } from "../src/actions/border";
// import { Flag, custom, ignoreInitialAspectRatio, attachment, animated, animatedPng, animatedWebP, anyFormat, clip, clipEvenOdd, forceIcc, forceStrip, getInfo, hlsv3, ignoreMaskChannels, immutableCache, keepAttribution, keepDar, keepIptc, layerApply, lossy, mono, noOverflow, noStream, png8, png24, png32, preserveTransparency, progressive, rasterize, regionRelative, relative, sanitize, splice, streamingAttachment, stripProfile, tiff8Lzw, tiled, truncateTS, waveform} from "../src/qualifiers/flag";
// import { AudioCodec, none } from "../src/qualifiers/audioCodec";
// import { PSDTools, clip, getLayer, smartObject } from "../src/actions/psdTools";
// import { TextDecoration, normal, strikethrough, underline } from "../src/qualifiers/textDecoration";
// import { Transformation } from "../src/transformation/Transformation";
// import { AutoGravity } from "../src/qualifiers/gravity/autoGravity/AutoGravity";
// import { Conditional, ConditionalAction, ifCondition } from "../src/actions/conditional";
// import { FontWeight, normal, bold, light, thin } from "../src/qualifiers/fontWeight";
// import { AspectRatio, ar1X1, ar3X1, ar3X2, ar4X3, ar5X4, ar16X9, ignoreInitialAspectRatio} from "../src/qualifiers/aspectRatio";
// import { Timeline, position } from "../src/qualifiers/timeline";
// import { NamedTransformation, name } from "../src/actions/namedTransformation";
// import { Reshape, trim, cutByImage, distort, distortArc, shear } from "../src/actions/reshape";
// import { Expression, expression } from "../src/qualifiers/expression";
// import { Concatenate, videoSource } from "../src/qualifiers/concatenate";
// import { TextStyle } from "../src/qualifiers/textStyle";
// import { Volume, byDecibels, byPercent, mute } from "../src/qualifiers/volume";
// import { TextAlignment, center, end, justify, left, right, start } from "../src/qualifiers/textAlignment";
// import { Transition, videoSource } from "../src/qualifiers/transition";
// import { VideoCodecLevel, vcl30, vcl31, vcl40, vcl41, vcl42, vcl50, vcl51, vcl52 } from "../src/qualifiers/videoCodecLevel";
// import { Progressive, progressive, none, ProgressiveQualifier, semi, steep } from "../src/qualifiers/progressive";
// import { FontStyle, italic, normal } from "../src/qualifiers/fontStyle";
// import { VideoCodecProfile, baseline, high, main } from "../src/qualifiers/videoCodecProfile";
// import { ShakeStrength, pixels16, pixels32, pixels48, pixels64 } from "../src/qualifiers/shakeStrength";
// import { VideoCodec, auto, h264, h265, proRes, theora, vp8, vp9 } from "../src/qualifiers/videoCodec";
// import { FontAntialias, best, fast, good, gray, none, subpixel } from "../src/qualifiers/FontAntialias";
// const https = require("http");
//

// Use Full import paths for HOTER tests
import { CloudinaryMedia } from "../src/assets/CloudinaryMedia";
import { VideoEdit } from "actions/videoEdit";
import { Border } from "actions/border";
import { Resize } from "actions/resize";
import { Rotate } from "actions/rotate";
import { RotationMode } from "qualifiers/rotationMode";
import { Transcode } from "actions/transcode";
import { AudioCodec } from "qualifiers/audioCodec";
import { Overlay } from "actions/overlay";
import { Source } from "qualifiers/source";
import { RoundCorners } from "actions/roundCorners";
import { AspectRatio } from "qualifiers/aspectRatio";
import { Gravity } from "qualifiers/gravity";
import { Delivery } from "actions/delivery";
import { Format } from "qualifiers/format";
import { Quality } from "qualifiers/quality";
import { Dpr } from "qualifiers/dpr";
import { Variable } from "actions/variable";
import { CustomFunction } from "actions/customFunction";
import { NamedTransformation } from "actions/namedTransformation";
import { Color } from "qualifiers/color";
import { Concatenate } from "qualifiers/concatenate";
import { Expression } from "qualifiers/expression";
import { Compass } from "qualifiers/compass";
import { FocusOn } from "qualifiers/focusOn";
import { AutoFocus } from "qualifiers/autoFocus";
import { VideoCodec } from "qualifiers/videoCodec";
import { Adjust } from "actions/adjust";
import { ImageTransformation } from "index";
import { Effect } from "actions/effect";
import { Conditional } from "actions/conditional";
import { Underlay } from "actions/underlay";
import { ColorSpace } from "qualifiers/colorSpace";
import { OutlineMode } from "qualifiers/outlineMode";
import { VideoCodecLevel } from "qualifiers/videoCodecLevel";
import { VideoCodecProfile } from "qualifiers/videoCodecProfile";
import { Position } from "qualifiers/position";
import { TextStyle } from "qualifiers/textStyle";
import { ArtisticFilter } from "qualifiers/artisticFilter";
import { Reshape } from "actions/reshape";
import { ImproveMode } from "qualifiers/improveMode";
import { BlendMode } from "qualifiers/blendMode";
import { SimulateColorBlind } from "qualifiers/simulateColorBlind";
import { Background } from "qualifiers/background";
import { Transition } from "qualifiers/transition";
import { ShakeStrength } from "qualifiers/shakeStrength";
import { GradientFade } from "qualifiers/GradientFade";
import { Region } from "qualifiers/region";
import { Extract } from "actions/extract";
import { Progressive } from "qualifiers/progressive";
import { Timeline } from "qualifiers/timeline";
import { TextDecoration } from "qualifiers/textDecoration";
import { FontWeight } from "qualifiers/fontWeight";
import { TextAlignment } from "qualifiers/textAlignment";
import { AnimatedFormat } from "qualifiers/animatedFormat";
import { ChromaSubSampling } from "qualifiers/chromaSubSampling";
import { Dither } from "qualifiers/dither";
import { Flag } from "qualifiers/flag";
import {GradientDirection} from "qualifiers/gradientDirection";
import {StreamingProfile} from "qualifiers/streamingProfile";
import { PSDTools } from "actions/psdTools";
import { FontStyle } from "qualifiers/fontStyle";
import {Volume} from "../src/qualifiers/volume";
import {FontAntialias} from "../src/qualifiers/FontAntialias";
import {Animated} from "../src/actions/animated";
const CloudinaryImage = CloudinaryMedia;
const CloudinaryVideo = CloudinaryMedia;
      `;


  file += `describe("Testing", () => {\n`;

  file += txs.map((txResult) => {
    let test = `it("${txResult.txString}", () => {`;
    test += `const tAsset = ${txResult.parsedCode}`;

    if (txResult.txString.startsWith('http')) {

      // For URLS, If not a demo cloud, we do not support the compilation test.
      if (!txResult.txString.includes('/demo/')) {
        throw `Unsupported URL: ${txResult.txString}`;
      }

      test += `tAsset.setCloudConfig({cloudName: 'demo'});`;
      test += `tAsset.setURLConfig({analytics:false});`;
      test += `expect(tAsset.toURL()).toBe('${txResult.txString}');`;
    } else {
      test += `const parts = '${txResult.txString}'.replace(/\\//g, ',').split(',');\n\n`;
      test += `parts.forEach((part) => { expect(tAsset.toString()).toContain(part)})`;
    }



    test += '\n})\n'; // Close it test

    try {
      return prettier.format(test, {parser:'babel'});
    } catch (e) {
      return test;
    }
  }).join('\n');

  file += `\n})\n`;

  try {
    return prettier.format(file, {parser:'babel'});
  } catch (e) {
    return file;
  }
}

module.exports = createTestFile;
