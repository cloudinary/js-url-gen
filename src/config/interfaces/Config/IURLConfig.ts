/**
 * @name ICloudinaryAssetConfigurations
 * @summary config
 * @description Defines the configuration needed for URL-related options when creating Cloudinary URL
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|URL Parameters}
 * @prop {string}  [cname]
 * @prop {string} [secureDistribution]
 * @prop {boolean} [privateCdn]
 * @prop {boolean} [signUrl]
 * @prop {boolean} [longUrlSignature]
 * @prop {boolean} [shorten]
 * @prop {boolean} [useRootPath]
 * @prop {boolean} [secure]
 * @prop {boolean} [forceVersion]
 * @prop {boolean} [analytics]
 *   // TODO: This is just for generating docs - we need to change the type here to accept string
 * @prop {object|string} [queryParams]  
 * @example
 * import Cloudinary from '@cloudinary/url-gen';
 * // The Cloudinary Instance accepts a URLConfig under the `url` key
 * const cld = new Cloudinary({
 *  // the cloudConfig
 *  cloud: {
 *       cloudName: 'demo'
 *   },
 *   // the urlConfig
 *   url: {
 *       cname: 'www.example.com',
 *       forceVersion: true
 *   }
 * });
 */
interface IURLConfig {
  /**
   * Replace the asset domain when secure is false
   * http://{cname}/{cloudName}/image/upload
   */
  cname?: string;

  /**
   * Replace the asset domain when secure is true
   * https://{cname}/{cloudName}/image/upload
   */
  secureDistribution?: string;

  /**
   * When Cname or secureDistribution are provided (with secure accordingly),
   * privateCdn removes the cloudName from the URL:
   *
   * https://{cname|secureDistribution}/image/upload
   * instead of
   * https://{cname|secureDistribution}/{cloudName}image/upload
   *
   * When privateCdn is provided without cname or secure distribution,
   * it moves the cloudName from the URL to the domain:
   *
   * https://{cloudName}-res.cloudinary.com/image/upload
   * instead of
   * https://res.cloudinary.com/{cloudName}/image/upload
   */
  privateCdn?: boolean;

  /**
   * use HTTPS or HTTP
   */
  secure?: boolean;


  /**
   * Whether or not to include the SDK version signature in the URL
   */
  analytics?: boolean;

  /**
   * Whether or not to sign the URL
   */
  signUrl?: boolean;

  /**
   * Whether or not to use a long signature
   */
  longUrlSignature?: boolean;

  /**
   * Whether or not to shorten the URL
   */
  shorten?: boolean;

  /**
   * Whether or not to use the root path
   */
  useRootPath?: boolean;

  /**
   * Whether or not to force a version
   */
  forceVersion?: boolean;

  /**
   * Additional params to be added to the URL
   */
  // TODO: We need to change the type here to accept string
  queryParams?: Record<string, string | number | boolean> | string
}

export default IURLConfig;
