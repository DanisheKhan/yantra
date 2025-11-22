const Services = () => {
  const services = [
    { title: "Production", description: "Pre-production, production, post-production" },
    { title: "Financing", description: "Fundraising, co-producing, packaging" },
    { title: "Distribution", description: "Sales strategy, distribution partnerships" },
    { title: "Branded Content", description: "Brand collaborations and corporate content" },
    { title: "Development", description: "Script development, story development, talent packaging" }
  ];

  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <h1 className="text-5xl font-bold text-foreground text-center mb-16">What We Do</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition">
            <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
