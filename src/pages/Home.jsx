import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/About';
import Gallery from '../components/Gallery';
import { useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { Clapperboard, Globe, Trophy, Users } from "lucide-react";
import { Reveal, SlideIn } from '../components/Reveal';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      
      <Hero />

      <SlideIn delay={0.2} fullWidth>
        <AboutSection />
      </SlideIn>
      
      <SlideIn delay={0.3} fullWidth>
        <Gallery />
      </SlideIn>
      
      {/* Reveal Section - Global Impact */}
      <SlideIn delay={0.2} fullWidth>
        <div className="w-full h-[50vh] relative flex items-center justify-center overflow-hidden border-y border-gray-200 bg-white">
          <MaskContainer
              revealText={
              <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                   <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                      GLOBAL FOOTPRINT
                   </h3>
                   <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                      Beyond Borders
                   </p>
              </div>
              }
              className="h-full w-full bg-gray-50"
          >
              <div className="max-w-4xl mx-auto text-center text-white p-8">
                   <div className="flex justify-center mb-6">
                      <Globe className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-3xl md:text-5xl font-light italic leading-tight">
                      "From Mumbai to Los Angeles, our stories resonate across cultures, bridging gaps and creating a universal language of cinema."
                  </p>
              </div>
          </MaskContainer>
        </div>
      </SlideIn>

      {/* Stats / Highlights Section */}
      <div className="py-24 px-4 bg-white">
        <SlideIn direction="up">
          <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Our Impact</h2>
              <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full" />
          </div>
        </SlideIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
           {[
                { label: "Films Produced", value: "10+", icon: Clapperboard },
                { label: "Awards Won", value: "25+", icon: Trophy },
                { label: "Global Partners", value: "5", icon: Users },
                { label: "Major Markets", value: "3", icon: Globe },
           ].map((stat, idx) => (
             <SlideIn key={idx} delay={idx * 0.1} direction="up">
               <div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="mb-4 flex justify-center">
                        <stat.icon className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
               </div>
             </SlideIn>
           ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-4 bg-[#f9fafb] text-center relative overflow-hidden border-t border-gray-200">
         {/* Background Decoration */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-[#f9fafb] to-white opacity-50" />
         
         <SlideIn direction="up" delay={0.2}>
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">Ready to Create?</h2>
              <p className="text-xl text-gray-600 font-light max-w-xl mx-auto">
                  Join us in crafting the next generation of cinematic experiences. whether you have a script, a vision, or a spark.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
                  <InteractiveHoverButton 
                      onClick={() => navigate('/projects')} 
                      className="w-64 bg-gray-900 text-white border-gray-900 hover:bg-gray-800 [&>div:last-child]:text-gray-900"
                  >
                      Explore Projects
                  </InteractiveHoverButton>
                  <InteractiveHoverButton 
                      onClick={() => navigate('/contact')} 
                      className="w-64 bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white [&>div:last-child]:group-hover:text-gray-900"
                  >
                      Get in Touch
                  </InteractiveHoverButton>
              </div>
           </div>
         </SlideIn>
      </div>
    </div>
  );
};

export default Home;
