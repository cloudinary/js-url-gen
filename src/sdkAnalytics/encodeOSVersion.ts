import {base64Map} from "./base64Map.js";

/**
 * @private
 * @description Encodes a semVer-like version string for OS
 * @param {string} semVer Input is x.y
 * @return {string} A string built from 2 characters of the base64 table that encode the semVer
 */
export function encodeOSVersion(semVer: string):string {
  const [major, minor] = semVer.split('.');

  //convert to binary
  const binaryMajorVersion = parseInt(major).toString(2);
  const binaryMinorVersion = parseInt(minor).toString(2);

  //pad to 6
  const paddedMajor = binaryMajorVersion.padStart(6, '0');
  const paddedMinor = binaryMinorVersion.padStart(6, '0');

  return base64Map[paddedMajor]+base64Map[paddedMinor];
}
