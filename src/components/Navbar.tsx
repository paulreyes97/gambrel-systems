
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
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
              className="h-10 md:h-10"
            />
            <span className="font-montserrat font-semibold text-lg md:text-xl text-elegant-gray-800">Gambrel Systems</span>
          </div>

          {isMobile ? (
            <>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 focus:outline-none text-elegant-gray-700 rounded-full hover:bg-elegant-gray-100 transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 z-50">
                  <nav className="flex flex-col space-y-3">
                    <Link to="/" className="py-2 text-elegant-gray-600 hover:text-elegant-blue-600 transition-colors">
                      Home
                    </Link>
                    <Link to="/solutions" className="py-2 text-elegant-gray-600 hover:text-elegant-blue-600 transition-colors">
                      Solutions
                    </Link>
                    <Link to="/about" className="py-2 text-elegant-gray-600 hover:text-elegant-blue-600 transition-colors">
                      About
                    </Link>
                    <Link to="/schedule" className="py-2 mt-2">
                      <Button className="w-full bg-elegant-gray-700 text-white hover:bg-elegant-blue-600">Schedule</Button>
                    </Link>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-8 mr-6">
                <Link to="/" className="text-sm font-medium text-elegant-gray-700 hover:text-elegant-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/solutions" className="text-sm font-medium text-elegant-gray-700 hover:text-elegant-blue-600 transition-colors">
                  Solutions
                </Link>
                <Link to="/about" className="text-sm font-medium text-elegant-gray-700 hover:text-elegant-blue-600 transition-colors">
                  About
                </Link>
              </nav>
              <Button asChild className="bg-elegant-gray-700 hover:bg-elegant-blue-600 text-white transition-colors">
                <Link to="/schedule">Schedule</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
