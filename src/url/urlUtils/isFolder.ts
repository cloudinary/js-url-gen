/**
 *
 * @param publicID
 */
export default function isFolder(publicID: string) {
  return publicID.indexOf('/') < 0;
}
