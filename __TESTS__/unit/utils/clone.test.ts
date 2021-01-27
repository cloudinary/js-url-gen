import {CloudinaryMedia} from "../../../src/assets/CloudinaryMedia";
import {VideoEdit} from "../../../src/actions/videoEdit";
import {Delivery} from "../../../src/actions/delivery";


describe('Tests for CloudinaryMedia', () => {
  let cloudinaryMedia: CloudinaryMedia = null;
  beforeEach(() => {
    cloudinaryMedia = new CloudinaryMedia('sample', {cloudName: 'demo'});
  });

  it('Contains videoEdit', () => {
    const url = cloudinaryMedia.videoEdit(VideoEdit.trim().duration(10));

    const cloneUrl = cloudinaryMedia.clone();
    url.delivery(Delivery.format('hh'));

    // console.log(url.toURL());
    // console.log(cloneUrl.toURL());
    expect(cloneUrl.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/du_10/sample');
  });
});

