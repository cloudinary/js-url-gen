import {Flag} from './Flag';

/**
 * @memberOf Params.Flag
 * @description Automatically use lossy compression when delivering animated GIF files.
 *
 * This flag can also be used as a conditional flag for delivering PNG files: it tells Cloudinary to deliver the
 * image in PNG format (as requested) unless there is no transparency channel - in which case deliver in JPEG
 * format.
 */
function lossy(): Flag{
  return new Flag('lossy');
}

export default lossy;
