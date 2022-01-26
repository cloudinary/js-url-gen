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

});
