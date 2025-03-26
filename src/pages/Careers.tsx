
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gambrel-gray-light py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6">Join Our Team</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Help us revolutionize the construction industry through AI and innovation.
            </p>
          </div>
        </section>
        
        {/* Why Join Us */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="heading-md mb-6">Why Work at Gambrel Systems?</h2>
              <p className="body-md text-muted-foreground max-w-3xl mx-auto">
                We're building cutting-edge AI solutions for an industry that's ripe for innovation. Join us in our mission to transform construction through technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  title: "Innovative Technology",
                  description: "Work with the latest advancements in AI and machine learning to solve real-world problems."
                },
                {
                  title: "Growth Opportunities",
                  description: "We're growing rapidly, creating abundant opportunities for career advancement and skill development."
                },
                {
                  title: "Collaborative Culture",
                  description: "Join a team of diverse professionals working together to achieve remarkable outcomes."
                },
                {
                  title: "Impactful Work",
                  description: "Your contributions will directly help transform one of the world's largest industries."
                },
                {
                  title: "Competitive Benefits",
                  description: "We offer competitive salaries, health benefits, flexible work arrangements, and more."
                },
                {
                  title: "Work-Life Balance",
                  description: "We value your time and understand the importance of maintaining a healthy work-life balance."
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            {/* Open Positions */}
            <h2 className="heading-md mb-8 text-center">Open Positions</h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  title: "AI Engineer",
                  location: "Pueblo, CO (Remote Available)",
                  type: "Full-time"
                }
              ].map((job, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{job.title}</h3>
                      <p className="text-muted-foreground">{job.location} · {job.type}</p>
                    </div>
                    <Button asChild className="mt-4 md:mt-0">
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-display font-semibold mb-4">Don't see a position that fits your skills?</h3>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-6">
                We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
