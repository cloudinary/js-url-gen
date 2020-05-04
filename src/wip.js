// Transformations
import Transformation from "./transformation/Transformation";
import TransformableImage from "./transformation/TransformableImage";
// Actions
import Actions from './actions/Actions';
import Resize, {scale, fill, crop} from './actions/resize/Resize';
import Effect, {blur, brightness, greyscale, viesusCorrect} from './actions/effect/Effect';
import Overlay, {imageLayer, videoLayer} from "./actions/overlay/Overlay";
import Format, {autoFormat} from "./actions/format/Format";
import Quality, {autoQuality, dpr, setQuality} from "./actions/quailty/Quality";
import Adjust, {roundCorners} from "./actions/adjust/Adjust";
import Gravity, {autoGravity} from "./actions/gravity/Gravity";


/**
 $cloudinary->imageTag('sample')
 ->resize(Resize::fill(120, 120));
 */
new Transformation()
  .addAction(fill(120, 120));
/* --------------------------------------------------------------------------------------------- */

new Transformation()
  .addAction(Actions.Resize.fill(120, 120));


/**
 $cloudinary->imageTag('sample')
 ->effect(Effect::blur(800))
 ->resize(Resize::scale(800, '$height'))
 ->effect(Effect::brightness(40));
 */
new Transformation()
  .addAction(blur(800))
  .addAction(
    scale()
      .height('ih')
      .gravitate(autoGravity())
  )
  .addAction(brightness(40));
/* --------------------------------------------------------------------------------------------- */


/**
 $cloudinary->imageTag('sample')
 ->effect(Effect::grayscale())
 ->overlay(Layer::image('$img'))
 ->resize(Resize::scale(0.3))
 ->format(Format::auto())
 ->resize(Resize::scale(900))
 ->quality(Quality::auto())
 ->dpr(2);
 */
// TODO - OPEN ISSUE - how do we expect the imageLayer to build the full URL?
// TODO - We might want to consider changing everything to verbs, it can be much more fluid to read..
new Transformation()
  .addAction(greyscale()) // useGreyScale
  .addAction(imageLayer('my_public_id')) // addImageLayer
  .addAction(scale(0.3)) // scaleTo(0.3)
  .addAction(autoFormat()) // setAutoFormat
  .addAction(scale(900)) // scaleTo(900)
  .addAction(autoQuality()) // setAutoQuality
  .addAction(dpr(2)); // setDpr(2)
/* --------------------------------------------------------------------------------------------- */


/**
 $cloudinary->imageTag('sample')
 ->resize(Resize::scale('$mainvideowidth'))
 ->overlay(Layer::video('kitten_fighting'))
 ->resize(Resize::scale('$overlaywidth'));
 */
new Transformation()
  .addAction(scale('$mainvideowidth'))
  .addAction(videoLayer('MyVideoPublicID'))
  .addAction(scale(('$overlaywidth')));

/* --------------------------------------------------------------------------------------------- */


/**
 $cloudinary->imageTag('sample')
 ->quality(80)
 ->quality(30)
 ->resize(Resize::scale(500));
 */
new Transformation()
  .addAction(setQuality(80))
  .addAction(setQuality(30))
  .addAction(scale(500));
/* --------------------------------------------------------------------------------------------- */


/*
$cloudinary->imageTag('sample')
  ->roundCorners(20)
  ->effect(Effect::viesusCorrect())
  ->resize(Resize::crop(1000))
  ->overlay(Layer::image('viesus_logo'))
  ->resize(Resize::scale(100))
  ->resize(Resize::scale(600));
 */

/**
 * Example of TransformableImage
 */
TransformableImage.setConfig({}); // globally

let foobar = new TransformableImage()
  .addAction(viesusCorrect(30))
  .addAction(crop()
    .height(100))
  .addAction(imageLayer('viesus_logo'))
  .addAction(scale(100))
  .addAction(scale(600))
  .sign() // assuming we can sign with API key
  .setConfig({}); // or per instance


// Image gallery situation...
let db = {
  images: ['cat.jog', 'dog.jpg']
};
db.images.forEach((publicID) => {
  // We now have a stateful 'builder' of sorts, that contains needed information to create URLs
  foobar.getUrlForImage(publicID); // Use the same configuration to create as many images as you want.
});
/* --------------------------------------------------------------------------------------------- */



new TransformableImage()
  .addAction(roundCorners(10))
  .addAction(blur(50))
  .addAction(
    imageLayer('foo.jpg') // TransformableImageLayer?
      .addAction(blur(100)
        .strength(50))
      .addAction(crop(100, 200)
        .height(100) // alternative
        .gravity(autoGravity())
      )
    // we should be very strict, it should be a 'GravityAction'
    // How should we 'chain' layers?
  )
  .setConfig({}) // or per instance
  .getUrlForImage('cat.jpg');


TransformableImage.setConfig({});

let img = new TransformableImage()
  .addAction(roundCorners(10))
  .addAction(blur(50))
  .addAction(
    imageLayer('foo.jpg') // TransformableImageLayer?
      .addAction(blur(100))
      .addAction(crop(100, 200)
        .height(100) // alternative
        .gravity(autoGravity())
      )
    // we should be very strict, it should be a 'GravityAction'
    // How should we 'chain' layers?
  );

img.getUrlForImage('cat.jpg');
