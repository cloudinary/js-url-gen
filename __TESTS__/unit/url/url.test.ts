import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {CloudinaryImage} from "../../../src";
import {Resize} from "../../../src/actions/resize";


describe('Tests for URL configuration', () => {
  it.skip('should accept public_id with special characters', () => {
      const url = createNewImage('public%id')
        .toURL();
      expect(url).toEqual('https://res.cloudinary.com/test123/image/upload/public%25id');
    });
  it.skip('should not fail on falsy public_id', () => {
    const url = createNewImage(void 0)
      .toURL();
    expect(url).toEqual(void 0);
  });
  it.skip('url should support signature option', () => {
    const image = new CloudinaryImage('sample', {cloudName:'demo'}, {})
    const signature = "some-signature";
    //image.signature(signature)
    image.resize(Resize.crop().width(100));
    const url = image.toURL();

    expect(url).toEqual(`https://res.cloudinary.com/demo/image/upload/s--${signature}--/c_crop,w_100/sample`);
  });
  describe('window.devicePixelRatio', () => {
    let dpr:any, options:any;
    dpr = window.devicePixelRatio;
    options = {};
    beforeEach(() => {
      //window.devicePixelRatio = 2;
      return options = {
        dpr: 'auto'
      };
    });
    afterEach(() => {
      //window.devicePixelRatio = dpr;
    });
    it.skip('should update dpr when creating an image tag using $.cloudinary.image()', () => {
      let result;
      //result = cl.image('test', options);
      expect(result).toBe('https://res.cloudinary.com/test123/image/upload/dpr_2.0/test');
    });
    describe("round_dpr", () => {
      describe("false", () => {
        return it.skip("should not round up dpr", () => {
          let result;
          //window.devicePixelRatio = 1.3;
          options.round_dpr = false;
          //result = cl.image('test', options);
          return expect(result).toBe('https://res.cloudinary.com/test123/image/upload/dpr_1.3/test');
        });
      });
      return describe("true", () => {
        return it.skip("should round up DPR values", () => {
          let result;
          options.round_dpr = true;
          //result = cl.image('test', options);
          return expect(result).toBe('https://res.cloudinary.com/test123/image/upload/dpr_2.0/test');
        });
      });
    });
  });
});