# Welcome

## About this project

This project enables you to create Cloudinary URLs for your images and videos.
Using this SDK, you can apply advanced transformations to your images and videos.

## Help & Examples
- {@tutorial gettingStarted} 
- {@tutorial annotatedExamples}
- {@tutorial configuration}

## Installation
```bash
npm install @cloudinary/base 
```

## Simple usage
```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a TransformableImage type.
import Cloudinary, {TransformableImage} from '@cloudinary/base';

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secure: true // force http or https
  }
});

// Plug the image type into your instance
cld.useImage(TransformableImage);

// Lets create a new image
const myImage = cld.image('sample');
import Resize from '@cloudinary/base/actions/resize';
myImage.resize(Resize.scale().width(100).height(100));

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();
// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
```

## Passing values to Actions

<div>
We've just seen an example of how to scale our image.<br/>
This example used width and height, and passed some numeric values as parameters.<br/><br/>
In the SDK world, we refer to methods on an Action as Qualifiers.<br/><br/>
The ResizeScale action has a width and height Qualifier.<br/>
Qualifiers receive QualifierValues as parameters.
</div>
<br/><br/>

<div>
The scale Action has intuitive qualifiers, width and height, which receive intuitive values.<br/> 
Lets see a more complex example and how the SDK helps you in those cases.
</div>

```javascript
import Cloudinary, {TransformableImage} from '@cloudinary/base';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secure: true // force http or https
  }
});

// Plug the image type into your instance
cld.useImage(TransformableImage);

// Import the RotationModeAction
import {mode} from '@cloudinary/base/actions/rotate';

// Import the RotationModeAction
import * as ResizeMode from '@cloudinary/base/values/rotate';

const myImage = cld.image('sample');

myImage.rotate(mode(ResizeMode.verticalFlip()));

const myURL = myImage.toURL();
```

