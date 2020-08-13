import Rotate from '../../../src/actions/rotate/Rotate';
import * as RotateESM from '../../../src/actions/rotate/Rotate';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as RotationModes from "../../../src/params/rotate/Rotate";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Rotate', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(RotateESM, Rotate);
  });

  it('Creates a cloudinaryURL with Rotate', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(Rotate.byMode(RotationModes.VERTICAL_FLIP))
      .rotate(Rotate.byMode(RotationModes.HORIZONTAL_FLIP))
      .rotate(Rotate.byMode(RotationModes.AUTO_RIGHT))
      .rotate(Rotate.byMode(RotationModes.AUTO_LEFT))
      .rotate(Rotate.byMode(RotationModes.IGNORE))
      .rotate(Rotate.byAngle(40))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('/a_vflip/a_hflip/a_auto_right/a_auto_left/a_ignore/a_40/');
  });
});
