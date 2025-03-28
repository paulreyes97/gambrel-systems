
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      className="relative py-24 overflow-hidden"
    >
      {/* Base layer with different gradient than first hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gray-800 via-elegant-gray-900 to-elegant-blue-900 z-0"></div>
      
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-elegant-teal-900/20 to-transparent z-1"></div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 heading-lg text-white mb-6">
            How Our AI Solutions Transform Construction
          </h2>
          <p className="animate-on-scroll opacity-0 body-lg text-elegant-gray-200 max-w-2xl mx-auto">
            We're changing how construction firms operate through advanced AI technologies tailored to your industry's unique challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-on-scroll opacity-0 bg-elegant-gray-800/50 border-elegant-gray-700 text-white hover:bg-elegant-gray-700/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg bg-elegant-blue-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-elegant-blue-300">Real-time Project Monitoring</h3>
              <p className="text-elegant-gray-300 mb-6">
                Our AI constantly monitors your projects, identifying risks and opportunities before they impact your timeline or budget.
              </p>
              <Button variant="ghost" className="group text-elegant-blue-300 hover:text-white">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll opacity-0 bg-elegant-gray-800/50 border-elegant-gray-700 text-white hover:bg-elegant-gray-700/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg bg-elegant-teal-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-elegant-teal-300">Intelligent Resource Allocation</h3>
              <p className="text-elegant-gray-300 mb-6">
                Optimize your workforce and materials with AI that predicts needs and prevents costly overruns or shortages.
              </p>
              <Button variant="ghost" className="group text-elegant-teal-300 hover:text-white">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll opacity-0 bg-elegant-gray-800/50 border-elegant-gray-700 text-white hover:bg-elegant-gray-700/60 transition-all duration-300">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg bg-elegant-gray-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-elegant-gray-100">Enhanced Safety Compliance</h3>
              <p className="text-elegant-gray-300 mb-6">
                Reduce accidents and compliance issues with AI that analyzes site conditions and worker behavior to identify safety risks.
              </p>
              <Button variant="ghost" className="group text-elegant-gray-100 hover:text-white">
                Learn more <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
