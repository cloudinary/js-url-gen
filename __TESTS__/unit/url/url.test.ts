import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {CloudinaryImage} from "../../../src";
import {Resize} from "../../../src/actions/resize";

/*
describe('Tests for URL configuration', () => {
  it('should accept public_id with special characters', () => {
      const url = createNewImage('public%id')
        .toURL();
      expect(url).toEqual('https://res.cloudinary.com/test123/image/upload/public%25id');
    });
  it('should not fail on falsy public_id', () => {
    const url = createNewImage(void 0)
      .toURL();
    expect(url).toEqual(void 0);
  });
  it('url should support signature option', () => {
    const image = new CloudinaryImage('sample', {cloudName:'demo'}, {})
    const signature = "some-signature";
    image.sigature(signature)
    image.resize(Resize.crop().width(100));
    const url = image.toURL();

    expect(url).toEqual(`https://res.cloudinary.com/demo/image/upload/s--${signature}--/c_crop,w_100/sample`);
  });
  describe('window.devicePixelRatio', () => {
    var dpr, options;
    dpr = window.devicePixelRatio;
    options = {};
    beforeEach(() => {
      window.devicePixelRatio = 2;
      return options = {
        dpr: 'auto'
      };
    });
    afterEach(() => {
      return window.devicePixelRatio = dpr;
    });
    it('should update dpr when creating an image tag using $.cloudinary.image()', () => {
      var result;
      result = cl.image('test', options);
      return expect(cloudinary.Util.getAttribute(result, 'src')).toBe(protocol + '//res.cloudinary.com/test123/image/upload/dpr_2.0/test');
    });
    describe("round_dpr", () => {
      describe("false", () => {
        return it("should not round up dpr", () => {
          var result;
          window.devicePixelRatio = 1.3;
          options.round_dpr = false;
          result = cl.image('test', options);
          return expect(cloudinary.Util.getAttribute(result, 'src')).toBe(protocol + '//res.cloudinary.com/test123/image/upload/dpr_1.3/test');
        });
      });
      return describe("true", () => {
        return it("should round up DPR values", () => {
          var result;
          options.round_dpr = true;
          result = cl.image('test', options);
          return expect(cloudinary.Util.getAttribute(result, 'src')).toBe(protocol + '//res.cloudinary.com/test123/image/upload/dpr_2.0/test');
        });
      });
    });
  });
});

 */