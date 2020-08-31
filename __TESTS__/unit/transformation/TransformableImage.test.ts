import TransformableImage from "../../../src/transformation/TransformableImage";


describe('Tests for TransformableImage', () => {
  let tImage: TransformableImage = null;
  beforeEach(() => {
    tImage = new TransformableImage();
  });

  it('Instantiates a TransformableImage', () => {
    expect(tImage).toBeDefined();
  });

  /**
   * If we add specific TransformableImage functionality, We should test it here.
   */
});
