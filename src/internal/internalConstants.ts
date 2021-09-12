/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */

/**
 * @private
 */
export const ALLOWED_URL_CONFIG = [
  'cname',
  'secureDistribution',
  'privateCdn',
  'signUrl',
  'longUrlSignature',
  'shorten',
  'useRootPath',
  'secure',
  'forceVersion',
  'analytics'
];

/**
 * @private
 */
export const ALLOWED_CLOUD_CONFIG = [
  'cloudName',
  'apiKey',
  'apiSecret',
  'authToken'
];

/**
 * @private
 */
export const INVALID_TYPE_MESSAGE = 'Invalid Type or key received';

export const CONDITIONAL_OPERATORS = {
  "=": "eq",
  "!=": "ne",
  "<": "lt",
  ">": "gt",
  "<=": "lte",
  ">=": "gte",
  "&&": "and",
  "||": "or",
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow"
};

export const RESERVED_NAMES = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "duration": "du",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "initial_duration": "idu",
  "initialDuration": "idu",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};
