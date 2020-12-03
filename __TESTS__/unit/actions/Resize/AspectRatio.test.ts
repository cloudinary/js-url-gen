import crop from "../../../../src/actions/resize/ResizeActions/CropAction";
import * as AspectRatio from "../../../../src/values/aspectRatio/AspectRatio";
import TransformableImage from "../../../../src/transformation/TransformableImage";
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
        crop().aspectRatio(AspectRatio.ignoreAspectRatio())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('ar_1:1,c_crop/ar_16:9,c_crop/ar_4:3,c_crop/ar_3:2,c_crop/ar_3:1,c_crop/ar_5:4,c_crop/c_crop,fl_ignore_aspect_ratio');
  });
});
