import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Adjust from '../../../src/actions/adjust/Adjust';
import * as AdjustESM from '../../../src/actions/adjust/Adjust';
import {TransformableImage} from "../../../src";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as ImproveMode from "../../../src/params/improveMode/ImproveMode";

const {opacity, viesusCorrect, brightness, sharpen, improve, red, saturation} = Adjust;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Adjust', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(AdjustESM, Adjust);
  });

  it('Ensure namespace is correctly populated', () => {
    expect(Adjust.viesusCorrect).toEqual(viesusCorrect);
    expect(Adjust.opacity).toEqual(opacity);
    expect(Adjust.brightness).toEqual(brightness);
    expect(Adjust.sharpen).toEqual(sharpen);
    expect(Adjust.improve).toEqual(improve);
    expect(Adjust.red).toEqual(red);
    expect(Adjust.saturation).toEqual(saturation);
  });

  it('Ensures viesusCorrect, opacity, brightness are accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    const TEST_URL_TO_CREATE = 'http://res.cloudinary.com/demo/image/upload/e_viesus_correct/o_50/e_brightness:200/e_sharpen/e_improve/e_red:20/e_saturation:50/sample';

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
        .setPublicID('sample')
    ).toEqual(tImage);

    expect(tImage.toURL()).toBe(TEST_URL_TO_CREATE);
  });

  it('Creates a cloudinaryURL with contrast', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.contrast(-100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_contrast:-100/sample');
  });

  it('Creates a cloudinaryURL with gamma', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.gamma(-100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_gamma:-100/sample');
  });

  it('Creates a cloudinaryURL with brightnessHSB', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.brightnessHSB(-99))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_brightness_hsb:-99/sample');
  });

  it('Creates a cloudinaryURL with hue', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.hue(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_hue:100/sample');
  });

  it('Creates a cloudinaryURL with autoBrightness', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.autoBrightness(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_auto_brightness:100/sample');
  });

  it('Creates a cloudinaryURL with autoColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.autoColor(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_auto_color:100/sample');
  });

  it('Creates a cloudinaryURL with vibrance', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.vibrance())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_vibrance/sample');
  });

  it('Creates a cloudinaryURL with unsharpMask', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.unsharpMask(1500))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_unsharp_mask:1500/sample');
  });

  it('Creates a cloudinaryURL with opacityThreshold', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.opacityThreshold(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/e_opacity_threshold:50/sample');
  });

  it('tests replaceColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust
        .replaceColor('red')
        .tolerance(30)
        .fromColor('blue'))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_replace_color:red:30:blue');
  });

  it('tests replaceColor - without fromColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.replaceColor('red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_replace_color:red');
  });

  it('tests recolor matrix', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.recolor([[0.1, 0.2, 0.3], [0.4, 0.5, 0.6], [0.7, 0.8, 0.9]]))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_recolor:0.1:0.2:0.3:0.4:0.5:0.6:0.7:0.8:0.9');
  });

  it('tests fillLight', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.fillLight().level(0).bias(0))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_fill_light:0:0');
  });

  it('tests improve', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.improve().mode(ImproveMode.OUTDOOR).blend(0))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_improve:outdoor:0');
  });
});
