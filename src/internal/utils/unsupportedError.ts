class UnsupportedError extends Error {
  constructor(message = 'Unsupported') {
    super(message);
  }
}

/**
 * Creates a new UnsupportedError
 * @param message
 */
function unsupportedError(message: string): UnsupportedError{
  return new UnsupportedError(message);
}
export { UnsupportedError, unsupportedError };
