
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]) => {
  return [...slots].sort((a, b) => {
    // Convert each time string to minutes since midnight for comparison
    const timeToMinutes = (timeStr: string) => {
      const [time, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Convert to 24-hour format for proper sorting
      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      
      return hour * 60 + minute;
    };
    
    return timeToMinutes(a) - timeToMinutes(b);
  });
};

export const getSortedTimeSlots = () => {
  // Make sure we're returning a sorted copy of TIME_SLOTS
  console.log("Original TIME_SLOTS:", TIME_SLOTS);
  const sorted = sortTimeSlots([...TIME_SLOTS]);
  console.log("Sorted TIME_SLOTS:", sorted);
  return sorted;
};
