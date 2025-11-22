import { BentoGrid, BentoCard } from "../components/ui/bento-grid";
import { Clapperboard, Coins, Globe, Film, PenTool } from "lucide-react";

const Services = () => {
  const services = [
    { 
      name: "Production", 
      description: "Pre-production, production, post-production services for films of all scales.", 
      Icon: Clapperboard,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" alt="Production" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )
    },
    { 
      name: "Financing", 
      description: "Strategic fundraising, co-producing, and packaging for independent cinema.", 
      Icon: Coins,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" alt="Financing" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )
    },
    { 
      name: "Distribution", 
      description: "Global sales strategy and distribution partnerships to reach wider audiences.", 
      Icon: Globe,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1524985069026-a77e77d4068a?q=80&w=2059&auto=format&fit=crop" alt="Distribution" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )
    },
    { 
      name: "Branded Content", 
      description: "High-quality brand collaborations and corporate content production.", 
      Icon: Film,
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" alt="Branded Content" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )
    },
    { 
      name: "Development", 
      description: "Script development, story consulting, and talent packaging.", 
      Icon: PenTool,
      href: "#",
      cta: "Learn more",
      className: "col-span-3",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop" alt="Development" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-16 uppercase">What We Do</h1>
      <div className="max-w-6xl mx-auto">
        <BentoGrid>
          {services.map((service, index) => (
            <BentoCard key={index} {...service} lightText={true} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Services;
