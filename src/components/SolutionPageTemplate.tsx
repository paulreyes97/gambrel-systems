
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SolutionPageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
}

const SolutionPageTemplate: React.FC<SolutionPageProps> = ({
  title,
  description,
  features,
  benefits,
  icon,
}) => {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <div className="container mx-auto py-16 px-6">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/#solutions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
        </Button>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-elegant-gray-100 p-4 rounded-lg">
              {icon}
            </div>
            <h1 className="text-4xl font-bold font-display">{title}</h1>
          </div>

          <p className="text-lg mb-8">{description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-display">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1E3A8A] mr-2">•</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-display">Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1E3A8A] mr-2">•</span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 rounded-lg group">
              <Link to="/schedule">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPageTemplate;
