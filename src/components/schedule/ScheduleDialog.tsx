import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateSelector from "./DateSelector";
import TimeSlotGrid from "./TimeSlotGrid";
import ScheduleForm from "./ScheduleForm";
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
  
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 bg-black/50 z-[999] backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-[1000] w-full max-w-md md:max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-6 overflow-y-auto max-h-[90vh]"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Close</span>
          </Button>
          
          <div className="space-y-4">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left pt-2">
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Schedule a Strategy Session
              </h2>
              <p className="text-gray-600 font-light">
                Select a date and time for your 30-minute strategy session.
              </p>
            </div>
            
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
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ScheduleDialog;
