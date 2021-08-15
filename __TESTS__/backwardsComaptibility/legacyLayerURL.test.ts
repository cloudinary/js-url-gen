import {createTestURL} from "./transformationLegacyTests/utils/createTestURL";
import Transformation from "../../src/backwards/transformation";
import FetchLayer from "../../src/backwards/legacyLayer/fetchlayer";
import TextLayer from "../../src/backwards/legacyLayer/textlayer";
import Layer from "../../src/backwards/legacyLayer/layer";

describe('Create legacy layer urls', () => {
  it("Should support Layer as overlay input", function () {
    const result = createTestURL("sample",
      {overlay: new Layer().resourceType("video").publicId("cat")}
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_video:cat/sample');
  });

  it("Should support TextLayer as overlay input", function () {
    const result = createTestURL("sample",
      {overlay: new TextLayer().fontFamily("Arial").fontSize(80).text("Flowers")}
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_text:Arial_80:Flowers/sample');
  });

  it("Should support TextLayer object", function () {
    const options = {
      text: "Cloudinary for the win!",
      fontFamily: "Arial",
      fontSize: 18,
      fontHinting: "full"
    };
    const result = createTestURL("sample",
      {overlay: new TextLayer(options)}
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_text:Arial_18_hinting_full:Cloudinary%20for%20the%20win%21/sample');
  });

  it("Should support FetchLayer: string", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation({
          overlay: new FetchLayer("http://cloudinary.com/images/logo.png")
        })
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_fetch:aHR0cDovL2Nsb3VkaW5hcnkuY29tL2ltYWdlcy9sb2dvLnBuZw==/sample');
  });

  it("Should support FetchLayer: url object", function () {
    const result = createTestURL("sample",
      {
        transformation:  new Transformation({
          overlay: new FetchLayer({
            url: 'http://res.cloudinary.com/demo/sample.jpg'
          })
        })
      }
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/l_fetch:aHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL3NhbXBsZS5qcGc=/sample');
  });

  it("Should change dpr to float", function () {
    const result = createTestURL("sample",
      {dpr:  1}
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/dpr_1.0/sample');
  });

  it("Should change dpr to float on transformation input", function () {
    const result = createTestURL("sample",
      {transformation:  new Transformation().dpr(1)}
    );
    expect(result).toBe('http://res.cloudinary.com/demo/image/upload/dpr_1.0/sample');
  });
});
