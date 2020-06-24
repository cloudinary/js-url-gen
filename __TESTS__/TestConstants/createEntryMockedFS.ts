const TEST_FILE_STRUCTURE = {
  'package.json': '{"fieldA":"foobar"}',
  dist: {
    types: {
      onlyTypes: {
        border: {
          'Border.d.ts' : '// Some content'
        }
      },
      actions: {
        border: {
          'Border.d.ts' : '// Some content'
        }
      },
      deep: { // We'll show we can create even deeper entry points
        nested: {
          entryPoint1: {
            'EntryPoint1.d.ts': '// Some content'
          }
        }
      }
    },
    bundles: {
      umd: {
        'package.json': '{}'
      },
      esm: {
        notAFolder: '// Some content',
        onlyESM: {
          border: {
            'Border.js' : '// Some content'
          }
        },
        wrongStructure: {
          border: {
            'thisIsNotRight.js' : '// Some content'
          }
        },
        actions: {
          notADir: '// Some content',
          border: {
            'Border.js' : '// Some content'
          }
        },
        deep: { // We'll show we can create even deeper entry points
          nested: {
            entryPoint1: {
              'EntryPoint1.js': '// Some content'
            }
          }
        }
      }
    }
  }
};

export default TEST_FILE_STRUCTURE;
