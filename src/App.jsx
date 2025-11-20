import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Founders from './components/Founders';

import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
