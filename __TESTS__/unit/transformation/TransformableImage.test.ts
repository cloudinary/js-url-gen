import TransformableImage from "../../../src/transformation/TransformableImage";


describe('Tests for TransformableImage', () => {
  let tImage: TransformableImage = null;
  beforeEach(() => {
    tImage = new TransformableImage();
  });

  it('Has a static setConfig function that should not return anything', () => {
    expect(TransformableImage.setConfig({})).toBeUndefined();
  });

  it('Instantiates a transformableImage', () => {
    expect(tImage).toBeDefined();
  });

  it('Has a method to create cloudinaryURL', () => {
    expect(tImage.getUrlForImage('sample')).toBeDefined();
  });

  it('setPublicID should be chainable', () => {
    expect(tImage.setPublicID()).toBe(tImage);
  });

  it('Sign shoudl be chainable', () => {
    expect(tImage.sign()).toBe(tImage);
  });

  it('Sign should be chainable', () => {
    expect(tImage.setConfig({})).toBe(tImage);
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
