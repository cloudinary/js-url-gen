/**
 * @description Describe how the asset URL is delivered
 * @interface IDescriptor
 */
export interface IDescriptor {
  storageType?: string; // type upload/private
  assetType?: string; // resourceType image/video
  version?: number;
  publicID?: string;
  extension?: string;
  suffix ?: string;
  filename?: string;
  location?: string;
  signature?: string;
}
