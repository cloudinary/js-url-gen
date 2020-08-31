import TransformableImage from "../../../src/transformation/TransformableImage";
import TransformableVideo from "../../../src/transformation/TransformableVideo";

// List of assets types to test
const assetTypes: any = {
  TransformableImage,
  TransformableVideo
};

// Dynamic asset generator
class Asset {
  constructor(className: string, opts: any=null) {
    return new assetTypes[className](opts);
  }
}

['TransformableImage', 'TransformableVideo'].forEach((assetClass) => {
  describe(`Tests for ${assetClass}`, () => {
    let asset: any = null;

    beforeEach(() => {
      //Dynamically generate a new image or video
      asset = new Asset(assetClass);
    });

    it(`Instantiates a ${assetClass}`, () => {
      expect(asset).toBeDefined();
    });

    it('setPublicID should be chainable', () => {
      expect(asset.setPublicID('sample')).toBe(asset);
    });

    it('Sign should be chainable', () => {
      expect(asset.sign()).toBe(asset);
    });

    it('setConfig should be chainable', () => {
      expect(asset.setConfig({
        cloud: {
          cloudName: 'foo'
        }
      })).toBe(asset);
    });

    it('Can use the asset descriptor methods without breaking (Internals not yet implemented)', () => {
      expect(asset
        .setConfig({
          cloud: {
            cloudName: 'demo'
          }
        })
        .setStorageType('fetch')
        .setAssetType('avatar')
        .setVersion(1234)
        .setPublicID('sample')
        .toURL()
      ).toBe('http://res.cloudinary.com/demo/avatar/fetch/v1234/sample');
    });

    it('When providing actions with a toString method, should concat all child strings', () => {
      asset
        .addAction({
          toString() {
            return 'aa';
          }
        })
        .addAction({
          toString() {
            return 'bb';
          }
        });

      expect(asset.toString()).toBe('aa/bb');
    });
  });
});
