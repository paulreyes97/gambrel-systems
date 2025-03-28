
import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    date: "",
    time: "",
    timezone: "PST",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const isTimeWithinBusinessHours = (time: string): boolean => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours >= 9 && (hours < 18 || (hours === 18 && minutes === 0));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that the time is within business hours
    if (!isTimeWithinBusinessHours(formData.time)) {
      toast({
        title: "Invalid Time",
        description: "Please select a time between 9:00 AM and 6:00 PM PST.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Strategy Session Scheduled",
        description: "Thank you for scheduling a strategy session. We'll confirm your appointment shortly.",
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        date: "",
        time: "",
        timezone: "PST",
        message: "",
      });
    }, 1500);
  };
  
  const getMinDate = () => {
    const minDate = addDays(new Date(), 2);
    return format(minDate, 'yyyy-MM-dd');
  };
  
  const getMaxDate = () => {
    const maxDate = addDays(new Date(), 14);
    return format(maxDate, 'yyyy-MM-dd');
  };

  return (
    <div className="bg-elegant-gray-900 p-8 md:p-12 rounded-2xl shadow-lg border border-elegant-gray-800 text-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={getMinDate()}
              max={getMaxDate()}
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
            <p className="text-xs text-elegant-gray-400 mt-1">Must be 48 hours to 2 weeks from today</p>
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2">
              Preferred Time * (9AM-6PM PST)
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              min="09:00"
              max="18:00"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            />
            <p className="text-xs text-elegant-gray-400 mt-1">Business hours: 9:00 AM - 6:00 PM PST</p>
          </div>
        </div>
        
        <div>
          <label htmlFor="timezone" className="block text-sm font-medium mb-2">
            Timezone *
          </label>
          <select
            id="timezone"
            name="timezone"
            required
            value={formData.timezone}
            onChange={handleChange}
            className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
          >
            <option value="PST">Pacific Time (PST)</option>
            <option value="MST">Mountain Time (MST)</option>
            <option value="CST">Central Time (CST)</option>
            <option value="EST">Eastern Time (EST)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-elegant-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-elegant-blue-500/50 bg-elegant-gray-800 text-white"
            placeholder="Tell us about your construction business and specific challenges"
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-elegant-blue-600 to-elegant-teal-600 hover:from-elegant-blue-700 hover:to-elegant-teal-700 text-white"
          disabled={loading}
        >
          {loading ? "Scheduling..." : "Schedule Strategy Session"}
        </Button>
        
        <p className="text-xs text-elegant-gray-400 text-center">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  );
};

export default ScheduleForm;
