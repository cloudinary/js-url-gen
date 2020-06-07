import createCloudinaryURL from "../../../src/url/cloudinaryURL";


describe('Tests for TransformableImage', () => {
  it ('Creates a cloudinaryURL', () => {
    expect(createCloudinaryURL({}, {}, {})).toBe('');
  });
});
