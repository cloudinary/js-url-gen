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

  image(publicID?: string): CloudinaryImage {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
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
