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
        provisioning_api_key: 'key',
        provisioning_api_secret: 'secret',
        account_id: 'abc'
      },
    });

    expect(conf.account.provisioning_api_key).toBe('key');
    expect(conf.account.provisioning_api_secret).toBe('secret');
    expect(conf.account.account_id).toBe('abc');
  });

  it('Will populate cloud configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cdn_subdomain: true,
        cloud_name: 'cloud_name',
        cname: 'cname',
        api_key: 'api_key',
        api_secret: 'api_secret',
        secure_cdn_subdomain: true,
        private_cdn: true,
        secure: true,
        secure_distribution: true,
        ssl_detected: false
      }
    });

    expect(conf.cloud.cdn_subdomain).toBe(true);
    expect(conf.cloud.cloud_name).toBe('cloud_name');
    expect(conf.cloud.cname).toBe('cname');
    expect(conf.cloud.api_key).toBe('api_key');
    expect(conf.cloud.api_secret).toBe('api_secret');
    expect(conf.cloud.secure_cdn_subdomain).toBe(true);
    expect(conf.cloud.secure).toBe(true);
    expect(conf.cloud.secure_distribution).toBe(true);
  });

  it('Will populate URL configuration', () => {
    const conf = new CloudinaryConfig({
      url: {
        force_version: true,
        shorten: true,
        sign_url: true,
        long_url_signature: true,
        use_root_path: true,
        auth_token: {
          token_name: 'abc',
          duration: 'abc',
          start_time: 'abc',
          expiration: 'abc',
          ip: 'abc',
          acl: 'abc',
          url: 'abc',
          key: 'abc'
        }
      }
    });

    expect(conf.url.force_version).toBe(true);
    expect(conf.url.shorten).toBe(true);
    expect(conf.url.sign_url).toBe(true);
    expect(conf.url.long_url_signature).toBe(true);
    expect(conf.url.use_root_path).toBe(true);
    expect(conf.url.auth_token).toEqual({
      token_name: 'abc',
      duration: 'abc',
      start_time: 'abc',
      expiration: 'abc',
      ip: 'abc',
      acl: 'abc',
      url: 'abc',
      key: 'abc'
    });
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
});
