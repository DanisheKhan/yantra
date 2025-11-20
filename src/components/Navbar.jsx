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
    <StaggeredMenu 
        items={navItems} 
        logoUrl="" 
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        accentColor="#ffffff"
        isFixed={true}
    />
  );
};

export default Navbar;
