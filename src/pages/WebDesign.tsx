
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Globe } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const WebDesign = () => {
  const features = [
    "Responsive website design optimized for all devices",
    "Construction portfolio showcasing tools",
    "Lead generation and contact form optimization",
    "SEO integration and performance monitoring",
    "Content management system customization",
    "Visitor behavior analytics and heatmaps"
  ];

  const benefits = [
    "Attract more qualified leads through your website",
    "Showcase your projects effectively to potential clients",
    "Improve your search engine rankings with proper SEO",
    "Provide excellent user experience on any device",
    "Easily update your content without technical knowledge",
    "Make data-driven decisions to improve website performance"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Web Design Solutions"
          description="Our custom websites are optimized for construction businesses to showcase your portfolio and generate qualified leads. Our responsive designs ensure excellent user experience across all devices, while intelligent SEO optimization improves your visibility to potential clients. Integrated analytics provide insights on visitor behavior to continuously improve performance."
          features={features}
          benefits={benefits}
          icon={<Globe className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default WebDesign;
