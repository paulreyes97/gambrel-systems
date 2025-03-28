
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visibleParts, setVisibleParts] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    // Updated timing intervals as requested
    const timer1 = setTimeout(() => setVisibleParts(1), 200); // Title
    const timer2 = setTimeout(() => setVisibleParts(2), 1000); // Button
    const timer3 = setTimeout(() => setVisibleParts(5), 1500); // "Cut Costs"
    const timer4 = setTimeout(() => setVisibleParts(6), 3000); // "Expand Capacity"
    const timer5 = setTimeout(() => setVisibleParts(7), 4500); // "Drive Profits"
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Stronger base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gambrel-sand via-gambrel-cream to-gambrel-beige z-0"></div>
      
      {/* Enhanced diagonal gradient with stronger opacity */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gambrel-sand/80 to-gambrel-lightsilver/70 z-1"></div>
      
      {/* Dual-color gradient overlay with increased opacity */}
      <div className="absolute inset-0 bg-dual-gradient z-2 opacity-90"></div>
      
      {/* Stronger radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient z-3 opacity-95"></div>
      
      {/* Enhanced soft radial gradient */}
      <div className="absolute inset-0 bg-soft-radial z-4 opacity-90"></div>
      
      {/* Accent gradient with increased opacity */}
      <div className="absolute inset-0 bg-accent-gradient z-5 opacity-80 mix-blend-overlay"></div>
      
      {/* Enhanced gradient shine effect */}
      <div className="absolute inset-0 bg-gradient-shine z-6 opacity-85"></div>
      
      {/* Animated pulse effect with stronger visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-gambrel-cream/40 to-gambrel-sand/50 z-7 animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 py-14 md:py-0">
        <div className="grid grid-cols-1 gap-3 md:gap-8 items-center">
          <div className="space-y-5 md:space-y-6">
            <h1 className={`animate-on-scroll opacity-0 heading-xl text-gambrel-black transition-opacity duration-500 ${
              visibleParts >= 1 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.2s" }}>
              AI Solutions for Construction Firms
            </h1>
            <h2 className={`animate-on-scroll opacity-0 heading-md transition-opacity duration-500 mt-6`} style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-4 sm:space-y-0">
                <span 
                  className={`relative text-gambrel-gray-dark transition-all duration-700 ${
                    visibleParts >= 5 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Cut Costs.
                </span>
                <span 
                  className={`relative text-gambrel-gray-dark transition-all duration-700 ${
                    visibleParts >= 6 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Expand Capacity.
                </span>
                <span 
                  className={`relative text-gambrel-gray-dark transition-all duration-700 ${
                    visibleParts >= 7 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Drive Profits.
                </span>
              </div>
            </h2>
            <p className={`animate-on-scroll opacity-0 body-lg text-gambrel-black max-w-xl transition-opacity duration-500 mt-6 ${
              visibleParts >= 3 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.4s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, streamlining onboarding, enhancing safety practices, and enabling your current team to achieve unprecedented productivity.
            </p>
            <div className={`animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-3 pt-6 md:pt-8 transition-opacity duration-500 ${
              visibleParts >= 2 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="rounded-md bg-gradient-to-r from-gambrel-black to-gambrel-gray-dark hover:from-gambrel-gray-dark hover:to-gambrel-black transition-all duration-300">
                <Link to="/schedule">
                  Schedule Your Free Strategy Session Today <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
