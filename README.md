# Welcome

## About this project

This project enables you to create Cloudinary URLs for your images and videos.
Using this SDK, you can apply advanced transformations to your images and videos.

This SDK can also be used with [popular frontend frameworks](https://cloudinary.com/documentation/sdks/js/frontend-frameworks/index.html).

## Help & Examples
- {@tutorial gettingStarted} 
- {@tutorial annotatedExamples}
- {@tutorial configuration}

## Installation
```bash
npm install @cloudinary/js-url-gen 
```

## Simple usage
```javascript

// Import the Cloudinary class
import {Cloudinary} from '@cloudinary/js-url-gen';

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});

// Let's create a new image
const myImage = cld.image('sample');
import {Resize} from '@cloudinary/js-url-gen/actions/resize';
myImage.resize(Resize.scale().width(100).height(100));

// When we're done, we can apply all our changes and create a URL.
const myURL = myImage.toURL();
console.log(myURL);
// https://res.cloudinary.com/demo/image/upload/c_scale,w_100,h_100/sample

```

### More examples and documentation
- [Cloudinary Documentation](https://cloudinary.com/documentation/javascript2_integration)
- [SDK Reference](https://cloudinary.com/documentation/sdks/js/cloudinary-js-base/index.html)
- [Use with a Frontend Framework](https://cloudinary.com/documentation/sdks/js/frontend-frameworks/index.html)

### Additional links
- [React SDK](https://www.npmjs.com/package/@cloudinary/react)
- [Angular SDK](https://www.npmjs.com/package/@cloudinary/angular) 


### Transpilation
@cloudinary/js-url-gen is shipped as untranspiled ES6 code.
@cloudinary/js-url-gen is optimized around bundle size, as such we do not transpile our distributed modules, 
we leave the decision of what browsers to support, and what transpilations to apply, to you, the user.

### Testing with Jest

As mentioned above, we're shipping @cloudinary/js-url-gen with ES6 code, as this provides great tree-shaking potential.
it also requires a few adjustments when testing.

In jest.config, you'll need to add these lines to allow babel to transpile our code.
```json
{
  "transform": {
    "node_modules/@cloudinary/js-url-gen": "babel-jest"
  },
  "transformIgnorePatterns": ["/node_modules/(?!@cloudinary/js-url-gen)"]
}
```
Make sure to install babel-jest:
`npm install babel-jest` 

You'll also need to ensure you have a babel.config.js file (and not a .babelrc), and that
it's configured properly to transpile code,
   
*As an example*:
```js
module.exports = {
  "presets": [
    "@babel/preset-env"
  ]
};
```
