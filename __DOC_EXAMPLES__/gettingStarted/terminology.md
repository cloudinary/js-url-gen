<h1>SDK Terminology</h1>

<h4>The best way to explain our terminology is through an example</h4>


```javascript

  import Cloudinary, {TransformableImage} from '@cloudinary/base';

  // Create your instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      secure: true // force http or https
    }
  });

  cld.useImage(TransformableImage);
  
  const myImage = cld.image('sample');

  import Resize from '@cloudinary/base/actions/resize';
  import Rotate from '@cloudinary/base/actions/rotate';
  import * as RotationMode from '@cloudinary/base/values/rotate';

  myImage
    .resize(
      Resize.scale()
        .width(100)
        .height(100))
    .rotate(
      Rotate.mode(RotationMode.verticalFlip()) 
  );

```

<h3>Cloudinary Instance & Configuration</h3>
<ul>
  <li>The first step in every new application will be creating a new Cloudinary Instance 
  <li>The SDK has two types of Transformations - <b>TransformableImage</b> and <b>TransformableVideo</b>
  <li>Use the instance you created to generate a new <b>TransformableImage/Video</b> instance
  <li>The {@link ICloudinaryAssetConfigurations|Cloudinary Configuration} is used to define how URLs are created 
</ul>

<h3>Actions and ActionGroups</h3>
<ul>
  <li>Assets expose methods called <b>ActionGroups</b> (<code>image.resize</code>, <code>image.rotate</code>) 
  <li>ActionGroups receive an Action as a parameter
  <li>We create Action objects through Factory methods (<code>scale</code>, <code>mode</code>)
  <li>You can find more Actions in <code>'@cloudinary/base/actions'</code>
  <li>You can import all actions from <code>import {Actions} from '@cloudinary/base'</code>
</ul>


<h3>Qualifiers and QualifierValues</h3>
<ul>
  <li>Actions expose methods to define their behaviours
  <li>We call the Methods on Actions <b>Qualifiers</b>
  <li>Qualifiers usually accept a <b>QualifierValue</b>
  <li>QualifierValues can be primitive (numbers, strings) or predefined SDK values that can be imported
  <li>Almost all QualifierValues are functions (RotationMode.verticalFlip())
  <li>You can find more QualifierValues in <code>'@cloudinary/base/values'</code>
</ul>

<h4>Generalized form</h4>
<div style='font-size:25px; font-weight:bold'>
    <span style="color:blue">asset</span>.<span style="color:red">actionGroup</span>(<span style="color:green">actionGroup</span>.<span style="color:purple">action(<span style="color:orange">mandatoryQualifier</span>)</span>.<span style="color:teal">qualifier1()</span>.<span style="color:black">qualifier2()</span>)
</div>

<h4>Resizing example (No mandatory Qualifier)</h4>
<div style='font-size:25px; font-weight:bold'>
    <span style="color:blue">myImage</span>.<span style="color:red">resize</span>(<span style="color:green">Resize</span>.<span style="color:purple">scale()</span>.<span style="color:teal">width(100)</span>.<span style="color:black">height(100)</span>)
</div>
