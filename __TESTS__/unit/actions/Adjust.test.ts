import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {Adjust} from "../../../src/actions/Actions";
import {TransformableImage} from "../../../src";

const {opacity, viesusCorrect, brightness, sharpen, improve, red, saturation, tint} = Adjust;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Adjust', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Adjust.viesusCorrect).toEqual(viesusCorrect);
    expect(Adjust.opacity).toEqual(opacity);
    expect(Adjust.brightness).toEqual(brightness);
    expect(Adjust.sharpen).toEqual(sharpen);
    expect(Adjust.improve).toEqual(improve);
    expect(Adjust.red).toEqual(red);
    expect(Adjust.saturation).toEqual(saturation);
    expect(Adjust.tint).toEqual(tint);
  });

  it('Ensures viesusCorrect, opacity, brightness are accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    const TEST_URL_TO_CREATE = 'http://res.cloudinary.com/demo/image/upload/e_viesus_correct/o_50/e_brightness:200/e_shapren/e_shapren/e_red:20/e_saturation:50/e_tint:equalize:80:red:blue:yellow/sample';

    expect(
      tImage
        .setConfig(CONFIG_INSTANCE)
        .adjust(viesusCorrect())
        .adjust(opacity(50))
        .adjust(brightness(200))
        .adjust(sharpen())
        .adjust(improve())
        .adjust(red(20))
        .adjust(saturation(50))
        .adjust(tint('equalize:80:red:blue:yellow'))
        .setPublicID('sample')
    ).toEqual(tImage);

    expect(tImage.toURL()).toBe(TEST_URL_TO_CREATE);
  });
});
