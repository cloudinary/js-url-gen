class UnsupportedError extends Error {
  constructor(message = 'Unsupported') {
    super(message);
  }
}

/**
 * Creates a new UnsupportedError
 * @param message
 */
function createUnsupportedError(message: string): UnsupportedError{
  return new UnsupportedError(message);
}
export { UnsupportedError, createUnsupportedError };
