import ICloudinaryConfigurations from "../sdk/config/interfaces/Config/ICloudinaryConfigurations";
import {CloudinaryImage} from "../assets/CloudinaryImage";


class Cloudinary {
  CloudinaryImage: typeof CloudinaryImage;
  cloudinaryConfig: ICloudinaryConfigurations;

  constructor(cloudinaryConfig?: ICloudinaryConfigurations) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }

  useImage(TImage: typeof CloudinaryImage):void {
    this.CloudinaryImage = TImage;
  }

  image(publicID?: string): CloudinaryImage {
    if (!this.CloudinaryImage) {
      throw 'You cannot use image without first invoking useImage()';
    }
    return new this.CloudinaryImage(publicID).setConfig(this.cloudinaryConfig);
  }

  setConfig(cloudinaryConfig: ICloudinaryConfigurations):void {
    this.cloudinaryConfig = cloudinaryConfig;
  }

  extendConfig():void {
    // Future implementation
  }
}



export {Cloudinary};
