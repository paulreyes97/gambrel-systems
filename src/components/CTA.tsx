
import { ArrowRight, Calendar, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-elegant-gray-100 to-elegant-blue-200 bg-clip-text text-transparent mb-6">
            Ready to Transform Your Construction Operations?
          </h2>
          <p className="text-elegant-gray-300 text-lg mb-8">
            Book a free strategy session with our experts and discover how our AI solutions can revolutionize your workflows, reduce costs, and increase efficiency.
          </p>
        </div>
        
        <div className="bg-elegant-gray-800/50 backdrop-blur-md border border-elegant-gray-700 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Free Strategy Session</h3>
              <p className="text-elegant-gray-300 mb-6">
                Our experts will analyze your current operations and create a customized plan to implement AI solutions tailored to your specific needs.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-elegant-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <BadgeCheck size={16} className="text-elegant-blue-400" />
                  </div>
                  <p className="text-elegant-gray-300">Personalized AI implementation roadmap</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-elegant-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <Clock size={16} className="text-elegant-blue-400" />
                  </div>
                  <p className="text-elegant-gray-300">30-minute consultation with AI specialists</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-elegant-blue-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <Calendar size={16} className="text-elegant-blue-400" />
                  </div>
                  <p className="text-elegant-gray-300">Flexible scheduling to fit your availability</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-elegant-gray-900/70 backdrop-blur-md rounded-xl p-6 border border-elegant-gray-800">
              <h4 className="text-lg font-medium text-white mb-4">Schedule Your Session Now</h4>
              <p className="text-elegant-gray-400 mb-6">
                No commitment required. Find out how our AI solutions can transform your business operations.
              </p>
              
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-elegant-blue-500 to-indigo-500 hover:from-elegant-blue-600 hover:to-indigo-600 text-white border-0 h-14 rounded-lg group">
                <Link to="/schedule">
                  Book Free Strategy Session
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <p className="text-center text-elegant-gray-500 text-sm mt-4">
                Limited availability. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
