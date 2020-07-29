export interface IFileStructureLevel {
  $suppressNonRequiredFilesError?: boolean;

  [key: string]: string | boolean | IFileStructureLevel;
}

export interface IFlatFileStructureLevel {
  [key: string]: string | boolean;
}
