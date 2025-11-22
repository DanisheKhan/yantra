import React from "react";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

const Projects = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-12 uppercase">Our Projects</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link to={`/projects/${item}`} key={item} className="block">
             <Card title={`Project ${item}`} icon={<ProjectIcon className="h-10 w-10 text-white" />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [82, 39, 255], // #5227FF
                  [160, 124, 254], // Lighter purple
                ]}
                dotSize={2}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-gray-900 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0">
         <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full absolute inset-0"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      <div className="relative z-20 text-center pointer-events-none">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
         <p className="text-gray-400 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-2 group-hover/canvas-card:-translate-y-2 transition duration-200">
            Click to view details
         </p>
      </div>
    </div>
  );
};

const ProjectIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
};

export default Projects;
