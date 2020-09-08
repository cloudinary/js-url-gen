import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Flag from "../../../src/params/flag/Flag";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as FlagESM from "../../../src/params/flag/Flag";
import Resize from "../../../src/actions/resize/Resize";
import TransformableVideo from "../../../src/transformation/TransformableVideo";



const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Flag', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(FlagESM, Flag);
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
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.animatedWebP())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_awebp/sample');
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

  it('Creates a cloudinaryURL with custom flag', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.custom('myFlag'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_myFlag/sample');
  });

  it('Creates a cloudinaryURL with flag layer', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addFlag(Flag.layerApply())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_layer_apply/sample');
  });

  it('Creates a cloudinaryURL with Flag hlsv3', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.hlsv3())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_hlsv3/sample');
  });

  it('Creates a cloudinaryURL with Flag keepDar', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.keepDar())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_keep_dar/sample');
  });

  it('Creates a cloudinaryURL with Flag noStream', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.noStream())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_no_stream/sample');
  });

  it('Creates a cloudinaryURL with Flag mono', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.mono())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_mono/sample');
  });

  it('Creates a cloudinaryURL with Flag splice', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.splice())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_splice/sample');
  });

  it('Creates a cloudinaryURL with Flag waveform', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.waveform())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_waveform/sample');
  });

  it('Creates a cloudinaryURL with Flag streamingAttachment', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .addFlag(Flag.streamingAttachment('file_name'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fl_streaming_attachment:file_name/sample');
  });

  it('Creates a cloudinaryURL with multiple flags', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(
        Resize.fill(400)
          .aspectRatio(1.0)
          .addFlag(Flag.keepIptc())
          .addFlag(Flag.keepAttribution())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/ar_1.0,c_fill,fl_keep_iptc.keep_attribution,w_400/sample');
  });
});
