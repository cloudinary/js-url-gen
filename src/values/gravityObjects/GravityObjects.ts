/**
 * @@doc
 * @memberOf Values
 * @namespace GravityObjects
 */
import {GravityObject} from "./GravityObject";
import {AutoGravity} from "./AutoGravity";


/**
 * @memberOf Values.GravityObjects
 */
function bird(): GravityObject {
  return new GravityObject('bird');
}

/**
 * @memberOf Values.GravityObjects
 */
function dog(): GravityObject {
  return new GravityObject('dog');
}

/**
 * @memberOf Values.GravityObjects
 */
function cat(): GravityObject {
  return new GravityObject('cat');
}

/**
 * @memberOf Values.GravityObjects
 */
function microwave(): GravityObject {
  return new GravityObject('microwave');
}

/**
 * @memberOf Values.GravityObjects
 */
function refrigerator(): GravityObject {
  return new GravityObject('refrigerator');
}

/**
 * @memberOf Values.GravityObjects
 */
function bottle(): GravityObject {
  return new GravityObject('bottle');
}

/**
 * @memberOf Values.GravityObjects
 */
function sink(): GravityObject {
  return new GravityObject('sink');
}

/**
 * @memberOf Values.GravityObjects
 */
function skateboard(): GravityObject {
  return new GravityObject('skateboard');
}

/**
 * @memberOf Values.GravityObjects
 */
function person(): GravityObject {
  return new GravityObject('person');
}


export {
  AutoGravity,
  person,
  cat,
  microwave,
  refrigerator,
  skateboard,
  bird,
  bottle,
  dog,
  sink
};
