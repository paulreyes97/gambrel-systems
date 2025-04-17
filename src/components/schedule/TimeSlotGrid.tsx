
import { Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlotGridProps {
  availableTimeSlots: string[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

const TimeSlotGrid = ({ availableTimeSlots, selectedTime, onTimeSelect }: TimeSlotGridProps) => {
  return (
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
              onClick={() => onTimeSelect(time)}
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
  );
};

export default TimeSlotGrid;
