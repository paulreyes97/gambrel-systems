
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { MessageSquare } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const CustomerService = () => {
  const features = [
    "AI-powered chatbots for 24/7 customer support",
    "Voice assistant integration for phone inquiries",
    "Sentiment analysis to detect customer satisfaction",
    "Automated ticket routing based on inquiry type",
    "Customer history and context-aware responses",
    "Seamless handoff from AI to human agents when needed"
  ];

  const benefits = [
    "Reduce response time by up to 80%",
    "Scale support operations without increasing headcount",
    "Improve customer satisfaction with consistent service",
    "Free up human agents to handle complex issues",
    "Gain insights from customer interaction analytics",
    "Provide multilingual support without additional resources"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Customer Service Solutions"
          description="Our AI-powered customer service solutions enhance interactions and support for construction companies. We use intelligent chatbots and voice assistants to handle routine inquiries, while advanced analytics identify customer pain points and improve satisfaction rates. This allows your team to focus on complex issues requiring the human touch."
          features={features}
          benefits={benefits}
          icon={<MessageSquare className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CustomerService;
