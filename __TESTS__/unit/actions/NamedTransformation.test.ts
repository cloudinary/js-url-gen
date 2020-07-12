import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import NamedTransformation, {name} from "../../../src/actions/namedTransformation/NamedTransformation";
import Resize, {scale} from "../../../src/actions/resize/Resize";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it('Ensures NamedTransformation is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(NamedTransformation.name('foobar'))
    ).toEqual(tImage);
  });

  it('Ensures name is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(name('foobar'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with name', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/t_foobar/sample');
  });

  it('Creates a cloudinaryURL with name and resize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(scale(100, 100))
      .namedTransformation(name('foobar'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/t_foobar/sample');
  });
});
