
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // Define the testimonials array that was missing
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
    <section className="py-24 bg-[#eeeeee]" ref={testimonialsRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <h2 className="heading-lg mb-4 text-white">Testimonials</h2>
          <p className="body-md text-white max-w-2xl mx-auto">
            See what our clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center p-8 bg-[#eeeeee] ${
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="mb-6 bg-[#eeeeee]">
                  <p className="text-xl italic text-white">"{testimonial.quote}"</p>
                </blockquote>
                <div className="bg-[#eeeeee]">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white">{testimonial.position}</p>
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
                  index === current ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground"
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
