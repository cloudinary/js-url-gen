class MissingRequiredFile extends Error {
  constructor(currentPath:string) {
    super();
    this.message = `File ${currentPath} does not exist, \nIf you added a new file or folder, please update the validation step`;
    this.name = "MissingRequiredFileError";
  }
}

module.exports = MissingRequiredFile;
