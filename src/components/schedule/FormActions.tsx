
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface FormActionsProps {
  onCancel: () => void;
  isSubmitDisabled: boolean;
}

const FormActions = ({ onCancel, isSubmitDisabled }: FormActionsProps) => {
  return (
    <div className="flex justify-end space-x-4">
      <Button 
        type="button" 
        variant="outline" 
        onClick={onCancel}
        className="border-gray-300"
      >
        <X className="mr-2 h-4 w-4" />
        Cancel
      </Button>
      
      <Button 
        type="submit"
        className="bg-black text-white hover:bg-gray-800"
        disabled={isSubmitDisabled}
      >
        <Check className="mr-2 h-4 w-4" />
        Confirm Booking
      </Button>
    </div>
  );
};

export default FormActions;
