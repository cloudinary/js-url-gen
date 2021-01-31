import {CloudinaryMedia} from "../../../src/assets/CloudinaryMedia";
import {Effect} from "../../../src/actions/effect";

describe('Tests for cloning', () => {
  it('should clone resource', () => {
    const asset = new CloudinaryMedia('sample', {cloudName: 'demo'});

    const cloneAsset = asset.clone();

    //add transformation to asset
    asset.effect(Effect.sepia());

    //change public id of cloneAsset
    cloneAsset.setPublicID('dog');

    expect(cloneAsset.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/dog');
    expect(asset.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/e_sepia/sample');
  });
});

