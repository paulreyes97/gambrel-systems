
import { useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
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

  const benefits = [
    "Reduce project completion time by up to 35%",
    "Cut operational costs by eliminating redundancies",
    "Minimize costly mistakes with predictive error detection",
    "Optimize resource allocation for maximum efficiency",
    "Ensure safety compliance with automated monitoring",
    "Scale operations without proportionally increasing staff"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#eeeeee" }}
    >
      {/* Creative background with gradients and patterns */}
      <div className="absolute inset-0 bg-[#eeeeee] z-0"></div>
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-elegant-gray-900 to-transparent z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-elegant-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-elegant-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content column */}
          <div className="order-2 lg:order-1">
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold text-elegant-gray-900 mb-6">
              Next-Generation Solutions <br />for Construction Excellence
            </h2>
            
            <p className="animate-on-scroll opacity-0 text-elegant-gray-600 text-lg mb-8">
              Our AI platform integrates seamlessly with your existing workflows, providing immediate value without disrupting operations.
            </p>
            
            <div className="animate-on-scroll opacity-0 space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-elegant-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-elegant-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <Button asChild className="rounded-lg text-white bg-elegant-gray-900 hover:bg-elegant-gray-800 px-6 h-12 group">
                <a href="#case-studies">
                  See Case Studies
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Cards column */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-on-scroll opacity-0 bg-gradient-to-br from-elegant-blue-50 to-elegant-blue-100 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-2 bg-elegant-blue-500"></div>
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-elegant-blue-200 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-elegant-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-elegant-gray-900">Real-time Analytics</h3>
                    <p className="text-elegant-gray-700 mb-4">
                      Monitor project metrics in real-time, with AI-powered insights that help you make data-driven decisions.
                    </p>
                    <div className="pt-2 border-t border-elegant-blue-200">
                      <span className="text-elegant-blue-700 text-sm font-medium">Reduce decision time by 64%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll opacity-0 bg-gradient-to-br from-elegant-blue-50 to-elegant-blue-100 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden md:translate-y-12">
                <CardContent className="p-0">
                  <div className="h-2 bg-elegant-gray-500"></div>
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-elegant-gray-200 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-elegant-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-elegant-gray-900">Resource Optimization</h3>
                    <p className="text-elegant-gray-700 mb-4">
                      AI algorithms optimize resource allocation, reducing waste and maximizing productivity on every project.
                    </p>
                    <div className="pt-2 border-t border-elegant-gray-200">
                      <span className="text-elegant-gray-700 text-sm font-medium">Save up to 28% on resources</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-on-scroll opacity-0 bg-gradient-to-br from-slate-50 to-slate-100 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 rounded-xl overflow-hidden col-span-1 md:col-span-2 lg:col-span-1 md:col-start-1 md:col-end-3 lg:col-auto">
                <CardContent className="p-0">
                  <div className="h-2 bg-elegant-gray-500"></div>
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-elegant-gray-200 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-elegant-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-elegant-gray-900">Safety & Compliance</h3>
                    <p className="text-elegant-gray-700 mb-4">
                      Automated monitoring identifies potential safety issues before they become problems, ensuring compliance with regulations.
                    </p>
                    <div className="pt-2 border-t border-elegant-gray-200">
                      <span className="text-elegant-gray-700 text-sm font-medium">Reduce safety incidents by 42%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHero;
