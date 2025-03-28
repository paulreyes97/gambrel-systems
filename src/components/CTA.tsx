
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-elegant-gray-900 text-white py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Construction Operations?
        </h2>
        <p className="body-md text-elegant-gray-300 mb-10 max-w-2xl mx-auto">
          Let us help you implement AI solutions that streamline your workflows, reduce costs, and increase your operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="rounded-md bg-gradient-to-r from-elegant-blue-500 to-elegant-blue-600 hover:from-elegant-blue-600 hover:to-elegant-blue-700 text-white">
            <Link to="/contact">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
