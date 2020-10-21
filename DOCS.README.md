## Welcome

### About this project

This project enables you to create Cloudinary URLs for your images.
Using this SDK, you can apply advanced transformations to your images.


### About this documentation
- All operations begin with a {@link TransformableImage|TransformableImage}, or {@link TransformableVideo|TransformableVideo}, which create a new {@link Transformation|Transformation} object. 
- All Actions that can be applied to a transformation can be found {@link Actions|here}.
- All non-primitive values that can be passed to an Action can be found {@link Values|here}.
- Configuration can be found {@link ICloudinaryConfigurations|here}.


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
<div class="alert alert-success" role="alert">
    <b>Generated URL:</b> <i>https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample</i> 
</div>

<div class="alert alert-info" role="alert">
<b>Tree shaking can dramatically impact your bundle size, we strongly recommend importing only what you need!</b>
</div>

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

// the mode action accepts a rotationMode value - verticalFlip()
myImage.rotate(mode(verticalFlip()));

// Create a URL
const myURL = myImage.toURL();
```

<br/>
<div class="alert alert-info" role="alert">
Some actions accept primitive values, while others accept SDK provided values.<br/>
See the available {@link Actions|actions} for more information
</div>

