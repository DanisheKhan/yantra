import { motion } from 'motion/react';
import { BlurFade } from './ui/blur-fade';

const About = () => {
  return (
    <div id="about" className="w-full bg-black py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
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

        {/* Right Side Image */}
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden flex items-center justify-center">
             <BlurFade delay={0.25} inView>
                <img 
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" 
                    alt="Filmmaking" 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
             </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default About;
