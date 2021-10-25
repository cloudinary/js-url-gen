/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */

import {objectFlip} from "./utils/objectFlip.js";

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
  "width": "w",
  "trimmed_aspect_ratio": "tar",
  "current_public_id": "cpi",
  "initial_density": "idn",
  "page_names": "pgnames"
};

export const ACTION_TYPE_TO_CROP_MODE_MAP: Record<string, string> = {
  limitFit: 'limit',
  limitFill: 'lfill',
  minimumFit: 'mfit',
  thumbnail: 'thumb',
  limitPad: 'lpad',
  minimumPad: 'mpad'
};

export const CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
