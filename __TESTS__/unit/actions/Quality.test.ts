import * as Quality from "../../../src/constants/quality/Quality";
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Delivery from "../../../src/actions/delivery/Delivery";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Delivery.quality', () => {
  it('Ensures auto is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(Delivery.quality('80'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with quality', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.AUTO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with quality:best', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.BEST))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:best/sample');
  });

  it('Creates a cloudinaryURL with quality:eco', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.ECO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:eco/sample');
  });

  it('Creates a cloudinaryURL with quality:good', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.GOOD))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:good/sample');
  });

  it('Creates a cloudinaryURL with quality:low', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.LOW))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto:low/sample');
  });

  it('Creates a cloudinaryURL with jpegmini', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.JPEGMINI))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_jpegmini/sample');
  });

  it('Creates a cloudinaryURL with level', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality('75'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_75/sample');
  });
});
