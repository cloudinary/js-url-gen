import TransformableImage from '..         /../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as Dpr from "../../../src/constants/dpr/Dpr";
import * as Format from "../../../src/constants/formats/Formats";
import * as Quality from "../../../src/constants/quality/Quality";
import * as ColorSpace from "../../../src/constants/colorSpace/ColorSpace";
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

  it('Creates a cloudinaryURL with Format', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.GIF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_gif/sample');
  });

  it('Creates a cloudinaryURL with gif.lossy()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.GIF).lossy())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_gif,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with auto.lossy()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.AUTO).lossy())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_auto,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with jpg.progressive()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.JPG).progressive())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jpg,fl_progressive/sample');
  });

  it('Creates a cloudinaryURL with png', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.PNG))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_png/sample');
  });

  it('Creates a cloudinaryURL with bmp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.BMP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_bmp/sample');
  });

  it('Creates a cloudinaryURL with ico', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.ICO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_ico/sample');
  });

  it('Creates a cloudinaryURL with pdf', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.PDF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_pdf/sample');
  });

  it('Creates a cloudinaryURL with eps', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.EPS))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_eps/sample');
  });

  it('Creates a cloudinaryURL with tiff', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.TIFF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_tiff/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.WEBP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_webp/sample');
  });

  it('Creates a cloudinaryURL with psd', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.PSD))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_psd/sample');
  });

  it('Creates a cloudinaryURL with jpc', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.JPC))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jpc/sample');
  });

  it('Creates a cloudinaryURL with wdp', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.WDP))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_wdp/sample');
  });

  it('Creates a cloudinaryURL with webm', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.WEBM))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_webm/sample');
  });


  it('Creates a cloudinaryURL with svg', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.SVG))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_svg/sample');
  });

  it('Creates a cloudinaryURL with heic', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.HEIC))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_heic/sample');
  });

  it('Creates a cloudinaryURL with flif', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.FLIF))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_flif/sample');
  });

  it('Creates a cloudinaryURL with ai', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.AI))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_ai/sample');
  });

  it('Creates a cloudinaryURL with jp2', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(format(Format.JP2))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/f_jp2/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.dpr('2.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/dpr_2.0/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.dpr(Dpr.AUTO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/dpr_auto/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality('80'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_80/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality.auto()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.quality(Quality.AUTO))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with Delivery.density', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.density(150))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/dn_150/sample');
  });

  it('Creates a cloudinaryURL with Delivery.defaultImage', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.defaultImage('default'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/d_default/sample');
  });

  it('Creates a cloudinaryURL with Delivery.colorspace', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.colorSpace(ColorSpace.NO_CMYK))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/cs_no_cmyk/sample');
  });

  it('Creates a cloudinaryURL with Delivery.ColorSpaceFromICC', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .delivery(Delivery.colorSpaceFromICC('sample'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/cs_icc:sample/sample');
  });
});
