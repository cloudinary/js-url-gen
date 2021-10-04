let defaultResolver;

/**
 *
 * @return {(path: Config.Path, options: ResolverOptions) => Config.Path}
 */
async function requireDefaultResolver() {
  if (!defaultResolver) {
    try {
      defaultResolver = await import(`jest-resolve/build/defaultResolver`).default;
    } catch (error) {
      defaultResolver = await import(`jest-resolve/build/default_resolver`).default;
    }
  }

  return defaultResolver;
}


module.exports = (request, options) => {
  let {basedir, defaultResolver, extensions} = options;

  if (!defaultResolver) {
    defaultResolver = requireDefaultResolver();
  }

  try {
    return defaultResolver(request, options);
  } catch (e) {
    return defaultResolver(request.replace(/\.js$/, '.ts'), options);
  }
}
