import { ShineBorder } from "../components/ui/shine-border";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";

const Contact = () => {
  return (
    <div className="pt-32 min-h-screen bg-background px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground uppercase leading-tight">
            Get in <br /> <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-md">
            Whether you're a creator or press, we'd love to hear from you. Let's create something extraordinary together.
          </p>
          
          <div className="space-y-6 text-lg text-gray-700 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <span>Contact@yantrafilms.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <span>+91 7021646674</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span>Mumbai, India</span>
            </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S9 17.8 9 17.8A7 7 0 0 1 3 4c8.6 11.7 5.9 10.2 9 10.2 3.1 0 5.5-2.4 5.5-5.5S15 3.2 15 3.2c-1.5 2.1-4 2.1-4 2.1 0-3.1 2.5-5.5 5.6-5.5 3.1 0 5.6 2.4 5.6 5.5 0 0 .7-2.4 2-3.7z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                </div>
            </div>
          </div>

        
        {/* Contact Form */}
        <div className="relative bg-neutral-900/50 p-8 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
          <ShineBorder className="text-center text-2xl font-bold capitalize" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
              <select className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition appearance-none">
                <option>General Inquiry</option>
                <option>Press & Media</option>
                <option>Careers</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
              <textarea placeholder="Tell us about your project..." rows="5" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"></textarea>
            </div>

            <InteractiveHoverButton className="w-full py-4 text-lg">
              Send Message
            </InteractiveHoverButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
