import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SpinningText } from "../components/ui/spinning-text";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { SlideIn } from "../components/Reveal";
import { 
  Film, 
  Globe as GlobeIcon, 
  Award, 
  Clapperboard, 
  Lightbulb, 
  Users, 
  Target, 
  History 
} from "lucide-react";
import Founders from '../components/Founders';

const JourneyItem = ({ year, title, description, icon: Icon, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center justify-between mb-12 w-full ${isEven ? 'flex-row-reverse' : ''}`}
    >
      {/* Content Side */}
      <div className="hidden md:block w-5/12"></div>

      {/* Center Point */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
          <Icon className="w-4 h-4 text-gray-900" />
        </div>
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-left`}>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="text-4xl font-bold text-gray-100 absolute -top-4 -right-2 select-none z-0">
            {year}
          </span>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const journeyData = [
    {
      year: "2020",
      title: "The Inception",
      description: "Yantra Films was born in the heart of Mumbai. A small collective of visionaries united by a single purpose: to tell stories that matter.",
      icon: Clapperboard
    },
    {
      year: "2022",
      title: "Critical Acclaim",
      description: "Our debut feature film, 'The Silent Echo', premiered at international festivals, earning critical praise for its raw narrative and visual poetry.",
      icon: Award
    },
    {
      year: "2024",
      title: "Global Horizons",
      description: "Bridging the East and West, we expanded operations to Los Angeles and London, collaborating with international talent to produce cross-cultural cinema.",
      icon: GlobeIcon
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Pioneering new formats in immersive storytelling and virtual production. The journey has only just begun.",
      icon: Film
    }
  ];

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
            YANTRA • ABOUT • US • 
          </SpinningText>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto space-y-8">
            <SlideIn delay={0.1} direction="down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                  Our Story
              </div>
            </SlideIn>
            <SlideIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Crafting <span className="text-gray-400">Cinematic</span> <br />
                  Legacies
              </h1>
            </SlideIn>
            <SlideIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                  Yantra Films was founded with a vision to bridge the gap between local creativity and global demand.
              </p>
            </SlideIn>
        </div>
      </div>

       {/* Philosophy Grid */}
       <div className="py-24 bg-white border-y border-gray-200 px-4">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Vision */}
                <SlideIn delay={0.2}>
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full">
                      <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          <Target className="w-6 h-6 text-gray-700 group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                          To become a global nexus for storytelling, where diverse narratives find their voice and reach audiences across the world without compromise.
                      </p>
                  </div>
                </SlideIn>

                {/* Mission */}
                <SlideIn delay={0.3}>
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full">
                       <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          <Lightbulb className="w-6 h-6 text-gray-700 group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                          Unearthing stories with a soul and presenting them with cinematic excellence. We strive to push the boundaries of creativity and technology.
                      </p>
                  </div>
                </SlideIn>

                {/* Values */}
                <SlideIn delay={0.4}>
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group h-full">
                       <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors">
                          <Users className="w-6 h-6 text-gray-700 group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
                      <p className="text-gray-600 leading-relaxed">
                          Collaboration, integrity, and a relentless pursuit of quality. We believe in the power of shared creativity to change perspectives.
                      </p>
                  </div>
                </SlideIn>
            </div>
        </div>
      </div>

      {/* Reveal Section - Philosophy Quote */}
      <div className="w-full h-[50vh] relative flex items-center justify-center overflow-hidden border-b border-gray-200 bg-white">
        <MaskContainer
            revealText={
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                 <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                    "EVERY STORY HAS A SOUL"
                 </h3>
                 <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    The Yantra Philosophy
                 </p>
            </div>
            }
            className="h-full w-full bg-gray-50"
        >
            <div className="max-w-4xl mx-auto text-center text-white p-8">
                <p className="text-3xl md:text-5xl font-light italic leading-tight">
                    "We believe that every story has a soul. Our mission is to unearth these narratives and present them to the world with cinematic excellence."
                </p>
            </div>
        </MaskContainer>
      </div>

      {/* Journey Section */}
      <div ref={containerRef} className="py-24 bg-gray-50 px-4 overflow-hidden">
        <div className="container mx-auto max-w-4xl">
            <motion.div style={{ opacity, scale }} className="text-center mb-16">
               <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                  Milestones
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
               <p className="text-gray-600 max-w-lg mx-auto">
                 From humble beginnings to a global stage, tracking the evolution of Yantra Films.
               </p>
            </motion.div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-4">
                {journeyData.map((item, index) => (
                  <JourneyItem key={index} {...item} index={index} />
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* Founders Section */}
       <div className="w-full bg-white py-24 border-t border-gray-200">
         <div className="container mx-auto">
             {/* Wrap Founders component to ensuring it fits the container if needed otherwise it handles itself */}
             <Founders />
         </div>
       </div>

    </div>
  );
};

export default About;
