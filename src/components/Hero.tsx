
import { useEffect, useRef } from "react";
import { ArrowRight, Building2, Brain, Presentation, Star, Sparkles } from "lucide-react";
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
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0 animate-gradient-x"></div>
      
      {/* Animated floating orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-2/3 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-float"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-white/20 animate-float-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'delayed' : ''}`}
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay with subtle animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0 animate-pulse"></div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 hero-text">
            <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight gradient-flow-animation" style={{ animationDelay: "0.2s", backgroundImage: "linear-gradient(90deg, #ffffff, #4f8ed5, #ffffff)" }}>
              Transform Your Construction Business
            </h1>

            <p className="animate-on-scroll opacity-0 text-xl text-white max-w-xl" style={{ animationDelay: "0.3s" }}>
              We deliver AI technologies designed exclusively for construction firms—eliminating costly mistakes, improving project management, and enabling unprecedented productivity.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-elegant-blue-600 to-elegant-blue-800 hover:from-elegant-blue-700 hover:to-elegant-blue-900 text-white border-0 h-14 px-6 text-base rounded-xl group relative overflow-hidden">
                <Link to="/schedule">
                  <span className="relative z-10 flex items-center">
                    Schedule Free Strategy Session
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-elegant-blue-700 to-elegant-blue-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative animate-on-scroll opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-elegant-blue-500/20 to-elegant-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Animated feature cards */}
            <div className="relative grid grid-cols-1 gap-6 max-w-md">
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 shadow-xl animate-float-slow">
                <div className="w-12 h-12 bg-elegant-blue-900/60 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Building2 className="text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Smart Project Management</h3>
                <p className="text-white text-sm">Real-time monitoring and AI-driven insights to keep projects on track.</p>
              </div>
              
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform translate-x-8 hover:-translate-y-1 transition-all duration-300 shadow-xl animate-float">
                <div className="w-12 h-12 bg-elegant-blue-900/60 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Brain className="text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">AI Resource Optimization</h3>
                <p className="text-white text-sm">Intelligent allocation of materials and workforce to maximize efficiency.</p>
              </div>
              
              <div className="bg-elegant-gray-800/40 backdrop-blur-md border border-elegant-gray-700/50 rounded-xl p-6 transform translate-x-4 hover:-translate-y-1 transition-all duration-300 shadow-xl animate-float-delayed">
                <div className="w-12 h-12 bg-elegant-gray-700/60 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Presentation className="text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-white text-sm">Foresee challenges before they impact your projects and profits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute z-10 opacity-30">
        <Sparkles className="absolute top-1/4 right-[10%] text-blue-300 w-8 h-8 animate-float" />
        <Star className="absolute bottom-1/4 left-[10%] text-blue-300 w-6 h-6 animate-float-delayed" />
        <Sparkles className="absolute top-2/3 left-[25%] text-blue-300 w-5 h-5 animate-float-slow" />
        <Star className="absolute bottom-1/3 right-[30%] text-blue-300 w-4 h-4 animate-float" />
      </div>
    </section>
  );
};

export default Hero;
