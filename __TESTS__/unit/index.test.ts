
import {CloudinaryImage, CloudinaryVideo, Transformation, Cloudinary, Values, Actions} from '../../src/index';

describe ('Ensures index exports correctly', () => {
  it('Exports correctly', () => {
    expect(CloudinaryImage).toBeDefined();
    expect(CloudinaryVideo).toBeDefined();
    expect(Transformation).toBeDefined();
    expect(Cloudinary).toBeDefined();
    expect(Values).toBeDefined();
    expect(Actions).toBeDefined();
  });
});
