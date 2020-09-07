import getImageWithResize from "./shared/getImageWithResize";
import fit from '../../../../src/actions/resize/ResizeActions/FitAction';

describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(fit(250, 250), 'url');
    expect(url).toContain('c_fit,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      fit()
        .width(250)
        .height(250),
      'url');
    expect(url).toContain('c_fit,h_250,w_250');
  });
});
