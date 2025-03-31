
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-900 via-elegant-gray-900 to-elegant-blue-800 z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxOTJiNTgiIG9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE5MmI1OCIgb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4 leading-tight">
            Ready to Transform Your Construction Operations?
          </h2>
        </div>
        
        <div className="bg-elegant-gray-800/50 backdrop-blur-md border border-elegant-gray-700 rounded-2xl p-8 max-w-lg mx-auto shadow-xl">
          <div className="text-center">
            <Button asChild size="lg" className="w-full gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 rounded-lg group">
              <Link to="/schedule">
                Book Free Strategy Session
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <p className="text-center text-elegant-gray-300 text-sm mt-4">
              Limited availability. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
