import Background, {auto} from "../../../src/actions/background/Background";
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as Color from "../../../src/constants/colors/Colors";
import Resize from "../../../src/actions/resize/Resize";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for Transformation Action -- Background', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Background.auto).toEqual(auto);
  });

  it('Creates a cloudinaryURL with Background.auto', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.auto())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_auto/sample');
  });

  it('Creates a cloudinaryURL with Background.Color', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.color(Color.RED))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_red/sample');
  });

  it('Creates a cloudinaryURL with Background.Color rgb', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.color('#331a00'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_rgb:331a00/sample');
  });

  it('Creates a cloudinaryURL with Resize and Background.Color', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(Background.color('#331a00')))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_rgb:331a00,c_pad,h_250,w_250/sample');
  });

  it('Creates a cloudinaryURL with Resize and Background.predominant', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(Background.predominant()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_auto:predominant,c_pad,h_250,w_250/sample');
  });

  it('Creates a cloudinaryURL with Resize and Background.border.contrast', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(200, 200)
        .background(Background.border()
          .contrast()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_auto:border_contrast,c_pad,h_200,w_200/sample');
  });

  it('Creates a cloudinaryURL with Resize and Background.predominant.contrast', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(200, 200)
        .background(Background
          .predominant()
          .contrast()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/b_auto:predominant_contrast,c_pad,h_200,w_200/sample');
  });

  it('Test blurred background', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.blurred())
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('b_blurred');
  });

  it('Test blurred background with one qualifiers', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.blurred().intensity(100))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('b_blurred:100');
  });

  it('Test blurred background with two qualifiers', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .background(Background.blurred().intensity(100).brightness(50))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('b_blurred:100:50');
  });
});
