
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/179d1af6-cf69-4552-966c-a34e543731dc.png" 
              alt="Gambrel Systems Logo" 
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link to="/solutions" className="text-foreground hover:text-primary/80 transition-colors">
              Solutions
            </Link>
            <Link to="/technology" className="text-foreground hover:text-primary/80 transition-colors">
              Technology
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary/80 transition-colors">
              About
            </Link>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - Fixed to toggle menu instead of navigate */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white fixed top-20 left-0 w-full transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="block py-2 text-foreground hover:text-primary/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/solutions" 
            className="block py-2 text-foreground hover:text-primary/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            to="/technology" 
            className="block py-2 text-foreground hover:text-primary/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
          <Link 
            to="/about" 
            className="block py-2 text-foreground hover:text-primary/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
