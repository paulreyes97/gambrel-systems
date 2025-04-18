import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
    <Dialog 
      open={open} 
      onOpenChange={(newOpen) => {
        console.log(`Dialog onOpenChange called with: ${newOpen}`);
        onOpenChange(newOpen);
      }}
    >
      <DialogContent 
        className="max-w-md md:max-w-lg bg-white overflow-y-auto max-h-[90vh] border border-gray-200 shadow-xl z-[100] relative"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200 z-50"
          onClick={() => {
            console.log("Close button clicked");
            onOpenChange(false);
          }}
        >
          <X className="h-5 w-5 text-elegant-gray-600" />
          <span className="sr-only">Close</span>
        </Button>
        
        <DialogHeader className="pt-2">
          <DialogTitle className="text-2xl font-display font-bold text-elegant-gray-900">
            Schedule a Strategy Session
          </DialogTitle>
          <DialogDescription className="text-elegant-gray-600 font-light">
            Select a date and time for your 30-minute strategy session.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4 pb-6">
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
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
