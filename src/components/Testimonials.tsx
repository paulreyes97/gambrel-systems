
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Gambrel Systems has revolutionized how we manage our construction projects. The AI-powered insights have helped us reduce timeline delays by 35%.",
    author: "Michael Chen",
    position: "Director of Operations, BuildCorp Inc."
  },
  {
    quote: "The resource optimization feature alone saved us over $300,000 in our first year. The platform continues to impress us with its accuracy and ease of use.",
    author: "Sarah Johnson",
    position: "CEO, Johnson Construction"
  },
  {
    quote: "Our project managers can now make informed decisions quickly based on real-time data. Gambrel's platform has become an essential part of our workflow.",
    author: "Robert Williams",
    position: "CTO, Advanced Building Solutions"
  }
];

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
    <section className="bg-[#eeeeee] py-24" ref={testimonialsRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading construction companies to optimize their operations and drive success.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-center p-8 ${
                  index === current 
                    ? "opacity-100 translate-x-0" 
                    : index < current 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="mb-6">
                  <p className="text-xl italic">"{testimonial.quote}"</p>
                </blockquote>
                <div>
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
