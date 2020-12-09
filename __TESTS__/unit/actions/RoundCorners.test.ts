import {byRadius, max} from 'actions/roundCorners/RoundCorners';
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for Transformation Action -- RoundCorners', () => {

  it('Ensure roundCorners accepts 1 radius', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .roundCorners(byRadius(25))
      .toURL();
    expect(url).toContain('r_25');
  });

  it('Ensure roundCorners accepts 2 radius', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .roundCorners(byRadius(25, 20))
      .toURL();
    expect(url).toContain('r_25:20');
  });

  it('Ensure roundCorners accepts 3 radius', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .roundCorners(byRadius(25, 20, 15))
      .toURL();
    expect(url).toContain('r_25:20:15');
  });

  it('Ensure roundCorners accepts 4 radius', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .roundCorners(byRadius(25, 20, 15, 10))
      .toURL();
    expect(url).toContain('r_25:20:15:10');
  });

  it('Ensure roundCorners accepts max radius', () => {
    const url = new CloudinaryImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .roundCorners(max())
      .toURL();
    expect(url).toContain('r_max');
  });
});
