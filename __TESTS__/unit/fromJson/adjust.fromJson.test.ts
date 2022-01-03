import {fromJson} from "../../../src/internal/fromJson";

describe('adjust.fromJson', () => {
  it('should generate a url with adjust actions from array of models', function () {
    const transformation = fromJson([
      { actionType: 'improve', mode: 'outdoor', blend: 30},
      { actionType: 'unsharpMask', strength: 50},
      { actionType: 'saturation', level: 40}
    ]);

    expect(transformation.toString()).toStrictEqual([
      'e_improve:outdoor:30',
      'e_unsharp_mask:50',
      'e_saturation:40'
    ].join('/'));
  });
});
