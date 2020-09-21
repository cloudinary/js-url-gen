import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import FillLightAction from "./FillLightAction";
import RecolorAction from "./RecolorAction";
import ImproveAction from "./ImproveAction";
import ReplaceColorAction from "./ReplaceColorAction";
import brightness from "./leveled/brightness";
import viesusCorrect from "./simple/viesusCorrect";
import red from "./leveled/red";
import sharpen from "./leveled/sharpen";
import saturation from "./leveled/saturation";
import contrast from "./leveled/contrast";
import gamma from "./leveled/gamma";
import blue from "./leveled/blue";
import brightnessHSB from "./leveled/brightnessHSB";
import opacityThreshold from "./leveled/opacityThreshold";
import autoColor from "./leveled/autoColor";
import autoBrightness from "./leveled/autoBrightness";
import hue from "./leveled/hue";
import green from "./leveled/green";
import unsharpMask from "./leveled/unsharpenMask";
import vibrance from "./leveled/vibrance";
import autoContrast from "./leveled/autoContrast";
import By3dLutAction from "./By3dLut";


/**
 * Adjusts the visual appearance of an image or video.
 * @memberOf Actions
 * @namespace Adjust
 */




/**
 * @memberOf Actions.Adjust
 * @description Adjusts the opacity of the image and makes it semi-transparent.
 * @param {number} level
 * @return {Action}
 */
function opacity(level:number): Action {
  // opacity doesn't deserve its own action, it is not reused anywhere
  return new Action().addQualifier(new Qualifier('o').addValue(level));
}





/**
 * @memberOf Actions.Adjust
 * @description Defines how to improve an image by automatically adjusting image colors, contrast and brightness.</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_improvement_effects | Image improvement effects}
 * @return {ImproveAction}
 */
function improve(): ImproveAction {
  return new ImproveAction();
}






/**
 * @memberOf Actions.Adjust
 * @description
 * Maps an input color and those similar to the input color to corresponding shades of a specified output color, taking luminosity and chroma into account, in order to recolor an object in a natural way.</br>
 * More highly saturated input colors usually give the best results. It is recommended to avoid input colors approaching white, black, or gray.
 * @param {string} toColor
 * @return {ReplaceColorAction}
 */
function replaceColor(toColor:string): ReplaceColorAction {
  return new ReplaceColorAction(toColor);
}

/**
 * @memberOf Actions.Adjust
 * @description Converts the colors of every pixel in an image based on the supplied color matrix, in which the value of each color channel is calculated based on the values from all other channels (e.g. a 3x3 matrix for RGB, a 4x4 matrix for RGBA or CMYK, etc).</br>
 * For every pixel in the image, take each color channel and adjust its value by the specified values of the matrix to get a new value.
 * @param {number[][]} matrix
 * @return {RecolorAction}
 */
function recolor(matrix:number[][]): RecolorAction {
  return new RecolorAction(matrix);
}

/**
 * @memberOf Actions.Adjust
 * @description Adjusts the fill light and blends the result with the original image.
 * @return {FillLightAction}
 */
function fillLight(): FillLightAction {
  return new FillLightAction();
}

/**
 * @description
 * Applies a look-up table (LUT) file to the image.</br>
 * The 3dl file should be pre-uploaded as a raw file
 *
 * @param {string} publicId The public ID of the LUT file.
 */
function by3dLut(publicId: string): By3dLutAction {
  return new By3dLutAction(publicId);
}



export default {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight, by3dLut};

export {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight, by3dLut};
