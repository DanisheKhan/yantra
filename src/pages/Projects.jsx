import React from "react";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

import { projects } from "../data/projects";

const Projects = () => {

  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-6 uppercase tracking-tight">Our Projects</h1>
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Exploring cinematic frontiers through compelling storytelling and visual artistry. 
          Discover our portfolio of feature films, documentaries, and creative collaborations 
          that push the boundaries of imagination.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          project.external ? (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block">
               <Card title={project.title}>
                 {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                 ) : project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                 ) : (
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [82, 39, 255], // #5227FF
                        [160, 124, 254], // Lighter purple
                      ]}
                      dotSize={2}
                    />
                 )}
              </Card>
            </a>
          ) : (
            <Link to={`/projects/${project.id}`} key={index} className="block">
               <Card title={project.title}>
                 {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                 ) : project.imageUrl ? (
                     <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                 ) : (
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [82, 39, 255], // #5227FF
                        [160, 124, 254], // Lighter purple
                      ]}
                      dotSize={2}
                    />
                 )}
              </Card>
            </Link>
          )
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

const Card = ({ title, children }) => {
  return (
    <div
      className="border border-white/5 flex items-center justify-center w-full mx-auto relative aspect-video bg-neutral-900 rounded-xl overflow-hidden group/canvas-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
    >
      <div className="absolute inset-0">
         <div className="h-full w-full absolute inset-0">
           {children}
         </div>
         {/* Gradient Overlay for Text Visibility */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-20 text-center pointer-events-none mt-auto h-full flex flex-col justify-end pb-6 px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest relative z-10 drop-shadow-xl font-sans">
          {title}
        </h2>
         <div className="w-12 h-1 bg-white/50 mx-auto mt-3 mb-2 rounded-full group-hover/canvas-card:bg-white/80 transition-colors duration-300" />
         <p className="text-gray-300 text-xs font-semibold tracking-wider relative z-10 uppercase drop-shadow-md opacity-80 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
            Click to view details
         </p>
      </div>
    </div>
  );
};

export default Projects;
