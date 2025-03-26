
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
    // Start the sequential reveal when component mounts
    const timer1 = setTimeout(() => setVisibleParts(1), 1000);
    const timer2 = setTimeout(() => setVisibleParts(2), 2000);
    const timer3 = setTimeout(() => setVisibleParts(3), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gambrel-gray-light to-gambrel-gray-medium z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="animate-on-scroll opacity-0 heading-xl" style={{ animationDelay: "0.4s" }}>
              AI Solutions for Construction Firms
            </h1>
            <h2 className="animate-on-scroll opacity-0 heading-md" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                <span 
                  className={`relative text-primary transition-all duration-500 ${
                    visibleParts >= 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="relative">
                    Cut Costs.
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></span>
                  </span>
                </span>
                <span 
                  className={`relative text-primary transition-all duration-500 ${
                    visibleParts >= 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="relative">
                    Expand Capacity.
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></span>
                  </span>
                </span>
                <span 
                  className={`relative text-primary transition-all duration-500 ${
                    visibleParts >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="relative">
                    Drive Profits.
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></span>
                  </span>
                </span>
              </div>
            </h2>
            <p className="animate-on-scroll opacity-0 body-lg text-muted-foreground max-w-xl" style={{ animationDelay: "0.6s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, streamlining onboarding, enhancing safety practices, and enabling your current team to achieve unprecedented productivity.
            </p>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 pt-4" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="rounded-md">
                <Link to="/">
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
