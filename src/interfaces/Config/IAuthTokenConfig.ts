/**
 * @name IAuthTokenConfig
 * @prop {string} token_name
 * @prop {string} duration
 * @prop {string} start_time
 * @prop {string} expiration
 * @prop {string} ip
 * @prop {string} acl
 * @prop {string} url
 * @prop {string} key
 */
interface IAuthTokenConfig {
  token_name: string,
  duration: string,
  start_time: string,
  expiration: string,
  ip: string;
  acl: string;
  url: string;
  key: string
}

export default IAuthTokenConfig;
