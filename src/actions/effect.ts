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
import {FadeoutEffectAction} from "./effect/leveled/fadeOut";
import {ColorizeEffectAction} from "./effect/colorize";
import {ShadowEffectAction} from "./effect/shadow";
import {StyleTransfer} from "./effect/styleTransfer";
import {DitherEffectAction} from "./effect/dither";
import {DeshakeEffectAction} from "./effect/leveled/deshake";
import {Pixelate} from "./effect/pixelate/pixelate";
import {ImageSource} from "../qualifiers/source/sourceTypes/ImageSource";
import {EffectActionWithStrength} from "./effect/EffectActions/EffectActionWithStrength";
import {BlackwhiteEffectAction} from "./effect/leveled/blackwhite";
import {FadeInEffectAction} from "./effect/leveled/fadeIn";
import {RemoveBackgroundAction} from "./effect/removeBackgroundAction";
import {ThemeEffect} from "./effect/theme";
import {SystemColors} from "../qualifiers/color";
import {ArtisticFilterType} from "../types/types";


/**
 * @summary action
 * @description Applies a blurring filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} blurLevel The strength of the blur. (Range: 1 to 2000, Server default: 100)
 * @return {Actions.Effect.BlurAction}
 */
function blur(blurLevel?: number): BlurAction {
  return new BlurAction(blurLevel);
}

/**
 * @summary action
 * @description Converts the image to gray-scale (multiple shades of gray).
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function grayscale():SimpleEffectAction {
  return new SimpleEffectAction('grayscale');
}



/**
 * @summary action
 * @description Changes the color scheme of the image to sepia.
 * @memberOf Actions.Effect
 * @param {number} level The level of sepia to apply. (Range: 1 to 100, Server default: 80)
 * @return {Actions.Effect.EffectActionWithLevel}
 */
function sepia(level?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('sepia', level);
}



/**
 * @summary action
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @param shadowLevel
 * @return {Actions.Effect.ShadowEffectAction}
 */
function shadow(shadowLevel?: number):ShadowEffectAction {
  return new ShadowEffectAction('shadow', shadowLevel);
}


/**
 * @summary action
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} colorizeLevel The strength of the color. (Range: 0 to 100, Server default: 100)
 * @return {Actions.Effect.ColorizeEffectAction}
 */
function colorize(colorizeLevel?: number):ColorizeEffectAction {
  return new ColorizeEffectAction('colorize', colorizeLevel);
}


/**
 * @summary action
 * @description Applies an oilPaint filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} oilPaintLevel The strength of the effect. (Range: 0 to 100, Server default: 30)
 * @return {Actions.Effect.EffectActionWithStrength}
 */
function oilPaint(oilPaintLevel?: number):EffectActionWithStrength {
  return new EffectActionWithStrength('oil_paint', oilPaintLevel);
}

/**
 * @summary action
 * @description Applies an artistic filter to the asset.
 * @memberOf Actions.Effect
 * @param {ArtisticFilterType | string} artisticFilterType
 * @return {Actions.Effect.SimpleEffectAction}
 */
function artisticFilter(artisticFilterType: ArtisticFilterType | string):SimpleEffectAction {
  return new SimpleEffectAction('art', artisticFilterType);
}


/**
 * @summary action
 * @description Applies a cartoonify effect to the asset.
 * @memberOf Actions.Effect
 * @param cartoonifyLevel The thickness of the lines. (Range: 0 to 100, Server default: 50)
 * @return {Actions.Effect.CartoonifyEffect}
 */
function cartoonify(cartoonifyLevel?: number):CartoonifyEffect {
  return new CartoonifyEffect('cartoonify', cartoonifyLevel);
}


/**
 * @summary action
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.EffectOutline}
 */
function outline(): EffectOutline {
  return new EffectOutline();
}


/**
 * @summary action
 * @description Applies a complex deep learning neural network algorithm that extracts artistic styles from a source image and applies them to the content of a target photograph.<br/>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/neural_artwork_style_transfer_addon | Neural Artwork Style Transfer}
 * @memberOf Actions.Effect
 * @param {ImageSource} imageSource `import {image} from '@cloudinary/url-gen/qualifiers/sources`
 * @return {Actions.Effect.StyleTransfer}
 */
function styleTransfer(imageSource: ImageSource): StyleTransfer {
  return new StyleTransfer(imageSource);
}



/**
 * @summary action
 * @description
 * Causes a video clip to play forwards and then backwards.
 * Use in conjunction with trimming parameters ('duration', 'start_offset', or 'end_offset') and the 'loop' effect to deliver a classic (short, repeating) boomerang clip.<br/>
 * For details and examples, see 'Create a boomerang video clip' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function boomerang():SimpleEffectAction {
  return new SimpleEffectAction('boomerang');
}


/**
 * @summary action
 * @description
 * Removes red eyes with the Advanced Facial Attribute Detection add-on.
 * For details, see the Advanced Facial Attribute Detection add-on documentation.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function advancedRedEye():SimpleEffectAction {
  return new SimpleEffectAction('adv_redeye');
}


/**
 * @summary action
 * @description Converts the image to black and white.
 * @memberOf Actions.Effect
 * @param {number | string} level The balance between black (100) and white (0). (Range: 0 to 100, Server default: 50)
 * @return {Actions.Effect.BlackwhiteEffectAction}
 */
