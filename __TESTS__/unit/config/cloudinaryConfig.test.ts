import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import URLConfig from "../../../src/config/URLConfig";
import CloudConfig from "../../../src/config/CloudConfig";

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
    expect(conf.url).toEqual({});
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
        cdnSubdomain: true,
        cname: 'cname',
        secureCdnSubdomain: true,
        privateCdn: true,
        secure: true,
        secureDistribution: true
      }
    });

    expect(conf.url.forceVersion).toBe(true);
    expect(conf.url.shorten).toBe(true);
    expect(conf.url.signUrl).toBe(true);
    expect(conf.url.longUrlSignature).toBe(true);
    expect(conf.url.useRootPath).toBe(true);
    expect(conf.url.cdnSubdomain).toBe(true);
    expect(conf.url.cname).toBe('cname');
    expect(conf.url.secureCdnSubdomain).toBe(true);
    expect(conf.url.privateCdn).toBe(true);
    expect(conf.url.secure).toBe(true);
    expect(conf.url.secureDistribution).toBe(true);

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
    expect(new URLConfig('foo')).toEqual({});

    expect(() => {
      new CloudConfig([] as any);
    }).toThrow();
    expect(new URLConfig([])).toEqual({});

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
});
