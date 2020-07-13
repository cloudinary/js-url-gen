import Resize, {minimumPad, crop, fill, scale} from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Resize', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Resize.minimumPad).toEqual(minimumPad);
    expect(Resize.crop).toEqual(crop);
    expect(Resize.fill).toEqual(fill);
    expect(Resize.scale).toEqual(scale);
  });

  it('Ensures minimumPad is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(minimumPad(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures crop is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(crop(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures fill is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(fill(250, 250))
    ).toEqual(tImage);
  });

  it('Ensures scale is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.resize(scale(250, 250))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with crop and dimensions', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(crop(100, 100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_crop,h_100,w_100/sample');
  });

  it('Creates a cloudinaryURL with crop and single dimension', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(crop(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_crop,w_100/sample');
  });

  it('Creates a cloudinaryURL with fill', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(fill(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,w_100/sample');
  });

  it('Creates a cloudinaryURL with scale', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(scale(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_scale,w_100/sample');
  });

  it('Creates a cloudinaryURL with minimumPad', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(minimumPad(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_mpad,w_100/sample');
  });

  it('Creates a cloudinaryURL with minimumPad', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(minimumPad(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_mpad,w_100/sample');
  });

  it('Creates a cloudinaryURL with fill and aspectRatio', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(fill(100, 100)
        .aspectRatio('4:3'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/ar_4:3,c_fill,h_100,w_100/sample');
  });
});
