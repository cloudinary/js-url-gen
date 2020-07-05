import TransformableImage from "../transformation/TransformableImage";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";

class Cloudinary {
  TransformableImage: typeof TransformableImage;
  cloudinaryConfig: ICloudinaryConfigurations;

  constructor(cloudinaryConfig?: ICloudinaryConfigurations) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }

  useImage(TImage: typeof TransformableImage) {
    this.TransformableImage = TImage;
  }

  image(publicID: string) {
    if (!this.TransformableImage) {
      throw 'You cannot use image without first invoking useImage()';
    }
    return new this.TransformableImage(publicID).setConfig(this.cloudinaryConfig);
  }

  setConfig(cloudinaryConfig: ICloudinaryConfigurations) {
    this.cloudinaryConfig = cloudinaryConfig;
  }

  extendConfig(cloudinaryConfig: ICloudinaryConfigurations) {
    // Future implementation
  }
}



export default Cloudinary;
