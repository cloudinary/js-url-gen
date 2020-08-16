import Condition, {fromString} from '../../../src/actions/condition/Condition';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import TransformableImage from "../../../src/transformation/TransformableImage";
import {variable} from "../../../src/actions/variable/Variable";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Condition', () => {
  it('Ensures Condition namespace is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.ifCondition(Condition.fromString('ar >= 1.0'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with condition =', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar = 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_eq_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition !=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar != 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_ne_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition <', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar < 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_lt_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition >', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar > 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_gt_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition <=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar <= 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_lte_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition >=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('ar >= 1.0'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_gte_1.0/sample');
  });

  it('Creates a cloudinaryURL with condition ar > 0.65 and w > 1000', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(variable('a', 30))
      .ifCondition(Condition.fromString('ar > 0.65 and w > 1000'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/if_ar_gt_0.65_and_w_gt_1000/sample');
  });

  it('Creates a cloudinaryURL with elseIf', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('w <= 500'))
      .ifElse()
      .variable(variable('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_w_lte_500/if_else/$a_30/sample');
  });

  it('Creates a cloudinaryURL with elseIf and endIfCondition', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromString('w <= 500'))
      .ifElse()
      .variable(variable('a', 30))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_w_lte_500/if_else/$a_30/if_end/sample');
  });

});
