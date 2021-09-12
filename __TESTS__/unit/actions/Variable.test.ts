import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {setFloat, setInteger, setString, Variable} from "../../../src/actions/variable";
import {Expression} from "../../../src/qualifiers/expression";

const {set} = Variable;
const {expression} = Expression;

const cases: Record<string, [string, string]> = {
  'empty string is not affected': ['', ''],
  'single space is replaced with a single underscore': [' ', ' '],
  'blank string is replaced with a single underscore': ['   ', '   '],
  'underscore is not affected': ['_', '_'],
  'sequence of underscores and spaces is unchanged': [' _ __  _', ' _ __  _'],
  'arbitrary text is not affected': ['foobar', 'foobar'],
  'double ampersand replaced with and operator': ['foo && bar', 'foo_and_bar'],
  'double ampersand with no space at the end is not affected': ['foo&&bar', 'foo&&bar'],
  'width recognized as variable and replaced with w': ['width', 'w'],
  'initial aspect ratio recognized as variable and replaced with iar': ['initial_aspect_ratio', 'iar'],
  '$width recognized as user variable and not affected': ['$width', '$width'],
  '$initial_aspect_ratio recognized as user variable followed by aspect_ratio variable': [
    '$initial_aspect_ratio',
    '$initial_ar'
  ],
  '$mywidth recognized as user variable and not affected': ['$mywidth', '$mywidth'],
  '$widthwidth recognized as user variable and not affected': ['$widthwidth', '$widthwidth'],
  '$_width recognized as user variable and not affected': ['$_width', '$_width'],
  '$__width recognized as user variable and not affected': ['$__width', '$__width'],
  '$$width recognized as user variable and not affected': ['$$width', '$$width'],
  '$height recognized as user variable and not affected': ['$height_100', '$height_100'],
  '$heightt_100 recognized as user variable and not affected': ['$heightt_100', '$heightt_100'],
  '$$height_100 recognized as user variable and not affected': ['$$height_100', '$$height_100'],
  '$heightmy_100 recognized as user variable and not affected': ['$heightmy_100', '$heightmy_100'],
  '$myheight_100 recognized as user variable and not affected': ['$myheight_100', '$myheight_100'],
  '$heightheight_100 recognized as user variable and not affected': [
    '$heightheight_100',
    '$heightheight_100'
  ],
  '$theheight_100 recognized as user variable and not affected': ['$theheight_100', '$theheight_100'],
  '$__height_100 recognized as user variable and not affected': ['$__height_100', '$__height_100']
};

describe('Tests for Transformation Action -- Variable', () => {
  it('tests expressions values', () => {
    Object.keys(cases).forEach(function (testDescription) {
      const [input, expected] = cases[testDescription];
      expect(expression(input).toString()).toBe(expected);
    });
  });

  it('tests common variable values', () => {
    expect(set('a', 30).toString()).toBe('$a_30');
    expect(set('a', '30').toString()).toBe('$a_!30!');
  });

  it('tests setFloat with common variable values', () => {
    expect(setFloat('a', -1).toString()).toBe(`$a_-1.0`);
    expect(setFloat('a', 0).toString()).toBe(`$a_0.0`);
    expect(setFloat('a', 1).toString()).toBe(`$a_1.0`);
    expect(setFloat('a', 0.01).toString()).toBe(`$a_0.01`);
  });

  it('tests setInteger with common variable values', () => {
    expect(setInteger('a', -1).toString()).toBe(`$a_-1`);
    expect(setInteger('a', 0).toString()).toBe(`$a_0`);
    expect(setInteger('a', 0.9).toString()).toBe(`$a_1`);
    expect(setInteger('a', 1).toString()).toBe(`$a_1`);
    expect(setInteger('a', 0.01).toString()).toBe(`$a_0`); // Round down
  });

  it('tests setString with common variable values', () => {
    // Strings are trivially supported, so this test tests for numbers
    expect(setString('a', -1).toString()).toBe(`$a_!-1!`);
    expect(setString('a', 0).toString()).toBe(`$a_!0!`);
    expect(setString('a', 1).toString()).toBe(`$a_!1!`);
    expect(setString('a', 0.01).toString()).toBe(`$a_!0.01!`);
  });

  it('Creates a cloudinaryURL with number variable', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 30))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30/sample');
  });

  it('Creates a cloudinaryURL with number variable asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 30).asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30_to_f/sample');
  });

  it('Creates a cloudinaryURL with number variable asInteger', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 30).asInteger())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_30_to_i/sample');
  });

  it('Creates a cloudinaryURL with a string variable', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 'bbb'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!/sample');
  });

  it('Creates a cloudinaryURL with a string variable and asInteger', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 'bbb').asInteger())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!_to_i/sample');
  });

  it('Creates a cloudinaryURL with a string variable and asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(set('a', 'bbb').asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$a_!bbb!_to_f/sample');
  });

  it('Creates a cloudinaryURL with expression', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.set('myexp', Expression.expression('initial_width + 100 / 3')))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_iw_add_100_div_3/sample');
  });

  it('Creates a cloudinaryURL with expression and asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.set('myexp', expression('initial_width + 100 / 3')).asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_iw_add_100_div_3_to_f/sample');
  });

  it('Creates a cloudinaryURL with array', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.set('list', ['a', 'b', 'c']))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$list_!a:b:c!/sample');
  });

  it('Creates a cloudinaryURL with setReference', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setAssetReference('myexp', 'my_file'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setReference and asInteger', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setAssetReference('myexp', 'my_file').asInteger())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setReference and asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setAssetReference('myexp', 'my_file').asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ref:!my_file!_to_f/sample');
  });

  it('Creates a cloudinaryURL with setFromContext', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromContext('myexp', 'my_file'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromContext and asInteger', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromContext('myexp', 'my_file').asInteger())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromContext and asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromContext('myexp', 'my_file').asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_ctx:!my_file!_to_f/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromMetadata('myexp', 'my_file'))
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata and asInteger', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromMetadata('myexp', 'my_file').asInteger())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!_to_i/sample');
  });

  it('Creates a cloudinaryURL with setFromMetadata and asFloat', () => {
    const url = createNewImage('sample')
      .addVariable(Variable.setFromMetadata('myexp', 'my_file').asFloat())
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/$myexp_md:!my_file!_to_f/sample');
  });

  it('Tests special cases are not modified in expressions', () => {
    ['$myheight', '$heightheight', '$theheight', '$__height'].forEach((exp: string) => {
      expect(Expression.expression(exp).toString()).toBe(exp);
    });
  });
});
