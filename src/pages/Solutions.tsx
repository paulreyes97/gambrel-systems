
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gambrel-gray-light py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6">Our Solutions</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed specifically for the construction industry to optimize every aspect of your projects.
            </p>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="heading-md mb-4">Project Planning & Management</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Our AI algorithms analyze historical project data to create optimized schedules, resource allocations, and cost projections.
                </p>
                <ul className="space-y-3">
                  {[
                    "Intelligent scheduling and timeline creation",
                    "Automated resource allocation and optimization",
                    "Real-time progress tracking and reporting",
                    "Risk identification and mitigation planning",
                    "Budget optimization and cost control"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gambrel-gray-light p-1 rounded-lg">
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Project Planning" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 bg-gambrel-gray-light p-1 rounded-lg">
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Site Monitoring" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="heading-md mb-4">Site Monitoring & Safety</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Keep track of all activities on your construction sites in real-time with our advanced monitoring system.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time site activity monitoring",
                    "Safety compliance tracking and alerts",
                    "Equipment utilization and maintenance scheduling",
                    "Environmental monitoring and reporting",
                    "Automated incident detection and response"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-md mb-4">Supply Chain & Logistics</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Optimize your supply chain with predictive analytics that ensure materials arrive exactly when needed.
                </p>
                <ul className="space-y-3">
                  {[
                    "Predictive material requirement planning",
                    "Supplier performance tracking and optimization",
                    "Just-in-time delivery scheduling",
                    "Inventory management and waste reduction",
                    "Cost optimization through bulk purchasing intelligence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gambrel-gray-light p-1 rounded-lg">
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Supply Chain" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
