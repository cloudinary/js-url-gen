/**
 * @jest-environment node
 */


import pkg from '../../../src/package.json';
import {createNewImageWithAnalytics} from "./testUtils/createNewImageWithAnalytics";

describe('Add analytics to a regular URL', () => {
  it('Works with default values', () => {
    const cldImage = createNewImageWithAnalytics('sample');

    // Generate a URL without any special configuration
    const sigFromDefaultValues = cldImage.toURL().split('?')[1];
    // Generate a URL with provided sdkSemver and techVersion, but we're using the values that should be given by default
    const sigFromExplicitPackageVersion = cldImage.toURL({
      sdkSemver: pkg.version.split('-')[0], // If not specified, this is taken from package.json
      techVersion: process.versions.node
    }).split('?')[1];

    // AT AAB WE 0
    expect(sigFromDefaultValues).not.toBeUndefined();
    expect(sigFromDefaultValues).toBe(sigFromExplicitPackageVersion);
  });


  it('Can overwrite default values', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // D -> Accessibility
    expect(cldImage.toURL({
      sdkCode: 'Z', // arbitrary, just show we can overwrite it
      sdkSemver: '1.24.0', // If not specified, this is taken from package.json
      techVersion: '12.0.0',
      accessibility: true
    })).toContain('?AZAlhAMD');
  });

  it('Test lazyload feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // C -> lazyload
    expect(cldImage.toURL({
      sdkCode: 'Z',
      sdkSemver: '1.24.0',
      techVersion: '12.0.0',
      lazyload: true
    })).toContain('?AZAlhAMC');
  });

  it('Test responsive feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // A -> responsive
    expect(cldImage.toURL({
      sdkCode: 'Z',
      sdkSemver: '1.24.0',
      techVersion: '12.0.0',
      responsive: true
    })).toContain('?AZAlhAMA');
  });

  it('Test placeholder feature value', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    // AZ -> Algo A, SDK Code is Z
    // Alh -> 1.24.0 from package.json
    // AM -> 12.0.0 Underlying tech
    // B -> placeholder
    expect(cldImage.toURL({
      sdkCode: 'Z',
      sdkSemver: '1.24.0',
      techVersion: '12.0.0',
      placeholder: true
    })).toContain('?AZAlhAMB');
  });

  it('Can be turned off', () => {
    const cldImage = createNewImageWithAnalytics('sample', {}, {
      analytics: false
    });

    expect(cldImage.toURL({
      sdkCode: 'M',
      sdkSemver: '1.24.0', // If not specified, this is taken from package.json
      techVersion: '12.0.0'
    })).not.toContain('?'); // we shouldn't have a query param at all
  });
});
