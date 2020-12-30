import {Format} from "../../../src/values/format";
import {Quality} from "../../../src/values/quality";
import {ColorSpace} from "../../../src/values/colorSpace";
import {Dpr} from "../../../src/values/dpr";
import {Delivery} from "../../../src/actions/delivery";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";


const {format} = Delivery;

describe('Tests for Transformation Action -- Delivery', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Delivery.format).toEqual(format);
  });

  it('Creates a cloudinaryURL with format using string', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.format('auto'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_auto/sample');
  });

  it('Creates a cloudinaryURL with Format', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.gif()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_gif/sample');
  });

  it('Creates a cloudinaryURL with gif.lossy()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.gif()).lossy())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_gif,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with auto.lossy()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.auto()).lossy())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_auto,fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with jpg.progressive()', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jpg()).progressive())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_jpg,fl_progressive/sample');
  });

  it('Creates a cloudinaryURL with png', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.png()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_png/sample');
  });

  it('Creates a cloudinaryURL with bmp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.bmp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_bmp/sample');
  });

  it('Creates a cloudinaryURL with ico', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.ico()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_ico/sample');
  });

  it('Creates a cloudinaryURL with pdf', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.pdf()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_pdf/sample');
  });

  it('Creates a cloudinaryURL with eps', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.eps()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_eps/sample');
  });

  it('Creates a cloudinaryURL with tiff', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.tiff()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_tiff/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.webp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_webp/sample');
  });

  it('Creates a cloudinaryURL with psd', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.psd()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_psd/sample');
  });

  it('Creates a cloudinaryURL with jpc', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jpc()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_jpc/sample');
  });

  it('Creates a cloudinaryURL with wdp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.wdp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_wdp/sample');
  });

  it('Creates a cloudinaryURL with webp', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.webp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_webp/sample');
  });


  it('Creates a cloudinaryURL with svg', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.svg()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_svg/sample');
  });

  it('Creates a cloudinaryURL with heic', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.heic()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_heic/sample');
  });

  it('Creates a cloudinaryURL with flif', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.flif()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_flif/sample');
  });

  it('Creates a cloudinaryURL with ai', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.ai()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_ai/sample');
  });

  it('Creates a cloudinaryURL with jp2', () => {
    const url = createNewImage('sample')
      .delivery(format(Format.jp2()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/f_jp2/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.dpr('2.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/dpr_2.0/sample');
  });

  it('Creates a cloudinaryURL with Delivery.dpr', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.dpr(Dpr.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/dpr_auto/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality('80'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_80/sample');
  });

  it('Creates a cloudinaryURL with Delivery.quality.auto()', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with Delivery.density', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.density(150))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/dn_150/sample');
  });

  it('Creates a cloudinaryURL with Delivery.defaultImage', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.defaultImage('default'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/d_default/sample');
  });

  it('Creates a cloudinaryURL with Delivery.colorspace', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.colorSpace(ColorSpace.noCMYK()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/cs_no_cmyk/sample');
  });

  it('Creates a cloudinaryURL with Delivery.ColorSpaceFromICC', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.colorSpaceFromICC('sample'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/cs_icc:sample/sample');
  });
});
