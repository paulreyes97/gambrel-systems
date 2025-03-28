
import React, { useState } from "react";
import { addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

import { Form } from "@/components/ui/form";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepper from "./FormStepper";
import { formSchema, ScheduleFormValues } from "./types";
import { STEP_TITLES, STEP_DESCRIPTIONS } from "./constants";

const InteractiveScheduleForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Get min and max dates (2 days from now and 2 weeks from now)
  const minDate = addDays(new Date(), 2);
  const maxDate = addDays(new Date(), 14);

  // Initialize the form
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      timezone: "PST",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: ScheduleFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Strategy Session Scheduled!",
        description: `Your session is confirmed for ${data.date.toLocaleDateString()} at ${data.time}. We'll send confirmation to ${data.email}.`,
      });
      
      // Reset form and go back to step 1
      form.reset();
      setStep(1);
      setSelectedTimeSlot(null);
    }, 1500);
  };

  // Render the appropriate step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <FormStepOne
            form={form}
            onContinue={() => setStep(2)}
          />
        );
      case 2:
        return (
          <FormStepTwo
            form={form}
            onContinue={() => setStep(3)}
            onBack={() => setStep(1)}
            minDate={minDate}
            maxDate={maxDate}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedTimeSlot={setSelectedTimeSlot}
          />
        );
      case 3:
        return (
          <FormStepThree
            form={form}
            onBack={() => setStep(2)}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-elegant-gray-900 p-8 md:p-12 rounded-2xl shadow-lg border border-elegant-gray-800 text-white">
      <FormStepper 
        currentStep={step} 
        stepTitles={STEP_TITLES}
        stepDescriptions={STEP_DESCRIPTIONS}
      />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStepContent()}
        </form>
      </Form>
    </div>
  );
};

export default InteractiveScheduleForm;
