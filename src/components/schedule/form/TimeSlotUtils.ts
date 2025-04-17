
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]): string[] => {
  return [...slots].sort((a, b) => {
    // Parse time strings to get comparable numeric values
    const parseTimeString = (timeStr: string): number => {
      const [timeComponent, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = timeComponent.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Convert to 24-hour format
      if (period === 'PM' && hour < 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      return (hour * 60) + minute; // Return minutes since midnight
    };
    
    const aMinutes = parseTimeString(a);
    const bMinutes = parseTimeString(b);
    
    return aMinutes - bMinutes;
  });
};

export const getSortedTimeSlots = (): string[] => {
  // Create a fresh copy of TIME_SLOTS before sorting
  const sorted = sortTimeSlots([...TIME_SLOTS]);
  console.log("TIME_SLOTS:", TIME_SLOTS);
  console.log("Sorted TIME_SLOTS:", sorted);
  return sorted;
};
