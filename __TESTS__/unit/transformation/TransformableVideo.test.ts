import TransformableVideo from "../../../src/transformation/TransformableVideo";

describe('Tests for TransformableVideo', () => {
  let tVideo: TransformableVideo = null;
  beforeEach(() => {
    tVideo = new TransformableVideo();
  });

  it('Instantiates a TransformableVideo', () => {
    expect(tVideo).toBeDefined();
  });

  /**
   * If we add specific TransformableVideo functionality, We should test it here.
   */
});
