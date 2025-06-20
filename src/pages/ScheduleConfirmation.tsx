
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Calendar, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScheduleConfirmation = () => {
  // Use location to access state passed during navigation
  const location = useLocation();
  const { formData } = location.state || {};
  
  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-24 bg-gradient-to-b from-elegant-gray-900 to-elegant-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-elegant-gray-800 rounded-2xl shadow-xl border border-elegant-gray-700 overflow-hidden">
              {/* Header with left-to-right gradient styling */}
              <div className="bg-gradient-to-r from-elegant-blue-900 to-elegant-blue-700 p-8 text-center">
                <div className="h-16 w-16 bg-[#eeeeee]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Your Strategy Session is Confirmed!</h1>
                <p className="text-blue-100">We're looking forward to speaking with you.</p>
              </div>
              
              {/* Confirmation details with enhanced styling */}
              <div className="p-8">
                {formData ? (
                  <div className="space-y-6">
                    <div className="flex items-center p-5 rounded-lg bg-elegant-gray-700/50 border border-elegant-gray-600">
                      <Calendar className="h-8 w-8 text-elegant-blue-400 mr-4" />
                      <div>
                        <h3 className="font-medium text-white text-lg">Your appointment details:</h3>
                        <div className="flex items-center mt-2 text-elegant-gray-200">
                          <span className="text-lg font-medium">
                            {formData.date && new Date(formData.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Clock className="h-4 w-4 mx-2 text-elegant-blue-400" />
                          <span className="text-lg font-medium">{formData.time} ({formData.timezone})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 bg-elegant-gray-700/30 p-5 rounded-lg border border-elegant-gray-600/50">
                      <h3 className="font-medium text-white text-lg">Your information:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-elegant-gray-700/20 p-3 rounded-lg">
                          <p className="text-elegant-gray-400 text-sm">Name</p>
                          <p className="text-white font-medium">{formData.name}</p>
                        </div>
                        <div className="bg-elegant-gray-700/20 p-3 rounded-lg">
                          <p className="text-elegant-gray-400 text-sm">Email</p>
                          <p className="text-white font-medium">{formData.email}</p>
                        </div>
                        <div className="bg-elegant-gray-700/20 p-3 rounded-lg">
                          <p className="text-elegant-gray-400 text-sm">Company</p>
                          <p className="text-white font-medium">{formData.company}</p>
                        </div>
                        {formData.phone && (
                          <div className="bg-elegant-gray-700/20 p-3 rounded-lg">
                            <p className="text-elegant-gray-400 text-sm">Phone</p>
                            <p className="text-white font-medium">{formData.phone}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {formData.message && (
                      <div className="bg-elegant-gray-700/30 p-5 rounded-lg border border-elegant-gray-600/50">
                        <p className="text-elegant-gray-400 text-sm">Additional information</p>
                        <p className="text-white mt-1">{formData.message}</p>
                      </div>
                    )}
                    
                    <div className="bg-elegant-gray-700/30 p-5 rounded-lg border border-elegant-gray-600/50">
                      <h3 className="font-medium text-white text-lg mb-3">What happens next?</h3>
                      <ul className="space-y-3 text-elegant-gray-200">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>You'll receive a confirmation email with meeting details</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>A calendar invitation will be sent to your email</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>Our team will review your information before the call</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-elegant-gray-300 mb-4">Appointment details unavailable.</p>
                    <Link to="/schedule">
                      <Button variant="outline" className="bg-transparent border-elegant-gray-600 text-white hover:bg-elegant-gray-700">
                        Return to Schedule Page
                      </Button>
                    </Link>
                  </div>
                )}
                
                <div className="mt-8 pt-6 border-t border-elegant-gray-700">
                  <Link to="/">
                    <Button variant="ghost" className="text-elegant-gray-300 hover:text-white">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleConfirmation;
