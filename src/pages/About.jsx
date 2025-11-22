import Founders from '../components/Founders';

const About = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-foreground mb-8 uppercase">About Us</h1>
        <p className="text-xl text-gray-400 mb-12">
          Yantra Films was founded with a vision to bridge the gap between local creativity and global demand.
        </p>
      </div>
      <Founders />
      {/* Milestones and Philosophy to be added */}
    </div>
  );
};

export default About;
