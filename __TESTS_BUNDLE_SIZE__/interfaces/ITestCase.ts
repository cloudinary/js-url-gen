export interface ITestCase {
  sizeLimitInKB: number,
  // The minimum allowed size, a bundle size below this size will fail the test
  // Useful to ensure that something is actually imported!
  // Defaults internally to 2kb if field is omitted
  minAllowedSize?:number,
  importsArray: string[],
  name: string,
  importString?: string
}
