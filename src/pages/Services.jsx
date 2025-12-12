import React from 'react';
import { Globe } from "../components/ui/globe";
import { SpinningText } from "../components/ui/spinning-text";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { Button } from "../components/ui/button";
import { SlideIn } from "../components/Reveal";
import { 
  ArrowRight, 
  Film, 
  Globe as GlobeIcon, 
  Lightbulb, 
  TrendingUp, 
  Clapperboard, 
  Handshake, 
  Users,
  MonitorPlay,
  Music,
  Video,
  Briefcase
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-20 hidden md:block">
           <SpinningText
            radius={5}
            className="font-mono text-sm font-medium tracking-widest text-gray-900"
            duration={10}
            reverse
          >
            YANTRA • FILMS • SERVICES • 
          </SpinningText>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto space-y-8">
            <SlideIn delay={0.1} direction="down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                  Global Cinema Infrastructure
              </div>
            </SlideIn>
            <SlideIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Empowering <span className="text-gray-400">Visionaries</span> <br />
                  Across Borders
              </h1>
            </SlideIn>
            <SlideIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                  We provide the structural foundations for groundbreaking cinema, from creative conception to global screens.
              </p>
            </SlideIn>

        </div>
      </div>

      {/* Content Creation Section */}
      <div className="w-full py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                     <SlideIn delay={0.2} direction="left">
                       <h2 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">Content Creation</h2>
                       <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                          Our formats cover both creative and commercial storytelling needs, producing a wide range of content across multiple platforms.
                       </p>
                       <div className="inline-flex items-center text-sm font-semibold text-gray-900 border-b border-gray-900 pb-1">
                          Multimedia Capabilities
                       </div>
                     </SlideIn>
                </div>
                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Film, label: "Films" },
                        { icon: MonitorPlay, label: "Web Series" },
                        { icon: Music, label: "Music Videos" },
                        { icon: Video, label: "Short Films" },
                        { icon: Briefcase, label: "Brand Films" },
                        { icon: Clapperboard, label: "Fashion Films" },
                        { icon: GlobeIcon, label: "Documentaries" },
                    ].map((item, idx) => (
                        <SlideIn key={idx} delay={0.1 * idx} direction="up">
                          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 h-full">
                              <item.icon className="w-8 h-8 mb-3 text-gray-700" strokeWidth={1.5} />
                              <span className="text-sm font-medium text-gray-900 text-center">{item.label}</span>
                          </div>
                        </SlideIn>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Production & Business Models Grid */}
      <div className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Production & Business Models</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                      Flexible production models designed to adapt to the unique needs of every project.
                  </p>
              </div>
            </SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <SlideIn delay={0.2}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden h-full">
                      <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors relative z-10">
                          <Clapperboard className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">In-House Production</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                          Complete project execution from concept to final output. We handle every aspect of the physical workspace and creative process.
                      </p>
                  </div>
                </SlideIn>

                {/* Card 2 */}
                <SlideIn delay={0.3}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden h-full">
                       <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors relative z-10">
                          <Handshake className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Acquisitions</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                          Buying or partnering on promising content. We identify high-potential projects and bring them into the Yantra ecosystem.
                      </p>
                  </div>
                </SlideIn>

                {/* Card 3 */}
                <SlideIn delay={0.4}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden h-full">
                       <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors relative z-10">
                          <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Co-Production</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                          Collaborating with other studios or creators to share creative and financial responsibilities, fostering global storytelling.
                      </p>
                  </div>
                </SlideIn>
            </div>
        </div>
      </div>

       {/* Reveal Section - Long Term IP Services */}
       <div className="w-full h-[60vh] md:h-[40rem] relative flex items-center justify-center overflow-hidden border-y border-gray-200 bg-white">
        <MaskContainer
            revealText={
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                 <h3 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter">
                    BUILDING UNIVERSES
                 </h3>
                 <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    Long-Term IP Services
                 </p>
            </div>
            }
            className="h-full w-full bg-gray-100"
        >
            <div className="max-w-4xl mx-auto text-center text-white p-8">
                <div className="flex justify-center mb-6">
                    <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Expandable Storytelling</h2>
                <div className="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
                    <div className="border-l-2 border-white/30 pl-4">
                        <h4 className="font-bold text-lg">Film Franchises</h4>
                    </div>
                    <div className="border-l-2 border-white/30 pl-4">
                        <h4 className="font-bold text-lg">Series Franchises</h4>
                    </div>
                    <div className="border-l-2 border-white/30 pl-4">
                        <h4 className="font-bold text-lg">Animation IPs</h4>
                    </div>
                    <div className="border-l-2 border-white/30 pl-4">
                        <h4 className="font-bold text-lg">Unique Storytelling IPs</h4>
                    </div>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    We focus on long-term revenue, branding, and scalable content creation by developing intellectual properties that live beyond a single screen.
                </p>
            </div>
        </MaskContainer>
      </div>

      {/* Global Reach Section */}
      <div className="w-full bg-white py-24 border-t border-gray-200 overflow-hidden">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tighter">
                    Bridging East & West
                </h2>
                <div className="space-y-6 text-lg text-gray-600 max-w-lg">
                    <p>
                        Yantra Films operates as a nexus between the vibrant storytelling traditions of India and the global cinematic landscape.
                    </p>
                    <p>
                        Our infrastructure supports co-productions that defy borders, bringing diverse narratives to universal acclaim.
                    </p>
                </div>
                <div className="mt-10">
                    <Button size="lg" className="rounded-full px-8 shadow-lg">
                        View Our Global Network
                    </Button>
                </div>
            </div>
            
            <div className="md:w-1/2 relative h-[500px] w-full flex items-center justify-center mt-12 md:mt-0">
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 md:hidden" />
                 <div className="w-[600px] h-[600px] relative">
                    <Globe className="opacity-80" />
                 </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Services;
