import {fromJson} from "../../../src/internal/fromJson";

describe('transcode.fromJson', () => {
  it('should generate a url with transcode actions from array of models', function () {
    const transformation = fromJson({actions:[
      { actionType: 'keyframeInterval', interval: 20},
      { actionType: 'fps', fps: 6 },
      { actionType: 'fps', fps: {from: 6, to: 8} },
      { actionType: 'fps', fps: {from: 6} }
    ]});

    expect(transformation.toString()).toStrictEqual([
      'ki_20.0',
      'fps_6',
      'fps_6-8',
      'fps_6-'
    ].join('/'));
  });
});
