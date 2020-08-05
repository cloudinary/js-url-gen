import Action from "../../actions/Action";
import Param from "../../parameters/Param";
import ParamValue from "../../parameters/ParamValue";

/**
 * Even though Position is technically an actionParam, it implements exactly the same functionality as an action.
 * This is true because Position is actually multiParam
 */
class BlendMode extends Action {
  constructor(blendMode:string, level?:number) {
    super();
    this.addParam(new Param('e', new ParamValue([blendMode, level])));
  }
}


/**
 * @description Add an overlay image blended using the 'multiply' blend mode.
 */
function multiply():BlendMode {
  return new BlendMode('multiply');
}

/**
 * @description Add an overlay image blended using the 'screen' blend mode.
 */
function screen():BlendMode {
  return new BlendMode('screen');
}

/**
 * @description Add an overlay image blended using the 'overlay' blend mode.
 */
function overlay():BlendMode {
  return new BlendMode('overlay');
}

export {
  screen,
  multiply,
  overlay,
  BlendMode
};

export default {
  screen,
  multiply,
  overlay,
  BlendMode
};
