
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gray-900 via-elegant-blue-900 to-elegant-gray-800"></div>
      
      {/* Add floating elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-elegant-blue-600/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-elegant-blue-700/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-elegant-gray-200 to-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-elegant-gray-300 leading-relaxed">
            Get in touch with us to learn how our AI automation solutions can help your business achieve greater efficiency and growth.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="gradient-button bg-gradient-to-r from-elegant-blue-600 via-elegant-blue-500 to-elegant-blue-400 hover:from-elegant-blue-500 hover:via-elegant-blue-400 hover:to-elegant-blue-300 text-white font-semibold border-0 h-14 px-8 text-lg rounded-xl group shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <Link to="/">
              Contact Us
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
