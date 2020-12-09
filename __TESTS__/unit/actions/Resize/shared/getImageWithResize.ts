import CloudinaryConfig from "../../../../../src/config/CloudinaryConfig";
import ResizeSimpleAction from "../../../../../src/actions/resize/ResizeActions/shared/ResizeSimpleAction";
import {CloudinaryImage} from "../../../../../src/assets/CloudinaryImage";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});



/**
 * Utility function for resize image tests
 * @param resizeAction
 * @param type
 */
function getImageWithResize(resizeAction: ResizeSimpleAction, type:'url' | 'image'):CloudinaryImage | string {
  const img = new CloudinaryImage('sample')
    .setConfig(CONFIG_INSTANCE)
    .resize(resizeAction);

  if (type === 'image') {
    return img;
  }

  if (type === 'url') {
    return img.toURL();
  }
}

export default getImageWithResize;
