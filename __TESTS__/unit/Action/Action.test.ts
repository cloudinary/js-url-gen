import Action from '../../../src/sdk/Action';
import Qualifier from '../../../src/sdk/qualifier/Qualifier';
import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import QualifierValue from "../../../src/sdk/qualifier/QualifierValue";
import {FlagQualifier} from "../../../src/values/flag/FlagQualifier";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action', () => {
  it('Creates a cloudinaryURL with new action while passing a qualifier to addQualifier()', () => {
    const action = new Action().addQualifier(new Qualifier('a', 90));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/a_90/sample');
  });
  it('Creates a cloudinaryURL with new action while passing an array to addQualifier()', () => {
    const action = new Action().addQualifier(new Qualifier('a', new QualifierValue([90, 80]).setDelimiter('.')));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/a_90.80/sample');
  });
  it('Creates a cloudinaryURL with new action using addValue()', () => {
    const action = new Action().addQualifier(new Qualifier('a', new QualifierValue([90, 80]).setDelimiter('.')).addValue(70));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/a_90.80.70/sample');
  });
  it('Creates a cloudinaryURL with new action while calling addQualifier twice', () => {
    const action = new Action()
      .addQualifier(new Qualifier('w', 100))
      .addQualifier(new Qualifier('c', 'fill'));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/c_fill,w_100/sample');
  });
  it('Creates a cloudinaryURL with new action, overwriting existing qualifier', () => {
    const action = new Action()
      .addQualifier(new Qualifier('w', 100))
      .addQualifier(new Qualifier('w', 200));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/w_200/sample');
  });

  it('Creates a cloudinaryURL with new action while adding a single flag', () => {
    const action = new Action()
      .addQualifier(new Qualifier('l', 'sample'))
      .addFlag(new FlagQualifier('layer_apply'));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_layer_apply,l_sample/sample');
  });

  it('Creates a cloudinaryURL with new action while adding multiple flags', () => {
    const action = new Action()
      .addQualifier(new Qualifier('l', 'sample'))
      .addFlag(new FlagQualifier('first_flag'))
      .addFlag(new FlagQualifier('second_flag'));

    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .addAction(action)
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_first_flag.second_flag,l_sample/sample');
  });

  it('Correctly sorts qualifiers', () => {
    const action = new Action()
      .addQualifier(new Qualifier('b', '2'))
      .addFlag(new FlagQualifier('a'))
      .addQualifier(new Qualifier('a', '1'))
      .addFlag(new FlagQualifier('b'))
      .addQualifier(new Qualifier('c', '3'));

    expect(action.toString()).toBe('a_1,b_2,c_3,fl_a.b');
  });
});
