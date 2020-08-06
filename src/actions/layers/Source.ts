import TransformableImage from "../../transformation/TransformableImage";

class ImageSource extends TransformableImage {

}

/**
 * @memberOf Sources
 * @param publicID
 */
function image(publicID: string): ImageSource {
  return new ImageSource(publicID);
}

export default {ImageSource, image};
export {ImageSource, image};
