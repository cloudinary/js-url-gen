<h2>Global configuration (See {@link ICloudinaryConfigurations})</h2>

```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a TransformableImage type.
import {Cloudinary, TransformableImage} from '@cloudinary/base';

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secure: true // force http or https
  }
});
cld.useImage(TransformableImage);
```


<h2>Instance configuration</h2>

```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a TransformableImage type.
import {Cloudinary, TransformableImage} from '@cloudinary/base';

// Create your instance
const cld = new Cloudinary({});
cld.useImage(TransformableImage);

const image = cld.image('sample');

image.setConfig({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      secure: true // force http or https
    }
})
```

<h2>Asset Description (See {@link IDescriptor})</h2>

```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a TransformableImage type.
import {TransformableImage, Cloudinary} from '@cloudinary/base';

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secure: true // force http or https
  }
});
cld.useImage(TransformableImage);

const myImage = cld.image(); // Not setting publicID yet 

myImage.describeAsset({
   storageType: 'fetch',
   assetType: 'video',
   publicID: 'some-remote-url' // Another way to set the public ID
})

myImage.toURL()
// https://res.cloudinary.com/video/fetch/some-remote-url
```
