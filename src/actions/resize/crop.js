import '../../interfaces/IAction';

/**
 * @implements IAction
 */
class Crop {
  constructor() {
    this.name = 'Crop'
  }
}

/**
 * @return {Crop}
 */
function crop() {
  return new Crop()
}

export default crop;