function blackwhite(level?: number | 'bw'):BlackwhiteEffectAction {
  return new BlackwhiteEffectAction('blackwhite', level);
}


/**
 * @summary action
 * @description Negates the image colors (negative).
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function negate():SimpleEffectAction {
  return new SimpleEffectAction('negate');
}


/**
 * @summary action
 * @description Removes red eyes in the image.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function redEye():SimpleEffectAction {
  return new SimpleEffectAction('redeye');
}


/**
 * @summary action
 * @description Plays the video or audio file in reverse.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function reverse():SimpleEffectAction {
  return new SimpleEffectAction('reverse');
}


/**
 * @summary action
 * @description Changes the speed of the video playback.
 * @memberOf Actions.Effect
 * @param {number} speedIncreasePercent The percentage change of speed. Positive numbers speed up the playback, negative numbers slow down the playback (Range: -50 to 100, Server default: 0)
 * @return {Actions.Effect.AccelerationEffectAction}
 */
function accelerate(speedIncreasePercent?: number): AccelerationEffectAction {
  return new AccelerationEffectAction('accelerate', speedIncreasePercent);
}

/**
 * @summary action
 * @description
 * Fade in at the beginning of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 * @return {Actions.Effect.FadeInEffectAction}
 */
function fadeIn(fadeLength?: number):FadeInEffectAction {
  return new FadeInEffectAction('fade', fadeLength);
}


/**
 * @summary action
 * @description
 * Fade out at the end of the video.
 * For details and examples, see 'Fade in and out' in the Video Transformations guide.
 * @memberOf Actions.Effect
 * @param {number} fadeLength The time in ms for the fade to occur. (Server default: 2000)
 * @return {Actions.Effect.FadeoutEffectAction}
 */
function fadeOut(fadeLength?: number):FadeoutEffectAction {
  return new FadeoutEffectAction('fade', -fadeLength);
}


/**
 * @summary action
 * @description
 * Delivers a video or animated GIF that contains additional loops of the video/GIF.
 * The total number of iterations is the number of additional loops plus one. <br/>
 * For animated GIFs only, you can also specify the loop effect without a numeric value to instruct it to loop the GIF infinitely.
 * @memberOf Actions.Effect
 * @param {number} additionalLoops The additional number of times to play the video or animated GIF.
 * @return {Actions.Effect.LoopEffectAction}
 */
function loop(additionalLoops?: number):LoopEffectAction {
  return new LoopEffectAction('loop', additionalLoops);
}

/**
 * @summary action
 * @description
 * Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * The background is determined as all pixels that resemble the pixels on the edges of the image.
 *
 * @memberOf Actions.Effect
 * @param {number} tolerance The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
 * @return {Actions.Effect.MakeTransparentEffectAction}
 */
function makeTransparent(tolerance?: number):MakeTransparentEffectAction {
  return new MakeTransparentEffectAction('make_transparent', tolerance);
}





/**
 * @summary action
 * @description Adds visual noise to the video, visible as a random flicker of "dots" or "snow".
 * @memberOf Actions.Effect
 * @param {number} percentage The percent of noise to apply. (Range: 0 to 100 Server default: 0)
 * @return {Actions.Effect.EffectActionWithLevel}
 */
function noise(percentage?: number):EffectActionWithLevel {
  return new EffectActionWithLevel('noise', percentage);
}


/**
 * @summary action
 * @description Applies a vignette effect.
 * @memberOf Actions.Effect
 * @param {number} strength The strength of the vignette. (Range: 0 to 100, Server default: 20)
 * @return {Actions.Effect.EffectActionWithStrength}
 */
function vignette(strength?: number):EffectActionWithStrength {
  return new EffectActionWithStrength('vignette', strength);
}


/**
 * @summary action
 * @description
 * Applies an ordered dither filter to the image.
 * Use the constants defined in {@link Qualifiers.Dither|@cloudinary/url-gen/qualifiers/dither} for ditherType.
 * @memberOf Actions.Effect
 * @param {Qualifiers.Dither} ditherType - The dither type applied to the image
 * @return {Actions.Effect.DitherEffectAction}
 */
function dither(ditherType?: number):DitherEffectAction {
  return new DitherEffectAction('ordered_dither', ditherType);
}

/**
 * @summary action
 * @description
 * Vectorizes the image.
 * Notes:
 * To deliver the image as a vector image, make sure to change the format (or URL extension) to a vector format, such as SVG.</br>
 * However, you can also deliver in a raster format if you just want to get the 'vectorized' graphic effect.</br>
 * Large images are scaled down to 1000 pixels in the largest dimension before vectorization.
 *
 * @memberOf Actions.Effect
 * @return {Actions.Effect.VectorizeEffectAction}
 */
function vectorize():VectorizeEffectAction {
  return new VectorizeEffectAction();
}




/**
 * @summary action
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
 * @return {Actions.Effect.GradientFadeEffectAction}
 */
