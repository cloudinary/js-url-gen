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

  it('jpg.progressive.semi()', () => {
    const transformation = fromJson([
      {
        progressive: { mode: 'semi' },
        actionType: 'format',
        formatType: 'jpg'
      }
    ]);

    expect(transformation.toString()).toStrictEqual('f_jpg,fl_progressive:semi');
  });

  it('gif.lossy()', () => {
    const transformation = fromJson([
      {
        actionType: 'format',
        formatType: 'gif',
        lossy: true
      }
    ]);

    expect(transformation.toString()).toStrictEqual('f_gif,fl_lossy');
  });
});
