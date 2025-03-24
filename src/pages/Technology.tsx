
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gambrel-gray-light py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6">Our Technology</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Powered by advanced AI and machine learning, our platform delivers innovative solutions specifically tailored for the construction industry.
            </p>
          </div>
        </section>
        
        {/* Technology Overview */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="heading-md mb-6">Artificial Intelligence Core</h2>
                <p className="body-md text-muted-foreground mb-6">
                  At the heart of Gambrel Systems is our proprietary AI engine designed specifically for construction workflows. It continuously learns from project data to deliver increasingly accurate predictions and recommendations.
                </p>
                <p className="body-md text-muted-foreground">
                  Our models are trained on millions of construction project data points, enabling them to understand the complex interrelationships between timelines, resources, costs, and outcomes.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-secondary rounded-lg -z-10"></div>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="AI Technology" 
                  className="w-full rounded-lg z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-gambrel-gray-medium rounded-lg -z-10"></div>
              </div>
            </div>
            
            {/* Tech Features */}
            <h2 className="heading-md mb-12 text-center">Key Technology Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  title: "Machine Learning Prediction",
                  description: "Our algorithms learn from each project to continuously improve accuracy and provide better insights for future work."
                },
                {
                  title: "Computer Vision",
                  description: "Advanced image recognition monitors site progress, safety compliance, and equipment utilization in real-time."
                },
                {
                  title: "Natural Language Processing",
                  description: "Extract valuable information from contracts, specifications, and communications to ensure compliance and reduce risk."
                },
                {
                  title: "Digital Twin Technology",
                  description: "Create virtual replicas of your projects that update in real-time, enabling simulation and scenario planning."
                },
                {
                  title: "API Integration Framework",
                  description: "Seamlessly connect with your existing software ecosystem including BIM, ERP, and accounting systems."
                },
                {
                  title: "Secure Cloud Infrastructure",
                  description: "Enterprise-grade security with role-based access control and encryption for all your sensitive project data."
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Integration Section */}
            <div className="bg-gambrel-gray-light rounded-2xl p-12 mb-24">
              <div className="text-center mb-12">
                <h2 className="heading-md mb-4">Seamless Integration</h2>
                <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                  Our platform is designed to work with your existing tools and processes, minimizing disruption while maximizing value.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {/* Integration logos would go here - showing placeholders */}
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-center h-20">
                    <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
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

export default Technology;
