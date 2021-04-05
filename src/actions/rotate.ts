/**
 * Rotates or flips an image or video by the specified number of degrees, or automatically (images only) according to its orientation or available metadata.
 * @memberOf Actions
 * @namespace Rotate
 *
 * @example
 * <caption>Rotate by mode</caption>
 * import {Cloudinary} from "@cloudinary/base";
 * import {mode} from "@cloudinary/base/actions/rotate";
 * import {autoLeft} from "@cloudinary/base/qualifiers/rotationMode";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.rotate(mode(autoLeft());
 * image.toURL();
 *
 * @example
 * <caption>Rotate by angle</caption>
 * import {Cloudinary} from "@cloudinary/base";
 * import {byAngle} from "@cloudinary/base/actions/rotate";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * image.rotate(byAngle(90));
 * image.toURL();
 */


import byAngle from "./rotate/byAngle";
import mode from "./rotate/mode";





const Rotate = {byAngle, mode};
export {Rotate, byAngle, mode};
