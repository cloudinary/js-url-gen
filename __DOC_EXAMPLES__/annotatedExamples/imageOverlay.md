```javascript

// Import the cloudinary class, and the assets you want to use
// In this case, we import a TransformableImage type.
import {Cloudinary, TransformableImage} from '@cloudinary/base';

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

// An overlay is built from several parts
// Import video or image overlay, based on your asset
import {Overlay, Resize} from "@cloudinary/base/actions/Actions";
// Import the source of the layer, this determines if the layer is an image, text or video
import {image} from "@cloudinary/base/values/sources/Sources";

// Import how to position your layer
import * as Position from "@cloudinary/base/values/position/Position";

// We'll also resize our overlay, we'll need this for later.

// image sources go into layers (image or video)
// imageLayers go into image assets
// videoLayers go into video assets
myImage.overlay(
    Overlay.imageLayer( // imageLayer with a Source and a Position Qualifiers
        image('cloudinary_icon') // Mandatory - Source
            .resize(Resize.scale().width(300).height(300)) // A source can be transformed like an image
        ,
        Position.southEast(), // Optional - Position
    ),
);
myImage.toURL();
// http://res.cloudinary.com/demo/image/upload/l_cloudinary_icon/c_scale,h_300,w_300/fl_layer_apply,g_south_east/sample

```
