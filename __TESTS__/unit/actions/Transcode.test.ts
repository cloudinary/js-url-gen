import {AnimatedFormat} from "../../../src/values/animatedFormat";
import {createNewVideo} from "../../TestUtils/createCloudinaryVideo";
import {AudioFrequency} from "../../../src/values/audioFrequency";
import {Transcode} from "../../../src/actions/transcode";
import {AudioCodec} from "../../../src/values/audioCodec";
import {StreamingProfile} from "../../../src/values/streamingProfile";

describe('Tests for Transformation Action -- Transcode', () => {
  it('Creates a cloudinaryURL with audiocodec', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode.audioCodec(AudioCodec.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/ac_auto/sample');
  });

  it('Creates a cloudinaryURL with bitrate', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode.bitRate('500k'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/br_500k/sample');
  });

  it('Creates a cloudinaryURL with bitrate.constant', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .bitRate(500).constant())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/br_500:constant/sample');
  });

  it('Creates a cloudinaryURL with audioFrequency', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .audioFrequency(AudioFrequency.FREQ11025()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/af_11025/sample');
  });

  it('Creates a cloudinaryURL with fps', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fps(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fpsRange(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20-/sample');
  });

  it('Creates a cloudinaryURL with fpsRange from-to', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .fpsRange(20, 20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/fps_20-20/sample');
  });

  it('Creates a cloudinaryURL with keyframeInterval', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .keyframeInterval(0.4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/ki_0.4/sample');
  });

  it('Creates a cloudinaryURL with streamingProfile', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .streamingProfile(StreamingProfile.fullHd()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/sp_full_hd/sample');
  });

  it('Creates a cloudinaryURL with toAnimated', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated webp', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.webp()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/f_webp,fl_animated,fl_awebp/sample');
  });

  it('Creates a cloudinaryURL with toAnimated and delay', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated('gif').delay(20))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated/sample');
  });

  it('Creates a cloudinaryURL with toAnimated, delay, sampling', () => {
    const url = createNewVideo('sample')
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()).delay(20).sampling('4s'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/video/upload/dl_20,f_gif,fl_animated,vs_4s/sample');
  });
});
