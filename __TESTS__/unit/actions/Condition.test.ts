import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import TransformableImage from "../../../src/transformation/TransformableImage";
import {set} from "../../../src/actions/variable/Variable";
import Resize from "../../../src/actions/resize/Resize";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as ConditionESM from "../../../src/actions/condition/Condition";
import Condition from "../../../src/actions/condition/Condition";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Condition', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(ConditionESM, Condition);
  });

  it('Ensures Condition namespace is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.ifCondition(Condition.fromExpression('ar >= 1.0'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with condition =', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar = 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_eq_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition !=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar != 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_ne_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition <', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar < 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_lt_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition >', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar > 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_gt_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition <=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar <= 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_lte_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition >=', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('ar >= 1.0'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_ar_gte_1.0/if_end/sample');
  });

  it('Creates a cloudinaryURL with condition ar > 0.65 and w > 1000', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 30))
      .ifCondition(Condition.fromExpression('ar > 0.65 and w > 1000'))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/if_ar_gt_0.65_and_w_gt_1000/if_end/sample');
  });

  it('Creates a cloudinaryURL with elseIf', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .ifCondition(Condition.fromExpression('w <= 500'))
      .resize(Resize.crop(400))
      .ifElse()
      .resize(Resize.crop(500))
      .endIfCondition()
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/if_w_lte_500/c_crop,w_400/if_else/c_crop,w_500/if_end/sample');
  });

});
