
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronRight } from "lucide-react";

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
            <div className={`p-1.5 rounded ${scrolled ? 'bg-white/10' : 'bg-white/20'} backdrop-blur-sm transition-all duration-300`}>
              <img 
                src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
                alt="Gambrel Systems Logo" 
                className="h-8 md:h-9"
              />
            </div>
            <span className="font-montserrat font-semibold text-lg md:text-xl bg-gradient-to-r from-gray-400 via-gray-600 to-gray-500 bg-clip-text text-transparent">Gambrel Systems</span>
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
                    <div className="pt-4">
                      <Link to="/schedule" className="block">
                        <Button className="w-full bg-[#000080] hover:bg-[#000066] text-white border-0 shadow-md transition-all duration-300">
                          Schedule Free Consultation
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <Button asChild className="bg-[#000080] hover:bg-[#000066] text-white border-0 shadow-md transition-all duration-300">
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
