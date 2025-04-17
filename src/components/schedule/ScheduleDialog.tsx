import { useState } from "react";
import { format, addDays, isSaturday, isSunday, isWithinInterval } from "date-fns";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Check, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  
  const minDate = addDays(new Date(), 2);
  const maxDate = addDays(new Date(), 14);
  
  const availableTimeSlots = selectedDate ? makeScheduleLookBusy(generateTimeSlots(selectedDate)) : [];
  
  const isDateDisabled = (date: Date) => {
    return !isWithinInterval(date, { start: minDate, end: maxDate });
  };
  
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
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="font-medium text-black mb-2 block">Select a Date</label>
              <div className="bg-[#f1f1f1] p-3 rounded-lg">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={isDateDisabled}
                  className="pointer-events-auto bg-[#f1f1f1]"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Available dates are between {format(minDate, "MMM d")} and {format(maxDate, "MMM d")}</p>
            </div>
            
            {selectedDate && (
              <div>
                <label className="font-medium text-black mb-2 block">Select a Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant="outline"
                        className={cn(
                          "py-4 border border-gray-300",
                          selectedTime === time 
                            ? "border-[#000000] bg-[#f1f1f1] ring-1 ring-[#000000]" 
                            : "hover:bg-[#f1f1f1]"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        <div className="flex items-center justify-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{time}</span>
                          {selectedTime === time && (
                            <Check className="h-4 w-4 ml-1" />
                          )}
                        </div>
                      </Button>
                    ))
                  ) : (
                    <p className="col-span-3 text-red-500">No available time slots for this date.</p>
                  )}
                </div>
              </div>
            )}
            
            {selectedTime && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-medium text-black mb-2 block">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="font-medium text-black mb-2 block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="border-gray-300"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            
            <Button 
              type="submit"
              className="bg-black text-white hover:bg-gray-800"
              disabled={!selectedDate || !selectedTime || !name || !email}
            >
              <Check className="mr-2 h-4 w-4" />
              Confirm Booking
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ScheduleDialog;
