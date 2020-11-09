import createCloudinaryURL from "../../../src/url/cloudinaryURL";
import {minimumPad, crop, fill, scale} from '../../../src/actions/resize/Resize';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for TransformableImage', () => {
  it('Creates a default image cloudinaryURL', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'sample' }))
      .toBe('https://res.cloudinary.com/demo/image/upload/sample');
  });

  it('Creates a video cloudinaryURL', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, {
      publicID: 'dog',
      assetType: 'video'
    }))
      .toBe('https://res.cloudinary.com/demo/video/upload/dog');
  });

  it('Creates a private cloudinaryURL', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, {
      storageType: 'private',
      publicID: 'dog'
    }))
      .toBe('https://res.cloudinary.com/demo/image/private/dog');
  });

  it('Creates a cloudinaryURL with minimumPad', () => {
    const tImage = new TransformableImage();
    tImage.resize(minimumPad(250, 250));
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'sample' }, tImage))
      .toBe('https://res.cloudinary.com/demo/image/upload/c_mpad,h_250,w_250/sample');
  });

  it('Creates a cloudinaryURL with crop', () => {
    const tImage = new TransformableImage();
    tImage.resize(crop(250, 250));
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'sample'}, tImage))
      .toBe('https://res.cloudinary.com/demo/image/upload/c_crop,h_250,w_250/sample');
  });

  it('Creates a cloudinaryURL with fill', () => {
    const tImage = new TransformableImage();
    tImage.resize(fill(250, 250));
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'sample'}, tImage))
      .toBe('https://res.cloudinary.com/demo/image/upload/c_fill,h_250,w_250/sample');
  });

  it('Creates a cloudinaryURL with scale', () => {
    const tImage = new TransformableImage();
    tImage.resize(scale(250, 250));

    expect(createCloudinaryURL(CONFIG_INSTANCE, {publicID: 'sample'}, tImage))
      .toBe('https://res.cloudinary.com/demo/image/upload/c_scale,h_250,w_250/sample');
  });

  it( 'Adds version to cloudinaryURL when forceVrsion is set to true', () => {
    expect(createCloudinaryURL(Object.assign({}, CONFIG_INSTANCE, { url: {forceVersion: false, secure:true}}), { publicID: 'sample', version: 1234}))
      .toBe('https://res.cloudinary.com/demo/image/upload/v1234/sample');
  });

  it( 'Should add version if publicID contains /', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'folder/sample'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/v1/folder/sample');

    expect(createCloudinaryURL(Object.assign({}, CONFIG_INSTANCE, { url: {forceVersion: false, secure:true}}), { publicID: 'folder/sample', version: 123}))
      .toBe('https://res.cloudinary.com/demo/image/upload/v123/folder/sample');
  });

  it( 'Should not add version if publicID contains version already', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'v1234/sample'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/v1234/sample');
  });

  it( 'Should not set default version v1 to resources stored in folders if forceVersion is set to false', () => {
    expect(createCloudinaryURL(Object.assign({}, CONFIG_INSTANCE, { url: {forceVersion: false, secure:true}}), { publicID: 'folder/sample'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/folder/sample');
  });

  it( 'Should set default version v1 to resources stored in folders if forceVersion is set to false', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'folder/sample'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/v1/folder/sample');
  });

  it( 'Should not add version if publicID is a URL', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'https://test_url.com'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/https://test_url.com');
  });

  it( 'Should append signature', () => {
    expect(createCloudinaryURL(CONFIG_INSTANCE, { publicID: 'sample', signature: 's--1234--'}))
      .toBe('https://res.cloudinary.com/demo/image/upload/s--1234--/sample');
  });
});
