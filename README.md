## Welcome

### About this project
This project enables you to create Cloudinary URLs for your images.
Using this SDK, you can apply advanced transformations to your images.


### What is this project for?
This project comes to replace and modernize our existing JS offering, and it's part of a larger effort in Cloudinary. 

You can read more about the project here:
- <a href="https://cloudinary.com/blog/cloudinary_s_next_generation_developers_sdks">Cloudinary's Next Generation SDKs</a>
- <a href="https://cloudinary.com/blog/get_ready_for_cloudinary_s_next_generation_javascript_sdks">Cloudinary's next generation JS SDKs</a>




### Key Features
- ESM packages, import only what you need
- Declarative Syntax 
- Fully typed for excellent IDE support
- Easy to write, easy to read.

### Installation
```bash
npm install @cloudinary/base 
```

### Simple usage
```javascript
import {TransformableImage} from '@cloudinary/base';

// Get a list of all possible Resize 
import {Resize} from '@cloudinary/base/actions';

// Alternatively, Use tree shaking to only fetch what you need
import {scale} from '@cloudinary/base/actions/resize';


// Pass the publicId of your image
const myImage = new TransformableImage('sample');

myImage.setConfig({
  cloud: {
    cloudName: 'demo'
    }
});

myImage.resize(Resize.scale().width(100).height(100));

const myURL = myImage.toURL();
```

### Using SDK helper types/values
```javascript
import {TransformableImage} from '@cloudinary/base';
import {mode} from '@cloudinary/base/actions/rotate';

// Get all rotation modes, this is a value passed to an action
import * as RotationMode from '@cloudinary/base/values/rotate';

// Alternatively, get just the rotation you need, this is a value passed to an action
import {verticalFlip} from '@cloudinary/base/values/rotate';

const myImage = new TransformableImage('sample');

// Configure your image
myImage.config(/* ...snip, your config, same as above */);

// the mode action accepts a rotation value - verticalFlip()
myImage.rotate(mode(verticalFlip()));

// Create a URL
const myURL = myImage.toURL();
```

### Progress report
We're currently working on implementing all the wide range of features and possible transformations.  

We've created a progress report that visualizes our efforts: 

https://cloudinary.github.io/cloudinary-js-base/public/progress/cloudinary-base-progress-report.html


### Interested in Cloudinary?

Feel free to visit our more mature SDKs:

- <a href="https://github.com/cloudinary/cloudinary_js"> Javascript</a>
- <a href="https://github.com/cloudinary/cloudinary-react"> React</a>
- <a href="https://github.com/cloudinary/cloudinary_angular"> Angular</a>
- <a href="https://github.com/cloudinary/cloudinary-vue"> Vue</a>  
- <a href="https://github.com/cloudinary/cloudinary_npm"> Node</a>
----

