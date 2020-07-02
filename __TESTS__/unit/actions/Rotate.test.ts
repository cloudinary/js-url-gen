import Rotate, {angle, horizontalFlip, verticalFlip} from '../../../src/actions/rotate/Rotate';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Rotate', () => {
  it('Ensures new Rotate is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.rotate(new Rotate())
    ).toEqual(tImage);
  });
  it('Ensures angle is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.rotate(angle(30))
    ).toEqual(tImage);
  });
  it('Creates a cloudinaryURL with angle', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(angle(30).verticalFlip())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_30.vflip/sample');
  });
  it('Creates a cloudinaryURL with horizontalFlip', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(horizontalFlip().angle(30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_hflip.30/sample');
  });
  it('Creates a cloudinaryURL with verticalFlip', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(verticalFlip().angle(30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_vflip.30/sample');
  });
  it('Creates a cloudinaryURL with Rotate', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(new Rotate().verticalFlip().angle(40).horizontalFlip())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_vflip.40.hflip/sample');
  });
  it('Creates a cloudinaryURL with Rotate, passing value to constructor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(new Rotate(30).verticalFlip().angle(40).horizontalFlip())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_30.vflip.40.hflip/sample');
  });
});
