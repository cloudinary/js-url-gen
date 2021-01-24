## Welcome

### About this project
This project enables you to create Cloudinary URLs for your images.
Using this SDK, you can apply advanced transformations to your images.


### What is this project for?
This project comes to replace and modernize our existing JS offering, and it's part of a larger effort in Cloudinary. 

You can read more about the project here:
- <a href="https://cloudinary.com/blog/cloudinary_s_next_generation_developers_sdks">Cloudinary's Next Generation SDKs</a>
- <a href="https://cloudinary.com/blog/get_ready_for_cloudinary_s_next_generation_javascript_sdks">Cloudinary's next generation JS SDKs</a>




### Key Features
- ESM packages, import only what you need
- Declarative Syntax 
- Fully typed for excellent IDE support
- Easy to write, easy to read.

### Installation
```bash
npm install @cloudinary/base 
```

### Testing with Jest

@cloudinary/base is shipped with ES6 code by default, while this provides great tree-shaking potential,
it also requires a few adjustments

In jest.config, you'll need to add these lines to allow babel to transpile our code.
```json
{
  "transform": {
    "node_modules/@cloudinary/base": "babel-jest"
  },
  "transformIgnorePatterns": ["/node_modules/(?!@cloudinary/base)"]
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



### Interested in Cloudinary?

Feel free to visit our more mature SDKs:

- <a href="https://github.com/cloudinary/cloudinary_js"> Javascript</a>
- <a href="https://github.com/cloudinary/cloudinary-react"> React</a>
- <a href="https://github.com/cloudinary/cloudinary_angular"> Angular</a>
- <a href="https://github.com/cloudinary/cloudinary-vue"> Vue</a>  
- <a href="https://github.com/cloudinary/cloudinary_npm"> Node</a>
----

