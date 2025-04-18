
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { appointmentsPerDay, availableTimeSlotsPerDate, generateTimeSlots, makeScheduleLookBusy } from "../utils/timeSlotGenerator";

export const useScheduleDialog = (open: boolean, onOpenChange: (open: boolean) => void) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  // Debug logging effects
  useEffect(() => {
    console.log("ScheduleDialog component mounted");
    return () => console.log("ScheduleDialog component unmounted");
  }, []);

  useEffect(() => {
    console.log("ScheduleDialog open prop changed to:", open);
    console.log("Dialog component render state: {", {
      open,
      selectedDate,
      selectedTime,
      name,
      email,
      availableTimeSlots: availableTimeSlots.length
    }, "}");
  }, [open, selectedDate, selectedTime, name, email, availableTimeSlots]);

  // Reset form when dialog is closed
  useEffect(() => {
    if (!open) {
      setSelectedDate(undefined);
      setSelectedTime(null);
      setName("");
      setEmail("");
      console.log("Dialog closed - form reset");
    } else {
      console.log("Dialog opened - form should be visible");
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Update appointments count for the selected date
    const dateKey = selectedDate.toISOString().split('T')[0];
    const currentCount = appointmentsPerDay.get(dateKey) || 0;
    appointmentsPerDay.set(dateKey, currentCount + 1);
    
    // If this date now has 2 appointments, remove its available time slots
    if (currentCount + 1 >= 2) {
      availableTimeSlotsPerDate.delete(dateKey);
    }
    
    toast({
      title: "Strategy Session Scheduled!",
      description: `Your session is confirmed for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}. A confirmation email has been sent to ${email}.`,
    });
    
    setSelectedDate(undefined);
    setSelectedTime(null);
    setName("");
    setEmail("");
    onOpenChange(false);
  };

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    name,
    setName,
    email,
    setEmail,
    availableTimeSlots,
    setAvailableTimeSlots,
    handleSubmit
  };
};
