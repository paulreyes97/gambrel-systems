
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background with dark gradient for good contrast with white text */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="space-y-8 hero-text max-w-3xl mx-auto lg:mx-0">
            <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight" style={{ animationDelay: "0.2s" }}>
              Transform Your Construction Business
            </h1>

            <p className="animate-on-scroll opacity-0 text-xl text-white max-w-xl" style={{ animationDelay: "0.3s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, and enabling unprecedented productivity.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-[#333333] via-[#555555] to-[#333333] hover:from-[#403E43] hover:via-[#666666] hover:to-[#403E43] text-white border-0 h-14 px-6 text-base rounded-xl group shadow-md transition-all duration-300 animate-gradient-x">
                <Link to="/schedule">
                  Schedule Free Strategy Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
