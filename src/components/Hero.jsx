
import TextPressure from './TextPressure';
import { HyperText } from './ui/hyper-text';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.35]"
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
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
            className="text-white text-lg md:text-2xl font-light tracking-widest"
            duration={1200}
          >
            WE ARE YANTRA
          </HyperText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
