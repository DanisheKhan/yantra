import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import { SpinningText } from "../components/ui/spinning-text";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { Clapperboard } from "lucide-react";

import { projects } from "../data/projects";

const Projects = () => {
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
            YANTRA • PROJECTS • FILMS • 
          </SpinningText>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                Our Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
                Cinematic <span className="text-gray-400">Frontiers</span> <br />
                Unleashed
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                Exploring boundaries through compelling storytelling and visual artistry. Discover our portfolio of feature films that resonate worldwide.
            </p>
        </div>
      </div>
      
      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {projects.map((project, index) => (
            <BentoGridItem key={index} project={project} index={index} />
            ))}
        </div>
      </div>

       {/* Reveal Section - Cinematic Vision */}
       <div className="w-full h-[50vh] relative flex items-center justify-center overflow-hidden border-y border-gray-200 bg-white">
        <MaskContainer
            revealText={
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                 <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                    "EVERY FRAME MATTERS"
                 </h3>
                 <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    The Yantra Vision
                 </p>
            </div>
            }
            className="h-full w-full bg-gray-50"
        >
            <div className="max-w-4xl mx-auto text-center text-white p-8">
                 <div className="flex justify-center mb-6">
                    <Clapperboard className="w-12 h-12 text-white" />
                </div>
                <p className="text-3xl md:text-5xl font-light italic leading-tight">
                    "At Yantra, we believe in the power of visual storytelling to transcend cultural boundaries. Our projects are immersive experiences designed to leave a lasting impact."
                </p>
            </div>
        </MaskContainer>
      </div>

    </div>
  );
};

const BentoGridItem = ({ project, index }) => {
  const getGridClass = (i) => {
    // Optimized pattern for 3-column grid that repeats every 5 items
    const pattern = [
      "md:col-span-2 md:row-span-2", // 0: Large (2x2)
      "md:col-span-1 md:row-span-1", // 1: Small (1x1)
      "md:col-span-1 md:row-span-1", // 2: Small (1x1)
      "md:col-span-1 md:row-span-2", // 3: Tall (1x2)
      "md:col-span-2 md:row-span-1", // 4: Wide (2x1)
    ];
    return pattern[i % pattern.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group/bento row-span-1 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-sm bg-gray-100 border border-gray-100 relative ${getGridClass(index)}`}
    >
      {project.external ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
           <Card project={project} />
        </a>
      ) : (
        <Link to={`/projects/${project.id}`} className="block w-full h-full">
           <Card project={project} />
        </Link>
      )}
    </motion.div>
  );
};

const Card = ({ project }) => {
  return (
    <div
      className="w-full h-full relative group/card"
    >
      <div className="absolute inset-0">
          {project.videoUrl ? (
            <div className="relative w-full h-full">
                <video
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                 {/* Video Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-500" />
            </div>
          ) : project.imageUrl ? (
             <div className="relative w-full h-full">
                <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
             </div>
          ) : (
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-gray-100"
              colors={[
                [200, 200, 200], 
                [240, 240, 240], 
              ]}
              dotSize={2}
            />
          )}
          
          {/* Enhanced Gradient Overlay - Nicer for light theme context, keeps text legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-90 transition-opacity duration-300" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end p-8 select-none">
        <h2 className="text-white text-3xl font-bold uppercase tracking-tighter mb-2 drop-shadow-md group-hover/card:translate-x-1 transition-transform duration-300">
          {project.title}
        </h2>
        {project.tagline && (
           <p className="text-gray-200 text-sm font-medium line-clamp-2 opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
             {project.tagline}
           </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
