import VideoEdit, {TrimAction} from '../../../src/actions/videoEdit/VideoEdit';
import * as VideoEditESM from '../../../src/actions/videoEdit/VideoEdit';
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

describe('Tests for Transformation Action -- VideoEdit', () => {
  it ('Ensures ESM Matches Default', () => {
    expectESMToMatchDefault(VideoEditESM, VideoEdit);
  });

  it('Ensures VideoEdit namespace is accepted as an action to TransformableVideo', () => {
    const tVideo = new TransformableVideo();
    // Ensures it compiles and doesn't throw
    expect(
      tVideo.trim(new TrimAction("123"))
    ).toEqual(tVideo);
  });
});
