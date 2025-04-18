
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
          ? "bg-[#D5D5D5]/50 backdrop-blur-xl shadow-lg" 
          : "bg-[#D5D5D5]/70" 
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div 
            onClick={scrollToTop} 
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
              alt="Gambrel Systems Logo" 
              className="h-7 md:h-8"
            />
            <span className="font-montserrat font-semibold text-base md:text-lg text-black drop-shadow-sm">Gambrel Systems</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
