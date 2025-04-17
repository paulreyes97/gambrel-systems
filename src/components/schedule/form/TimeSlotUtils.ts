
import { TIME_SLOTS } from "../constants";

export const sortTimeSlots = (slots: string[]) => {
  return [...slots].sort((a, b) => {
    const getMinutesSinceMidnight = (timeStr: string) => {
      const [time, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      if (period === 'PM' && hour < 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      
      return hour * 60 + minute;
    };
    
    return getMinutesSinceMidnight(a) - getMinutesSinceMidnight(b);
  });
};

export const getSortedTimeSlots = () => sortTimeSlots(TIME_SLOTS);
