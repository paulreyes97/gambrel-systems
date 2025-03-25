
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
      
      {/* Logo as background element */}
      <div className="absolute right-0 bottom-0 w-[60%] h-[80%] opacity-20 z-0">
        <img 
          src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="animate-on-scroll opacity-0 heading-xl" style={{ animationDelay: "0.4s" }}>
              AI Implementation Services for Construction Automation
            </h1>
            <p className="animate-on-scroll opacity-0 body-lg text-muted-foreground max-w-xl" style={{ animationDelay: "0.6s" }}>
              We help construction companies streamline operations, optimize resources, and reduce costs by implementing custom AI solutions tailored to your specific needs.
            </p>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 pt-4" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="rounded-md">
                <Link to="/solutions">
                  Explore Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "1s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <img 
                src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                alt="Gambrel Systems Logo Illustration" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
