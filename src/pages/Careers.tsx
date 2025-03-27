
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Paperclip } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Careers = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [applicantInfo, setApplicantInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleApply = () => {
    setShowForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicantInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setShowForm(false);
      setResume(null);
      setApplicantInfo({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch shortly."
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col" id="top">
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
              <div className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold">AI Engineer</h3>
                    <p className="text-muted-foreground">Pueblo, CO (Remote Available) · Full-time</p>
                  </div>
                  <Button className="mt-4 md:mt-0" onClick={handleApply}>
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
            
            {showForm && (
              <div id="application-form" className="bg-white p-8 rounded-lg border border-border shadow-md mb-12">
                <h3 className="font-display text-xl font-semibold mb-6">Apply for AI Engineer</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={applicantInfo.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={applicantInfo.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicantInfo.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Cover Letter / Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={applicantInfo.message}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium mb-2">
                      Resume *
                    </label>
                    <div className="flex items-center w-full">
                      <label htmlFor="resume" className="flex items-center justify-center w-full p-3 border border-border border-dashed rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <Paperclip size={20} className="mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {resume ? resume.name : "Attach your resume (PDF, DOC, DOCX)"}
                        </span>
                        <input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="hidden"
                        />
                      </label>
                    </div>
                    {resume && (
                      <button
                        type="button"
                        onClick={() => setResume(null)}
                        className="text-xs text-muted-foreground underline mt-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      disabled={submitting}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
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
