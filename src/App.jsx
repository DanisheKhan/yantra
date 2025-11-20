import FlowingMenu from './components/FlowingMenu';
import Hero from './components/Hero';

import About from './components/About';
import Founders from './components/Founders';

import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const menuItems = [
    {
      text: "About",
      link: "#about",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop"
    },
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
      <Hero />
      <About />
      <Founders />
      <div className="w-full h-screen">
        <FlowingMenu items={menuItems} />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
