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

// The image interface exposes a lot of useful functions we call ActionGroups
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
// Explore the Resize object to discover more resize actions

// The Actions are actually factory functions that return an Action Object
// Every Action has a different set of methods (for scale, we have width and height)
myImage.resize(Resize.scale().width(100).height(100));

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();
// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
```
