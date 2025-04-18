import { useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateSelector from "./DateSelector";
import TimeSlotGrid from "./TimeSlotGrid";
import ScheduleForm from "./ScheduleForm";
import { sortTimeSlots } from "./form/TimeSlotUtils";
import { useScheduleDialog } from "./hooks/useScheduleDialog";
import { generateTimeSlots, makeScheduleLookBusy, availableTimeSlotsPerDate } from "./utils/timeSlotGenerator";

interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ScheduleDialog = ({ open, onOpenChange }: ScheduleDialogProps) => {
  const {
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
  } = useScheduleDialog(open, onOpenChange);

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
  }, [selectedDate, setAvailableTimeSlots, setSelectedTime]);
  
  console.log("Rendering ScheduleDialog, open state:", open);
  
  return (
    <AlertDialog open={open} onOpenChange={(newOpen) => {
      console.log(`Dialog onOpenChange called with: ${newOpen}`);
      onOpenChange(newOpen);
    }}>
      <AlertDialogContent 
        className="max-w-md md:max-w-lg bg-[#eeeeee] overflow-y-auto max-h-[90vh] border border-gray-200 shadow-xl relative"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200"
          onClick={() => {
            console.log("Close button clicked");
            onOpenChange(false);
          }}
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