function gradientFade():GradientFadeEffectAction {
  return new GradientFadeEffectAction();
}


/**
 * @summary action
 * @description
 * Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.</br>
 * You can replace colors using the xRay() method of the \Cloudinary\Transformation\AssistColorBlind class.
 * @memberOf Actions.Effect
 * @return {Actions.Effect.AssistColorBlindEffectAction}
 */
function assistColorBlind():AssistColorBlindEffectAction {
  return new AssistColorBlindEffectAction();
}

/**
 * @summary action
 * @description
 * Simulates the way an image would appear to someone with the specified color blind condition. </br>
 * For a list of supported color blind conditions see {@link Qualifiers.SimulateColorBlindValues| types of color blindness} for possible values
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimulateColorBlindEffectAction}
 */
function simulateColorBlind(): SimulateColorBlindEffectAction {
  return new SimulateColorBlindEffectAction();
}



/**
 * @summary action
 * @description Removes small motion shifts from the video. with a maximum extent of movement in the horizontal and vertical direction of 32 pixels
 * @memberOf Actions.Effect
 * @return {Actions.Effect.DeshakeEffectAction}
 */
function deshake(pixels?: number | string):DeshakeEffectAction {
  return new DeshakeEffectAction('deshake', pixels);
}


/**
 * @summary action
 * @description Supports the concatenation of videos with a custom transition by including a transition video as an
 * additional layer and specifying the transition effect
 * @memberOf Actions.Effect
 * @return {Actions.Effect.SimpleEffectAction}
 */
function transition():SimpleEffectAction {
  return new SimpleEffectAction('transition');
}

/**
 * @summary action
 * @description Applies a pixelatering filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} squareSize The squareSize in the pixelation. (Range: 1 to 2000, Server default: 100)
 * @return {Actions.Effect.Pixelate}
 */
function pixelate(squareSize?: number): Pixelate {
  return new Pixelate(squareSize);
}


/**
 * @summary action
 * @description Makes the background of an image transparent (or solid white for JPGs).</br>
 *              Use when the background is a uniform color.
 *              {@link https://cloudinary.com/documentation/transformation_reference#e_bgremoval | Background Removal}
 *
 * @memberOf Actions.Effect
 * @return {Actions.Effect.RemoveBackgroundAction}
 */
function removeBackground(): RemoveBackgroundAction {
  return new RemoveBackgroundAction();
}

/**
 *
 * @description Changes the main background color to the one specified, as if a 'theme change' was applied (e.g. dark mode vs light mode).
 * @param {SystemColors} color
 * @return {Actions.Effect.ThemeEffect}
 */
function theme(color: SystemColors): ThemeEffect {
  return new ThemeEffect(color);
}


/**
 * @description Defines effects that you can apply to transform your assets.
 * @memberOf Actions
 * @namespace Effect
 * @example
 * <caption>An <b>extreme</b> example of using many effects on the same asset</caption>
 * import {Cloudinary} from "@cloudinary/url-gen";
 * // Import everything, or just the action you need for tree-shaking purposes
 * import {Effect, sepia} from "@cloudinary/url-gen/actions/effect";
 * import {ArtisticFilter, alDente} from "../../../src/qualifiers/artisticFilter";
 * import {ShakeStrength, pixels16} from "../../../src/qualifiers/shakeStrength";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * image.effect(Effect.advancedRedEye())
 * .effect(Effect.accelerate())
 * .effect(Effect.accelerate(100))
 * .effect(Effect.accelerate().rate(5))
 * .effect(Effect.boomerang())
 * .effect(Effect.blackwhite())
 * .effect(Effect.blackwhite(10))
 * .effect(Effect.blackwhite().threshold(20))
 * .effect(Effect.fadeIn(100))
 * .effect(Effect.fadeIn().duration(5))
 * .effect(Effect.fadeOut(100))
 * .effect(Effect.fadeOut().duration(5))
 * .effect(Effect.grayscale())
 * .effect(Effect.loop())
 * .effect(Effect.loop(100))
 * .effect(Effect.loop().additionalIterations(5))
 * .effect(Effect.makeTransparent())
 * .effect(Effect.makeTransparent(100))
 * .effect(Effect.makeTransparent().tolerance(5))
 * .effect(Effect.makeTransparent().tolerance(5).colorToReplace('red'))
 * .effect(Effect.noise())
 * .effect(Effect.noise(100))
 * .effect(Effect.noise().level(5))
 * .effect(Effect.negate())
 * .effect(Effect.reverse())
 * .effect(Effect.redEye())
 * .effect(Effect.sepia())
 * .effect(Effect.sepia(100))
 * .effect(Effect.sepia().level(5))
 * .effect(Effect.vignette())
 * .effect(Effect.vignette(100))
 * .effect(Effect.vignette().strength(5))
 * .effect(Effect.deshake())
 * .effect(Effect.deshake(10))
 * .effect(Effect.artisticFilter(alDente())
 * .effect(Effect.deshake().shakeStrength(pixels16()))
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
  dither: dither,
  removeBackground,
  theme
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
  | RemoveBackgroundAction


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
  dither,
  removeBackground,
  theme
};
