import {BlurAction} from "./effect/blur/blur";
import {AccelerationEffectAction} from "./effect/leveled/accelerate";
import {LoopEffectAction} from "./effect/leveled/loop";
import {CartoonifyEffect} from "./effect/cartoonify";
import {EffectOutline} from "./effect/outline";
import {SimpleEffectAction} from "./effect/EffectActions/SimpleEffectAction";
import {MakeTransparentEffectAction} from "./effect/leveled/makeTransparent";
import {VectorizeEffectAction} from "./effect/vectorize";
import {SimulateColorBlindEffectAction} from "./effect/simulateColorBlind";
import {EffectActionWithLevel}from "./effect/EffectActions/EffectActionWithLevel";
import {AssistColorBlindEffectAction} from "./effect/assistColorBlind";
import {GradientFadeEffectAction} from "./effect/gradientFade";
import {EffectActionWithLength} from "./effect/EffectActions/EffectActionWithLength";
import {FadeoutEffectAction} from "./effect/leveled/fadeOut";
import {ColorizeEffectAction} from "./effect/colorize";
import {ShadowEffectAction} from "./effect/shadow";
import {StyleTransfer} from "./effect/styleTransfer";
import {DitherEffectAction} from "./effect/dither";
import {DeshakeEffectAction} from "./effect/leveled/deshake";
import {Pixelate} from "./effect/pixelate/pixelate";
import {ImageSource} from "../values/source/sourceTypes/ImageSource";
import {EffectActionWithStrength} from "./effect/EffectActions/EffectActionWithStrength";
import {BlackwhiteEffectAction} from "./effect/leveled/blackwhite";


/**
 * @description Applies a blurring filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 100)
 * @return {BlurAction}
 */
function blur(blurLevel?: number): BlurAction {
  return new BlurAction(blurLevel);
}

/**
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function grayscale():SimpleEffectAction {
  return new SimpleEffectAction('grayscale');
}



/**
 * @description Changes the color scheme of the image to sepia.
 * @memberOf Actions.Effect
 * @param {number} level The level of sepia to apply. (Range: 1 to 100, Server default: 80)
 * @return {EffectActionWithLevel}
 */
function sepia(level?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('sepia', level);
}



/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 * @return {ShadowEffectAction}
 */
function shadow(shadowLevel?: number):ShadowEffectAction {
  return new ShadowEffectAction('shadow', shadowLevel);
}


/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} colorizeLevel The strength of the color. (Range: 0 to 100, Server default: 100)
 * @return {ColorizeEffectAction}
 */
function colorize(colorizeLevel?: number):ColorizeEffectAction {
  return new ColorizeEffectAction('colorize', colorizeLevel);
}


/**
 * @description Applies an oilPaint filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} oilPaintLevel The strength of the effect. (Range: 0 to 100, Server default: 30)
 * @return {EffectActionWithStrength}
 */
function oilPaint(oilPaintLevel?: number):EffectActionWithStrength {
  return new EffectActionWithStrength('oil_paint', oilPaintLevel);
}

/**
 * @description Applies an artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param artisticFilterType
 * @return {SimpleEffectAction}
 */
function artisticFilter(artisticFilterType: string):SimpleEffectAction {
  return new SimpleEffectAction('art', artisticFilterType);
}


/**
 * @description Applies a cartoonify effect to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel The thickness of the lines. (Range: 0 to 100, Server default: 50)
 * @return {CartoonifyEffect}
 */
function cartoonify(cartoonifyLevel?: number):CartoonifyEffect {
  return new CartoonifyEffect('cartoonify', cartoonifyLevel);
}


/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @memberOf Actions.Effect
 * @return {OutlineMode}
 */
function outline(): EffectOutline {
  return new EffectOutline();
}


/**
 * @description Applies a complex deep learning neural network algorithm that extracts artistic styles from a source image and applies them to the content of a target photograph.<br/>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/neural_artwork_style_transfer_addon | Neural Artwork Style Transfer}
 * @memberOf Actions.Effect
 * @param {ImageSource} imageSource `import {image} from '@cloudinary/base/qualifiers/sources`
 */
function styleTransfer(imageSource: ImageSource): StyleTransfer {
  return new StyleTransfer(imageSource);
}



