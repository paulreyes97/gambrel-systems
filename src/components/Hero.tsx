
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
    // Adjust timing intervals per user request
    const timer1 = setTimeout(() => setVisibleParts(1), 200); // Title
    const timer2 = setTimeout(() => setVisibleParts(2), 1000); // Button
    const timer3 = setTimeout(() => setVisibleParts(5), 2500); // "Cut Costs"
    const timer4 = setTimeout(() => setVisibleParts(6), 4000); // "Expand Capacity"
    const timer5 = setTimeout(() => setVisibleParts(7), 5500); // "Drive Profits"
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-2 md:pt-4">
      {/* Animated background with construction/AI tech vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gambrel-gray-light to-gambrel-gray-medium z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {/* Binary code effect for AI/tech vibes */}
          <div className="absolute top-[5%] left-[10%] w-64 h-64 rounded-full bg-blue-400 opacity-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-yellow-500 opacity-30 rounded-lg animate-pulse" style={{ animationDuration: '8s' }}></div>
          
          {/* Construction elements */}
          <div className="absolute bottom-[20%] left-[25%] w-48 h-48 bg-gambrel-gray-dark opacity-20 rounded-md transform rotate-45 animate-pulse" style={{ animationDuration: '12s' }}></div>
          
          {/* Digital lines for tech feel */}
          <div className="absolute top-[40%] left-0 w-full h-px bg-blue-300 opacity-30"></div>
          <div className="absolute top-[60%] left-0 w-full h-px bg-blue-300 opacity-30"></div>
          
          {/* Circuit-like patterns */}
          <div className="absolute top-[30%] left-[40%] w-72 h-72 border-2 border-gambrel-silver opacity-10 rounded-full"></div>
          <div className="absolute top-[50%] left-[20%] w-48 h-48 border border-blue-400 opacity-10 rounded-lg transform rotate-12"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 gap-3 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-6">
            <h1 className={`animate-on-scroll opacity-0 heading-xl transition-opacity duration-500 ${
              visibleParts >= 1 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.2s" }}>
              AI Solutions for Construction Firms
            </h1>
            <h2 className={`animate-on-scroll opacity-0 heading-md transition-opacity duration-500`} style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                <span 
                  className={`relative text-primary transition-all duration-700 ${
                    visibleParts >= 5 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Cut Costs.
                </span>
                <span 
                  className={`relative text-primary transition-all duration-700 ${
                    visibleParts >= 6 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Expand Capacity.
                </span>
                <span 
                  className={`relative text-primary transition-all duration-700 ${
                    visibleParts >= 7 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Drive Profits.
                </span>
              </div>
            </h2>
            <p className={`animate-on-scroll opacity-0 body-lg text-muted-foreground max-w-xl transition-opacity duration-500 ${
              visibleParts >= 3 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.4s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, streamlining onboarding, enhancing safety practices, and enabling your current team to achieve unprecedented productivity.
            </p>
            <div className={`animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-3 pt-2 md:pt-4 transition-opacity duration-500 ${
              visibleParts >= 2 ? "opacity-100" : "opacity-0"
            }`} style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="rounded-md">
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
