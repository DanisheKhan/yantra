import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-12">Our Projects</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Cards Placeholder */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link to={`/projects/${item}`} key={item} className="bg-gray-900 rounded-xl overflow-hidden aspect-video relative group cursor-pointer block">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-xl">View Project</span>
            </div>
            <img src={`https://source.unsplash.com/random/800x600?film,${item}`} alt="Project" className="w-full h-full object-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
