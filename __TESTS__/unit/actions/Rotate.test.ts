import * as Rotate from '../../../src/actions/rotate/Rotate';
import * as RotateESM from '../../../src/actions/rotate/Rotate';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as RotationMode from "../../../src/values/rotate/Rotate";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Rotate', () => {
  it('Creates a cloudinaryURL with Rotate', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .rotate(Rotate.mode(RotationMode.autoLeft()))
      .rotate(Rotate.mode(RotationMode.autoRight()))
      .rotate(Rotate.mode(RotationMode.ignore()))
      .rotate(Rotate.byAngle(40))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('/a_vflip/a_hflip/a_auto_left/a_auto_right/a_ignore/a_40/');
  });
});
