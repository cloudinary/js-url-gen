import Resize, {minimumPad, crop, fill, scale} from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Resize', () => {
  it('Creates a cloudinaryURL with name and resize', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(crop(100).aspectRatio('3:4'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/ar_3:4,c_crop,w_100/sample');
  });
});
