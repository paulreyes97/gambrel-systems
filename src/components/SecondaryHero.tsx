
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecondaryHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#eeeeee" }}
    >
      {/* Creative background with gradients and patterns */}
      <div className="absolute inset-0 bg-[#eeeeee] z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-elegant-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-elegant-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="flex justify-center">
          {/* Content column */}
          <div className="text-center max-w-2xl">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold mb-6" style={{ color: "#000000" }}>
              Solutions
            </h2>
            
            <p className="animate-on-scroll opacity-0 mb-8" style={{ color: "#000000" }}>
              Designed to integrate seamlessly with your existing workflows.
            </p>
            
            <div className="animate-on-scroll opacity-0">
              <Button asChild className="rounded-lg text-white bg-elegant-gray-900 hover:bg-elegant-gray-800 px-6 h-12 group">
                <a href="#learn-more">
                  Learn More
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
