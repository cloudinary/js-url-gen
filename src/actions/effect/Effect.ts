import blur from "./blur/blur";
import grayscale from "./simple/grayscale";
import sepia from "./leveled/sepia";
import shadow from "./shadow";
import colorize from "./colorize";
import oilPaint from "./leveled/oilPaint";
import artisticFilter from "./simple/artisticFilter";
import cartoonify from "./cartoonify";
import outline from "./outline";
import styleTransfer from "./styleTransfer";
import boomerang from "./simple/boomerang";
import advancedRedEye from "./simple/advanedRedEye";
import blackWhite from "./leveled/blackWhite";
import negate from "./simple/negate";
import redEye from "./simple/redEye";
import reverse from "./simple/reverse";
import accelerate from "./leveled/accelerate";
import fadeIn from "./leveled/fadeIn";
import fadeOut from "./leveled/fadeOut";
import loop from "./leveled/loop";
import makeTransparent from "./leveled/makeTransparent";
import noise from "./leveled/noise";
import vignette from "./leveled/vignette";
import dither from "./dither";
import vectorize from "./vectorize";
import gradientFade from "./gradientFade";
import assistColorBlind from "./assistColorBlind";
import simulateColorBlind from "./simulateColorBlind";
import deshake from "./leveled/deshake";
import transition from "./simple/transition";
import {pixelate} from "./pixelate/pixelate";


/**
 * @description Defines effects that you can apply to transform your assets.
 * @memberOf Actions
 * @namespace Effect
 */
class Effect {
  static pixelate = pixelate;
  static deshake = deshake;
  static boomerang = boomerang;
  static advancedRedEye = advancedRedEye;
  static blackWhite = blackWhite;
  static negate = negate;
  static redEye = redEye;
  static reverse = reverse;
  static accelerate = accelerate;
  static fadeIn = fadeIn;
  static fadeOut = fadeOut;
  static loop = loop;
  static makeTransparent = makeTransparent;
  static noise = noise;
  static vignette = vignette;
  static blur = blur;
  static grayscale = grayscale;
  static sepia = sepia;
  static shadow = shadow;
  static colorize = colorize;
  static oilPaint = oilPaint;
  static artisticFilter = artisticFilter;
  static cartoonify = cartoonify;
  static outline = outline;
  static styleTransfer = styleTransfer;
  static gradientFade = gradientFade;
  static vectorize = vectorize;
  static assistColorBlind = assistColorBlind;
  static simulateColorBlind = simulateColorBlind;
  static transition = transition;
  static dither = dither;
}




export {
  Effect,
  pixelate,
  deshake,
  boomerang,
  advancedRedEye,
  blackWhite,
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
