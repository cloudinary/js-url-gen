import {Transformation} from "../../../src";
import {Transcode} from "../../../src/actions/transcode";
import {AudioCodec} from "../../../src/qualifiers/audioCodec";
import {AudioFrequency} from "../../../src/qualifiers/audioFrequency";

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
});
