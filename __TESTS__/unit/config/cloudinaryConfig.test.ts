import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import URLConfig from "../../../src/sdk/config/URLConfig";
import CloudConfig from "../../../src/sdk/config/CloudConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";


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
      new CloudConfig('foo' as unknown);
    }).toThrow();

    expect(() => {
      new CloudConfig([] as unknown);
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
    const url = new CloudinaryImage('sample')
      .setConfig({
        cloud: {
          cloudName:'demo'
        }
      })
      .toURL();

    expect(url).toContain('https://');
  });

  it('Should allow setting secure attribute', () => {
    const url = new CloudinaryImage('sample')
      .setConfig({
        cloud: {
          cloudName: 'demo'
        },
        url: {
          secure:false
        }
      })
      .toURL();

    expect(url).toContain('http://');
  });
});
