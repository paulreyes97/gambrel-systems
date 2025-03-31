
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { ClipboardList } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const ProjectManagement = () => {
  const features = [
    "Real-time progress tracking and visualization",
    "AI-powered resource allocation optimization",
    "Predictive analytics for bottleneck identification",
    "Automated reporting and stakeholder updates",
    "Risk assessment and mitigation recommendations",
    "Integration with existing project management tools"
  ];

  const benefits = [
    "Complete projects on time and within budget",
    "Optimize workforce and resource utilization",
    "Identify and address potential issues before they impact timelines",
    "Improve communication with stakeholders through automated updates",
    "Make data-driven decisions with real-time insights",
    "Streamline workflows and reduce administrative burden"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Project Management Solutions"
          description="Our advanced tools streamline workflow and help meet deadlines consistently. Our AI-powered project management solutions provide real-time progress tracking, resource allocation optimization, and predictive analytics to identify potential bottlenecks before they impact your timeline. Automated reporting keeps stakeholders informed at every stage."
          features={features}
          benefits={benefits}
          icon={<ClipboardList className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ProjectManagement;
