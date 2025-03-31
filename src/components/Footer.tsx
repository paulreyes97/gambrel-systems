
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
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
            <p className="text-sm text-gray-300 max-w-xs mt-4">
              Transforming construction with intelligent automation solutions powered by advanced AI technology.
            </p>
            
            <div className="mt-8">
              <h4 className="font-montserrat font-bold text-white text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about#top" className="text-gray-300 hover:text-elegant-blue-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers#top" className="text-gray-300 hover:text-elegant-blue-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact#top" className="text-gray-300 hover:text-elegant-blue-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 mt-8 md:mt-0">
            <div className="pt-2">
              <p className="text-gray-300 mb-2"><span className="font-medium">Phone:</span> +1 (786) 321-8832</p>
              <p className="text-gray-300 mb-2"><span className="font-medium">Email:</span> <a href="mailto:support@gambrelsystems.com" className="hover:underline hover:text-elegant-blue-300 transition-colors">support@gambrelsystems.com</a></p>
              <p className="text-gray-300"><span className="font-medium">Address:</span> 180 Gamble Ln, Pueblo, CO 81001</p>
              <div className="mt-6">
                <a 
                  href="https://www.linkedin.com/company/gambrel-systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#00008b] hover:bg-[#000066] h-10 w-10 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e293b] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Gambrel Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy#top" className="text-sm text-gray-400 hover:text-elegant-blue-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms#top" className="text-sm text-gray-400 hover:text-elegant-blue-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
