import * as PSDTools from "../../../src/actions/psdTools/PsdTools";
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as PSDToolsESM from '../../../src/actions/psdTools/PsdTools';
import expectESMToMatchDefault from '../../TestUtils/expectESMToMatchDefault';


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- PSDTools', () => {
  it ('Ensures ESM Matches Default', () => {
    expectESMToMatchDefault(PSDToolsESM, PSDTools);
  });

  it('Creates a cloudinaryURL with clip number', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip(9))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_clip,pg_9/sample');
  });

  it('Creates a cloudinaryURL with clip string', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip("path"))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_clip,pg_name:path/sample');
  });

  it('Creates a cloudinaryURL with clip evenOdd', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip(9).evenOdd())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/fl_clip_evenodd,pg_9/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byNumber', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byNumber(4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_4/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byRange', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byRange(4, 10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_4-10/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byName', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byName('sample'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_name:sample/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byIndex', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.smartObject().byIndex(8))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_embedded:8/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byFileName', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.smartObject().byFileName('myFile'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/pg_embedded:name:myFile/sample');
  });

});
