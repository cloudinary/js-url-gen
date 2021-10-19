// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Cloudinary } = require('@cloudinary/url-gen/index');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Resize } = require('@cloudinary/url-gen/actions/resize');

const cld = new Cloudinary({
  cloud: {
    cloudName: 'tamas-demo',
  },
  url: {
    secure: true,
  },
});

const myImage = cld.image('jam/darthvader');
myImage.resize(Resize.scale().width(100).height(100));

const myURL = myImage.toURL();
console.log(myURL);