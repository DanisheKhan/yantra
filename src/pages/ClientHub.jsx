import { ShineBorder } from "../components/ui/shine-border";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import { SlideIn } from "../components/Reveal";

const ClientHub = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4 flex items-center justify-center">
      <div className="text-center w-full">
        <SlideIn direction="up">
          <h1 className="text-4xl font-bold text-foreground mb-4 uppercase">Client & Talent Hub</h1>
          <p className="text-gray-400 mb-8">Secure portal for collaborators. Coming soon.</p>
          <div className="relative bg-neutral-900 p-8 rounded-2xl max-w-md mx-auto border border-white/10 overflow-hidden">
            <ShineBorder className="text-center text-2xl font-bold capitalize" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Portal Login</h3>
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-black border border-white/20 rounded-lg mb-4 text-white" />
              <input type="password" placeholder="Password" className="w-full p-3 bg-black border border-white/20 rounded-lg mb-6 text-white" />
              <InteractiveHoverButton className="w-full">
                Login
              </InteractiveHoverButton>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default ClientHub;
