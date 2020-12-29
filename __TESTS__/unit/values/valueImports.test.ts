import {TextDecoration} from "../../../src/values/textDecoration";
import {Dither} from "../../../src/values/dither";
import {FontStyle} from "../../../src/values/fontStyle";
import {StreamingProfile} from "../../../src/values/streamingProfile";
import {ChromaSubSampling} from "../../../src/values/chromaSubSampling";
import {ColorSpace} from "../../../src/values/colorSpace";
import {AudioFrequency} from "../../../src/values/audioFrequency";
import {OutlineMode} from "../../../src/values/outlineMode";
import {FontWeight} from "../../../src/values/fontWeight";
import {FontHinting} from "../../../src/values/fontHinting";
import {TextAlignment} from "../../../src/values/textAlignment";
import {ArtisticFilter} from "../../../src/values/artisticFilter";
import {AudioCodec} from "../../../src/values/audioCodec";
import {SimulateColorBlind} from "../../../src/values/simulateColorBlind";
import {FontAntialias} from "../../../src/values/FontAntialias";

describe('Test imported values', () => {
  it('Generates a URL', () => {
    expect(ArtisticFilter.aurora()).toBe('aurora');
    expect(ArtisticFilter.audrey()).toBe('audrey');
    expect(ArtisticFilter.athena()).toBe('athena');
    expect(ArtisticFilter.alDente()).toBe('al_dente');
    expect(ArtisticFilter.peacock()).toBe('peacock');
    expect(ArtisticFilter.quartz()).toBe('quartz');
    expect(ArtisticFilter.primavera()).toBe('primavera');
    expect(ArtisticFilter.hokusai()).toBe('hokusai');
    expect(ArtisticFilter.hairspray()).toBe('hairspray');
    expect(ArtisticFilter.eucalyptus()).toBe('eucalyptus');
    expect(ArtisticFilter.daguerre()).toBe('daguerre');
    expect(ArtisticFilter.incognito()).toBe('incognito');
    expect(ArtisticFilter.redRock()).toBe('red_rock');
    expect(ArtisticFilter.fes()).toBe('fes');
    expect(ArtisticFilter.refresh()).toBe('refresh');
    expect(ArtisticFilter.sonnet()).toBe('sonnet');
    expect(ArtisticFilter.ukulele()).toBe('ukulele');
    expect(ArtisticFilter.zorro()).toBe('zorro');


    expect(OutlineMode.fill()).toBe('fill');
    expect(OutlineMode.innerFill()).toBe('inner_fill');
    expect(OutlineMode.inner()).toBe('inner');
    expect(OutlineMode.outer()).toBe('outer');

    expect(FontStyle.italic()).toBe('italic');
    expect(FontStyle.normal()).toBe('normal');

    expect(FontWeight.normal()).toBe('normal');
    expect(FontWeight.bold()).toBe('bold');
    expect(FontWeight.thin()).toBe('thin');
    expect(FontWeight.light()).toBe('light');

    expect(FontHinting.none()).toBe('');
    expect(FontHinting.slight()).toBe('slight');
    expect(FontHinting.full()).toBe('full');
    expect(FontHinting.medium()).toBe('medium');

    expect(FontAntialias.none()).toBe('');
    expect(FontAntialias.good()).toBe('good');
    expect(FontAntialias.best()).toBe('best');
    expect(FontAntialias.subPixel()).toBe('subpixel');
    expect(FontAntialias.gray()).toBe('gray');

    expect(TextAlignment.left()).toBe('left');
    expect(TextAlignment.right()).toBe('right');
    expect(TextAlignment.center()).toBe('center');
    expect(TextAlignment.start()).toBe('start');
    expect(TextAlignment.end()).toBe('end');
    expect(TextAlignment.justify()).toBe('justify');

    expect(TextDecoration.normal()).toBe('');
    expect(TextDecoration.strikethrough()).toBe('strikethrough');
    expect(TextDecoration.underline()).toBe('underline');

    expect(ColorSpace.noCMYK()).toBe('no_cmyk');
    expect(ColorSpace.SRGB()).toBe('srgb');
    expect(ColorSpace.trueColor()).toBe('srgb:truecolor');
    expect(ColorSpace.tinySRGB()).toBe('tinysrgb');
    expect(ColorSpace.keepCMYK()).toBe('keep_cmyk');
    expect(ColorSpace.CMYK()).toBe('cmyk');


    expect(StreamingProfile.fullHD()).toBe('full_hd');
    expect(StreamingProfile.HDLean()).toBe('hd_lean');
    expect(StreamingProfile.fullHDLean()).toBe('full_hd_lean');
    expect(StreamingProfile.fullHDWifi()).toBe('full_hd_wifi');
    expect(StreamingProfile.HD()).toBe('hd');
    expect(StreamingProfile.SD()).toBe('sd');


    expect(Dither.threshold1x1Nondither()).toBe(0);
    expect(Dither.checkerboard2x1Dither()).toBe(1);
    expect(Dither.ordered2x2Dispersed()).toBe(2);
    expect(Dither.ordered3x3Dispersed()).toBe(3);
    expect(Dither.ordered4x4Dispersed()).toBe(4);
    expect(Dither.ordered8x8Dispersed()).toBe(5);
    expect(Dither.halftone4x4Angled()).toBe(6);
    expect(Dither.halftone6x6Angled()).toBe(7);
    expect(Dither.halftone8x8Angled()).toBe(8);
    expect(Dither.halftone4x4Orthogonal()).toBe(9);

    expect(Dither.halftone6x6Orthogonal()).toBe(10);
    expect(Dither.halftone8x8Orthogonal()).toBe(11);
    expect(Dither.halftone16x16Orthogonal()).toBe(12);
    expect(Dither.circles5x5Black()).toBe(13);
    expect(Dither.circles5x5White()).toBe(14);
    expect(Dither.circles6x6Black()).toBe(15);
    expect(Dither.circles6x6White()).toBe(16);
    expect(Dither.circles7x7Black()).toBe(17);
    expect(Dither.circles7x7White()).toBe(18);


    expect(ChromaSubSampling.chroma420()).toBe(420);
    expect(ChromaSubSampling.chroma444()).toBe(444);

    expect(SimulateColorBlind.coneMonochromacy()).toBe('cone_monochromacy');
    expect(SimulateColorBlind.deuteranomaly()).toBe('deuteranomaly');
    expect(SimulateColorBlind.deuteranopia()).toBe('deuteranopia');
    expect(SimulateColorBlind.protanopia()).toBe('protanopia');
    expect(SimulateColorBlind.rodMonochromacy()).toBe('rod_monochromacy');
    expect(SimulateColorBlind.tritanomaly()).toBe('tritanomaly');
    expect(SimulateColorBlind.tritanopia()).toBe('tritanopia');

    expect(AudioCodec.auto()).toBe('auto');
    expect(AudioCodec.aac()).toBe('aac');
    expect(AudioCodec.mp3()).toBe('mp3');
    expect(AudioCodec.opus()).toBe('opus');
    expect(AudioCodec.none()).toBe('none');
    expect(AudioCodec.vorbis()).toBe('vorbis');

    expect(AudioFrequency.FREQ11025()).toBe(11025);
    expect(AudioFrequency.FREQ8000()).toBe(8000);
    expect(AudioFrequency.FREQ16000()).toBe(16000);
    expect(AudioFrequency.FREQ22050()).toBe(22050);
    expect(AudioFrequency.FREQ32000()).toBe(32000);
    expect(AudioFrequency.FREQ37800()).toBe(37800);
    expect(AudioFrequency.FREQ44056()).toBe(44056);
    expect(AudioFrequency.FREQ44100()).toBe(44100);
    expect(AudioFrequency.FREQ47250()).toBe(47250);
    expect(AudioFrequency.FREQ48000()).toBe(48000);
    expect(AudioFrequency.FREQ88200()).toBe(88200);
    expect(AudioFrequency.FREQ96000()).toBe(96000);
    expect(AudioFrequency.FREQ176400()).toBe(176400);
    expect(AudioFrequency.FREQ192000()).toBe(192000);
    expect(AudioFrequency.ORIGINAL()).toBe('iaf');
  });
});
