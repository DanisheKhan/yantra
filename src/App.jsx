import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Need to create this

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';

import News from './pages/News';
import Press from './pages/Press';
import Contact from './pages/Contact';
import ClientHub from './pages/ClientHub';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background min-h-screen w-full text-foreground overflow-x-hidden font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />

          <Route path="/news" element={<News />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-hub" element={<ClientHub />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
