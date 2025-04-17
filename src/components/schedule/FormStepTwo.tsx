
import React from "react";
import { format, isWithinInterval, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { Calendar, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScheduleFormValues } from "./types";
import { TIME_SLOTS, TIMEZONES } from "./constants";

interface FormStepTwoProps {
  form: UseFormReturn<ScheduleFormValues>;
  onContinue: () => void;
  onBack: () => void;
  minDate: Date;
  maxDate: Date;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (time: string | null) => void;
}

const sortTimeSlots = (slots: string[]) => {
  // Create a new array to avoid mutating the original
  return [...slots].sort((a, b) => {
    const parseTime = (time: string) => {
      const [timeStr, period] = time.split(' ');
      let [hours, minutes] = timeStr.split(':').map(Number);
      
      // Convert to 24-hour format for accurate sorting
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      return hours * 60 + minutes;
    };
    
    return parseTime(a) - parseTime(b);
  });
};

const FormStepTwo: React.FC<FormStepTwoProps> = ({ 
  form, 
  onContinue, 
  onBack, 
  minDate, 
  maxDate,
  selectedTimeSlot,
  setSelectedTimeSlot
}) => {
  // Check if a particular date is within the allowed range
  const isDateDisabled = (date: Date) => {
    // Allow any date between min and max
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

  // Sort time slots once when component renders
  const sortedTimeSlots = sortTimeSlots(TIME_SLOTS);

  return (
    <div className="space-y-6 animate-fade-in">
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Select a Date</FormLabel>
            <div className="grid md:flex gap-4 items-start">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full md:w-[240px] pl-3 text-left font-normal bg-elegant-gray-800 border-elegant-gray-700 hover:bg-elegant-gray-700",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "EEEE, MMMM d, yyyy")
                      ) : (
                        <span>Select a date</span>
                      )}
                      <Calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#eeeeee]" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={isDateDisabled}
                    initialFocus
                    className="pointer-events-auto bg-[#eeeeee]"
                  />
                </PopoverContent>
              </Popover>
              
              <p className="text-xs text-elegant-gray-400 md:self-end md:pb-2">
                <Calendar className="inline mr-1 h-3 w-3" />
                Available dates are between {format(minDate, "MMM d")} and {format(maxDate, "MMM d")}
              </p>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
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
      
      <FormField
        control={form.control}
        name="timezone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Your Timezone</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-elegant-gray-800 text-white border-elegant-gray-700">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-elegant-gray-800 text-white border-elegant-gray-700">
                {TIMEZONES.map((timezone) => (
                  <SelectItem key={timezone.value} value={timezone.value}>
                    {timezone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
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
