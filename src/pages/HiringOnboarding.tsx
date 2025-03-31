
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import { UserPlus } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const HiringOnboarding = () => {
  const features = [
    "AI-driven candidate matching and ranking",
    "Automated skills assessment and verification",
    "Personalized onboarding program generation",
    "Continuous learning and development tracking",
    "Team composition and skills gap analysis",
    "Performance prediction and talent retention tools"
  ];

  const benefits = [
    "Reduce time-to-hire by up to 50%",
    "Improve candidate quality and job fit",
    "Accelerate new employee productivity with personalized onboarding",
    "Reduce turnover through better matching and development",
    "Identify and address skills gaps proactively",
    "Build higher-performing teams with complementary skill sets"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <SolutionPageTemplate
          title="Hiring & Onboarding Solutions"
          description="Our AI-driven talent acquisition platform streamlines recruitment and training for construction teams. Smart candidate matching, automated skills assessment, and personalized onboarding programs help you build and maintain high-performing teams. Continuous learning modules keep your workforce updated on the latest industry practices."
          features={features}
          benefits={benefits}
          icon={<UserPlus className="h-12 w-12 text-[#1E3A8A]" />}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default HiringOnboarding;
