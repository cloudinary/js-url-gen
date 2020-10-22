<h1>Hello World - Scaling an image</h1>

<h2>Code Example</h2>

```javascript

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

  // Tell your instance that you'd like to use the CloudinaryImage
  cld.useImage(TransformableImage);

  // Create a new image
  const myImage = cld.image('sample');

  import {scale} from '@cloudinary/base/actions/resize';

  myImage.resize(
    scale()
      .width(100)
      .height(100)
  );

  const myURL = myImage.toURL();
  // End result: https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample
```

<h1>Explanation</h1>
<h4>The code above performs the following operations:</h4>
<ul>
    <li>Import Cloudinary modules and classes</li>
    <li>Create a new Cloudinary instance, with a set of configurations</li>
    <li>Instruct your instance to work with a Cloudinary Images (TransformableImage)</li>
    <li>Create a new TransformableImage instance with a publicID of 'sample' (<code>cld.image('sample')</code>)</li>
    <li>Import the <code>scale()</code> Action from <code>'@cloudinary/base/actions/resize'</code> </li>
    <li>Use the Action methods <code>width</code> and <code>height</code> to set the scale size</li>
    <li>Apply your changes and create a URL string</li>
</ul>
