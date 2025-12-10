import { useParams, useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="text-white text-center pt-32">Project not found</div>;
  }

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero / Trailer */}
      <div className="relative h-[70vh] md:h-[85vh] w-full bg-black flex items-center justify-center overflow-hidden">
        {project.videoUrl ? (
          <>
            <video
              src={project.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          </>
        ) : (
          <>
             <div className="absolute inset-0 bg-black/40 z-10"></div>
             <img src={`https://source.unsplash.com/random/1920x1080?film,${id}`} alt="Backdrop" className="w-full h-full object-cover opacity-50" />
          </>
        )}
       
        <div className="absolute z-20 bottom-0 left-0 right-0 px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 uppercase tracking-tight drop-shadow-2xl">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-6 drop-shadow-lg max-w-3xl">{project.tagline}</p>
            <div className="flex gap-4 flex-wrap">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/20">{project.year}</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/20">{project.status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-white rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Synopsis</h2>
            </div>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">{project.synopsis}</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-white rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Impact & Recognition</h2>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-neutral-900 px-6 py-4 rounded-2xl text-white border border-white/10 hover:border-white/30 transition-colors duration-300 shadow-lg">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-semibold">Best Picture - Local Fest</span>
              </div>
              <div className="bg-neutral-900 px-6 py-4 rounded-2xl text-white border border-white/10 hover:border-white/30 transition-colors duration-300 shadow-lg">
                <span className="text-2xl mr-2">⭐</span>
                <span className="font-semibold">4.5/5 Critic Score</span>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wider">Project Details</h3>
            <div className="space-y-5 text-gray-400">
              <div className="pb-4 border-b border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Director</p>
                <p className="text-white font-semibold text-lg">{project.director}</p>
              </div>
              <div className="pb-4 border-b border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Producer</p>
                <p className="text-white font-semibold text-lg">{project.producer}</p>
              </div>
              <div className="pb-4 border-b border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Cast</p>
                <p className="text-white font-semibold text-lg">{project.cast.join(", ")}</p>
              </div>
              <div className="pb-4 border-b border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Our Role</p>
                <p className="text-white font-semibold text-lg">{project.role}</p>
              </div>
              <div className="pb-4 border-b border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Status</p>
                <p className="text-white font-semibold text-lg">{project.status}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Year</p>
                <p className="text-white font-semibold text-lg">{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-12 md:p-16 rounded-3xl border border-white/20 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">Interested in this project?</h3>
          <p className="text-gray-300 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact us for distribution rights, investment opportunities, or collaboration inquiries.
          </p>
          <InteractiveHoverButton onClick={() => navigate('/contact')} className="inline-block px-12">
            Get in Touch
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
