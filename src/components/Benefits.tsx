
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
    <section className="bg-elegant-gray-50 py-24" ref={benefitsRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 order-2 lg:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-[500px] w-full rounded-lg bg-white p-8 shadow-lg overflow-hidden">
              {/* Animated circles in the background */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-elegant-gray-100 animate-pulse" style={{ animationDuration: "4s" }}></div>
                <div className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-elegant-blue-50 animate-pulse" style={{ animationDuration: "6s" }}></div>
                <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-elegant-teal-50 animate-pulse" style={{ animationDuration: "5s" }}></div>
              </div>
              
              {/* Visual element - Large animated icons */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8 my-8">
                  {[
                    { icon: Clock, label: "Save Time", color: "text-elegant-blue-500", bg: "bg-elegant-blue-50" },
                    { icon: DollarSign, label: "Cut Costs", color: "text-elegant-teal-500", bg: "bg-elegant-teal-50" },
                    { icon: Target, label: "Enhance Efficiency", color: "text-elegant-gray-700", bg: "bg-elegant-gray-100" },
                    { icon: Eye, label: "Improve Visibility", color: "text-elegant-blue-600", bg: "bg-elegant-blue-100" },
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={i} 
                        className="flex flex-col items-center justify-center animate-on-scroll opacity-0"
                        style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                      >
                        <div className={`${item.color} ${item.bg} p-8 rounded-full shadow-md mb-4 transform transition-all duration-300 hover:scale-110`}>
                          <IconComponent size={64} />
                        </div>
                        <span className="text-lg font-medium text-center text-elegant-gray-700">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
              <h2 className="heading-lg mb-4 text-elegant-gray-800">Why Choose Gambrel Systems</h2>
              <p className="body-md text-elegant-gray-600 mb-8">
                Our AI implementation expertise delivers tangible benefits that impact your bottom line and transform how you manage construction projects.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { text: "Custom AI solutions designed for your specific operational needs", icon: Target, color: "text-elegant-gray-700", bg: "bg-elegant-gray-100" },
                { text: "Reduce manual processes and streamline project timelines", icon: Clock, color: "text-elegant-blue-500", bg: "bg-elegant-blue-50" },
                { text: "Lower operational costs through intelligent automation", icon: DollarSign, color: "text-elegant-teal-500", bg: "bg-elegant-teal-50" },
                { text: "Enhanced project visibility with real-time insights", icon: Eye, color: "text-elegant-blue-600", bg: "bg-elegant-blue-100" },
                { text: "Improved compliance and safety monitoring", icon: ShieldCheck, color: "text-elegant-gray-700", bg: "bg-elegant-gray-100" },
                { text: "Integration with your existing systems and workflows", icon: ArrowRight, color: "text-elegant-teal-500", bg: "bg-elegant-teal-50" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="animate-on-scroll opacity-0 flex items-start"
                    style={{ animationDelay: `${0.4 + 0.1 * (index + 1)}s` }}
                  >
                    <div className={`${benefit.bg} p-3 rounded-full mr-4 mt-1 shadow-sm`}>
                      <Icon size={32} className={benefit.color} />
                    </div>
                    <p className="text-lg pt-2 text-elegant-gray-700">{benefit.text}</p>
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
