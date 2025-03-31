
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { Building } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const ResourceManagement = () => {
  const features = [
    "AI-powered material requirement forecasting",
    "Equipment utilization optimization and scheduling",
    "Inventory management and reorder automation",
    "Supplier performance tracking and comparison",
    "Cost analysis and budget optimization",
    "Waste reduction and sustainability metrics"
  ];

  const benefits = [
    "Reduce material waste and associated costs",
    "Optimize equipment utilization across multiple projects",
    "Prevent costly delays due to material shortages",
    "Improve cash flow with just-in-time inventory management",
    "Identify cost-saving opportunities through data analysis",
    "Support sustainability initiatives with reduced waste"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Resource Management Solutions"
          description="Our intelligent resource management platform optimizes allocation of materials and equipment across projects. AI algorithms analyze historical usage patterns, current project requirements, and availability to ensure the right resources are at the right place at the right time, minimizing waste and maximizing efficiency."
          features={features}
          benefits={benefits}
          icon={<Building className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ResourceManagement;
