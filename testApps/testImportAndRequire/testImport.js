import { Cloudinary } from '@cloudinary/url-gen';
import { Resize } from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'test',
  },
  url: {
    secure: true,
  },
});

const myImage = cld.image('sample');
myImage.resize(Resize.scale().width(100).height(100));

const myURL = myImage.toURL();
console.log(myURL);