import FlowingMenu from './components/FlowingMenu';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Founders from './components/Founders';

import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const menuItems = [
    {
      text: "Founders",
      link: "#founders",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=400&auto=format&fit=crop"
    },
    {
      text: "Gallery",
      link: "#gallery",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=400&auto=format&fit=crop"
    },

  ];

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <div className="w-full h-[30vh]">
        <FlowingMenu items={menuItems} />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
