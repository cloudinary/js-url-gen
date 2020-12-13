### Treeshaking and performance
<div class="alert alert-success" role="alert">
  <b>Tree shaking can dramatically impact your bundle size, we strongly recommend importing only what you need!</b>
</div>



<div>
Tree shaking is available throughout the SDK. </br>
Everything can be very granularly imported to ensure you only import what you need.
</div>


<div>
<h2>Actions</h2>
<h4>Without Tree-Shaking</h4>

 ```javascript
    import {Resize} from "@cloudinary/base/actions/resize";
    
    Resize.scale()
    Resize.crop()
 ```
 <h4>With Tree-Shaking</h4>
 
   ```javascript
    import {scale, crop} from '@cloudinary/base/actions/resize';
    scale()
    crop()
   ```
</div>

<br/>
<br/>
<div>
<h2>Qualifier Values</h2>
<h4>Without Tree-Shaking</h4>

 ```javascript
    import {Format} from "@cloudinary/base/values/format";
    
    Format.png()
    Format.jpg()
 ```
 <h4>With Tree-Shaking</h4>
 
```javascript
    import {jpg, png} from "@cloudinary/base/values/format";
    
    png()
    jpg()
```
</div>

<br/>
<br/>

<div class="alert alert-info" role="alert">
  <b>Not sure what these terms mean? <br/></b>
  Visit {@tutorial terminology} for more information
</div>
