import { useState } from "react";
import { format, isSaturday, isSunday } from "date-fns";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import DateSelector from "./DateSelector";
import TimeSlotGrid from "./TimeSlotGrid";
import ScheduleForm from "./ScheduleForm";

interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const generateTimeSlots = (date: Date | undefined) => {
  if (!date) return [];

  if (isSaturday(date) || isSunday(date)) {
    return ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];
  }
  
  return [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];
};

const makeScheduleLookBusy = (slots: string[]) => {
  const numToKeep = Math.ceil(slots.length * 0.4);
  const shuffled = [...slots].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numToKeep);
};

const ScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const availableTimeSlots = selectedDate ? makeScheduleLookBusy(generateTimeSlots(selectedDate)) : [];
  
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
  
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md md:max-w-lg bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-black">
            Schedule a Strategy Session
          </AlertDialogTitle>
          <AlertDialogDescription>
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
