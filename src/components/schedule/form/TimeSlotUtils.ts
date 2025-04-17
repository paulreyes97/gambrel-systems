
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]) => {
  return [...slots].sort((a, b) => {
    const parseTimeString = (timeStr: string) => {
      const [time, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      // Convert to 24-hour format for proper sorting
      if (period === 'PM' && hour < 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      
      return { hour, minute };
    };
    
    const timeA = parseTimeString(a);
    const timeB = parseTimeString(b);
    
    // Compare hours first
    if (timeA.hour !== timeB.hour) {
      return timeA.hour - timeB.hour;
    }
    
    // If hours are the same, compare minutes
    return timeA.minute - timeB.minute;
  });
};

export const getSortedTimeSlots = () => sortTimeSlots(TIME_SLOTS);
