const Contact = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-bold text-foreground mb-8">Get in Touch</h1>
          <p className="text-xl text-gray-400 mb-8">
            Whether you're an investor, creator, or press, we'd love to hear from you.
          </p>
          <div className="space-y-4 text-gray-300">
            <p>Email: hello@yantrafilms.com</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: Mumbai, India</p>
          </div>
        </div>
        
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900 border border-white/10 rounded-lg text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900 border border-white/10 rounded-lg text-white" />
          <select className="w-full p-3 bg-gray-900 border border-white/10 rounded-lg text-white">
            <option>General Inquiry</option>
            <option>Investor Relations</option>
            <option>Press & Media</option>
            <option>Careers</option>
          </select>
          <textarea placeholder="Message" rows="5" className="w-full p-3 bg-gray-900 border border-white/10 rounded-lg text-white"></textarea>
          <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
