import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const navItems = [
    { label: "Home", link: "#" },
    { label: "About", link: "#about" },
    { label: "Visionaries", link: "#founders" },
    { label: "Craft", link: "#services" },
    { label: "Gallery", link: "#gallery" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="pointer-events-auto">
            <StaggeredMenu 
                items={navItems} 
                logoUrl="" // No logo for now, or use text
                menuButtonColor="#ffffff"
                openMenuButtonColor="#000000"
                accentColor="#ffffff"
            />
        </div>
    </div>
  );
};

export default Navbar;
