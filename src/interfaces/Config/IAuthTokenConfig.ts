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
