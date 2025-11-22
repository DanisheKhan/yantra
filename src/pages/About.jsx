import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Globe, Award, Clapperboard } from 'lucide-react';
import Founders from '../components/Founders';

const JourneyItem = ({ year, title, description, icon: Icon, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`flex items-center justify-between mb-16 w-full ${isEven ? 'flex-row-reverse' : ''}`}
    >
      {/* Content Side */}
      <div className="hidden md:block w-5/12"></div>

      {/* Center Point */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.2 + 0.3 }}
          className="w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-left`}>
        <div className="relative bg-card/30 backdrop-blur-sm p-8 rounded-xl hover:bg-card/50 hover:shadow-[0_0_40px_rgba(var(--primary),0.2),0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group cursor-pointer">
          <span className="text-6xl md:text-7xl font-bold text-foreground/5 absolute top-0 right-4 select-none group-hover:text-primary/30 group-hover:scale-110 transition-all duration-500 z-0">
            {year}
          </span>
          <div className="relative z-10 pt-4">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify group-hover:text-foreground transition-colors duration-300">{description}</p>
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
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

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
      icon: Globe
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Pioneering new formats in immersive storytelling and virtual production. The journey has only just begun.",
      icon: Film
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-background px-4 overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 uppercase tracking-tighter">About Us</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-justify">
          Yantra Films was founded with a vision to bridge the gap between local creativity and global demand. Born from a passion for storytelling, we have evolved into a global production house, crafting cinematic experiences that resonate with audiences worldwide.
        </p>
      </motion.div>

      <Founders />

      {/* Our Philosophy */}
      <div className="max-w-4xl mx-auto text-center mt-4 mb-32 relative">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 uppercase tracking-tighter">OUR PHILOSOPHY</h2>
        <p className="text-xl md:text-2xl text-muted-foreground italic font-light leading-relaxed ">
          "We believe that every story has a soul. Our mission is to unearth these narratives and present them to the world with cinematic excellence."
        </p>
      </div>

      {/* Our Journey */}
      <div ref={containerRef} className="max-w-6xl mx-auto mb-32 relative">
        <motion.div style={{ opacity, scale }} className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-tighter">OUR JOURNEY</h2>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <JourneyItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
