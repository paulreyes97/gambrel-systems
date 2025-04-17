
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]): string[] => {
  return [...slots].sort((a, b) => {
    // Parse time strings into minutes since midnight for accurate comparison
    const timeToMinutes = (timeStr: string): number => {
      const [timePart, period] = timeStr.split(' ');
      let [hours, minutes] = timePart.split(':').map(num => parseInt(num, 10));
      
      // Handle special case of 12 AM/PM
      if (hours === 12) {
        hours = period === 'AM' ? 0 : 12;
      } else if (period === 'PM') {
        hours += 12;
      }
      
      return hours * 60 + minutes;
    };
    
    return timeToMinutes(a) - timeToMinutes(b);
  });
};

export const getSortedTimeSlots = (): string[] => {
  // Always create a fresh copy to avoid mutating the original array
  const sorted = sortTimeSlots([...TIME_SLOTS]);
  
  // Debug logs to verify correct sorting
  console.log("Original TIME_SLOTS:", TIME_SLOTS);
  console.log("Sorted TIME_SLOTS:", sorted);
  
  return sorted;
};
