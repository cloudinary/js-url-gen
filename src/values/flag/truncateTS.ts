import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Truncate (trim) a video file based on the start time defined in the metadata (relevant only where the metadata
 * includes a directive to play only a section of the video).
 * @return {Values.Flag.FlagQualifier}
 */
function truncateTS(): FlagQualifier {
  return new FlagQualifier('truncate_ts');
}

export {truncateTS};
