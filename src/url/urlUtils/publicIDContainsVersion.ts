/**
 *
 * @param publicID
 */
export default function publicIDContainsVersion(publicID: string): RegExpMatchArray {
  return publicID.match(/^v[0-9]+/);
}
