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
      { actionType: 'shadow', offsetX: 5, color: 'red'}
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
      'co_red,e_shadow,x_5'
    ].join('/'));
  });
});