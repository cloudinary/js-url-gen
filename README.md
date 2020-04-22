### Hey there!

This repository is a work in in progress in a pre-alpha state.
Needless to say it's not stable.

Feel free to peak around and play with our new API.

### Interested in Cloudinary?

Feel free to visit our more mature SDKs:

- <a href="https://github.com/cloudinary/cloudinary_js"> Javascript</a>
- <a href="https://github.com/cloudinary/cloudinary-react"> React</a>
- <a href="https://github.com/cloudinary/cloudinary_angular"> Angular</a>
- <a href="https://github.com/cloudinary/cloudinary-vue"> Vue</a>  
- <a href="https://github.com/cloudinary/cloudinary_npm"> Node</a>

  
  


----

Below is the progress made on the project, the list will be modified and extended as the project progresses


### Theoretical syntax
```javascript
let tImage = new TransformableImage()
  .addAction(
    scale()
      .height(100)
      .width(100)
  )
  .setConfig(configOptions)

let url = imgtImage.getURLForImage('cat.jpg')

// results in the following URL (assuming your cloud is 'demo')
// https://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/cat.jpg

```

Files of interest
- `src/final.js` - Anything here is agreed upon syntax, import and structure
- `src/wip.js` - Anything here will be changed to play around with ideas
- `readme.md` - This file - to update status


- [ ] Actions 
    - [ ] Resize (Group)
        - [ ] Resize (action)
        - [ ] Crop
        - [ ] Fill
        - [ ] Pad
        - [ ] FillPad
        - [ ] Trim
        - [ ] Thumb
        - [ ] DPR
    - [ ] Adjust
        - [ ] Brightness
        - [ ] Contrast
        - [ ] ReplaceColor
        - [ ] ReColor
        - [ ] Red,Green Blue (?)
        - [ ] Opacity
        - [ ] ViesusCorrect
        - [ ] Improve (?)
    - [ ] Effect
        - [ ] MiscEffect (?) (art, cartoonify, oil_paint, redeye, adv_redeye, vectorize, outline)
        - [ ] PixelEffect (?) (blur_faces, blue_region, pixelate.. and more)
        - [ ] Blur
        - [ ] Tint
        - [ ] AssistColorBlind
        - [ ] ColorEffect
        - [ ] SimulateColorBlind
        - [ ] Vectorize
        - [ ] Displace
    - [ ] Overlay
        - [ ] ImageLayer
        - [ ] TextLayer
        - [ ] Layer
        - [ ] (In PHP there are many, many more here)
    - [ ] Direct
        - [ ] Outline
        - [ ] Border
        - [ ] Shadow
        - [ ] Corners
    - [ ] Delivery
        - [ ] DPR
        - [ ] Format
        - [ ] Attachment
        - [ ] setDensity (DPI, not DPR, for PDF)
        - [ ] keepAttribution
        - [ ] keepAll
    
- [ ] Classes/Concepts
    - [ ] TransformableImage
    
- [ ] Open issues
    - [ ] JSDoc and typescript have missing features (like extending objects)
