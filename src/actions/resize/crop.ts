import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Crop {
  constructor() {
  }
}

/**
 * @return {Crop}
 */
function crop() {
  return new Crop();
}

export default crop;
