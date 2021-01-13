import {Transformation} from "../../../src/transformation/Transformation";

describe('Tests for ImageTransformation', () => {
  let tx: Transformation = null;
  beforeEach(() => {
    tx = new Transformation();
  });

  it('Instantiates a ImageTransformation', () => {
    expect(tx).toBeDefined();
  });

  it('Accepts a raw transformation', () => {
    tx.addTransformation('w_100/w_200/w_300');
    expect(tx.toString()).toContain('w_100/w_200/w_300');
  });

  it('Throws when passing a slash to an action', () => {
    expect(() => {
      tx.addAction('w_100/w_200/w_300');
    }).toThrow();
  });
});
