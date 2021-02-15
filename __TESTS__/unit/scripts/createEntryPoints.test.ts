/* eslint @typescript-eslint/no-var-requires: 0 */

import TEST_FILE_STRUCTURE from "../../TestUtils/createEntryMockedFS";

const createEntryPoints = require('../../../scripts/lib/entryPointsLib');
const mock = require('mock-fs');
const fs = require('fs');


describe('Tests for createEntryPoints', () => {
  beforeEach(() => {
    mock.restore();
    mock(TEST_FILE_STRUCTURE);
  });

  it ('Creates the main entrypoint to the project', () => {
    createEntryPoints.copyPackageJson();
    const mainPackageJson = JSON.parse(fs.readFileSync('./dist/package.json', 'utf-8'));

    // Expect the right main entrypoint
    expect(mainPackageJson.main).toBe('./bundles/umd/base.js');
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
    mock.restore();
  });
});




