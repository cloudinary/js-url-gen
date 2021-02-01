import {FocusOnValue} from "./gravity/qualifiers/focusOn/FocusOnValue";

/**
 * @memberOf Qualifiers.FocusOns
 */
function bird(): FocusOnValue {
  return new FocusOnValue('bird');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function dog(): FocusOnValue {
  return new FocusOnValue('dog');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function cat(): FocusOnValue {
  return new FocusOnValue('cat');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function microwave(): FocusOnValue {
  return new FocusOnValue('microwave');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function refrigerator(): FocusOnValue {
  return new FocusOnValue('refrigerator');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function bottle(): FocusOnValue {
  return new FocusOnValue('bottle');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function sink(): FocusOnValue {
  return new FocusOnValue('sink');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function skateboard(): FocusOnValue {
  return new FocusOnValue('skateboard');
}

/**
 * @memberOf Qualifiers.FocusOns
 */
function person(): FocusOnValue {
  return new FocusOnValue('person');
}


/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects the largest face in an image with the Advanced Facial Attribute Detection add-on and makes it the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function advancedFace(): FocusOnValue {
  return new FocusOnValue('adv_face');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects all faces in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function advancedFaces(): FocusOnValue {
  return new FocusOnValue('adv_faces');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects all eyes in an image with the Advanced Facial Attribute Detection add-on and makes them the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function advancedEyes(): FocusOnValue {
  return new FocusOnValue('adv_eyes');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects the largest face in the asset and makes it the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function face(): FocusOnValue {
  return new FocusOnValue('face');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function faces(): FocusOnValue {
  return new FocusOnValue('faces');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects all the faces in the asset and makes them the focus of the transformation.
 * @return {FocusOn} FocusOn
 */
function background(): FocusOnValue {
  return new FocusOnValue('background');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects aeroplane
 * @return {FocusOn} FocusOn
 */
function aeroplane(): FocusOnValue {
  return new FocusOnValue('aeroplane');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects bicycle
 * @return {FocusOn} FocusOn
 */
function bicycle(): FocusOnValue {
  return new FocusOnValue('bicycle');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects boat
 * @return {FocusOn} FocusOn
 */
function boat(): FocusOnValue {
  return new FocusOnValue('boat');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects bus
 * @return {FocusOn} FocusOn
 */
function bus(): FocusOnValue {
  return new FocusOnValue('bus');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects car
 * @return {FocusOn} FocusOn
 */
function car(): FocusOnValue {
  return new FocusOnValue('car');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects chair
 * @return {FocusOn} FocusOn
 */
function chair(): FocusOnValue {
  return new FocusOnValue('chair');
}


/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects cow
 * @return {FocusOn} FocusOn
 */
function cow(): FocusOnValue {
  return new FocusOnValue('cow');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects diningtable
 * @return {FocusOn} FocusOn
 */
function diningtable(): FocusOnValue {
  return new FocusOnValue('diningtable');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects horse
 * @return {FocusOn} FocusOn
 */
function horse(): FocusOnValue {
  return new FocusOnValue('horse');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects motorbike
 * @return {FocusOn} FocusOn
 */
function motorbike(): FocusOnValue {
  return new FocusOnValue('motorbike');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects pottedplant
 * @return {FocusOn} FocusOn
 */
function pottedplant(): FocusOnValue {
  return new FocusOnValue('pottedplant');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects sheep
 * @return {FocusOn} FocusOn
 */
function sheep(): FocusOnValue {
  return new FocusOnValue('sheep');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects sofa
 * @return {FocusOn} FocusOn
 */
function sofa(): FocusOnValue {
  return new FocusOnValue('sofa');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects train
 * @return {FocusOn} FocusOn
 */
function train(): FocusOnValue {
  return new FocusOnValue('train');
}

/**
 * @memberOf Qualifiers.FocusOn
 * @description Detects tvmonitor
 * @return {FocusOn} FocusOn
 */
function tvmonitor(): FocusOnValue {
  return new FocusOnValue('tvmonitor');
}




/**
 * @memberOf Qualifiers
 * @namespace FocusOn
 */
const FocusOn = {
  person,
  cat,
  microwave,
  refrigerator,
  skateboard,
  bird,
  bottle,
  dog,
  sink,
  face,
  train,
  sofa,
  sheep,
  pottedplant,
  horse,
  faces,
  cow,
  bus,
  boat,
  advancedEyes,
  advancedFace,
  advancedFaces,
  aeroplane,
  background,
  bicycle,
  car,
  chair,
  diningtable,
  tvmonitor,
  motorbike
};


export {
  FocusOnValue,
  FocusOn,
  person,
  cat,
  microwave,
  refrigerator,
  skateboard,
  bird,
  bottle,
  dog,
  sink,
  face,
  train,
  sofa,
  sheep,
  pottedplant,
  horse,
  faces,
  cow,
  bus,
  boat,
  advancedEyes,
  advancedFace,
  advancedFaces,
  aeroplane,
  background,
  bicycle,
  car,
  chair,
  diningtable,
  tvmonitor,
  motorbike
};
