
import React from "react";
import { Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "../types";
import { sortTimeSlots } from "./TimeSlotUtils";

interface FormTimeSlotSelectorProps {
  form: UseFormReturn<ScheduleFormValues>;
  timeSlots: string[];
  setSelectedTimeSlot: (time: string | null) => void;
}

const FormTimeSlotSelector = ({ form, timeSlots, setSelectedTimeSlot }: FormTimeSlotSelectorProps) => {
  // Ensure time slots are sorted before rendering
  const sortedTimeSlots = sortTimeSlots(timeSlots);
  
  return (
    <FormField
      control={form.control}
      name="time"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Select a Time</FormLabel>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {sortedTimeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant="outline"
                className={cn(
                  "py-6 bg-elegant-gray-800 border-elegant-gray-700 hover:bg-elegant-gray-700",
                  field.value === time && "border-elegant-blue-500 ring-1 ring-elegant-blue-500"
                )}
                onClick={() => {
                  field.onChange(time);
                  setSelectedTimeSlot(time);
                }}
              >
                <div className="flex flex-col items-center">
                  <Clock className="h-4 w-4 mb-1" />
                  <span>{time}</span>
                  {field.value === time && (
                    <Check className="h-4 w-4 text-elegant-blue-500 mt-1" />
                  )}
                </div>
              </Button>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTimeSlotSelector;
