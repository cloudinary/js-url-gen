import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {CustomFunction} from "../../../src/actions/customFunction";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it ('Works with wasm', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .customFunction(CustomFunction.wasm('my_example.wasm')).toURL();

    expect(url).toContain('fn_wasm:my_example.wasm');
  });

  it ('Works with remote', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .customFunction(CustomFunction.remote('https://my.preprocess.custom/function')).toURL();

    expect(url).toContain('fn_remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg');
  });

  it ('Works with remote preprocessed', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .customFunction(CustomFunction.remote('https://my.preprocess.custom/function').preprocess()).toURL();

    expect(url).toContain('fn_pre:remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg');
  });

  it('tests url safe base64 encoding', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .customFunction(CustomFunction.remote('https://opengraphimg.com/.netlify/functions/generate-opengraph?author=opengraphimg&title=Hey%20Chris%20this%20is%20working').preprocess()).toURL();

    expect(url).toContain('fn_pre:remote:aHR0cHM6Ly9vcGVuZ3JhcGhpbWcuY29tLy5uZXRsaWZ5L2Z1bmN0aW9ucy9nZW5lcmF0ZS1vcGVuZ3JhcGg_YXV0aG9yPW9wZW5ncmFwaGltZyZ0aXRsZT1IZXklMjBDaHJpcyUyMHRoaXMlMjBpcyUyMHdvcmtpbmc');
  });
});
