import Beams from './Beams';
import TextPressure from './TextPressure';
import { HyperText } from './ui/hyper-text';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Beams />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4">
        {/* Main Title */}
        <div className="w-full h-40 md:h-60 mb-8">
          <TextPressure
            text="YANTRA FILMS"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            minFontSize={48}
          />
        </div>

        {/* Subtitle */}
        <div className="mt-4">
          <HyperText
            className="text-white/80 text-lg md:text-2xl font-light tracking-widest"
            duration={1200}
          >
            SHAPING THE FUTURE OF INDIAN CINEMA
          </HyperText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
