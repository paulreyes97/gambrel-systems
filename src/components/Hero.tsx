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
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F1F1] via-[#E5E5E5] to-[#F8F8F8] z-0"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#9F9EA1]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8C8C9]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 pt-20 pb-32">
        <div className="grid grid-cols-1 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-12 hero-text max-w-4xl mx-auto text-center">
            <h1 className="animate-on-scroll opacity-0 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] tracking-tight leading-[1.15]" style={{ animationDelay: "0.2s" }}>
              Empowering Your Business with AI Automation
            </h1>

            <p className="animate-on-scroll opacity-0 text-lg md:text-xl lg:text-2xl text-[#222222] max-w-3xl mx-auto font-light leading-relaxed tracking-wide" style={{ animationDelay: "0.3s" }}>
              Automate workflows, eliminate costly errors, and maximize profitability with Gambrel Systems—all while enhancing customer experience and unlocking your team's full potential.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col items-center gap-6 pt-8" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg md:text-xl text-[#333333] font-light max-w-2xl">
                Schedule your free strategy session today and discover what's possible for your business.
              </p>
              <Button asChild size="lg" className="gradient-button bg-gradient-to-r from-[#9F9EA1] via-[#C8C8C9] to-[#F1F1F1] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#E5E5E5] text-[#000000] font-semibold border-0 h-14 px-8 text-lg rounded-xl group shadow-md transition-all duration-300">
                <Link to="/">
                  Schedule Free Strategy Call
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform text-[#000000]" />
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
