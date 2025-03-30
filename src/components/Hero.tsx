import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Building2, Brain, Presentation } from "lucide-react";
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
      {/* Modernized background with gradient and animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-teal-900 z-0"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-elegant-teal-300/20 bg-elegant-teal-900/10 px-4 py-1.5 text-sm font-medium text-elegant-teal-300 backdrop-blur-sm animate-on-scroll opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center">
                <span className="flex h-2 w-2 rounded-full bg-elegant-teal-400 mr-2"></span> 
                New AI Solutions for 2024
              </div>
            </div>
            
            <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-elegant-gray-100 to-elegant-teal-200 bg-clip-text text-transparent tracking-tight" style={{ animationDelay: "0.2s" }}>
              Transform Your Construction Business
            </h1>

            <p className="animate-on-scroll opacity-0 text-xl text-elegant-gray-300 max-w-xl" style={{ animationDelay: "0.3s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, and enabling unprecedented productivity.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-elegant-blue-500 to-elegant-teal-500 hover:from-elegant-blue-600 hover:to-elegant-teal-600 text-white border-0 h-14 px-6 text-base rounded-xl group">
                <Link to="/schedule">
                  Schedule Free Strategy Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base rounded-xl border-elegant-gray-700 text-elegant-gray-300 bg-elegant-gray-900/50 backdrop-blur-sm hover:bg-elegant-gray-800 hover:text-white">
                <Link to="/solutions">
                  Explore Solutions
                  <ArrowUpRight className="ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-elegant-gray-800 animate-on-scroll opacity-0" style={{ animationDelay: "0.5s" }}>
              <div>
                <p className="text-elegant-teal-400 text-3xl font-bold">35%</p>
                <p className="text-elegant-gray-400 text-sm">Cost Reduction</p>
              </div>
              <div>
                <p className="text-elegant-teal-400 text-3xl font-bold">42%</p>
                <p className="text-elegant-gray-400 text-sm">Faster Delivery</p>
              </div>
              <div>
                <p className="text-elegant-teal-400 text-3xl font-bold">89%</p>
                <p className="text-elegant-gray-400 text-sm">Error Prevention</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative animate-on-scroll opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-elegant-teal-500/20 to-elegant-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* Feature cards */}
            <div className="relative grid grid-cols-1 gap-6 max-w-md">
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-elegant-blue-900/60 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-elegant-blue-400" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Smart Project Management</h3>
                <p className="text-elegant-gray-400 text-sm">Real-time monitoring and AI-driven insights to keep projects on track.</p>
              </div>
              
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform translate-x-8 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-elegant-teal-900/60 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-elegant-teal-400" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">AI Resource Optimization</h3>
                <p className="text-elegant-gray-400 text-sm">Intelligent allocation of materials and workforce to maximize efficiency.</p>
              </div>
              
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform translate-x-4 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <div className="w-12 h-12 bg-elegant-gray-700/60 rounded-lg flex items-center justify-center mb-4">
                  <Presentation className="text-elegant-gray-100" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-elegant-gray-400 text-sm">Foresee challenges before they impact your projects and profits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
