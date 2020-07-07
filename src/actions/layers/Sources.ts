import TransformableImage from "../../transformation/TransformableImage";

export class ImageSource extends TransformableImage {
}

/**
 * @param publicID
 */
function imageSource(publicID: string) {
  return new ImageSource(publicID);
}

export {
  imageSource
};
