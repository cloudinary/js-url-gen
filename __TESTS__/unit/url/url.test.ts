import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {CloudinaryImage} from "../../../src";
import {Resize} from "../../../src/actions/resize";
import URLConfig from "../../../src/config/URLConfig";
import {Rotate} from "../../../src/actions/rotate";


describe('Tests for URL configuration', () => {
  it.skip('should support external cname with cdn_subdomain on', () => {
    const urlConfig = new URLConfig({
      cname: 'hello.com',
      cdnSubdomain: true
    });

    const url = createNewImage('test', {}, urlConfig).toURL();
    expect(url).toEqual('https://a2.hello.com/test123/image/upload/test');
  });

  it.skip('should allow to shorted image/upload urls', () => {
    const urlConfig = new URLConfig({
      shorten: true
    });

    const url = createNewImage('test', {}, urlConfig).toURL();
    expect(url).toEqual('https://res.cloudinary.com/test123/iu/test');
  });

  it.skip('should support url_suffix in shared distribution', () => {
    const image = createNewImage('test');
    image.suffix = 'hello';

    expect(image.toURL()).toEqual('https://res.cloudinary.com/test123/images/test/hello');

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://res.cloudinary.com/test123/images/a_0/test/hello');
  });

  it.skip('should support url_suffix for private_cdn', () => {
    const urlConfig = new URLConfig({
      privateCdn: true
    });

    const image = createNewImage('test', {}, urlConfig);
    image.suffix = 'hello';

    expect(image.toURL()).toEqual('https://res.cloudinary.com/test123/images/test/hello');

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://test123-res.cloudinary.com/images/a_0/test/hello');
  });

  it.skip('should disallow url_suffix in non upload types', () => {
    const urlConfig = new URLConfig({
      privateCdn: true,
      type: 'facebook'
    });

    const image = createNewImage('test', {}, urlConfig);
    image.suffix = 'hello';

    expect(image.toURL()).toThrow();
  });

  it.skip('should disallow url_suffix with / or .', () => {
    const urlConfig = new URLConfig({
      privateCdn: true
    });

    const image = createNewImage('test', {}, urlConfig);
    image.suffix = 'hello/world';

    expect(image.toURL()).toThrow();

    image.suffix = 'hello.world';
    expect(image.toURL()).toThrow();
  });

  it.skip('should support use_root_path in shared distribution', () => {
    const urlConfig = new URLConfig({
      privateCdn: true,
      useRootPath: true
    });

    const image = createNewImage('test', {}, urlConfig);

    expect(image.toURL()).toEqual('https://res.cloudinary.com/test123/test');

    image.suffix = 'hello.world';
    expect(image.toURL()).toThrow();

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://res.cloudinary.com/test123/a_0/test');
  });









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
    const image = new CloudinaryImage('sample', {cloudName: 'demo'}, {});
    const signature = "some-signature";
    //image.signature(signature)
    image.resize(Resize.crop().width(100));
    const url = image.toURL();

    expect(url).toEqual(`https://res.cloudinary.com/demo/image/upload/s--${signature}--/c_crop,w_100/sample`);
  });
});