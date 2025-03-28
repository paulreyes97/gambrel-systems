
import React from "react";
import { ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScheduleFormValues } from "./types";

interface FormStepOneProps {
  form: UseFormReturn<ScheduleFormValues>;
  onContinue: () => void;
}

const FormStepOne: React.FC<FormStepOneProps> = ({ form, onContinue }) => {
  const handleContinue = () => {
    form.trigger(['name', 'email', 'company']);
    if (form.getFieldState('name').invalid || 
        form.getFieldState('email').invalid || 
        form.getFieldState('company').invalid) {
      return;
    }
    onContinue();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-white">Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  className="bg-elegant-gray-800 text-white border-elegant-gray-700 focus:ring-elegant-blue-500/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-white">Email Address</FormLabel>
              <FormControl>
                <Input 
                  placeholder="email@example.com" 
                  type="email" 
                  {...field} 
                  className="bg-elegant-gray-800 text-white border-elegant-gray-700 focus:ring-elegant-blue-500/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-white">Company Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your company" 
                  {...field} 
                  className="bg-elegant-gray-800 text-white border-elegant-gray-700 focus:ring-elegant-blue-500/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-white">Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(123) 456-7890" 
                  type="tel" 
                  {...field} 
                  className="bg-elegant-gray-800 text-white border-elegant-gray-700 focus:ring-elegant-blue-500/50" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <Button 
        type="button" 
        className="w-full bg-gradient-to-r from-elegant-blue-900 to-indigo-600 hover:from-elegant-blue-800 hover:to-indigo-500 text-white font-medium"
        onClick={handleContinue}
      >
        Continue to Schedule <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FormStepOne;
