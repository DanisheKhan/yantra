import { useParams, useNavigate } from 'react-router-dom';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="text-white text-center pt-32 min-h-screen bg-background">Project not found</div>;
  }

  return (
    <div className="w-full bg-background min-h-screen text-foreground font-sans selection:bg-red-500/30">
      {/* Hero / Trailer */}
      <div className="relative h-[70vh] md:h-[85vh] w-full bg-black flex items-center justify-center overflow-hidden">
        {project.videoUrl ? (
          <>
            <video
              src={project.videoUrl}
              className="w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
          </>
        ) : (
          <>
             <div className="absolute inset-0 bg-black/40 z-10"></div>
             <img src={`https://source.unsplash.com/random/1920x1080?film,${id}`} alt="Backdrop" className="w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          </>
        )}
       
        <div className="absolute z-20 bottom-0 left-0 right-0 px-6 md:px-12 pb-12 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 items-start animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-2xl leading-none">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 italic font-light drop-shadow-lg max-w-2xl border-l-4 border-red-600 pl-6 py-2">
                "{project.tagline}"
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                <span className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold border border-white/10 uppercase tracking-widest">{project.year}</span>
                <span className="bg-red-600/80 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold border border-red-500/50 uppercase tracking-widest shadow-lg shadow-red-900/20">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-10 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wider">Synopsis</h2>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light tracking-wide text-justify">
              {project.synopsis}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-10 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">Impact & Recognition</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800/50 px-8 py-6 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 shadow-lg group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className="text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider mb-1 text-sm">Award Winner</h3>
                <span className="font-semibold text-xl text-foreground">Best Picture - Local Fest</span>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800/50 px-8 py-6 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 shadow-lg group">
                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
                 <h3 className="text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider mb-1 text-sm">Critical Acclaim</h3>
                <span className="font-semibold text-xl text-foreground">4.5/5 Critic Score</span>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 space-y-8">
            <div className="bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-xl p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-2xl">
              <h3 className="text-xl font-bold text-foreground mb-8 uppercase tracking-widest border-b border-neutral-200 dark:border-white/10 pb-4">
                Project Details
              </h3>
              <div className="space-y-6">
                <DetailRow label="Director" value={project.director} />
                <DetailRow label="Producer" value={project.producer} />
                <DetailRow label="Cast" value={project.cast.join(", ")} />
                <DetailRow label="Our Role" value={project.role} highlight />
                <DetailRow label="Year" value={project.year} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 shadow-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-neutral-900">
           
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-tighter">
              Interested in this project?
            </h3>
            <p className="text-muted-foreground mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Contact us for distribution rights, investment opportunities, or collaboration inquiries. 
            </p>
            <div className="flex justify-center">
              <InteractiveHoverButton onClick={() => navigate('/contact')} className="px-16 py-4 text-lg">
                Get in Touch
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, highlight = false }) => (
  <div className="flex flex-col gap-1">
    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{label}</p>
    <p className={`font-medium text-lg ${highlight ? 'text-red-500' : 'text-foreground'}`}>
      {value}
    </p>
  </div>
);

export default ProjectDetail;
