/**
 * @@doc
 * @memberOf Values
 * @namespace AudioCodec
 */

/**
 * @description Removes the audio channel from the video, effectively muting it.
 * @memberOf Values.AudioCodec
 */
function none(): string {
  return 'none';
}

/**
 * @memberOf Values.AudioCodec
 */
function aac(): string {
  return 'aac';
}

/**
 * @memberOf Values.AudioCodec
 */
function vorbis(): string {
  return 'vorbis';
}

/**
 * @memberOf Values.AudioCodec
 */
function mp3(): string {
  return 'mp3';
}

/**
 * @memberOf Values.AudioCodec
 */
function opus(): string {
  return 'opus';
}


const AudioCodec = {
  aac,
  mp3,
  opus,
  none,
  vorbis
};

export {
  AudioCodec,
  aac,
  mp3,
  opus,
  none,
  vorbis
};


