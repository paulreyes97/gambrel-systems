import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0030A0] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-md">
                <img 
                  src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
                  alt="Gambrel Systems Logo" 
                  className="h-10"
                />
              </div>
              <span className="font-montserrat font-semibold text-xl text-white">Gambrel Systems</span>
            </Link>
            <p className="text-sm text-elegant-blue-200 max-w-xs mt-4">
              Transforming businesses through intelligent AI automation, enhancing productivity, and driving strategic growth.
            </p>
          </div>

          <div className="space-y-4 mt-8 md:mt-0">
            <div className="pt-2">
              <p className="text-elegant-blue-200 mb-2"><span className="font-medium">Phone:</span> +1 (786) 321-8832</p>
              <p className="text-elegant-blue-200 mb-2"><span className="font-medium">Email:</span> <a href="mailto:support@gambrelsystems.com" className="hover:underline hover:text-elegant-blue-100 transition-colors">support@gambrelsystems.com</a></p>
              <p className="text-elegant-blue-200"><span className="font-medium">Address:</span> 6515 East Union Avenue<br />Suite 491<br />Denver, CO 80237<br />United States</p>
              <div className="mt-6">
                <a 
                  href="https://www.linkedin.com/company/gambrel-systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-elegant-blue-800 hover:bg-elegant-blue-700 h-10 w-10 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-elegant-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-elegant-blue-300">
            &copy; {currentYear} Gambrel Systems. All rights reserved.{" "}
            <Link to="/privacy" className="hover:underline ml-2">Privacy</Link>{" "}
            <Link to="/terms" className="hover:underline ml-2">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
