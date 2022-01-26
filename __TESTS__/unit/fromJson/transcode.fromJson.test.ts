import {fromJson} from "../../../src/internal/fromJson";

describe('transcode.fromJson', () => {
  it('should generate a url with transcode actions from array of models', function () {
    const transformation = fromJson({actions:[
      { actionType: 'keyframeInterval', interval: 20},
    ]});

    expect(transformation.toString()).toStrictEqual([
      'ki_20.0',
    ].join('/'));
  });
});
