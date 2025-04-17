
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FormStepTwoActionsProps {
  onBack: () => void;
  onContinue: () => void;
}

const FormStepTwoActions: React.FC<FormStepTwoActionsProps> = ({ 
  onBack, 
  onContinue 
}) => {
  return (
    <div className="flex space-x-4">
      <Button 
        type="button" 
        variant="outline" 
        className="flex-1 bg-transparent border-elegant-gray-700 text-white hover:bg-elegant-gray-700"
        onClick={onBack}
      >
        Back
      </Button>
      <Button 
        type="button" 
        className="flex-1 bg-gradient-to-r from-elegant-blue-900 to-elegant-blue-600 hover:from-elegant-blue-800 hover:to-elegant-blue-500 text-white font-medium"
        onClick={onContinue}
      >
        Continue <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FormStepTwoActions;
