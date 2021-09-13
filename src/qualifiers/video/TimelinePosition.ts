import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {StringNumberOrExpression} from "../../simpleTypes.js";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace TimelinePosition
 * @memberOf Qualifiers
 */


/**
 * TimelinePosition
 * @memberOf Qualifiers.TimelinePosition
 */
class TimelinePosition extends Action {
  constructor() {
    super();
  }

  /**
   * @param {string | number} startOffset
   */
  startOffset(startOffset: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('so', startOffset));
    return this;
  }

  /**
   * @param {string | number} endOffset
   */
  endOffset(endOffset: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('eo', endOffset));
    return this;
  }

  /**
   * @param {string | number} duration
   */
  duration(duration: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('du', duration));
    return this;
  }
}

export {
  TimelinePosition
};
