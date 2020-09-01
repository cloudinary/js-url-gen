import Transcode, {TranscodeAction, FPSAction} from "../../../src/actions/transcode/Transcode";
import * as TranscodeESM from "../../../src/actions/transcode/Transcode";
import TransformableVideo from '../../../src/transformation/TransformableVideo';
// import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

/*
const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});
 */

describe('Tests for Transformation Action -- Transcode', () => {
  it ('Ensures ESM Matches Default', () => {
    expectESMToMatchDefault(TranscodeESM, Transcode);
  });

  it('Ensures VideoEdit namespace is accepted as an action to TransformableVideo', () => {
    const tVideo = new TransformableVideo();
    // Ensures it compiles and doesn't throw
    expect(
      tVideo.transcode(new TranscodeAction("123"))
        .fps(new FPSAction("123"))
    ).toEqual(tVideo);
  });
});
