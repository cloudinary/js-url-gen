import ICloudinaryConfigurations from "../config/interfaces/Config/ICloudinaryConfigurations";
import {CloudinaryImage} from "../assets/CloudinaryImage";


class Cloudinary {
  CloudinaryImage: typeof CloudinaryImage;
  cloudinaryConfig: ICloudinaryConfigurations;

  constructor(cloudinaryConfig?: ICloudinaryConfigurations) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }

  useImage(TImage: typeof CloudinaryImage):this {
    this.CloudinaryImage = TImage;
    return this;
  }

  image(publicID?: string): CloudinaryImage {
    if (!this.CloudinaryImage) {
      throw 'You cannot use image without first invoking useImage()';
    }
    return new this.CloudinaryImage(publicID).setConfig(this.cloudinaryConfig);
  }

  setConfig(cloudinaryConfig: ICloudinaryConfigurations):this {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }

  extendConfig():void {
    // Future implementation
  }
}



export {Cloudinary};
