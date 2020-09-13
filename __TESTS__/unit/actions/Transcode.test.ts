import Transcode from '../../../src/actions/transcode/Transcode';
import Adjust from '../../../src/actions/adjust/Adjust';

// import * as TranscodeESM from "../../../src/actions/transcode/Transcode";
import TransformableVideo from '../../../src/transformation/TransformableVideo';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as AudioCodec from "../../../src/constants/audioCodec/AudioCodec";



const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Transcode', () => {
  // it ('Ensures ESM Matches Default', () => {
  //   expectESMToMatchDefault(TranscodeESM, Transcode);
  // });

  // it('Creates a cloudinaryURL with transcode.audiocodec', () => {
  //   const url = new TransformableVideo()
  //     .setConfig(CONFIG_INSTANCE)
  //     .setAssetType('video')
  //     .transcode(Transcode.audioCodec(AudioCodec.AUTO))
  //     .setPublicID('sample')
  //     .toURL();
  //
  //   expect(url).toBe('http://res.cloudinary.com/demo/video/upload/ac_auto/sample');
  // });

  it('Creates a cloudinaryURL with transcode.bitrate', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode.bitRate())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/br_500k/sample');
  });

  it('Creates a cloudinaryURL with transcode.bitrate', () => {
    const url = new TransformableVideo()
      .setConfig(CONFIG_INSTANCE)
      .setAssetType('video')
      .transcode(Transcode
        .bitRate().bias(2).level(2))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/video/upload/br_500k/sample');
  });


});
