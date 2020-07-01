/**
 *
 * @param publicID
 */
export default function publicIDContainsVersion(publicID: string) {
  return publicID.match(/^v[0-9]+/);
}
