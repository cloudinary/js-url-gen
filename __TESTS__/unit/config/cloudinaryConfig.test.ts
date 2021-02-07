import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import URLConfig from "../../../src/config/URLConfig";
import CloudConfig from "../../../src/config/CloudConfig";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";

// Mocks to be removed after we have a well defined syntax for the missing features
const test_cloudinary_url = (publicId:string, options:any, expected:any, optionsAfter:any) => {};
const cl = {url:(publicId:string, options:any)=>{}};

describe('Tests for CloudinaryConfiguration', () => {
  it('Creates a CloudinaryConfig with defaults', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName:'foo'
      }
    });

    expect(conf.cloud).toEqual({
      cloudName:'foo'
    });
    expect(conf.url).toEqual({
      secure:true
    });
  });

  it('Will populate cloud configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'cloud_name',
        apiKey: 'api_key',
        apiSecret: 'api_secret'
      }
    });

    expect(conf.cloud.cloudName).toBe('cloud_name');
    expect(conf.cloud.apiKey).toBe('api_key');
    expect(conf.cloud.apiSecret).toBe('api_secret');
  });

  it('Will populate URL configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      },
      url: {
        forceVersion: true,
        shorten: true,
        signUrl: true,
        longUrlSignature: true,
        useRootPath: true,
        cname: 'cname',
        privateCdn: true,
        secure: true,
        secureDistribution: ''
      }
    });

    expect(conf.url.forceVersion).toBe(true);
    expect(conf.url.shorten).toBe(true);
    expect(conf.url.signUrl).toBe(true);
    expect(conf.url.longUrlSignature).toBe(true);
    expect(conf.url.useRootPath).toBe(true);
    expect(conf.url.cname).toBe('cname');
    expect(conf.url.privateCdn).toBe(true);
    expect(conf.url.secure).toBe(true);
    expect(conf.url.secureDistribution).toBe('');

  });

  it('Will log errors when invalid properties are passed as configuration', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');

    const config = {
      cloud:{
        'fakeKey': true,
        cloudName:'foo'
      },
      url: {
        'fakeKey': true,
        secure: true
      }
    };

    new CloudinaryConfig(config);

    // ensure expected result
    expect(mockedFunction).toHaveBeenCalledTimes(2);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Will log errors when called directly with invalid types', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');


    // Configs expect objects as input, but we allow invalid types without throwing
    expect(() => {
      new CloudConfig('foo' as any);
    }).toThrow();

    expect(() => {
      new CloudConfig([] as any);
    }).toThrow();

    expect(new URLConfig([])).toEqual({
      secure:true
    });

    // Expect no warnings at all
    expect(mockedFunction).toHaveBeenCalledTimes(0);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Can extend the configuration', () => {
    const conf = new CloudinaryConfig({
      cloud:{
        cloudName:'foo',
        apiSecret: 'abc'
      }
    });

    expect(conf.cloud.apiSecret).toBe('abc');

    const newConf = conf.extend({
      cloud: {
        apiKey: 'xyz',
        cloudName:'foo'
      }
    });

    expect(newConf.cloud.apiKey).toBe('xyz');
  });

  it('Should set secure to true by default', () => {
    const url = createNewImage('sample')
      .toURL();

    expect(url).toContain('https://');
  });

  it('Should allow setting secure attribute', () => {
    const url = createNewImage('sample', {}, { secure: false})
      .toURL();

    expect(url).toContain('http://');
  });

  it('should allow overriding cloudName in config', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      }
    });

    conf.cloud.cloudName = 'demo';

    expect(conf.cloud).toEqual({
      cloudName: 'demo'
    });
  });

  // These tests should be "translated" to js base code when these missing features are added:
  it.skip('should put format after url_suffix', () => {
    test_cloudinary_url('test', {
      url_suffix: 'hello',
      private_cdn: true,
      format: 'jpg'
    }, 'https://test123-res.cloudinary.com/images/test/hello.jpg', {});
  });
  it.skip('should support url_suffix for raw uploads', () => {
    test_cloudinary_url('test', {
      url_suffix: 'hello',
      private_cdn: true,
      resource_type: 'raw'
    }, 'https://test123-res.cloudinary.com/files/test/hello', {});
  });
  it.skip('should support url_suffix for raw uploads', () => {
    test_cloudinary_url('test', {
      url_suffix: 'hello',
      private_cdn: true,
      resource_type: 'image',
      type: 'private'
    }, 'https://test123-res.cloudinary.com/private_images/test/hello', {});
  });

  it.skip('should support root_path for private_cdn', () => {
    test_cloudinary_url('test', {
      use_root_path: true,
      private_cdn: true
    }, 'https://test123-res.cloudinary.com/test', {});
    test_cloudinary_url('test', {
      use_root_path: true,
      angle: 0,
      private_cdn: true
    }, 'https://test123-res.cloudinary.com/a_0/test', {});
  });
  it.skip('should support globally set use_root_path for private_cdn', () => {
    test_cloudinary_url('test', {
      private_cdn: true,
      use_root_path: true
    }, 'https://test123-res.cloudinary.com/test', {});
  });
  it.skip('should support use_root_path together with url_suffix for private_cdn', () => {
    test_cloudinary_url('test', {
      use_root_path: true,
      private_cdn: true,
      url_suffix: 'hello'
    }, 'https://test123-res.cloudinary.com/test/hello', {});
  });
  it.skip('should disallow use_root_path if not image/upload', () => {
    expect(() => {
      cl.url('test', {
        use_root_path: true,
        private_cdn: true,
        type: 'facebook'
      });
    }).toThrow();
    expect(() => {
      cl.url('test', {
        use_root_path: true,
        private_cdn: true,
        resource_type: 'raw'
      });
    }).toThrow();
  });
  it.skip('should generate sprite css urls', () => {
    let result;
    //result = cl.sprite_css('test');
    expect(result).toEqual('https://res.cloudinary.com/test123/image/sprite/test.css');
    //result = cl.sprite_css('test.css');
    expect(result).toEqual('https://res.cloudinary.com/test123/image/sprite/test.css');
  });
  it.skip('should allow to override protocol', () => {
    const options = {
      'protocol': 'custom:'
    };
    const result = cl.url('test', options);
    expect(result).toEqual('custom://res.cloudinary.com/test123/image/upload/test');
  });
});
