import ArtisticFilter from "../../../src/values/artisticFilter/ArtisticFilter";
import Outline from "../../../src/values/outline/Outline";
import ColorSpace from "../../../src/values/colorSpace/ColorSpace";
import Dither from "../../../src/values/dither/Dither";
import ChromaSubSampling from "../../../src/values/chromaSubSampling/ChromaSubSampling";
import FontStyle from "../../../src/values/fontStyle/FontStyle";
import FontWeight from "../../../src/values/fontWeight/FontWeight";
import StreamingProfile from "../../../src/values/streamingProfile/StreamingProfile";
import GravityObjects from "../../../src/values/gravityObjects/GravityObjects";
import {GravityObject} from "../../../src/values/gravityObjects/GravityObject";
import SimulateColorBlind from "../../../src/values/simulateColorBlind/SimulateColorBlind";
import AudioCodec from "../../../src/values/audioCodec/AudioCodec";
import AudioFrequency from "../../../src/values/audioFrequency/AudioFrequency";

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


    expect(Outline.fill()).toBe('fill');
    expect(Outline.inner_fill()).toBe('inner_fill');
    expect(Outline.inner()).toBe('inner');
    expect(Outline.outer()).toBe('outer');

    expect(FontStyle.italic()).toBe('italic');
    expect(FontStyle.normal()).toBe('normal');

    expect(FontWeight.normal()).toBe('normal');
    expect(FontWeight.bold()).toBe('bold');
    expect(FontWeight.book()).toBe('book');
    expect(FontWeight.light()).toBe('light');
    expect(FontWeight.semibold()).toBe('semibold');
    expect(FontWeight.medium()).toBe('medium');
    expect(FontWeight.demibold()).toBe('demibold');
    expect(FontWeight.ultrabold()).toBe('ultrabold');
    expect(FontWeight.heavy()).toBe('heavy');

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


    expect(Dither.threshold1x1nondither()).toBe(0);
    expect(Dither.checkerboard2x1dither()).toBe(1);
    expect(Dither.ordered2x2dispersed()).toBe(2);
    expect(Dither.ordered3x3dispersed()).toBe(3);
    expect(Dither.ordered4x4dispersed()).toBe(4);
    expect(Dither.ordered8x8dispersed()).toBe(5);
    expect(Dither.halftone4x4angled()).toBe(6);
    expect(Dither.halftone6x6angled()).toBe(7);
    expect(Dither.halftone8x8angled()).toBe(8);
    expect(Dither.halftone4x4orthogonal()).toBe(9);

    expect(Dither.halftone6x6orthogonal()).toBe(10);
    expect(Dither.halftone8x8orthogonal()).toBe(11);
    expect(Dither.halftone16x16orthogonal()).toBe(12);
    expect(Dither.circles5x5black()).toBe(13);
    expect(Dither.circles5x5white()).toBe(14);
    expect(Dither.circles6x6black()).toBe(15);
    expect(Dither.circles6x6white()).toBe(16);
    expect(Dither.circles7x7black()).toBe(17);
    expect(Dither.circles7x7white()).toBe(18);


    expect(ChromaSubSampling.chroma420()).toBe(420);
    expect(ChromaSubSampling.chroma444()).toBe(444);

    expect(GravityObjects.cat()).toBeInstanceOf(GravityObject);
    expect(GravityObjects.dog()).toBeInstanceOf(GravityObject);
    expect(GravityObjects.refrigerator()).toBeInstanceOf(GravityObject);
    expect(GravityObjects.person()).toBeInstanceOf(GravityObject);

    expect(SimulateColorBlind.coneMonochromacy()).toBe('cone_monochromacy');
    expect(SimulateColorBlind.deuteranomaly()).toBe('dueteranomaly');
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
