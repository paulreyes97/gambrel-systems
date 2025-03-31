
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Palette } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const GraphicDesign = () => {
  const features = [
    "AI-assisted design concept generation",
    "Brand consistency automation and guidelines",
    "Project proposal visualization tools",
    "Marketing material template creation",
    "Social media content design automation",
    "Visual asset management and organization"
  ];

  const benefits = [
    "Create professional marketing materials faster",
    "Maintain consistent brand identity across all materials",
    "Win more bids with visually compelling proposals",
    "Save time with templates and automation",
    "Enhance your company's visual communication",
    "Easily adapt designs for different platforms and purposes"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Graphic Design Solutions"
          description="Our creative design solutions for construction marketing materials capture attention and communicate your value proposition effectively. Our AI-assisted design tools help create compelling visuals while maintaining brand consistency. From project proposals to social media content, we ensure your visual communication stands out."
          features={features}
          benefits={benefits}
          icon={<Palette className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default GraphicDesign;
