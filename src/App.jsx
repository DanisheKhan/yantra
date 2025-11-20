import Hero from './components/Hero';
import About from './components/About';
import Founders from './components/Founders';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden">
      <Hero />
      <About />
      <Founders />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