/**
 * @description
 * Causes a video clip to play forwards and then backwards.
 * Use in conjunction with trimming parameters ('duration', 'start_offset', or 'end_offset') and the 'loop' effect to deliver a classic (short, repeating) boomerang clip.<br/>
 * For details and examples, see 'Create a boomerang video clip' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function boomerang():SimpleEffectAction {
  return new SimpleEffectAction('boomerang');
}


/**
 * @description
 * Removes red eyes with the Advanced Facial Attribute Detection add-on.
 * For details, see the Advanced Facial Attribute Detection add-on documentation.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function advancedRedEye():SimpleEffectAction {
  return new SimpleEffectAction('adv_redeye');
}


/**
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 * @param {number | string} level The balance between black (100) and white (0). (Range: 0 to 100, Server default: 50)
 * @return BlackwhiteEffectAction
 */
function blackwhite(level?: number | 'bw'):BlackwhiteEffectAction {
  return new BlackwhiteEffectAction('blackwhite', level);
}


/**
 * @description Negates the image colors (negative).
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function negate():SimpleEffectAction {
  return new SimpleEffectAction('negate');
}


/**
 * @description Removes red eyes in the image.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function redEye():SimpleEffectAction {
  return new SimpleEffectAction('redeye');
}


/**
 * @description Plays the video or audio file in reverse.
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function reverse():SimpleEffectAction {
  return new SimpleEffectAction('reverse');
}


/**
 * @description Changes the speed of the video playback.
 * @memberOf Actions.Effect
 * @param {number} speedIncreasePercent The percentage change of speed. Positive numbers speed up the playback, negative numbers slow down the playback (Range: -50 to 100, Server default: 0)
 * @return {AccelerationEffectAction}
 */
function accelerate(speedIncreasePercent?: number): AccelerationEffectAction {
  return new AccelerationEffectAction('accelerate', speedIncreasePercent);
}

/**
 * @description
 * Fade in at the beginning of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 * @return {EffectActionWithLength}
 */
function fadeIn(fadeLength?: number):EffectActionWithLength {
  return new EffectActionWithLength('fade', fadeLength);
}


/**
 * @description
 * Fade out at the end of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 * @return {FadeoutEffectAction}
 */
function fadeOut(fadeLength?: number):FadeoutEffectAction {
  return new FadeoutEffectAction('fade', -fadeLength);
}


/**
 * @description
 * Delivers a video or animated GIF that contains additional loops of the video/GIF.
 * The total number of iterations is the number of additional loops plus one. <br/>
 * For animated GIFs only, you can also specify the loop effect without a numeric value to instruct it to loop the GIF infinitely.
 * @memberOf Actions.Effect
 * @param {number} additionalLoops The additional number of times to play the video or animated GIF.
 * @return {LoopEffectAction}
 */
function loop(additionalLoops?: number):LoopEffectAction {
  return new LoopEffectAction('loop', additionalLoops);
}

/**
 * @description
 * Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * The background is determined as all pixels that resemble the pixels on the edges of the image.
 *
 * @memberOf Actions.Effect
 * @param {number} tolerance The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
 * @return {MakeTransparentEffectAction}
 */
function makeTransparent(tolerance?: number):MakeTransparentEffectAction {
  return new MakeTransparentEffectAction('make_transparent', tolerance);
}





/**
 * @description Adds visual noise to the video, visible as a random flicker of "dots" or "snow".
 * @memberOf Actions.Effect
 * @param {number} percentage The percent of noise to apply. (Range: 0 to 100 Server default: 0)
 * @return {EffectActionWithLevel}
 */
function noise(percentage?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('noise', percentage);
}


/**
 * @description Applies a vignette effect.
 * @memberOf Actions.Effect
 * @param {number} strength The strength of the vignette. (Range: 0 to 100, Server default: 20)
 * @return {EffectActionWithStrength}
 */
function vignette(strength?: number):EffectActionWithStrength {
  return new EffectActionWithStrength('vignette', strength);
}


/**
 * @description
 * Applies an ordered dither filter to the image.
 * Use the constants defined in {@link Values.Dither|@cloudinary/base/values/dither} for ditherType.
 * @memberOf Actions.Effect
 * @param {Values.Dither} ditherType - The dither type applied to the image
 * @return {DitherEffectAction}
 */
function dither(ditherType?: number):DitherEffectAction {
  return new DitherEffectAction('ordered_dither', ditherType);
}

/**
 * @description
 * Vectorizes the image.
 * Notes:
 * To deliver the image as a vector image, make sure to change the format (or URL extension) to a vector format, such as SVG.</br>
 * However, you can also deliver in a raster format if you just want to get the 'vectorized' graphic effect.</br>
 * Large images are scaled down to 1000 pixels in the largest dimension before vectorization.
 *
 * @memberOf Actions.Effect
 * @return {VectorizeEffectAction}
 */
