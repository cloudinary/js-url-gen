import TransformableImage from "../../src/transformation/TransformableImage";
import Resize from "../../src/actions/resize/Resize";
import ICloudinaryConfigurations from "../../src/interfaces/Config/ICloudinaryConfigurations";

const DEMO_CONFIG = {
  cloud: {
    cloudName: 'demo'
    // Other cloud-based properties
  }
};

describe('It tests a combination of Cloudianry URL and Configuration', () => {
  it ('Generates a URL', () => {
    const url = new TransformableImage('my_image')
      .setConfig(DEMO_CONFIG)
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/my_image');
  });
  it ('Generates a URL with transforamtions', () => {
    const url = new TransformableImage()
      .setConfig(DEMO_CONFIG)
      .resize(Resize.fill(100, 100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample');
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

    expect(url).toBe('http://res.cloudinary.com/MY_CLOUD_NAME/avatar/fetch/c_fill,h_100,w_100/sample');
  });
});
