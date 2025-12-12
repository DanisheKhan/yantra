import { useLocation } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const location = useLocation();
  const isDarkHeader = location.pathname === '/' || (location.pathname.startsWith('/projects/') && location.pathname !== '/projects');
  
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Services", link: "/services" },
    { label: "News", link: "/news" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <StaggeredMenu 
        items={navItems} 
        logoText="YANTRA"
        menuButtonColor={isDarkHeader ? "#ffffff" : "#000000"}
        openMenuButtonColor="#000000"
        accentColor="#6b7280"
        colors={["#d1d5db", "#9ca3af", "#4b5563", "#111827"]}
        logoColor={isDarkHeader ? "#ffffff" : "#000000"}
        isFixed={true}
    />
  );
};

export default Navbar;
