import FillLightAction from "./adjust/FillLightAction";
import RecolorAction from "./adjust/RecolorAction";
import ImproveAction from "./adjust/ImproveAction";
import ReplaceColorAction from "./adjust/ReplaceColorAction";
import brightness from "./adjust/withLevel/brightness";
import viesusCorrect from "./adjust/simple/viesusCorrect";
import red from "./adjust/withLevel/red";
import sharpen from "./adjust/withStrength/sharpen";
import saturation from "./adjust/withLevel/saturation";
import contrast from "./adjust/withLevel/contrast";
import gamma from "./adjust/withLevel/gamma";
import blue from "./adjust/withLevel/blue";
import brightnessHSB from "./adjust/withLevel/brightnessHSB";
import opacityThreshold from "./adjust/withLevel/opacityThreshold";
import autoColor from "./adjust/withBlendPercentage/autoColor";
import autoBrightness from "./adjust/withBlendPercentage/autoBrightness";
import hue from "./adjust/withLevel/hue";
import green from "./adjust/withLevel/green";
import unsharpMask from "./adjust/withStrength/unsharpenMask";
import vibrance from "./adjust/withStrength/vibrance";
import autoContrast from "./adjust/withBlendPercentage/autoContrast";
import By3dLutAction from "./adjust/By3dLut";
import OpacityAdjustAction from "./adjust/Opacity";


/**
 * Adjusts the visual appearance of an image or video.
 * @memberOf Actions
 * @namespace Adjust
 */




/**
 * @description Adjusts the opacity of the image and makes it semi-transparent.
 * @memberOf Actions.Adjust
 * @param {number} level
 * @return OpacityAdjustAction
 */
function opacity(level:number): OpacityAdjustAction {
  return new OpacityAdjustAction(level);
}





/**
 * @memberOf Actions.Adjust
 * @description Adjusts the image colors, contrast and brightness.
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
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#replace_color_effect | Replace colors example}
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
 * @return {By3dLutAction}
 */
function by3dLut(publicId: string): By3dLutAction {
  return new By3dLutAction(publicId);
}



const Adjust = {brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight, by3dLut};


export {Adjust, brightness, viesusCorrect, opacity, red, sharpen, improve, saturation,
  contrast, gamma, green, blue, brightnessHSB, hue, autoBrightness, autoColor,
  autoContrast, vibrance, unsharpMask, opacityThreshold, replaceColor, recolor, fillLight, by3dLut};
