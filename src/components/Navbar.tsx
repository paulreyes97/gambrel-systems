
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div 
            onClick={scrollToTop} 
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src="/lovable-uploads/179d1af6-cf69-4552-966c-a34e543731dc.png" 
              alt="Gambrel Systems Logo" 
              className="h-9 md:h-10"
            />
          </div>

          {!isMobile && (
            <Button asChild>
              <Link to="/contact">Schedule Now</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
