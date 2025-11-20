import { motion } from 'motion/react';

const About = () => {
  return (
    <div id="about" className="w-full bg-black py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Bridging Local Creativity & Global Demand
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Yantra Films is a dynamic, forward-thinking content house founded by Anjali Bhushan and Anavi Bhushan Nugyal. 
            Built on a foundation of passion, innovation, and storytelling excellence, we focus on bringing powerful and 
            emotionally resonant Indian stories to audiences across the globe.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Drawing inspiration from India’s rich narrative traditions, the company aims to bridge the gap between local 
            creativity and global demand.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
