
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]) => {
  return [...slots].sort((a, b) => {
    const timeToMinutes = (timeStr: string) => {
      const [time, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Precise 24-hour format conversion
      if (period === 'PM') {
        hour = hour === 12 ? 12 : hour + 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      return hour * 60 + minute;
    };
    
    return timeToMinutes(a) - timeToMinutes(b);
  });
};

export const getSortedTimeSlots = () => {
  console.log("Original TIME_SLOTS:", TIME_SLOTS);
  const sorted = sortTimeSlots([...TIME_SLOTS]);
  console.log("Sorted TIME_SLOTS:", sorted);
  return sorted;
};

