import {CloudinaryFile} from "../../../src/assets/CloudinaryFile";

describe('Tests for CloudinaryFile', () => {
  let cloudinaryAsset: CloudinaryFile = null;
  beforeEach(() => {
    cloudinaryAsset = new CloudinaryFile('sample', {cloudName:'demo'});
  });

  it('Instantiates a cloudinaryAsset', () => {
    expect(cloudinaryAsset).toBeDefined();
  });

  it('setPublicID should be chainable', () => {
    expect(cloudinaryAsset.setPublicID('sample')).toBe(cloudinaryAsset);
  });

  it('Sign should be chainable', () => {
    expect(cloudinaryAsset.sign()).toBe(cloudinaryAsset);
  });
});

