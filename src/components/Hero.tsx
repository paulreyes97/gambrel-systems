
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
    // Immediately set all parts visible to ensure the text shows up
    setVisibleParts(10);
    
    return () => {
      // Clean up not needed since we're setting everything visible immediately
    };
  }, []);
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gray-100 via-elegant-gray-50 to-white z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 py-14 md:py-0">
        <div className="grid grid-cols-1 gap-3 md:gap-8 items-center">
          <div className="space-y-5 md:space-y-6">
            <h1 className="animate-on-scroll opacity-0 heading-xl text-elegant-gray-800 transition-opacity duration-500 opacity-100" style={{ animationDelay: "0.2s" }}>
              AI Solutions for<br /> Construction Firms
            </h1>
            <h2 className="animate-on-scroll heading-md transition-opacity duration-500 mt-6 opacity-100" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-4 sm:space-y-0">
                <div className="font-semibold text-[#1d4ed8] text-4xl md:text-5xl">
                  Cut Costs. Expand Capacity.<br /> Drive Profits.
                </div>
              </div>
            </h2>
            <p className="animate-on-scroll opacity-0 body-lg text-elegant-gray-700 max-w-xl transition-opacity duration-500 mt-6 opacity-100 text-lg" style={{ animationDelay: "0.4s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, streamlining onboarding, enhancing safety practices, and enabling your current team to achieve unprecedented productivity.
            </p>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-3 pt-6 md:pt-8 transition-opacity duration-500 opacity-100" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="rounded-md bg-[#1d4ed8] hover:bg-[#1e40af] transition-all duration-300 group text-white py-7 px-6">
                <Link to="/schedule">
                  Schedule Your Free Strategy Session Today 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
