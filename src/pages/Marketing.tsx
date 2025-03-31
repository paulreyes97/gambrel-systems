
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Lightbulb } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const Marketing = () => {
  const features = [
    "AI-driven market trend analysis",
    "Automated content generation and optimization",
    "Target audience identification and segmentation",
    "Campaign performance prediction and analysis",
    "Competitor strategy monitoring and benchmarking",
    "Multi-channel campaign coordination and timing"
  ];

  const benefits = [
    "Create more effective marketing campaigns with data-driven insights",
    "Save time with automated content generation and optimization",
    "Reach the right audience with precision targeting",
    "Maximize ROI by focusing resources on high-performing channels",
    "Stay ahead of competitors with real-time market intelligence",
    "Maintain consistent brand messaging across all touchpoints"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Marketing Solutions"
          description="Our data-driven marketing strategies help you reach the right audience at the right time. Our AI tools analyze market trends, customer preferences, and competitor activities to create targeted campaigns with maximum impact. Automated content generation and optimization ensure consistent brand messaging across all channels."
          features={features}
          benefits={benefits}
          icon={<Lightbulb className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Marketing;
