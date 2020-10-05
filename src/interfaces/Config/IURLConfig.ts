/**
 * @name ICloudinaryAssetConfigurations
 * @description
 * Defines the configuration needed for URL-related options when creating Cloudianry URL
 *
 * @prop {boolean} [cdnSubdomain]
 * @prop {boolean} [secureCdnSubdomain]
 * @prop {string}  [cname]
 * @prop {boolean} [secureDistribution]
 * @prop {boolean} [privateCdn]
 * @prop {boolean} [signUrl]
 * @prop {boolean} [longUrlSignature]
 * @prop {boolean} [shorten]
 * @prop {boolean} [useRootPath]
 * @prop {boolean} [secure]
 * @prop {boolean} [forceVersion]
 * @prop {boolean} [analytics]
 */
interface IURLConfig {
  cdnSubdomain?: boolean;
  secureCdnSubdomain?: boolean;
  cname?: string; // User subdomain (example.cloudinary.com)
  secureDistribution?: boolean;
  privateCdn?: boolean;
  signUrl?: boolean;
  longUrlSignature?: boolean;
  shorten?: boolean;
  useRootPath?: boolean;
  secure?: boolean;
  forceVersion?: boolean;
  analytics?: boolean;
}

export default IURLConfig;
