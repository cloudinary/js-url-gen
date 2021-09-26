import ICloudinaryConfigurations from "../config/interfaces/Config/ICloudinaryConfigurations.js";
import {CloudinaryImage} from "../assets/CloudinaryImage.js";
import {CloudinaryVideo} from "../assets/CloudinaryVideo.js";


class Cloudinary {
  private cloudinaryConfig: ICloudinaryConfigurations;

  constructor(cloudinaryConfig?: ICloudinaryConfigurations) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }

  image(publicID?: string): CloudinaryImage {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }

  video(publicID?: string): CloudinaryVideo {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }

  setConfig(cloudinaryConfig: ICloudinaryConfigurations):this {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }

  getConfig() {
    return this.cloudinaryConfig;
  }

  extendConfig():void {
    // Future implementation
  }
}



export {Cloudinary};
