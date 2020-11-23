import TransformableImage from "../../src/transformation/TransformableImage";
import * as Resize from "../../src/actions/resize/Resize";
import ICloudinaryConfigurations from "../../src/interfaces/Config/ICloudinaryConfigurations";
import IURLConfig from "../../src/interfaces/Config/IURLConfig";
import CloudinaryConfig from "../../src/config/CloudinaryConfig";
import createCloudinaryURL from "../../src/url/cloudinaryURL";

/**
 * @description Create CloudinaryURL based on a URL Configuration, and return the URL
 * @param urlConfig
 */
function createURLFromConfig(urlConfig: IURLConfig) {
  const conf = new CloudinaryConfig({
    cloud: {
      cloudName: 'demo'
    },
    url: urlConfig
  });

  return createCloudinaryURL(conf, { publicID: 'sample' });
}

const DEMO_CONFIG = {
  cloud: {
    cloudName: 'demo'
    // Other cloud-based properties
  }
};

describe('It tests a combination of Cloudinary URL and Configuration', () => {
  it ('Generates a URL', () => {
    const url = new TransformableImage('my_image')
      .setConfig(DEMO_CONFIG)
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/my_image');
  });
  it ('Throw error when config is invalid', () => {
    expect(() => {
      new TransformableImage('my_image')
        .setConfig({});
    }).toThrow();
  });
  it ('Generates a URL with transforamtions', () => {
    const url = new TransformableImage()
      .setConfig(DEMO_CONFIG)
      .resize(Resize.fill(100, 100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample');
  });

  it ('Shows a use-case for global configuration', () => {
    //
    /**
     * We can implement this "wrapper", or instruct our customers how to implement it.
     */
    class MyGlobalCloudinary {
      public cloudinaryConfig: ICloudinaryConfigurations;
      // Constructor accepts a cloudinary configuration
      constructor(cloudinaryConfig: ICloudinaryConfigurations) {
        this.cloudinaryConfig = cloudinaryConfig;
      }

      // Utility function that returns a new instance with configuration set
      image(publicID: string) {
        return new TransformableImage(publicID)
          .setConfig(this.cloudinaryConfig);
      }
    }

    /**
     * Define the configuration and your "global" instance
     */
    const myInstance = new MyGlobalCloudinary({
      cloud: {
        cloudName: 'MY_CLOUD_NAME'
      }
    });

    /**
     * Use the "global" instance
     */
    const url = myInstance.image('sample')
      .resize(Resize.fill(100, 100))
      .describeAsset({
        storageType:'fetch', // defaults to "upload"
        assetType: 'avatar' // Defaults to image
      })
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/MY_CLOUD_NAME/avatar/fetch/c_fill,h_100,w_100/sample');
  });



  it('Secure by default', () => {
    const url = createURLFromConfig({});
    expect(url).toContain('https://res.cloudinary.com/demo');
  });

  it('Supports secure:false', () => {
    const url = createURLFromConfig({
      secure:false
    });
    expect(url).toContain('http://res.cloudinary.com/demo');
  });

  it('Support cname with secure false', () => {
    const url = createURLFromConfig({
      cname:'hello.com',
      secure: false
    });
    expect(url).toContain('http://hello.com/demo');
  });

  it('Support secureDistribution with secure true', () => {
    const url = createURLFromConfig({
      secureDistribution:'foobar.com'
    });
    expect(url).toContain('https://foobar.com/demo');
  });

  it('Support private CDN with secure true', () => {
    const url = createURLFromConfig({
      privateCdn:true
    });
    expect(url).toContain(`https://demo-res.cloudinary.com/image/upload`);
  });

  it('Support secureDistribution with secure true', () => {
    const url = createURLFromConfig({
      secure: true,
      privateCdn: true,
      secureDistribution: "something.cloudfront.net"
    });
    expect(url).toContain('https://something.cloudfront.net/image/upload/');
  });
});


/**
 * http://res.cloudinary.com/{cloudName}
 * https://res.cloudinary.com/{cloudName}
 * https://{cloudName}-res.cloudinary.com/
 * http://{domain}
 * https://{domain}
 */
