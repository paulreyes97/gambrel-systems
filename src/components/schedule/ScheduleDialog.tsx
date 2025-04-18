
import { useState, useEffect } from "react";
import { format, isSaturday, isSunday } from "date-fns";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateSelector from "./DateSelector";
import TimeSlotGrid from "./TimeSlotGrid";
import ScheduleForm from "./ScheduleForm";
import { sortTimeSlots } from "./form/TimeSlotUtils";

interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Track appointments per day using a Map
const appointmentsPerDay = new Map<string, number>();

// Store available time slots per date to ensure consistency
const availableTimeSlotsPerDate = new Map<string, string[]>();

const generateTimeSlots = (date: Date | undefined) => {
  if (!date) return [];

  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute === 0 ? '00' : '30';
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  if (isSaturday(date) || isSunday(date)) {
    return [
      "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", 
      "12:30 PM", "1:00 PM", "1:30 PM"
    ];
  }
  
  return [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];
};

const makeScheduleLookBusy = (slots: string[], selectedDate: Date) => {
  const today = new Date();
  const daysDifference = Math.floor((selectedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Start with 20% availability for the next 3 days
  // Gradually increase to 60% availability over 2 weeks
  let availabilityPercentage = 0.2; // Base availability (20%)
  
  if (daysDifference > 3) {
    // Increase availability by 3% each day after day 3, up to 60%
    availabilityPercentage = Math.min(0.6, 0.2 + ((daysDifference - 3) * 0.03));
  }
  
  const numToKeep = Math.ceil(slots.length * availabilityPercentage);
  const shuffled = [...slots].sort(() => 0.5 - Math.random());
  return sortTimeSlots(shuffled.slice(0, numToKeep));
};

const ScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  
  // Generate available time slots when the date changes
  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimeSlots([]);
      return;
    }

    const dateKey = selectedDate.toISOString().split('T')[0];
    
    // If we already have available slots for this date, use them
    if (availableTimeSlotsPerDate.has(dateKey)) {
      setAvailableTimeSlots(availableTimeSlotsPerDate.get(dateKey) || []);
    } else {
      // Otherwise generate new ones and store them
      const allPossibleSlots = generateTimeSlots(selectedDate);
      const availableSlots = makeScheduleLookBusy(allPossibleSlots, selectedDate);
      availableTimeSlotsPerDate.set(dateKey, availableSlots);
      setAvailableTimeSlots(availableSlots);
    }
    
    // Reset the selected time when changing dates
    setSelectedTime(null);
  }, [selectedDate]);
  
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
  
  // This console.log is for debugging purposes
  console.log("ScheduleDialog rendered, open state:", open);
  
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md md:max-w-lg bg-[#eeeeee] overflow-y-auto max-h-[90vh] border border-gray-200 shadow-xl relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-5 w-5 text-elegant-gray-600" />
          <span className="sr-only">Close</span>
        </Button>
        
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-display font-bold text-elegant-gray-900">
            Schedule a Strategy Session
          </AlertDialogTitle>
          <AlertDialogDescription className="text-elegant-gray-600 font-light">
            Select a date and time for your 30-minute strategy session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="space-y-6">
          <DateSelector 
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
          
          {selectedDate && (
            <TimeSlotGrid 
              availableTimeSlots={availableTimeSlots}
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
            />
          )}
          
          {selectedTime && (
            <ScheduleForm
              name={name}
              email={email}
              onNameChange={setName}
              onEmailChange={setEmail}
              onCancel={() => onOpenChange(false)}
              onSubmit={handleSubmit}
              isSubmitDisabled={!selectedDate || !selectedTime || !name || !email}
            />
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ScheduleDialog;
