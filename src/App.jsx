import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Founders from './components/Founders';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Founders />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
