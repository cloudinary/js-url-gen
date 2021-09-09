import {existsSync} from 'fs';
import {resolve} from 'path';
import {exports as packageExports} from '../package.json';
import {getFilesRecursively} from "./TestUtils/getFilesRecursively";

describe("package.json exports", () => {
  const expectedPackageExports: Record<string, string> = {
    '.': './index.js',
    './package.json': './package.json'
  };

  // Get list of .js files that have a sibling directory with the same name
  const files = getFilesRecursively(resolve('./dist'))
    .filter((file: string) => file.endsWith('.js') && existsSync(file.slice(0, -3)));

  // Fill result with key=dir, value=file
  files.forEach((file) => {
    const fileDir = `./${file.slice(file.indexOf('dist/') + 5, -3)}`;
    expectedPackageExports[fileDir] = `${fileDir}.js`;
  });

  it('should export exactly the actual files in ./dist', () => {
    expect(expectedPackageExports).toStrictEqual(packageExports);
  });
});
