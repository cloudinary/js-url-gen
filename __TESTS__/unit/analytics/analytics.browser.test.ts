/**
 * @jest-environment jsdom
 */



import {createNewImageWithAnalytics} from "./testUtils/createNewImageWithAnalytics";


describe('Add analytics to a URL from the browser', () => {
  it('Uses default techVersion 0.0.0 when in browser', () => {
    const cldImage = createNewImageWithAnalytics('sample');

    // ATAAB{NODE_VERSION}0
    // ATAAB{AA}0 -> we expect nodeVersion to be 0.0.0 in browser (Since it's missing)
    // expect ATAABAA0
    expect(cldImage.toURL({
      sdkSemver: '1.0.0'
    })).toContain('ATAABAA0'); // we shouldn't have a query param at all
  });
});
