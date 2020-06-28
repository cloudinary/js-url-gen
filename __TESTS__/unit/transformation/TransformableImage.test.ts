import TransformableImage from "../../../src/transformation/TransformableImage";


describe('Tests for TransformableImage', () => {
  let tImage: TransformableImage = null;
  beforeEach(() => {
    tImage = new TransformableImage();
  });

  it('Instantiates a transformableImage', () => {
    expect(tImage).toBeDefined();
  });

  it('setPublicID should be chainable', () => {
    expect(tImage.setPublicID('sample')).toBe(tImage);
  });

  it('Sign should be chainable', () => {
    expect(tImage.sign()).toBe(tImage);
  });

  it('setConfig should be chainable', () => {
    expect(tImage.setConfig({
      cloud: {
        cloudName:'foo'
      }
    })).toBe(tImage);
  });

  it('Can use the asset descriptor methods without breaking (Internals not yet implemented)', () => {
    expect(tImage
      .setConfig({
        cloud: {
          cloudName:'demo'
        }
      })
      .setType('fetch')
      .setResourceType('avatar')
      .setVersion(1234)
      .setPublicID('sample')
      .toURL()
    ).toBe('http://res.cloudinary.com/demo/avatar/fetch/v1234/sample');
  });

  it('When providing actions with a toString method, should concat all child strings', () => {
    tImage
      .addAction({
        toString() {
          return 'aa';
        }
      })
      .addAction({
        toString() {
          return 'bb';
        }
      });

    expect(tImage.toString()).toBe('aabb');
  });
});
