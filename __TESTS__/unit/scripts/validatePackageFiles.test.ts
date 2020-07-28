/* eslint @typescript-eslint/no-var-requires: 0 */

const validatePackageFiles = require('../../../scripts/validatePackageFiles');
const MissingRequiredFile = require('../../../scripts/errors/MissingRequiredFile');
const FoundNonRequiredFile= require('../../../scripts/errors/FoundNonRequiredFile');

global.console = console;
const mock = require('mock-fs');


describe('Tests for ValidatePackageFiles', () => {
  beforeEach(() => {
    mock.restore();
    mock({
      'dist': {
        foo: '//AnyFileContents',
        bar: {
          foobar: '//AnyFileContents'
        }
      }
    });
  });

  it('Validates an input JSON with a mocked file system', () => {
    validatePackageFiles({
      foo: 'file',
      bar: {
        foobar: 'file'
      }
    });
  });

  it('Will throw if a file needs to exist, but does not exist', () => {
    expect(() => {
      validatePackageFiles({
        missingFoo: 'file',
        foo: 'file',
        bar: {
          foobar: 'file'
        }
      }, './dist');
    }).toThrow(new MissingRequiredFile('dist/missingFoo'));
  });


  it('Will throw if the file system has more entries than the JSON', () => {
    expect(() => {
      validatePackageFiles({
        foo: 'file',
        bar: {}
      }, './dist');
    }).toThrow(new FoundNonRequiredFile('dist/bar/foobar'));
  });

  it('Will not throw when a key is explicitly set to ignore ', () => {
    validatePackageFiles({
      foo: 'file',
      bar: false
    }, './dist');
  });

  it('Will not throw when a level is provided a key to ignore ', () => {
    validatePackageFiles({
      $suppressNonRequiredFilesError: true,
      foo: 'file'
    }, './dist');
  });

  afterAll(() => {
    mock.restore();
  });
});




