import {fromJson} from "../../../src/internal/fromJson";

describe('adjust.fromJson', () => {
  it('should generate a url with adjust actions from array of models', function () {
    const transformation = fromJson([
      { actionType: 'improve', mode: 'outdoor', blend: 30}
    ]);

    expect(transformation.toString()).toStrictEqual([
      'e_improve:outdoor:30',
    ].join('/'));
  });
});
