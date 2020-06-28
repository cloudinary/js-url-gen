/* eslint @typescript-eslint/no-var-requires: 0 */

import TEST_FILE_STRUCTURE from "../../TestConstants/createEntryMockedFS";

const createEntryPoints = require('../../../scripts/lib/entryPointsLib');
const mock = require('mock-fs');
const fs = require('fs');


describe('Tests for createEntryPoints', () => {
  beforeEach(() => {
    mock.restore();
    mock(TEST_FILE_STRUCTURE);
  });

  it('Creates package.jsons in the actions directory', () => {
    createEntryPoints.createEntryPointFromESMPath('actions', `actions`);
    const entryPointPackageJSON = JSON.parse(fs.readFileSync('./dist/actions/border/package.json', 'utf-8'));

    expect(entryPointPackageJSON.types).toBe('../../types/actions/border/Border.d.ts');
    expect(entryPointPackageJSON.main).toBe('../../bundles/esm/actions/border/Border.js');
    expect(entryPointPackageJSON.sideEffects).toBe(false);
  });

  it ('Works on extremely nested inputs', () => {
    createEntryPoints.createEntryPointFromESMPath('deep/nested', `deep/nested/is/very/deep`);
    const entryPointPackageJSON = JSON.parse(fs.readFileSync('./dist/deep/nested/is/very/deep/entryPoint1/package.json', 'utf-8'));

    expect(entryPointPackageJSON.types).toBe('../../../../../../types/deep/nested/entryPoint1/EntryPoint1.d.ts');
    expect(entryPointPackageJSON.main).toBe('../../../../../../bundles/esm/deep/nested/entryPoint1/EntryPoint1.js');
    expect(entryPointPackageJSON.sideEffects).toBe(false);
  });

  it ('Creates the main entrypoint to the project', () => {
    createEntryPoints.createMainEntryPoint();
    const mainPackageJson = JSON.parse(fs.readFileSync('./dist/package.json', 'utf-8'));

    // Expect the right main entrypoint
    expect(mainPackageJson.main).toBe('./bundles/esm/index.js');
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
    expect(umdBundlePackageJson.types).toBe('../../types/index.d.ts');
    expect(umdBundlePackageJson.sideEffects).toBe(false);
  });

  it('Fails if it cannot find a d.ts file', () => {
    try {
      createEntryPoints.createEntryPointFromESMPath('onlyESM', `onlyESM`);
    } catch(error) {
      expect(error.toString()).toContain('[X] ./dist/types/onlyESM/border/Border.d.ts');
    }
  });

  it('Fails if it does not have the right file structure', () => {
    try {
      createEntryPoints.createEntryPointFromESMPath('wrongStructure', `wrongStructure`);
    } catch(error) {
      expect(error.toString()).toContain('[X] ./dist/bundles/esm/wrongStructure/border/Border.js');
    }
  });

  it('Fails if it cannot find a js file in bundles/esm', () => {
    try {
      createEntryPoints.createEntryPointFromESMPath('onlyTypes', `onlyTypes`);
    } catch(error) {
      expect(error.toString()).toContain('./dist/bundles/esm/onlyTypes does not exist, cannot be read or is not a folder');
    }
  });

  it('Fails if using a path that is not a folder', () => {
    try {
      createEntryPoints.createEntryPointFromESMPath('notAFolder', `notAFolder`);
    } catch(error) {
      expect(error.toString()).toContain('./dist/bundles/esm/notAFolder does not exist, cannot be read or is not a folder');
    }
  });

  afterAll(() => {
    mock.restore();
  });
});




