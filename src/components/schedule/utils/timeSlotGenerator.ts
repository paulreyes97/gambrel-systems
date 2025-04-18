
import { isSaturday, isSunday } from "date-fns";

// Track appointments per day using a Map
export const appointmentsPerDay = new Map<string, number>();

// Store available time slots per date to ensure consistency
export const availableTimeSlotsPerDate = new Map<string, string[]>();

export const generateTimeSlots = (date: Date | undefined) => {
  if (!date) return [];

  const formatTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute === 0 ? '00' : '30';
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  if (isSaturday(date) || isSunday(date)) {
    return [
      "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", 
      "12:30 PM", "1:00 PM", "1:30 PM"
    ];
  }
  
  return [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];
};

export const makeScheduleLookBusy = (slots: string[], selectedDate: Date) => {
  const today = new Date();
  const daysDifference = Math.floor((selectedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  // Start with 20% availability for the next 3 days
  // Gradually increase to 60% availability over 2 weeks
  let availabilityPercentage = 0.2; // Base availability (20%)
  
  if (daysDifference > 3) {
    // Increase availability by 3% each day after day 3, up to 60%
    availabilityPercentage = Math.min(0.6, 0.2 + ((daysDifference - 3) * 0.03));
  }
  
  const numToKeep = Math.ceil(slots.length * availabilityPercentage);
  const shuffled = [...slots].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numToKeep);
};

