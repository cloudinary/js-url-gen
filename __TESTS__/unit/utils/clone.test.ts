import {CloudinaryMedia} from "../../../src/assets/CloudinaryMedia";

describe('Tests for cloning', () => {
  it('should clone resource', () => {
    const url = new CloudinaryMedia('sample', {cloudName: 'demo'});

    const cloneUrl = url.clone();

    expect(cloneUrl).toEqual(url);
  });
});

