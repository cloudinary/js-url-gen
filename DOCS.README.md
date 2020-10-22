## Welcome

### About this project

This project enables you to create Cloudinary URLs for your images and videos.
Using this SDK, you can apply advanced transformations to your images and videos.

<br/>
<hr/>
<br/>

### Installation
```bash
npm install @cloudinary/base 
```

<br/>
<hr/>
<br/>

### Simple usage
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

// The image interface exposes alot of useful functions we call ActionGroups
// Each ActionGroup accepts a matching Action as a parameter

// For example, resize is an ActionGroup that needs a ResizeAction to work
// There are many types of Resizes, so we'll need to be specific.
// This doesn't make much sense on its own
// myImage.resize();  


// the resize() ActionGroup needs an Action parameter
// Lets give resize() a ResizeScale paramter to scale our image
// We import all of our Action parameters from @cloudinary/base/actions/{actionGroup}
// Note that you can import all Resize Actions, or just the single one you want
import Resize, {scale} from '@cloudinary/base/actions/resize';
// Resize.scale === scale
// Explose the Resize object to discover more resize actions

// The Actions are actually factory functions that return an Action Object
// Every Action has a different set of methods (for scale, we have width and height)
myImage.resize(Resize.scale().width(100).height(100));

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();
// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
```

<br/>


#### Actions and ActionGroups
- Assets expose methods called ActionGroups
- ActionGroups receive an Action
- We call the Factory methods to create the actions

<div class="alert alert-info" role="alert">
<div>For simplicity, we use the term <b>Action</b> for both the Factory methods and its return value (an Action object)</div>
</div>

<br/>
<hr/>
<br/>

### Passing values to Actions

<div>
We've just seen an example of how to scale our image.<br/>
This example used width and height, and passed some numeric value as paramters.<br/><br/>
In the SDK world, we refer to methods on an Action as Qualifiers.<br/><br/>
The ResizeScale action has a width and height Qualifier.<br/>
Qualifiers receive QualifierValues are parameters.
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

// Remember, mode is a function that returns an Action
// but we refer to both as an RotationMode action

// The RotationModeAction (mode) requires a Qualifier
// That qualifier will require a certain QualifierValue
// To make life easier, you can import all possible QualifierValue(s) of rotate 
import * as RotationMode from '@cloudinary/base/values/rotate';

// You can also import only the required QualifierValue you want
import {verticalFlip} from '@cloudinary/base/values/rotate';
// RotationMode.verticalFlip === verticalFlip

const myImage = cld.image('sample');

// rotate() accepts a RotationModeAction (mode)
// mode() has a Qualifier, however because that Qualifier is mandatory, we pass it directly to the factory
// We pass it verticalFlip() as a QualifierValue to flip the image vertically
// As you can see, QualifierValues are also functions
myImage.rotate(mode(verticalFlip()));

const myURL = myImage.toURL();
```


#### Qualifiers and QualifierValues
- Actions expose methods to define their behaviours 
- We call the Methods on Actions <b>Qualifiers</b>
- Qualifiers usually accept a <b>QualifierValue</b>
- QualifierValue can be primitive (numbers, strings) or predefined SDK values that can be imported
- Almost all QualifierValues are functions (RotationMode.verticalFlip())
- You can find more QualifierValues in <code>'@cloudinary/base/values'</code>

<br/>
<hr/>
<br/>

### Treeshaking and performance
<div class="alert alert-info" role="alert">
<b>Tree shaking can dramatically impact your bundle size, we strongly recommend importing only what you need!</b>
</div>
