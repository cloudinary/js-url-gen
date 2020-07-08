### Hey there!

This repository is a work in in progress in a pre-alpha state.
Needless to say it's not stable, all APIs and Syntax are subject to change.

Feel free to peek around and play with our new API.

### Interested in Cloudinary?

Feel free to visit our more mature SDKs:

- <a href="https://github.com/cloudinary/cloudinary_js"> Javascript</a>
- <a href="https://github.com/cloudinary/cloudinary-react"> React</a>
- <a href="https://github.com/cloudinary/cloudinary_angular"> Angular</a>
- <a href="https://github.com/cloudinary/cloudinary-vue"> Vue</a>  
- <a href="https://github.com/cloudinary/cloudinary_npm"> Node</a>

  
  
----


### What is this project for?
This project comes to replace and modernize our existing JS offering, and it's part of a larger effort in Cloudinary. 

You can read more about the project here:
- <a href="https://cloudinary.com/blog/cloudinary_s_next_generation_developers_sdks">Cloudinary's Next Generation SDKs</a>
- <a href="https://cloudinary.com/blog/get_ready_for_cloudinary_s_next_generation_javascript_sdks">Cloudinary's next generation JS SDKs</a>



### Key Features
- ESM packages, import only what you need.
- Declarative Syntax 
- Fully typed for excellent IDE support
- Easy to write, easy to read.



### Example Syntax
```javascript
import {TransformableImage} from '@cloudinary/base';
import {scale} from '@cloudinary/base/actions/resize';
let tImage = new TransformableImage('sample')
  .setConfig({
    cloud: {
      cloudName:'demo'    
    }  
  })
  .resize(scale(100, 100))
 
let url = tImage.toURL()

// The above results in the following URL
// https://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/sample
```

### Progress report
We're currently working on implementing all the wide range of features and possible transformations.  

We've created a progress report that visualizes our efforts  

https://cloudinary.github.io/cloudinary-js-base/public/progress/cloudinary-base-progress-report.html
