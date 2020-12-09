/**
 *
 * @param publicID
 */
export default function isUrl(publicID: string): RegExpMatchArray {
  return publicID.match(/^https?:\//);
}
