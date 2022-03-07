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
import { GradientDirection } from "qualifiers/gradientDirection";
import { StreamingProfile } from "qualifiers/streamingProfile";
import { PSDTools } from "actions/psdTools";
import { FontStyle } from "qualifiers/fontStyle";
import { Volume } from "../src/qualifiers/volume";
import { FontAntialias } from "../src/qualifiers/FontAntialias";
import { Animated } from "../src/actions/animated";
import { CloudinaryImage, CloudinaryVideo, Transformation } from "../src";
describe("Testing", () => {
  it("c_crop,g_face,z_1.2,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(150)
        .height(150)
        .zoom(1.2)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_crop,g_face,z_1.2,h_150,w_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_sink,z_0.8", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().zoom(0.8).gravity(Gravity.focusOn(FocusOn.sink()))
    );
    const parts = "c_crop,g_sink,z_0.8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_face,c_crop,z_1.3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().zoom(1.3).gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "g_face,c_crop,z_1.3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$award_!First!", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("award", "First")
    );
    const parts = "$award_!First!".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$bcolor_!rgb:0000ff!/if_fc_gt_0,$bcolor_!red!/bo_5px_solid_$bcolor,c_fill,h_120,w_120", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("bcolor", "rgb:0000ff"))
      .conditional(
        Conditional.ifCondition(
          "face_count > 0",
          new Transformation().addVariable(Variable.set("bcolor", "red"))
        )
      )
      .resize(Resize.fill().width(120).height(120))
      .border(Border.solid(5, "$bcolor"));
    const parts =
      "$bcolor_!rgb:0000ff!/if_fc_gt_0,$bcolor_!red!/bo_5px_solid_$bcolor,c_fill,h_120,w_120"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$bestpic_ref:!file.png!", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.setAssetReference("bestpic", "file.png")
    );
    const parts = "$bestpic_ref:!file.png!".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$colors_5,fn_wasm:quantize.wasm", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("colors", 5))
      .customFunction(CustomFunction.wasm("quantize.wasm"));
    const parts = "$colors_5,fn_wasm:quantize.wasm"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_!iw!", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("foo", "iw")
    );
    const parts = "$foo_!iw!".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_1_to_f", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("foo", 1).asFloat()
    );
    const parts = "$foo_1_to_f".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_bar", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("foo", Expression.expression("bar"))
    );
    const parts = "$foo_bar".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_bar_to_i", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("foo", Expression.expression("bar")).asInteger()
    );
    const parts = "$foo_bar_to_i".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_iw_add_100_div_3", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("foo", Expression.expression("initial_width + 100 / 3"))
    );
    const parts = "$foo_iw_add_100_div_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$foo_md:!bar!_to_f", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.setFromMetadata("foo", "bar").asFloat()
    );
    const parts = "$foo_md:!bar!_to_f".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$img_current,$height_ih/if_w_lt_800/c_scale,e_blur:800,u_$img,w_800,h_$height/e_brightness:40,fl_layer_apply/if_end", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("img", Expression.expression("current")))
      .addVariable(
        Variable.set("height", Expression.expression("initial_height"))
      )
      .conditional(
        Conditional.ifCondition(
          "width < 800",
          new Transformation().underlay(
            Underlay.source(
              Source.image("$img").transformation(
                new Transformation()
                  .resize(Resize.scale().width(800).height("$height"))
                  .effect(Effect.blur().strength(800))
                  .adjust(Adjust.brightness().level(40))
              )
            )
          )
        )
      );
    const parts =
      "$img_current,$height_ih/if_w_lt_800/c_scale,e_blur:800,u_$img,w_800,h_$height/e_brightness:40,fl_layer_apply/if_end"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$img_current/e_grayscale/l_$img,w_0.3,bo_10px_solid_white/fl_layer_apply,g_north_west/q_auto,f_auto,dpr_2.0,w_900", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("img", Expression.expression("current")))
      .effect(Effect.grayscale())
      .overlay(
        Overlay.source(
          Source.image("$img").transformation(
            new Transformation()
              .resize(Resize.scale().width(0.3))
              .border(Border.solid(10, "white"))
          )
        ).position(new Position().gravity(Gravity.compass("north_west")))
      )
      .resize(Resize.scale().width(900))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts =
      "$img_current/e_grayscale/l_$img,w_0.3,bo_10px_solid_white/fl_layer_apply,g_north_west/q_auto,f_auto,dpr_2.0,w_900"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$mainvideowidth_500/$overlaywidth_$mainvideowidth_div_3/w_$mainvideowidth/l_video:kitten_fighting,w_$overlaywidth,g_south_east", () => {
    const tAsset = new CloudinaryVideo("sample")
      .addVariable(Variable.set("mainvideowidth", 500))
      .addVariable(
        Variable.set(
          "overlaywidth",
          Expression.expression("$mainvideowidth / 3")
        )
      )
      .resize(Resize.scale().width("$mainvideowidth"))
      .overlay(
        Overlay.source(
          Source.video("kitten_fighting").transformation(
            new Transformation().resize(Resize.scale().width("$overlaywidth"))
          )
        ).position(new Position().gravity(Gravity.compass("south_east")))
      )
      .setAssetType("image");
    const parts =
      "$mainvideowidth_500/$overlaywidth_$mainvideowidth_div_3/w_$mainvideowidth/l_video:kitten_fighting,w_$overlaywidth,g_south_east"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$newwidth_10_add_iw_mul_0.3,w_$newwidth", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(
        Variable.set(
          "newwidth",
          Expression.expression("10 + initial_width * 0.3")
        )
      )
      .resize(Resize.scale().width("$newwidth"));
    const parts = "$newwidth_10_add_iw_mul_0.3,w_$newwidth"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$overlay_ref:!docs:sale!/fn_wasm:docs:pnglayer.wasm/bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.setAssetReference("overlay", "docs:sale"))
      .customFunction(CustomFunction.wasm("docs:pnglayer.wasm"))
      .border(Border.solid(1, "black"));
    const parts =
      "$overlay_ref:!docs:sale!/fn_wasm:docs:pnglayer.wasm/bo_1px_solid_black"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$overlaywidth_$mainvideowidth_div_3", () => {
    const tAsset = new CloudinaryImage("sample").addVariable(
      Variable.set("overlaywidth", Expression.expression("$mainvideowidth / 3"))
    );
    const parts = "$overlaywidth_$mainvideowidth_div_3"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$qualtag_!Pro!/if_$qualtag_in_tags,q_80/if_else,q_30/w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("qualtag", "Pro"))
      .conditional(
        Conditional.ifCondition(
          "$qualtag in tags",
          new Transformation().delivery(Delivery.quality(80))
        ).otherwise(new Transformation().delivery(Delivery.quality(30)))
      )
      .resize(Resize.scale().width(500));
    const parts = "$qualtag_!Pro!/if_$qualtag_in_tags,q_80/if_else,q_30/w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$qualtag_!Pro!/if_$qualtag_in_tags,q_90/if_else,q_30/w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("qualtag", "Pro"))
      .conditional(
        Conditional.ifCondition(
          "$qualtag in tags",
          new Transformation().delivery(Delivery.quality(90))
        ).otherwise(new Transformation().delivery(Delivery.quality(30)))
      )
      .resize(Resize.scale().width(500));
    const parts = "$qualtag_!Pro!/if_$qualtag_in_tags,q_90/if_else,q_30/w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$qualtag_!important!,$delwidth_450/t_highqual-if-tagged", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("qualtag", "important"))
      .addVariable(Variable.set("delwidth", 450))
      .namedTransformation(NamedTransformation.name("highqual-if-tagged"));
    const parts = "$qualtag_!important!,$delwidth_450/t_highqual-if-tagged"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$rating_!thumbs-down!/t_image_ratings", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("rating", "thumbs-down"))
      .namedTransformation(NamedTransformation.name("image_ratings"));
    const parts = "$rating_!thumbs-down!/t_image_ratings"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$rating_!thumbs-down!/t_image_ratings/w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("rating", "thumbs-down"))
      .namedTransformation(NamedTransformation.name("image_ratings"))
      .resize(Resize.scale().width(200));
    const parts = "$rating_!thumbs-down!/t_image_ratings/w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$rating_!thumbs-up!/t_image_ratings", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("rating", "thumbs-up"))
      .namedTransformation(NamedTransformation.name("image_ratings"));
    const parts = "$rating_!thumbs-up!/t_image_ratings"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$rating_!thumbs-up!/t_image_ratings/w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("rating", "thumbs-up"))
      .namedTransformation(NamedTransformation.name("image_ratings"))
      .resize(Resize.scale().width(200));
    const parts = "$rating_!thumbs-up!/t_image_ratings/w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150,$big_2_div_$small/c_fill,w_$big,h_$small_add_20/l_my_named_div_layer", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .addVariable(Variable.set("big", Expression.expression("2 / $small")))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      )
      .overlay(Overlay.source(Source.image("my_named_div_layer")));
    const parts =
      "$small_150,$big_2_div_$small/c_fill,w_$big,h_$small_add_20/l_my_named_div_layer"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150,$big_2_div_$small/c_fill,w_$big,h_$small_add_20/l_my_named_div_layer/e_art:incognito", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .addVariable(Variable.set("big", Expression.expression("2 / $small")))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      )
      .overlay(Overlay.source(Source.image("my_named_div_layer")))
      .effect(Effect.artisticFilter("incognito"));
    const parts =
      "$small_150,$big_2_div_$small/c_fill,w_$big,h_$small_add_20/l_my_named_div_layer/e_art:incognito"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150,$big_2_mul_$small/c_fill,w_$big,h_$small_add_20", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .addVariable(Variable.set("big", Expression.expression("2 * $small")))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      );
    const parts = "$small_150,$big_2_mul_$small/c_fill,w_$big,h_$small_add_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150,$big_2_mul_$small/c_fill,w_$big,h_$small_add_20/t_my_named_mul_trans", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .addVariable(Variable.set("big", Expression.expression("2 * $small")))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      )
      .namedTransformation(NamedTransformation.name("my_named_mul_trans"));
    const parts =
      "$small_150,$big_2_mul_$small/c_fill,w_$big,h_$small_add_20/t_my_named_mul_trans"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150,$big_2_mul_$small_add_4/c_fill,w_$big,h_$small_add_20", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .addVariable(Variable.set("big", Expression.expression("2 * $small + 4")))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      );
    const parts =
      "$small_150,$big_2_mul_$small_add_4/c_fill,w_$big,h_$small_add_20"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$small_150/c_fill,w_$big,h_$small_add_20", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("small", 150))
      .resize(
        Resize.fill().width("$big").height(Expression.expression("$small + 20"))
      );
    const parts = "$small_150/c_fill,w_$big,h_$small_add_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$w_200,$ar_0.8/w_$w,ar_$ar,c_fill,g_face", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("w", 200))
      .addVariable(Variable.set("ar", 0.8))
      .resize(
        Resize.fill()
          .width("$w")
          .aspectRatio("$ar")
          .gravity(Gravity.focusOn(FocusOn.face()))
      );
    const parts = "$w_200,$ar_0.8/w_$w,ar_$ar,c_fill,g_face"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$width_115/t_passport_photo", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("width", 115))
      .namedTransformation(NamedTransformation.name("passport_photo"));
    const parts = "$width_115/t_passport_photo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$width_140/t_passport_photo", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("width", 140))
      .namedTransformation(NamedTransformation.name("passport_photo"));
    const parts = "$width_140/t_passport_photo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$width_165/t_passport_photo", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("width", 165))
      .namedTransformation(NamedTransformation.name("passport_photo"));
    const parts = "$width_165/t_passport_photo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$width_60/t_passport_photo", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("width", 60))
      .namedTransformation(NamedTransformation.name("passport_photo"));
    const parts = "$width_60/t_passport_photo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$width_iw_mul_3/w_$width", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(
        Variable.set("width", Expression.expression("initial_width * 3"))
      )
      .resize(Resize.scale().width("$width"));
    const parts = "$width_iw_mul_3/w_$width".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("$widthval_200,$arval_0.8/w_$widthval,ar_$arval,c_fill,g_face", () => {
    const tAsset = new CloudinaryImage("sample")
      .addVariable(Variable.set("widthval", 200))
      .addVariable(Variable.set("arval", 0.8))
      .resize(
        Resize.fill()
          .width("$widthval")
          .aspectRatio("$arval")
          .gravity(Gravity.focusOn(FocusOn.face()))
      );
    const parts = "$widthval_200,$arval_0.8/w_$widthval,ar_$arval,c_fill,g_face"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_-20", () => {
    const tAsset = new CloudinaryImage("sample").rotate(Rotate.byAngle(-20));
    const parts = "a_-20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_180", () => {
    const tAsset = new CloudinaryImage("sample").rotate(Rotate.byAngle(180));
    const parts = "a_180".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_180/w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill,so_0,du_5/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .rotate(Rotate.byAngle(180))
      .resize(Resize.fill().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .videoEdit(VideoEdit.trim().startOffset("0.0").duration("5.0"))
              .resize(Resize.fill().width(300).height(200))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "a_180/w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill,so_0,du_5/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_20", () => {
    const tAsset = new CloudinaryImage("sample").rotate(Rotate.byAngle(20));
    const parts = "a_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_90", () => {
    const tAsset = new CloudinaryImage("sample").rotate(Rotate.byAngle(90));
    const parts = "a_90".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_auto_left", () => {
    const tAsset = new CloudinaryImage("sample").rotate(
      Rotate.mode(RotationMode.autoLeft())
    );
    const parts = "a_auto_left".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_auto_right", () => {
    const tAsset = new CloudinaryImage("sample").rotate(
      Rotate.mode(RotationMode.autoRight())
    );
    const parts = "a_auto_right".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_hflip", () => {
    const tAsset = new CloudinaryImage("sample").rotate(
      Rotate.mode(RotationMode.horizontalFlip())
    );
    const parts = "a_hflip".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_ignore", () => {
    const tAsset = new CloudinaryImage("sample").rotate(
      Rotate.mode(RotationMode.ignore())
    );
    const parts = "a_ignore".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_vflip", () => {
    const tAsset = new CloudinaryImage("sample").rotate(
      Rotate.mode(RotationMode.verticalFlip())
    );
    const parts = "a_vflip".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_vflip/a_20", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.byAngle(20));
    const parts = "a_vflip/a_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_1.0,c_scale,g_liquid,w_1.0/w_500,h_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width("1.0").aspectRatio("1.0").liquidRescaling())
      .resize(Resize.scale().width(500).height(500));
    const parts = "ar_1.0,c_scale,g_liquid,w_1.0/w_500,h_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_1.5,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().aspectRatio(1.5)
    );
    const parts = "ar_1.5,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_16:9,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().aspectRatio(AspectRatio.ar16X9())
    );
    const parts = "ar_16:9,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_16:9,c_fill/c_scale,w_auto/c_limit,w_1000", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().aspectRatio(AspectRatio.ar16X9()))
      .resize(Resize.scale().width("auto"))
      .resize(Resize.limitFit().width(1000));
    const parts = "ar_16:9,c_fill/c_scale,w_auto/c_limit,w_1000"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_16:9,c_fill/c_scale,w_auto:breakpoints", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().aspectRatio(AspectRatio.ar16X9()))
      .resize(Resize.scale().width("auto:breakpoints"));
    const parts = "ar_16:9,c_fill/c_scale,w_auto:breakpoints"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_16:9,c_fill/c_scale,w_auto:breakpoints:json", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().aspectRatio(AspectRatio.ar16X9()))
      .resize(Resize.scale().width("auto:breakpoints:json"));
    const parts = "ar_16:9,c_fill/c_scale,w_auto:breakpoints:json"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_16:9,c_fill/c_scale,w_auto:breakpoints_200_1920_30_15", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().aspectRatio(AspectRatio.ar16X9()))
      .resize(Resize.scale().width("auto:breakpoints_200_1920_30_15"));
    const parts = "ar_16:9,c_fill/c_scale,w_auto:breakpoints_200_1920_30_15"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_1:1,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().aspectRatio(AspectRatio.ar1X1())
    );
    const parts = "ar_1:1,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_1:1,c_fill,g_auto,w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(400)
        .aspectRatio(AspectRatio.ar1X1())
        .gravity(Gravity.autoGravity())
    );
    const parts = "ar_1:1,c_fill,g_auto,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_2.5,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().aspectRatio(2.5)
    );
    const parts = "ar_2.5,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("ar_4:3,c_fill/c_scale,w_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().aspectRatio(AspectRatio.ar4X3()))
      .resize(Resize.scale().width("auto"))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "ar_4:3,c_fill/c_scale,w_auto,dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_blue,c_pad,h_400,w_660", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(660).height(400).background(Background.color("blue"))
    );
    const parts = "b_blue,c_pad,h_400,w_660".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_blue,o_0", () => {
    const tAsset = new CloudinaryImage("sample")
      .adjust(Adjust.opacity(0))
      .backgroundColor("blue");
    const parts = "b_blue,o_0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_green", () => {
    const tAsset = new CloudinaryImage("sample").backgroundColor("green");
    const parts = "b_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_lightblue", () => {
    const tAsset = new CloudinaryImage("sample").backgroundColor("lightblue");
    const parts = "b_lightblue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_rgb:d5d2ca,h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .backgroundColor("#d5d2ca");
    const parts = "b_rgb:d5d2ca,h_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_rgb:fff", () => {
    const tAsset = new CloudinaryImage("sample").backgroundColor("#fff");
    const parts = "b_rgb:fff".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("b_white,co_red,l_subtitles:arial_17:my_subs_file.srt", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("my_subs_file.srt")
          .textStyle(new TextStyle("arial", 17))
          .textColor("red")
          .backgroundColor("white")
      )
    );
    const parts = "b_white,co_red,l_subtitles:arial_17:my_subs_file.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_black,a_0/f_auto,q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(0))
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_black,a_0/f_auto,q_auto,dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_black,a_0/f_auto,q_auto,dpr_auto,h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(0))
      .border(Border.solid(1, "black"))
      .resize(Resize.scale().height(300))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_black,a_0/f_auto,q_auto,dpr_auto,h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_black,dpr_2,q_auto,f_auto,w_400", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_black,dpr_2,q_auto,f_auto,w_400"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_black,q_auto,dpr_2,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_black,q_auto,dpr_2,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(1, "gray")
    );
    const parts = "bo_1px_solid_gray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "bo_1px_solid_gray,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "bo_1px_solid_gray/dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,dpr_2,q_auto/h_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .resize(Resize.scale().height(250));
    const parts = "bo_1px_solid_gray/f_auto,dpr_2,q_auto/h_250"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,dpr_auto,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,dpr_auto,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,q_auto,dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,q_auto,w_350,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(350))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,q_auto,w_350,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,q_auto,w_600,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,q_auto,w_600,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,q_auto,w_700,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,q_auto,w_700,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_250,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(250))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_250,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_300,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_300,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_350,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(350))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_350,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_500,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(500))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_500,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_600,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_600,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_650,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(650))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_650,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto,w_700,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto,w_700,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/f_auto/q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/f_auto/q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/q_auto,h_450,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().height(450))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/q_auto,h_450,f_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/q_auto,w_400,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/q_auto,w_400,f_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_300,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_300,f_auto,q_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_400,dpr_2,q_auto,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_400,dpr_2,q_auto,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_400,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_400,f_auto,q_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_400,q_auto,dpr_2,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_400,q_auto,dpr_2,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_450,f_auto,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(450))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_450,f_auto,dpr_2,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_500,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(500))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_500,f_auto,q_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_550,q_auto,dpr_2,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(550))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_550,q_auto,dpr_2,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_550,q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(550))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_550,q_auto,f_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_gray/w_600,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_1px_solid_gray/w_600,f_auto,q_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_1px_solid_rgb:ccc,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "#ccc"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()));
    const parts = "bo_1px_solid_rgb:ccc,f_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(2, "black")
    );
    const parts = "bo_2px_solid_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,f_auto,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(2, "black"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "bo_2px_solid_black,f_auto,q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_100", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("100.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_101", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("101.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_101".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_133", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("133.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_133".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_14", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("14.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_14".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_256", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("256.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_256".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_36", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("36.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_36".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_371", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("371.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_371".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_386,c_fill,w_230,h_129", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("386.0"))
      .resize(Resize.fill().width(230).height(129))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_386,c_fill,w_230,h_129"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_48.5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset(48.5))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_48.5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_63,c_fill,w_230,h_129", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("63.0"))
      .resize(Resize.fill().width(230).height(129))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_63,c_fill,w_230,h_129"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_68", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("68.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_68".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black,so_98", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("98.0"))
      .border(Border.solid(2, "black"));
    const parts = "bo_2px_solid_black,so_98".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_2px_solid_black/c_fill,w_230,h_129", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(2, "black"))
      .resize(Resize.fill().width(230).height(129));
    const parts = "bo_2px_solid_black/c_fill,w_230,h_129"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_40px_solid_brown", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(40, "brown")
    );
    const parts = "bo_40px_solid_brown".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_5.5px_solid_rgb:fff", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(5.5, "#fff")
    );
    const parts = "bo_5.5px_solid_rgb:fff".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_5px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(5, "black")
    );
    const parts = "bo_5px_solid_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_5px_solid_black,f_auto,q_auto/dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(5, "black"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "bo_5px_solid_black,f_auto,q_auto/dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_5px_solid_hotpink", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(5, "hotpink")
    );
    const parts = "bo_5px_solid_hotpink".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_5px_solid_red", () => {
    const tAsset = new CloudinaryImage("sample").border(Border.solid(5, "red"));
    const parts = "bo_5px_solid_red".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("bo_60px_solid_rgb:00390b60", () => {
    const tAsset = new CloudinaryImage("sample").border(
      Border.solid(60, "#00390b60")
    );
    const parts = "bo_60px_solid_rgb:00390b60".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,ar_1.85356,so_813,g_south", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("813.0"))
      .resize(
        Resize.crop().aspectRatio(1.85356).gravity(Gravity.compass("south"))
      )
      .setAssetType("image");
    const parts = "c_crop,ar_1.85356,so_813,g_south"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,ar_1.85356,so_813,g_south/c_fill,w_230,h_129", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("813.0"))
      .resize(
        Resize.crop().aspectRatio(1.85356).gravity(Gravity.compass("south"))
      )
      .resize(Resize.fill().width(230).height(129))
      .setAssetType("image");
    const parts = "c_crop,ar_1.85356,so_813,g_south/c_fill,w_230,h_129"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,ar_1:1,w_1000,g_auto:cat", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(1000)
        .aspectRatio(AspectRatio.ar1X1())
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.cat()))
        )
    );
    const parts = "c_crop,ar_1:1,w_1000,g_auto:cat"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().regionRelative()
    );
    const parts = "c_crop,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().relative()
    );
    const parts = "c_crop,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.autoGravity())
    );
    const parts = "c_crop,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_auto:cat_30:dog_avoid,w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(300)
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.cat()).weight(30),
            AutoFocus.focusOn(FocusOn.dog()).avoid()
          )
        )
    );
    const parts = "c_crop,g_auto:cat_30:dog_avoid,w_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_auto:ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(
        Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.ocr()))
      )
    );
    const parts = "c_crop,g_auto:ocr_text".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_auto:ocr_text_30", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(
        Gravity.autoGravity().autoFocus(
          AutoFocus.focusOn(FocusOn.ocr()).weight(30)
        )
      )
    );
    const parts = "c_crop,g_auto:ocr_text_30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_auto:ocr_text_avoid", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(
        Gravity.autoGravity().autoFocus(
          AutoFocus.focusOn(FocusOn.ocr()).avoid()
        )
      )
    );
    const parts = "c_crop,g_auto:ocr_text_avoid".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_cat:dog", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.cat(), FocusOn.dog()))
    );
    const parts = "c_crop,g_cat:dog".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_cat:dog/w_0.25,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop().gravity(Gravity.focusOn(FocusOn.cat(), FocusOn.dog()))
      )
      .resize(Resize.scale().width(0.25));
    const parts = "c_crop,g_cat:dog/w_0.25,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_cat:dog:auto:microwave_30:bicycle_avoid", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(
        Gravity.focusOn(FocusOn.cat(), FocusOn.dog()).fallbackGravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.microwave()).weight(30),
            AutoFocus.focusOn(FocusOn.bicycle()).avoid()
          )
        )
      )
    );
    const parts = "c_crop,g_cat:dog:auto:microwave_30:bicycle_avoid"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:auto:bird,w_600,h_800", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(600)
        .height(800)
        .gravity(
          Gravity.focusOn(FocusOn.dog()).fallbackGravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bird()))
          )
        )
    );
    const parts = "c_crop,g_dog:auto:bird,w_600,h_800"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:auto:bird,w_600,h_800/w_0.25,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(600)
          .height(800)
          .gravity(
            Gravity.focusOn(FocusOn.dog()).fallbackGravity(
              Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bird()))
            )
          )
      )
      .resize(Resize.scale().width(0.25));
    const parts = "c_crop,g_dog:auto:bird,w_600,h_800/w_0.25,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:bird,w_600,h_800", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(600)
        .height(800)
        .gravity(Gravity.focusOn(FocusOn.dog(), FocusOn.bird()))
    );
    const parts = "c_crop,g_dog:bird,w_600,h_800"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:bird,w_600,h_800/w_0.25,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(600)
          .height(800)
          .gravity(Gravity.focusOn(FocusOn.dog(), FocusOn.bird()))
      )
      .resize(Resize.scale().width(0.25));
    const parts = "c_crop,g_dog:bird,w_600,h_800/w_0.25,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:cat", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.dog(), FocusOn.cat()))
    );
    const parts = "c_crop,g_dog:cat".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_dog:cat/w_0.25,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop().gravity(Gravity.focusOn(FocusOn.dog(), FocusOn.cat()))
      )
      .resize(Resize.scale().width(0.25));
    const parts = "c_crop,g_dog:cat/w_0.25,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_crop,g_face".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_face,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(150)
        .height(150)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_crop,g_face,h_150,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_face,h_400,w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(400)
        .height(400)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_crop,g_face,h_400,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_microwave", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.microwave()))
    );
    const parts = "c_crop,g_microwave".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_microwave,ar_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .aspectRatio("1.0")
        .gravity(Gravity.focusOn(FocusOn.microwave()))
    );
    const parts = "c_crop,g_microwave,ar_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_microwave,ar_1/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.microwave()))
      )
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_microwave,ar_1/w_0.3,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_microwave/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().gravity(Gravity.focusOn(FocusOn.microwave())))
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_microwave/w_0.3,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_north,h_200,w_260", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(260).height(200).gravity(Gravity.compass("north"))
    );
    const parts = "c_crop,g_north,h_200,w_260".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_north,w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(300).gravity(Gravity.compass("north"))
    );
    const parts = "c_crop,g_north,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_north,w_300,x_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(300).gravity(Gravity.compass("north")).x(100)
    );
    const parts = "c_crop,g_north,w_300,x_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_north_west,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(150)
        .height(150)
        .gravity(Gravity.compass("north_west"))
    );
    const parts = "c_crop,g_north_west,h_150,w_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.ocr()))
    );
    const parts = "c_crop,g_ocr_text".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_refrigerator", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.refrigerator()))
    );
    const parts = "c_crop,g_refrigerator".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_refrigerator,ar_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .aspectRatio("1.0")
        .gravity(Gravity.focusOn(FocusOn.refrigerator()))
    );
    const parts = "c_crop,g_refrigerator,ar_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_refrigerator,ar_1/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.refrigerator()))
      )
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_refrigerator,ar_1/w_0.3,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_refrigerator/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().gravity(Gravity.focusOn(FocusOn.refrigerator())))
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_refrigerator/w_0.3,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_sink", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.sink()))
    );
    const parts = "c_crop,g_sink".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_sink,ar_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().aspectRatio("1.0").gravity(Gravity.focusOn(FocusOn.sink()))
    );
    const parts = "c_crop,g_sink,ar_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_sink,ar_1/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.sink()))
      )
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_sink,ar_1/w_0.3,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,g_sink/w_0.3,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().gravity(Gravity.focusOn(FocusOn.sink())))
      .resize(Resize.scale().width(0.3));
    const parts = "c_crop,g_sink/w_0.3,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().height(100)
    );
    const parts = "c_crop,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_100,w_150,x_380,y_250/c_fill,h_100,w_130/a_20/c_scale,w_0.8", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(150).height(100).x(380).y(250))
      .resize(Resize.fill().width(130).height(100))
      .rotate(Rotate.byAngle(20))
      .resize(Resize.scale().width(0.8));
    const parts =
      "c_crop,h_100,w_150,x_380,y_250/c_fill,h_100,w_130/a_20/c_scale,w_0.8"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_160,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(100).height(160)
    );
    const parts = "c_crop,h_160,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().height(200)
    );
    const parts = "c_crop,h_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_200,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(100).height(200)
    );
    const parts = "c_crop,h_200,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,h_200,w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(200).height(200)
    );
    const parts = "c_crop,h_200,w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(100)
    );
    const parts = "c_crop,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(100).aspectRatio("2.0")
    );
    const parts = "c_crop,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(100).height(100)
    );
    const parts = "c_crop,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,w_100,h_200,e_sepia:17", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(100).height(200))
      .effect(Effect.sepia().level(17));
    const parts = "c_crop,w_100,h_200,e_sepia:17"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,w_200,h_200,g_xy_center,x_100,y_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(200)
        .height(200)
        .gravity(Gravity.xyCenter())
        .x(100)
        .y(100)
    );
    const parts = "c_crop,w_200,h_200,g_xy_center,x_100,y_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,x_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(Resize.crop().x(1));
    const parts = "c_crop,x_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().x(1).y(2)
    );
    const parts = "c_crop,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_crop,x_80,y_30,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(150).height(150).x(80).y(30)
    );
    const parts = "c_crop,x_80,y_30,h_150,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,ar_0.7,w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).aspectRatio(0.7)
    );
    const parts = "c_fill,ar_0.7,w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,ar_0.7,w_750", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(750).aspectRatio(0.7)
    );
    const parts = "c_fill,ar_0.7,w_750".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,ar_4:3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().aspectRatio(AspectRatio.ar4X3())
    );
    const parts = "c_fill,ar_4:3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,e_style_transfer,h_700,l_lighthouse,w_700", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.styleTransfer(
        Source.image("lighthouse").transformation(
          new Transformation().resize(Resize.fill().width(700).height(700))
        )
      )
    );
    const parts = "c_fill,e_style_transfer,h_700,l_lighthouse,w_700"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,e_style_transfer,h_700,l_lighthouse,w_700/c_scale,w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(
        Effect.styleTransfer(
          Source.image("lighthouse").transformation(
            new Transformation().resize(Resize.fill().width(700).height(700))
          )
        )
      )
      .resize(Resize.scale().width(250));
    const parts =
      "c_fill,e_style_transfer,h_700,l_lighthouse,w_700/c_scale,w_250"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().regionRelative()
    );
    const parts = "c_fill,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().relative()
    );
    const parts = "c_fill,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto,h_250,w_250", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(250).height(250).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill,g_auto,h_250,w_250".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto,h_400,ar_0.8", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().height(400).aspectRatio(0.8).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill,g_auto,h_400,ar_0.8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto,h_400,ar_0.8/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .height(400)
          .aspectRatio(0.8)
          .gravity(Gravity.autoGravity())
      )
      .resize(Resize.scale().height(300));
    const parts = "c_fill,g_auto,h_400,ar_0.8/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto,h_500,w_500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(500).height(500).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill,g_auto,h_500,w_500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto:ocr_text_avoid,h_400,ar_0.8", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .height(400)
        .aspectRatio(0.8)
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.ocr()).avoid()
          )
        )
    );
    const parts = "c_fill,g_auto:ocr_text_avoid,h_400,ar_0.8"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_auto:ocr_text_avoid,h_400,ar_0.8/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .height(400)
          .aspectRatio(0.8)
          .gravity(
            Gravity.autoGravity().autoFocus(
              AutoFocus.focusOn(FocusOn.ocr()).avoid()
            )
          )
      )
      .resize(Resize.scale().height(300));
    const parts = "c_fill,g_auto:ocr_text_avoid,h_400,ar_0.8/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_face,h_10,w_10", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(10)
        .height(10)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_fill,g_face,h_10,w_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_north,h_200,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(150).height(200).gravity(Gravity.compass("north"))
    );
    const parts = "c_fill,g_north,h_200,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_north,h_200,w_150/", () => {
    const tAsset = new CloudinaryImage("/sample").resize(
      Resize.fill().width(150).height(200).gravity(Gravity.compass("north"))
    );
    const parts = "c_fill,g_north,h_200,w_150/".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_ocr_text,h_250,w_250", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(250)
        .height(250)
        .gravity(Gravity.focusOn(FocusOn.ocr()))
    );
    const parts = "c_fill,g_ocr_text,h_250,w_250"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_ocr_text,h_500,w_500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(500)
        .height(500)
        .gravity(Gravity.focusOn(FocusOn.ocr()))
    );
    const parts = "c_fill,g_ocr_text,h_500,w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,g_xy_center,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().gravity(Gravity.xyCenter()).x(1).y(2)
    );
    const parts = "c_fill,g_xy_center,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().height(100)
    );
    const parts = "c_fill,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_100,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(150).height(100)
    );
    const parts = "c_fill,h_100,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_150,q_jpegmini,w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(200).height(150))
      .delivery(Delivery.quality(Quality.jpegmini()));
    const parts = "c_fill,h_150,q_jpegmini,w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_150,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100).height(150)
    );
    const parts = "c_fill,h_150,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_150/l_video:dog,c_fill,h_150/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.fill().height(150))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation().resize(Resize.fill().height(150))
          )
        ).transition(Transition.videoSource("transition1"))
      )
      .setAssetType("image");
    const parts =
      "c_fill,h_150/l_video:dog,c_fill,h_150/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_200,w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(200)
    );
    const parts = "c_fill,h_200,w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_200,w_200/e_brightness:100,h_200,u_site_bg,w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(200).height(200))
      .underlay(
        Underlay.source(
          Source.image("site_bg").transformation(
            new Transformation()
              .resize(Resize.scale().width(200).height(200))
              .adjust(Adjust.brightness().level(100))
          )
        )
      );
    const parts = "c_fill,h_200,w_200/e_brightness:100,h_200,u_site_bg,w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_250,w_250", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(250).height(250)
    );
    const parts = "c_fill,h_250,w_250".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_300,w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(300)
    );
    const parts = "c_fill,h_300,w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_300,w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(300).height(300)
    );
    const parts = "c_fill,h_300,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_500,w_500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(500).height(500)
    );
    const parts = "c_fill,h_500,w_500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_700,w_700/e_style_transfer:60,l_lighthouse", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(Effect.styleTransfer(Source.image("lighthouse")).strength(60));
    const parts = "c_fill,h_700,w_700/e_style_transfer:60,l_lighthouse"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_700,w_700/e_style_transfer:preserve_color,l_lighthouse", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(Effect.styleTransfer(Source.image("lighthouse")).preserveColor());
    const parts =
      "c_fill,h_700,w_700/e_style_transfer:preserve_color,l_lighthouse"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_700,w_700/e_style_transfer:preserve_color:40,l_lighthouse", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(
        Effect.styleTransfer(Source.image("lighthouse"))
          .preserveColor()
          .strength(40)
      );
    const parts =
      "c_fill,h_700,w_700/e_style_transfer:preserve_color:40,l_lighthouse"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,h_700,w_700/e_style_transfer:preserve_color:40,l_lighthouse/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(
        Effect.styleTransfer(Source.image("lighthouse"))
          .preserveColor()
          .strength(40)
      )
      .resize(Resize.scale().width(250));
    const parts =
      "c_fill,h_700,w_700/e_style_transfer:preserve_color:40,l_lighthouse/w_250"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100)
    );
    const parts = "c_fill,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100).aspectRatio("2.0")
    );
    const parts = "c_fill,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100).height(100)
    );
    const parts = "c_fill,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,w_100_mul_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(Expression.expression("100 * 2"))
    );
    const parts = "c_fill,w_100_mul_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill,x_100,g_xy_center,w_500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(500).gravity(Gravity.xyCenter()).x(100)
    );
    const parts = "c_fill,x_100,g_xy_center,w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().gravity(Gravity.autoGravity()).regionRelative()
    );
    const parts = "c_fill_pad,g_auto,fl_region_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().gravity(Gravity.autoGravity()).relative()
    );
    const parts = "c_fill_pad,g_auto,fl_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().height(100).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill_pad,g_auto,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().width(100).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill_pad,g_auto,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad()
        .width(100)
        .aspectRatio("2.0")
        .gravity(Gravity.autoGravity())
    );
    const parts = "c_fill_pad,g_auto,w_100,ar_2.0"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().width(100).height(100).gravity(Gravity.autoGravity())
    );
    const parts = "c_fill_pad,g_auto,w_100,h_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,x_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().gravity(Gravity.autoGravity()).offsetX(1)
    );
    const parts = "c_fill_pad,g_auto,x_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fill_pad,g_auto,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad().gravity(Gravity.autoGravity()).offsetX(1).offsetY(2)
    );
    const parts = "c_fill_pad,g_auto,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().regionRelative()
    );
    const parts = "c_fit,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().relative()
    );
    const parts = "c_fit,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().height(100)
    );
    const parts = "c_fit,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(150).height(150)
    );
    const parts = "c_fit,h_150,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,h_16,w_16/e_sepia", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fit().width(16).height(16))
      .effect(Effect.sepia());
    const parts = "c_fit,h_16,w_16/e_sepia".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,w_10/a_15", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fit().width(10))
      .rotate(Rotate.byAngle(15));
    const parts = "c_fit,w_10/a_15".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(100)
    );
    const parts = "c_fit,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(100).aspectRatio("2.0")
    );
    const parts = "c_fit,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_fit,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(100).height(100)
    );
    const parts = "c_fit,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(Resize.imaggaCrop());
    const parts = "c_imagga_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().regionRelative()
    );
    const parts = "c_imagga_crop,fl_region_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().relative()
    );
    const parts = "c_imagga_crop,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().height(100)
    );
    const parts = "c_imagga_crop,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,h_380,w_380", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().width(380).height(380)
    );
    const parts = "c_imagga_crop,h_380,w_380".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().width(100)
    );
    const parts = "c_imagga_crop,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().width(100).aspectRatio("2.0")
    );
    const parts = "c_imagga_crop,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_crop,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaCrop().width(100).height(100)
    );
    const parts = "c_imagga_crop,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().regionRelative()
    );
    const parts = "c_imagga_scale,fl_region_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().relative()
    );
    const parts = "c_imagga_scale,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().height(100)
    );
    const parts = "c_imagga_scale,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(150).height(150)
    );
    const parts = "c_imagga_scale,h_150,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,h_200,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(150).height(200)
    );
    const parts = "c_imagga_scale,h_200,w_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,h_240,w_260", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(260).height(240)
    );
    const parts = "c_imagga_scale,h_240,w_260".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(100)
    );
    const parts = "c_imagga_scale,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(100).aspectRatio("2.0")
    );
    const parts = "c_imagga_scale,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(100).height(100)
    );
    const parts = "c_imagga_scale,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_imagga_scale,w_150,h_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.imaggaScale().width(150).height(200)
    );
    const parts = "c_imagga_scale,w_150,h_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().regionRelative()
    );
    const parts = "c_lfill,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().relative()
    );
    const parts = "c_lfill,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,g_xy_center,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().gravity(Gravity.xyCenter()).x(1).y(2)
    );
    const parts = "c_lfill,g_xy_center,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().height(100)
    );
    const parts = "c_lfill,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().width(100)
    );
    const parts = "c_lfill,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().width(100).aspectRatio("2.0")
    );
    const parts = "c_lfill,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lfill,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().width(100).height(100)
    );
    const parts = "c_lfill,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().regionRelative()
    );
    const parts = "c_limit,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().relative()
    );
    const parts = "c_limit,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().height(100)
    );
    const parts = "c_limit,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().width(100)
    );
    const parts = "c_limit,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().width(100).aspectRatio("2.0")
    );
    const parts = "c_limit,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_limit,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().width(100).height(100)
    );
    const parts = "c_limit,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().regionRelative()
    );
    const parts = "c_lpad,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().relative()
    );
    const parts = "c_lpad,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().height(100)
    );
    const parts = "c_lpad,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().width(100)
    );
    const parts = "c_lpad,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().width(100).aspectRatio("2.0")
    );
    const parts = "c_lpad,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().width(100).height(100)
    );
    const parts = "c_lpad,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,x_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().offsetX(1)
    );
    const parts = "c_lpad,x_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_lpad,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad().offsetX(1).offsetY(2)
    );
    const parts = "c_lpad,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().regionRelative()
    );
    const parts = "c_mfit,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().relative()
    );
    const parts = "c_mfit,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().height(100)
    );
    const parts = "c_mfit,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(100)
    );
    const parts = "c_mfit,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,w_100,ar_16:9", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(100).aspectRatio(AspectRatio.ar16X9())
    );
    const parts = "c_mfit,w_100,ar_16:9".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(100).aspectRatio("2.0")
    );
    const parts = "c_mfit,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,w_100,fl_ignore_aspect_ratio", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit()
        .width(100)
        .aspectRatio(AspectRatio.ignoreInitialAspectRatio())
    );
    const parts = "c_mfit,w_100,fl_ignore_aspect_ratio"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mfit,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(100).height(100)
    );
    const parts = "c_mfit,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().regionRelative()
    );
    const parts = "c_mpad,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().relative()
    );
    const parts = "c_mpad,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().height(100)
    );
    const parts = "c_mpad,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().width(100)
    );
    const parts = "c_mpad,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().width(100).aspectRatio("2.0")
    );
    const parts = "c_mpad,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().width(100).height(100)
    );
    const parts = "c_mpad,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,x_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().offsetX(1)
    );
    const parts = "c_mpad,x_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_mpad,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().offsetX(1).offsetY(2)
    );
    const parts = "c_mpad,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.auto())
    );
    const parts = "c_pad,b_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.border())
    );
    const parts = "c_pad,b_auto:border".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.border().palette("red", "green"))
    );
    const parts = "c_pad,b_auto:border:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.border().contrast())
    );
    const parts = "c_pad,b_auto:border_contrast".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_contrast:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.border().contrast().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:border_contrast:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.borderGradient())
    );
    const parts = "c_pad,b_auto:border_gradient".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient:2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.borderGradient().gradientColors(2))
    );
    const parts = "c_pad,b_auto:border_gradient:2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient:2:horizontal", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.borderGradient()
          .gradientDirection("horizontal")
          .gradientColors(2)
      )
    );
    const parts = "c_pad,b_auto:border_gradient:2:horizontal"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient:horizontal", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.borderGradient().gradientDirection("horizontal")
      )
    );
    const parts = "c_pad,b_auto:border_gradient:horizontal"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.borderGradient().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:border_gradient:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.borderGradient().contrast())
    );
    const parts = "c_pad,b_auto:border_gradient_contrast"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient_contrast:2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.borderGradient().contrast().gradientColors(2)
      )
    );
    const parts = "c_pad,b_auto:border_gradient_contrast:2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:border_gradient_contrast:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.borderGradient().contrast().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:border_gradient_contrast:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.predominant())
    );
    const parts = "c_pad,b_auto:predominant".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.predominant().palette("red", "green"))
    );
    const parts = "c_pad,b_auto:predominant:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.predominant().contrast())
    );
    const parts = "c_pad,b_auto:predominant_contrast"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_contrast:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominant().contrast().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:predominant_contrast:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.predominantGradient())
    );
    const parts = "c_pad,b_auto:predominant_gradient"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient:2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient().gradientColors(2)
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient:2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient:2:horizontal", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient()
          .gradientDirection("horizontal")
          .gradientColors(2)
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient:2:horizontal"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient:horizontal", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient().gradientDirection("horizontal")
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient:horizontal"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.predominantGradient().contrast())
    );
    const parts = "c_pad,b_auto:predominant_gradient_contrast"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient_contrast:2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient().contrast().gradientColors(2)
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient_contrast:2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_auto:predominant_gradient_contrast:palette_red_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.predominantGradient().contrast().palette("red", "green")
      )
    );
    const parts = "c_pad,b_auto:predominant_gradient_contrast:palette_red_green"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_blurred", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.blurred())
    );
    const parts = "c_pad,b_blurred".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_blurred:100:500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(
        Background.blurred().intensity(100).brightness(500)
      )
    );
    const parts = "c_pad,b_blurred:100:500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.color("green"))
    );
    const parts = "c_pad,b_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,b_rgb:fff", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().background(Background.color("#fff"))
    );
    const parts = "c_pad,b_rgb:fff".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,du_10,h_360,q_70,w_480", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("10.0"))
      .resize(Resize.pad().width(480).height(360))
      .delivery(Delivery.quality(70))
      .setAssetType("image");
    const parts = "c_pad,du_10,h_360,q_70,w_480".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().regionRelative()
    );
    const parts = "c_pad,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().relative()
    );
    const parts = "c_pad,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().height(100)
    );
    const parts = "c_pad,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_200,w_200,b_black", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(200).height(200).background(Background.color("black"))
    );
    const parts = "c_pad,h_200,w_200,b_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_300,w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(400).height(300)
    );
    const parts = "c_pad,h_300,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_320,w_480,b_blurred:400:15", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(480)
        .height(320)
        .background(Background.blurred().intensity(400).brightness(15))
    );
    const parts = "c_pad,h_320,w_480,b_blurred:400:15"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_360,w_480,q_70,du_10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("10.0"))
      .resize(Resize.pad().width(480).height(360))
      .delivery(Delivery.quality(70))
      .setAssetType("image");
    const parts = "c_pad,h_360,w_480,q_70,du_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,h_360,w_480/du_10/q_70", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.pad().width(480).height(360))
      .videoEdit(VideoEdit.trim().duration("10.0"))
      .delivery(Delivery.quality(70))
      .setAssetType("image");
    const parts = "c_pad,h_360,w_480/du_10/q_70".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(100)
    );
    const parts = "c_pad,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(100).aspectRatio("2.0")
    );
    const parts = "c_pad,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(100).height(100)
    );
    const parts = "c_pad,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,w_200,h_200,e_saturation:50/e_shadow/bo_1px_solid_rgb:666", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.pad().width(200).height(200))
      .adjust(Adjust.saturation().level(50))
      .effect(Effect.shadow())
      .border(Border.solid(1, "#666"));
    const parts =
      "c_pad,w_200,h_200,e_saturation:50/e_shadow/bo_1px_solid_rgb:666"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(400)
    );
    const parts = "c_pad,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,x_1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().offsetX(1)
    );
    const parts = "c_pad,x_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_pad,x_1,y_2", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().offsetX(1).offsetY(2)
    );
    const parts = "c_pad,x_1,y_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,e_grayscale,f_auto,q_auto,w_100", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .effect(Effect.grayscale())
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "c_scale,e_grayscale,f_auto,q_auto,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,e_viesus_correct,w_400", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .adjust(Adjust.viesusCorrect());
    const parts = "c_scale,e_viesus_correct,w_400"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,e_viesus_correct,w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.viesusCorrect());
    const parts = "c_scale,e_viesus_correct,w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().regionRelative()
    );
    const parts = "c_scale,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().relative()
    );
    const parts = "c_scale,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,g_liquid", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().liquidRescaling()
    );
    const parts = "c_scale,g_liquid".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,h_0.3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(0.3)
    );
    const parts = "c_scale,h_0.3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(100)
    );
    const parts = "c_scale,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,h_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(150)
    );
    const parts = "c_scale,h_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,h_200,w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(200).height(200)
    );
    const parts = "c_scale,h_200,w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,h_200,w_200/e_sepia", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200).height(200))
      .effect(Effect.sepia());
    const parts = "c_scale,h_200,w_200/e_sepia".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,q_jpegmini,w_400", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .delivery(Delivery.quality(Quality.jpegmini()));
    const parts = "c_scale,q_jpegmini,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,q_jpegmini:1,w_400", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .delivery(Delivery.quality(Quality.jpegminiHigh()));
    const parts = "c_scale,q_jpegmini:1,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,t_sample_named_transform,w_1.0/t_sample_named_transform2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width("1.0"))
      .namedTransformation(NamedTransformation.name("sample_named_transform"))
      .namedTransformation(NamedTransformation.name("sample_named_transform2"));
    const parts =
      "c_scale,t_sample_named_transform,w_1.0/t_sample_named_transform2"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_0.1/e_sepia:30", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(0.1))
      .effect(Effect.sepia().level(30));
    const parts = "c_scale,w_0.1/e_sepia:30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_0.5", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(0.5)
    );
    const parts = "c_scale,w_0.5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(100)
    );
    const parts = "c_scale,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(100).aspectRatio("2.0")
    );
    const parts = "c_scale,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(100).height(100)
    );
    const parts = "c_scale,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(400)
    );
    const parts = "c_scale,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_400/l_cloudinary_icon_blue,fl_no_overflow", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .overlay(
        Overlay.source(Source.image("cloudinary_icon_blue")).position(
          new Position().allowOverflow(false)
        )
      );
    const parts = "c_scale,w_400/l_cloudinary_icon_blue,fl_no_overflow"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_scale,w_400/l_text:Arial_100:Flowers,co_yellow,b_rgb:FEB61FC2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .overlay(
        Overlay.source(
          Source.text("Flowers", new TextStyle("Arial", 100))
            .textColor("yellow")
            .backgroundColor("#FEB61FC2")
        )
      );
    const parts =
      "c_scale,w_400/l_text:Arial_100:Flowers,co_yellow,b_rgb:FEB61FC2"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().regionRelative()
    );
    const parts = "c_thumb,fl_region_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().relative()
    );
    const parts = "c_thumb,fl_relative".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_adv_eyes", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().gravity(Gravity.focusOn(FocusOn.advancedEyes()))
    );
    const parts = "c_thumb,g_adv_eyes".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_adv_face,h_100,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(100)
        .height(100)
        .gravity(Gravity.focusOn(FocusOn.advancedFace()))
    );
    const parts = "c_thumb,g_adv_face,h_100,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_adv_face,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(100)
        .height(100)
        .gravity(Gravity.focusOn(FocusOn.advancedFace()))
    );
    const parts = "c_thumb,g_adv_face,w_100,h_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_adv_faces,w_150,h_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .gravity(Gravity.focusOn(FocusOn.advancedFaces()))
    );
    const parts = "c_thumb,g_adv_faces,w_150,h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_center,w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().width(300).gravity(Gravity.compass("center"))
    );
    const parts = "c_thumb,g_center,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_face,h_130,w_130/g_south_east,l_badge,w_40,x_20,y_-40", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(130)
          .height(130)
          .gravity(Gravity.focusOn(FocusOn.face()))
      )
      .overlay(
        Overlay.source(
          Source.image("badge").transformation(
            new Transformation().resize(Resize.scale().width(40))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("south_east"))
            .offsetX(20)
            .offsetY(-40)
        )
      );
    const parts =
      "c_thumb,g_face,h_130,w_130/g_south_east,l_badge,w_40,x_20,y_-40"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_face,h_150,w_150/g_north_east,l_badge,w_0.08,x_0.15,y_0.15", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(150)
          .height(150)
          .gravity(Gravity.focusOn(FocusOn.face()))
      )
      .overlay(
        Overlay.source(
          Source.image("badge").transformation(
            new Transformation().resize(Resize.scale().width(0.08))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("north_east"))
            .offsetX(0.15)
            .offsetY(0.15)
        )
      );
    const parts =
      "c_thumb,g_face,h_150,w_150/g_north_east,l_badge,w_0.08,x_0.15,y_0.15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,g_face,z_0.75,h_150,w_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .zoom(0.75)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "c_thumb,g_face,z_0.75,h_150,w_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().height(100)
    );
    const parts = "c_thumb,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().width(100)
    );
    const parts = "c_thumb,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,w_100,ar_2.0", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().width(100).aspectRatio("2.0")
    );
    const parts = "c_thumb,w_100,ar_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("c_thumb,w_100,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().width(100).height(100)
    );
    const parts = "c_thumb,w_100,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_lightblue,e_outline:outer:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("outer").width(100).color("lightblue")
    );
    const parts = "co_lightblue,e_outline:outer:100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_orange,e_outline:outer:15:200", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("outer").width(15).blurLevel(200).color("orange")
    );
    const parts = "co_orange,e_outline:outer:15:200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_rgb:009900,e_shadow:50,x_10,y_10", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.shadow().strength(50).color("#009900").offsetX(10).offsetY(10)
    );
    const parts = "co_rgb:009900,e_shadow:50,x_10,y_10"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_rgb:1a8502,e_shadow:50,x_-15,y_15", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.shadow().strength(50).color("#1a8502").offsetX(-15).offsetY(15)
    );
    const parts = "co_rgb:1a8502,e_shadow:50,x_-15,y_15"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_rgb:20a020,e_colorize:50", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.colorize().level(50).color("#20a020")
    );
    const parts = "co_rgb:20a020,e_colorize:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("co_rgb:ec9800,e_colorize:17", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.colorize().level(17).color("#ec9800")
    );
    const parts = "co_rgb:ec9800,e_colorize:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("cs_icc:icc_file_public_id", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.colorSpaceFromICC("icc_file_public_id")
    );
    const parts = "cs_icc:icc_file_public_id".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("cs_keep_cmyk", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.colorSpace(ColorSpace.keepCmyk())
    );
    const parts = "cs_keep_cmyk".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("cs_no_cmyk", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.colorSpace(ColorSpace.noCmyk())
    );
    const parts = "cs_no_cmyk".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("cs_srgb", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.colorSpace(ColorSpace.srgb())
    );
    const parts = "cs_srgb".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("d_avatar.png", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.defaultImage("avatar.png")
    );
    const parts = "d_avatar.png".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("d_public_id", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.defaultImage("public_id")
    );
    const parts = "d_public_id".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("d_publicid", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.defaultImage("publicid")
    );
    const parts = "d_publicid".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dn_150", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.density(150)
    );
    const parts = "dn_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dn_20", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.density(20));
    const parts = "dn_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_1.0", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.dpr("1.0"));
    const parts = "dpr_1.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.dpr("2.0"));
    const parts = "dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,f_auto,q_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,f_auto,q_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,f_auto,q_auto,w_800", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(800))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,f_auto,q_auto,w_800".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,f_auto,q_auto/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_2,f_auto,q_auto/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,q_auto,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,q_auto,f_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto,w_500,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,q_auto,f_auto,w_500,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto,w_600", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,q_auto,f_auto,w_600".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto,w_600,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "dpr_2,q_auto,f_auto,w_600,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_2,q_auto,f_auto/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_2,q_auto,f_auto/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.dpr(Dpr.auto())
    );
    const parts = "dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto,w_400/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr(Dpr.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_auto,w_400/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto,w_600/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr(Dpr.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_auto,w_600/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_auto/bo_1px_solid_gray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto/bo_1px_solid_gray/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().height(300));
    const parts = "dpr_auto/bo_1px_solid_gray/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("dpr_auto/h_300/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .resize(Resize.scale().height(300))
      .border(Border.solid(1, "gray"));
    const parts = "dpr_auto/h_300/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_2/e_volume:30", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("2.0"))
      .videoEdit(VideoEdit.volume(30))
      .setAssetType("image");
    const parts = "du_2/e_volume:30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_2/e_volume:45", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("2.0"))
      .videoEdit(VideoEdit.volume(45))
      .setAssetType("image");
    const parts = "du_2/e_volume:45".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_3", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("3.0"))
      .setAssetType("image");
    const parts = "du_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_30,q_70:qmax_20", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("30.0"))
      .delivery(Delivery.quality(70).quantization(20))
      .setAssetType("image");
    const parts = "du_30,q_70:qmax_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_5,l_sample/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(Concatenate.imageSource("sample"))
          .transition(Transition.videoSource("transition1"))
          .duration(5)
      )
      .setAssetType("image");
    const parts =
      "du_5,l_sample/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_5,w_300,h_200/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/e_accelerate:5s,a_180/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("5.0"))
      .resize(Resize.scale().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(
          Transition.videoSource("transition1").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(180))
              .effect(Effect.accelerate().rate("5s"))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "du_5,w_300,h_200/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/e_accelerate:5s,a_180/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("du_50p,so_2", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("2.0").duration("50%"))
      .setAssetType("image");
    const parts = "du_50p,so_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_accelerate:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.accelerate().rate(100)
    );
    const parts = "e_accelerate:100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_accelerate:6", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.accelerate().rate(6)
    );
    const parts = "e_accelerate:6".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_adv_redeye", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.advancedRedEye()
    );
    const parts = "e_adv_redeye".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_adv_redeye/w_300,h_80,c_thumb,g_adv_eyes", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.advancedRedEye())
      .resize(
        Resize.thumbnail()
          .width(300)
          .height(80)
          .gravity(Gravity.focusOn(FocusOn.advancedEyes()))
      );
    const parts = "e_adv_redeye/w_300,h_80,c_thumb,g_adv_eyes"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_anti_removal:95,l_cloudinary_icon,g_north_west", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon"))
        .position(new Position().gravity(Gravity.compass("north_west")))
        .blendMode(BlendMode.antiRemoval(95))
    );
    const parts = "e_anti_removal:95,l_cloudinary_icon,g_north_west"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:al_dente", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("al_dente")
    );
    const parts = "e_art:al_dente".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:athena", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("athena")
    );
    const parts = "e_art:athena".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:audrey", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("audrey")
    );
    const parts = "e_art:audrey".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:aurora", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("aurora")
    );
    const parts = "e_art:aurora".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:daguerre", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("daguerre")
    );
    const parts = "e_art:daguerre".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:eucalyptus", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("eucalyptus")
    );
    const parts = "e_art:eucalyptus".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:fes", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("fes")
    );
    const parts = "e_art:fes".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:frost", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("frost")
    );
    const parts = "e_art:frost".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:hairspray", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("hairspray")
    );
    const parts = "e_art:hairspray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:hokusai", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("hokusai")
    );
    const parts = "e_art:hokusai".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:incognito", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("incognito")
    );
    const parts = "e_art:incognito".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:linen", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("linen")
    );
    const parts = "e_art:linen".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:peacock", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("peacock")
    );
    const parts = "e_art:peacock".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:primavera", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("primavera")
    );
    const parts = "e_art:primavera".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:quartz", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("quartz")
    );
    const parts = "e_art:quartz".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:red_rock", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("red_rock")
    );
    const parts = "e_art:red_rock".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:refresh", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("refresh")
    );
    const parts = "e_art:refresh".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:sizzle", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("sizzle")
    );
    const parts = "e_art:sizzle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:sonnet", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("sonnet")
    );
    const parts = "e_art:sonnet".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:ukulele", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("ukulele")
    );
    const parts = "e_art:ukulele".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_art:zorro", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.artisticFilter("zorro")
    );
    const parts = "e_art:zorro".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_assist_colorblind", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.assistColorBlind()
    );
    const parts = "e_assist_colorblind".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_assist_colorblind:20", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.assistColorBlind().stripesStrength(20)
    );
    const parts = "e_assist_colorblind:20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_assist_colorblind:8", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.assistColorBlind().stripesStrength(8)
    );
    const parts = "e_assist_colorblind:8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_assist_colorblind:8/e_simulate_colorblind", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.assistColorBlind().stripesStrength(8))
      .effect(Effect.simulateColorBlind());
    const parts = "e_assist_colorblind:8/e_simulate_colorblind"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_assist_colorblind:xray", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.assistColorBlind().xray()
    );
    const parts = "e_assist_colorblind:xray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_brightness", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoBrightness()
    );
    const parts = "e_auto_brightness".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_brightness:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoBrightness().blend(10)
    );
    const parts = "e_auto_brightness:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_brightness:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoBrightness().blend(17)
    );
    const parts = "e_auto_brightness:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_brightness:80", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoBrightness().blend(80)
    );
    const parts = "e_auto_brightness:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_color", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.autoColor());
    const parts = "e_auto_color".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_color:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoColor().blend(10)
    );
    const parts = "e_auto_color:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_color:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoColor().blend(17)
    );
    const parts = "e_auto_color:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_color:80", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoColor().blend(80)
    );
    const parts = "e_auto_color:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_contrast", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.autoContrast());
    const parts = "e_auto_contrast".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_contrast:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoContrast().blend(10)
    );
    const parts = "e_auto_contrast:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_contrast:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoContrast().blend(17)
    );
    const parts = "e_auto_contrast:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_auto_contrast:80", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.autoContrast().blend(80)
    );
    const parts = "e_auto_contrast:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_bgremoval", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.removeBackground()
    );
    const parts = "e_bgremoval".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_bgremoval:ffff00", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.removeBackground().colorToRemove("#ffff00")
    );
    const parts = "e_bgremoval:ffff00".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_bgremoval:screen", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.removeBackground().screen()
    );
    const parts = "e_bgremoval:screen".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blackwhite", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.blackwhite());
    const parts = "e_blackwhite".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blackwhite:40", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blackwhite().threshold(40)
    );
    const parts = "e_blackwhite:40".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blackwhite:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blackwhite().threshold(5)
    );
    const parts = "e_blackwhite:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blue", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.blue());
    const parts = "e_blue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blue:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.blue().level(10)
    );
    const parts = "e_blue:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blue:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.blue().level(17)
    );
    const parts = "e_blue:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blue:90", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.blue().level(90)
    );
    const parts = "e_blue:90".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.blur());
    const parts = "e_blur".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(100)
    );
    const parts = "e_blur:100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur:300", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(300)
    );
    const parts = "e_blur:300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(5)
    );
    const parts = "e_blur:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur:500/l_video:dog,w_600/w_500", () => {
    const tAsset = new CloudinaryVideo("sample")
      .effect(Effect.blur().strength(500))
      .overlay(
        Overlay.source(
          Source.video("dog").transformation(
            new Transformation().resize(Resize.scale().width(600))
          )
        )
      )
      .resize(Resize.scale().width(500))
      .setAssetType("image");
    const parts = "e_blur:500/l_video:dog,w_600/w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur:800", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(800)
    );
    const parts = "e_blur:800".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_faces:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(5).region(Region.faces())
    );
    const parts = "e_blur_faces:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_faces:800", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(800).region(Region.faces())
    );
    const parts = "e_blur_faces:800".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region,h_100,w_100,x_50,y_120", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().region(Region.custom().width(100).height(100).x(50).y(120))
    );
    const parts = "e_blur_region,h_100,w_100,x_50,y_120"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region:1000,h_425,w_550,x_600,y_400", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur()
        .strength(1000)
        .region(Region.custom().width(550).height(425).x(600).y(400))
    );
    const parts = "e_blur_region:1000,h_425,w_550,x_600,y_400"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region:1500,y_0.75", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(1500).region(Region.custom().y(0.75))
    );
    const parts = "e_blur_region:1500,y_0.75".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region:5,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(5).region(Region.ocr())
    );
    const parts = "e_blur_region:5,g_ocr_text".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region:800,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.blur().strength(800).region(Region.ocr())
    );
    const parts = "e_blur_region:800,g_ocr_text".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_blur_region:800,g_ocr_text/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.blur().strength(800).region(Region.ocr()))
      .resize(Resize.scale().height(300));
    const parts = "e_blur_region:800,g_ocr_text/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_brightness:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.brightness().level(17)
    );
    const parts = "e_brightness:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_brightness:60", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.brightness().level(60)
    );
    const parts = "e_brightness:60".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_brightness_hsb", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.brightnessHSB());
    const parts = "e_brightness_hsb".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_brightness_hsb:-50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.brightnessHSB().level(-50)
    );
    const parts = "e_brightness_hsb:-50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_brightness_hsb:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.brightnessHSB().level(10)
    );
    const parts = "e_brightness_hsb:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.cartoonify());
    const parts = "e_cartoonify".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify:20:bw", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.cartoonify().lineStrength(20).blackwhite()
    );
    const parts = "e_cartoonify:20:bw".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify:70:80", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.cartoonify().lineStrength(70).colorReductionLevel(80)
    );
    const parts = "e_cartoonify:70:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify:80", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.cartoonify().lineStrength(80)
    );
    const parts = "e_cartoonify:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify:80:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.cartoonify().lineStrength(80).colorReductionLevel(100)
    );
    const parts = "e_cartoonify:80:100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_cartoonify:80:bw", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.cartoonify().lineStrength(80).blackwhite()
    );
    const parts = "e_cartoonify:80:bw".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_colorize:35,co_darkviolet", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.colorize().level(35).color("darkviolet")
    );
    const parts = "e_colorize:35,co_darkviolet".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_colorize:80", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.colorize().level(80)
    );
    const parts = "e_colorize:80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_contrast", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.contrast());
    const parts = "e_contrast".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_contrast:-70", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.contrast().level(-70)
    );
    const parts = "e_contrast:-70".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_contrast:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.contrast().level(17)
    );
    const parts = "e_contrast:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_contrast:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.contrast().level(50)
    );
    const parts = "e_contrast:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_deshake", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.deshake());
    const parts = "e_deshake".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_deshake:32", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.deshake().shakeStrength(ShakeStrength.pixels32())
    );
    const parts = "e_deshake:32".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_distort:5:34:70:10:70:75:5:55", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.distort([5, 34, 70, 10, 70, 75, 5, 55])
    );
    const parts = "e_distort:5:34:70:10:70:75:5:55"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_distort:arc:180", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.distortArc("180.0")
    );
    const parts = "e_distort:arc:180".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_distort:arc:5", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.distortArc("5.0")
    );
    const parts = "e_distort:arc:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fade:-6", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.fadeOut().duration(6)
    );
    const parts = "e_fade:-6".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fade:2000", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.fadeIn().duration(2000)
    );
    const parts = "e_fade:2000".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fade:2000/e_fade:-4000", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.fadeIn().duration(2000))
      .effect(Effect.fadeOut().duration(4000));
    const parts = "e_fade:2000/e_fade:-4000".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fade:6", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.fadeIn().duration(6)
    );
    const parts = "e_fade:6".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fill_light", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.fillLight());
    const parts = "e_fill_light".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fill_light:10:20", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.fillLight().blend(10).bias(20)
    );
    const parts = "e_fill_light:10:20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fill_light:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.fillLight().blend(17)
    );
    const parts = "e_fill_light:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fill_light:17:-100", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.fillLight().blend(17).bias(-100)
    );
    const parts = "e_fill_light:17:-100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_fill_light:70:20", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.fillLight().blend(70).bias(20)
    );
    const parts = "e_fill_light:70:20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_gamma:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.gamma().level(17)
    );
    const parts = "e_gamma:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_gamma:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.gamma().level(50)
    );
    const parts = "e_gamma:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_gradient_fade:symmetric:10,x_0.2,y_0.4", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.gradientFade()
        .strength(10)
        .type(GradientFade.symmetric())
        .horizontalStartPoint(0.2)
        .verticalStartPoint(0.4)
    );
    const parts = "e_gradient_fade:symmetric:10,x_0.2,y_0.4"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_gradient_fade:symmetric_pad:50,x_0.2", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.gradientFade()
        .strength(50)
        .type(GradientFade.symmetricPad())
        .horizontalStartPoint(0.2)
    );
    const parts = "e_gradient_fade:symmetric_pad:50,x_0.2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_grayscale", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.grayscale());
    const parts = "e_grayscale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_green", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.green());
    const parts = "e_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_green:-30", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.green().level(-30)
    );
    const parts = "e_green:-30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_green:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.green().level(10)
    );
    const parts = "e_green:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_green:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.green().level(17)
    );
    const parts = "e_green:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_hue", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.hue());
    const parts = "e_hue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_hue:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.hue().level(10));
    const parts = "e_hue:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_hue:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.hue().level(17));
    const parts = "e_hue:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_hue:40", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.hue().level(40));
    const parts = "e_hue:40".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.improve());
    const parts = "e_improve".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.improve().blend(50)
    );
    const parts = "e_improve:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve:indoor", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.improve().mode("indoor")
    );
    const parts = "e_improve:indoor".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve:outdoor", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.improve().mode("outdoor")
    );
    const parts = "e_improve:outdoor".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve:outdoor:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.improve().mode("outdoor").blend(10)
    );
    const parts = "e_improve:outdoor:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_improve:outdoor:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.improve().mode("outdoor").blend(50)
    );
    const parts = "e_improve:outdoor:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_make_transparent:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.makeTransparent().tolerance(5)
    );
    const parts = "e_make_transparent:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_make_transparent:50,co_red", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.makeTransparent().tolerance(50).colorToReplace("red")
    );
    const parts = "e_make_transparent:50,co_red".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_multiply,l_cloudinary_icon_blue", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon_blue")).blendMode("multiply")
    );
    const parts = "e_multiply,l_cloudinary_icon_blue"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_negate", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.negate());
    const parts = "e_negate".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_noise:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.noise().level(100)
    );
    const parts = "e_noise:100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_oil_paint", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.oilPaint());
    const parts = "e_oil_paint".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_oil_paint:40", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.oilPaint().strength(40)
    );
    const parts = "e_oil_paint:40".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_oil_paint:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.oilPaint().strength(5)
    );
    const parts = "e_oil_paint:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_oil_paint:70", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.oilPaint().strength(70)
    );
    const parts = "e_oil_paint:70".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_opacity_threshold", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.opacityThreshold()
    );
    const parts = "e_opacity_threshold".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_opacity_threshold:1/b_blue", () => {
    const tAsset = new CloudinaryImage("sample")
      .adjust(Adjust.opacityThreshold().level(1))
      .backgroundColor("blue");
    const parts = "e_opacity_threshold:1/b_blue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_opacity_threshold:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.opacityThreshold().level(10)
    );
    const parts = "e_opacity_threshold:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_opacity_threshold:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.opacityThreshold().level(17)
    );
    const parts = "e_opacity_threshold:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_ordered_dither", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.dither());
    const parts = "e_ordered_dither".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_ordered_dither:12", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.dither().type(Dither.halftone16x16Orthogonal())
    );
    const parts = "e_ordered_dither:12".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_ordered_dither:13", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.dither().type(Dither.circles5x5Black())
    );
    const parts = "e_ordered_dither:13".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_ordered_dither:3", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.dither().type(Dither.ordered3x3Dispersed())
    );
    const parts = "e_ordered_dither:3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_ordered_dither:6", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.dither().type(Dither.halftone4x4Angled())
    );
    const parts = "e_ordered_dither:6".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline,co_orange", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().color("orange")
    );
    const parts = "e_outline,co_orange".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:$foo:100:5,co_red", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("$foo").width(100).blurLevel(5).color("red")
    );
    const parts = "e_outline:$foo:100:5,co_red".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:fill,co_orange", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("fill").color("orange")
    );
    const parts = "e_outline:fill,co_orange".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:inner,co_orange", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("inner").color("orange")
    );
    const parts = "e_outline:inner,co_orange".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:inner:100:5,co_rgb:ffffff", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("inner").width(100).blurLevel(5).color("#ffffff")
    );
    const parts = "e_outline:inner:100:5,co_rgb:ffffff"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:inner_fill,co_orange", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("inner_fill").color("orange")
    );
    const parts = "e_outline:inner_fill,co_orange"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:outer,co_orange", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("outer").color("orange")
    );
    const parts = "e_outline:outer,co_orange".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:outer:20:200", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.outline().mode("outer").width(20).blurLevel(200)
    );
    const parts = "e_outline:outer:20:200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:outer:20:200/e_red:50/e_sharpen/e_improve/o_70", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.outline().mode("outer").width(20).blurLevel(200))
      .adjust(Adjust.red().level(50))
      .adjust(Adjust.sharpen())
      .adjust(Adjust.improve())
      .adjust(Adjust.opacity(70));
    const parts = "e_outline:outer:20:200/e_red:50/e_sharpen/e_improve/o_70"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:outer:20:200/l_cloudinary_icon/e_red:50/e_sharpen/e_improve/o_70", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.outline().mode("outer").width(20).blurLevel(200))
      .overlay(Overlay.source(Source.image("cloudinary_icon")))
      .adjust(Adjust.red().level(50))
      .adjust(Adjust.sharpen())
      .adjust(Adjust.improve())
      .adjust(Adjust.opacity(70));
    const parts =
      "e_outline:outer:20:200/l_cloudinary_icon/e_red:50/e_sharpen/e_improve/o_70"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_outline:outer:20:200/l_cloudinary_icon_white/e_red:50/e_sharpen/e_improve/o_70", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.outline().mode("outer").width(20).blurLevel(200))
      .overlay(Overlay.source(Source.image("cloudinary_icon_white")))
      .adjust(Adjust.red().level(50))
      .adjust(Adjust.sharpen())
      .adjust(Adjust.improve())
      .adjust(Adjust.opacity(70));
    const parts =
      "e_outline:outer:20:200/l_cloudinary_icon_white/e_red:50/e_sharpen/e_improve/o_70"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_overlay,l_cloudinary_icon_blue", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon_blue")).blendMode("overlay")
    );
    const parts = "e_overlay,l_cloudinary_icon_blue"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.pixelate());
    const parts = "e_pixelate".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate:17", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(17)
    );
    const parts = "e_pixelate:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate:20", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(20)
    );
    const parts = "e_pixelate:20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_faces:15", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(15).region(Region.faces())
    );
    const parts = "e_pixelate_faces:15".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_faces:5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(5).region(Region.faces())
    );
    const parts = "e_pixelate_faces:5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_faces:9", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(9).region(Region.faces())
    );
    const parts = "e_pixelate_faces:9".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_region,w_100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().region(Region.custom().width(100))
    );
    const parts = "e_pixelate_region,w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_region:2,h_100,w_200,x_1,y_3", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate()
        .squareSize(2)
        .region(Region.custom().width(200).height(100).x(1).y(3))
    );
    const parts = "e_pixelate_region:2,h_100,w_200,x_1,y_3"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_region:25,y_0.75", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(25).region(Region.custom().y(0.75))
    );
    const parts = "e_pixelate_region:25,y_0.75".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_region:35,h_425,w_550,x_600,y_400", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate()
        .squareSize(35)
        .region(Region.custom().width(550).height(425).x(600).y(400))
    );
    const parts = "e_pixelate_region:35,h_425,w_550,x_600,y_400"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_pixelate_region:5,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.pixelate().squareSize(5).region(Region.ocr())
    );
    const parts = "e_pixelate_region:5,g_ocr_text"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_preview,fl_getinfo", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.preview())
      .addFlag("getinfo")
      .setAssetType("image");
    const parts = "e_preview,fl_getinfo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_preview:duration_12.0:max_seg_3:min_seg_dur_3.0", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.preview()
          .duration("12.0")
          .maximumSegments(3)
          .minimumSegmentDuration("3.0")
      )
      .setAssetType("image");
    const parts = "e_preview:duration_12.0:max_seg_3:min_seg_dur_3.0"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_preview:duration_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.preview().duration("5.0"))
      .setAssetType("image");
    const parts = "e_preview:duration_5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_preview:duration_5.0", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.preview().duration("5.0"))
      .setAssetType("image");
    const parts = "e_preview:duration_5.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_preview:duration_5.0:max_seg_10:min_seg_dur_1.0", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.preview()
          .duration("5.0")
          .maximumSegments(10)
          .minimumSegmentDuration("1.0")
      )
      .setAssetType("image");
    const parts = "e_preview:duration_5.0:max_seg_10:min_seg_dur_1.0"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_recolor:0.3:0.7:0.1:0.2:0.3:0.6:0.1:0.2:0.2:0.5:0.1:0.2:0.2:0.2:0.2:0.2", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.recolor([
        [0.3, 0.7, 0.1, 0.2],
        [0.3, 0.6, 0.1, 0.2],
        [0.2, 0.5, 0.1, 0.2],
        [0.2, 0.2, 0.2, 0.2],
      ])
    );
    const parts =
      "e_recolor:0.3:0.7:0.1:0.2:0.3:0.6:0.1:0.2:0.2:0.5:0.1:0.2:0.2:0.2:0.2:0.2"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_recolor:0.3:0.7:0.1:0.3:0.6:0.1:0.2:0.5:0.1", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.recolor([
        [0.3, 0.7, 0.1],
        [0.3, 0.6, 0.1],
        [0.2, 0.5, 0.1],
      ])
    );
    const parts = "e_recolor:0.3:0.7:0.1:0.3:0.6:0.1:0.2:0.5:0.1"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_red", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.red());
    const parts = "e_red".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_red:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.red().level(10));
    const parts = "e_red:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_red:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.red().level(17));
    const parts = "e_red:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_red:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.red().level(50));
    const parts = "e_red:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_redeye", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.redEye());
    const parts = "e_redeye".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:2F4F4F:20", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.replaceColor("#2F4F4F").tolerance(20)
    );
    const parts = "e_replace_color:2F4F4F:20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:maroon:80:2b38aa", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.replaceColor("maroon").fromColor("#2b38aa").tolerance(80)
    );
    const parts = "e_replace_color:maroon:80:2b38aa"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:maroon:80:2b38aa/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .adjust(Adjust.replaceColor("maroon").fromColor("#2b38aa").tolerance(80))
      .resize(Resize.scale().width(250));
    const parts = "e_replace_color:maroon:80:2b38aa/w_250"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:red:5:blue", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.replaceColor("red").fromColor("blue").tolerance(5)
    );
    const parts = "e_replace_color:red:5:blue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:saddlebrown", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.replaceColor("saddlebrown")
    );
    const parts = "e_replace_color:saddlebrown".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_replace_color:silver:55:89b8ed", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.replaceColor("silver").fromColor("#89b8ed").tolerance(55)
    );
    const parts = "e_replace_color:silver:55:89b8ed"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_reverse", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.reverse());
    const parts = "e_reverse".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_saturation:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.saturation().level(17)
    );
    const parts = "e_saturation:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_saturation:50", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.saturation().level(50)
    );
    const parts = "e_saturation:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_saturation:70", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.saturation().level(70)
    );
    const parts = "e_saturation:70".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_screen,l_cloudinary_icon", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon")).blendMode("screen")
    );
    const parts = "e_screen,l_cloudinary_icon".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_screen,l_cloudinary_icon_blue", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon_blue")).blendMode("screen")
    );
    const parts = "e_screen,l_cloudinary_icon_blue"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sepia", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.sepia());
    const parts = "e_sepia".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sepia:17", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.sepia().level(17)
    );
    const parts = "e_sepia:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sepia:17/c_crop,h_200,w_100", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.sepia().level(17))
      .resize(Resize.crop().width(100).height(200));
    const parts = "e_sepia:17/c_crop,h_200,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sepia:50", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.sepia().level(50)
    );
    const parts = "e_sepia:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_shadow:50,x_10,y_10", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.shadow().strength(50).offsetX(10).offsetY(10)
    );
    const parts = "e_shadow:50,x_10,y_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sharpen", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.sharpen());
    const parts = "e_sharpen".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sharpen:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.sharpen().strength(10)
    );
    const parts = "e_sharpen:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sharpen:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.sharpen().strength(17)
    );
    const parts = "e_sharpen:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_sharpen:400", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.sharpen().strength(400)
    );
    const parts = "e_sharpen:400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_shear:20.0:0.0", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.shear("20.0", "0.0")
    );
    const parts = "e_shear:20.0:0.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_shear:23.0:50.0", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.shear("23.0", "50.0")
    );
    const parts = "e_shear:23.0:50.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_simulate_colorblind", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.simulateColorBlind()
    );
    const parts = "e_simulate_colorblind".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_simulate_colorblind/h_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .effect(Effect.simulateColorBlind())
      .resize(Resize.scale().height(200));
    const parts = "e_simulate_colorblind/h_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_simulate_colorblind:deuteranopia", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.simulateColorBlind().condition("deuteranopia")
    );
    const parts = "e_simulate_colorblind:deuteranopia"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_simulate_colorblind:protanopia", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.simulateColorBlind().condition("protanopia")
    );
    const parts = "e_simulate_colorblind:protanopia"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_style_transfer,l_davinci_mona_lisa", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.styleTransfer(Source.image("davinci_mona_lisa"))
    );
    const parts = "e_style_transfer,l_davinci_mona_lisa"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_style_transfer,l_lighthouse", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.styleTransfer(Source.image("lighthouse"))
    );
    const parts = "e_style_transfer,l_lighthouse"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_style_transfer:preserve_color:40,l_lighthouse", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.styleTransfer(Source.image("lighthouse"))
        .preserveColor()
        .strength(40)
    );
    const parts = "e_style_transfer:preserve_color:40,l_lighthouse"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_style_transfer:preserve_color:40,l_lighthouse/e_sepia/fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.styleTransfer(
        Source.image("lighthouse").transformation(
          new Transformation().effect(Effect.sepia())
        )
      )
        .preserveColor()
        .strength(40)
    );
    const parts =
      "e_style_transfer:preserve_color:40,l_lighthouse/e_sepia/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_trim", () => {
    const tAsset = new CloudinaryImage("sample").reshape(Reshape.trim());
    const parts = "e_trim".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_trim:50", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.trim().colorSimilarity(50)
    );
    const parts = "e_trim:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_trim:50:yellow", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.trim().colorSimilarity(50).colorOverride("yellow")
    );
    const parts = "e_trim:50:yellow".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_unsharp_mask", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.unsharpMask());
    const parts = "e_unsharp_mask".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_unsharp_mask:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.unsharpMask().strength(10)
    );
    const parts = "e_unsharp_mask:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_unsharp_mask:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.unsharpMask().strength(17)
    );
    const parts = "e_unsharp_mask:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_unsharp_mask:500", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.unsharpMask().strength(500)
    );
    const parts = "e_unsharp_mask:500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vectorize:colors:15:detail:200:despeckle:0.2:paths:90:corners:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vectorize()
        .numOfColors(15)
        .detailsLevel(200)
        .despeckleLevel(0.2)
        .paths(90)
        .cornersLevel(100)
    );
    const parts =
      "e_vectorize:colors:15:detail:200:despeckle:0.2:paths:90:corners:100"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vectorize:colors:17", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vectorize().numOfColors(17)
    );
    const parts = "e_vectorize:colors:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vectorize:colors:17:detail:100", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vectorize().numOfColors(17).detailsLevel(100)
    );
    const parts = "e_vectorize:colors:17:detail:100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vectorize:colors:3:detail:0.5", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vectorize().numOfColors(3).detailsLevel(0.5)
    );
    const parts = "e_vectorize:colors:3:detail:0.5"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vectorize:detail:200", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vectorize().detailsLevel(200)
    );
    const parts = "e_vectorize:detail:200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vibrance", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.vibrance());
    const parts = "e_vibrance".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vibrance:10", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.vibrance().strength(10)
    );
    const parts = "e_vibrance:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vibrance:17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.vibrance().strength(17)
    );
    const parts = "e_vibrance:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vibrance:70", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.vibrance().strength(70)
    );
    const parts = "e_vibrance:70".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_viesus_correct", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.viesusCorrect());
    const parts = "e_viesus_correct".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_viesus_correct:no_redeye", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.viesusCorrect().noRedEye()
    );
    const parts = "e_viesus_correct:no_redeye".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_viesus_correct:no_redeye:skin_saturation_5", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.viesusCorrect().noRedEye().skinSaturation(5)
    );
    const parts = "e_viesus_correct:no_redeye:skin_saturation_5"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_viesus_correct:skin_saturation", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.viesusCorrect().skinSaturation()
    );
    const parts = "e_viesus_correct:skin_saturation"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_viesus_correct:skin_saturation_20", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.viesusCorrect().skinSaturation(20)
    );
    const parts = "e_viesus_correct:skin_saturation_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vignette", () => {
    const tAsset = new CloudinaryImage("sample").effect(Effect.vignette());
    const parts = "e_vignette".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vignette:17", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vignette().strength(17)
    );
    const parts = "e_vignette:17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_vignette:30", () => {
    const tAsset = new CloudinaryImage("sample").effect(
      Effect.vignette().strength(30)
    );
    const parts = "e_vignette:30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_volume:10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.volume(10))
      .setAssetType("image");
    const parts = "e_volume:10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_volume:50", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.volume(50))
      .setAssetType("image");
    const parts = "e_volume:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_volume:5db", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.volume("5db"))
      .setAssetType("image");
    const parts = "e_volume:5db".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("e_volume:mute", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.volume(Volume.mute()))
      .setAssetType("image");
    const parts = "e_volume:mute".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("eo_10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().endOffset("10.0"))
      .setAssetType("image");
    const parts = "eo_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("eo_3", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().endOffset("3.0"))
      .setAssetType("image");
    const parts = "eo_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.auto())
    );
    const parts = "f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,dpr_2,q_auto,h_150,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,dpr_2,q_auto,h_150,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,dpr_2,q_auto,h_200,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(200))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,dpr_2,q_auto,h_200,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()));
    const parts = "f_auto,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,fl_preserve_transparency", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.auto()).preserveTransparency()
    );
    const parts = "f_auto,fl_preserve_transparency"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,dpr_2,h_150,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,dpr_2,h_150,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,dpr_2,h_200,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(200))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,dpr_2,h_200,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,dpr_2/bo_1px_solid_gray/w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"))
      .resize(Resize.scale().width(500));
    const parts = "f_auto,q_auto,dpr_2/bo_1px_solid_gray/w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,dpr_auto,w_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,dpr_auto,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,h_150,dpr_2,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,h_150,dpr_2,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto,w_500,dpr_2,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto,w_500,dpr_2,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,q_auto/", () => {
    const tAsset = new CloudinaryImage("/sample")
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,q_auto/".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto,w_150,dpr_2,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "f_auto,w_150,dpr_2,q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_auto/dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "f_auto/dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_gif,fl_lossy", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.gif()).lossy()
    );
    const parts = "f_gif,fl_lossy".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_glb", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.glb())
    );
    const parts = "f_glb".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_jpg", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.jpg())
    );
    const parts = "f_jpg".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_jpg,fl_progressive", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.jpg()).progressive("progressive")
    );
    const parts = "f_jpg,fl_progressive".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_jpg,fl_progressive:semi", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.jpg()).progressive("semi")
    );
    const parts = "f_jpg,fl_progressive:semi".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_jpg,u_some", () => {
    const tAsset = new CloudinaryImage("sample").underlay(
      Underlay.source(
        Source.image("some").transformation(
          new Transformation().delivery(Delivery.format(Format.jpg()))
        )
      )
    );
    const parts = "f_jpg,u_some".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_jpg/u_some", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.jpg()))
      .underlay(Underlay.source(Source.image("some")));
    const parts = "f_jpg/u_some".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_mp3", () => {
    const tAsset = new CloudinaryVideo("sample")
      .delivery(Delivery.format(Format.audioMp3()))
      .setAssetType("image");
    const parts = "f_mp3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_mp4", () => {
    const tAsset = new CloudinaryVideo("sample")
      .delivery(Delivery.format(Format.videoMp4()))
      .setAssetType("image");
    const parts = "f_mp4".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_mp4,w_300", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.scale().width(300))
      .delivery(Delivery.format(Format.videoMp4()))
      .setAssetType("image");
    const parts = "f_mp4,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_png", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.png())
    );
    const parts = "f_png".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_png/a_90,ar_1,b_rgb:a17ec5,c_fill,g_auto,h_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.png()))
      .rotate(Rotate.byAngle(90))
      .resize(
        Resize.fill()
          .height(200)
          .aspectRatio("1.0")
          .gravity(Gravity.autoGravity())
      )
      .backgroundColor("#a17ec5");
    const parts = "f_png/a_90,ar_1,b_rgb:a17ec5,c_fill,g_auto,h_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_png/w_800/l_text:Unkempt_250_bold:Water,fl_cutter,e_shadow", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.png()))
      .resize(Resize.scale().width(800))
      .reshape(
        Reshape.cutByImage(
          Source.text(
            "Water",
            new TextStyle("Unkempt", 250).fontWeight("bold")
          ).transformation(new Transformation().effect(Effect.shadow()))
        )
      );
    const parts = "f_png/w_800/l_text:Unkempt_250_bold:Water,fl_cutter,e_shadow"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("f_webm", () => {
    const tAsset = new CloudinaryVideo("sample")
      .delivery(Delivery.format(Format.videoWebm()))
      .setAssetType("image");
    const parts = "f_webm".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_apng", () => {
    const tAsset = new CloudinaryImage("sample").addFlag("apng");
    const parts = "fl_apng".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_attachment", () => {
    const tAsset = new CloudinaryImage("sample").addFlag("attachment");
    const parts = "fl_attachment".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_attachment:pretty_flower", () => {
    const tAsset = new CloudinaryImage("sample").addFlag(
      Flag.attachment("pretty_flower")
    );
    const parts = "fl_attachment:pretty_flower".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_attachment:pretty_flower,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.auto()))
      .addFlag(Flag.attachment("pretty_flower"));
    const parts = "fl_attachment:pretty_flower,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_clip,pg_2", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.clip().byIndex(2)
    );
    const parts = "fl_clip,pg_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_clip,pg_name:path", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.clip().byName("path")
    );
    const parts = "fl_clip,pg_name:path".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_clip,pg_name:stones", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.clip().byName("stones")
    );
    const parts = "fl_clip,pg_name:stones".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_clip_evenodd", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.clip().evenOdd()
    );
    const parts = "fl_clip_evenodd".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_clip_evenodd,pg_2", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.clip().byIndex(2).evenOdd()
    );
    const parts = "fl_clip_evenodd,pg_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_draco", () => {
    const tAsset = new CloudinaryImage("sample").addFlag("draco");
    const parts = "fl_draco".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_keep_iptc", () => {
    const tAsset = new CloudinaryImage("sample").addFlag("keep_iptc");
    const parts = "fl_keep_iptc".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_lossy", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.format(Format.gif()).lossy()
    );
    const parts = "fl_lossy".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_lossy,q_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.gif()).lossy())
      .delivery(Delivery.quality(50));
    const parts = "fl_lossy,q_50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_region_relative,g_adv_eyes,l_glasses,w_1.5", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("glasses").transformation(
          new Transformation().resize(
            Resize.scale().width(1.5).regionRelative()
          )
        )
      ).position(
        new Position().gravity(Gravity.focusOn(FocusOn.advancedEyes()))
      )
    );
    const parts = "fl_region_relative,g_adv_eyes,l_glasses,w_1.5"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_region_relative,g_adv_eyes,l_glasses,w_1.7", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("glasses").transformation(
          new Transformation().resize(
            Resize.scale().width(1.7).regionRelative()
          )
        )
      ).position(
        new Position().gravity(Gravity.focusOn(FocusOn.advancedEyes()))
      )
    );
    const parts = "fl_region_relative,g_adv_eyes,l_glasses,w_1.7"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_region_relative,g_adv_faces,l_silver_face_mask,w_1.1", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("silver_face_mask").transformation(
          new Transformation().resize(
            Resize.scale().width(1.1).regionRelative()
          )
        )
      ).position(
        new Position().gravity(Gravity.focusOn(FocusOn.advancedFaces()))
      )
    );
    const parts = "fl_region_relative,g_adv_faces,l_silver_face_mask,w_1.1"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_splice,l_video:dog/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.concatenate(Concatenate.videoSource("dog")))
      .setAssetType("image");
    const parts = "fl_splice,l_video:dog/fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_splice,l_video:dog/fl_layer_apply,so_0", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(Concatenate.videoSource("dog")).prepend()
      )
      .setAssetType("image");
    const parts = "fl_splice,l_video:dog/fl_layer_apply,so_0"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fl_whatever", () => {
    const tAsset = new CloudinaryImage("sample").addFlag("whatever");
    const parts = "fl_whatever".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fn_pre:remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg==", () => {
    const tAsset = new CloudinaryImage("sample").customFunction(
      CustomFunction.remote(
        "https://my.preprocess.custom/function"
      ).preprocess()
    );
    const parts =
      "fn_pre:remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg=="
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fn_remote:aHR0cHM6Ly9teS5leGFtcGxlLmN1c3RvbS9mdW5jdGlvbg==", () => {
    const tAsset = new CloudinaryImage("sample").customFunction(
      CustomFunction.remote("https://my.example.custom/function")
    );
    const parts = "fn_remote:aHR0cHM6Ly9teS5leGFtcGxlLmN1c3RvbS9mdW5jdGlvbg=="
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("fn_wasm:my_example.wasm", () => {
    const tAsset = new CloudinaryImage("sample").customFunction(
      CustomFunction.wasm("my_example.wasm")
    );
    const parts = "fn_wasm:my_example.wasm".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_face,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "g_face,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_face,c_thumb,w_150,h_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "g_face,c_thumb,w_150,h_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_face,c_thumb,w_150,h_150,z_0.7", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .zoom(0.7)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "g_face,c_thumb,w_150,h_150,z_0.7"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_face,w_500,c_thumb,fl_getinfo", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail().width(500).gravity(Gravity.focusOn(FocusOn.face()))
      )
      .addFlag("getinfo");
    const parts = "g_face,w_500,c_thumb,fl_getinfo"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_north,l_text:arial_60:watchme,y_20", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.text("watchme", new TextStyle("arial", 60))
      ).position(new Position().gravity(Gravity.compass("north")).offsetY(20))
    );
    const parts = "g_north,l_text:arial_60:watchme,y_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("g_south,l_text:Arial_200:Flower", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.text("Flower", new TextStyle("Arial", 200))
      ).position(new Position().gravity(Gravity.compass("south")))
    );
    const parts = "g_south,l_text:Arial_200:Flower"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_100,w_190", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(190).height(100)
    );
    const parts = "h_100,w_190".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_105/e_shadow:50,x_10,y_10", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(105))
      .effect(Effect.shadow().strength(50).offsetX(10).offsetY(10));
    const parts = "h_105/e_shadow:50,x_10,y_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_120", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(120)
    );
    const parts = "h_120".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(150)
    );
    const parts = "h_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,c_scale,fl_ignore_aspect_ratio", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale()
        .height(150)
        .aspectRatio(AspectRatio.ignoreInitialAspectRatio())
    );
    const parts = "h_150,c_scale,fl_ignore_aspect_ratio"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .delivery(Delivery.dpr("2.0"));
    const parts = "h_150,dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "h_150,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,fl_ignore_aspect_ratio", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale()
        .height(150)
        .aspectRatio(AspectRatio.ignoreInitialAspectRatio())
    );
    const parts = "h_150,fl_ignore_aspect_ratio".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,w_150,c_pad,b_auto:predominant", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(150).height(150).background(Background.predominant())
    );
    const parts = "h_150,w_150,c_pad,b_auto:predominant"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150,w_150,c_pad,b_auto:predominant_gradient:2:diagonal_desc", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(150)
        .height(150)
        .background(
          Background.predominantGradient()
            .gradientDirection("diagonal_desc")
            .gradientColors(2)
        )
    );
    const parts =
      "h_150,w_150,c_pad,b_auto:predominant_gradient:2:diagonal_desc"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150/l_play_icon2,w_0.1", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .overlay(
        Overlay.source(
          Source.image("play_icon2").transformation(
            new Transformation().resize(Resize.scale().width(0.1))
          )
        )
      );
    const parts = "h_150/l_play_icon2,w_0.1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_150/q_auto,f_auto,dpr_2/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(150))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "h_150/q_auto,f_auto,dpr_2/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(200)
    );
    const parts = "h_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200,c_scale/e_outline:15:200,co_orange", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(200))
      .effect(Effect.outline().width(15).blurLevel(200).color("orange"));
    const parts = "h_200,c_scale/e_outline:15:200,co_orange"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200,w_200,c_pad,b_auto:border", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(200).height(200).background(Background.border())
    );
    const parts = "h_200,w_200,c_pad,b_auto:border"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200,w_200,c_pad,b_auto:border_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(200)
        .height(200)
        .background(Background.border().contrast())
    );
    const parts = "h_200,w_200,c_pad,b_auto:border_contrast"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200,w_200,c_pad,b_auto:predominant", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(200).height(200).background(Background.predominant())
    );
    const parts = "h_200,w_200,c_pad,b_auto:predominant"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200,w_200,c_pad,b_auto:predominant_contrast", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(200)
        .height(200)
        .background(Background.predominant().contrast())
    );
    const parts = "h_200,w_200,c_pad,b_auto:predominant_contrast"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200/u_docs:iphone_template,h_300,a_90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(200))
      .underlay(
        Underlay.source(
          Source.image("docs/iphone_template").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(90))
              .resize(Resize.scale().height(300))
          )
        )
      );
    const parts = "h_200/u_docs:iphone_template,h_300,a_90"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_200/u_docs:transparent_grid,w_1.0,h_1.0,fl_relative,c_crop,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(200))
      .underlay(
        Underlay.source(
          Source.image("docs/transparent_grid").transformation(
            new Transformation()
              .resize(Resize.crop().width("1.0").height("1.0").relative())
              .adjust(Adjust.opacity(50))
          )
        )
      );
    const parts =
      "h_200/u_docs:transparent_grid,w_1.0,h_1.0,fl_relative,c_crop,o_50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_225/q_auto,f_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(225))
      .border(Border.solid(1, "black"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "h_225/q_auto,f_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_250", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(250)
    );
    const parts = "h_250".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_250,w_150,c_fill,g_auto/f_auto/q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill().width(150).height(250).gravity(Gravity.autoGravity())
      )
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "h_250,w_150,c_fill,g_auto/f_auto/q_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(300)
    );
    const parts = "h_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,ar_3:4,c_fill,g_auto:face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .height(300)
        .aspectRatio("3:4")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.face()))
        )
    );
    const parts = "h_300,ar_3:4,c_fill,g_auto:face"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,ar_3:4,c_fill,g_auto:faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .height(300)
        .aspectRatio("3:4")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
        )
    );
    const parts = "h_300,ar_3:4,c_fill,g_auto:faces"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .delivery(Delivery.dpr("2.0"));
    const parts = "h_300,dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "h_300,q_auto,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(300).height(300)
    );
    const parts = "h_300,w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300,c_pad,b_auto:predominant", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(300).height(300).background(Background.predominant())
    );
    const parts = "h_300,w_300,c_pad,b_auto:predominant"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300,c_pad,b_auto:predominant/e_gradient_fade:symmetric_pad,x_0.5", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.pad().width(300).height(300).background(Background.predominant())
      )
      .effect(
        Effect.gradientFade()
          .type(GradientFade.symmetricPad())
          .horizontalStartPoint(0.5)
      );
    const parts =
      "h_300,w_300,c_pad,b_auto:predominant/e_gradient_fade:symmetric_pad,x_0.5"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300,c_pad,b_auto:predominant_gradient:2:diagonal_desc", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(300)
        .height(300)
        .background(
          Background.predominantGradient()
            .gradientDirection("diagonal_desc")
            .gradientColors(2)
        )
    );
    const parts =
      "h_300,w_300,c_pad,b_auto:predominant_gradient:2:diagonal_desc"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300,c_pad,b_auto:predominant_gradient:4:palette_red_green_blue_orange", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(300)
        .height(300)
        .background(
          Background.predominantGradient()
            .gradientColors(4)
            .palette("red", "green", "blue", "orange")
        )
    );
    const parts =
      "h_300,w_300,c_pad,b_auto:predominant_gradient:4:palette_red_green_blue_orange"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_300,w_300,c_pad,b_auto:predominant_gradient_contrast:4", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(300)
        .height(300)
        .background(
          Background.predominantGradient().contrast().gradientColors(4)
        )
    );
    const parts = "h_300,w_300,c_pad,b_auto:predominant_gradient_contrast:4"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_310", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().height(310)
    );
    const parts = "h_310".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_320,c_scale/c_pad,h_320,w_480,b_blurred:400:15/e_volume:mute/e_accelerate:100", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.scale().height(320))
      .resize(
        Resize.pad()
          .width(480)
          .height(320)
          .background(Background.blurred().intensity(400).brightness(15))
      )
      .videoEdit(VideoEdit.volume(Volume.mute()))
      .effect(Effect.accelerate().rate(100))
      .setAssetType("image");
    const parts =
      "h_320,c_scale/c_pad,h_320,w_480,b_blurred:400:15/e_volume:mute/e_accelerate:100"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_320,w_480", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(480).height(320)
    );
    const parts = "h_320,w_480".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_320,w_480/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(480).height(320))
      .resize(Resize.scale().height(150));
    const parts = "h_320,w_480/h_150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_350/q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(350))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "h_350/q_auto,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_375/u_docs:bg_beach,g_south,w_800", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(375))
      .underlay(
        Underlay.source(
          Source.image("docs/bg_beach").transformation(
            new Transformation().resize(Resize.scale().width(800))
          )
        ).position(new Position().gravity(Gravity.compass("south")))
      );
    const parts = "h_375/u_docs:bg_beach,g_south,w_800"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_375/u_docs:bg_beach,g_south,w_800/h_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(375))
      .underlay(
        Underlay.source(
          Source.image("docs/bg_beach").transformation(
            new Transformation().resize(Resize.scale().width(800))
          )
        ).position(new Position().gravity(Gravity.compass("south")))
      )
      .resize(Resize.scale().height(200));
    const parts = "h_375/u_docs:bg_beach,g_south,w_800/h_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_375/u_docs:rainbow_field,g_south,w_800", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(375))
      .underlay(
        Underlay.source(
          Source.image("docs/rainbow_field").transformation(
            new Transformation().resize(Resize.scale().width(800))
          )
        ).position(new Position().gravity(Gravity.compass("south")))
      );
    const parts = "h_375/u_docs:rainbow_field,g_south,w_800"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_375/u_docs:rainbow_field,g_south,w_800/h_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(375))
      .underlay(
        Underlay.source(
          Source.image("docs/rainbow_field").transformation(
            new Transformation().resize(Resize.scale().width(800))
          )
        ).position(new Position().gravity(Gravity.compass("south")))
      )
      .resize(Resize.scale().height(200));
    const parts = "h_375/u_docs:rainbow_field,g_south,w_800/h_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_400,ar_3:4,c_fill,g_auto:face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .height(400)
        .aspectRatio("3:4")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.face()))
        )
    );
    const parts = "h_400,ar_3:4,c_fill,g_auto:face"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_400,ar_9:16,c_fill_pad,g_auto/so_8", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(
        Resize.fillPad()
          .height(400)
          .aspectRatio("9:16")
          .gravity(Gravity.autoGravity())
      )
      .videoEdit(VideoEdit.trim().startOffset("8.0"))
      .setAssetType("image");
    const parts = "h_400,ar_9:16,c_fill_pad,g_auto/so_8"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_400,w_244,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(244).height(400)
    );
    const parts = "h_400,w_244,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_400,w_244,c_fill,so_1", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("1.0"))
      .resize(Resize.fill().width(244).height(400))
      .setAssetType("image");
    const parts = "h_400,w_244,c_fill,so_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_400,w_244,g_auto,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(244).height(400).gravity(Gravity.autoGravity())
    );
    const parts = "h_400,w_244,g_auto,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("h_500,w_500,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(500).height(500)
    );
    const parts = "h_500,w_500,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_!sale:in_stock!_in_tags,l_sale_icon,w_180,g_south_east,x_30,y_30", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "!sale:in_stock! in tags",
        new Transformation().overlay(
          Overlay.source(
            Source.image("sale_icon").transformation(
              new Transformation().resize(Resize.scale().width(180))
            )
          ).position(
            new Position()
              .gravity(Gravity.compass("south_east"))
              .offsetX(30)
              .offsetY(30)
          )
        )
      )
    );
    const parts =
      "if_!sale:in_stock!_in_tags,l_sale_icon,w_180,g_south_east,x_30,y_30"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_!sale:in_stock!_in_tags,l_sale_icon,w_180,g_south_east,x_30,y_30/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .conditional(
        Conditional.ifCondition(
          "!sale:in_stock! in tags",
          new Transformation().overlay(
            Overlay.source(
              Source.image("sale_icon").transformation(
                new Transformation().resize(Resize.scale().width(180))
              )
            ).position(
              new Position()
                .gravity(Gravity.compass("south_east"))
                .offsetX(30)
                .offsetY(30)
            )
          )
        )
      )
      .resize(Resize.scale().width(250));
    const parts =
      "if_!sale:in_stock!_in_tags,l_sale_icon,w_180,g_south_east,x_30,y_30/w_250"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ar_gt_0.65_and_w_gt_1000,ar_0.65,h_1000,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "aspect_ratio > 0.65 && width > 1000",
        new Transformation().resize(
          Resize.fill().height(1000).aspectRatio(0.65)
        )
      )
    );
    const parts = "if_ar_gt_0.65_and_w_gt_1000,ar_0.65,h_1000,c_fill"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ar_gt_1.2,c_pad,h_320,w_480,b_black/if_else,c_pad,h_320,w_480,b_blurred:400:15", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "aspect_ratio > 1.2",
        new Transformation().resize(
          Resize.pad()
            .width(480)
            .height(320)
            .background(Background.color("black"))
        )
      ).otherwise(
        new Transformation().resize(
          Resize.pad()
            .width(480)
            .height(320)
            .background(Background.blurred().intensity(400).brightness(15))
        )
      )
    );
    const parts =
      "if_ar_gt_1.2,c_pad,h_320,w_480,b_black/if_else,c_pad,h_320,w_480,b_blurred:400:15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ar_gt_1.2,c_pad,h_320,w_480,b_green/if_else,c_pad,h_320,w_480,b_blurred:400:15", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "aspect_ratio > 1.2",
        new Transformation().resize(
          Resize.pad()
            .width(480)
            .height(320)
            .background(Background.color("green"))
        )
      ).otherwise(
        new Transformation().resize(
          Resize.pad()
            .width(480)
            .height(320)
            .background(Background.blurred().intensity(400).brightness(15))
        )
      )
    );
    const parts =
      "if_ar_gt_1.2,c_pad,h_320,w_480,b_green/if_else,c_pad,h_320,w_480,b_blurred:400:15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ar_gt_3:4_and_w_gt_300_and_h_gt_200,c_crop,w_300,h_200", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "aspect_ratio > 3:4 && width > 300 && height > 200",
        new Transformation().resize(Resize.crop().width(300).height(200))
      )
    );
    const parts = "if_ar_gt_3:4_and_w_gt_300_and_h_gt_200,c_crop,w_300,h_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ar_lt_1.0,$height_300/if_else,$height_200/h_$height", () => {
    const tAsset = new CloudinaryImage("sample")
      .conditional(
        Conditional.ifCondition(
          "aspect_ratio < 1.0",
          new Transformation().addVariable(Variable.set("height", 300))
        ).otherwise(
          new Transformation().addVariable(Variable.set("height", 200))
        )
      )
      .resize(Resize.scale().height("$height"));
    const parts = "if_ar_lt_1.0,$height_300/if_else,$height_200/h_$height"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ctx:!productType!_eq_!shoes!,w_200,ar_1:1,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "ctx:!productType! = !shoes!",
        new Transformation().resize(
          Resize.fill()
            .width(200)
            .aspectRatio(AspectRatio.ar1X1())
            .gravity(Gravity.autoGravity())
        )
      )
    );
    const parts = "if_ctx:!productType!_eq_!shoes!,w_200,ar_1:1,c_fill,g_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_expression,a_20", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "expression",
        new Transformation().rotate(Rotate.byAngle(20))
      )
    );
    const parts = "if_expression,a_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_expression/a_20/if_else/a_30/if_end", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "expression",
        new Transformation().rotate(Rotate.byAngle(20))
      ).otherwise(new Transformation().rotate(Rotate.byAngle(30)))
    );
    const parts = "if_expression/a_20/if_else/a_30/if_end"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_expression/a_20/if_end", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "expression",
        new Transformation().rotate(Rotate.byAngle(20))
      )
    );
    const parts = "if_expression/a_20/if_end".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_ils_gt_0.5,w_120,h_150,c_pad/if_else,w_120,h_150,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "ils > 0.5",
        new Transformation().resize(Resize.pad().width(120).height(150))
      ).otherwise(
        new Transformation().resize(Resize.fill().width(120).height(150))
      )
    );
    const parts = "if_ils_gt_0.5,w_120,h_150,c_pad/if_else,w_120,h_150,c_fill"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_iw_lte_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "iw_lte_200",
        new Transformation().resize(Resize.fill().width(80).height(120))
      ).otherwise(
        new Transformation().resize(Resize.fill().width(100).height(90))
      )
    );
    const parts = "if_iw_lte_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_w_gt_300,e_oil_paint", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "width > 300",
        new Transformation().effect(Effect.oilPaint())
      )
    );
    const parts = "if_w_gt_300,e_oil_paint".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_w_gt_400,l_thumbs-up-small,w_150,g_north_east,x_10,y_10/w_400,c_limit", () => {
    const tAsset = new CloudinaryImage("sample")
      .conditional(
        Conditional.ifCondition(
          "width > 400",
          new Transformation().overlay(
            Overlay.source(
              Source.image("thumbs-up-small").transformation(
                new Transformation().resize(Resize.scale().width(150))
              )
            ).position(
              new Position()
                .gravity(Gravity.compass("north_east"))
                .offsetX(10)
                .offsetY(10)
            )
          )
        )
      )
      .resize(Resize.limitFit().width(400));
    const parts =
      "if_w_gt_400,l_thumbs-up-small,w_150,g_north_east,x_10,y_10/w_400,c_limit"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_w_lte_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "w_lte_200",
        new Transformation().resize(Resize.fill().width(80).height(120))
      ).otherwise(
        new Transformation().resize(Resize.fill().width(100).height(90))
      )
    );
    const parts = "if_w_lte_200,c_fill,h_120,w_80/if_else,c_fill,h_90,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("if_w_lte_400/c_fill,h_220,w_180/e_red/if_else/c_fill,h_190,w_300/e_oil_paint/if_end", () => {
    const tAsset = new CloudinaryImage("sample").conditional(
      Conditional.ifCondition(
        "w_lte_400",
        new Transformation()
          .resize(Resize.fill().width(180).height(220))
          .adjust(Adjust.red())
      ).otherwise(
        new Transformation()
          .resize(Resize.fill().width(300).height(190))
          .effect(Effect.oilPaint())
      )
    );
    const parts =
      "if_w_lte_400/c_fill,h_220,w_180/e_red/if_else/c_fill,h_190,w_300/e_oil_paint/if_end"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_badge,o_60,w_500", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("badge").transformation(
          new Transformation()
            .resize(Resize.scale().width(500))
            .adjust(Adjust.opacity(60))
        )
      )
    );
    const parts = "l_badge,o_60,w_500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_call_text,fl_region_relative,w_1.1,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("call_text").transformation(
          new Transformation().resize(
            Resize.scale().width(1.1).regionRelative()
          )
        )
      ).position(new Position().gravity(Gravity.focusOn(FocusOn.ocr())))
    );
    const parts = "l_call_text,fl_region_relative,w_1.1,g_ocr_text"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_call_text,fl_region_relative,w_1.1,g_ocr_text/w_120", () => {
    const tAsset = new CloudinaryImage("sample")
      .overlay(
        Overlay.source(
          Source.image("call_text").transformation(
            new Transformation().resize(
              Resize.scale().width(1.1).regionRelative()
            )
          )
        ).position(new Position().gravity(Gravity.focusOn(FocusOn.ocr())))
      )
      .resize(Resize.scale().width(120));
    const parts = "l_call_text,fl_region_relative,w_1.1,g_ocr_text/w_120"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon"))
    );
    const parts = "l_cloudinary_icon".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,g_north_west,y_20", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon")).position(
        new Position().gravity(Gravity.compass("north_west")).offsetY(20)
      )
    );
    const parts = "l_cloudinary_icon,g_north_west,y_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,so_6.5,eo_10,o_50,e_brightness:100", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        ).timeline(Timeline.position().startOffset(6.5).endOffset("10.0"))
      )
      .setAssetType("image");
    const parts = "l_cloudinary_icon,so_6.5,eo_10,o_50,e_brightness:100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,w_0.2,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon").transformation(
          new Transformation().resize(Resize.scale().width(0.2).relative())
        )
      )
    );
    const parts = "l_cloudinary_icon,w_0.2,fl_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,w_0.8,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon").transformation(
          new Transformation().resize(Resize.scale().width(0.8).relative())
        )
      )
    );
    const parts = "l_cloudinary_icon,w_0.8,fl_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,w_0.9,c_scale,g_north_east,o_70,e_brightness:50", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon").transformation(
          new Transformation()
            .resize(Resize.scale().width(0.9))
            .adjust(Adjust.opacity(70))
            .adjust(Adjust.brightness().level(50))
        )
      ).position(new Position().gravity(Gravity.compass("north_east")))
    );
    const parts =
      "l_cloudinary_icon,w_0.9,c_scale,g_north_east,o_70,e_brightness:50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon,w_300,g_north_east,o_60", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon").transformation(
          new Transformation()
            .resize(Resize.scale().width(300))
            .adjust(Adjust.opacity(60))
        )
      ).position(new Position().gravity(Gravity.compass("north_east")))
    );
    const parts = "l_cloudinary_icon,w_300,g_north_east,o_60"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_blue", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon_blue"))
    );
    const parts = "l_cloudinary_icon_blue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_blue,g_north_west,x_20,y_20", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("cloudinary_icon_blue")).position(
        new Position()
          .gravity(Gravity.compass("north_west"))
          .offsetX(20)
          .offsetY(20)
      )
    );
    const parts = "l_cloudinary_icon_blue,g_north_west,x_20,y_20"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_blue,w_0.3,fl_relative,g_north_east", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon_blue").transformation(
          new Transformation().resize(Resize.scale().width(0.3).relative())
        )
      ).position(new Position().gravity(Gravity.compass("north_east")))
    );
    const parts = "l_cloudinary_icon_blue,w_0.3,fl_relative,g_north_east"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_blue,w_0.5,c_scale,g_north_east,o_70,e_brightness:50", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon_blue").transformation(
          new Transformation()
            .resize(Resize.scale().width(0.5))
            .adjust(Adjust.opacity(70))
            .adjust(Adjust.brightness().level(50))
        )
      ).position(new Position().gravity(Gravity.compass("north_east")))
    );
    const parts =
      "l_cloudinary_icon_blue,w_0.5,c_scale,g_north_east,o_70,e_brightness:50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_blue,w_0.8,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon_blue").transformation(
          new Transformation().resize(Resize.scale().width(0.8).relative())
        )
      )
    );
    const parts = "l_cloudinary_icon_blue,w_0.8,fl_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_white,so_6.5,eo_10,o_50,e_brightness:100", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_white").transformation(
            new Transformation()
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        ).timeline(Timeline.position().startOffset(6.5).endOffset("10.0"))
      )
      .setAssetType("image");
    const parts = "l_cloudinary_icon_white,so_6.5,eo_10,o_50,e_brightness:100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_white,w_200,o_30,fl_tiled", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon_white").transformation(
          new Transformation()
            .resize(Resize.scale().width(200))
            .adjust(Adjust.opacity(30))
        )
      ).position(new Position().tiled())
    );
    const parts = "l_cloudinary_icon_white,w_200,o_30,fl_tiled"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_cloudinary_icon_white,w_300,g_north_east,o_60", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("cloudinary_icon_white").transformation(
          new Transformation()
            .resize(Resize.scale().width(300))
            .adjust(Adjust.opacity(60))
        )
      ).position(new Position().gravity(Gravity.compass("north_east")))
    );
    const parts = "l_cloudinary_icon_white,w_300,g_north_east,o_60"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9sb2dvLnBuZw==,g_north_west,x_5,y_5", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.fetch("http://cloudinary.com/images/logo.png")
      ).position(
        new Position()
          .gravity(Gravity.compass("north_west"))
          .offsetX(5)
          .offsetY(5)
      )
    );
    const parts =
      "l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9sb2dvLnBuZw==,g_north_west,x_5,y_5"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9sb2dvLnBuZw==,g_north_west,x_5,y_5,eo_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(Source.fetch("http://cloudinary.com/images/logo.png"))
          .position(
            new Position()
              .gravity(Gravity.compass("north_west"))
              .offsetX(5)
              .offsetY(5)
          )
          .timeline(Timeline.position().endOffset("5.0"))
      )
      .setAssetType("image");
    const parts =
      "l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9sb2dvLnBuZw==,g_north_west,x_5,y_5,eo_5"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9vbGRfbG9nby5wbmc=", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.fetch("http://cloudinary.com/images/old_logo.png"))
    );
    const parts =
      "l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9vbGRfbG9nby5wbmc="
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvbG9nb3MvY2xvdWRpbmFyeV9mdWxsX2xvZ29fd2hpdGVfc21hbGwucG5n", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.fetch(
          "https://res.cloudinary.com/demo/image/upload/logos/cloudinary_full_logo_white_small.png"
        )
      )
    );
    const parts =
      "l_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvbG9nb3MvY2xvdWRpbmFyeV9mdWxsX2xvZ29fd2hpdGVfc21hbGwucG5n"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_golden_star,g_faces,w_1.0,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("golden_star").transformation(
          new Transformation().resize(
            Resize.scale().width("1.0").regionRelative()
          )
        )
      ).position(new Position().gravity(Gravity.focusOn(FocusOn.faces())))
    );
    const parts = "l_golden_star,g_faces,w_1.0,fl_region_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_golden_star,g_faces,w_1.1,fl_region_relative", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("golden_star").transformation(
          new Transformation().resize(
            Resize.scale().width(1.1).regionRelative()
          )
        )
      ).position(new Position().gravity(Gravity.focusOn(FocusOn.faces())))
    );
    const parts = "l_golden_star,g_faces,w_1.1,fl_region_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_golden_star,g_north_west,w_20,x_314,y_148/w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .overlay(
        Overlay.source(
          Source.image("golden_star").transformation(
            new Transformation().resize(Resize.scale().width(20))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("north_west"))
            .offsetX(314)
            .offsetY(148)
        )
      )
      .resize(Resize.scale().width(500));
    const parts = "l_golden_star,g_north_west,w_20,x_314,y_148/w_500"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_happy_smiley,w_1.3,fl_region_relative,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("happy_smiley").transformation(
          new Transformation().resize(
            Resize.scale().width(1.3).regionRelative()
          )
        )
      ).position(new Position().gravity(Gravity.focusOn(FocusOn.faces())))
    );
    const parts = "l_happy_smiley,w_1.3,fl_region_relative,g_faces"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_lut:iwltbap_aspen.3dl", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.by3dLut("iwltbap_aspen.3dl")
    );
    const parts = "l_lut:iwltbap_aspen.3dl".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_lut:iwltbap_aspen.3dl/w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .adjust(Adjust.by3dLut("iwltbap_aspen.3dl"))
      .resize(Resize.scale().width(200));
    const parts = "l_lut:iwltbap_aspen.3dl/w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_lut:iwltbap_sedona.3dl", () => {
    const tAsset = new CloudinaryImage("sample").adjust(
      Adjust.by3dLut("iwltbap_sedona.3dl")
    );
    const parts = "l_lut:iwltbap_sedona.3dl".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_lut:iwltbap_sedona.3dl/w_200", () => {
    const tAsset = new CloudinaryImage("sample")
      .adjust(Adjust.by3dLut("iwltbap_sedona.3dl"))
      .resize(Resize.scale().width(200));
    const parts = "l_lut:iwltbap_sedona.3dl/w_200"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample"))
    );
    const parts = "l_sample".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample,fl_cutter", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.cutByImage(Source.image("sample"))
    );
    const parts = "l_sample,fl_cutter".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample,fl_replace_image,e_cartoonify", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("sample").transformation(
          new Transformation()
            .effect(Effect.cartoonify())
            .addFlag("replace_image")
        )
      )
    );
    const parts = "l_sample,fl_replace_image,e_cartoonify"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample,so_6.5,eo_10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(Source.image("sample")).timeline(
          Timeline.position().startOffset(6.5).endOffset("10.0")
        )
      )
      .setAssetType("image");
    const parts = "l_sample,so_6.5,eo_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample.jpg", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample.jpg"))
    );
    const parts = "l_sample.jpg".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_anti_removal,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).blendMode("anti_removal")
    );
    const parts = "l_sample/e_anti_removal,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_mask,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).blendMode("mask")
    );
    const parts = "l_sample/e_mask,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_multiply,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).blendMode("multiply")
    );
    const parts = "l_sample/e_multiply,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_overlay,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).blendMode("overlay")
    );
    const parts = "l_sample/e_overlay,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_screen,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).blendMode("screen")
    );
    const parts = "l_sample/e_screen,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/e_sepia/fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("sample").transformation(
          new Transformation().effect(Effect.sepia())
        )
      )
    );
    const parts = "l_sample/e_sepia/fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/fl_cutter,fl_layer_apply,g_south", () => {
    const tAsset = new CloudinaryImage("sample").reshape(
      Reshape.cutByImage(Source.image("sample")).position(
        new Position().gravity(Gravity.compass("south"))
      )
    );
    const parts = "l_sample/fl_cutter,fl_layer_apply,g_south"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/fl_first_flag/fl_second_flag/fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.image("sample").transformation(
          new Transformation().addFlag("first_flag").addFlag("second_flag")
        )
      )
    );
    const parts = "l_sample/fl_first_flag/fl_second_flag/fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/fl_no_overflow,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).position(
        new Position().allowOverflow(false)
      )
    );
    const parts = "l_sample/fl_no_overflow,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/fl_tiled,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).position(new Position().tiled())
    );
    const parts = "l_sample/fl_tiled,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/g_face,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).position(
        new Position().gravity(Gravity.focusOn(FocusOn.face()))
      )
    );
    const parts = "l_sample/g_face,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_sample/x_10,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.image("sample")).position(
        new Position().offsetX(10)
      )
    );
    const parts = "l_sample/x_10,fl_layer_apply".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:arial_17:sample_sub_en.srt", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("sample_sub_en.srt").textStyle(
          new TextStyle("arial", 17)
        )
      )
    );
    const parts = "l_subtitles:arial_17:sample_sub_en.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:arial_20:sample_sub_en.srt", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("sample_sub_en.srt").textStyle(
          new TextStyle("arial", 20)
        )
      )
    );
    const parts = "l_subtitles:arial_20:sample_sub_en.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:arial_40:sample_sub_en.srt,co_yellow,b_black", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("sample_sub_en.srt")
          .textStyle(new TextStyle("arial", 40))
          .textColor("yellow")
          .backgroundColor("black")
      )
    );
    const parts = "l_subtitles:arial_40:sample_sub_en.srt,co_yellow,b_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:arial_70:sample_sub_en.srt,co_rgb:ffff00,b_black", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("sample_sub_en.srt")
          .textStyle(new TextStyle("arial", 70))
          .textColor("#ffff00")
          .backgroundColor("black")
      )
    );
    const parts = "l_subtitles:arial_70:sample_sub_en.srt,co_rgb:ffff00,b_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:folder-permissions-tutorial.en-us.azure.transcript", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("folder-permissions-tutorial.en-us.azure.transcript")
      )
    );
    const parts =
      "l_subtitles:folder-permissions-tutorial.en-us.azure.transcript"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:impact_15:lincoln.transcript,b_rgb:331a00", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("lincoln.transcript")
          .textStyle(new TextStyle("impact", 15))
          .backgroundColor("#331a00")
      )
    );
    const parts = "l_subtitles:impact_15:lincoln.transcript,b_rgb:331a00"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:impact_15:lincoln.transcript,co_khaki,b_rgb:331a00,g_south_west", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("lincoln.transcript")
          .textStyle(new TextStyle("impact", 15))
          .textColor("khaki")
          .backgroundColor("#331a00")
      ).position(new Position().gravity(Gravity.compass("south_west")))
    );
    const parts =
      "l_subtitles:impact_15:lincoln.transcript,co_khaki,b_rgb:331a00,g_south_west"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:lincoln.transcript", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.subtitles("lincoln.transcript"))
    );
    const parts = "l_subtitles:lincoln.transcript"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:sample_sub_en.srt", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.subtitles("sample_sub_en.srt"))
    );
    const parts = "l_subtitles:sample_sub_en.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_subtitles:times_20:folder-permissions-tutorial.en-us.azure.transcript,co_blue,g_north", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.subtitles("folder-permissions-tutorial.en-us.azure.transcript")
          .textStyle(new TextStyle("times", 20))
          .textColor("blue")
      ).position(new Position().gravity(Gravity.compass("north")))
    );
    const parts =
      "l_subtitles:times_20:folder-permissions-tutorial.en-us.azure.transcript,co_blue,g_north"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_text:Arial_45_bold:John", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.text("John", new TextStyle("Arial", 45).fontWeight("bold"))
      )
    );
    const parts = "l_text:Arial_45_bold:John".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_text:arial_15:hello", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(Source.text("hello", new TextStyle("arial", 15)))
    );
    const parts = "l_text:arial_15:hello".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_text:arial_15_bold:hello", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.text("hello", new TextStyle("arial", 15).fontWeight("bold"))
      )
    );
    const parts = "l_text:arial_15_bold:hello".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog,fl_splice,so_0,du_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation().videoEdit(
              VideoEdit.trim().startOffset("0.0").duration("5.0")
            )
          )
        )
      )
      .setAssetType("image");
    const parts = "l_video:dog,fl_splice,so_0,du_5"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog,fl_splice,w_300,c_fill,so_0/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .videoEdit(VideoEdit.trim().startOffset("0.0"))
              .resize(Resize.fill().width(300))
          )
        )
      )
      .setAssetType("image");
    const parts = "l_video:dog,fl_splice,w_300,c_fill,so_0/fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog,so_4.5,eo_8,a_90,w_200,g_east", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("dog").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(90))
              .resize(Resize.scale().width(200))
          )
        )
          .position(new Position().gravity(Gravity.compass("east")))
          .timeline(Timeline.position().startOffset(4.5).endOffset("8.0"))
      )
      .setAssetType("image");
    const parts = "l_video:dog,so_4.5,eo_8,a_90,w_200,g_east"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog,w_0.5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("dog").transformation(
            new Transformation().resize(Resize.scale().width(0.5))
          )
        )
      )
      .setAssetType("image");
    const parts = "l_video:dog,w_0.5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation().videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(Transition.videoSource("transition1"))
      )
      .setAssetType("image");
    const parts =
      "l_video:dog/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(Concatenate.videoSource("dog")).transition(
          Transition.videoSource("transition1")
        )
      )
      .setAssetType("image");
    const parts =
      "l_video:dog/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:dog/l_video:transition1,e_transition/a_180/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(
        VideoEdit.concatenate(Concatenate.videoSource("dog")).transition(
          Transition.videoSource("transition1").transformation(
            new Transformation().rotate(Rotate.byAngle(180))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "l_video:dog/l_video:transition1,e_transition/a_180/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:electronic", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(Overlay.source(Source.video("electronic")))
      .setAssetType("image");
    const parts = "l_video:electronic".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:kitten_fighting,e_fade:3000,w_100", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("kitten_fighting").transformation(
            new Transformation()
              .resize(Resize.scale().width(100))
              .effect(Effect.fadeIn().duration(3000))
          )
        )
      )
      .setAssetType("image");
    const parts = "l_video:kitten_fighting,e_fade:3000,w_100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:sample", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(Overlay.source(Source.video("sample")))
      .setAssetType("image");
    const parts = "l_video:sample".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:sample/e_sepia/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("sample").transformation(
            new Transformation().effect(Effect.sepia())
          )
        )
      )
      .setAssetType("image");
    const parts = "l_video:sample/e_sepia/fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:ski_jump,eo_6,c_scale,w_250,g_north_east", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("ski_jump").transformation(
            new Transformation().resize(Resize.scale().width(250))
          )
        )
          .position(new Position().gravity(Gravity.compass("north_east")))
          .timeline(Timeline.position().endOffset("6.0"))
      )
      .setAssetType("image");
    const parts = "l_video:ski_jump,eo_6,c_scale,w_250,g_north_east"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:ski_jump,so_3,eo_6,c_scale,w_250,g_north_east", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("ski_jump").transformation(
            new Transformation().resize(Resize.scale().width(250))
          )
        )
          .position(new Position().gravity(Gravity.compass("north_east")))
          .timeline(Timeline.position().startOffset("3.0").endOffset("6.0"))
      )
      .setAssetType("image");
    const parts = "l_video:ski_jump,so_3,eo_6,c_scale,w_250,g_north_east"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("o_17", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.opacity(17));
    const parts = "o_17".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("o_30", () => {
    const tAsset = new CloudinaryImage("sample").adjust(Adjust.opacity(30));
    const parts = "o_30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_2", () => {
    const tAsset = new CloudinaryImage("sample").extract(
      Extract.getPage().byNumber(2)
    );
    const parts = "pg_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_2-4;6;8", () => {
    const tAsset = new CloudinaryImage("sample").extract(
      Extract.getPage().byRange(2, 4).byNumber(6).byNumber(8)
    );
    const parts = "pg_2-4;6;8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_2-4;6;8/w_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .extract(Extract.getPage().byRange(2, 4).byNumber(6).byNumber(8))
      .resize(Resize.scale().width(300));
    const parts = "pg_2-4;6;8/w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_3", () => {
    const tAsset = new CloudinaryImage("sample").extract(
      Extract.getPage().byNumber(3)
    );
    const parts = "pg_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_4-7;9", () => {
    const tAsset = new CloudinaryImage("sample").extract(
      Extract.getPage().byRange(4, 7).byNumber(9)
    );
    const parts = "pg_4-7;9".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:3", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byIndex(3)
    );
    const parts = "pg_embedded:3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:3/w_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .psdTools(PSDTools.smartObject().byIndex(3))
      .resize(Resize.scale().width(300));
    const parts = "pg_embedded:3/w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:3;5", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byIndex(3).byIndex(5)
    );
    const parts = "pg_embedded:3;5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:7", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byIndex(7)
    );
    const parts = "pg_embedded:7".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:name:skyline-3242040_1920", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byLayerName("skyline-3242040_1920")
    );
    const parts = "pg_embedded:name:skyline-3242040_1920"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:name:skyline-3242040_1920.jpg", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byLayerName("skyline-3242040_1920.jpg")
    );
    const parts = "pg_embedded:name:skyline-3242040_1920.jpg"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:name:skyline.jpg", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byLayerName("skyline.jpg")
    );
    const parts = "pg_embedded:name:skyline.jpg".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_embedded:name:skyline.jpg;bg.jpg", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.smartObject().byLayerName("skyline.jpg").byLayerName("bg.jpg")
    );
    const parts = "pg_embedded:name:skyline.jpg;bg.jpg"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_name:lala;fofo", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.getLayer().byName("lala").byName("fofo")
    );
    const parts = "pg_name:lala;fofo".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_name:record_cover;Shadow", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.getLayer().byName("record_cover").byName("Shadow")
    );
    const parts = "pg_name:record_cover;Shadow".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_name:record_cover;Shadow/w_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .psdTools(PSDTools.getLayer().byName("record_cover").byName("Shadow"))
      .resize(Resize.scale().width(300));
    const parts = "pg_name:record_cover;Shadow/w_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("pg_name:skyline", () => {
    const tAsset = new CloudinaryImage("sample").psdTools(
      PSDTools.getLayer().byName("skyline")
    );
    const parts = "pg_name:skyline".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_100", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(100)
    );
    const parts = "q_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_20", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.quality(20));
    const parts = "q_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_50", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.quality(50));
    const parts = "q_50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_60", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.quality(60));
    const parts = "q_60".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_60:420", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(60).chromaSubSampling(ChromaSubSampling.chroma420())
    );
    const parts = "q_60:420".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_70:qmax_20", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(70).quantization(20)
    );
    const parts = "q_70:qmax_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_80", () => {
    const tAsset = new CloudinaryImage("sample").delivery(Delivery.quality(80));
    const parts = "q_80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.auto())
    );
    const parts = "q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,bo_1px_solid_black,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,bo_1px_solid_black,f_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,f_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,f_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,f_auto,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,f_auto,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,f_auto,h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,f_auto,h_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,h_300,f_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .border(Border.solid(1, "black"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,h_300,f_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_2,w_150,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_2,w_150,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,bo_1px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "black"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,bo_1px_solid_black"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,bo_1px_solid_gray,dpr_2,h_450", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(450))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,bo_1px_solid_gray,dpr_2,h_450"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_250"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_650", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(650))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_650"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_660", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(660))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,bo_1px_solid_gray,dpr_2,w_660"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,dpr_2,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2,c_crop,w_100,h_80/w_40", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(100).height(80))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .resize(Resize.scale().width(40));
    const parts = "q_auto,f_auto,dpr_2,c_crop,w_100,h_80/w_40"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2,h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().height(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,dpr_2,h_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2,w_400", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,dpr_2,w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "q_auto,f_auto,dpr_2/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_2/w_20", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .resize(Resize.scale().width(20));
    const parts = "q_auto,f_auto,dpr_2/w_20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,f_auto,w_500", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,f_auto,w_500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,w_600,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,w_600,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto,w_800,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(800))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "q_auto,w_800,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto:best", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.autoBest())
    );
    const parts = "q_auto:best".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto:eco", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.autoEco())
    );
    const parts = "q_auto:eco".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto:good", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.autoGood())
    );
    const parts = "q_auto:good".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto:low", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.autoLow())
    );
    const parts = "q_auto:low".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_auto:low:444", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.autoLow()).chromaSubSampling(
        ChromaSubSampling.chroma444()
      )
    );
    const parts = "q_auto:low:444".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_jpegmini", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.jpegmini())
    );
    const parts = "q_jpegmini".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_jpegmini:0", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.jpegminiBest())
    );
    const parts = "q_jpegmini:0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_jpegmini:1", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.jpegminiHigh())
    );
    const parts = "q_jpegmini:1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("q_jpegmini:2", () => {
    const tAsset = new CloudinaryImage("sample").delivery(
      Delivery.quality(Quality.jpegminiMedium())
    );
    const parts = "q_jpegmini:2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_0,du_3", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("0.0").duration("3.0"))
      .setAssetType("image");
    const parts = "so_0,du_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_1", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("1.0"))
      .setAssetType("image");
    const parts = "so_1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("10.0"))
      .setAssetType("image");
    const parts = "so_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_10p,du_30p", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("10%").duration("30%"))
      .setAssetType("image");
    const parts = "so_10p,du_30p".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_120", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("120.0"))
      .setAssetType("image");
    const parts = "so_120".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_21/bo_2px_solid_black", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("21.0"))
      .border(Border.solid(2, "black"));
    const parts = "so_21/bo_2px_solid_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_3", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("3.0"))
      .setAssetType("image");
    const parts = "so_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_3,du_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("3.0").duration("5.0"))
      .setAssetType("image");
    const parts = "so_3,du_5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_3,eo_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("3.0").endOffset("5.0"))
      .setAssetType("image");
    const parts = "so_3,eo_5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_30/bo_2px_solid_black", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("30.0"))
      .border(Border.solid(2, "black"));
    const parts = "so_30/bo_2px_solid_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_3p,du_5p", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("3%").duration("5%"))
      .setAssetType("image");
    const parts = "so_3p,du_5p".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_43,du_10/fl_mono", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("43.0").duration("10.0"))
      .addFlag("mono")
      .setAssetType("image");
    const parts = "so_43,du_10/fl_mono".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("5.0"))
      .setAssetType("image");
    const parts = "so_5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_6.5,eo_10", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset(6.5).endOffset("10.0"))
      .setAssetType("image");
    const parts = "so_6.5,eo_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_62", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("62.0"))
      .setAssetType("image");
    const parts = "so_62".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_7/h_400,ar_9:16,c_fill,g_auto", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("7.0"))
      .resize(
        Resize.fill()
          .height(400)
          .aspectRatio("9:16")
          .gravity(Gravity.autoGravity())
      )
      .setAssetType("image");
    const parts = "so_7/h_400,ar_9:16,c_fill,g_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_7/h_400,ar_9:16,c_fill_pad,g_auto", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("7.0"))
      .resize(
        Resize.fillPad()
          .height(400)
          .aspectRatio("9:16")
          .gravity(Gravity.autoGravity())
      )
      .setAssetType("image");
    const parts = "so_7/h_400,ar_9:16,c_fill_pad,g_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_8", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("8.0"))
      .setAssetType("image");
    const parts = "so_8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("so_8.5", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset(8.5))
      .setAssetType("image");
    const parts = "so_8.5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_demo_combined", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("demo_combined")
    );
    const parts = "t_demo_combined".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_fit_100x150", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("fit_100x150")
    );
    const parts = "t_fit_100x150".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_jpg_with_quality_30,w_100,h_50,c_fit", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fit().width(100).height(50))
      .namedTransformation(NamedTransformation.name("jpg_with_quality_30"));
    const parts = "t_jpg_with_quality_30,w_100,h_50,c_fit"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_jpg_with_quality_30/t_crop_400x400/t_fit_100x150", () => {
    const tAsset = new CloudinaryImage("sample")
      .namedTransformation(NamedTransformation.name("jpg_with_quality_30"))
      .namedTransformation(NamedTransformation.name("crop_400x400"))
      .namedTransformation(NamedTransformation.name("fit_100x150"));
    const parts = "t_jpg_with_quality_30/t_crop_400x400/t_fit_100x150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_my_named_transformation", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("my_named_transformation")
    );
    const parts = "t_my_named_transformation".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_sample_named_transform", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("sample_named_transform")
    );
    const parts = "t_sample_named_transform".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_sample_named_transform.sample_named_transform2", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("sample_named_transform.sample_named_transform2")
    );
    const parts = "t_sample_named_transform.sample_named_transform2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("t_vignette_angle", () => {
    const tAsset = new CloudinaryImage("sample").namedTransformation(
      NamedTransformation.name("vignette_angle")
    );
    const parts = "t_vignette_angle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("u_docs:iphone_template,h_300,a_90", () => {
    const tAsset = new CloudinaryImage("sample").underlay(
      Underlay.source(
        Source.image("docs/iphone_template").transformation(
          new Transformation()
            .rotate(Rotate.byAngle(90))
            .resize(Resize.scale().height(300))
        )
      )
    );
    const parts = "u_docs:iphone_template,h_300,a_90"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("u_sample/g_face,fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample").underlay(
      Underlay.source(Source.image("sample")).position(
        new Position().gravity(Gravity.focusOn(FocusOn.face()))
      )
    );
    const parts = "u_sample/g_face,fl_layer_apply"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("u_site_bg,w_1.0,h_1.0,fl_relative", () => {
    const tAsset = new CloudinaryImage("sample").underlay(
      Underlay.source(
        Source.image("site_bg").transformation(
          new Transformation().resize(
            Resize.scale().width("1.0").height("1.0").relative()
          )
        )
      )
    );
    const parts = "u_site_bg,w_1.0,h_1.0,fl_relative"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_0.25,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(0.25)
    );
    const parts = "w_0.25,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_0.4,a_20/l_cloudinary_icon,o_50,w_60,g_south_east,y_15,x_60", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(20))
      .resize(Resize.scale().width(0.4))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(60))
              .adjust(Adjust.opacity(50))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("south_east"))
            .offsetX(60)
            .offsetY(15)
        )
      );
    const parts =
      "w_0.4,a_20/l_cloudinary_icon,o_50,w_60,g_south_east,y_15,x_60"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_0.4,a_20/l_cloudinary_icon_white,w_60,o_50,g_south_east,y_15,x_60", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(20))
      .resize(Resize.scale().width(0.4))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_white").transformation(
            new Transformation()
              .resize(Resize.scale().width(60))
              .adjust(Adjust.opacity(50))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("south_east"))
            .offsetX(60)
            .offsetY(15)
        )
      );
    const parts =
      "w_0.4,a_20/l_cloudinary_icon_white,w_60,o_50,g_south_east,y_15,x_60"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_0.5", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(0.5)
    );
    const parts = "w_0.5".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_10/a_10", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(10))
      .rotate(Rotate.byAngle(10));
    const parts = "w_10/a_10".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(100)
    );
    const parts = "w_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100)
    );
    const parts = "w_100,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_100,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100).height(100)
    );
    const parts = "w_100,h_100,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_100,c_fill,dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(100).height(100))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_100,h_100,c_fill,dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_100,c_fill,dpr_2.0,g_face", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(100)
          .height(100)
          .gravity(Gravity.focusOn(FocusOn.face()))
      )
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_100,h_100,c_fill,dpr_2.0,g_face"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_100,c_pad,dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.pad().width(100).height(100))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_100,h_100,c_pad,dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_150,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(100).height(150)
    );
    const parts = "w_100,h_150,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_150,c_fill,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(100)
        .height(150)
        .gravity(Gravity.focusOn(FocusOn.faces()))
    );
    const parts = "w_100,h_150,c_fill,g_faces".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100,h_40,c_thumb,g_adv_eyes", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(100)
        .height(40)
        .gravity(Gravity.focusOn(FocusOn.advancedEyes()))
    );
    const parts = "w_100,h_40,c_thumb,g_adv_eyes"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/a_-20", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .rotate(Rotate.byAngle(-20));
    const parts = "w_100/a_-20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/a_90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .rotate(Rotate.byAngle(90));
    const parts = "w_100/a_90".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/a_vflip/a_45", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.byAngle(45));
    const parts = "w_100/a_vflip/a_45".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/dpr_1.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .delivery(Delivery.dpr("1.0"));
    const parts = "w_100/dpr_1.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_100/dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_100/dpr_3.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(100))
      .delivery(Delivery.dpr("3.0"));
    const parts = "w_100/dpr_3.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1000", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(1000)
    );
    const parts = "w_1000".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1000,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(1000))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_1000,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1000,f_auto,q_auto:best", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(1000))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.autoBest()));
    const parts = "w_1000,f_auto,q_auto:best".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_115,h_135,c_thumb,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(115)
        .height(135)
        .gravity(Gravity.focusOn(FocusOn.faces()))
    );
    const parts = "w_115,h_135,c_thumb,g_faces".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_120", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(120)
    );
    const parts = "w_120".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_123/a_45", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(123))
      .rotate(Rotate.byAngle(45));
    const parts = "w_123/a_45".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(150)
    );
    const parts = "w_150,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:al_dente", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("al_dente"));
    const parts = "w_150,e_art:al_dente".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:athena", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("athena"));
    const parts = "w_150,e_art:athena".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:audrey", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("audrey"));
    const parts = "w_150,e_art:audrey".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:aurora", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("aurora"));
    const parts = "w_150,e_art:aurora".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:daguerre", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("daguerre"));
    const parts = "w_150,e_art:daguerre".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:eucalyptus", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("eucalyptus"));
    const parts = "w_150,e_art:eucalyptus".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:fes", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("fes"));
    const parts = "w_150,e_art:fes".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:frost", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("frost"));
    const parts = "w_150,e_art:frost".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:hairspray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("hairspray"));
    const parts = "w_150,e_art:hairspray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:hokusai", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("hokusai"));
    const parts = "w_150,e_art:hokusai".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:incognito", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("incognito"));
    const parts = "w_150,e_art:incognito".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:linen", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("linen"));
    const parts = "w_150,e_art:linen".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:peacock", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("peacock"));
    const parts = "w_150,e_art:peacock".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:primavera", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("primavera"));
    const parts = "w_150,e_art:primavera".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:quartz", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("quartz"));
    const parts = "w_150,e_art:quartz".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:red_rock", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("red_rock"));
    const parts = "w_150,e_art:red_rock".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:refresh", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("refresh"));
    const parts = "w_150,e_art:refresh".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:sizzle", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("sizzle"));
    const parts = "w_150,e_art:sizzle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:sonnet", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("sonnet"));
    const parts = "w_150,e_art:sonnet".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:ukulele", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("ukulele"));
    const parts = "w_150,e_art:ukulele".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,e_art:zorro", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .effect(Effect.artisticFilter("zorro"));
    const parts = "w_150,e_art:zorro".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(150))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_150,f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(150).height(100)
    );
    const parts = "w_150,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_100,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(150).height(100)
    );
    const parts = "w_150,h_100,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_100,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(150).height(100)
    );
    const parts = "w_150,h_100,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(150).height(150)
    );
    const parts = "w_150,h_150,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_fill,g_east", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(150).height(150).gravity(Gravity.compass("east"))
    );
    const parts = "w_150,h_150,c_fill,g_east".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_lfill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().width(150).height(150)
    );
    const parts = "w_150,h_150,c_lfill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_limit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().width(150).height(150)
    );
    const parts = "w_150,h_150,c_limit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_lpad,b_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad()
        .width(150)
        .height(150)
        .background(Background.color("green"))
    );
    const parts = "w_150,h_150,c_lpad,b_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_pad,b_black", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(150).height(150).background(Background.color("black"))
    );
    const parts = "w_150,h_150,c_pad,b_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_pad,b_pink", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(150).height(150).background(Background.color("pink"))
    );
    const parts = "w_150,h_150,c_pad,b_pink".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(150).height(150)
    );
    const parts = "w_150,h_150,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_thumb,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail().width(150).height(150).gravity(Gravity.autoGravity())
    );
    const parts = "w_150,h_150,c_thumb,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_thumb,g_center", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .gravity(Gravity.compass("center"))
    );
    const parts = "w_150,h_150,c_thumb,g_center".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_150,c_thumb,g_face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(150)
        .height(150)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "w_150,h_150,c_thumb,g_face".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_200,c_lfill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFill().width(150).height(200)
    );
    const parts = "w_150,h_200,c_lfill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_150,h_60,c_fit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(150).height(60)
    );
    const parts = "w_150,h_60,c_fit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1520,h_1440,c_crop,g_west,x_50", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(1520)
        .height(1440)
        .gravity(Gravity.compass("west"))
        .x(50)
    );
    const parts = "w_1520,h_1440,c_crop,g_west,x_50"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1520,h_1440,c_crop,g_west,x_50/e_pixelate_region:15,g_ocr_text", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(1520)
          .height(1440)
          .gravity(Gravity.compass("west"))
          .x(50)
      )
      .effect(Effect.pixelate().squareSize(15).region(Region.ocr()));
    const parts =
      "w_1520,h_1440,c_crop,g_west,x_50/e_pixelate_region:15,g_ocr_text"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_1520,h_1440,c_crop,g_west,x_50/h_283", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(1520)
          .height(1440)
          .gravity(Gravity.compass("west"))
          .x(50)
      )
      .resize(Resize.scale().height(283));
    const parts = "w_1520,h_1440,c_crop,g_west,x_50/h_283"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_20,h_20,c_mfit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(20).height(20)
    );
    const parts = "w_20,h_20,c_mfit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_20,h_20,c_mpad", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().width(20).height(20)
    );
    const parts = "w_20,h_20,c_mpad".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_20,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(20))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_20,q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(200)
    );
    const parts = "w_200".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,a_45", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(45))
      .resize(Resize.scale().width(200));
    const parts = "w_200,a_45".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,a_45/d_avatar.png", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.byAngle(45))
      .resize(Resize.scale().width(200))
      .delivery(Delivery.defaultImage("avatar.png"));
    const parts = "w_200,a_45/d_avatar.png".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,c_scale/e_outline:20:200,co_red/e_outline:15:200,co_orange/e_outline:10:200,co_yellow", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .effect(Effect.outline().width(20).blurLevel(200).color("red"))
      .effect(Effect.outline().width(15).blurLevel(200).color("orange"))
      .effect(Effect.outline().width(10).blurLevel(200).color("yellow"));
    const parts =
      "w_200,c_scale/e_outline:20:200,co_red/e_outline:15:200,co_orange/e_outline:10:200,co_yellow"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_200,dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_200,f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_100", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(200).height(100)
    );
    const parts = "w_200,h_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_150,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(200).height(150)
    );
    const parts = "w_200,h_150,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_150,c_crop,g_north_west", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(200)
        .height(150)
        .gravity(Gravity.compass("north_west"))
    );
    const parts = "w_200,h_150,c_crop,g_north_west"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_crop,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(200).height(200).gravity(Gravity.autoGravity())
    );
    const parts = "w_200,h_200,c_crop,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_crop,g_center", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(200).height(200).gravity(Gravity.compass("center"))
    );
    const parts = "w_200,h_200,c_crop,g_center".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(200)
    );
    const parts = "w_200,h_200,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(200).gravity(Gravity.autoGravity())
    );
    const parts = "w_200,h_200,c_fill,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill,g_center", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(200).gravity(Gravity.compass("center"))
    );
    const parts = "w_200,h_200,c_fill,g_center".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill,g_face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(200)
        .height(200)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "w_200,h_200,c_fill,g_face".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(200)
        .height(200)
        .gravity(Gravity.focusOn(FocusOn.faces()))
    );
    const parts = "w_200,h_200,c_fill,g_faces".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill,g_faces/u_docs:iphone_template,h_300,a_90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(200)
          .height(200)
          .gravity(Gravity.focusOn(FocusOn.faces()))
      )
      .underlay(
        Underlay.source(
          Source.image("docs/iphone_template").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(90))
              .resize(Resize.scale().height(300))
          )
        )
      );
    const parts = "w_200,h_200,c_fill,g_faces/u_docs:iphone_template,h_300,a_90"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill/e_style_transfer,l_sailing_angel", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(200).height(200))
      .effect(Effect.styleTransfer(Source.image("sailing_angel")));
    const parts = "w_200,h_200,c_fill/e_style_transfer,l_sailing_angel"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fit,a_hflip/l_cloudinary_icon,w_0.4,fl_relative,g_north,x_15,y_35,a_4,e_brightness:100,o_70", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .resize(Resize.fit().width(200).height(200))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(4))
              .resize(Resize.scale().width(0.4).relative())
              .adjust(Adjust.opacity(70))
              .adjust(Adjust.brightness().level(100))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("north"))
            .offsetX(15)
            .offsetY(35)
        )
      );
    const parts =
      "w_200,h_200,c_fit,a_hflip/l_cloudinary_icon,w_0.4,fl_relative,g_north,x_15,y_35,a_4,e_brightness:100,o_70"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fit,a_hflip/l_cloudinary_icon_white,w_0.4,fl_relative,g_north,x_15,y_35,a_4,e_brightness:100,o_70", () => {
    const tAsset = new CloudinaryImage("sample")
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .resize(Resize.fit().width(200).height(200))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_white").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(4))
              .resize(Resize.scale().width(0.4).relative())
              .adjust(Adjust.opacity(70))
              .adjust(Adjust.brightness().level(100))
          )
        ).position(
          new Position()
            .gravity(Gravity.compass("north"))
            .offsetX(15)
            .offsetY(35)
        )
      );
    const parts =
      "w_200,h_200,c_fit,a_hflip/l_cloudinary_icon_white,w_0.4,fl_relative,g_north,x_15,y_35,a_4,e_brightness:100,o_70"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_thumb,g_face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(200)
        .height(200)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "w_200,h_200,c_thumb,g_face".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_220,c_thumb,g_face/l_hexagon_feather_sample,fl_cutter", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(200)
          .height(220)
          .gravity(Gravity.focusOn(FocusOn.face()))
      )
      .reshape(Reshape.cutByImage(Source.image("hexagon_feather_sample")));
    const parts =
      "w_200,h_220,c_thumb,g_face/l_hexagon_feather_sample,fl_cutter"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_300,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(300).gravity(Gravity.autoGravity())
    );
    const parts = "w_200,h_300,c_fill,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_300,c_fill,g_center", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(200).height(300).gravity(Gravity.compass("center"))
    );
    const parts = "w_200,h_300,c_fill,g_center".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200/dpr_1.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .delivery(Delivery.dpr("1.0"));
    const parts = "w_200/dpr_1.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200/dpr_2.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_200/dpr_2.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200/dpr_3.0", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(200))
      .delivery(Delivery.dpr("3.0"));
    const parts = "w_200/dpr_3.0".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_230,h_168,c_fit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(230).height(168)
    );
    const parts = "w_230,h_168,c_fit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_25,h_150,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(25).height(150).gravity(Gravity.autoGravity())
    );
    const parts = "w_25,h_150,c_fill,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_25,h_150,c_fill_pad,g_auto,b_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad()
        .width(25)
        .height(150)
        .gravity(Gravity.autoGravity())
        .background(Background.auto())
    );
    const parts = "w_25,h_150,c_fill_pad,g_auto,b_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(250)
    );
    const parts = "w_250".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .border(Border.solid(1, "gray"));
    const parts = "w_250,bo_1px_solid_gray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_250,f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(250).height(250)
    );
    const parts = "w_250,h_250,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fill,g_east", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(250).height(250).gravity(Gravity.compass("east"))
    );
    const parts = "w_250,h_250,c_fill,g_east".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fill,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(250)
        .height(250)
        .gravity(Gravity.focusOn(FocusOn.faces()))
    );
    const parts = "w_250,h_250,c_fill,g_faces".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fill,g_north", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(250).height(250).gravity(Gravity.compass("north"))
    );
    const parts = "w_250,h_250,c_fill,g_north".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fill,g_south_east", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(250)
        .height(250)
        .gravity(Gravity.compass("south_east"))
    );
    const parts = "w_250,h_250,c_fill,g_south_east"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_fit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fit().width(250).height(250)
    );
    const parts = "w_250,h_250,c_fit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_limit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitFit().width(250).height(250)
    );
    const parts = "w_250,h_250,c_limit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_lpad,b_black", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad()
        .width(250)
        .height(250)
        .background(Background.color("black"))
    );
    const parts = "w_250,h_250,c_lpad,b_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_mfit", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumFit().width(250).height(250)
    );
    const parts = "w_250,h_250,c_mfit".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_mpad", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.minimumPad().width(250).height(250)
    );
    const parts = "w_250,h_250,c_mpad".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,h_250,c_pad,b_black", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(250).height(250).background(Background.color("black"))
    );
    const parts = "w_250,h_250,c_pad,b_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,q_80", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.quality(80));
    const parts = "w_250,q_80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,q_auto:best", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.quality(Quality.autoBest()));
    const parts = "w_250,q_auto:best".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,q_auto:eco", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.quality(Quality.autoEco()));
    const parts = "w_250,q_auto:eco".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,q_auto:good", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.quality(Quality.autoGood()));
    const parts = "w_250,q_auto:good".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,q_auto:low", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .delivery(Delivery.quality(Quality.autoLow()));
    const parts = "w_250,q_auto:low".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,x_780,y_350,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(250).x(780).y(350)
    );
    const parts = "w_250,x_780,y_350,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,x_780,y_350,c_crop/u_docs:transparent_grid,w_250,c_crop,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(250).x(780).y(350))
      .underlay(
        Underlay.source(
          Source.image("docs/transparent_grid").transformation(
            new Transformation()
              .resize(Resize.crop().width(250))
              .adjust(Adjust.opacity(50))
          )
        )
      );
    const parts =
      "w_250,x_780,y_350,c_crop/u_docs:transparent_grid,w_250,c_crop,o_50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250,x_780,y_350,c_crop/w_1100", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(250).x(780).y(350))
      .resize(Resize.scale().width(1100));
    const parts = "w_250,x_780,y_350,c_crop/w_1100"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250/u_docs:transparent_grid,w_1.0,h_1.0,fl_relative,c_crop,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .underlay(
        Underlay.source(
          Source.image("docs/transparent_grid").transformation(
            new Transformation()
              .resize(Resize.crop().width("1.0").height("1.0").relative())
              .adjust(Adjust.opacity(50))
          )
        )
      );
    const parts =
      "w_250/u_docs:transparent_grid,w_1.0,h_1.0,fl_relative,c_crop,o_50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_250/u_docs:transparent_grid,w_250,c_crop,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(250))
      .underlay(
        Underlay.source(
          Source.image("docs/transparent_grid").transformation(
            new Transformation()
              .resize(Resize.crop().width(250))
              .adjust(Adjust.opacity(50))
          )
        )
      );
    const parts = "w_250/u_docs:transparent_grid,w_250,c_crop,o_50"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_260,h_200,c_crop,g_north", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(260).height(200).gravity(Gravity.compass("north"))
    );
    const parts = "w_260,h_200,c_crop,g_north".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_28,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(28))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_28,q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_28,q_auto,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(28))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_28,q_auto,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_28,q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(28))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_28,q_auto,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(300)
    );
    const parts = "w_300".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,c_fill,g_auto,ar_1:1", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(300)
        .aspectRatio(AspectRatio.ar1X1())
        .gravity(Gravity.autoGravity())
    );
    const parts = "w_300,c_fill,g_auto,ar_1:1".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,c_scale,pg_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .extract(Extract.getPage().byNumber(2));
    const parts = "w_300,c_scale,pg_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,e_accelerate:100", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .effect(Effect.accelerate().rate(100));
    const parts = "w_300,e_accelerate:100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,e_grayscale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .effect(Effect.grayscale());
    const parts = "w_300,e_grayscale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,e_noise:50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .effect(Effect.noise().level(50));
    const parts = "w_300,e_noise:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_300,f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,f_auto,q_auto,dpr_2,bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_300,f_auto,q_auto,dpr_2,bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,fl_keep_iptc", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .addFlag("keep_iptc");
    const parts = "w_300,fl_keep_iptc".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,fl_png8", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .addFlag("png8");
    const parts = "w_300,fl_png8".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_100,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(300).height(100)
    );
    const parts = "w_300,h_100,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(300).height(200)
    );
    const parts = "w_300,h_200,c_crop".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,c_fill,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(300).height(200))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "w_300,h_200,c_fill,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.fill().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation().resize(Resize.fill().width(300).height(200))
          )
        )
      )
      .setAssetType("image");
    const parts = "w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill,so_0", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.fill().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .videoEdit(VideoEdit.trim().startOffset("0.0"))
              .resize(Resize.fill().width(300).height(200))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "w_300,h_200,c_fill/l_video:dog,fl_splice,w_300,h_200,c_fill,so_0"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,du_5/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("5.0"))
      .resize(Resize.scale().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(Transition.videoSource("transition1"))
      )
      .setAssetType("image");
    const parts =
      "w_300,h_200,du_5/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200,du_5/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply/l_video:snow_deer,w_300,h_200/du_5/l_video:transition2,e_transition/fl_layer_apply/fl_layer_apply/l_video:dog,fl_splice,w_300,h_200/du_5/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("5.0"))
      .resize(Resize.scale().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(Transition.videoSource("transition1"))
      )
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("snow_deer").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(Transition.videoSource("transition2"))
      )
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "w_300,h_200,du_5/l_video:dog,w_300,h_200/du_5/l_video:transition1,e_transition/fl_layer_apply/fl_layer_apply/l_video:snow_deer,w_300,h_200/du_5/l_video:transition2,e_transition/fl_layer_apply/fl_layer_apply/l_video:dog,fl_splice,w_300,h_200/du_5/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_200/w_300,h_200,l_sample,fl_splice,du_3/so_0,fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.scale().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.imageSource("sample").transformation(
            new Transformation()
              .videoEdit(VideoEdit.trim().duration("3.0"))
              .resize(Resize.scale().width(300).height(200))
          )
        ).prepend()
      )
      .setAssetType("image");
    const parts =
      "w_300,h_200/w_300,h_200,l_sample,fl_splice,du_3/so_0,fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_250,e_grayscale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300).height(250))
      .effect(Effect.grayscale());
    const parts = "w_300,h_250,e_grayscale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_300,c_fill/l_cloudinary_icon,w_0.8,fl_relative,e_brightness:100,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(300).height(300))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(0.8).relative())
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        )
      );
    const parts =
      "w_300,h_300,c_fill/l_cloudinary_icon,w_0.8,fl_relative,e_brightness:100,o_50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_300,c_fill/l_cloudinary_icon_white,w_0.8,fl_relative,e_brightness:100,o_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(300).height(300))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_white").transformation(
            new Transformation()
              .resize(Resize.scale().width(0.8).relative())
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        )
      );
    const parts =
      "w_300,h_300,c_fill/l_cloudinary_icon_white,w_0.8,fl_relative,e_brightness:100,o_50"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_300,c_pad,b_blue", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(300).height(300).background(Background.color("blue"))
    );
    const parts = "w_300,h_300,c_pad,b_blue".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_300,c_pad,b_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(300).height(300).background(Background.color("green"))
    );
    const parts = "w_300,h_300,c_pad,b_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_350,c_fill,g_north", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(300).height(350).gravity(Gravity.compass("north"))
    );
    const parts = "w_300,h_350,c_fill,g_north".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_350,c_fill,g_north/", () => {
    const tAsset = new CloudinaryImage("/sample").resize(
      Resize.fill().width(300).height(350).gravity(Gravity.compass("north"))
    );
    const parts = "w_300,h_350,c_fill,g_north/".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,h_80,c_thumb,g_adv_eyes", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(300)
        .height(80)
        .gravity(Gravity.focusOn(FocusOn.advancedEyes()))
    );
    const parts = "w_300,h_80,c_thumb,g_adv_eyes"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300,pg_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .extract(Extract.getPage().byNumber(2));
    const parts = "w_300,pg_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_300/c_fill,e_shadow,x_w_div_50,y_w_div_50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(300))
      .effect(
        Effect.shadow()
          .offsetX(Expression.expression("width / 50"))
          .offsetY(Expression.expression("width / 50"))
      )
      .resize(Resize.fill());
    const parts = "w_300/c_fill,e_shadow,x_w_div_50,y_w_div_50"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(350)
    );
    const parts = "w_350".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,bo_5px_solid_black/q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .border(Border.solid(5, "black"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_350,bo_5px_solid_black/q_auto,dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.format(Format.auto()));
    const parts = "w_350,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,f_gif", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.format(Format.gif()));
    const parts = "w_350,f_gif".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,h_200,x_230,y_20,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(350).height(200).x(230).y(20)
    );
    const parts = "w_350,h_200,x_230,y_20,c_crop"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_100", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(100));
    const parts = "w_350,q_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_80", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(80));
    const parts = "w_350,q_80".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_auto:best", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(Quality.autoBest()));
    const parts = "w_350,q_auto:best".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_auto:eco", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(Quality.autoEco()));
    const parts = "w_350,q_auto:eco".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_auto:good", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(Quality.autoGood()));
    const parts = "w_350,q_auto:good".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350,q_auto:low", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.quality(Quality.autoLow()));
    const parts = "w_350,q_auto:low".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_350/q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(350))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_350/q_auto,dpr_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(400)
    );
    const parts = "w_400".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,ar_1,c_thumb,g_auto:skateboard", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(400)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.skateboard())
          )
        )
    );
    const parts = "w_400,ar_1,c_thumb,g_auto:skateboard"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,ar_1,g_auto,c_fill_pad", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad()
        .width(400)
        .aspectRatio("1.0")
        .gravity(Gravity.autoGravity())
    );
    const parts = "w_400,ar_1,g_auto,c_fill_pad".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,ar_1,g_auto,c_fill_pad,so_1", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().startOffset("1.0"))
      .resize(
        Resize.fillPad()
          .width(400)
          .aspectRatio("1.0")
          .gravity(Gravity.autoGravity())
      )
      .setAssetType("image");
    const parts = "w_400,ar_1,g_auto,c_fill_pad,so_1"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,c_fill,ar_4:3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(400).aspectRatio(AspectRatio.ar4X3())
    );
    const parts = "w_400,c_fill,ar_4:3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,f_png", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .delivery(Delivery.format(Format.png()));
    const parts = "w_400,f_png".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,fl_keep_iptc", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(400))
      .addFlag("keep_iptc");
    const parts = "w_400,fl_keep_iptc".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,h_150,c_lpad,b_green", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.limitPad()
        .width(400)
        .height(150)
        .background(Background.color("green"))
    );
    const parts = "w_400,h_150,c_lpad,b_green".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_400,h_300,c_pad", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad().width(400).height(300)
    );
    const parts = "w_400,h_300,c_pad".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_450,bo_5px_solid_black/q_auto,dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(450))
      .border(Border.solid(5, "black"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_450,bo_5px_solid_black/q_auto,dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(500)
    );
    const parts = "w_500".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_crop,g_auto:bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(500)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
        )
    );
    const parts = "w_500,ar_1,c_crop,g_auto:bottle"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_crop,g_auto:bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(500)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_crop,g_auto:bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_crop,g_bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop()
        .width(500)
        .aspectRatio("1.0")
        .gravity(Gravity.focusOn(FocusOn.bottle()))
    );
    const parts = "w_500,ar_1,c_crop,g_bottle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_crop,g_bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(500)
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.bottle()))
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_crop,g_bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_fill,g_auto:bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(500)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
        )
    );
    const parts = "w_500,ar_1,c_fill,g_auto:bottle"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_fill,g_auto:bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(500)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_fill,g_auto:bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_fill,g_bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(500)
        .aspectRatio("1.0")
        .gravity(Gravity.focusOn(FocusOn.bottle()))
    );
    const parts = "w_500,ar_1,c_fill,g_bottle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_fill,g_bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(500)
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.bottle()))
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_fill,g_bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_thumb,g_auto:bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(500)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
        )
    );
    const parts = "w_500,ar_1,c_thumb,g_auto:bottle"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_thumb,g_auto:bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(500)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.bottle()))
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_thumb,g_auto:bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_thumb,g_bottle", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(500)
        .aspectRatio("1.0")
        .gravity(Gravity.focusOn(FocusOn.bottle()))
    );
    const parts = "w_500,ar_1,c_thumb,g_bottle".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1,c_thumb,g_bottle/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(500)
          .aspectRatio("1.0")
          .gravity(Gravity.focusOn(FocusOn.bottle()))
      )
      .resize(Resize.scale().height(150));
    const parts = "w_500,ar_1,c_thumb,g_bottle/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1.0,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(500).aspectRatio("1.0").gravity(Gravity.autoGravity())
    );
    const parts = "w_500,ar_1.0,c_fill,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1.0,c_fill,g_auto/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(500)
          .aspectRatio("1.0")
          .gravity(Gravity.autoGravity())
      )
      .resize(Resize.scale().height(300));
    const parts = "w_500,ar_1.0,c_fill,g_auto/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1.0,c_fill,g_auto:person_avoid", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(500)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.person()).avoid()
          )
        )
    );
    const parts = "w_500,ar_1.0,c_fill,g_auto:person_avoid"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_1.0,c_fill,g_auto:person_avoid/h_300", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(500)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(
              AutoFocus.focusOn(FocusOn.person()).avoid()
            )
          )
      )
      .resize(Resize.scale().height(300));
    const parts = "w_500,ar_1.0,c_fill,g_auto:person_avoid/h_300"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,ar_4:3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(500).aspectRatio(AspectRatio.ar4X3())
    );
    const parts = "w_500,ar_4:3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,bo_5px_solid_black", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .border(Border.solid(5, "black"));
    const parts = "w_500,bo_5px_solid_black".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_brightness:30", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.brightness().level(30));
    const parts = "w_500,e_brightness:30".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_contrast:50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.contrast().level(50));
    const parts = "w_500,e_contrast:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_gamma:-20", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.gamma().level(-20));
    const parts = "w_500,e_gamma:-20".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_reverse", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .effect(Effect.reverse());
    const parts = "w_500,e_reverse".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_saturation:-50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.saturation().level(-50));
    const parts = "w_500,e_saturation:-50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_vignette:50", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .effect(Effect.vignette().strength(50));
    const parts = "w_500,e_vignette:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,e_volume:50", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.volume(50))
      .resize(Resize.scale().width(500))
      .setAssetType("image");
    const parts = "w_500,e_volume:50".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.format(Format.auto()));
    const parts = "w_500,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,f_auto,q_auto,dpr_2/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "w_500,f_auto,q_auto,dpr_2/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,f_auto/fl_streaming_attachment:mydog", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.format(Format.auto()))
      .addFlag(Flag.streamingAttachment("mydog"));
    const parts = "w_500,f_auto/fl_streaming_attachment:mydog"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,q_auto,f_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_500,q_auto,f_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500,q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_500,q_auto,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/e_brightness:70/l_woman,c_crop,g_face/w_150/e_saturation:50/e_shadow/fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.brightness().level(70))
      .overlay(
        Overlay.source(
          Source.image("woman").transformation(
            new Transformation()
              .resize(Resize.crop().gravity(Gravity.focusOn(FocusOn.face())))
              .resize(Resize.scale().width(150))
              .adjust(Adjust.saturation().level(50))
              .effect(Effect.shadow())
          )
        )
      );
    const parts =
      "w_500/e_brightness:70/l_woman,c_crop,g_face/w_150/e_saturation:50/e_shadow/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/e_brightness:70/l_woman,c_crop,g_face/w_250/e_saturation:50/e_shadow,x_20,y_20,co_grey/fl_layer_apply", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .adjust(Adjust.brightness().level(70))
      .overlay(
        Overlay.source(
          Source.image("woman").transformation(
            new Transformation()
              .resize(Resize.crop().gravity(Gravity.focusOn(FocusOn.face())))
              .resize(Resize.scale().width(250))
              .adjust(Adjust.saturation().level(50))
              .effect(Effect.shadow().color("grey"))
          )
        ).position(new Position().offsetX(20).offsetY(20))
      );
    const parts =
      "w_500/e_brightness:70/l_woman,c_crop,g_face/w_250/e_saturation:50/e_shadow,x_20,y_20,co_grey/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon,g_north_east,o_50,w_200,e_anti_removal:90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(200))
              .adjust(Adjust.opacity(50))
          )
        )
          .position(new Position().gravity(Gravity.compass("north_east")))
          .blendMode(BlendMode.antiRemoval(90))
      );
    const parts =
      "w_500/l_cloudinary_icon,g_north_east,o_50,w_200,e_anti_removal:90"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon,o_50,w_100,e_brightness:100,fl_tiled", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(100))
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        ).position(new Position().tiled())
      );
    const parts = "w_500/l_cloudinary_icon,o_50,w_100,e_brightness:100,fl_tiled"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon,w_150/e_blackwhite/fl_layer_apply,g_north_east", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(150))
              .effect(Effect.blackwhite())
          )
        ).position(new Position().gravity(Gravity.compass("north_east")))
      );
    const parts =
      "w_500/l_cloudinary_icon,w_150/e_blackwhite/fl_layer_apply,g_north_east"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon,w_150/e_blackwhite/l_cloudinary_icon,w_50/fl_layer_apply/fl_layer_apply,g_north_east", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon").transformation(
            new Transformation()
              .resize(Resize.scale().width(150))
              .effect(Effect.blackwhite())
              .overlay(
                Overlay.source(
                  Source.image("cloudinary_icon").transformation(
                    new Transformation().resize(Resize.scale().width(50))
                  )
                )
              )
          )
        ).position(new Position().gravity(Gravity.compass("north_east")))
      );
    const parts =
      "w_500/l_cloudinary_icon,w_150/e_blackwhite/l_cloudinary_icon,w_50/fl_layer_apply/fl_layer_apply,g_north_east"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon_blue,g_north_east,o_50,w_200,e_anti_removal:90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_blue").transformation(
            new Transformation()
              .resize(Resize.scale().width(200))
              .adjust(Adjust.opacity(50))
          )
        )
          .position(new Position().gravity(Gravity.compass("north_east")))
          .blendMode(BlendMode.antiRemoval(90))
      );
    const parts =
      "w_500/l_cloudinary_icon_blue,g_north_east,o_50,w_200,e_anti_removal:90"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon_blue,w_150/e_blackwhite/fl_layer_apply,g_north_east", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_blue").transformation(
            new Transformation()
              .resize(Resize.scale().width(150))
              .effect(Effect.blackwhite())
          )
        ).position(new Position().gravity(Gravity.compass("north_east")))
      );
    const parts =
      "w_500/l_cloudinary_icon_blue,w_150/e_blackwhite/fl_layer_apply,g_north_east"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon_blue,w_150/e_blackwhite/l_cloudinary_icon_blue,w_50/fl_layer_apply/fl_layer_apply,g_north_east", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_blue").transformation(
            new Transformation()
              .resize(Resize.scale().width(150))
              .effect(Effect.blackwhite())
              .overlay(
                Overlay.source(
                  Source.image("cloudinary_icon_blue").transformation(
                    new Transformation().resize(Resize.scale().width(50))
                  )
                )
              )
          )
        ).position(new Position().gravity(Gravity.compass("north_east")))
      );
    const parts =
      "w_500/l_cloudinary_icon_blue,w_150/e_blackwhite/l_cloudinary_icon_blue,w_50/fl_layer_apply/fl_layer_apply,g_north_east"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_cloudinary_icon_white,o_50,w_100,e_brightness:100,fl_tiled", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.image("cloudinary_icon_white").transformation(
            new Transformation()
              .resize(Resize.scale().width(100))
              .adjust(Adjust.opacity(50))
              .adjust(Adjust.brightness().level(100))
          )
        ).position(new Position().tiled())
      );
    const parts =
      "w_500/l_cloudinary_icon_white,o_50,w_100,e_brightness:100,fl_tiled"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_my_bg", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(Overlay.source(Source.image("my_bg")));
    const parts = "w_500/l_my_bg".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_my_icon", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(Overlay.source(Source.image("my_icon")));
    const parts = "w_500/l_my_icon".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_subtitles:Arial_40:sample_sub_he.srt", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.subtitles("sample_sub_he.srt").textStyle(
            new TextStyle("Arial", 40)
          )
        )
      );
    const parts = "w_500/l_subtitles:Arial_40:sample_sub_he.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_subtitles:sample_sub_he.srt", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(Overlay.source(Source.subtitles("sample_sub_he.srt")));
    const parts = "w_500/l_subtitles:sample_sub_he.srt"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:Arial_80:Flowers", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(Source.text("Flowers", new TextStyle("Arial", 80)))
      );
    const parts = "w_500/l_text:Arial_80:Flowers"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:Verdana_50_bold:Cool", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.text("Cool", new TextStyle("Verdana", 50).fontWeight("bold"))
        )
      );
    const parts = "w_500/l_text:Verdana_50_bold:Cool"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:Verdana_75_bold_underline_letter_spacing_14:Flowers", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.text(
            "Flowers",
            new TextStyle("Verdana", 75)
              .fontWeight("bold")
              .textDecoration("underline")
              .letterSpacing(14)
          )
        )
      );
    const parts =
      "w_500/l_text:Verdana_75_bold_underline_letter_spacing_14:Flowers"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:verdana_12_bold_underline_left:words", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.text(
            "words",
            new TextStyle("verdana", 12)
              .fontWeight("bold")
              .textDecoration("underline")
              .textAlignment("left")
          )
        )
      );
    const parts = "w_500/l_text:verdana_12_bold_underline_left:words"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:verdana_12_bold_underline_left:words,y_23", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.text(
            "words",
            new TextStyle("verdana", 12)
              .fontWeight("bold")
              .textDecoration("underline")
              .textAlignment("left")
          )
        ).position(new Position().offsetY(23))
      );
    const parts = "w_500/l_text:verdana_12_bold_underline_left:words,y_23"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_text:verdana_1:words", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(Source.text("words", new TextStyle("verdana", 1)))
      );
    const parts = "w_500/l_text:verdana_1:words".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_video:docs:bluescreen_watches,e_make_transparent:10,co_rgb:3d8d48,w_1.0,fl_relative/du_15", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.video("docs/bluescreen_watches").transformation(
            new Transformation()
              .resize(Resize.scale().width("1.0").relative())
              .effect(
                Effect.makeTransparent().tolerance(10).colorToReplace("#3d8d48")
              )
          )
        )
      )
      .videoEdit(VideoEdit.trim().duration("15.0"))
      .setAssetType("image");
    const parts =
      "w_500/l_video:docs:bluescreen_watches,e_make_transparent:10,co_rgb:3d8d48,w_1.0,fl_relative/du_15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/l_video:docs:bluescreen_watches,e_make_transparent:20,co_rgb:0e80d8,w_0.6,fl_relative,g_north/du_15", () => {
    const tAsset = new CloudinaryVideo("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.video("docs/bluescreen_watches").transformation(
            new Transformation()
              .resize(Resize.scale().width(0.6).relative())
              .effect(
                Effect.makeTransparent().tolerance(20).colorToReplace("#0e80d8")
              )
          )
        ).position(new Position().gravity(Gravity.compass("north")))
      )
      .videoEdit(VideoEdit.trim().duration("15.0"))
      .setAssetType("image");
    const parts =
      "w_500/l_video:docs:bluescreen_watches,e_make_transparent:20,co_rgb:0e80d8,w_0.6,fl_relative,g_north/du_15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/u_fetch:aW1hZ2UudXJs", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .underlay(Underlay.source(Source.fetch("image.url")));
    const parts = "w_500/u_fetch:aW1hZ2UudXJs".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/u_my_bg", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .underlay(Underlay.source(Source.image("my_bg")));
    const parts = "w_500/u_my_bg".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_550,h_300,c_fit/f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fit().width(550).height(300))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_550,h_300,c_fit/f_auto,q_auto,dpr_2"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_550,h_35,c_crop,g_north_west/bo_1px_solid_gray/dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.crop()
          .width(550)
          .height(35)
          .gravity(Gravity.compass("north_west"))
      )
      .border(Border.solid(1, "gray"))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "w_550,h_35,c_crop,g_north_west/bo_1px_solid_gray/dpr_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(600)
    );
    const parts = "w_600".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:microwave", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(600)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.microwave())
          )
        )
    );
    const parts = "w_600,ar_1,c_thumb,g_auto:microwave"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:microwave/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(600)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(
              AutoFocus.focusOn(FocusOn.microwave())
            )
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_600,ar_1,c_thumb,g_auto:microwave/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:refrigerator", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(600)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.refrigerator())
          )
        )
    );
    const parts = "w_600,ar_1,c_thumb,g_auto:refrigerator"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:refrigerator/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(600)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(
              AutoFocus.focusOn(FocusOn.refrigerator())
            )
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_600,ar_1,c_thumb,g_auto:refrigerator/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:sink", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.thumbnail()
        .width(600)
        .aspectRatio("1.0")
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.sink()))
        )
    );
    const parts = "w_600,ar_1,c_thumb,g_auto:sink"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,ar_1,c_thumb,g_auto:sink/h_150", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.thumbnail()
          .width(600)
          .aspectRatio("1.0")
          .gravity(
            Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.sink()))
          )
      )
      .resize(Resize.scale().height(150));
    const parts = "w_600,ar_1,c_thumb,g_auto:sink/h_150"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600,f_auto,q_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_600,f_auto,q_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600/q_100", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.quality(100));
    const parts = "w_600/q_100".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600/q_auto,f_auto,dpr_2/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "w_600/q_auto,f_auto,dpr_2/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600/q_auto:low", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .delivery(Delivery.quality(Quality.autoLow()));
    const parts = "w_600/q_auto:low".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_600/w_570,h_43,c_crop,g_north_west/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(600))
      .resize(
        Resize.crop()
          .width(570)
          .height(43)
          .gravity(Gravity.compass("north_west"))
      )
      .border(Border.solid(1, "gray"));
    const parts = "w_600/w_570,h_43,c_crop,g_north_west/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,dpr_2/f_auto,q_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_700,dpr_2/f_auto,q_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,f_auto,q_auto,dpr_2/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "w_700,f_auto,q_auto,dpr_2/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,h_700,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(700).height(700)
    );
    const parts = "w_700,h_700,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,h_700,c_fill/e_style_transfer,l_sailing_angel", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(Effect.styleTransfer(Source.image("sailing_angel")));
    const parts = "w_700,h_700,c_fill/e_style_transfer,l_sailing_angel"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,h_700,c_fill/e_style_transfer:60,l_lighthouse/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(Effect.styleTransfer(Source.image("lighthouse")).strength(60))
      .resize(Resize.scale().width(250));
    const parts = "w_700,h_700,c_fill/e_style_transfer:60,l_lighthouse/w_250"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,h_700,c_fill/e_style_transfer:preserve_color,l_lighthouse/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .effect(Effect.styleTransfer(Source.image("lighthouse")).preserveColor())
      .resize(Resize.scale().width(250));
    const parts =
      "w_700,h_700,c_fill/e_style_transfer:preserve_color,l_lighthouse/w_250"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,h_700,c_fill/w_250", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(700).height(700))
      .resize(Resize.scale().width(250));
    const parts = "w_700,h_700,c_fill/w_250".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700,q_auto,f_auto,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr("2.0"))
      .delivery(Delivery.format(Format.auto()))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_700,q_auto,f_auto,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_700/dpr_auto/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(700))
      .delivery(Delivery.dpr(Dpr.auto()))
      .border(Border.solid(1, "gray"));
    const parts = "w_700/dpr_auto/bo_1px_solid_gray"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_750,h_750,c_fill,g_faces", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(750)
        .height(750)
        .gravity(Gravity.focusOn(FocusOn.faces()))
    );
    const parts = "w_750,h_750,c_fill,g_faces".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_750,h_750,c_fill,g_faces/u_docs:iphone_template,h_300,a_90", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(
        Resize.fill()
          .width(750)
          .height(750)
          .gravity(Gravity.focusOn(FocusOn.faces()))
      )
      .underlay(
        Underlay.source(
          Source.image("docs/iphone_template").transformation(
            new Transformation()
              .rotate(Rotate.byAngle(90))
              .resize(Resize.scale().height(300))
          )
        )
      );
    const parts = "w_750,h_750,c_fill,g_faces/u_docs:iphone_template,h_300,a_90"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_80,h_120,c_fill,g_face", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill()
        .width(80)
        .height(120)
        .gravity(Gravity.focusOn(FocusOn.face()))
    );
    const parts = "w_80,h_120,c_fill,g_face".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_80,h_400,c_fill,g_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width(80).height(400).gravity(Gravity.autoGravity())
    );
    const parts = "w_80,h_400,c_fill,g_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_80,h_400,c_fill_pad,g_auto,b_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fillPad()
        .width(80)
        .height(400)
        .gravity(Gravity.autoGravity())
        .background(Background.auto())
    );
    const parts = "w_80,h_400,c_fill_pad,g_auto,b_auto"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_800", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(800)
    );
    const parts = "w_800".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_800/bo_1px_solid_gray", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(800))
      .border(Border.solid(1, "gray"));
    const parts = "w_800/bo_1px_solid_gray".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_850,dpr_2", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(850))
      .delivery(Delivery.dpr("2.0"));
    const parts = "w_850,dpr_2".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_abc", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width("abc")
    );
    const parts = "w_abc".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width("auto")
    );
    const parts = "w_auto".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,c_scale", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width("auto")
    );
    const parts = "w_auto,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,dpr_auto,c_limit/g_north_east,y_5,x_5,co_white,l_text:Arial_18_bold:dpr_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.limitFit().width("auto"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .overlay(
        Overlay.source(
          Source.text(
            "dpr_auto",
            new TextStyle("Arial", 18).fontWeight("bold")
          ).textColor("white")
        ).position(
          new Position()
            .gravity(Gravity.compass("north_east"))
            .offsetX(5)
            .offsetY(5)
        )
      );
    const parts =
      "w_auto,dpr_auto,c_limit/g_north_east,y_5,x_5,co_white,l_text:Arial_18_bold:dpr_auto"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,dpr_auto,c_limit/g_north_east,y_5,x_5,co_white,l_text:Arial_18_bold:dpr_auto,w_auto", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.limitFit().width("auto"))
      .delivery(Delivery.dpr(Dpr.auto()))
      .overlay(
        Overlay.source(
          Source.text("dpr_auto", new TextStyle("Arial", 18).fontWeight("bold"))
            .textColor("white")
            .transformation(
              new Transformation().resize(Resize.scale().width("auto"))
            )
        ).position(
          new Position()
            .gravity(Gravity.compass("north_east"))
            .offsetX(5)
            .offsetY(5)
        )
      );
    const parts =
      "w_auto,dpr_auto,c_limit/g_north_east,y_5,x_5,co_white,l_text:Arial_18_bold:dpr_auto,w_auto"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,dpr_auto,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width("auto"))
      .delivery(Delivery.dpr(Dpr.auto()));
    const parts = "w_auto,dpr_auto,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,f_auto,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width("auto"))
      .delivery(Delivery.format(Format.auto()));
    const parts = "w_auto,f_auto,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,g_auto,c_fill", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.fill().width("auto").gravity(Gravity.autoGravity())
    );
    const parts = "w_auto,g_auto,c_fill".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_auto,q_auto,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width("auto"))
      .delivery(Delivery.quality(Quality.auto()));
    const parts = "w_auto,q_auto,c_scale".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_iw_add_100_div_3", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.scale().width(Expression.expression("initial_width + 100 / 3"))
    );
    const parts = "w_iw_add_100_div_3".replace(/\//g, ",").split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("x_355,y_410,w_300,h_200,c_crop", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.crop().width(300).height(200).x(355).y(410)
    );
    const parts = "x_355,y_410,w_300,h_200,c_crop"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(300).height(200).x(355).y(410))
      .resize(Resize.fill().width(130).height(100));
    const parts = "x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill/a_20/c_scale,w_0.5", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(300).height(200).x(355).y(410))
      .resize(Resize.fill().width(130).height(100))
      .rotate(Rotate.byAngle(20))
      .resize(Resize.scale().width(0.5));
    const parts =
      "x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill/a_20/c_scale,w_0.5"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill/a_20/w_0.5", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(300).height(200).x(355).y(410))
      .resize(Resize.fill().width(130).height(100))
      .rotate(Rotate.byAngle(20))
      .resize(Resize.scale().width(0.5));
    const parts = "x_355,y_410,w_300,h_200,c_crop/w_130,h_100,c_fill/a_20/w_0.5"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("x_355,y_410,w_300,h_200,c_crop/w_150,h_100,c_scale", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.crop().width(300).height(200).x(355).y(410))
      .resize(Resize.scale().width(150).height(100));
    const parts = "x_355,y_410,w_300,h_200,c_crop/w_150,h_100,c_scale"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("https://res.cloudinary.com/demo/video/upload/f_webm/dog.mp4", () => {
    const tAsset = new CloudinaryVideo("dog.mp4").delivery(
      Delivery.format(Format.videoWebm())
    );
    tAsset.setCloudConfig({ cloudName: "demo" });
    tAsset.setURLConfig({ analytics: false });
    expect(tAsset.toURL()).toBe(
      "https://res.cloudinary.com/demo/video/upload/f_webm/dog.mp4"
    );
  });

  it("h_150,w_150,c_pad,b_auto:predominant_gradient:4:palette_f00_green_blue_orange", () => {
    const tAsset = new CloudinaryImage("sample").resize(
      Resize.pad()
        .width(150)
        .height(150)
        .background(
          Background.predominantGradient()
            .gradientColors(4)
            .palette("f00", "green", "blue", "orange")
        )
    );
    const parts =
      "h_150,w_150,c_pad,b_auto:predominant_gradient:4:palette_f00_green_blue_orange"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("a_180/w_300,h_200,c_fill/l_video:kitten_fighting,fl_splice,w_300,h_200,c_fill,so_0,du_5/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .rotate(Rotate.byAngle(180))
      .resize(Resize.fill().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("kitten_fighting").transformation(
            new Transformation()
              .videoEdit(VideoEdit.trim().startOffset("0.0").duration("5.0"))
              .resize(Resize.fill().width(300).height(200))
          )
        )
      )
      .setAssetType("image");
    const parts =
      "a_180/w_300,h_200,c_fill/l_video:kitten_fighting,fl_splice,w_300,h_200,c_fill,so_0,du_5/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("https://res.cloudinary.com/demo/image/upload/e_bgremoval/casual_yellow.png", () => {
    const tAsset = new CloudinaryImage("casual_yellow.png").effect(
      Effect.removeBackground()
    );
    tAsset.setCloudConfig({ cloudName: "demo" });
    tAsset.setURLConfig({ analytics: false });
    expect(tAsset.toURL()).toBe(
      "https://res.cloudinary.com/demo/image/upload/e_bgremoval/casual_yellow.png"
    );
  });

  it("du_5.0/c_scale,h_200,w_300/l_video:dog/c_scale,h_200,w_300/du_5.0/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply", () => {
    const tAsset = new CloudinaryVideo("sample")
      .videoEdit(VideoEdit.trim().duration("5.0"))
      .resize(Resize.scale().width(300).height(200))
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog").transformation(
            new Transformation()
              .resize(Resize.scale().width(300).height(200))
              .videoEdit(VideoEdit.trim().duration("5.0"))
          )
        ).transition(Transition.videoSource("transition1"))
      )
      .setAssetType("image");
    const parts =
      "du_5.0/c_scale,h_200,w_300/l_video:dog/c_scale,h_200,w_300/du_5.0/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_200,h_200,c_fill/e_style_transfer,l_sailing_angel", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.fill().width(200).height(200))
      .effect(Effect.styleTransfer(Source.image("sailing_angel")));
    const parts = "w_200,h_200,c_fill/e_style_transfer,l_sailing_angel"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("w_500/w_400,c_fit,l_text:Neucha_26_bold:Lorem", () => {
    const tAsset = new CloudinaryImage("sample")
      .resize(Resize.scale().width(500))
      .overlay(
        Overlay.source(
          Source.text(
            "Lorem",
            new TextStyle("Neucha", 26).fontWeight("bold")
          ).transformation(new Transformation().resize(Resize.fit().width(400)))
        )
      );
    const parts = "w_500/w_400,c_fit,l_text:Neucha_26_bold:Lorem"
      .replace(/\//g, ",")
      .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_text:Arial_150:Flowers,co_yellow,bo_6px_solid_red,fl_text_no_trim", () => {
    const tAsset = new CloudinaryImage("sample").overlay(
      Overlay.source(
        Source.text("Flowers", new TextStyle("Arial", 150))
          .textColor("yellow")
          .transformation(
            new Transformation()
              .border(Border.solid(6, "red"))
              .addFlag("text_no_trim")
          )
      )
    );
    const parts =
      "l_text:Arial_150:Flowers,co_yellow,bo_6px_solid_red,fl_text_no_trim"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });

  it("l_video:docs:bluescreen_watches,e_make_transparent:20,co_rgb:0e80d8,w_0.6,fl_relative,g_north/du_15", () => {
    const tAsset = new CloudinaryVideo("sample")
      .overlay(
        Overlay.source(
          Source.video("docs/bluescreen_watches").transformation(
            new Transformation()
              .resize(Resize.scale().width(0.6).relative())
              .effect(
                Effect.makeTransparent().tolerance(20).colorToReplace("#0e80d8")
              )
          )
        ).position(new Position().gravity(Gravity.compass("north")))
      )
      .videoEdit(VideoEdit.trim().duration("15.0"))
      .setAssetType("image");
    const parts =
      "l_video:docs:bluescreen_watches,e_make_transparent:20,co_rgb:0e80d8,w_0.6,fl_relative,g_north/du_15"
        .replace(/\//g, ",")
        .split(",");

    parts.forEach((part) => {
      expect(tAsset.toString()).toContain(part);
    });
  });
});
