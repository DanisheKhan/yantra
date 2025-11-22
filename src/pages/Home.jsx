import Hero from '../components/Hero';
import AboutSection from '../components/About';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <Gallery />
      
      {/* Stats / Highlights Section - Placeholder for now */}
      <div className="py-20 px-4 bg-background text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-primary">10+</p>
            <p className="text-gray-400">Films Produced</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">25+</p>
            <p className="text-gray-400">Awards Won</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">5</p>
            <p className="text-gray-400">Global Partners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">3</p>
            <p className="text-gray-400">Major Markets</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Create?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
            Explore Projects
          </Link>
          <Link to="/investors" className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition">
            For Investors
          </Link>
          <Link to="/contact" className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
