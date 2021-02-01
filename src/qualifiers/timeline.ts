import {TimelinePosition} from "./video/TimelinePosition";

/**
 * @memberOf Qualifiers
 * @namespace TimelinePosition
 */

/**
 * @memberOf Qualifiers.TimelinePosition
 * @return {Qualifiers.TimelinePosition.TimelinePosition}
 */
function position():TimelinePosition {
  return new TimelinePosition();
}

const Timeline = {
  position
};

export {Timeline, position};

