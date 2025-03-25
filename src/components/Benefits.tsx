
import { useEffect, useRef } from "react";
import { Check, ArrowRight, Clock, DollarSign, Target, Eye, ShieldCheck } from "lucide-react";

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
            <div className="relative h-[500px] w-full rounded-lg bg-white p-8 shadow-lg overflow-hidden">
              {/* Animated circles in the background */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-primary/10 animate-pulse" style={{ animationDuration: "4s" }}></div>
                <div className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-primary/5 animate-pulse" style={{ animationDuration: "6s" }}></div>
                <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-primary/15 animate-pulse" style={{ animationDuration: "5s" }}></div>
              </div>
              
              {/* Visual element replacing the graph */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Project Optimization</h3>
                  <div className="flex justify-center items-center gap-2 text-3xl font-bold">
                    <Clock className="text-primary h-8 w-8" />
                    <span className="counter">30%</span>
                    <span className="text-sm text-muted-foreground mt-1">Faster Delivery</span>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  {/* Animated icon showcase instead of bar chart */}
                  <div className="grid grid-cols-3 gap-6 my-8">
                    {[
                      { icon: Clock, label: "Time", color: "text-blue-500" },
                      { icon: DollarSign, label: "Cost", color: "text-green-500" },
                      { icon: Target, label: "Accuracy", color: "text-red-500" },
                      { icon: Eye, label: "Visibility", color: "text-purple-500" },
                      { icon: ShieldCheck, label: "Security", color: "text-yellow-500" },
                      { icon: ArrowRight, label: "Flow", color: "text-teal-500" },
                    ].map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={i} 
                          className="flex flex-col items-center justify-center animate-on-scroll opacity-0"
                          style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                        >
                          <div className={`${item.color} bg-white/90 p-4 rounded-full shadow-md mb-2 transform transition-all duration-300 hover:scale-110`}>
                            <IconComponent size={32} />
                          </div>
                          <span className="text-sm font-medium">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-3 rounded-lg shadow-sm flex items-center gap-2">
                    <DollarSign className="text-primary h-7 w-7" />
                    <div>
                      <div className="text-sm font-semibold">Cost Reduction</div>
                      <div className="text-lg font-bold">25%</div>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg shadow-sm flex items-center gap-2">
                    <Target className="text-primary h-7 w-7" />
                    <div>
                      <div className="text-sm font-semibold">Error Reduction</div>
                      <div className="text-lg font-bold">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
              <h2 className="heading-lg mb-4">Why Choose Gambrel Systems</h2>
              <p className="body-md text-muted-foreground mb-8">
                Our technology delivers tangible benefits that impact your bottom line and transform how you manage construction projects.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { text: "Reduce project timeline by up to 30%", icon: Clock },
                { text: "Cut operational costs by 25% through intelligent resource allocation", icon: DollarSign },
                { text: "Minimize errors and rework with predictive analysis", icon: Target },
                { text: "Real-time visibility across all job sites", icon: Eye },
                { text: "Automated compliance and safety monitoring", icon: ShieldCheck },
                { text: "Seamless integration with existing systems", icon: ArrowRight }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="animate-on-scroll opacity-0 flex items-start"
                    style={{ animationDelay: `${0.4 + 0.1 * (index + 1)}s` }}
                  >
                    <div className="bg-white p-3 rounded-full mr-4 mt-1 shadow-sm">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <p className="text-lg pt-2">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
