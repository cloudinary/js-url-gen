/**
 * @jest-environment jsdom
 */

import {createNewImageWithAnalytics} from "./testUtils/createNewImageWithAnalytics";
import {createNewVideoWithAnalytics} from "./testUtils/createNewVideoWithAnalytics";

describe('Add analytics to a URL from the browser', () => {
  it('Uses default techVersion 0.0.0 when in browser for image', () => {
    const cldImage = createNewImageWithAnalytics('sample');
    const url = cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: '1.0.0'
      }
    });

    // CATAABAAZ{NODE_VERSION}0
    // CATAABAAZ{AA}0 -> we expect nodeVersion to be 0.0.0 in browser (Since it's missing)
    // expect CATAABAAZAA0
    expect(url).toContain('sample?_a=CATAABAAZAA0'); // we shouldn't have a query param at all
  });

  it('Uses default techVersion 0.0.0 when in browser for image with file extension', () => {
    const cldImage = createNewImageWithAnalytics('sample.jpg');
    const url = cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: '1.0.0'
      }
    });

    // CATAABAAZ{NODE_VERSION}0
    // CATAABAAZ{AA}0 -> we expect nodeVersion to be 0.0.0 in browser (Since it's missing)
    // expect CATAABAAZAA0
    expect(url).toContain('sample.jpg?_a=CATAABAAZAA0'); // we shouldn't have a query param at all
  });

  it('Uses default techVersion 0.0.0 when in browser for video', () => {
    const cldImage = createNewVideoWithAnalytics('sample');
    const url = cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: '1.0.0'
      }
    });

    // CATAABAAZ{NODE_VERSION}0
    // CATAABAAZ{AA}0 -> we expect nodeVersion to be 0.0.0 in browser (Since it's missing)
    // expect CATAABAAZAA0
    expect(url).toContain('sample?_a=CATAABAAZAA0'); // we shouldn't have a query param at all
  });


  it('Uses default techVersion 0.0.0 when in browser for video with file extension', () => {
    const cldImage = createNewVideoWithAnalytics('sample.webm');
    const url = cldImage.toURL({
      trackedAnalytics: {
        sdkSemver: '1.0.0'
      }
    });

    // CATAABAAZ{NODE_VERSION}0
    // CATAABAAZ{AA}0 -> we expect nodeVersion to be 0.0.0 in browser (Since it's missing)
    // expect CATAABAAZAA0
    expect(url).toContain('sample.webm?_a=CATAABAAZAA0'); // we shouldn't have a query param at all
  });
});
