import React from "react";
import { SpinningText } from "../components/ui/spinning-text";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import { ShineBorder } from "../components/ui/shine-border";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Instagram, 
    Twitter, 
    Linkedin, 
    Facebook 
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full py-20 lg:py-24 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-20 hidden md:block">
           <SpinningText
            radius={5}
            className="font-mono text-sm font-medium tracking-widest text-gray-900"
            duration={10}
            reverse
          >
            YANTRA • CONNECT • NOW • 
          </SpinningText>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium uppercase tracking-wider mb-4">
                Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
                Let's Create <span className="text-gray-400">Something</span> <br />
                Extraordinary
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                Whether you're a creator, investor, or press, we'd love to hear from you. The future of cinema starts with a conversation.
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info Side */}
            <div className="space-y-12">
                <div className="space-y-6">
                     <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Reach out to us directly through any of these channels. Our team is available Mon-Fri, 9am - 6pm IST.
                     </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Us</p>
                            <a href="mailto:Contact@yantrafilms.com" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">Contact@yantrafilms.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Us</p>
                           <a href="tel:+917021646674" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">+91 7021646674</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Visit Us</p>
                           <span className="text-lg font-medium text-gray-900">Mumbai, India</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Follow Our Journey</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 backdrop-blur-sm overflow-hidden">
                <ShineBorder className="text-center text-2xl font-bold capitalize" color={["#e5e7eb", "#9ca3af", "#4b5563"]} />
                <form className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition" />
                    </div>
                    </div>
                    
                    <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                    <div className="relative">
                        <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition appearance-none">
                            <option>General Inquiry</option>
                            <option>Collaboration Proposal</option>
                            <option>Press & Media</option>
                            <option>Careers</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                    </div>

                    <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                    <textarea placeholder="Tell us about your project..." rows="5" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition resize-none"></textarea>
                    </div>

                    <InteractiveHoverButton className="w-full py-4 text-lg bg-gray-900 text-white hover:bg-black border-transparent">
                        Send Message
                    </InteractiveHoverButton>
                </form>
            </div>
        </div>
      </div>

       {/* Reveal Section - Footer Quote */}
       <div className="w-full h-[50vh] relative flex items-center justify-center overflow-hidden border-t border-gray-200 bg-white">
        <MaskContainer
            revealText={
            <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 text-center">
                 <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
                    "WE ARE YANTRA"
                 </h3>
                 <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                    Join the Movement
                 </p>
            </div>
            }
            className="h-full w-full bg-gray-50"
        >
            <div className="max-w-4xl mx-auto text-center text-white p-8">
                <p className="text-3xl md:text-5xl font-light italic leading-tight">
                    "Collaboration is at the heart of everything we do. We are always looking for new partners, creators, and visionaries."
                </p>
            </div>
        </MaskContainer>
      </div>

    </div>
  );
};

export default Contact;
