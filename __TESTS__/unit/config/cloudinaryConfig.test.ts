import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import AccountConfig from "../../../src/config/AccountConfig";
import URLConfig from "../../../src/config/URLConfig";
import CloudConfig from "../../../src/config/CloudConfig";

describe('Tests for CloudinaryConfiguration', () => {
  it('Creates a CloudinaryConfig with defaults', () => {
    const conf = new CloudinaryConfig({});

    expect(conf.account).toEqual({});
    expect(conf.cloud).toEqual({});
    expect(conf.url).toEqual({});
  });

  it('Will populate the account configuration', () => {
    const conf = new CloudinaryConfig({
      account: {
        provisioningApiKey: 'key',
        provisioningApiSecret: 'secret',
        accountID: 'abc'
      }
    });

    expect(conf.account.provisioningApiKey).toBe('key');
    expect(conf.account.provisioningApiSecret).toBe('secret');
    expect(conf.account.accountID).toBe('abc');
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
    const error = console.error;
    // mute the errors for the test
    console.error = () => {};
    const mockedFunction = jest.spyOn(console, 'error');


    new CloudinaryConfig({
      cloud:{
        'fakeKey': true
      },
      url: {
        'fakeKey': true
      },
      account: {
        'fakeKey': true
      }
    });

    // ensure expected result
    expect(mockedFunction).toHaveBeenCalledTimes(3);

    // Restore the globals
    mockedFunction.mockRestore();
    console.error = error;
  });

  it('Will log errors when called directly with invalid types', () => {
    const error = console.error;
    // mute the errors for the test
    console.error = () => {};
    const mockedFunction = jest.spyOn(console, 'error');


    // Configs expect objects as input, anything else will log an error
    new AccountConfig('foo');
    new CloudConfig('foo');
    new URLConfig('foo');

    new AccountConfig([]);
    new CloudConfig([]);
    new URLConfig([]);

    // ensure expected result
    expect(mockedFunction).toHaveBeenCalledTimes(6);

    // Restore the globals
    mockedFunction.mockRestore();
    console.error = error;
  });

  it('Can extend the configuration', () => {
    const conf = new CloudinaryConfig({
      cloud:{
        apiSecret: 'abc'
      }
    });

    expect(conf.cloud.apiSecret).toBe('abc');

    const newConf = conf.extend({
      cloud: {
        apiKey: 'xyz'
      }
    });

    expect(newConf.cloud.apiKey).toBe('xyz');
  });
});
