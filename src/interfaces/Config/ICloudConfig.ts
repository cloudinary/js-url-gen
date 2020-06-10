/**
 * Less likely to change between different assets
 */
interface ICloudConfig {
  cloud_name?: string;
  secure_distribution?: boolean;
  api_key?: string;
  api_secret?: string;
  private_cdn?: boolean;
  cdn_subdomain?: boolean;
  secure_cdn_subdomain?: boolean;
  cname?: string; // User subdomain (example.cloudinary.com)
  ssl_detected?: boolean;
  secure?: boolean;
  [other:string]: unknown;
}

export default ICloudConfig;
