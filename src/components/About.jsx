import WorldMap from './ui/world-map';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="w-full bg-black py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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

        {/* World Map Visual */}
        <div className="w-full h-full min-h-[300px]">
          <WorldMap
            dots={[
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 37.0902, lng: -95.7129 }, // USA
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: -25.2744, lng: 133.7751 }, // Australia
              },
            ]}
            lineColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
