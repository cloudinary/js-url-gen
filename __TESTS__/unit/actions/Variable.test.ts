import Variable, {variable} from '../../../src/actions/variable/Variable';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Variable', () => {
  it('Ensures Variable namespace is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.variable(Variable.variable('a', 30))
    ).toEqual(tImage);
  });
  it('Ensures variable is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.variable(variable('a', 30))
    ).toEqual(tImage);
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(variable('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(variable('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(Variable.variable('a', 30))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });
  it('Creates a cloudinaryURL with variable', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .variable(Variable.variable('a', 'bbb'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });

  it.skip('Tests with expression', () => {
    expect(variable('myexp', 'initial_width + 100 / 3').toString()).toBe('$myexp_iw_sub_100_div_3/sample');
  });

  it.skip('Tests with a variable', () => {
    expect(variable('myexp', Variable.initialWidth().subtract().int(100).divide().int(3)).toString())
      .toBe('$myexp_iw_sub_100_div_3');
  });

  it.skip('Tests with a array', () => {
    expect(variable('list', ['a', 'b', 'c']).toString()).toBe('$list_!a!b!c');
  });

  it.skip('Tests with a Variable Current', () => {
    expect(variable('curr', Variable.current()).toString()).toBe('$curr_current');
  });

  it.skip('Tests with a Variable Reference', () => {
    expect(variable('file', Variable.reference('myfile')).toString()).toBe('$file_ref:!my_file!');
  });

  it.skip('Tests with Variable Color', () => {
    expect(variable('color', Variable.color(Color.red)).toString()).toBe('$color_!red!');
  });

  it.skip('Tests with a Variable RGB', () => {
    expect(variable('color', Variable.color(Color.rgb('#A0B1C2')).toString()).toBe('$color_!rgb:A0B1C2!'));
  });
});
