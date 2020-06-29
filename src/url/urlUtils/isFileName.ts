/**
 *
 * @param publicID
 */
export default function isFileName(publicID: string) {
  return publicID.indexOf('/') < 0;
}
