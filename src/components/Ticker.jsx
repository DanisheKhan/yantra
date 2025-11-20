import { ScrollVelocityContainer, ScrollVelocityRow } from './ui/scroll-based-velocity';

const Ticker = () => {
  return (
    <div className="w-full py-12 bg-background border-y border-border overflow-hidden">
      <ScrollVelocityContainer className="text-foreground/20 font-bold text-6xl md:text-9xl uppercase tracking-tighter">
        <ScrollVelocityRow baseVelocity={-2}>
          CINEMA • ART • CULTURE • INNOVATION • STORYTELLING •&nbsp;
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2}>
          GLOBAL • LOCAL • VISION • CREATIVITY • PASSION •&nbsp;
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default Ticker;
