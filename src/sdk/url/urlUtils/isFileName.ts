/**
 *
 * @param publicID
 */
export default function isFileName(publicID: string): boolean {
  return publicID.indexOf('/') < 0;
}
