
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (solutionsRef.current) {
      const elements = solutionsRef.current.querySelectorAll(".solution-item");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6 text-white">Our Solutions</h1>
            <p className="body-lg text-gambrel-silver max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed specifically for the construction industry to optimize every aspect of your projects.
            </p>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-24" ref={solutionsRef}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div 
                className={`solution-item opacity-0 relative overflow-hidden rounded-lg transition-all duration-500 ${
                  isHovered ? "transform scale-[1.02]" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ animationDelay: "0.2s" }}
              >
                {/* Background gradient with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#333] z-0"></div>
                <div className={`absolute inset-0 bg-gradient-to-tr from-gambrel-black/80 to-[#1a1a1a]/60 z-1 transition-opacity duration-500 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}></div>
                <div className={`absolute inset-0 bg-gradient-to-tr from-black to-gray-800 z-1 transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}></div>
                
                {/* Animated accent lines */}
                <div className="absolute h-1 w-1/2 bg-gradient-to-r from-gambrel-silver to-transparent top-0 left-0 z-2"></div>
                <div className="absolute h-1 w-1/2 bg-gradient-to-l from-gambrel-silver to-transparent bottom-0 right-0 z-2"></div>
                
                <div className="p-8 relative z-10 text-white">
                  <h2 className="heading-md mb-4 relative">
                    Project Planning & Management
                    <div className={`h-0.5 bg-white/60 w-0 transition-all duration-700 ${
                      isHovered ? "w-full" : ""
                    }`}></div>
                  </h2>
                  <p className="body-md text-gambrel-silver mb-6">
                    Our AI algorithms analyze historical project data to create optimized schedules, resource allocations, and cost projections.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Intelligent scheduling and timeline creation",
                      "Automated resource allocation and optimization",
                      "Real-time progress tracking and reporting",
                      "Risk identification and mitigation planning",
                      "Budget optimization and cost control"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start transition-transform duration-300 hover:translate-x-1 cursor-pointer"
                          onClick={() => setActiveSection(activeSection === i ? null : i)}>
                        <div className={`bg-white p-1 rounded-full mr-3 mt-1 transition-all duration-300 ${
                          activeSection === i ? "scale-125 bg-gambrel-silver" : ""
                        }`}>
                          <Check size={16} className={`text-black transition-all duration-300 ${
                            activeSection === i ? "text-black scale-110" : ""
                          }`} />
                        </div>
                        <span className={activeSection === i ? "font-semibold" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button 
                      variant="outline"
                      className={`mt-4 rounded-md border-white/30 text-white hover:bg-white/10 group transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}>
                      Learn More <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="solution-item opacity-0 p-1 rounded-lg transform transition-all duration-500 hover:scale-105" style={{ animationDelay: "0.4s" }}>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Project Planning" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="solution-item opacity-0 order-2 md:order-1 p-1 rounded-lg transform transition-all duration-500 hover:scale-105" style={{ animationDelay: "0.6s" }}>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Site Monitoring" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
              <div className="solution-item opacity-0 order-1 md:order-2 bg-black p-8 rounded-lg text-white" style={{ animationDelay: "0.8s" }}>
                <h2 className="heading-md mb-4">Site Monitoring & Safety</h2>
                <p className="body-md text-gambrel-silver mb-6">
                  Keep track of all activities on your construction sites in real-time with our advanced monitoring system.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time site activity monitoring",
                    "Safety compliance tracking and alerts",
                    "Equipment utilization and maintenance scheduling",
                    "Environmental monitoring and reporting",
                    "Automated incident detection and response"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-black" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="solution-item opacity-0 bg-black p-8 rounded-lg text-white" style={{ animationDelay: "1.0s" }}>
                <h2 className="heading-md mb-4">Supply Chain & Logistics</h2>
                <p className="body-md text-gambrel-silver mb-6">
                  Optimize your supply chain with predictive analytics that ensure materials arrive exactly when needed.
                </p>
                <ul className="space-y-3">
                  {[
                    "Predictive material requirement planning",
                    "Supplier performance tracking and optimization",
                    "Just-in-time delivery scheduling",
                    "Inventory management and waste reduction",
                    "Cost optimization through bulk purchasing intelligence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-black" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="solution-item opacity-0 p-1 rounded-lg transform transition-all duration-500 hover:scale-105" style={{ animationDelay: "1.2s" }}>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Supply Chain" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="solution-item opacity-0 order-2 md:order-1 p-1 rounded-lg transform transition-all duration-500 hover:scale-105" style={{ animationDelay: "1.4s" }}>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="AI Document Processing" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
              <div className="solution-item opacity-0 order-1 md:order-2 bg-black p-8 rounded-lg text-white" style={{ animationDelay: "1.6s" }}>
                <h2 className="heading-md mb-4">AI Document Processing & Analytics</h2>
                <p className="body-md text-gambrel-silver mb-6">
                  Automate document handling and extract valuable insights from your construction data with our AI-powered analytics.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated blueprint and drawing analysis",
                    "Intelligent contract review and management",
                    "Permit and compliance document automation",
                    "Cost estimation from project documentation",
                    "Predictive performance analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-black" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
