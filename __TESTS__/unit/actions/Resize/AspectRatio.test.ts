import getImageWithResize from "./shared/getImageWithResize";
import crop from "../../../../src/actions/resize/ResizeActions/CropAction";
import Gravity from "../../../../src/values/gravity/Gravity";
import AspectRatio from "../../../../src/values/aspectRatio/AspectRatio";
import TransformableImage from "../../../../src/transformation/TransformableImage";
import * as Format from "../../../../src/values/formats/Formats";
import CloudinaryConfig from "../../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for AspectRatio values Action -- Resize.crop', () => {
  it('Generates URL using AspectRatio options', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(
        crop().aspectRatio(AspectRatio.AR1X1())
      )
      .resize(
        crop().aspectRatio(AspectRatio.AR16X9())
      )
      .resize(
        crop().aspectRatio(AspectRatio.AR4X3())
      )
      .resize(
        crop().aspectRatio(AspectRatio.AR3X2())
      )
      .resize(
        crop().aspectRatio(AspectRatio.AR3X1())
      )
      .resize(
        crop().aspectRatio(AspectRatio.AR5X4())
      )
      .resize(
        crop().aspectRatio(AspectRatio.IgnoreInitialAspectRatio())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('ar_1:1,c_crop/ar_16:9,c_crop/ar_4:3,c_crop/ar_3:2,c_crop/ar_3:1,c_crop/ar_5:4,c_crop/ar_fl_ignore_aspect_ratio,c_crop');
  });
});
