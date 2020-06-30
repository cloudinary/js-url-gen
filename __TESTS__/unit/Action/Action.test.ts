import Action from '../../../src/actions/Action';
import Param from '../../../src/parameters/Param';
import Flag from '../../../src/parameters/Flag';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action', () => {
  it('Creates a cloudinaryURL with new action while passing a param to addParam()', () => {
    const action = new Action().addParam(new Param('a', 90));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_90/sample');
  });
  it('Creates a cloudinaryURL with new action while passing an array to addParam()', () => {
    const action = new Action().addParam(new Param('a', [90, 80]));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_90.80/sample');
  });
  it('Creates a cloudinaryURL with new action using addValue()', () => {
    const action = new Action().addParam(new Param('a', [90, 80]).addValue(70));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/a_90.80.70/sample');
  });
  it('Creates a cloudinaryURL with new action while calling addParam twice', () => {
    const action = new Action()
      .addParam(new Param('w', 100))
      .addParam(new Param('c', 'fill'));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,w_100/sample');
  });
  it('Creates a cloudinaryURL with new action, overwriting existing param', () => {
    const action = new Action()
      .addParam(new Param('w', 100))
      .addParam(new Param('w', 200));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/w_200/sample');
  });

  it('Creates a cloudinaryURL with new action while adding a single flag', () => {
    const action = new Action()
      .addParam(new Param('l', 'sample'))
      .addFlag(new Flag('layer_apply'));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_layer_apply,l_sample/sample');
  });

  it('Creates a cloudinaryURL with new action while adding multiple flags', () => {
    const action = new Action()
      .addParam(new Param('l', 'sample'))
      .addFlag(new Flag('first_flag'))
      .addFlag(new Flag('second_flag'));

    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_first_flag.second_flag,l_sample/sample');
  });

  it('Correctly sorts params', () => {
    const action = new Action()
      .addParam(new Param('b', '2'))
      .addFlag(new Flag('a'))
      .addParam(new Param('a', '1'))
      .addFlag(new Flag('b'))
      .addParam(new Param('c', '3'));

    expect(action.toString()).toBe('a_1,b_2,c_3,fl_a.b');
  });
});
