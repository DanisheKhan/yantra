import Founders from '../components/Founders';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-6">Our Story</h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          Yantra Films was founded with a vision to bridge the gap between local creativity and global demand.
        </p>
      </div>
      <Founders />
      {/* Milestones and Philosophy to be added */}
    </div>
  );
};

export default About;
