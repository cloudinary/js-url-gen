import {fromJson} from "../../../src/internal/fromJson";

describe('effect.fromJson', () => {
  it('should generate a url with resize actions from array of models', function () {
    const transformation = fromJson([
      { actionType: 'sepia' },
      { actionType: 'boomerang' },
      { actionType: 'grayscale' },
      { actionType: 'advancedRedEye' },
      { actionType: 'negate' },
      { actionType: 'redEye' },
      { actionType: 'reverse' },
      { actionType: 'transition' },
      { actionType: 'shadow', offsetX: 5, color: 'red'},
      { actionType: 'colorize', level: 10, color: 'red' },
      { actionType: 'oilPaint', level: 8 },
      { actionType: 'cartoonify', colorReductionLevel: 80, lineStrength: 70 },
      { actionType: 'outline', width: 100, color: 'lightblue' },
      { actionType: 'blackwhite', level: 40 },
      { actionType: 'accelerate'}

    ]);

    expect(transformation.toString()).toStrictEqual([
      'e_sepia',
      'e_boomerang',
      'e_grayscale',
      'e_adv_redeye',
      'e_negate',
      'e_redeye',
      'e_reverse',
      'e_transition',
      'co_red,e_shadow,x_5',
      'co_red,e_colorize:10',
      'e_oil_paint:8',
      'e_cartoonify:70:80',
      'co_lightblue,e_outline:100',
      'e_blackwhite:40',
      'e_accelerate'
    ].join('/'));
  });
});
