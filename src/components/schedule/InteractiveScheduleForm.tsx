
import React, { useState } from "react";
import { format, addDays, isAfter, isBefore, parseISO } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, ArrowRight, Check, CalendarClock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define time slots
const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

// Timezones
const TIMEZONES = [
  { label: "Pacific Time (PST/PDT)", value: "PST" },
  { label: "Mountain Time (MST/MDT)", value: "MST" },
  { label: "Central Time (CST/CDT)", value: "CST" },
  { label: "Eastern Time (EST/EDT)", value: "EST" },
];

// Form schema validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  phone: z.string().optional(),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  timezone: z.string({
    required_error: "Please select a timezone",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const InteractiveScheduleForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Get min and max dates (2 days from now and 2 weeks from now)
  const minDate = addDays(new Date(), 2);
  const maxDate = addDays(new Date(), 14);

  // Initialize the form
  const form = useForm<FormValues>({
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
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Strategy Session Scheduled!",
        description: `Your session is confirmed for ${format(data.date, "EEEE, MMMM d, yyyy")} at ${data.time}. We'll send confirmation to ${data.email}.`,
      });
      
      // Reset form and go back to step 1
      form.reset();
      setStep(1);
      setSelectedTimeSlot(null);
    }, 1500);
  };

  // Check if a particular date should be disabled
  const isDateDisabled = (date: Date) => {
    return isAfter(date, maxDate) || isBefore(date, minDate);
  };

  // Conditionally render each step
  const renderStepContent = () => {
    switch (step) {
      case 1:
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
              onClick={() => {
                form.trigger(['name', 'email', 'company']);
                if (form.getFieldState('name').invalid || 
                    form.getFieldState('email').invalid || 
                    form.getFieldState('company').invalid) {
                  return;
                }
                setStep(2);
              }}
            >
              Continue to Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
        
      case 2:
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
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={isDateDisabled}
                          initialFocus
                          className="pointer-events-auto"
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
                    {TIME_SLOTS.map((time) => (
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
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button 
                type="button" 
                className="flex-1 bg-gradient-to-r from-elegant-blue-900 to-indigo-600 hover:from-elegant-blue-800 hover:to-indigo-500 text-white font-medium"
                onClick={() => {
                  form.trigger(['date', 'time', 'timezone']);
                  if (form.getFieldState('date').invalid || 
                      form.getFieldState('time').invalid || 
                      form.getFieldState('timezone').invalid) {
                    return;
                  }
                  setStep(3);
                }}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        );
      
      case 3:
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
                onClick={() => setStep(2)}
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
      default:
        return null;
    }
  };

  return (
    <div className="bg-elegant-gray-900 p-8 md:p-12 rounded-2xl shadow-lg border border-elegant-gray-800 text-white">
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="relative flex items-center justify-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center z-10",
              step >= 1 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
            )}>
              <span className="text-white font-medium">1</span>
            </div>
            <div className={cn(
              "absolute h-1 w-8 right-0 translate-x-full",
              step > 1 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
            )} />
          </div>
          <div className="relative flex items-center justify-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center z-10 ml-8",
              step >= 2 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
            )}>
              <span className="text-white font-medium">2</span>
            </div>
            <div className={cn(
              "absolute h-1 w-8 right-0 translate-x-full",
              step > 2 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
            )} />
          </div>
          <div className="relative flex items-center justify-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center z-10 ml-8",
              step >= 3 ? "bg-elegant-blue-600" : "bg-elegant-gray-700"
            )}>
              <span className="text-white font-medium">3</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1">
          {step === 1 && "Your Information"}
          {step === 2 && "Select Date & Time"}
          {step === 3 && "Confirm Your Appointment"}
        </h3>
        <p className="text-elegant-gray-400">
          {step === 1 && "Tell us a bit about yourself"}
          {step === 2 && "Choose when you'd like to meet"}
          {step === 3 && "Review and confirm your strategy session"}
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStepContent()}
        </form>
      </Form>
    </div>
  );
};

export default InteractiveScheduleForm;
