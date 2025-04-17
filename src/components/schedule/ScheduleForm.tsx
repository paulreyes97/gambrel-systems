
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface ScheduleFormProps {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitDisabled: boolean;
}

const ScheduleForm = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onCancel,
  onSubmit,
  isSubmitDisabled
}: ScheduleFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="font-medium text-black mb-2 block">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="font-medium text-black mb-2 block">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      
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
    </form>
  );
};

export default ScheduleForm;
