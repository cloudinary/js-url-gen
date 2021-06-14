import {ITxResult} from "./index";

const fs = require('fs');

const prettier = require('prettier');

function createTestFile(txs: ITxResult[]){
  let file = `

    import { Dither, checkerboard2x1Dither, circles5x5Black, circles5x5White, circles6x6Black, circles6x6White, circles7x7Black, circles7x7White } from "../src/qualifiers/dither";
import { Variable, setString, setInteger, set, setAssetReference, setFloat, setFromContext, setFromMetadata } from "../src/actions/variable";
import { Rotate, byAngle, mode } from "../src/actions/rotate";
import { GradientDirection } from "../src/qualifiers/gradientDirection";
import { ColorSpace } from "../src/qualifiers/colorSpace";
import { Dpr, auto } from "../src/qualifiers/dpr";
import { CustomFunction } from "../src/actions/customFunction";
import { Extract } from "../src/actions/extract";
import { ImproveMode } from "../src/qualifiers/improveMode";
import { Source, video, image } from "../src/qualifiers/source";
import { RoundCorners, max, byRadius } from "../src/actions/roundCorners";
import { Format, auto, ai, arw, audioAac, audioAiff, audioAmr, audioFlac, audioM4a, audioMp3, audioOgg, audioOpus, audioWav, avif, bmp, cr2, djvu, eps, eps3, ept, flif, fxb, gif, glb, gltf, hdp, heic, heif, ico, indd, jp2, jpc, jpe, jpeg, jpg, jxr, pdf, png, ps, psd, spd, svg, tga, tif, tiff, usdz, video3g2, video3gp, videoAvi, videoFlv, videoM2ts, videoM3u8, videoMkv, videoMov, videoMp4, videoMpd, videoMpeg, videoMts, videoMxf, videoOgv, videoTs, videoWebm, videoWmv, wdp, webp} from "../src/qualifiers/format";
import { Quality } from "../src/qualifiers/quality";
import { ImageTransformation } from "../src/transformation/ImageTransformation";
import { Transcode, audioCodec, audioFrequency, bitRate, fps, fpsRange, ITranscodeAction, keyframeInterval, streamingProfile, toAnimated, videoCodec } from "../src/actions/transcode";
import { Overlay, source } from "../src/actions/overlay";
import { AutoFocus } from "../src/qualifiers/autoFocus";
import { ArtisticFilter, alDente, athena, audrey, aurora, daguerre, eucalyptus, fes, frost, hairspray, hokusai, incognito, linen, peacock,
  , primavera, quartz, redRock, refresh, sizzle, sonnet, ukulele, zorro} from "../src/qualifiers/artisticFilter";
import { Gravity, autoGravity, compass, focusOn, xyCenter } from "../src/qualifiers/gravity";
import { AnimatedFormat } from "../src/qualifiers/animatedFormat";
import { Background, auto, blurred, border, borderGradient, color, predominant, predominantGradient } from "../src/qualifiers/background";
import { ChromaSubSampling } from "../src/qualifiers/chromaSubSampling";
import { Position } from "../src/qualifiers/position";
import { Resize, fill, thumbnail, scale, crop, fillPad, fit, imaggaCrop, imaggaScale, limitFill, limitFit, limitPad, minimumFit, minimumPad, pad} from "../src/actions/resize";
import { Color } from "../src/qualifiers/color";
import { BlendMode } from "../src/qualifiers/blendMode";
import { CloudinaryMedia } from "../src/assets/CloudinaryMedia";
import { Compass, center, east, north, northEast, northWest, south, southEast, southWest, west } from "../src/qualifiers/compass";
import { Adjust, saturation, autoBrightness, autoColor, autoContrast, blue, brightness, brightnessHSB, by3dLut, contrast, fillLight, gamma, green, hue, IAdjustAction, improve, opacity, opacityThreshold, recolor, red, replaceColor, sharpen, tint, unsharpMask, vibrance, viesusCorrect } from "../src/actions/adjust";
import {
  RotationMode,
  verticalFlip,
  autoRight,
} from "../src/qualifiers/rotationMode";
import { Region, ocr, faces, custom} from "../src/qualifiers/region";
import { GradientFade } from "../src/qualifiers/GradientFade";
import { Effect, vignette, sepia, accelerate, advancedRedEye, artisticFilter, assistColorBlind, blackwhite, blur, boomerang, cartoonify, colorize, deshake, dither, EffectActions, fadeIn, fadeOut, gradientFade, grayscale, loop, makeTransparent, negate, noise, oilPaint, outline, pixelate, redEye, removeBackground, reverse, shadow, simulateColorBlind, styleTransfer, theme, transition, vectorize} from "../src/actions/effect";
import { Delivery, dpr, quality, colorSpace, colorSpaceFromICC, defaultImage, density, format} from "../src/actions/delivery";
import { FocusOn, advancedEyes, advancedFace, advancedFaces, aeroplane, background, bicycle, bird, boat, bottle, bus, car, cat, chair, cow, diningtable, dog, face, faces, horse, microwave, motorbike, FocusOnValue, ocr, person, pottedplant, refrigerator, sheep, sink, skateboard, sofa, train, tvmonitor } from "../src/qualifiers/focusOn";
import { OutlineMode } from "../src/qualifiers/outlineMode";
import { SimulateColorBlind } from "../src/qualifiers/simulateColorBlind";
import { StreamingProfile } from "../src/qualifiers/streamingProfile";
import { Underlay } from "../src/actions/underlay";
import { VideoEdit, trim, volume, concatenate, preview } from "../src/actions/videoEdit";
import { VideoTransformation } from "../src/transformation/VideoTransformation";
import { Border, solid } from "../src/actions/border";
import { Flag, custom, ignoreInitialAspectRatio, attachment, animated, animatedPng, animatedWebP, anyFormat, clip, clipEvenOdd, forceIcc, forceStrip, getInfo, hlsv3, ignoreMaskChannels, immutableCache, keepAttribution, keepDar, keepIptc, layerApply, lossy, mono, noOverflow, noStream, png8, png24, png32, preserveTransparency, progressive, rasterize, regionRelative, relative, sanitize, splice, streamingAttachment, stripProfile,
, tiff8Lzw, tiled, truncateTS, waveform} from "../src/qualifiers/flag";
import { AudioCodec, none } from "../src/qualifiers/audioCodec";
import { PSDTools } from "../src/actions/psdTools";
import { TextDecoration } from "../src/qualifiers/textDecoration";
import { Transformation } from "../src/transformation/Transformation";
import { AutoGravity } from "../src/qualifiers/gravity/autoGravity/AutoGravity";
import { Conditional, ConditionalAction, ifCondition } from "../src/actions/conditional";
import { FontWeight } from "../src/qualifiers/fontWeight";
import { AspectRatio, ar1X1, ar3X1, ar3X2, ar4X3, ar5X4, ar16X9, ignoreInitialAspectRatio} from "../src/qualifiers/aspectRatio";
import { Timeline } from "../src/qualifiers/timeline";
import { NamedTransformation, name } from "../src/actions/namedTransformation";
import { Reshape, trim, cutByImage, distort, distortArc, shear } from "../src/actions/reshape";
import { Expression, expression } from "../src/qualifiers/expression";
import { Concatenate, videoSource } from "../src/qualifiers/concatenate";
import { TextStyle } from "../src/qualifiers/textStyle";
import { Volume, byDecibels, byPercent, mute } from "../src/qualifiers/volume";
import { TextAlignment, center, end, justify, left, right, start } from "../src/qualifiers/textAlignment";
import { Transition } from "../src/qualifiers/transition";
import { VideoCodecLevel, vcl30, vcl31, vcl40, vcl41, vcl42, vcl50, vcl51, vcl52 } from "../src/qualifiers/videoCodecLevel";
import { Progressive } from "../src/qualifiers/progressive";
import { FontStyle, italic, normal } from "../src/qualifiers/fontStyle";
import { VideoCodecProfile, baseline, high, main } from "../src/qualifiers/videoCodecProfile";
import { ShakeStrength, pixels16, pixels32, pixels48, pixels64 } from "../src/qualifiers/shakeStrength";
import { VideoCodec, auto, h264, h265, proRes, theora, vp8, vp9 } from "../src/qualifiers/videoCodec";
import { FontAntialias, best, fast, good, gray, none, subpixel } from "../src/qualifiers/FontAntialias";
const https = require("http");

const CloudinaryImage = CloudinaryMedia;
const CloudinaryVideo = CloudinaryMedia;
      `;


  file += `describe("Testing", () => {\n`;

  file += txs.map((txResult) => {
    let test = `it("${txResult.txString}", () => {`;
    test += `const parts = '${txResult.txString}'.replace(/\\//g, ',').split(',');\n\n`;

    test += `const tAsset = ${txResult.parsedCode}`;

    test += '\n})\n'; // Close it test

    //   code += "let tAsset = " + described_class.generate_code(nil, :js_2, {
    // :public_id => SAMPLE_ID,
    // :transformation_string => transformation_string.rstrip,
    // :format_code => false
    // })
    //   code += "\n\n"
    //
    //   code += "\t\t\tparts.forEach((part) => { expect(tAsset.toString()).toContain(part)});\n\n"
    //
    //   if ENV['FETCH_IMAGES'] && ENV['FETCH_IMAGES'].length > 0
    //     code += "    https.get(tAsset.toURL(), (resp:any) => {\n";
    //   code += "    expect(resp.headers['x-cld-error']).toBeUndefined();\n";
    //   code += "    done();\n";
    //   code += "    })\n";
    // else
    //   code += "    done();\n";
    //   end

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
