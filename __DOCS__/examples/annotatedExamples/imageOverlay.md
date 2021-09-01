```javascript
// Import the cloudinary class
import {Cloudinary} from "@cloudinary/js-url-gen/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: {
    secure: true // force https, set to false to force http
  }
});

// Lets create a new image
const myImage = cld.image('sample');

// An overlay is built from several parts
// Import video or image overlay, based on your asset
import {Overlay} from "@cloudinary/js-url-gen/actions/overlay";
// Import the source of the layer, this determines if the layer is an image, text or video
import {image} from "@cloudinary/js-url-gen/qualifiers/source";

// Import how to position your layer
import {Position} from "@cloudinary/js-url-gen/qualifiers/position";
import {southEast} from "@cloudinary/js-url-gen/qualifiers/compass";
import {compass} from "@cloudinary/js-url-gen/qualifiers/gravity";

// We'll also scale our overlay, we'll need this for later.
import {scale} from "@cloudinary/js-url-gen/actions/resize";
import {Transformation} from "@cloudinary/js-url-gen/transformation/Transformation";


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
