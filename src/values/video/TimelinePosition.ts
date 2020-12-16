import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";

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
  startOffset(startOffset: number): this {
    this.addQualifier(new Qualifier('so', startOffset));
    return this;
  }

  /**
   * @param duration
   */
  duration(duration: number): this {
    this.addQualifier(new Qualifier('du', duration));
    return this;
  }
}

export {
  TimelinePosition
};
