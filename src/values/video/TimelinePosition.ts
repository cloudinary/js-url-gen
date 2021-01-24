import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {StringNumberOrExpression} from "../../simpleTypes";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace TimelinePosition
 * @memberOf Values
 */


/**
 * TimelinePosition
 * @memberOf Values.TimelinePosition
 */
class TimelinePosition extends Action {
  constructor() {
    super();
  }

  /**
   * @param startOffset
   */
  startOffset(startOffset: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('so', startOffset));
    return this;
  }

  /**
   * @param duration
   */
  duration(duration: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('du', duration));
    return this;
  }
}

export {
  TimelinePosition
};
