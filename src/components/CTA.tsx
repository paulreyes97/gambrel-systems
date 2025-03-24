
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gambrel-black text-white py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Construction Operations?
        </h2>
        <p className="body-md text-gray-400 mb-10 max-w-2xl mx-auto">
          Join leading construction companies already using Gambrel Systems to optimize their workflows, reduce costs, and deliver projects on time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="rounded-md bg-white text-black hover:bg-gray-200">
            <Link to="/contact">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md border-white text-white hover:bg-white/10">
            <Link to="/solutions">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
