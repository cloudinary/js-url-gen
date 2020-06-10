import createCloudinaryURL from "../../../src/url/cloudinaryURL";
import {minimumPad, crop, fill, scale} from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';


describe('Tests for TransformableImage', () => {
  it ('Creates a default image cloudinaryURL', () => {
    expect(createCloudinaryURL({publicId: 'sample', cloudName:'demo'}))
      .toBe('http://res.cloudinary.com/demo/image/upload/sample');
  });

  it ('Creates a video cloudinaryURL', () => {
    expect(createCloudinaryURL({publicId: 'dog', cloudName:'demo'}, {resourceType: 'video'}))
      .toBe('http://res.cloudinary.com/demo/video/upload/dog');
  });

  it ('Creates a private cloudinaryURL', () => {
    expect(createCloudinaryURL({publicId: 'dog', cloudName:'demo'}, {type: 'private'}))
      .toBe('http://res.cloudinary.com/demo/image/private/dog');
  });

  it ('Creates a cloudinaryURL with minimumPad', () => {
    const tImage = new TransformableImage();
    tImage.resize(minimumPad(250, 250));
    expect(createCloudinaryURL({publicId: 'sample', cloudName:'demo'}, {}, tImage))
      .toBe('http://res.cloudinary.com/demo/image/upload/c_mpad,w_250,h_250/sample');
  });

  it ('Creates a cloudinaryURL with crop', () => {
    const tImage = new TransformableImage();
    tImage.resize(crop(250, 250));
    expect(createCloudinaryURL({publicId: 'sample', cloudName:'demo'}, {}, tImage))
      .toBe('http://res.cloudinary.com/demo/image/upload/c_crop,w_250,h_250/sample');
  });

  it ('Creates a cloudinaryURL with fill', () => {
    const tImage = new TransformableImage();
    tImage.resize(fill(250, 250));
    expect(createCloudinaryURL({publicId: 'sample', cloudName:'demo'}, {}, tImage))
      .toBe('http://res.cloudinary.com/demo/image/upload/c_fill,w_250,h_250/sample');
  });

  it ('Creates a cloudinaryURL with scale', () => {
    const tImage = new TransformableImage();
    tImage.resize(scale(250, 250));
    expect(createCloudinaryURL({publicId: 'sample', cloudName:'demo'}, {}, tImage))
      .toBe('http://res.cloudinary.com/demo/image/upload/c_scale,w_250,h_250/sample');
  });

});
