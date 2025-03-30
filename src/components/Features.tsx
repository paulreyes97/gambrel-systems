
import { useEffect, useRef } from "react";
import { Building, Code, Settings, Users } from "lucide-react";

const features = [
  {
    icon: <Building size={40} className="text-primary" />,
    title: "Intelligent Project Planning",
    description: "AI algorithms analyze historical data to optimize schedules, resources, and timelines, ensuring your projects stay on track and on budget."
  },
  {
    icon: <Settings size={40} className="text-primary" />,
    title: "Resource Optimization",
    description: "Automatically allocate personnel, equipment, and materials across job sites to maximize efficiency and minimize downtime."
  },
  {
    icon: <Code size={40} className="text-primary" />,
    title: "Predictive Analytics",
    description: "Identify potential issues before they happen with machine learning models that analyze patterns and predict outcomes."
  },
  {
    icon: <Users size={40} className="text-primary" />,
    title: "Collaborative Workflows",
    description: "Connect teams, subcontractors, and clients on a unified platform for seamless communication and real-time updates."
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll(".feature-item");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="bg-[#dddddd] py-24" ref={featuresRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Powerful Features for Construction Excellence</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our platform combines advanced AI with deep construction industry expertise to deliver solutions that make a real difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item opacity-0 bg-[#dddddd] p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${0.2 * (index + 1)}s`, backgroundColor: "#dddddd" }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
