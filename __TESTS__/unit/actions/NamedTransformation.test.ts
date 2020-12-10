import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {name} from "../../../src/actions/namedTransformation";
import {scale} from "../../../src/actions/resize";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it('Ensures NamedTransformation is accepted as an action to ImageTransformation', () => {
    const tImage = new CloudinaryImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(name('foobar'))
    ).toEqual(tImage);
  });

  it('Ensures name is accepted as an action to ImageTransformation', () => {
    const tImage = new CloudinaryImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(name('foobar'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with name', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/t_foobar/sample');
  });

  it('Creates a cloudinaryURL with name and resize', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(scale(100, 100))
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/t_foobar/sample');
  });
});
