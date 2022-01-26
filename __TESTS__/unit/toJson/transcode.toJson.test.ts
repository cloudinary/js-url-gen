import {Transformation} from "../../../src";
import {Transcode} from "../../../src/actions/transcode";

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

});
