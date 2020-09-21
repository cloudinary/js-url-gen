/**
 * A namespace for all Params</br>
 * TODO This needs to be in a proper file, maybe ./Params.ts?
 * @namespace Params
 */

/**
 * A namespace for all Sources</br>
 * TODO This needs a proper file, maybe in a future ./Sources.ts?
 * @namespace Sources
 */

/**
 * A namespace for all Types</br>
 * This namespace contains all non primitive types used in the SDK.
 * Types are not concrete implementations, but rather instructions for acceptable input
 * TODO This needs a proper file
 * @namespace Types
 */

// Transformations
import Transformation from "./transformation/Transformation";
import cloudinaryURL from "./url/cloudinaryURL";
import TransformableImage from "./transformation/TransformableImage";

// Actions
import Actions from './actions/Actions';

import * as Color from './constants/colors/Colors';
import * as Outline from './constants/outline/Outline';
import * as Dpr from './constants/dpr/Dpr';
import * as ArtisticFilter from './constants/artisticFilters/ArtisticFilters';
import * as ObjectGravity from './constants/gravityObjects/GravityObjects';
import * as Format from './constants/formats/Formats';
import * as Quality from './constants/quality/Quality';
import * as AudioCodec from './constants/audioCodec/AudioCodec';
import * as AudioFrequency from './constants/audioFrequency/AudioFrequency';
import * as StreaminProfile from './constants/streamingProfile/StreamingProfile';
import * as AnimatedFormat from './constants/animatedFormat/AnimatedFormat';
import * as ColorSpace from './constants/colorSpace/ColorSpace';

/**
 * @description a class
 */
class Base {
  constructor() {
  }
}

export {cloudinaryURL, Transformation, TransformableImage, Base, Actions, Color, Dpr, ObjectGravity, ArtisticFilter, Format, Quality, AudioCodec, AudioFrequency, StreaminProfile, AnimatedFormat, ColorSpace};
export default {cloudinaryURL, Transformation, Base, Actions, Color, Dpr, ObjectGravity, ArtisticFilter, Format, Quality, AudioCodec, AudioFrequency, StreaminProfile, AnimatedFormat, ColorSpace};