function vectorize():VectorizeEffectAction {
  return new VectorizeEffectAction();
}




/**
 * @description
 * Applies a gradient fade effect from one edge of the image.
 * Use .x() or .y() to indicate from which edge to fade and how much of the image should be faded.
 * Values of x and y can be specified as a percentage (Range: 0.0 to 1.0), or in pixels (integer values). <br/>
 * Positive values fade from the top (y) or left (x). Negative values fade from the bottom (y) or right (x). <br/>
 * By default, the gradient is applied to the top 50% of the image (y = 0.5).<br/>
 * Only one direction can be specified but the fade can be applied symmetrically using the mode parameter. </br>
 * To apply different amounts of fade to multiple edges, use chained fade effects.
 *
 * @memberOf Actions.Effect
 * @return {GradientFadeEffectAction}
 */
function gradientFade():GradientFadeEffectAction {
  return new GradientFadeEffectAction();
}


/**
 * @description
 * Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.</br>
 * You can replace colors using the xRay() method of the \Cloudinary\Transformation\AssistColorBlind class.
 * @memberOf Actions.Effect
 * @return {AssistColorBlindEffectAction}
 */
function assistColorBlind():AssistColorBlindEffectAction {
  return new AssistColorBlindEffectAction();
}

/**
 * @description
 * Simulates the way an image would appear to someone with the specified color blind condition. </br>
 * For a list of supported color blind conditions see {@link Values.SimulateColorBlindValues| types of color blindness} for possible values
 * @memberOf Actions.Effect
 * @return {SimulateColorBlindEffectAction}
 */
function simulateColorBlind(): SimulateColorBlindEffectAction {
  return new SimulateColorBlindEffectAction();
}



/**
 * @description Removes small motion shifts from the video. with a maximum extent of movement in the horizontal and vertical direction of 32 pixels
 * @memberOf Actions.Effect
 * @return {DeshakeEffectAction}
 */
function deshake(pixels?: number | string):DeshakeEffectAction {
  return new DeshakeEffectAction('deshake', pixels);
}


/**
 * @description Supports the concatenation of videos with a custom transition by including a transition video as an
 * additional layer and specifying the transition effect
 * @memberOf Actions.Effect
 * @return {SimpleEffectAction}
 */
function transition():SimpleEffectAction {
  return new SimpleEffectAction('transition');
}

/**
 * @description Applies a pixelatering filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} squareSize The squareSize in the pixelation. (Range: 1 to 2000, Server default: 100)
 * @return {Pixelate}
 */
function pixelate(squareSize?: number): Pixelate {
  return new Pixelate(squareSize);
}


/**
 * @description Defines effects that you can apply to transform your assets.
 * @memberOf Actions
 * @namespace Effect
 */

const Effect = {
  pixelate: pixelate,
  deshake: deshake,
  boomerang: boomerang,
  advancedRedEye: advancedRedEye,
  blackwhite,
  negate: negate,
  redEye: redEye,
  reverse: reverse,
  accelerate: accelerate,
  fadeIn: fadeIn,
  fadeOut: fadeOut,
  loop: loop,
  makeTransparent: makeTransparent,
  noise: noise,
  vignette: vignette,
  blur: blur,
  grayscale: grayscale,
  sepia: sepia,
  shadow: shadow,
  colorize: colorize,
  oilPaint: oilPaint,
  artisticFilter: artisticFilter,
  cartoonify: cartoonify,
  outline: outline,
  styleTransfer: styleTransfer,
  gradientFade: gradientFade,
  vectorize: vectorize,
  assistColorBlind: assistColorBlind,
  simulateColorBlind: simulateColorBlind,
  transition: transition,
  dither: dither
};



export declare type EffectActions =
  SimpleEffectAction
  | EffectOutline
  | ShadowEffectAction
  | AssistColorBlindEffectAction
  | SimulateColorBlindEffectAction
  | CartoonifyEffect
  | StyleTransfer
  | VectorizeEffectAction
  | GradientFadeEffectAction
  | BlurAction
  | Pixelate


export {
  Effect,
  pixelate,
  deshake,
  boomerang,
  advancedRedEye,
  blackwhite,
  negate,
  redEye,
  reverse,
  accelerate,
  fadeIn,
  fadeOut,
  loop,
  makeTransparent,
  noise,
  vignette,
  blur,
  grayscale,
  sepia,
  shadow,
  colorize,
  oilPaint,
  artisticFilter,
  cartoonify,
  outline,
  styleTransfer,
  gradientFade,
  vectorize,
  assistColorBlind,
  simulateColorBlind,
  transition,
  dither
};
