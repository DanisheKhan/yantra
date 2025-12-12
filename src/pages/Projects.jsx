import React from "react";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4 pb-20">
      <h1 className="text-5xl font-bold text-foreground text-center mb-6 uppercase tracking-tight">Our Projects</h1>
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Exploring cinematic frontiers through compelling storytelling and visual artistry. 
          Discover our portfolio of feature films, documentaries, and creative collaborations 
          that push the boundaries of imagination.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
        {projects.map((project, index) => (
          <BentoGridItem key={index} project={project} index={index} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-32 space-y-24 mb-20">
        <section className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Our Cinematic Vision</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Every frame matters. At Yantra, we believe in the power of visual storytelling to transcend cultural boundaries. 
            Our projects are more than just entertainment; they are immersive experiences designed to provoke thought, 
            evoke emotion, and leave a lasting impact on audiences worldwide. We blend traditional filmmaking techniques 
            with cutting-edge technology to craft narratives that resonate.
          </p>
        </section>
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group/bento row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-transparent border border-white/10 justify-between flex flex-col space-y-4 ${getGridClass(index)}`}
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
      className="w-full h-full relative overflow-hidden rounded-xl group/card"
    >
      <div className="absolute inset-0">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
          ) : (
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
              colors={[
                [82, 39, 255], 
                [160, 124, 254], 
              ]}
              dotSize={2}
            />
          )}
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-300" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end p-6 select-none">
        <h2 className="text-white text-2xl font-bold uppercase tracking-wider mb-2 drop-shadow-md group-hover/card:translate-x-1 transition-transform duration-300">
          {project.title}
        </h2>
        {project.tagline && (
           <p className="text-gray-300 text-sm font-medium line-clamp-2 opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
             {project.tagline}
           </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
