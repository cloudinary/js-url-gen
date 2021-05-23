import {createCloudinaryV1URL} from "../../src";

describe('Test resource types', () => {
  it('Should throw exception with unsupported format', () => {
    expect(() => {
      createCloudinaryV1URL('sample', {
        cloud_name: 'demo',
        resource_type: 'video',
        type: 'fetch',
        url_suffix:'testing'
      });
    }).toThrow();
  });

  it('works', () => {
    const url = createCloudinaryV1URL('sample', {
      cloud_name: 'demo',
      resource_type: 'image',
      type: 'upload',
      url_suffix:'testing'
    });

    expect(url).toContain('images/sample/testing');
  });
});
