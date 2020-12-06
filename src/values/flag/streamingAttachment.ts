import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description If the requested video transformation has already been generated, this flag works identically to
 * Flag::attachment.
 *
 *  However, if the video transformation is being requested for the first time, this flag causes the video download
 * to begin immediately, streaming it as a fragmented video file.
 *
 * In contrast, if the regular fl_attachment flag is used when a user requests a new video transformation,
 * the download will begin only after the complete transformed video has been generated.
 *
 * Most standard video players successfully play fragmented video files without issue.
 *
 * @param {string} filename The attachment's filename
 * @return {Values.Flag.FlagQualifier}
 */
function streamingAttachment(filename: string): FlagQualifier {
  return new FlagQualifier('streaming_attachment', filename);
}

export {streamingAttachment};
