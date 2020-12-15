<h2>Global configuration (See {@link ICloudinaryConfigurations})</h2>

```javascript
// Import the cloudinary class, and the assets you want to use
// In this case, we import a CloudinaryImage type.

import {CloudinaryImage} from "@cloudinary/base/assets/CloudinaryImage";
import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});
cld.useImage(CloudinaryImage);
```


<h2>Instance configuration</h2>

```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a CloudinaryImage type.
import {CloudinaryImage} from "@cloudinary/base/assets/CloudinaryImage";
import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({});
cld.useImage(CloudinaryImage);

const image = cld.image('sample');

image.setConfig({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
})
```

<h2>Asset Description (See {@link IDescriptor})</h2>

```javascript
// Import the cloudinary class, and the assets you want to use
// In this case, we import a CloudinaryImage type.
import {CloudinaryImage} from "@cloudinary/base/assets/CloudinaryImage";
import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});
cld.useImage(CloudinaryImage);

const myImage = cld.image('sample'); // Not setting publicID yet

myImage.describeAsset({
    storageType: 'fetch',
    assetType: 'video',
    publicID: 'some-remote-url' // Another way to set the public ID
})

myImage.toURL()
// https://res.cloudinary.com/video/fetch/some-remote-url
```
