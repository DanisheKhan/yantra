const Press = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-foreground mb-8 uppercase">Press & Media</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-white/10 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Company EPK</h3>
              <p className="text-gray-400">Official Electronic Press Kit including bios and history.</p>
            </div>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-full">Download PDF</button>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Brand Assets</h3>
              <p className="text-gray-400">High-res logos and brand guidelines.</p>
            </div>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-full">Download ZIP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
