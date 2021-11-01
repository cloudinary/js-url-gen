import {fromJson} from "../../../src/internal/fromJson";

describe('delivery.fromJson', () => {
  it('should generate a transformation string from colorSpace action', function () {
    const transformation = fromJson([
      {actionType: 'colorSpace', mode: 'srgbTrueColor'}
    ]);

    expect(transformation.toString()).toStrictEqual('cs_srgb:truecolor');
  });
  it('should generate a transformation string from colorSpaceFromIcc action', function () {
    const transformation = fromJson([
      {actionType: 'colorSpaceFromICC', publicId: 'sample'}
    ]);

    expect(transformation.toString()).toStrictEqual('cs_icc:sample');
  });
});
