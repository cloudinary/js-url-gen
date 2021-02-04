import {TimelinePosition} from "./video/TimelinePosition";

/**
 * @memberOf Qualifiers
 * @namespace TimelinePosition
 */

/**
 * @summary qualifier
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

