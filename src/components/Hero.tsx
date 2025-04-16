
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
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="space-y-8 hero-text max-w-3xl mx-auto lg:mx-0">
            <h1 className="animate-on-scroll opacity-0 font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]" style={{ animationDelay: "0.2s" }}>
              Empowering Your Business with AI Automation
            </h1>

            <p className="animate-on-scroll opacity-0 text-xl md:text-2xl text-white max-w-xl font-light leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Automate workflows, reduce errors, and boost profitability with Gambrel Systems. Enhance productivity, elevate customer experience, and unlock your team's full potential.
            </p>
            
            <p className="animate-on-scroll opacity-0 text-xl md:text-2xl text-white max-w-xl font-light leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Ready to boost profits with AI? Schedule your free strategy session and discover what's possible for your business.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 px-6 text-base rounded-xl group shadow-md transition-all duration-300">
                <Link to="/">
                  Schedule Free Strategy Call
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
