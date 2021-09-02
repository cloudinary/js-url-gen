import {Transformation} from "./transformation/Transformation";
import {ImageTransformation} from "./transformation/ImageTransformation";
import {VideoTransformation} from "./transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryFile} from "./assets/CloudinaryFile";
import {CloudinaryMedia} from "./assets/CloudinaryMedia";
import {Cloudinary} from "./instance/Cloudinary";
import {createCloudinaryLegacyURL} from "./backwards/createCloudinaryLegacyURL";

import {RoundCorners} from "./actions/roundCorners";
import {Resize} from "./actions/resize";
import {Border} from "./actions/border";
import {Effect} from "./actions/effect";
import {Rotate} from "./actions/rotate";
import {Adjust} from "./actions/adjust";
import {VideoEdit} from "./actions/videoEdit";
import {Overlay} from "./actions/overlay";
import {Underlay} from "./actions/underlay";
import {NamedTransformation} from './actions/namedTransformation';
import {Delivery} from "./actions/delivery";
import {CustomFunction} from './actions/customFunction';
import {Transcode} from "./actions/transcode";
import {PSDTools} from "./actions/psdTools";
import {Animated} from "./actions/animated";
import {TextDecoration} from "./qualifiers/textDecoration";
import {TextAlignment} from "./qualifiers/textAlignment";
import {Stroke} from "./qualifiers/textStroke";
import {StreamingProfile} from "./qualifiers/streamingProfile";
import {SimulateColorBlind} from "./qualifiers/simulateColorBlind";
import {RotationMode} from "./qualifiers/rotationMode";
import {Region} from "./qualifiers/region";
import {Quality} from "./qualifiers/quality";
import {Position} from "./qualifiers/position";
import {OutlineMode} from "./qualifiers/outlineMode";
import {ImproveMode} from "./qualifiers/improveMode";
import {GradientDirection} from "./qualifiers/gradientDirection";
import {Format} from "./qualifiers/format";
import {FontWeight} from "./qualifiers/fontWeight";
import {FontStyle} from "./qualifiers/fontStyle";
import {FontHinting} from "./qualifiers/fontHinting";
import {Expression} from "./qualifiers/expression";
import {Dither} from "./qualifiers/dither";
import {ColorSpace} from "./qualifiers/colorSpace";
import {Color} from "./qualifiers/color";
import {Background} from "./qualifiers/background";
import {AudioFrequency} from "./qualifiers/audioFrequency";
import {AudioCodec} from "./qualifiers/audioCodec";
import {AspectRatio} from "./qualifiers/aspectRatio";
import {ArtisticFilter} from "./qualifiers/artisticFilter";
import {AnimatedFormat} from "./qualifiers/animatedFormat";
import {Gravity} from "./qualifiers/gravity";
import {ChromaSubSampling} from "./qualifiers/chromaSubSampling";
import {Dpr} from "./qualifiers/dpr";
import {Source} from "./qualifiers/source";
import {GradientFade} from "./qualifiers/GradientFade";

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
