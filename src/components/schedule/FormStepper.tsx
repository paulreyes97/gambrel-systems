
import React from "react";
import { cn } from "@/lib/utils";

interface FormStepperProps {
  currentStep: number;
  stepTitles: string[];
  stepDescriptions: string[];
}

const FormStepper: React.FC<FormStepperProps> = ({ 
  currentStep, 
  stepTitles,
  stepDescriptions
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        {stepTitles.map((_, index) => (
          <React.Fragment key={index}>
            <div className="relative flex items-center justify-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center z-10",
                currentStep >= index + 1 ? "bg-elegant-blue-600" : "bg-elegant-gray-700",
                index > 0 && "ml-8" // Add margin to all except first item
              )}>
                <span className="text-white font-medium">{index + 1}</span>
              </div>
              {index < stepTitles.length - 1 && (
                <div className={cn(
                  "absolute h-1 w-8 right-0 translate-x-full",
                  currentStep > index + 1 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
                )} />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-1">
        {stepTitles[currentStep - 1]}
      </h3>
      <p className="text-elegant-gray-400">
        {stepDescriptions[currentStep - 1]}
      </p>
    </div>
  );
};

export default FormStepper;
