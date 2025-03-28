
import React from "react";
import { Button } from "@/components/ui/button";

const ScheduleHero = () => {
  return (
    <section className="bg-gradient-to-r from-elegant-gray-900 via-elegant-blue-800 to-elegant-teal-900 py-24 relative overflow-hidden">
      {/* Overlay gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-overlay"></div>
      
      {/* Animated subtle gradient that moves slowly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,142,213,0.15),transparent_50%)] animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <h1 className="heading-xl mb-6 text-white horizontal-gradient-flow">Schedule Your Free Strategy Session</h1>
        <p className="body-lg text-elegant-gray-100 max-w-3xl mx-auto mb-8">
          Book a time with our experts to discuss how our AI solutions can transform your construction operations.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-gradient-to-r from-blue-900 to-indigo-600 hover:from-blue-800 hover:to-indigo-500 text-white font-medium shadow-lg hover:shadow-xl transition-all border-0"
          onClick={() => {
            // Smooth scroll to form section
            document.getElementById('schedule-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book Your Session Now
        </Button>
      </div>
    </section>
  );
};

export default ScheduleHero;
