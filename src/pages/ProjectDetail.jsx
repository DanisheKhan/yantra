import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API or data file
  const project = {
    title: `Project ${id}`,
    tagline: "A cinematic journey into the unknown.",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    director: "Jane Doe",
    producer: "John Smith",
    cast: ["Actor One", "Actor Two", "Actor Three"],
    role: "Co-Production & Financing",
    status: "Completed",
    year: "2024"
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero / Trailer */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src={`https://source.unsplash.com/random/1920x1080?film,${id}`} alt="Backdrop" className="w-full h-full object-cover opacity-50" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 italic">{project.tagline}</p>
          <button className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
            Watch Trailer
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Synopsis</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{project.synopsis}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Behind the Scenes</h2>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://source.unsplash.com/random/800x600?set" alt="BTS 1" className="rounded-lg" />
              <img src="https://source.unsplash.com/random/800x600?camera" alt="BTS 2" className="rounded-lg" />
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Impact & Awards</h2>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-gray-900 px-6 py-3 rounded-full text-white border border-white/10">🏆 Best Picture - Local Fest</div>
              <div className="bg-gray-900 px-6 py-3 rounded-full text-white border border-white/10">⭐ 4.5/5 Critic Score</div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
            <div className="space-y-4 text-gray-400">
              <p><span className="text-white font-semibold">Director:</span> {project.director}</p>
              <p><span className="text-white font-semibold">Producer:</span> {project.producer}</p>
              <p><span className="text-white font-semibold">Cast:</span> {project.cast.join(", ")}</p>
              <p><span className="text-white font-semibold">Our Role:</span> {project.role}</p>
              <p><span className="text-white font-semibold">Status:</span> {project.status}</p>
              <p><span className="text-white font-semibold">Year:</span> {project.year}</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Downloads</h3>
            <button className="w-full py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition mb-3">
              Download EPK
            </button>
            <button className="w-full py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition">
              Press Assets
            </button>
          </div>

          <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-4">Interested in this project?</h3>
            <p className="text-gray-400 mb-6 text-sm">Contact us for distribution rights or investment opportunities.</p>
            <Link to="/contact" className="block w-full py-3 bg-primary text-white text-center font-bold rounded-lg hover:bg-primary/80 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
