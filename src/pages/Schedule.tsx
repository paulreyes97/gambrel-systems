
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "lucide-react";
import { addDays, format, isBefore, isAfter, setHours, setMinutes } from "date-fns";

const Schedule = () => {
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
  
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Calculate available dates (48 hours from now until 2 weeks later)
    const dates: Date[] = [];
    const startDate = addDays(new Date(), 2); // 48 hours from now
    const endDate = addDays(new Date(), 14); // 2 weeks from now
    
    let currentDate = new Date(startDate);
    
    while (isBefore(currentDate, endDate)) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setAvailableDates(dates);
  }, []);
  
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
    <div className="min-h-screen flex flex-col" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-elegant-gray-900 py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6 text-white">Schedule Your Free Strategy Session</h1>
            <p className="body-lg text-elegant-gray-300 max-w-3xl mx-auto">
              Book a time with our experts to discuss how our AI solutions can transform your construction operations.
            </p>
          </div>
        </section>
        
        {/* Schedule Form */}
        <section className="py-24 bg-gradient-to-b from-elegant-gray-100 to-elegant-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-elegant-gray-900 p-8 rounded-lg text-white shadow-lg">
                <h2 className="heading-md mb-6">Book Your Session</h2>
                <p className="body-md text-elegant-gray-300 mb-8">
                  During your free strategy session, our AI specialists will:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-elegant-gray-800 p-2 rounded-full mr-3 mt-1">
                      <Calendar size={18} className="text-elegant-blue-400" />
                    </div>
                    <p>Analyze your current construction processes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-elegant-gray-800 p-2 rounded-full mr-3 mt-1">
                      <Calendar size={18} className="text-elegant-blue-400" />
                    </div>
                    <p>Identify opportunities for AI automation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-elegant-gray-800 p-2 rounded-full mr-3 mt-1">
                      <Calendar size={18} className="text-elegant-blue-400" />
                    </div>
                    <p>Provide tailored recommendations for your business</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-elegant-gray-800 p-2 rounded-full mr-3 mt-1">
                      <Calendar size={18} className="text-elegant-blue-400" />
                    </div>
                    <p>Demonstrate relevant AI solutions for your needs</p>
                  </li>
                </ul>
                
                <div className="bg-elegant-gray-800 p-4 rounded-lg border border-elegant-gray-700 mb-8">
                  <h3 className="text-lg font-semibold mb-2">Scheduling Guidelines</h3>
                  <ul className="space-y-2 text-sm text-elegant-gray-300">
                    <li>• Available hours: 9:00 AM - 6:00 PM Pacific Time</li>
                    <li>• Schedule at least 48 hours in advance</li>
                    <li>• Appointments available up to 2 weeks in advance</li>
                  </ul>
                </div>
                
                <div className="relative mt-10">
                  <img 
                    src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
                    alt="Construction planning with AI" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
