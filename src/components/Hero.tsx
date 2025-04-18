
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleDialog from "./schedule/ScheduleDialog";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  
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
  
  const handleScheduleClick = () => {
    console.log("Schedule button clicked");
    setScheduleDialogOpen(true);
  };
  
  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F1F1] via-[#E5E5E5] to-[#F8F8F8] z-0 animate-gradient-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,rgba(230,230,230,0.4)_100%)] opacity-50"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-elegant-blue-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-elegant-blue-200/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 z-10 pt-24 pb-32">
        <div className="grid grid-cols-1 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-12 hero-text max-w-4xl mx-auto text-center">
            <h1 className="animate-on-scroll opacity-0 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-br from-elegant-gray-900 via-elegant-blue-800 to-elegant-gray-700" style={{ animationDelay: "0.2s" }}>
              Empowering Your Business with AI Automation
            </h1>

            <p className="animate-on-scroll opacity-0 text-lg md:text-xl lg:text-2xl text-elegant-gray-700 max-w-3xl mx-auto font-light leading-relaxed tracking-wide" style={{ animationDelay: "0.3s" }}>
              Automate workflows, eliminate costly errors, and maximize profitability with Gambrel Systems—all while enhancing customer experience and unlocking your team's full potential.
            </p>
            
            <div className="animate-on-scroll opacity-0 flex flex-col items-center gap-6 pt-8" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg md:text-xl text-elegant-gray-600 font-light max-w-2xl">
                Schedule your free strategy session today and discover what's possible for your business.
              </p>
              <Button 
                size="lg" 
                className="gradient-button bg-gradient-to-r from-[#00287A] via-[#003AB3] to-[#0044CC] text-white font-semibold border-0 h-14 px-8 text-lg rounded-xl group shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 [background-size:200%_auto] animate-gradient-x"
                onClick={handleScheduleClick}
              >
                Schedule Free Strategy Call
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ScheduleDialog 
        open={scheduleDialogOpen} 
        onOpenChange={setScheduleDialogOpen} 
      />
    </section>
  );
};

export default Hero;
