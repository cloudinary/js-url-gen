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
