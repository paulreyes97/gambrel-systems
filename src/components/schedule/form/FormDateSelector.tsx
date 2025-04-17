
import React from "react";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "../types";
import { cn } from "@/lib/utils";

interface FormDateSelectorProps {
  form: UseFormReturn<ScheduleFormValues>;
  minDate: Date;
  maxDate: Date;
  isDateDisabled: (date: Date) => boolean;
}

const FormDateSelector = ({ form, minDate, maxDate, isDateDisabled }: FormDateSelectorProps) => {
  return (
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
  );
};

export default FormDateSelector;
