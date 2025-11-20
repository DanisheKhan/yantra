import { TextHoverEffect } from './ui/text-hover-effect';

const Footer = () => {
  return (
    <footer className="w-full bg-background py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl h-[300px] flex items-center justify-center">
        <TextHoverEffect text="YANTRA" />
      </div>
      
      <div className="mt-8 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Yantra Films. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-4">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
