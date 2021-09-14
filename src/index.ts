import {Transformation} from "./transformation/Transformation.js";
import {ImageTransformation} from "./transformation/ImageTransformation.js";
import {VideoTransformation} from "./transformation/VideoTransformation.js";
import {CloudinaryImage} from "./assets/CloudinaryImage.js";
import {CloudinaryVideo} from "./assets/CloudinaryVideo.js";
import {CloudinaryFile} from "./assets/CloudinaryFile.js";
import {CloudinaryMedia} from "./assets/CloudinaryMedia.js";
import {Cloudinary} from "./instance/Cloudinary.js";
import {createCloudinaryLegacyURL} from "./backwards/createCloudinaryLegacyURL.js";

import {RoundCorners} from "./actions/roundCorners.js";
import {Resize} from "./actions/resize.js";
import {Border} from "./actions/border.js";
import {Effect} from "./actions/effect.js";
import {Rotate} from "./actions/rotate.js";
import {Adjust} from "./actions/adjust.js";
import {VideoEdit} from "./actions/videoEdit.js";
import {Overlay} from "./actions/overlay.js";
import {Underlay} from "./actions/underlay.js";
import {NamedTransformation} from './actions/namedTransformation.js';
import {Delivery} from "./actions/delivery.js";
import {CustomFunction} from './actions/customFunction.js';
import {Transcode} from "./actions/transcode.js";
import {PSDTools} from "./actions/psdTools.js";
import {Animated} from "./actions/animated.js";
import {TextDecoration} from "./qualifiers/textDecoration.js";
import {TextAlignment} from "./qualifiers/textAlignment.js";
import {Stroke} from "./qualifiers/textStroke.js";
import {StreamingProfile} from "./qualifiers/streamingProfile.js";
import {SimulateColorBlind} from "./qualifiers/simulateColorBlind.js";
import {RotationMode} from "./qualifiers/rotationMode.js";
import {Region} from "./qualifiers/region.js";
import {Quality} from "./qualifiers/quality.js";
import {Position} from "./qualifiers/position.js";
import {OutlineMode} from "./qualifiers/outlineMode.js";
import {ImproveMode} from "./qualifiers/improveMode.js";
import {GradientDirection} from "./qualifiers/gradientDirection.js";
import {Format} from "./qualifiers/format.js";
import {FontWeight} from "./qualifiers/fontWeight.js";
import {FontStyle} from "./qualifiers/fontStyle.js";
import {FontHinting} from "./qualifiers/fontHinting.js";
import {Expression} from "./qualifiers/expression.js";
import {Dither} from "./qualifiers/dither.js";
import {ColorSpace} from "./qualifiers/colorSpace.js";
import {Color} from "./qualifiers/color.js";
import {Background} from "./qualifiers/background.js";
import {AudioFrequency} from "./qualifiers/audioFrequency.js";
import {AudioCodec} from "./qualifiers/audioCodec.js";
import {AspectRatio} from "./qualifiers/aspectRatio.js";
import {ArtisticFilter} from "./qualifiers/artisticFilter.js";
import {AnimatedFormat} from "./qualifiers/animatedFormat.js";
import {Gravity} from "./qualifiers/gravity.js";
import {ChromaSubSampling} from "./qualifiers/chromaSubSampling.js";
import {Dpr} from "./qualifiers/dpr.js";
import {Source} from "./qualifiers/source.js";
import {GradientFade} from "./qualifiers/GradientFade.js";

const Actions = {
  Resize,
  Border,
  RoundCorners,
  Effect,
  Rotate,
  Adjust,
  Overlay,
  Underlay,
  NamedTransformation,
  Delivery,
  CustomFunction,
  VideoEdit,
  Transcode,
  PSDTools,
  Animated
};

const Qualifiers = {
  TextDecoration,
  TextAlignment,
  Stroke,
  StreamingProfile,
  SimulateColorBlind,
  RotationMode,
  Region,
  Quality,
  Position,
  OutlineMode,
  ImproveMode,
  GradientDirection,
  Format,
  FontWeight,
  FontStyle,
  FontHinting,
  Expression,
  Dither,
  ColorSpace,
  Color,
  Background,
  AudioFrequency,
  AudioCodec,
  AspectRatio,
  ArtisticFilter,
  AnimatedFormat,
  Gravity,
  ChromaSubSampling,
  Dpr,
  Sources: Source,
  GradientFade
};

/**
 * @namespace SDK
 */
const CloudinaryURLGEN = {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryMedia,
  CloudinaryFile,
  createCloudinaryLegacyURL: createCloudinaryLegacyURL
};

export {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryMedia,
  CloudinaryFile,
  createCloudinaryLegacyURL,
  CloudinaryURLGEN,
  CloudinaryURLGEN as default
};
