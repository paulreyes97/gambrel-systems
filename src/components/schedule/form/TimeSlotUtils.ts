
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]): string[] => {
  return [...slots].sort((a, b) => {
    // Convert time strings to 24-hour format minutes for accurate sorting
    const parseTimeToMinutes = (timeStr: string): number => {
      // Split into time and AM/PM
      const [timeComponent, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = timeComponent.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Convert to 24-hour format
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      return hour * 60 + minute;
    };
    
    const aMinutes = parseTimeToMinutes(a);
    const bMinutes = parseTimeToMinutes(b);
    
    console.log(`Comparing: ${a} (${aMinutes} mins) vs ${b} (${bMinutes} mins)`);
    
    return aMinutes - bMinutes;
  });
};

export const getSortedTimeSlots = (): string[] => {
  // Create a fresh copy to avoid mutating the original array
  const sorted = sortTimeSlots([...TIME_SLOTS]);
  
  // Add more detailed debug logs to verify correct sorting
  console.log("Original TIME_SLOTS:", TIME_SLOTS);
  console.log("Sorted TIME_SLOTS:", sorted);
  
  // Log the conversion of each time to minutes for debugging
  sorted.forEach(time => {
    const [timeComponent, period] = time.split(' ');
    const [hourStr, minuteStr] = timeComponent.split(':');
    
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    
    // Convert to 24-hour format
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    console.log(`${time} = ${hour * 60 + minute} minutes`);
  });
  
  return sorted;
};
