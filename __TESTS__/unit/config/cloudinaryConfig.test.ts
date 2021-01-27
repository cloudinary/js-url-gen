import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import URLConfig from "../../../src/config/URLConfig";
import CloudConfig from "../../../src/config/CloudConfig";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";

describe('Tests for CloudinaryConfiguration', () => {
  it('Creates a CloudinaryConfig with defaults', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      }
    });

    expect(conf.cloud).toEqual({
      cloudName: 'foo'
    });
    expect(conf.url).toEqual({
      secure: true
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
    console.warn = () => {
    };
    const mockedFunction = jest.spyOn(console, 'warn');

    const config = {
      cloud: {
        'fakeKey': true,
        cloudName: 'foo'
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
    console.warn = () => {
    };
    const mockedFunction = jest.spyOn(console, 'warn');


    // Configs expect objects as input, but we allow invalid types without throwing
    expect(() => {
      new CloudConfig('foo' as any);
    }).toThrow();

    expect(() => {
      new CloudConfig([] as any);
    }).toThrow();

    expect(new URLConfig([])).toEqual({
      secure: true
    });

    // Expect no warnings at all
    expect(mockedFunction).toHaveBeenCalledTimes(0);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Can extend the configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo',
        apiSecret: 'abc'
      }
    });

    expect(conf.cloud.apiSecret).toBe('abc');

    const newConf = conf.extend({
      cloud: {
        apiKey: 'xyz',
        cloudName: 'foo'
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
    const url = createNewImage('sample', {}, {secure: false})
      .toURL();

    expect(url).toContain('http://');
  });
  it('should allow overriding cloudName in config', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      }
    });

    conf.cloud.cloudName = 'demo'

    expect(conf.cloud).toEqual({
      cloudName: 'demo'
    });
  });

  /*
  // These tests should be "translated" to js base code when these missing features are added:
  it('should use resource_type from options', function() {
      return test_cloudinary_url('test', {
        resource_type: 'raw'
      }, protocol + '//res.cloudinary.com/test123/raw/upload/test', {});
    });

   it('should support external cname with cdn_subdomain on', function() {
      return test_cloudinary_url('test', {
        cname: 'hello.com',
        cdn_subdomain: true
      }, protocol + '//a2.hello.com/test123/image/upload/test', {});
    });
    it('should allow to shorted image/upload urls', function() {
      return test_cloudinary_url('test', {
        shorten: true
      }, protocol + '//res.cloudinary.com/test123/iu/test', {});
    });
    it("should support url_suffix in shared distribution", function() {
      test_cloudinary_url("test", {
        url_suffix: "hello"
      }, protocol + "//res.cloudinary.com/test123/images/test/hello", {});
      return test_cloudinary_url("test", {
        url_suffix: "hello",
        angle: 0
      }, protocol + "//res.cloudinary.com/test123/images/a_0/test/hello", {});
    });
    it('should disallow url_suffix in non upload types', function() {
      return expect(function() {
        return cl.url('test', {
          url_suffix: 'hello',
          private_cdn: true,
          type: 'facebook'
        });
      }).toThrow();
    });
    it('should disallow url_suffix with / or .', function() {
      expect(function() {
        return cl.url('test', {
          url_suffix: 'hello/world',
          private_cdn: true
        });
      }).toThrow();
      return expect(function() {
        return cl.url('test', {
          url_suffix: 'hello.world',
          private_cdn: true
        });
      }).toThrow();
    });
    it('should support url_suffix for private_cdn', function() {
      test_cloudinary_url('test', {
        url_suffix: 'hello',
        private_cdn: true
      }, protocol + '//test123-res.cloudinary.com/images/test/hello', {});
      return test_cloudinary_url('test', {
        url_suffix: 'hello',
        angle: 0,
        private_cdn: true
      }, protocol + '//test123-res.cloudinary.com/images/a_0/test/hello', {});
    });
    it('should put format after url_suffix', function() {
      return test_cloudinary_url('test', {
        url_suffix: 'hello',
        private_cdn: true,
        format: 'jpg'
      }, protocol + '//test123-res.cloudinary.com/images/test/hello.jpg', {});
    });
    it('should support url_suffix for raw uploads', function() {
      return test_cloudinary_url('test', {
        url_suffix: 'hello',
        private_cdn: true,
        resource_type: 'raw'
      }, protocol + '//test123-res.cloudinary.com/files/test/hello', {});
    });
    it('should support url_suffix for raw uploads', function() {
      return test_cloudinary_url('test', {
        url_suffix: 'hello',
        private_cdn: true,
        resource_type: 'image',
        type: 'private'
      }, protocol + '//test123-res.cloudinary.com/private_images/test/hello', {});
    });

   */

  /*
    it('should support use_root_path in shared distribution', function() {
      test_cloudinary_url('test', {
        use_root_path: true,
        private_cdn: false
      }, protocol + '//res.cloudinary.com/test123/test', {});
      return test_cloudinary_url('test', {
        use_root_path: true,
        angle: 0,
        private_cdn: false
      }, protocol + '//res.cloudinary.com/test123/a_0/test', {});
    });
    it('should support root_path for private_cdn', function() {
      test_cloudinary_url('test', {
        use_root_path: true,
        private_cdn: true
      }, protocol + '//test123-res.cloudinary.com/test', {});
      return test_cloudinary_url('test', {
        use_root_path: true,
        angle: 0,
        private_cdn: true
      }, protocol + '//test123-res.cloudinary.com/a_0/test', {});
    });
    it('should support globally set use_root_path for private_cdn', function() {
      cl.config('use_root_path', true);
      test_cloudinary_url('test', {
        private_cdn: true
      }, protocol + '//test123-res.cloudinary.com/test', {});
      return delete cl.config().use_root_path;
    });
    it('should support use_root_path together with url_suffix for private_cdn', function() {
      return test_cloudinary_url('test', {
        use_root_path: true,
        private_cdn: true,
        url_suffix: 'hello'
      }, protocol + '//test123-res.cloudinary.com/test/hello', {});
    });
    it('should disallow use_root_path if not image/upload', function() {
      expect(function() {
        return cl.url('test', {
          use_root_path: true,
          private_cdn: true,
          type: 'facebook'
        });
      }).toThrow();
      return expect(function() {
        return cl.url('test', {
          use_root_path: true,
          private_cdn: true,
          resource_type: 'raw'
        });
      }).toThrow();
    });
    it('should generate sprite css urls', function() {
      var result;
      result = cl.sprite_css('test');
      expect(result).toEqual(protocol + '//res.cloudinary.com/test123/image/sprite/test.css');
      result = cl.sprite_css('test.css');
      return expect(result).toEqual(protocol + '//res.cloudinary.com/test123/image/sprite/test.css');
    });
    it('should escape public_ids', function() {
      var results, source, tests;
      tests = {
        'a b': 'a%20b',
        'a+b': 'a%2Bb',
        'a%20b': 'a%20b',
        'a-b': 'a-b',
        'a??b': 'a%3F%3Fb'
      };
      results = [];
      for (source in tests) {
        results.push(test_cloudinary_url(source, {}, protocol + '//res.cloudinary.com/test123/image/upload/' + tests[source], {}));
      }
      return results;
    });
    it('should allow to override protocol', function() {
      var options, result;
      options = {
        'protocol': 'custom:'
      };
      result = cl.url('test', options);
      return expect(result).toEqual('custom://res.cloudinary.com/test123/image/upload/test');
    });
   */
});