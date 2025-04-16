
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-elegant-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            Get in touch with us to learn how our AI automation solutions can help your business achieve greater efficiency and growth.
          </p>
          <Button asChild size="lg" className="gradient-button bg-gradient-to-r from-[#555555] via-[#C8C8C9] to-[#403E43] hover:from-[#C8C8C9] hover:via-[#F1F1F1] hover:to-[#9F9EA1] text-elegant-gray-900 font-semibold border-0 h-14 px-6 text-base rounded-xl shadow-md transition-all duration-300">
            <Link to="/">
              Contact Us
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
