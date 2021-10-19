// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Cloudinary } = require('@cloudinary/url-gen/index');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Resize } = require('@cloudinary/url-gen/actions/resize');

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