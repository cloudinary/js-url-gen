import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {Extract} from "../../../src/actions/extract/Extract";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Extract', () => {
  it('Creates a cloudinaryURL with getFrame.byNumber', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .extract(Extract.getFrame().byNumber(4))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4/sample');
  });

  it('Creates a cloudinaryURL with getFrame.byRange', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .extract(Extract.getFrame().byRange(4, 10))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/pg_4-10/sample');
  });


  it('Uses multiple qualifiers', () => {
    expect(Extract
      .getFrame()
      .byNumber(1)
      .byRange(5, 7)
      .toString()
    ).toBe('pg_1;5-7'); // pg_1;5-7

    expect(Extract
      .getFrame()
      .byRange(4, 7)
      .byNumber(9)
      .toString()
    ).toBe('pg_4-7;9');
  });

  it('Uses multiple qualifeirs in getPage', () => {
    expect(Extract
      .getPage()
      .byNumber(1)
      .byRange(5, 7)
      .toString()
    ).toBe('pg_1;5-7'); // pg_1;5-7

    expect(Extract
      .getPage()
      .byRange(4, 7)
      .byNumber(9)
      .toString()
    ).toBe('pg_4-7;9');
  });
});
