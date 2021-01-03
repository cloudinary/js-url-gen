<h2>Global configuration (See {@link ICloudinaryConfigurations})</h2>

```javascript
// Import the cloudinary class
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
```


<h2>Instance configuration</h2>

```javascript

// Import the asset you want to use
// In this case, we import a CloudinaryImage type.
import {CloudinaryImage} from "@cloudinary/base";

const image = new CloudinaryImage('sample', {
    // any cloudConfiguration goes here
    cloudName: 'demo' 
}, {
    // any urlConfiguration goes here
    secure: true // force https, set to false to force http
});
```

<h2>Asset Description (See {@link IDescriptor})</h2>

```javascript
// Import the cloudinary class
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

const myAsset = cld.video(); // or cld.image()

myAsset.setPublicID('some-remote-url')
myAsset.storageType = 'fetch';

// https://res.cloudinary.com/video/fetch/some-remote-url
```
