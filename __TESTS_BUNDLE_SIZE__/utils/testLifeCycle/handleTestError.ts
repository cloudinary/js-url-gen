import log from "../log";

/**
 *
 * @param name
 * @param expected
 * @param received
 */
function handleTestError(name: string, expected: number, received: number) {
  log.error(name);
  log.error(`\tExpected size: ${expected} KB`);
  log.error(`\tActual size: ${received} KB\n`);
}

export default handleTestError;
