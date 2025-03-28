
import React from "react";
import { Calendar } from "lucide-react";

const ScheduleBenefits = () => {
  return (
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
      
      <SchedulingGuidelines />
      
      <div className="relative mt-10">
        <img 
          src="/lovable-uploads/fa63f055-093e-4c71-9cc0-d771080343ca.png" 
          alt="Construction planning with AI" 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const SchedulingGuidelines = () => {
  return (
    <div className="bg-elegant-gray-800 p-4 rounded-lg border border-elegant-gray-700 mb-8">
      <h3 className="text-lg font-semibold mb-2">Scheduling Guidelines</h3>
      <ul className="space-y-2 text-sm text-elegant-gray-300">
        <li>• Available hours: 9:00 AM - 6:00 PM Pacific Time</li>
        <li>• Schedule at least 48 hours in advance</li>
        <li>• Appointments available up to 2 weeks in advance</li>
      </ul>
    </div>
  );
};

export default ScheduleBenefits;
