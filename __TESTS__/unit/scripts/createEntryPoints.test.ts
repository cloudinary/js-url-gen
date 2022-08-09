/* eslint @typescript-eslint/no-var-requires: 0 */

const { TEST_FILE_STRUCTURE } = require('../../TestUtils/createEntryMockedFS');

const createEntryPoints = require('../../../scripts/lib/entryPointsLib');
const mockFs = require('mock-fs');
const fs = require('fs');

describe('Tests for createEntryPoints', () => {
  beforeEach(() => {
    mockFs.restore();
    mockFs(TEST_FILE_STRUCTURE);
  });

  it ('Creates the main entrypoint to the project', () => {
    createEntryPoints.copyPackageJson();
    const mainPackageJson = JSON.parse(fs.readFileSync('./dist/package.json', 'utf-8'));

    // Expect the right main entrypoint
    expect(mainPackageJson.main).toBe('./bundles/umd/base.js');
    expect(mainPackageJson.module).toBe('./index.js');
    expect(mainPackageJson.browser).toBe('./index.js');
    // Expect not to delete existing values
    expect(mainPackageJson.fieldA).toBe('foobar');
    expect(mainPackageJson.sideEffects).toBe(false);
  });

  it ('Creates a UMD Bundle Entrypoint', () => {
    createEntryPoints.createUMDBundleEntryPoint();
    const umdBundlePackageJson = JSON.parse(fs.readFileSync('./dist/bundles/umd/package.json', 'utf-8'));

    // Expect the right main entrypoint
    expect(umdBundlePackageJson.main).toBe('./base.js');
    // Expect not to delete existing values
    expect(umdBundlePackageJson.types).toBe('../../index.d.ts');
    expect(umdBundlePackageJson.sideEffects).toBe(false);
  });

  afterAll(() => {
    mockFs.restore();
  });
});




