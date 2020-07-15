import Quality, {auto, level, jpegMini, best, eco, good, low} from '../../../src/actions/quality/Quality';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Quality', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Quality.auto).toEqual(auto);
    expect(Quality.level).toEqual(level);
    expect(Quality.jpegMini).toEqual(jpegMini);
    expect(Quality.best).toEqual(best);
    expect(Quality.eco).toEqual(eco);
    expect(Quality.good).toEqual(good);
    expect(Quality.low).toEqual(low);
  });

  it('Ensures auto is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(auto())
    ).toEqual(tImage);
  });

  it('Ensures level is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(level(90))
    ).toEqual(tImage);
  });

  it('Ensures jpegmini is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(jpegMini())
    ).toEqual(tImage);
  });

  it('Ensures best is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(best())
    ).toEqual(tImage);
  });

  it('Ensures low is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(low())
    ).toEqual(tImage);
  });

  it('Ensures eco is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(eco())
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with quality', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(auto())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with quality:best', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(Quality.best())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:best/sample');
  });

  it('Creates a cloudinaryURL with quality:eco', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(Quality.eco())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:eco/sample');
  });

  it('Creates a cloudinaryURL with quality:good', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(Quality.good())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:good/sample');
  });

  it('Creates a cloudinaryURL with quality:low', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(Quality.low())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:low/sample');
  });

  it('Creates a cloudinaryURL with jpegmini', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(jpegMini())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_jpegmini/sample');
  });

  it('Creates a cloudinaryURL with level', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .quality(Quality.level(75))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_75/sample');
  });
});
