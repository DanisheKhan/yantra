const News = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-12">News & Updates</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="h-64 bg-gray-800"></div>
          <div className="p-8">
            <span className="text-sm text-primary font-bold">PRESS RELEASE</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">Yantra Films Announces New Partnership</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="h-64 bg-gray-800"></div>
          <div className="p-8">
            <span className="text-sm text-primary font-bold">PRODUCTION UPDATE</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">Filming Wraps on Latest Feature</h3>
            <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
