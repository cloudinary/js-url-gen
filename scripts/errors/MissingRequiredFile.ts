class MissingRequiredFile extends Error {
  constructor(currentPath:string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super(); /* istanbul ignore next */
    this.message = `File ${currentPath} does not exist, \nIf you added a new file or folder, please update the validation step`;
    this.name = "MissingRequiredFileError";
  }
}

module.exports = MissingRequiredFile;
