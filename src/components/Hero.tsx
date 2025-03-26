
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
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gambrel-gray-light to-gambrel-gray-medium z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="animate-on-scroll opacity-0 heading-xl" style={{ animationDelay: "0.4s" }}>
              AI Solutions for Construction Firms
            </h1>
            <h2 
              className="animate-on-scroll opacity-0 heading-md relative" 
              style={{ 
                animationDelay: "0.5s",
                background: "linear-gradient(90deg, #000000 0%, #333333 50%, #000000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "gradient 3s linear infinite"
              }}
            >
              <span className="relative">
                Cut Costs. Expand Capacity. Drive Profits.
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></span>
              </span>
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
