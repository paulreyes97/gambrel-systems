
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Code } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const SoftwareDevelopment = () => {
  const features = [
    "Custom application development for construction needs",
    "Integration with existing systems and software",
    "Mobile app development for on-site accessibility",
    "Cloud-based deployment and secure data storage",
    "Automated testing and quality assurance",
    "Ongoing maintenance and update support"
  ];

  const benefits = [
    "Streamline operations with tailored software solutions",
    "Access critical information from anywhere, including job sites",
    "Improve decision-making with real-time data access",
    "Enhance data security and compliance",
    "Scale your technology infrastructure as your business grows",
    "Reduce manual processes and associated errors"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Software Development Solutions"
          description="We create tailored applications to meet your specific operational needs, from project tracking to client management. Our development team creates intuitive, scalable solutions that integrate seamlessly with your existing systems. Cloud-based deployment ensures accessibility from job sites while maintaining data security and compliance."
          features={features}
          benefits={benefits}
          icon={<Code className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default SoftwareDevelopment;
