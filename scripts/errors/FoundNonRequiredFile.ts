class FoundNonRequiredFile extends Error {
  constructor(filePath:string) {
    super();
    this.message = `File not required by Tree but exists in file system: ${filePath}`;
    this.name = "FoundNonRequiredFile";
  }
}

module.exports = FoundNonRequiredFile;
