import Variable, {set} from '../../../src/actions/variable/Variable';
import * as VariableESM from '../../../src/actions/variable/Variable';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Variable', () => {
  it ('Ensures ESM Matches Default', () => {
    expectESMToMatchDefault(VariableESM, Variable);
  });

  it('Ensures Variable namespace is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.addVariable(Variable.set('a', 30))
    ).toEqual(tImage);
  });
  it('Ensures variable is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.addVariable(set('a', 30))
    ).toEqual(tImage);
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(set('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable bbb', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });

  it('Creates a cloudinaryURL with expression', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('myexp', 'initial_width + 100 / 3'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_iw_add_100_div_3/sample');
  });

  it('Creates a cloudinaryURL with variable and convertToFloat', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('myexp', 'bbb').convertToFloat())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_!bbb!_to_f/sample');
  });

  it('Creates a cloudinaryURL with variable and convertToNumber', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('myexp', 'bbb').convertToNumber())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_!bbb!_to_i/sample');
  });

  it('Creates a cloudinaryURL with array', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.set('list', ['a', 'b', 'c']))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$list_!a:b:c!/sample');
  });

  it('Creates a cloudinaryURL with setReference', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setReference('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setReference and convertToNumber', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setReference('myexp', 'my_file').convertToNumber())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromContext', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromContext('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromContext and convertToNumber', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromContext('myexp', 'my_file').convertToNumber())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromMetadata('myexp', 'my_file'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata and convertToNumber', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .addVariable(Variable.setFromMetadata('myexp', 'my_file').convertToNumber())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!_to_i/sample');
  });
});
