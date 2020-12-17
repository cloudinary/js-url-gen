import {TimelinePosition} from "./video/TimelinePosition";

/**
 * @memberOf Values
 * @namespace TimelinePosition
 */

/**
 * @memberOf Values.TimelinePosition
 * @return {Values.TimelinePosition.TimelinePosition}
 */
function position():TimelinePosition {
  return new TimelinePosition();
}

const Timeline = {
  position
};

export {Timeline, position};

