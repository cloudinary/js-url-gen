import {createTestURL} from "./transformationLegacyTests/utils/createTestURL";

describe('Test resource types', () => {
  it('Should throw exception with unsupported format', () => {
    expect(() => {
      createTestURL('sample', {
        resource_type: 'video',
        type: 'fetch',
        url_suffix:'testing'
      });
    }).toThrow();
  });

  it('uses url suffix to create turn image/upload to images/', () => {
    const url = createTestURL('sample', {
      resource_type: 'image',
      type: 'upload',
      url_suffix:'testing'
    });

    expect(url).toContain('images/sample/testing');
  });
});
