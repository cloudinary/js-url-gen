import * as Transcode from '../../../src/actions/transcode/Transcode';
import * as TranscodeESM from '../../../src/actions/transcode/Transcode';
import TransformableVideo from '../../../src/transformation/TransformableVideo';
import CloudinaryConfig from '../../../src/config/CloudinaryConfig';
import * as AudioCodec from '../../../src/values/audioCodec/AudioCodec';
import * as AudioFrequency from '../../../src/values/audioFrequency/AudioFrequency';
import * as StreaminProfile from '../../../src/values/streamingProfile/StreamingProfile';
import * as AnimatedFormat from '../../../src/values/animatedFormat/AnimatedFormat';

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Transcode', () => {
  it('Creates a cloudinaryURL with audiocodec', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode.audioCodec(AudioCodec.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/ac_auto/sample');
  });

  it('Creates a cloudinaryURL with bitrate', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode.bitRate('500k'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/br_500k/sample');
  });

  it('Creates a cloudinaryURL with bitrate.constant', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .bitRate(500).constant())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/br_500:constant/sample');
  });

  it('Creates a cloudinaryURL with audioFrequency', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .audioFrequency(AudioFrequency.FREQ11025()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/af_11025/sample');
  });

  it('Creates a cloudinaryURL with fps', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .fps(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fps_20/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .fpsRange(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fps_20-/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from-to', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .fpsRange(20, 20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/fps_20-20/sample');
  });

  it('Creates a cloudinaryURL with keyframeInterval', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .keyframeInterval(0.4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/ki_0.4/sample');
  });

  it('Creates a cloudinaryURL with streamingProfile', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .streamingProfile(StreaminProfile.fullHD()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/sp_full_hd/sample');
  });

  it('Creates a cloudinaryURL with toAnimated', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated webp', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.webp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/f_webp,fl_awebp.animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated and delay', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .toAnimated('gif').delay(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated, delay, sampling', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()).delay(20).sampling('4s'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated,vs_4s/sample');
  });
});
