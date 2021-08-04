import {CloudinaryImage} from "../../../../../src/assets/CloudinaryImage";
import {
  crop,
  fill, fillPad, fit,
  imaggaCrop,
  imaggaScale,
  IResizeActions, limitFill, limitFit, limitPad, minimumFit,
  minimumPad, pad,
  scale, thumbnail
} from "../../../../../src/actions/resize";


/**
 * Utility function for resize image tests
 * @param resizeAction
 * @param type
 */
function getImageWithResize(resizeAction:
                              ReturnType<typeof imaggaScale> |
                              ReturnType<typeof imaggaCrop> |
                              ReturnType<typeof crop> |
                              ReturnType<typeof fill> |
                              ReturnType<typeof scale> |
                              ReturnType<typeof minimumPad> |
                              ReturnType<typeof fit> |
                              ReturnType<typeof pad> |
                              ReturnType<typeof limitFit> |
                              ReturnType<typeof thumbnail> |
                              ReturnType<typeof limitFill> |
                              ReturnType<typeof minimumFit> |
                              ReturnType<typeof limitPad> |
                              ReturnType<typeof fillPad>, type: 'url' | 'image'): CloudinaryImage | string {
  const img = new CloudinaryImage('sample', {cloudName: 'demo'})
    .resize(resizeAction);

  if (type === 'image') {
    return img;
  }

  if (type === 'url') {
    return img.toURL();
  }
}

export default getImageWithResize;
