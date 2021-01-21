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
   * @param {string | number} startOffset
   */
  startOffset(startOffset: number | string): this {
    this.addQualifier(new Qualifier('so', startOffset));
    return this;
  }

  /**
   * @param {string | number} endOffset
   */
  endOffset(endOffset: number | string): this {
    this.addQualifier(new Qualifier('eo', endOffset));
    return this;
  }

  /**
   * @param {string | number} duration
   */
  duration(duration: number | string): this {
    this.addQualifier(new Qualifier('du', duration));
    return this;
  }
}

export {
  TimelinePosition
};
