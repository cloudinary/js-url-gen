import {
  CloudinaryImage,
  CloudinaryVideo,
  Transformation,
  Cloudinary,
  Qualifiers,
  Actions
} from '../../src/index';

describe('Ensures index exports correctly', () => {
  it('Exports correctly', () => {
    expect(CloudinaryImage).toBeDefined();
    expect(CloudinaryVideo).toBeDefined();
    expect(Transformation).toBeDefined();
    expect(Cloudinary).toBeDefined();
    expect(Qualifiers).toBeDefined();
    expect(Actions).toBeDefined();
  });
});

