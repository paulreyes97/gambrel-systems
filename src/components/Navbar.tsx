
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-elegant-gray-900/80 backdrop-blur-xl shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            onClick={scrollToTop} 
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
              alt="Gambrel Systems Logo" 
              className="h-8 md:h-9"
            />
            <span className="font-montserrat font-semibold text-lg md:text-xl text-white">Gambrel Systems</span>
          </div>

          {isMobile ? (
            <>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 focus:outline-none text-white rounded-full hover:bg-elegant-gray-800/50 transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-elegant-gray-900/95 backdrop-blur-xl shadow-2xl py-6 px-6 z-50 border-t border-elegant-gray-800">
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="text-white hover:text-gray-300 transition-colors py-2">Home</Link>
                    <Link to="/solutions" className="text-white hover:text-gray-300 transition-colors py-2">Solutions</Link>
                    <Link to="/about" className="text-white hover:text-gray-300 transition-colors py-2">About</Link>
                    <div className="pt-4">
                      <Link to="/schedule" className="block">
                        <Button className="w-full bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 shadow-md transition-all duration-300 animate-gradient-x">
                          Schedule Free Consultation
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 focus:outline-none text-white rounded-full hover:bg-elegant-gray-800/50 transition-colors">
                  <Menu size={24} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-elegant-gray-900/95 backdrop-blur-xl border-elegant-gray-800 text-white">
                  <DropdownMenuItem asChild className="hover:bg-elegant-gray-800 focus:bg-elegant-gray-800 cursor-pointer">
                    <Link to="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-elegant-gray-800 focus:bg-elegant-gray-800 cursor-pointer">
                    <Link to="/solutions">Solutions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-elegant-gray-800 focus:bg-elegant-gray-800 cursor-pointer">
                    <Link to="/about">About</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button asChild className="bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 shadow-md transition-all duration-300 gradient-button">
                <Link to="/schedule">Schedule Consultation</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
