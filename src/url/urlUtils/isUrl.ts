/**
 *
 * @param publicID
 */
export default function isUrl(publicID: string) {
  return publicID.match(/^https?:\//);
}
