
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gambrel-background" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-black py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6 text-white">About Us</h1>
            <p className="body-lg text-gambrel-silver max-w-3xl mx-auto">
              We're on a mission to transform construction through intelligent automation and AI technology.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="bg-black p-8 rounded-lg text-white">
                <h2 className="heading-md mb-6">Our Story</h2>
                <p className="body-md text-gambrel-silver mb-6">
                  Gambrel Systems was founded by a team of construction industry veterans and AI specialists who recognized a critical need for innovation in one of the world's oldest industries.
                </p>
                <p className="body-md text-gambrel-silver mb-6">
                  After witnessing firsthand the inefficiencies, delays, and cost overruns that plague construction projects, our founders set out to create a solution that would leverage the power of artificial intelligence to address these challenges.
                </p>
                <p className="body-md text-gambrel-silver">
                  Today, we're proud to offer a comprehensive platform that helps construction companies of all sizes optimize their operations, reduce costs, and deliver projects on time and on budget.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-gray-200 rounded-lg -z-10"></div>
                <img 
                  src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                  alt="Gambrel Systems" 
                  className="w-full rounded-lg z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-gray-300 rounded-lg -z-10"></div>
              </div>
            </div>
            
            {/* Mission - Centered */}
            <div className="bg-black p-12 rounded-2xl border border-border mb-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="heading-md mb-6">Our Mission</h2>
                <p className="body-md text-gambrel-silver">
                  To revolutionize the construction industry by providing intelligent automation solutions that enhance efficiency, safety, and profitability while reducing environmental impact.
                </p>
              </div>
            </div>
            
            {/* Values - Centered */}
            <div className="bg-black p-12 rounded-2xl border border-border mb-24 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="heading-md mb-6">Our Values</h2>
                <ul className="space-y-4 text-left">
                  <li className="body-md">
                    <span className="font-semibold">Innovation:</span> We constantly push the boundaries of what's possible with AI in construction.
                  </li>
                  <li className="body-md">
                    <span className="font-semibold">Reliability:</span> Our customers depend on our solutions for mission-critical operations.
                  </li>
                  <li className="body-md">
                    <span className="font-semibold">Sustainability:</span> We're committed to helping the construction industry reduce waste and environmental impact.
                  </li>
                  <li className="body-md">
                    <span className="font-semibold">Partnership:</span> We view our relationship with clients as a long-term partnership.
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Our Leadership */}
            <h2 className="heading-md mb-12 text-center text-black">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
              <div className="bg-black p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow text-white">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <h3 className="font-display text-xl font-semibold text-center">Paul Reyes</h3>
                <p className="text-gambrel-silver text-center mb-4">Founder & CEO</p>
                <p className="text-sm text-center">
                  A decade of construction experience as a general contractor, project manager, and sales manager.
                  In recent years, Paul has become an AI specialist, consulting various businesses on implementing and integrating AI technologies.
                </p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow text-white">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <h3 className="font-display text-xl font-semibold text-center">Kole Krebs</h3>
                <p className="text-gambrel-silver text-center mb-4">Head of Software Development</p>
                <p className="text-sm text-center">
                  Leading our software development team to build cutting-edge AI solutions that transform the construction industry.
                </p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow text-white">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <h3 className="font-display text-xl font-semibold text-center">Ethan Jones</h3>
                <p className="text-gambrel-silver text-center mb-4">Head of Sales</p>
                <p className="text-sm text-center">
                  Helping construction companies understand how our AI solutions can transform their operations and improve their bottom line.
                </p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow text-white">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <h3 className="font-display text-xl font-semibold text-center">Adrian Griego</h3>
                <p className="text-gambrel-silver text-center mb-4">Head of Automations</p>
                <p className="text-sm text-center">
                  Overseeing the development and implementation of our automation solutions to streamline construction workflows and increase efficiency.
                </p>
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

export default About;
