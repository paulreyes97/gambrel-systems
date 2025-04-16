import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
          : "bg-[#1A1F2C]" 
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            onClick={scrollToTop} 
            className="flex items-center space-x-4 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
              alt="Gambrel Systems Logo" 
              className="h-8 md:h-9 drop-shadow-lg"
            />
            <span className="font-montserrat font-semibold text-lg md:text-xl text-white drop-shadow-sm">Gambrel Systems</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
