import {CloudinaryAsset} from "../../../src/assets/CloudinaryAsset";
import {Transformation} from "../../../src/sdk/transformation/Transformation";

describe('Tests for cloudinaryAsset', () => {
  let cloudinaryAsset: CloudinaryAsset = null;
  beforeEach(() => {
    cloudinaryAsset = new CloudinaryAsset('sample', new Transformation());
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

  it('setConfig should be chainable', () => {
    expect(cloudinaryAsset.setConfig({
      cloud: {
        cloudName: 'foo'
      }
    })).toBe(cloudinaryAsset);
  });

  it('Can use the asset descriptor methods without breaking (Internals not yet implemented)', () => {
    expect(cloudinaryAsset
      .setConfig({
        cloud: {
          cloudName: 'demo'
        }
      })
      .setStorageType('fetch')
      .setAssetType('avatar')
      .setVersion(1234)
      .setPublicID('sample')
      .toURL()
    ).toBe('https://res.cloudinary.com/demo/avatar/fetch/v1234/sample');
  });
});

