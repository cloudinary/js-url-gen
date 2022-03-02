import {Transformation} from "../../../src";
import {Transcode} from "../../../src/actions/transcode";
import {AudioCodec} from "../../../src/qualifiers/audioCodec";
import {AudioFrequency} from "../../../src/qualifiers/audioFrequency";
import {AnimatedFormat} from "../../../src/qualifiers/animatedFormat";
import {VideoCodec} from "../../../src/qualifiers/videoCodec";
import {VideoCodecProfile} from "../../../src/qualifiers/videoCodecProfile";
import {VideoCodecLevel} from "../../../src/qualifiers/videoCodecLevel";

describe('Transcode toJson()', () => {
  it('transcode.keyframeInterval number', () => {
    const transformation = new Transformation()
      .addAction(Transcode.keyframeInterval(4));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'keyframeInterval',
          interval: 4
        }
      ]
    });
  });

  it('transcode.fps', () => {
    const transformation = new Transformation()
      .addAction(Transcode.fps(4));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'fps',
          fps: 4
        }
      ]
    });
  });

  it('transcode.fpsRange', () => {
    const transformation = new Transformation()
      .addAction(Transcode.fpsRange(4, 7));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'fps',
          fps: {from: 4, to: 7}
        }
      ]
    });
  });

  it('transcode.fpsRange from', () => {
    const transformation = new Transformation()
      .addAction(Transcode.fpsRange(4));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'fps',
          fps: {from: 4}
        }
      ]
    });
  });

  it('transcode.bitRate', () => {
    const transformation = new Transformation()
      .addAction(Transcode.bitRate('500k'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'bitRate',
          bitRate: '500k'
        }
      ]
    });
  });

  it('transcode.bitRate.constant', () => {
    const transformation = new Transformation()
      .addAction(Transcode.bitRate('500k').constant());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'bitRate',
          bitRate: '500k',
          constant: true
        }
      ]
    });
  });

  it('transcode.audioCodec', () => {
    const transformation = new Transformation()
      .addAction(Transcode.audioCodec(AudioCodec.aac()));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'audioCodec',
          audioCodec: 'aac',
        }
      ]
    });
  });

  it('transcode.audioFrequency', () => {
    const transformation = new Transformation()
      .addAction(Transcode
        .audioFrequency('freq8000'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'audioFrequency',
          audioFrequencyType: 'freq8000',
        }
      ]
    });
  });

  it('transcode.streamingProfile', () => {
    const transformation = new Transformation()
      .addAction(Transcode
        .streamingProfile("full_hd"));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'streamingProfile',
          profile: 'fullHd',
        }
      ]
    });
  });

  it('transcode.animatedFormat', () => {
    const transformation = new Transformation()
      .addAction(Transcode
        .toAnimated('gif').delay(20).sampling('4s'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'toAnimated',
          animatedFormat: 'gif',
          delay: 20,
          sampling: '4s'
        }
      ]
    });
  });

  it('transcode.videoCodec', () => {
    const transformation = new Transformation()
      .addAction(Transcode.videoCodec(
        VideoCodec.h264()
      ));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'videoCodec',
          videoCodec: {
            videoCodecName: 'h264'
          }
        }
      ]
    });
  });

  it('transcode.videoCodec advanced', () => {
    const transformation = new Transformation()
      .addAction(Transcode.videoCodec(
        VideoCodec.h264()
          .profile(VideoCodecProfile.baseline())
          .level(VideoCodecLevel.vcl31())
      ));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'videoCodec',
          videoCodec: {
            videoCodecName: 'h264',
            profile: 'baseline',
            level:  3.1
          }
        }
      ]
    });
  });
});
