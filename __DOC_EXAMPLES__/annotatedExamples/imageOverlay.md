```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a CloudinaryImage type.

import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
import {CloudinaryImage} from "@cloudinary/base/assets/CloudinaryImage";

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});

// Plug the image type into your instance
cld.useImage(CloudinaryImage);

// Lets create a new image
const myImage = cld.image('sample');

// An overlay is built from several parts
// Import video or image overlay, based on your asset
import {Overlay} from "@cloudinary/base/actions/overlay";
// Import the source of the layer, this determines if the layer is an image, text or video
import {image} from "@cloudinary/base/values/source";

// Import how to position your layer
import {Position} from "@cloudinary/base/values/position";
import {southEast} from "@cloudinary/base/values/gravity/qualifiers/compass/Compass";
import {compass} from "@cloudinary/base/values/gravity";

// We'll also scale our overlay, we'll need this for later.
import {scale} from "@cloudinary/base/actions/resize";
import {Transformation} from "@cloudinary/base/transformation/Transformation";


myImage.overlay(
           Overlay.source( // An overlay has a Source and a Position Qualifiers
               image('cloudinary_icon') // Mandatory - Source
                   .transformation(new Transformation()
                       .resize(scale().width(300).height(300)) // A source can be transformed like an image
                   ))
               .position(new Position().gravity(compass(southEast()))
           ),
       )
myImage.toURL();
// http://res.cloudinary.com/demo/image/upload/l_cloudinary_icon/c_scale,h_300,w_300/fl_layer_apply,g_south_east/sample

```
