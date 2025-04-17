
import React, { useMemo } from "react";
import { isWithinInterval } from "date-fns";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "./types";
import FormDateSelector from "./form/FormDateSelector";
import FormTimeSlotSelector from "./form/FormTimeSlotSelector";
import FormTimezoneSelector from "./form/FormTimezoneSelector";
import { getSortedTimeSlots } from "./form/TimeSlotUtils";

interface FormStepTwoProps {
  form: UseFormReturn<ScheduleFormValues>;
  onContinue: () => void;
  onBack: () => void;
  minDate: Date;
  maxDate: Date;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (time: string | null) => void;
}

const FormStepTwo: React.FC<FormStepTwoProps> = ({ 
  form, 
  onContinue, 
  onBack, 
  minDate, 
  maxDate,
  selectedTimeSlot,
  setSelectedTimeSlot
}) => {
  const isDateDisabled = (date: Date) => {
    return !isWithinInterval(date, { start: minDate, end: maxDate });
  };

  const handleContinue = () => {
    form.trigger(['date', 'time', 'timezone']);
    if (form.getFieldState('date').invalid || 
        form.getFieldState('time').invalid || 
        form.getFieldState('timezone').invalid) {
      return;
    }
    onContinue();
  };

  const sortedTimeSlots = useMemo(() => getSortedTimeSlots(), []);

  return (
    <div className="space-y-6 animate-fade-in">
      <FormDateSelector
        form={form}
        minDate={minDate}
        maxDate={maxDate}
        isDateDisabled={isDateDisabled}
      />
      
      <FormTimeSlotSelector
        form={form}
        timeSlots={sortedTimeSlots}
        setSelectedTimeSlot={setSelectedTimeSlot}
      />
      
      <FormTimezoneSelector form={form} />
      
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
          onClick={handleContinue}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FormStepTwo;
