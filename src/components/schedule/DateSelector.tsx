
import { Calendar } from "@/components/ui/calendar";
import { addDays, isWithinInterval } from "date-fns";

interface DateSelectorProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const DateSelector = ({ selectedDate, onSelectDate }: DateSelectorProps) => {
  const minDate = addDays(new Date(), 2);
  const maxDate = addDays(new Date(), 14);
  
  const isDateDisabled = (date: Date) => {
    return !isWithinInterval(date, { start: minDate, end: maxDate });
  };

  return (
    <div>
      <label className="font-medium text-black mb-2 block">Select a Date</label>
      <div className="bg-[#f1f1f1] p-3 rounded-lg">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          disabled={isDateDisabled}
          className="pointer-events-auto bg-[#f1f1f1]"
        />
      </div>
    </div>
  );
};

export default DateSelector;
