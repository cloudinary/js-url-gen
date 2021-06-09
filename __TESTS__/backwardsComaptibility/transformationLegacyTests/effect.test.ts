import {createTestURL} from "./utils/createTestURL";

describe('effect', function () {
  it('should support effect', function() {
    expect(createTestURL('test', {
      effect: 'sepia'
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_sepia/test');
  });

  it('should support effect with param', function() {
    expect(createTestURL('test', {
      effect: ['sepia', -10]
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_sepia:-10/test');
  });

  it('should support art:incognito effect', function() {
    expect(createTestURL('test', {
      effect: 'art:incognito'
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_art:incognito/test');
  });

  it('should support art:incognito effect passed as an array', function() {
    expect(createTestURL('test', {
      effect: ['art', 'incognito']
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_art:incognito/test');
  });

  it('should support blur_region effect with ocr_text gravity', function() {
    expect(createTestURL('test', {
      effect: ['blur_region', 5000],
      gravity: 'ocr_text'
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_blur_region:5000,g_ocr_text/test');
  });

  it('should support pixelate_region effect with ocr_text gravity', function() {
    expect(createTestURL('test', {
      effect: 'pixelate_region',
      gravity: 'ocr_text'
    })).toContain('http://res.cloudinary.com/demo/image/upload/e_pixelate_region,g_ocr_text/test');
  });
});
