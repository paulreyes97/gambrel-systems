import React, { useMemo } from "react";
import { isWithinInterval } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "./types";
import FormDateSelector from "./form/FormDateSelector";
import FormTimeSlotSelector from "./form/FormTimeSlotSelector";
import FormTimezoneSelector from "./form/FormTimezoneSelector";
import FormStepTwoActions from "./form/FormStepTwoActions";
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

  const sortedTimeSlots = useMemo(() => {
    console.log("Sorting time slots in FormStepTwo");
    return getSortedTimeSlots();
  }, []);

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
      
      <FormStepTwoActions 
        onBack={onBack} 
        onContinue={handleContinue} 
      />
    </div>
  );
};

export default FormStepTwo;
