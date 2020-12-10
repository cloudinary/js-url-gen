import * as Quality from "../../../src/values/quality";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as Delivery from "../../../src/actions/delivery";

import * as ChromaSubSampling from '../../../src/values/chromaSubSampling';

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Delivery.quality', () => {
  it('Ensures auto is accepted as an action to ImageTransformation', () => {
    const tImage = new CloudinaryImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(Delivery.quality('80'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with quality', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with quality:best', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.autoBest()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:best/sample');
  });

  it('Creates a cloudinaryURL with quality:eco', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.autoEco()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:eco/sample');
  });

  it('Creates a cloudinaryURL with quality:good', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.autoGood()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:good/sample');
  });

  it('Creates a cloudinaryURL with quality:low', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.autoLow()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:low/sample');
  });

  it('Creates a cloudinaryURL with jpegmini', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.jpegmini()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini/sample');
  });

  it('Creates a cloudinaryURL with jpegmini HIGH', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.jpegminiHigh()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:1/sample');
  });

  it('Creates a cloudinaryURL with jpegmini MEDIUM', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.jpegminiMedium()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:2/sample');
  });

  it('Creates a cloudinaryURL with jpegmini BEST', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.jpegminiBest()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:0/sample');
  });

  it('Creates a cloudinaryURL with level', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality('75').chromaSubSampling(ChromaSubSampling.chroma420()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_75:420/sample');
  });

  it('Sets Quanitzation level', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality('75').quantization(123))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_75:qmax_123/sample');
  });
});
