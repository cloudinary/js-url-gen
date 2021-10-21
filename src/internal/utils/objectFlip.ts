/**
 * Flip keys and values for given object
 * @param obj
 */
function objectFlip(obj: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });

  return result;
}

export {objectFlip};