
import { ArrowRight, BadgeCheck, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-white via-elegant-gray-100 to-elegant-blue-200 bg-clip-text text-transparent mb-4 leading-tight">
            Ready to Transform Your Construction Operations?
          </h2>
          <p className="text-elegant-gray-300 text-lg mb-8">
            Book a free strategy session with our experts and discover how our AI solutions can revolutionize your workflows.
          </p>
        </div>
        
        <div className="bg-elegant-gray-800/50 backdrop-blur-md border border-elegant-gray-700 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">Free Strategy Session</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <BadgeCheck size={16} className="text-elegant-blue-400 mr-2 mt-1" />
                  <p className="text-elegant-gray-300">Personalized AI implementation plan</p>
                </li>
                <li className="flex items-start">
                  <Clock size={16} className="text-elegant-blue-400 mr-2 mt-1" />
                  <p className="text-elegant-gray-300">30-minute consultation with AI specialists</p>
                </li>
                <li className="flex items-start">
                  <Calendar size={16} className="text-elegant-blue-400 mr-2 mt-1" />
                  <p className="text-elegant-gray-300">Flexible scheduling to fit your availability</p>
                </li>
              </ul>
            </div>
            
            <Button asChild size="lg" className="w-full gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 rounded-lg group">
              <Link to="/schedule">
                Book Free Strategy Session
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <p className="text-center text-elegant-gray-500 text-sm">
              Limited availability. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
