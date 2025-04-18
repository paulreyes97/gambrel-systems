
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "The platform has transformed how we approach our projects. Highly recommended!",
      author: "Alex Johnson",
      position: "Project Manager"
    },
    {
      quote: "An essential tool that has significantly improved our workflow efficiency.",
      author: "Sam Rodriguez",
      position: "Operations Director"
    },
    {
      quote: "The intuitive interface and powerful features make this solution stand out.",
      author: "Taylor Williams",
      position: "Chief Technology Officer"
    }
  ];
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [current]);
  
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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="py-24 relative overflow-hidden" ref={testimonialsRef}>
      {/* Enhanced background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gray-900 via-elegant-blue-900 to-elegant-gray-800"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-elegant-blue-600/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-elegant-blue-700/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white bg-clip-text">
            Client Success Stories
          </h2>
          <p className="text-elegant-gray-200 max-w-2xl mx-auto">
            See what our clients have to say about our AI automation solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center p-8 glass-panel rounded-2xl backdrop-blur-sm ${
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="mb-6">
                  <p className="text-xl italic text-white font-light leading-relaxed">"{testimonial.quote}"</p>
                </blockquote>
                <div className="border-t border-elegant-blue-400/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-elegant-gray-300">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-elegant-blue-500 scale-125" 
                    : "bg-elegant-gray-600 hover:bg-elegant-blue-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
