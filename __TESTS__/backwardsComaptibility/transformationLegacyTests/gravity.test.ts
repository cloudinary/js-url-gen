import {createTestURL} from "./utils/createTestURL";

describe("gravity", function() {
  it ('placeholder', () => {
    expect(true).toBe(true);
  });

  it("should support auto", function() {
    expect(createTestURL("test", {
      width: 100,
      height: 100,
      crop: 'crop',
      gravity: 'auto'
    })).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_auto,h_100,w_100/test");

    expect(createTestURL("test", {
      width: 100,
      height: 100,
      crop: 'crop',
      gravity: 'auto'
    })).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_auto,h_100,w_100/test");
  });

  it("should support focal gravity", function() {
    ["adv_face", "adv_faces", "adv_eyes", "face", "faces", "body", "no_faces"].map(function(focal) {
      expect(createTestURL("test", {
        width: 100,
        height: 100,
        crop: 'crop',
        gravity: `auto:${focal}`
      })).toBe(`http://res.cloudinary.com/demo/image/upload/c_crop,g_auto:${focal},h_100,w_100/test`);
    });
  });
  it("should support auto level with thumb cropping", function() {
    [0, 10, 100].map(function(level) {
      expect(createTestURL("test", {
        width: 100,
        height: 100,
        crop: 'thumb',
        gravity: `auto:${level}`
      })).toBe(`http://res.cloudinary.com/demo/image/upload/c_thumb,g_auto:${level},h_100,w_100/test`);

      expect(createTestURL("test", {
        width: 100,
        height: 100,
        crop: 'thumb',
        gravity: `auto:adv_faces:${level}`
      })).toBe(`http://res.cloudinary.com/demo/image/upload/c_thumb,g_auto:adv_faces:${level},h_100,w_100/test`);
    });
  });
  it("should support auto:ocr_text and ocr_text", function() {
    expect(createTestURL("test", {
      width: 100,
      height: 100,
      crop: "crop",
      gravity: "auto:ocr_text"
    })).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_auto:ocr_text,h_100,w_100/test");

    expect(createTestURL("test", {
      width: 100,
      height: 100,
      crop: "crop",
      gravity: "ocr_text"
    })).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_ocr_text,h_100,w_100/test");
  });

  it("should support custom_no_override", function() {
    expect(createTestURL("test", {
      width: 100,
      height: 100,
      crop: 'crop',
      gravity: "auto:custom_no_override"
    })).toBe("http://res.cloudinary.com/demo/image/upload/c_crop,g_auto:custom_no_override,h_100,w_100/test");
  });
});
