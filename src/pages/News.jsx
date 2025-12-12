import React from "react";
import { motion } from "framer-motion";
import { SpinningText } from "../components/ui/spinning-text";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { ArrowRight, Calendar, Tag, Newspaper } from "lucide-react";
import { Button } from "../components/ui/button";
import { SlideIn } from "../components/Reveal";

const News = () => {
    const newsData = [
        {
            category: "Press Release",
            date: "December 12, 2024",
            title: "Yantra Films Partners with Global Streaming Giant",
            excerpt: "A strategic alliance to bring authentic South Asian narratives to a worldwide audience, starting with three exclusive feature films.",
            image: "bg-gray-200" // Placeholder class for now
        },
        {
            category: "Production Update",
            date: "November 28, 2024",
            title: "Filming Wraps on 'The Silent Echo'",
            excerpt: "Our latest feature film has officially concluded principle photography in the picturesque landscapes of Himachal Pradesh.",
            image: "bg-gray-200"
        },
        {
            category: "Festival News",
            date: "October 15, 2024",
            title: "Critical Acclaim at TIFF 2024",
            excerpt: "Yantra's co-production 'Shadows of Time' receives a standing ovation and wins the People's Choice Award at Toronto International Film Festival.",
            image: "bg-gray-200"
        },
        {
            category: "Community",
            date: "September 02, 2024",
            title: "Launch of Yantra Creative Lab",
            excerpt: "A new initiative fostering emerging talent in screenwriting and direction, providing mentorship and funding for short films.",
            image: "bg-gray-200"
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
            YANTRA • NEWS • PRESS • 
          </SpinningText>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto space-y-8">
            <SlideIn delay={0.1} direction="down">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                  Latest Updates
              </div>
            </SlideIn>
            <SlideIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
                  Stories in <span className="text-gray-400">Motion</span>
              </h1>
            </SlideIn>
            <SlideIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                  Keep up with the latest production updates, festival runs, and corporate announcements from Yantra Films.
              </p>
            </SlideIn>
        </div>
      </div>

      {/* News Grid */}
      <div className="w-full py-12 pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsData.map((item, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index} 
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Image Placeholder */}
                        <div className={`h-64 w-full ${item.image} relative overflow-hidden`}>
                             <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-gray-900/0 transition-colors duration-300" />
                             {/* Optional: Add actual images if available, for now using a pattern or solid color */}
                             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                 <Newspaper className="w-12 h-12 opacity-20" />
                             </div>
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-900 uppercase tracking-wider">
                                    <Tag className="w-3 h-3" />
                                    {item.category}
                                </span>
                                <span className="flex items-center gap-2 text-xs text-gray-500 font-medium font-mono">
                                    <Calendar className="w-3 h-3" />
                                    {item.date}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-600 transition-colors">
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                {item.excerpt}
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <button className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-widest group/btn">
                                    Read Full Story 
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

       {/* Reveal Section - Newsletter/Contact */}
       <div className="w-full h-[50vh] relative flex items-center justify-center overflow-hidden border-t border-gray-200 bg-white">
        <MaskContainer
            revealText={
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                 <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                    STAY TUNED
                 </h3>
                 <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    Join Our Journey
                 </p>
            </div>
            }
            className="h-full w-full bg-gray-50"
        >
            <div className="max-w-4xl mx-auto text-center text-white p-8">
                <p className="text-3xl md:text-5xl font-light italic leading-tight mb-8">
                    "Be the first to know about our upcoming releases, casting calls, and festival premieres."
                </p>
                 <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-6 text-lg">
                    Subscribe to Newsletter
                </Button>
            </div>
        </MaskContainer>
      </div>

    </div>
  );
};

export default News;
