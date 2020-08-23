import Flag, {
  animated,
  anyFormat,
  animatedPng,
  animatedWebP,
  clip,
  clipEvenOdd,
  lossy,
  preserveTransparency,
  png8,
  png24,
  progressive,
  rasterize
} from '../../../src/actions/flag/Flag';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {format} from "../../../src/actions/delivery/Delivery";
import {AUTO, GIF} from "../../../src/params/formats/Formats";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Flag', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Flag.animated).toEqual(animated);
    expect(Flag.anyFormat).toEqual(anyFormat);
    expect(Flag.animatedPng).toEqual(animatedPng);
    expect(Flag.animatedWebP).toEqual(animatedWebP);
    expect(Flag.clip).toEqual(clip);
    expect(Flag.clipEvenOdd).toEqual(clipEvenOdd);
    expect(Flag.lossy).toEqual(lossy);
    expect(Flag.preserveTransparency).toEqual(preserveTransparency);
    expect(Flag.png8).toEqual(png8);
    expect(Flag.png24).toEqual(png24);
    expect(Flag.progressive).toEqual(progressive);
    expect(Flag.rasterize).toEqual(rasterize);
  });

  it('Creates a cloudinaryURL with Flag animated', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.animated())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_animated/sample');
  });

  it('Creates a cloudinaryURL with Flag anyFormat', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.anyFormat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_any_format/sample');
  });

  it('Creates a cloudinaryURL with Flag animatedPng', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.animatedPng())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_apng/sample');
  });

  it('Creates a cloudinaryURL with Flag animatedWebP', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.animatedWebP())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_awebp/sample');
  });

  it('Creates a cloudinaryURL with Flag clip', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.clip())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_clip/sample');
  });

  it('Creates a cloudinaryURL with Flag clipEvenOdd', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.clipEvenOdd())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_clip_evenodd/sample');
  });

  it('Creates a cloudinaryURL with Flag lossy', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.lossy())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_lossy/sample');
  });

  it('Creates a cloudinaryURL with Flag preserveTransparency', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.preserveTransparency())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_preserve_transparency/sample');
  });

  it('Creates a cloudinaryURL with Flag png8', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.png8())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_png8/sample');
  });

  it('Creates a cloudinaryURL with Flag png24', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.png24())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_png24/sample');
  });

  it('Creates a cloudinaryURL with Flag png32', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.png32())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_png32/sample');
  });

  it('Creates a cloudinaryURL with Flag progressive:semi', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.progressive('semi'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_progressive:semi/sample');
  });

  it('Creates a cloudinaryURL with Flag rasterize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.rasterize())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_rasterize/sample');
  });

  it('Creates a cloudinaryURL with Flag sanitize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.sanitize())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_sanitize/sample');
  });

  it('Creates a cloudinaryURL with Flag stripProfile', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.stripProfile())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_strip_profile/sample');
  });

  it('Creates a cloudinaryURL with Flag tiff8Lzw', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.tiff8Lzw())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_tiff8_lzw/sample');
  });

  it('Creates a cloudinaryURL with Flag attachment:pretty_flower', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.attachment('pretty_flower'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_attachment:pretty_flower/sample');
  });

  it('Creates a cloudinaryURL with Flag getInfo', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.getInfo())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_getinfo/sample');
  });

  it('Creates a cloudinaryURL with Flag immutableCache', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.immutableCache())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_immutable_cache/sample');
  });

  it('Creates a cloudinaryURL with Flag keepAttribution', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.keepAttribution())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_keep_attribution/sample');
  });

  it('Creates a cloudinaryURL with Flag keepIptc', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.keepIptc())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_keep_iptc/sample');
  });
});
