import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import {PSDTools} from "../../../src/actions/psdTools";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- PSDTools', () => {
  it('Creates a cloudinaryURL with clip number', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip(9))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip,pg_9/sample');
  });

  it('Creates a cloudinaryURL with clip string', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip("path"))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip,pg_name:path/sample');
  });

  it('Creates a cloudinaryURL with clip evenOdd', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.clip(9).evenOdd())
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/fl_clip_evenodd,pg_9/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byNumber', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byNumber(4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byRange', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byRange(4, 10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4-10/sample');
  });

  it('Creates a cloudinaryURL with getLayer.byName', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.getLayer().byName('sample'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_name:sample/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byIndex', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.smartObject().byIndex(8).byIndex(5))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_embedded:8;5/sample');
  });

  it('Creates a cloudinaryURL with smartObject.byFileName', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .psdTools(PSDTools.smartObject().byFileName('myFile').byFileName('myFile2'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_embedded:name:myFile;myFile2/sample');
  });

  it('Uses multiple qualifiers', () => {
    expect(PSDTools
      .getLayer()
      .byNumber(1)
      .byRange(5, 7)
      .toString()
    ).toBe('pg_1;5-7'); // pg_1;5-7
    expect(PSDTools
      .getLayer()
      .byRange(4, 7)
      .byNumber(9)
      .toString()
    ).toBe('pg_4-7;9');
    expect(PSDTools
      .getLayer()
      .byName("lala")
      .byName('fofo')
      .toString()
    ).toBe('pg_name:lala;fofo');
  });
});
