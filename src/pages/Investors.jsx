const Investors = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-foreground mb-8">Investor Portal</h1>
        <p className="text-xl text-gray-400 mb-12">
          Access exclusive investment opportunities, financial structures, and project projections.
        </p>
        
        <div className="bg-gray-900 p-8 rounded-2xl max-w-md mx-auto border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Investor Login</h3>
          <input type="email" placeholder="Email Address" className="w-full p-3 bg-black border border-white/20 rounded-lg mb-4 text-white" />
          <input type="password" placeholder="Password" className="w-full p-3 bg-black border border-white/20 rounded-lg mb-6 text-white" />
          <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
            Login
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Don't have an account? <a href="/contact" className="text-white underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investors;
