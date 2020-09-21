class FoundNonRequiredFile extends Error {
  constructor(filePath:string) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super(); /* istanbul ignore next */
    this.message = `File not required by Tree but exists in file system: ${filePath}`;
    this.name = "FoundNonRequiredFile";
  }
}

module.exports = FoundNonRequiredFile;
