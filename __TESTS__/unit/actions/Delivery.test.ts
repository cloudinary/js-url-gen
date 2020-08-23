import TransformableImage from '..         /../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {
  AI,
  AUTO,
  BMP,
  EPS,
  FLIF,
  GIF,
  HEIC,
  ICO,
  JP2,
  JPC,
  JPG,
  PDF,
  PNG,
  PSD,
  SVG,
  TIFF,
  WDP,
  WEBM,
  WEBP
} from "../../../src/params/formats/Formats";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as DeliveryESM from "../../../src/actions/delivery/Delivery";
import Delivery from "../../../src/actions/delivery/Delivery";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

const {format} = Delivery;

describe('Tests for Transformation Action -- Delivery', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(DeliveryESM, Delivery);
  });

  it('Ensure namespace is correctly populated', () => {
    expect(Delivery.format).toEqual(format);
  });

  it('Creates a cloudinaryURL with format using string', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format('auto'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_auto/sample');
  });

  it('Creates a cloudinaryURL with formatType object', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(GIF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_gif/sample');
  });

  it('Creates a cloudinaryURL with gif.lossy()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(GIF.lossy()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_gif,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with auto.lossy()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(AUTO.lossy()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_auto,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with jpg.progressive()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(JPG.progressive()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jpg,fl_progressive/sample');
  });

  it('Creates a cloudinaryURL with png', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(PNG))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_png/sample');
  });

  it('Creates a cloudinaryURL with bmp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(BMP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_bmp/sample');
  });

  it('Creates a cloudinaryURL with ico', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(ICO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_ico/sample');
  });

  it('Creates a cloudinaryURL with pdf', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(PDF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_pdf/sample');
  });

  it('Creates a cloudinaryURL with eps', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(EPS))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_eps/sample');
  });

  it('Creates a cloudinaryURL with tiff', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(TIFF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_tiff/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(WEBP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_webp/sample');
  });

  it('Creates a cloudinaryURL with psd', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(PSD))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_psd/sample');
  });

  it('Creates a cloudinaryURL with jpc', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(JPC))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jpc/sample');
  });

  it('Creates a cloudinaryURL with wdp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(WDP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_wdp/sample');
  });

  it('Creates a cloudinaryURL with webm', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(WEBM))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_webm/sample');
  });


  it('Creates a cloudinaryURL with svg', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(SVG))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_svg/sample');
  });

  it('Creates a cloudinaryURL with heic', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(HEIC))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_heic/sample');
  });

  it('Creates a cloudinaryURL with flif', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(FLIF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_flif/sample');
  });

  it('Creates a cloudinaryURL with ai', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(AI))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_ai/sample');
  });

  it('Creates a cloudinaryURL with jp2', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(JP2))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jp2/sample');
  });
});
