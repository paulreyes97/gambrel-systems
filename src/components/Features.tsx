import { useEffect, useRef } from "react";
import { Building, Code, Settings, Users } from "lucide-react";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll(".feature-item");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="bg-[#dddddd] py-24" ref={featuresRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Features</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Designed to help you achieve more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Features grid has been removed */}
        </div>
      </div>
    </section>
  );
};

export default Features;
