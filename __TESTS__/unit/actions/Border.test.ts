import * as Border from '../../../src/actions/border';
import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Border', () => {
  it('Creates a cloudinaryURL with border and color', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.solid( 7, 'red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_red/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #0000ff', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.solid( 7, '#0000ff'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:0000ff/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFF', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.solid( 7, '#FFF'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFF/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFFFFFFF', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.solid( 7, '#FFFFFFFF'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFFFFFFF/sample');
  });
});
