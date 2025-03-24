
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (benefitsRef.current) {
      const elements = benefitsRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="bg-gambrel-gray-light py-24" ref={benefitsRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 order-2 lg:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-secondary rounded-lg -z-10"></div>
              <img 
                src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                alt="Gambrel Systems Technology" 
                className="w-full rounded-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-gambrel-gray-medium rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
              <h2 className="heading-lg mb-4">Why Choose Gambrel Systems</h2>
              <p className="body-md text-muted-foreground mb-8">
                Our technology delivers tangible benefits that impact your bottom line and transform how you manage construction projects.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Reduce project timeline by up to 30%",
                "Cut operational costs by 25% through intelligent resource allocation",
                "Minimize errors and rework with predictive analysis",
                "Real-time visibility across all job sites",
                "Automated compliance and safety monitoring",
                "Seamless integration with existing systems"
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll opacity-0 flex items-start"
                  style={{ animationDelay: `${0.4 + 0.1 * (index + 1)}s` }}
                >
                  <div className="bg-white p-1 rounded-full mr-3 mt-1 shadow-sm">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
