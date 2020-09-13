import Transcode from '../../../src/actions/transcode/Transcode';
import * as TranscodeESM from '../../../src/actions/transcode/Transcode';
import TransformableVideo from '../../../src/transformation/TransformableVideo';
import CloudinaryConfig from '../../../src/config/CloudinaryConfig';
import expectESMToMatchDefault from '../../TestUtils/expectESMToMatchDefault';
import * as AudioCodec from '../../../src/constants/audioCodec/AudioCodec';
import * as AudioFrequency from '../../../src/constants/audioFrequency/AudioFrequency';
import * as StreaminProfile from '../../../src//constants/streamingProfile/StreamingProfile';


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Transcode', () => {
  it ('Ensures ESM Matches Default', () => {
    expectESMToMatchDefault(TranscodeESM, Transcode);
  });

  it('Creates a cloudinaryURL with audiocodec', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode.audioCodec(AudioCodec.AUTO))
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
        .audioFrequency(AudioFrequency.FREQ11025))
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
        .streamingProfile(StreaminProfile.FULL_HD))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/sp_full_hd/sample');
  });


});
