
import React from "react";
import { ArrowRight } from "lucide-react";

const ScheduleHero = () => {
  return (
    <section className="bg-gradient-to-r from-elegant-gray-900 via-elegant-blue-800 to-elegant-blue-900 py-24 relative overflow-visible">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,142,213,0.15),transparent_50%)] animate-pulse"></div>
      
      {/* Add floating particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-elegant-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-elegant-blue-400/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-elegant-blue-400/10 rounded-full blur-xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <h1 className="heading-xl mb-6 text-white gradient-flow-animation pb-8">Schedule Your Free Strategy Session</h1>
        <p className="body-lg text-elegant-gray-100 max-w-3xl mx-auto mb-8 animate-fade-in">
          Book a time with our experts to discuss how our solutions can transform your construction operations.
        </p>
      </div>
    </section>
  );
};

export default ScheduleHero;
