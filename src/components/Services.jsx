import { BentoGrid, BentoCard } from './ui/bento-grid';
import { Video, Film, Clapperboard, MonitorPlay } from 'lucide-react';

const features = [
  {
    Icon: Film,
    name: "Feature Films",
    description: "Crafting powerful and emotionally resonant Indian stories for global audiences.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-neutral-900/50" />
    ),
  },
  {
    Icon: Video,
    name: "Documentaries",
    description: "Real stories, real impact. Bringing truth to the screen with artistic depth.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-neutral-900/50" />
    ),
  },
  {
    Icon: MonitorPlay,
    name: "Series & Web Content",
    description: "Engaging emerging Indian markets with fresh, contemporary narratives.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-neutral-900/50" />
    ),
  },
  {
    Icon: Clapperboard,
    name: "Brand Films",
    description: "Storytelling that inspires, connects, and resonates for brands.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 bg-neutral-900/50" />
    ),
  },
];

const Services = () => {
  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Our Craft
        </h2>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Services;
