import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-24 bg-[#dddddd]" ref={testimonialsRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <h2 className="heading-lg mb-4">Testimonials</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center p-8 bg-[#dddddd] ${
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="mb-6 bg-[#dddddd]">
                  <p className="text-xl italic">"{testimonial.quote}"</p>
                </blockquote>
                <div className="bg-[#dddddd]">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
