import {
  CloudConfig,
  CloudinaryImage,
  CloudinaryVideo,
  Transformation,
  Cloudinary,
  Qualifiers,
  Actions,
  CloudinaryConfig,
  URLConfig
} from '../../dist/index';

import { Border } from '../../dist/actions/border';

describe('Ensures index exports correctly', () => {
  it('Exports correctly', () => {
    expect(CloudinaryImage).toBeDefined();
    expect(CloudinaryVideo).toBeDefined();
    expect(Transformation).toBeDefined();
    expect(Cloudinary).toBeDefined();
    expect(Qualifiers).toBeDefined();
    expect(Actions).toBeDefined();
    expect(CloudConfig).toBeDefined();
    expect(URLConfig).toBeDefined();
    expect(CloudinaryConfig).toBeDefined();
    expect(Border).toBeDefined();
  });
});
