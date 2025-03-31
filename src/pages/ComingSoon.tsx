
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-6">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/#solutions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Solutions
            </Link>
          </Button>

          <div className="bg-white rounded-lg p-8 shadow-sm mb-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-elegant-gray-100 p-4 rounded-full">
                <Clock className="h-12 w-12 text-[#1E3A8A]" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold font-display mb-6">More Solutions Coming Soon</h1>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              As technology evolves, we continuously expand our service offerings to meet the changing needs of the construction industry. Our research and development team is constantly exploring emerging technologies and innovative applications to provide you with cutting-edge solutions that maintain your competitive advantage.
            </p>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 font-display">Stay Updated</h2>
              <p className="mb-8">
                Subscribe to our newsletter or schedule a consultation to learn about our upcoming solutions and be the first to know when new services are available.
              </p>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 rounded-lg group">
                <Link to="/schedule">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ComingSoon;
