import * as Variable from '../../../src/actions/variable/Variable';
import * as Expression from '../../../src/values/expression/Expression';
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const {set} = Variable;
const {expression} = Expression;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Variable', () => {
  it('Ensures Variable namespace is accepted as an action to ImageTransformation', () => {
    const tImage = new CloudinaryImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.addVariable(Variable.set('a', 30))
    ).toEqual(tImage);
  });
  it('Ensures variable is accepted as an action to ImageTransformation', () => {
    const tImage = new CloudinaryImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.addVariable(set('a', 30))
    ).toEqual(tImage);
  });
  it('Creates a cloudinaryURL with number variable', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });

  it('Creates a cloudinaryURL with number variable asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 30).asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30_to_f/sample');
  });

  it('Creates a cloudinaryURL with number variable asInteger', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 30).asInteger())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30_to_i/sample');
  });

  it('Creates a cloudinaryURL with a string variable', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });

  it('Creates a cloudinaryURL with a string variable and asInteger', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 'bbb').asInteger())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!_to_i/sample');
  });

  it('Creates a cloudinaryURL with a string variable and asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 'bbb').asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!_to_f/sample');
  });

  it('Creates a cloudinaryURL with expression', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('myexp', Expression.expression('initial_width + 100 / 3')))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_iw_add_100_div_3/sample');
  });

  it('Creates a cloudinaryURL with expression and asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('myexp', expression('initial_width + 100 / 3')).asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_iw_add_100_div_3_to_f/sample');
  });

  it('Creates a cloudinaryURL with array', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('list', ['a', 'b', 'c']))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$list_!a:b:c!/sample');
  });

  it('Creates a cloudinaryURL with setReference', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setReference('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setReference and asInteger', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setReference('myexp', 'my_file').asInteger())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setReference and asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setReference('myexp', 'my_file').asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!_to_f/sample');
  });

  it('Creates a cloudinaryURL with setFromContext', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromContext('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromContext and asInteger', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromContext('myexp', 'my_file').asInteger())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromContext and asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromContext('myexp', 'my_file').asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!_to_f/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromMetadata('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata and asInteger', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromMetadata('myexp', 'my_file').asInteger())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata and asFloat', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromMetadata('myexp', 'my_file').asFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!_to_f/sample');
  });

});
