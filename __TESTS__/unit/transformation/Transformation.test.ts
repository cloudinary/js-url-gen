import Transformation from "../../../src/transformation/Transformation";


describe('Tests for Transformation', () => {
  let transformation: Transformation = null;
  beforeEach(() => {
    transformation = new Transformation();
  });

  it('Instantiates a Transformation', () => {
    expect(transformation).toBeDefined();
  });

  it('setPublicID should be chainable', () => {
    expect(transformation.setPublicID('sample')).toBe(transformation);
  });

  it('Sign should be chainable', () => {
    expect(transformation.sign()).toBe(transformation);
  });

  it('setConfig should be chainable', () => {
    expect(transformation.setConfig({
      cloud: {
        cloudName:'foo'
      }
    })).toBe(transformation);
  });

  it('Can use the asset descriptor methods without breaking (Internals not yet implemented)', () => {
    expect(transformation
      .setConfig({
        cloud: {
          cloudName:'demo'
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
