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
