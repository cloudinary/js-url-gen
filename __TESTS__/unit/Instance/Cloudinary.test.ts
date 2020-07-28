import TransformableImage from "../../../src/transformation/TransformableImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Cloudinary from "../../../src/instance/Cloudinary";
import fill from "../../../src/actions/resize/fill";

describe('Tests for Cloudinary instance', () => {
  it ('Creates an instance with its own global config', () => {
    const cloudinary = new Cloudinary(new CloudinaryConfig({
      cloud: {
        cloudName:'demoInInstance'
      }
    }));
    cloudinary.useImage(TransformableImage);
    const tImage = cloudinary.image('sample');

    tImage.resize(fill(10, 10));

    expect(tImage.toURL()).toBe('http://res.cloudinary.com/demoInInstance/image/upload/c_fill,h_10,w_10/sample');
  });


  it ('Can pass config in runtime instead of in creation', () => {
    const cloudinary = new Cloudinary();

    cloudinary.setConfig(new CloudinaryConfig({
      cloud: {
        cloudName:'demoInInstance'
      }
    }));

    cloudinary.useImage(TransformableImage);
    const tImage = cloudinary.image('sample');

    tImage.resize(fill(10, 10));

    expect(tImage.toURL()).toBe('http://res.cloudinary.com/demoInInstance/image/upload/c_fill,h_10,w_10/sample');
  });

  it ('throw error when useImage() is not called', () => {
    expect(()=> {
      const cloudinary = new Cloudinary(new CloudinaryConfig({
        cloud: {
          cloudName:'demoInInstance'
        }
      }));
      const tImage = cloudinary.image('sample');

      tImage.resize(fill(10, 10));
    }).toThrow();
  });
});
