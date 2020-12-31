<h1>Hello World - Scaling an image</h1>

<h2>Code Example</h2>

```javascript
import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
import {scale} from "@cloudinary/base/actions/resize";

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});


// Create a new image
const myImage = cld.image('sample');

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
    <li>Imports Cloudinary modules and classes</li>
    <li>Creates a new Cloudinary instance, with a set of configurations</li>
    <li>Instructs your instance to work with a Cloudinary Image (CloudinaryImage)</li>
    <li>Creates a new CloudinaryImage instance with a publicID of 'sample' (<code>cld.image('sample')</code>)</li>
    <li>Imports the <code>scale()</code> Action from <code>'@cloudinary/base/actions/resize'</code> </li>
    <li>Uses the Action methods <code>width</code> and <code>height</code> to set the scale size</li>
    <li>Applies your changes and creates a URL string</li>
</ul>
