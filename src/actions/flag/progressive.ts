import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Generates a JPG image using the progressive (interlaced) JPG format.
 *
 * This format allows the browser to quickly show a low-quality rendering of the image until the full-quality
 * image is loaded.
 *
 * @param {string} mode The mode to determine a specific progressive outcome as follows:
 *                     * semi  - A smart optimization of the decoding time, compression level and progressive
 *                               rendering (less iterations). This is the default mode when using q_auto.
 *                     * steep - Delivers a preview very quickly, and in a single later phase improves the image to
 *                               the required resolution.
 *                     * none  - Use this to deliver a non-progressive image. This is the default mode when setting
 *                               a specific value for quality.
 * @see JpegScanMode
 *
 * @return FlagAction
 */
function progressive(mode?: string): IFlagAction{
  return new FlagAction('progressive', mode);
}

export default progressive;
