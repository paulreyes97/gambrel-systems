
import React from "react";
import { format } from "date-fns";
import { UseFormReturn } from "react-hook-form";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScheduleFormValues } from "./types";

interface FormStepThreeProps {
  form: UseFormReturn<ScheduleFormValues>;
  onBack: () => void;
  isSubmitting: boolean;
}

const FormStepThree: React.FC<FormStepThreeProps> = ({ form, onBack, isSubmitting }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-elegant-gray-800/50 p-4 rounded-lg space-y-3 border border-elegant-gray-700">
        <h3 className="text-lg font-medium text-white">Review Your Session Details</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-elegant-gray-400">Name:</span>
            <span className="text-white font-medium">{form.getValues().name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-elegant-gray-400">Email:</span>
            <span className="text-white font-medium">{form.getValues().email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-elegant-gray-400">Company:</span>
            <span className="text-white font-medium">{form.getValues().company}</span>
          </div>
          {form.getValues().phone && (
            <div className="flex justify-between">
              <span className="text-elegant-gray-400">Phone:</span>
              <span className="text-white font-medium">{form.getValues().phone}</span>
            </div>
          )}
          <div className="border-t border-elegant-gray-700 my-2"></div>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-elegant-blue-500" />
            <div className="flex flex-col">
              <span className="text-white font-medium">
                {form.getValues().date && format(form.getValues().date, "EEEE, MMMM d, yyyy")}
              </span>
              <span className="text-elegant-gray-400">
                {form.getValues().time} ({form.getValues().timezone})
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Additional Information (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us about your construction business challenges or any specific topics you'd like to discuss in the session." 
                className="h-24 bg-elegant-gray-800 text-white border-elegant-gray-700 focus:ring-elegant-blue-500/50"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <Collapsible>
        <CollapsibleTrigger className="text-elegant-blue-400 hover:text-elegant-blue-300 text-sm flex items-center">
          What happens after I schedule?
        </CollapsibleTrigger>
        <CollapsibleContent className="text-sm text-elegant-gray-400 p-3 bg-elegant-gray-800/50 mt-2 rounded-md border border-elegant-gray-700">
          After scheduling, you'll receive a confirmation email with meeting details, preparation tips, and a calendar invitation. One of our AI strategy specialists will review your information before the call to tailor the session to your construction business needs.
        </CollapsibleContent>
      </Collapsible>
      
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
          type="submit" 
          className="flex-1 bg-gradient-to-r from-elegant-blue-900 to-indigo-600 hover:from-elegant-blue-800 hover:to-indigo-500 text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Scheduling..." : "Confirm Appointment"}
        </Button>
      </div>
      
      <p className="text-xs text-elegant-gray-400 text-center">
        By scheduling this session, you agree to our Privacy Policy and Terms of Service.
      </p>
    </div>
  );
};

export default FormStepThree;
