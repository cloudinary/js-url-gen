<h1>SDK Terminology</h1>

The best way to explain our terminology is through some examples


```javascript

  import Cloudinary, {TransformableImage} from '@cloudinary/base';

  // Create your instance
  const cld = new Cloudinary(/* ... config */);
  cld.useImage(TransformableImage);
  
  const myImage = cld.image('sample');

  import {scale} from '@cloudinary/base/actions/resize';
  import {mode} from '@cloudinary/base/actions/rotate';
  import {verticalFlip} from '@cloudinary/base/values/rotate';

  myImage
    .resize(
      scale()
        .width(100)
        .height(100))
    .rotate(
      mode(verticalFlip()) 
  );

```

<h3>Actions and ActionGroups</h3>
<ul>
  <li>Assets expose methods called <b>ActionGroups</b> (<code>image.resize</code>, <code>image.rotate</code>) 
  <li>ActionGroups receive an Action as a parameter
  <li>We create Action objects through Factory methods (<code>scale</code>, <code>mode</code>)
</ul>


<h3>Qualifiers and QualifierValues</h3>
<ul>
  <li>Actions expose methods to define their behaviours
  <li>We call the Methods on Actions <b>Qualifiers</b>
  <li>Qualifiers usually accept a <b>QualifierValue</b>
  <li>QualifierValue can be primitive (numbers, strings) or predefined SDK values that can be imported
  <li>Almost all QualifierValues are functions (RotationMode.verticalFlip())
  <li>You can find more QualifierValues in <code>'@cloudinary/base/values'</code>
</ul>





