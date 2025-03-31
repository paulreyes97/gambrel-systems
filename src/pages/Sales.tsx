
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { BarChart3 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const Sales = () => {
  const features = [
    "AI-driven lead scoring and prioritization",
    "Predictive analytics for sales forecasting",
    "Personalized client approach recommendations",
    "Automated follow-up scheduling and reminders",
    "Real-time performance dashboards and KPIs",
    "Competitive intelligence gathering and analysis"
  ];

  const benefits = [
    "Increase conversion rates by identifying high-value prospects",
    "Improve sales cycle efficiency and reduce time-to-close",
    "Enhance client relationships with personalized approaches",
    "Make data-driven decisions with actionable insights",
    "Optimize resource allocation based on sales potential",
    "Identify new opportunities and market trends"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Sales Solutions"
          description="Our AI-powered sales solutions optimize your pipeline and increase conversions. We analyze customer data to identify high-value prospects, predict buying behavior, and recommend personalized approaches for each client. Real-time analytics dashboards track performance metrics and provide actionable insights to boost your bottom line."
          features={features}
          benefits={benefits}
          icon={<BarChart3 className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Sales;
