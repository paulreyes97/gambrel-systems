
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ScheduleFormValues } from "../types";
import { TIMEZONES } from "../constants";

interface FormTimezoneSelectorProps {
  form: UseFormReturn<ScheduleFormValues>;
}

const FormTimezoneSelector = ({ form }: FormTimezoneSelectorProps) => {
  return (
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
  );
};

export default FormTimezoneSelector;
