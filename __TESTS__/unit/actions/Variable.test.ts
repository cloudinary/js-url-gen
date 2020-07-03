import Variable, {variable} from '../../../src/actions/variable/Variable';
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
      tImage.variable(new Variable('a', 30))
    ).toEqual(tImage);
  });
  it('Ensures angle is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.variable(variable('a', 30))
    ).toEqual(tImage);
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(variable('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(variable('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(new Variable('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(new Variable('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb/sample');
  });
});
